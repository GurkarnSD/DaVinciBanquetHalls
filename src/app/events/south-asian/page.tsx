import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'South Asian Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description: 'Specialized South Asian event venues serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA.',
  path: '/events/south-asian',
  image: '/assets/images/logos/logo.png',
});

export default function SouthAsianEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots['south-asian']}
        title="South Asian Events"
        subtitle="Weddings, mehndi, sangeet, and cultural celebrations."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Wedding">
          <p>
            From décor and seating to cuisine and AV, we coordinate the details across events of every scale so the day
            runs smoothly.
          </p>
        </ContentCard>

        <ContentCard title="Mehndi">
          <p>
            Engagement, mehndi, jago, sangeet, maiyaan, wedding, and reception — we support pre-wedding through
            reception with experienced coordination.
          </p>
        </ContentCard>

        <ContentCard title="Birthday">
          <p>South Asian birthday gatherings with buffet or plated service, across our range of hall sizes.</p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan your celebration"
        description="Share your event type and timeline. We will outline hall and menu options."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="South Asian menus"
        secondaryHref="/menus/south-asian-celebrations"
      />
    </div>
  );
}
