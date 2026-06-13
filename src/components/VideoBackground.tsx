'use client';

import { useState } from 'react';
import MediaPlaceholder from './MediaPlaceholder';
import type { MediaSlot } from '@/config/media-slots';

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackSlot?: MediaSlot;
  overlay?: boolean;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({
  videoSrc,
  fallbackSlot,
  overlay = true,
  minHeight = 'min-h-screen',
  children,
}: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);
  const showVideo = Boolean(videoSrc) && !videoError;

  return (
    <div className={`relative w-full overflow-hidden ${minHeight}`}>
      {showVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : fallbackSlot ? (
        <div className="absolute inset-0">
          <MediaPlaceholder
            title={fallbackSlot.title}
            aspect={fallbackSlot.aspect}
            category={fallbackSlot.category}
            slotId={fallbackSlot.id}
          />
        </div>
      ) : (
        <div className="bg-davinci-dark absolute inset-0" />
      )}

      {overlay && <div className="absolute inset-0 bg-black/55" />}

      {children && (
        <div className={`relative z-10 flex ${minHeight} items-center px-4 pt-24 pb-16 sm:pt-28 sm:pb-20`}>
          <div className="w-full">{children}</div>
        </div>
      )}
    </div>
  );
}
