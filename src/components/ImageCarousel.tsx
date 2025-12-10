'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

export default function ImageCarousel({ images, autoPlayInterval = 8000, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const startTimer = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    };

    startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, autoPlayInterval]);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, autoPlayInterval);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  if (images.length === 0) return null;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 1,
    }),
  };

  return (
    <div className={`relative h-full w-full overflow-hidden bg-black ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] ?? '/assets/images/slider-1.jpg'}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentIndex === 0}
            quality={currentIndex === 0 ? 85 : 80}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
            aria-label="Next slide"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
