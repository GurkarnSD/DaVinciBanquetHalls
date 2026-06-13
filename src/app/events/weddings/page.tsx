import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'Wedding Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Wedding venues at Da Vinci Banquet Halls — ceremonies, receptions, stags, and showers. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA.',
  path: '/events/weddings',
  image: '/assets/images/events/weddings/hero.jpg',
});

export default function WeddingsEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots.weddings}
        title="Weddings"
        subtitle="Ceremonies, receptions, stags, and showers across our halls."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Wedding Service">
          <p>
            Venue layout, décor, cuisine, and service for guest counts from intimate gatherings to large receptions.
          </p>
          <p>
            Linens, backdrops, and tableware are available. Halls accommodate a range of seating and floor-plan
            configurations.
          </p>
        </ContentCard>

        <ContentCard title="Stag">
          <p>
            Stag events with buffet or plated service, bar packages, and hall configurations for groups of all sizes.
          </p>
        </ContentCard>

        <ContentCard title="Bridal Shower">
          <p>Bridal and wedding showers with seated or buffet menus across our smaller and mid-size halls.</p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Wedding"
        description="Share your date and guest count. We will outline hall options and menu selections."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Wedding menus"
        secondaryHref="/menus/weddings"
      />
    </div>
  );
}
