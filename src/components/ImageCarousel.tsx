'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import type { MediaSlot } from '@/config/media-slots';
import MediaPlaceholder from './MediaPlaceholder';

interface ImageCarouselProps {
  slots: MediaSlot[];
  autoPlayInterval?: number;
  className?: string;
}

export default function ImageCarousel({ slots, autoPlayInterval = 6000, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (slots.length === 0) return;
      const next = ((index % slots.length) + slots.length) % slots.length;
      setCurrentIndex(next);
    },
    [slots.length]
  );

  const goToNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goToPrevious = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (slots.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slots.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slots.length, autoPlayInterval]);

  if (slots.length === 0) return null;

  return (
    <div className={`bg-theme-media relative h-full w-full overflow-hidden ${className}`}>
      {slots.map((slot, index) => (
        <div
          key={slot.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          {slot.src ? (
            <Image
              src={slot.src}
              alt={slot.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={index === 0}
              quality={index === 0 ? 85 : 80}
            />
          ) : (
            <MediaPlaceholder title={slot.title} aspect={slot.aspect} category={slot.category} slotId={slot.id} />
          )}
        </div>
      ))}

      {slots.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute top-1/2 left-3 z-20 -translate-y-1/2 border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute top-1/2 right-3 z-20 -translate-y-1/2 border border-white/20 bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Next slide"
          >
            <HiChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slots.map((slot, index) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-1.5 transition-all ${
                  index === currentIndex ? 'bg-davinci-gold w-8' : 'hover:bg-davinci-gold/60 w-1.5 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
