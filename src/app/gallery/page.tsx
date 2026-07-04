import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { gallerySlots } from '@/config/media-slots';
import { eventVideoSlots, foodVideoSlots } from '@/config/video-slots';
import GalleryGrid from '@/components/GalleryGrid';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import VerticalVideo from '@/components/VerticalVideo';

export default function GalleryPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto px-4">
        <PageHero
          title="The venue, the setup, the celebration"
          description="Photos and video from events, catering, and our halls."
          align="center"
          className="mx-auto max-w-3xl"
        />
      </div>

      <VerticalVideoReel title="Event highlights" slots={eventVideoSlots} />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <ScrollReveal>
          <SectionHeading title="Food and table setups" align="left" className="max-w-2xl" />
        </ScrollReveal>
        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {foodVideoSlots.slice(0, 6).map((slot) => (
            <div key={slot.id} className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px]">
              <VerticalVideo slot={slot} preload="metadata" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-edge container mx-auto border-t px-4 pt-16">
        <ScrollReveal>
          <SectionHeading title="The venue" subtitle="Lobby, halls, stage, and exterior." align="left" />
        </ScrollReveal>
        <GalleryGrid slots={gallerySlots} columns={3} />
      </section>
    </div>
  );
}
