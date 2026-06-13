'use client';

import type { MediaSlot, SlotLayout } from '@/config/media-slots';
import MediaImage from './MediaImage';

interface GalleryGridProps {
  slots: MediaSlot[];
  columns?: number;
}

const layoutClasses: Record<SlotLayout, string> = {
  landscape: 'aspect-[3/2]',
  square: 'aspect-square',
  banner: 'aspect-[21/9]',
  card: 'aspect-[3/2]',
};

function slotAspectClass(slot: MediaSlot): string {
  return layoutClasses[slot.layout ?? 'square'];
}

function slotSpanClass(slot: MediaSlot, columns: number): string {
  if (slot.layout !== 'banner') return '';
  if (columns === 2) return 'md:col-span-2';
  if (columns === 4) return 'md:col-span-2 lg:col-span-4';
  return 'md:col-span-2 lg:col-span-3';
}

function slotSizes(slot: MediaSlot): string {
  if (slot.layout === 'banner') return '(max-width: 768px) 100vw, 1200px';
  return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
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
        <div key={slot.id} className={`media-frame relative ${slotAspectClass(slot)} ${slotSpanClass(slot, columns)}`}>
          <MediaImage slot={slot} fill sizes={slotSizes(slot)} imageClassName="object-cover" quality={80} />
        </div>
      ))}
    </div>
  );
}
