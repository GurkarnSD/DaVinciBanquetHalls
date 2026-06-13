'use client';

import { useState, type ComponentProps } from 'react';
import Image from 'next/image';
import type { MediaSlot } from '@/config/media-slots';
import MediaPlaceholder from './MediaPlaceholder';

type NextImageProps = ComponentProps<typeof Image>;

interface MediaImageProps extends Omit<NextImageProps, 'src' | 'alt' | 'className' | 'slot'> {
  slot: MediaSlot;
  className?: string;
  imageClassName?: string;
  placeholderClassName?: string;
}

export default function MediaImage({
  slot,
  className = '',
  imageClassName = '',
  placeholderClassName = '',
  onLoad,
  ...imageProps
}: MediaImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!slot.src) {
    return <MediaPlaceholder className={className} />;
  }

  return (
    <div className={`bg-theme-media relative h-full w-full overflow-hidden ${className}`}>
      <MediaPlaceholder
        className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'} ${placeholderClassName}`}
      />
      <Image
        {...imageProps}
        src={slot.src}
        alt={slot.title}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imageClassName}`}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}
