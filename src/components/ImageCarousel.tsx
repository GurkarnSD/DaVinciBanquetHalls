'use client';

import { useState, useEffect, useCallback } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import type { MediaSlot } from '@/config/media-slots';
import MediaImage from './MediaImage';

interface ImageCarouselProps {
  slots: MediaSlot[];
  autoPlayInterval?: number;
  className?: string;
}

export default function ImageCarousel({ slots, autoPlayInterval = 4200, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const hasMultipleSlides = slots.length > 1;

  const goTo = useCallback(
    (index: number) => {
      if (slots.length === 0) return;
      const next = ((index % slots.length) + slots.length) % slots.length;
      setCurrentIndex(next);
      setDragStartX(null);
      setDragOffset(0);
    },
    [slots.length]
  );

  const goToNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goToPrevious = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    if (!hasMultipleSlides || isPaused || autoPlayInterval <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slots.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slots.length, autoPlayInterval, hasMultipleSlides, isPaused]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleSlides || (event.pointerType === 'mouse' && event.button !== 0)) return;

    setIsPaused(true);
    setDragStartX(event.clientX);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;

    setDragOffset(event.clientX - dragStartX);
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;

    const swipeThreshold = 56;
    if (dragOffset > swipeThreshold) {
      goToPrevious();
    } else if (dragOffset < -swipeThreshold) {
      goToNext();
    } else {
      setDragStartX(null);
      setDragOffset(0);
    }

    setIsPaused(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  if (slots.length === 0) return null;

  return (
    <div
      className={`bg-theme-media relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex h-full touch-pan-y select-none ${dragStartX === null ? 'transition-transform duration-500 ease-out' : ''}`}
        style={{ transform: `translateX(calc(${-currentIndex * 100}% + ${dragOffset}px))` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        {slots.map((slot, index) => (
          <div key={slot.id} className="relative h-full w-full flex-[0_0_100%]" aria-hidden={index !== currentIndex}>
            <MediaImage
              slot={slot}
              fill
              imageClassName="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={index === 0}
              quality={index === 0 ? 85 : 80}
            />
          </div>
        ))}
      </div>

      {hasMultipleSlides && (
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
                className={`relative h-1.5 overflow-hidden transition-all ${
                  index === currentIndex ? 'w-10 bg-white/25' : 'hover:bg-davinci-gold/60 w-1.5 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              >
                {index === currentIndex && (
                  <span
                    key={`${slot.id}-${currentIndex}`}
                    className="image-carousel-progress bg-davinci-gold absolute inset-y-0 left-0"
                    style={
                      {
                        '--image-carousel-progress-duration': `${autoPlayInterval}ms`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      } as React.CSSProperties
                    }
                  />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
