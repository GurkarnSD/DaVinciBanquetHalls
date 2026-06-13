import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'Social Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Social event venues at Da Vinci Banquet Halls — birthdays, baptisms, anniversaries, and family gatherings. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA.',
  path: '/events/social',
  image: '/assets/images/logos/logo.png',
});

export default function SocialEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots.social}
        title="Social Events"
        subtitle="Birthdays, baptisms, anniversaries, and family gatherings."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Birthday">
          <p>Birthday events with sit-down dinner or buffet service, across hall sizes from 50 to 1,000 guests.</p>
        </ContentCard>

        <ContentCard title="Communion, confirmation & baptism">
          <p>Flexible menus, hall layouts, and AV support for presentations and music.</p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan your social event"
        description="Share your date, guest count, and event type."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
