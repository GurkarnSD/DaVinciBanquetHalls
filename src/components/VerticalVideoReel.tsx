'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import SectionHeading from './SectionHeading';
import VerticalVideo from './VerticalVideo';

const DEFAULT_IDLE_PLAYBACK_LIMIT = 4;

const getCenteredIndexes = (indexes: number[], limit: number) => {
  if (indexes.length <= limit) return indexes;

  const startIndex = Math.floor((indexes.length - limit) / 2);
  return indexes.slice(startIndex, startIndex + limit);
};

interface VerticalVideoReelProps {
  slots: VideoSlot[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  maxSlots?: number;
  idlePlaybackLimit?: number;
}

export default function VerticalVideoReel({
  slots,
  eyebrow,
  title,
  maxSlots = 8,
  idlePlaybackLimit = DEFAULT_IDLE_PLAYBACK_LIMIT,
}: VerticalVideoReelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLDivElement> | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(() => new Set());

  const visibleSlots = useMemo(() => slots.slice(0, maxSlots), [maxSlots, slots]);
  const movingSlots = useMemo(() => [...visibleSlots, ...visibleSlots], [visibleSlots]);
  const playbackLimit = Math.max(1, Math.floor(idlePlaybackLimit));

  useEffect(() => {
    if (movingSlots.length === 0) return;

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

            const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
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
      { root, threshold: [0, 0.35, 0.65] }
    );

    itemRefs.current?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [movingSlots]);

  const idlePlayableIndexes = useMemo(() => {
    const visiblePlayableIndexes = Array.from(visibleIndexes)
      .filter((index) => index < movingSlots.length)
      .sort((firstIndex, secondIndex) => firstIndex - secondIndex);
    const fallbackIndexes = movingSlots.map((_, index) => index);

    return new Set(getCenteredIndexes(visiblePlayableIndexes.length > 0 ? visiblePlayableIndexes : fallbackIndexes, playbackLimit));
  }, [movingSlots, playbackLimit, visibleIndexes]);

  if (slots.length === 0) return null;

  const showHeader = Boolean(title) || Boolean(eyebrow);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="mb-8 md:mb-10">
            <SectionHeading eyebrow={eyebrow} title={title ?? ''} align="left" className="mb-0 max-w-2xl" />
          </div>
        )}

        <div
          ref={scrollRef}
          className="video-reel-scroll -mx-4 overflow-hidden px-4 pb-4"
          aria-label={title ? `${title} video reel` : 'Video reel'}
        >
          <div className="video-reel-track flex w-max gap-4 md:gap-5">
            {movingSlots.map((slot, index) => {
              const shouldPlay = idlePlayableIndexes.has(index);

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
                  aria-hidden={index >= visibleSlots.length}
                  className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px] md:max-w-[245px]"
                >
                  <VerticalVideo
                    slot={slot}
                    autoPlay={shouldPlay}
                    preload={shouldPlay ? 'auto' : 'metadata'}
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
