'use client';

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import styles from './video-reel.module.css';
import { setPlaybackCeiling } from '@/lib/video-playback';
import SectionHeading from './SectionHeading';
import VerticalVideo from './VerticalVideo';

interface VerticalVideoReelProps {
  slots: VideoSlot[];
  title?: string;
  subtitle?: string;
  maxSlots?: number;
  /** Soft cap on simultaneous decoders while this reel is mounted. */
  idlePlaybackLimit?: number;
}

export default function VerticalVideoReel({
  slots,
  title,
  maxSlots = 6,
  idlePlaybackLimit = 3,
}: VerticalVideoReelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [reelInView, setReelInView] = useState(false);
  const pageVisible = useSyncExternalStore(
    (onStoreChange) => {
      document.addEventListener('visibilitychange', onStoreChange);
      return () => document.removeEventListener('visibilitychange', onStoreChange);
    },
    () => document.visibilityState === 'visible',
    () => true,
  );

  const visibleSlots = useMemo(() => slots.slice(0, maxSlots), [maxSlots, slots]);
  const movingSlots = useMemo(() => [...visibleSlots, ...visibleSlots], [visibleSlots]);
  const playbackLimit = Math.max(1, Math.floor(idlePlaybackLimit));
  const primaryCount = visibleSlots.length;
  const motionOn = reelInView && pageVisible;

  useEffect(() => setPlaybackCeiling(playbackLimit), [playbackLimit]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const root = scrollRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setReelInView(Boolean(entry?.isIntersecting));
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

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
          className={`${styles.scroll} video-reel-scroll -mx-4 overflow-hidden px-4 pb-4`}
          aria-label={title ? `${title} video reel` : 'Video reel'}
        >
          <div className={`${styles.track} video-reel-track flex w-max ${motionOn ? '' : styles.paused}`}>
            {movingSlots.map((slot, index) => (
              <div
                key={`${slot.id}-${index}`}
                aria-hidden={index >= primaryCount}
                className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px] md:max-w-[245px]"
              >
                <VerticalVideo slot={slot} active={reelInView} autoPlay className="max-w-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
