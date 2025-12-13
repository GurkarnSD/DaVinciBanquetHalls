'use client';

import { useState } from 'react';

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function VideoBackground({
  videoSrc,
  fallbackImage = '/assets/images/carousel/slider-1.jpg',
  overlay = true,
  children,
}: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {videoSrc && !videoError ? (
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
      ) : (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${fallbackImage})`,
          }}
        />
      )}
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      {children && (
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="w-full">{children}</div>
        </div>
      )}
    </div>
  );
}
