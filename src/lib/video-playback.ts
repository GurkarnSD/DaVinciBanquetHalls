export type ClipAssignment = 'play' | 'warm' | 'idle';

export type ClipSnapshot = {
  id: number;
  src: string;
  /** Share of the clip actually inside the viewport, 0–1. */
  ratio: number;
  /** Inside the viewport or the small lookahead margin around it. */
  near: boolean;
  /** Distance in px to the viewport. Clips that already passed sort last. */
  soon: number;
};

const HOLD_RATIO = 0.22;
const START_RATIO = 0.3;
const PREEMPT_RATIO = 0.55;

type Listener = () => void;

type Entry = ClipSnapshot;

const entries = new Map<number, Entry>();
const listeners = new Set<Listener>();
const ceilingTokens = new Map<number, number>();
const assignments = new Map<number, ClipAssignment>();
let nextId = 1;
let ceilingToken = 1;
let playingIds = new Set<number>();
let suspended = false;
let listenersBound = false;
let nextPlayAt = 0;
let recomputeFrame = 0;

function notify() {
  listeners.forEach((listener) => listener());
}

function deviceBudget() {
  if (typeof window === 'undefined') return 2;

  const connection = (
    navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
        addEventListener?: (type: string, listener: () => void) => void;
      };
    }
  ).connection;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || connection?.saveData) return 0;

  const effectiveType = connection?.effectiveType;
  if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g') return 1;

  const narrow = window.matchMedia('(max-width: 767px)').matches;
  const cores = navigator.hardwareConcurrency || 8;
  if (narrow || cores <= 4) return 2;
  return 3;
}

function ensureBudgetListeners() {
  if (listenersBound || typeof window === 'undefined') return;
  listenersBound = true;
  suspended = document.hidden;

  const refresh = () => scheduleRecompute();
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', refresh);
  window.matchMedia('(max-width: 767px)').addEventListener('change', refresh);
  const connection = (
    navigator as Navigator & { connection?: { addEventListener?: (type: string, listener: () => void) => void } }
  ).connection;
  connection?.addEventListener?.('change', refresh);
  document.addEventListener('visibilitychange', () => {
    suspended = document.hidden;
    notify();
  });
}

function playbackBudget() {
  ensureBudgetListeners();
  const ceilings = [...ceilingTokens.values()];
  const ceiling = ceilings.length > 0 ? Math.min(...ceilings) : 3;
  return Math.min(deviceBudget(), ceiling);
}

export function planPlayback(clips: ClipSnapshot[], budget: number, previouslyPlaying: ReadonlySet<number>) {
  if (budget <= 0) return { play: [] as number[], warm: [] as number[] };

  const active = clips.filter((clip) => clip.near || clip.ratio > 0);
  const stickyIds = new Set<number>();
  for (const clip of active) {
    if (previouslyPlaying.has(clip.id) && clip.ratio >= HOLD_RATIO) stickyIds.add(clip.id);
  }

  const best = new Map<string, ClipSnapshot>();
  for (const clip of active) {
    const current = best.get(clip.src);
    if (stickyIds.has(clip.id)) {
      best.set(clip.src, clip);
      continue;
    }
    if (current && stickyIds.has(current.id)) continue;
    if (!current || clip.ratio > current.ratio) best.set(clip.src, clip);
  }

  const ranked = [...best.values()].sort((a, b) => b.ratio - a.ratio);
  const ratioById = new Map(ranked.map((clip) => [clip.id, clip.ratio]));
  const play: number[] = [];
  const selected = new Set<number>();
  const take = (id: number) => {
    play.push(id);
    selected.add(id);
  };

  for (const clip of ranked) {
    if (play.length >= budget) break;
    if (stickyIds.has(clip.id)) take(clip.id);
  }
  for (const clip of ranked) {
    if (play.length >= budget) break;
    if (selected.has(clip.id)) continue;
    if (clip.ratio >= START_RATIO) take(clip.id);
  }

  if (play.length >= budget) {
    const challenger = ranked.find((clip) => !selected.has(clip.id) && clip.ratio >= PREEMPT_RATIO);
    if (challenger) {
      let weakestIndex = 0;
      const ratioOf = (id: number) => ratioById.get(id) ?? 1;
      for (let index = 1; index < play.length; index += 1) {
        if (ratioOf(play[index]!) < ratioOf(play[weakestIndex]!)) weakestIndex = index;
      }
      if (challenger.ratio > ratioOf(play[weakestIndex]!) + 0.2) {
        selected.delete(play[weakestIndex]!);
        play[weakestIndex] = challenger.id;
        selected.add(challenger.id);
      }
    }
  }

  const playing = new Set(play);
  const warmPool = active.filter((clip) => !playing.has(clip.id)).sort((a, b) => a.soon - b.soon || b.ratio - a.ratio);
  const warm = warmPool.length > 0 ? [warmPool[0]!.id] : [];
  return { play, warm };
}

