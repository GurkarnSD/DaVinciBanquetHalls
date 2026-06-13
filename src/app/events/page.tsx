'use client';

import EventCard from '@/components/EventCard';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import { eventCardSlots } from '@/config/media-slots';
import { eventVideoSlots } from '@/config/video-slots';

const events = [
  {
    title: 'Weddings',
    description: 'Ceremonies and receptions across our largest and most intimate halls.',
    href: '/events/weddings',
    slotKey: 'weddings' as const,
  },
  {
    title: 'Social Events',
    description: 'Milestones, anniversaries, and gatherings with family and friends.',
    href: '/events/social',
    slotKey: 'social' as const,
  },
  {
    title: 'Corporate Events',
    description: 'Meetings, conferences, and company celebrations with full AV support.',
    href: '/events/corporate',
    slotKey: 'corporate' as const,
  },
  {
    title: 'South Asian Events',
    description: 'Cultural celebrations with menus and layouts tailored to tradition.',
    href: '/events/south-asian',
    slotKey: 'south-asian' as const,
  },
  {
    title: 'Fundraisers & Trade Shows',
    description: 'Large-format events with flexible floor plans and catering options.',
    href: '/events/fundraisers-tradeshows',
    slotKey: 'fundraisers-tradeshows' as const,
  },
];

export default function EventsPage() {
  return (
    <div className="page-shell pb-0">
      <div className="container mx-auto px-4">
        <PageHero
          eyebrow="Events"
          title="Every Occasion, One Consistent Standard"
          description="Browse by event type or watch recent highlights below."
          align="center"
          className="mx-auto max-w-3xl"
        />
      </div>

      <VerticalVideoReel eyebrow="Highlights" title="Recent Celebrations" slots={eventVideoSlots} />

      <section className="section-edge container mx-auto border-t px-4 py-16">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <EventCard
              key={event.href}
              title={event.title}
              description={event.description}
              href={event.href}
              slot={eventCardSlots[event.slotKey]}
            />
          ))}
        </div>
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
          {events.slice(3).map((event) => (
            <EventCard
              key={event.href}
              title={event.title}
              description={event.description}
              href={event.href}
              slot={eventCardSlots[event.slotKey]}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Tell Us About Your Event"
        description="Share your date, guest count, and event type. We will outline hall options and next steps."
        primaryLabel="Get started"
        primaryHref="/contact"
        secondaryLabel="Book now"
        secondaryHref="/book"
      />
    </div>
  );
}
