import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'Fundraisers & Trade Shows',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Spacious venues for fundraisers, trade shows, and large gatherings serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/events/fundraisers-tradeshows',
  image: '/assets/images/logos/logo.png',
});

export default function FundraisersTradeShowsEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots['fundraisers-tradeshows']}
        title="Fundraisers & Trade Shows"
        subtitle="Large-format events with flexible layouts and ample parking."
      />

      <section className="container mx-auto mb-12 max-w-3xl px-4">
        <ContentCard title="Fundraisers & trade shows">
          <p>
            We support fundraisers and trade shows with flexible floor plans, registration flow, lighting, and catering
            for attendees throughout the day.
          </p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan your event"
        description="Tell us about your format, capacity needs, and schedule."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
