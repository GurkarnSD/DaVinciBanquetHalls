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
        <PageHero title="The Venue, The Setup, The Celebration" align="center" className="mx-auto max-w-3xl" />
      </div>

      <VerticalVideoReel title="Event Highlights" slots={eventVideoSlots} />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <ScrollReveal>
          <SectionHeading title="Food Presentation" align="left" className="max-w-2xl" />
        </ScrollReveal>
        <div className="flex gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {foodVideoSlots.slice(0, 6).map((slot) => (
            <div key={slot.id} className="w-[62vw] max-w-[230px] shrink-0 sm:w-[220px]">
              <VerticalVideo slot={slot} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-edge container mx-auto border-t px-4 pt-16">
        <ScrollReveal>
          <SectionHeading title="The Venue" align="left" />
        </ScrollReveal>
        <GalleryGrid slots={gallerySlots} columns={3} />
      </section>
    </div>
  );
}
