'use client';

import type { VideoSlot } from '@/config/video-slots';
import SectionHeading from './SectionHeading';
import VerticalVideo from './VerticalVideo';

interface VerticalVideoReelProps {
  slots: VideoSlot[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function VerticalVideoReel({ slots, eyebrow, title }: VerticalVideoReelProps) {
  if (slots.length === 0) return null;

  const showHeader = Boolean(title) || Boolean(eyebrow);
  const movingSlots = [...slots, ...slots];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="mb-8 md:mb-10">
            <SectionHeading eyebrow={eyebrow} title={title ?? ''} align="left" className="mb-0 max-w-2xl" />
          </div>
        )}

        <div
          className="video-reel-scroll -mx-4 overflow-hidden px-4 pb-4"
          aria-label={title ? `${title} video reel` : 'Video reel'}
        >
          <div className="video-reel-track flex w-max gap-4 md:gap-5">
            {movingSlots.map((slot, index) => (
              <div
                key={`${slot.id}-${index}`}
                aria-hidden={index >= slots.length}
                className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px] md:max-w-[245px]"
              >
                <VerticalVideo slot={slot} className="max-w-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
