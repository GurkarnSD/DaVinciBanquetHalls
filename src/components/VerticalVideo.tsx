'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import {
  getClipAssignment,
  isPlaybackSuspended,
  measureClip,
  playbackStartDelay,
  registerClip,
  subscribePlayback,
  type ClipAssignment,
} from '@/lib/video-playback';
import MediaPlaceholder from './MediaPlaceholder';

interface VerticalVideoProps {
  slot: VideoSlot;
  className?: string;
  showLabel?: boolean;
  /** When false, keep the poster only — no MP4 network work. */
  active?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
}

const LOOKAHEAD_MARGIN = '180px 32% 180px 0px';

export default function VerticalVideo({
  slot,
  className = '',
  showLabel = false,
  active = true,
  autoPlay = true,
  controls = false,
}: VerticalVideoProps) {
  const figureRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const registrationRef = useRef<ReturnType<typeof registerClip> | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [trackedSrc, setTrackedSrc] = useState(slot.src);

  const assignment = useSyncExternalStore<ClipAssignment>(
    subscribePlayback,
    () => {
      const id = registrationRef.current?.id;
      return id == null ? 'idle' : getClipAssignment(id);
    },
    () => 'idle',
  );
  const suspended = useSyncExternalStore(subscribePlayback, isPlaybackSuspended, () => false);

  if (slot.src !== trackedSrc) {
    setTrackedSrc(slot.src);
    setHasError(false);
    setIsReady(false);
  }

  const shouldBuffer = autoPlay && (assignment === 'play' || assignment === 'warm');
  const shouldMount = Boolean(slot.src) && active && !hasError && shouldBuffer;
  const hasPoster = Boolean(slot.poster);
  const showFallbackPlaceholder = !hasPoster && !isReady;
  const [mountedVideo, setMountedVideo] = useState(shouldMount);
  if (mountedVideo !== shouldMount) {
    setMountedVideo(shouldMount);
    if (!shouldMount) setIsReady(false);
  }

  useEffect(() => {
    if (!slot.src || !active) return;

    const registration = registerClip(slot.src);
    registrationRef.current = registration;

    const figure = figureRef.current;
    let observer: IntersectionObserver | null = null;
    if (figure && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          registration.update(measureClip(entry));
        },
        { rootMargin: LOOKAHEAD_MARGIN, threshold: [0, 0.2, 0.35, 0.55, 0.75, 1] },
      );
      observer.observe(figure);
    } else if (figure) {
      registration.update({ ratio: 1, near: true, soon: 0 });
    }

    return () => {
      observer?.disconnect();
      registration.unregister();
      if (registrationRef.current === registration) registrationRef.current = null;
    };
  }, [slot.src, active]);

  useEffect(() => {
    if (!shouldMount) return;

    const video = videoRef.current;
    if (!video) return;

    let timer = 0;
    let cancelled = false;

    const stop = () => {
      cancelled = true;
      window.clearTimeout(timer);
    };

    if (!autoPlay || assignment !== 'play' || suspended) {
      video.pause();
      return stop;
    }

    const begin = () => {
      if (cancelled || document.hidden) return;
      void video.play().catch(() => {
        // Autoplay can be blocked; the poster stays visible.
      });
    };

    const delay = playbackStartDelay(video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA);
    timer = window.setTimeout(begin, delay);

    return () => {
      stop();
      video.pause();
    };
  }, [shouldMount, assignment, autoPlay, suspended, slot.src]);

  return (
    <figure
      ref={figureRef}
      className={`media-frame relative mx-auto w-full max-w-[260px] sm:max-w-[280px] ${className}`}
    >
      <div className="relative aspect-9/16 w-full overflow-hidden bg-[var(--bg-media)]">
        {hasPoster && (
          <Image
            src={slot.poster!}
            alt=""
            fill
            sizes="(max-width: 640px) 62vw, 245px"
            className="object-cover"
            loading="lazy"
            fetchPriority="low"
            aria-hidden
          />
        )}
        {showFallbackPlaceholder && <MediaPlaceholder />}
        {shouldMount && (
          <video
            ref={videoRef}
            key={slot.src}
            aria-label={slot.title}
            controls={controls}
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            poster={slot.poster}
            preload="auto"
            controlsList="nodownload noplaybackrate noremoteplayback"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${isReady ? 'opacity-100' : 'opacity-0'}`}
            onError={() => setHasError(true)}
            onCanPlay={() => setIsReady(true)}
            onPlaying={() => setIsReady(true)}
          >
            <source src={slot.src} type="video/mp4" />
          </video>
        )}
      </div>

      {showLabel && (
        <figcaption className="border-t border-white/10 bg-black/70 px-3 py-2">
          <p className="text-xs leading-snug tracking-wide text-gray-300 uppercase">{slot.title}</p>
        </figcaption>
      )}
    </figure>
  );
}
