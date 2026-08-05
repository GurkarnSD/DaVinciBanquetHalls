'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import SectionHeading from './SectionHeading';
import VerticalVideo from './VerticalVideo';

/**
 * Soft ceiling so a wide desktop strip cannot open a dozen decoders.
 * Posters carry the look; we play every on-screen unique clip up to this cap.
 */
const DEFAULT_IDLE_PLAYBACK_LIMIT = 3;

interface VerticalVideoReelProps {
  slots: VideoSlot[];
  title?: string;
  subtitle?: string;
  maxSlots?: number;
  idlePlaybackLimit?: number;
}

export default function VerticalVideoReel({
  slots,
  title,
  maxSlots = 6,
  idlePlaybackLimit = DEFAULT_IDLE_PLAYBACK_LIMIT,
}: VerticalVideoReelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLDivElement> | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(() => new Set());
  const [reelInView, setReelInView] = useState(false);

  const visibleSlots = useMemo(() => slots.slice(0, maxSlots), [maxSlots, slots]);
  // Duplicate for seamless marquee — posters on both; only one instance of each clip plays.
  const movingSlots = useMemo(() => [...visibleSlots, ...visibleSlots], [visibleSlots]);
  const playbackLimit = Math.max(1, Math.floor(idlePlaybackLimit));
  const primaryCount = visibleSlots.length;

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setReelInView(true);
      return;
    }

    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setReelInView(Boolean(entry?.isIntersecting));
      },
      { rootMargin: '160px 0px', threshold: 0.05 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (movingSlots.length === 0 || !reelInView) return;
    if (!('IntersectionObserver' in window)) return;

    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIndexes((currentIndexes) => {
          const nextIndexes = new Set(currentIndexes);
          let hasChanged = false;

          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.reelIndex);
            if (!Number.isFinite(index)) return;

            const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
            if (isVisible && !nextIndexes.has(index)) {
              nextIndexes.add(index);
              hasChanged = true;
            } else if (!isVisible && nextIndexes.delete(index)) {
              hasChanged = true;
            }
          });

          return hasChanged ? nextIndexes : currentIndexes;
        });
      },
      { root, threshold: [0, 0.2, 0.45, 0.7] }
    );

    itemRefs.current?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [movingSlots, reelInView]);

  const playableIndexes = useMemo(() => {
    if (!reelInView) return new Set<number>();

    const sorted = Array.from(visibleIndexes).sort((a, b) => a - b);
    const chosen = new Set<number>();
    const seenIds = new Set<string>();

    const consider = (index: number) => {
      if (chosen.size >= playbackLimit) return;
      const slot = movingSlots[index];
      if (!slot || seenIds.has(slot.id)) return;
      seenIds.add(slot.id);
      chosen.add(index);
    };

    if (sorted.length === 0) {
      for (let index = 0; index < Math.min(playbackLimit, primaryCount); index += 1) {
        consider(index);
      }
      return chosen;
    }

    sorted.forEach(consider);
    return chosen;
  }, [visibleIndexes, reelInView, playbackLimit, movingSlots, primaryCount]);

  if (slots.length === 0) return null;

  const showHeader = Boolean(title);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="mb-8 md:mb-10">
            <SectionHeading title={title ?? ''} align="left" className="mb-0 max-w-2xl" />
          </div>
        )}

        <div
          ref={scrollRef}
          className="video-reel-scroll -mx-4 overflow-hidden px-4 pb-4"
          aria-label={title ? `${title} video reel` : 'Video reel'}
        >
          <div className="video-reel-track flex w-max gap-4 md:gap-5">
            {movingSlots.map((slot, index) => {
              const shouldPlay = playableIndexes.has(index);

              return (
                <div
                  key={`${slot.id}-${index}`}
                  ref={(node) => {
                    if (!itemRefs.current) {
                      itemRefs.current = new Map();
                    }

                    if (node) {
                      itemRefs.current.set(index, node);
                    } else {
                      itemRefs.current.delete(index);
                    }
                  }}
                  data-reel-index={index}
                  aria-hidden={index >= primaryCount}
                  className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px] md:max-w-[245px]"
                >
                  <VerticalVideo
                    slot={slot}
                    active={shouldPlay}
                    autoPlay={shouldPlay}
                    preload="none"
                    className="max-w-none"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
