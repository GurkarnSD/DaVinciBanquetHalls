import EventCard from '@/components/EventCard';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import { eventCardSlots } from '@/config/media-slots';
import { eventVideoSlots } from '@/config/video-slots';

const events = [
  {
    title: 'Weddings',
    description:
      'Ceremonies, receptions, engagement parties, bridal showers, rehearsal dinners, stags & does, and many more.',
    href: '/events/weddings',
    slotKey: 'weddings' as const,
  },
  {
    title: 'Social Events',
    description:
      'Birthday parties, anniversaries, baby showers, baptisms, communions, confirmations, retirement celebrations, holiday parties, and family gatherings.',
    href: '/events/social',
    slotKey: 'social' as const,
  },
  {
    title: 'Corporate Events',
    description:
      'Conferences, meetings, seminars, networking events, award galas, holiday parties, and team-building events.',
    href: '/events/corporate',
    slotKey: 'corporate' as const,
  },
  {
    title: 'South Asian Events',
    description:
      'Weddings, rokha ceremonies, engagement parties, maiyaan, jagos, mehndi, sangeet, receptions, and post-wedding celebrations.',
    href: '/events/south-asian',
    slotKey: 'south-asian' as const,
  },
  {
    title: 'Fundraisers & Trade Shows',
    description:
      'Charity galas, fundraising dinners, auctions, community events, expos, trade shows, and networking exhibitions.',
    href: '/events/fundraisers-tradeshows',
    slotKey: 'fundraisers-tradeshows' as const,
  },
];

export default function EventsPage() {
  return (
    <div className="page-shell pb-0">
      <div className="container mx-auto px-4">
        <PageHero title="Every Celebration Starts Here" align="center" className="mx-auto max-w-3xl" />
      </div>

      <section className="section-edge container mx-auto border-t px-4 py-16">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <EventCard
              key={event.href}
              title={event.title}
              description={event.description}
              href={event.href}
              slot={eventCardSlots[event.slotKey]}
              imageLoading="eager"
              fetchPriority={index === 0 ? 'high' : 'auto'}
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
              imageLoading="eager"
            />
          ))}
        </div>
      </section>

      <VerticalVideoReel title="Recent Celebrations" slots={eventVideoSlots} />

      <CTASection
        title="Tell Us About Your Event"
        description="Share your date and expected guest count."
        primaryLabel="Submit an inquiry"
        primaryHref="/book"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </div>
  );
}
