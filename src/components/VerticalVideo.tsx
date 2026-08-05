'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import MediaPlaceholder from './MediaPlaceholder';

interface VerticalVideoProps {
  slot: VideoSlot;
  className?: string;
  showLabel?: boolean;
  /** When false, keep the poster only — no MP4 network work. */
  active?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

const subscribeToClient = () => () => {};

export default function VerticalVideo({
  slot,
  className = '',
  showLabel = false,
  active = true,
  autoPlay = true,
  controls = false,
  preload = 'none',
}: VerticalVideoProps) {
  const figureRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [trackedSrc, setTrackedSrc] = useState(slot.src);
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);
  const lacksIntersectionObserver = isClient && !('IntersectionObserver' in window);

  if (slot.src !== trackedSrc) {
    setTrackedSrc(slot.src);
    setHasError(false);
    setIsNearViewport(false);
    setIsReady(false);
  }

  const effectivelyNearViewport = lacksIntersectionObserver || isNearViewport;
  const shouldMountVideo = Boolean(slot.src) && active && !hasError && effectivelyNearViewport;
  const hasPoster = Boolean(slot.poster);
  const showFallbackPlaceholder = !hasPoster && (!shouldMountVideo || !isReady);

  useEffect(() => {
    if (!slot.src || hasError || !active || lacksIntersectionObserver) return;

    const figure = figureRef.current;
    if (!figure) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(Boolean(entry?.isIntersecting));
      },
      { rootMargin: '120px 40px', threshold: 0.01 }
    );

    observer.observe(figure);
    return () => observer.disconnect();
  }, [slot.src, hasError, active, lacksIntersectionObserver]);

  useEffect(() => {
    if (!shouldMountVideo) return;

    const video = videoRef.current;
    if (!video) return;

    if (!autoPlay) {
      video.pause();
      return () => {
        video.pause();
      };
    }

    const playVideo = () => {
      void video.play().catch(() => {
        // Autoplay can be blocked; poster stays visible.
      });
    };

    if (lacksIntersectionObserver) {
      playVideo();
      return () => {
        video.pause();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.25) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.25, 0.5] }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldMountVideo, autoPlay, lacksIntersectionObserver, slot.src]);

  useEffect(() => {
    if (shouldMountVideo) return;
    setIsReady(false);
  }, [shouldMountVideo]);

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
            aria-hidden
          />
        )}
        {showFallbackPlaceholder && <MediaPlaceholder />}
        {shouldMountVideo && (
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
            preload={preload === 'auto' ? 'metadata' : preload}
            controlsList="nodownload noplaybackrate noremoteplayback"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
            onError={() => setHasError(true)}
            onPlaying={() => setIsReady(true)}
            onLoadedData={() => {
              if (!autoPlay) setIsReady(true);
            }}
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
