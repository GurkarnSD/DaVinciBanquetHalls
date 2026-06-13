'use client';

import { useEffect, useRef, useState } from 'react';
import type { VideoSlot } from '@/config/video-slots';
import MediaPlaceholder from './MediaPlaceholder';

interface VerticalVideoProps {
  slot: VideoSlot;
  className?: string;
  showLabel?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
}

export default function VerticalVideo({
  slot,
  className = '',
  showLabel = false,
  autoPlay = true,
  controls = false,
}: VerticalVideoProps) {
  const figureRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const showPlaceholder = !slot.src || hasError || !isNearViewport;

  useEffect(() => {
    if (!slot.src || hasError) return;

    const figure = figureRef.current;
    if (!figure || !('IntersectionObserver' in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearViewport(Boolean(entry?.isIntersecting));
      },
      { rootMargin: '160px 120px', threshold: 0.01 }
    );

    observer.observe(figure);

    return () => observer.disconnect();
  }, [slot.src, hasError]);

  useEffect(() => {
    if (!slot.src || hasError || !autoPlay || !isNearViewport) return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      void video.play().catch(() => {
        // Some browser/device settings reject autoplay. The frame remains as a still preview.
      });
    };

    if (!('IntersectionObserver' in window)) {
      playVideo();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [slot.src, hasError, autoPlay, isNearViewport]);

  useEffect(() => {
    if (isNearViewport) return;

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.removeAttribute('src');
    video.querySelectorAll('source').forEach((source) => source.removeAttribute('src'));
    video.load();
  }, [isNearViewport]);

  return (
    <figure
      ref={figureRef}
      className={`media-frame relative mx-auto w-full max-w-[260px] sm:max-w-[280px] ${className}`}
    >
      <div className="relative aspect-9/16 w-full">
        {showPlaceholder ? (
          <MediaPlaceholder />
        ) : (
          <video
            ref={videoRef}
            aria-label={slot.title}
            controls={controls}
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            preload="none"
            controlsList="nodownload noplaybackrate noremoteplayback"
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          >
            <source src={slot.src} type="video/mp4" />
          </video>
        )}
      </div>

      {showLabel && !showPlaceholder && (
        <figcaption className="border-t border-white/10 bg-black/70 px-3 py-2">
          <p className="text-xs leading-snug tracking-wide text-gray-300 uppercase">{slot.title}</p>
        </figcaption>
      )}
    </figure>
  );
}
