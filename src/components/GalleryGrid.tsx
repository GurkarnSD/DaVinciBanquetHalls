'use client';

import type { MediaSlot, SlotLayout } from '@/config/media-slots';
import MediaPlaceholder from './MediaPlaceholder';
import Image from 'next/image';

interface GalleryGridProps {
  slots: MediaSlot[];
  columns?: number;
}

const layoutClasses: Record<SlotLayout, string> = {
  landscape: 'aspect-video',
  square: 'aspect-square',
  banner: 'aspect-[21/9]',
  card: 'aspect-[4/3]',
};

function slotAspectClass(slot: MediaSlot): string {
  return layoutClasses[slot.layout ?? 'square'];
}

export default function GalleryGrid({ slots, columns = 3 }: GalleryGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols] ?? gridCols[3]} gap-3`}>
      {slots.map((slot) => (
        <div key={slot.id} className={`media-frame relative ${slotAspectClass(slot)}`}>
          {slot.src ? (
            <Image
              src={slot.src}
              alt={slot.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              quality={80}
            />
          ) : (
            <MediaPlaceholder title={slot.title} aspect={slot.aspect} category={slot.category} slotId={slot.id} />
          )}
        </div>
      ))}
    </div>
  );
}