function recompute() {
  const budget = playbackBudget();
  const plan = planPlayback([...entries.values()], budget, playingIds);
  playingIds = new Set(plan.play);
  const play = new Set(plan.play);
  const warm = new Set(plan.warm);
  let changed = false;

  for (const entry of entries.values()) {
    const next: ClipAssignment = play.has(entry.id) ? 'play' : warm.has(entry.id) ? 'warm' : 'idle';
    if (assignments.get(entry.id) !== next) {
      assignments.set(entry.id, next);
      changed = true;
    }
  }

  for (const id of assignments.keys()) {
    if (!entries.has(id)) {
      assignments.delete(id);
      changed = true;
    }
  }

  if (changed) notify();
}

function scheduleRecompute() {
  if (typeof window === 'undefined') {
    recompute();
    return;
  }
  if (recomputeFrame) return;
  recomputeFrame = window.requestAnimationFrame(() => {
    recomputeFrame = 0;
    recompute();
  });
}

export function subscribePlayback(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getClipAssignment(id: number): ClipAssignment {
  return assignments.get(id) ?? 'idle';
}

export function isPlaybackSuspended() {
  return suspended;
}

export function setPlaybackCeiling(limit: number) {
  const token = ceilingToken;
  ceilingToken += 1;
  ceilingTokens.set(token, limit);
  scheduleRecompute();
  return () => {
    ceilingTokens.delete(token);
    scheduleRecompute();
  };
}

export function registerClip(src: string) {
  ensureBudgetListeners();
  const id = nextId;
  nextId += 1;
  entries.set(id, { id, src, ratio: 0, near: false, soon: Number.POSITIVE_INFINITY });
  assignments.set(id, 'idle');
  return {
    id,
    update(next: Pick<ClipSnapshot, 'ratio' | 'near' | 'soon'>) {
      const entry = entries.get(id);
      if (!entry) return;
      if (entry.ratio === next.ratio && entry.near === next.near && entry.soon === next.soon) return;
      entry.ratio = next.ratio;
      entry.near = next.near;
      entry.soon = next.soon;
      scheduleRecompute();
    },
    unregister() {
      entries.delete(id);
      playingIds.delete(id);
      scheduleRecompute();
    },
  };
}

/** Spread decoder startup across a few frames when several clips become ready together. */
export function playbackStartDelay(alreadyBuffered: boolean) {
  if (alreadyBuffered) return 0;
  const now = performance.now();
  if (nextPlayAt < now) nextPlayAt = now;
  const delay = nextPlayAt - now;
  nextPlayAt += 160;
  return delay;
}

export function measureClip(entry: IntersectionObserverEntry) {
  const rect = entry.boundingClientRect;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
  const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
  const area = rect.width * rect.height;
  const ratio = area > 0 ? Math.round(((visibleWidth * visibleHeight) / area) * 100) / 100 : 0;
  const passed = rect.right < 0 || rect.bottom < 0;
  const dx = rect.left > viewportWidth ? rect.left - viewportWidth : rect.right < 0 ? -rect.right : 0;
  const dy = rect.top > viewportHeight ? rect.top - viewportHeight : rect.bottom < 0 ? -rect.bottom : 0;
  return {
    near: entry.isIntersecting,
    ratio,
    soon: (passed ? 10000 : 0) + Math.round(dx + dy),
  };
}
