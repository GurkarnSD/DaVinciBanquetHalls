import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'Corporate Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Professional corporate event venues serving Woodbridge, Brampton, Mississauga, Vaughan, and the Greater Toronto Area.',
  path: '/events/corporate',
  image: '/assets/images/events/corporate/hero.webp',
});

export default function CorporateEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots.corporate}
        title="Corporate Events"
        subtitle="Meetings, seminars, launches, and company celebrations."
      />

      <section className="container mx-auto mb-12 max-w-3xl px-4">
        <ContentCard title="Corporate Events">
          <p>
            From small meetings to large conferences, our halls support breakout sessions, AV requirements, and
            full-service catering.
          </p>
          <ul className="space-y-2">
            <li>Corporate meetings</li>
            <li>Seminars</li>
            <li>Trade shows</li>
            <li>Product launches</li>
            <li>Promotional events</li>
          </ul>
          <p>Professional service, AV support, and catering for full-day programs.</p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Corporate Event"
        description="Tell us about your format, guest count, and technical needs."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
