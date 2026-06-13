'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { gallerySlots } from '@/config/media-slots';
import { eventVideoSlots, foodVideoSlots } from '@/config/video-slots';
import GalleryGrid from '@/components/GalleryGrid';
import VerticalVideoReel from '@/components/VerticalVideoReel';

export default function GalleryPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto px-4">
        <PageHero
          eyebrow="Gallery"
          title="The venue, the setup, the celebration"
          description="Photos and video from events, catering, and our halls."
          align="center"
          className="mx-auto max-w-3xl"
        />
      </div>

      <VerticalVideoReel eyebrow="Events" title="Event highlights" slots={eventVideoSlots} />

      <VerticalVideoReel eyebrow="Catering" title="Food & table setups" slots={foodVideoSlots} />

      <section className="section-edge container mx-auto border-t px-4 pt-16">
        <SectionHeading title="The venue" subtitle="Lobby, halls, stage, bar, and exterior." align="left" />
        <GalleryGrid slots={gallerySlots} columns={3} />
      </section>
    </div>
  );
}
