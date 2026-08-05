'use client';

import { useEffect, useState, type ComponentProps } from 'react';
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
  fill,
  ...imageProps
}: MediaImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [slot.src]);

  if (!slot.src) {
    return <MediaPlaceholder className={className} />;
  }

  const shellClass = fill
    ? `bg-theme-media absolute inset-0 overflow-hidden ${className}`
    : `bg-theme-media relative h-full w-full overflow-hidden ${className}`;

  return (
    <div className={shellClass}>
      {!isLoaded && <MediaPlaceholder className={`absolute inset-0 ${placeholderClassName}`} />}
      <Image
        {...imageProps}
        fill={fill}
        src={slot.src}
        alt={slot.title}
        className={imageClassName}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
}
