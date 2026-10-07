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
  image: '/assets/images/events/fundraisers-tradeshows/hero.jpg',
});

export default function FundraisersTradeShowsEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots['fundraisers-tradeshows']}
        title="Fundraisers & Trade Shows"
        subtitle="Charity galas, fundraising dinners, auctions, community events, expos, trade shows, and networking exhibitions."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="A Versatile Venue for Impactful Events and Community Gatherings">
          <p>
            From fundraising galas and charity dinners to expos and trade shows, our venue provides a flexible setting
            for organizations looking to host memorable and successful events. With adaptable spaces, exceptional
            catering, and a dedicated hospitality team, we help create engaging experiences for guests, exhibitors, and
            attendees alike.
          </p>
        </ContentCard>

        <ContentCard title="Spaces Designed for Every Type of Event">
          <p>
            Whether you are planning an elegant fundraising dinner, a community gathering, or a large-scale exhibition,
            our versatile event spaces can be customized to support your event goals. From guest seating and dining
            layouts to networking areas and exhibitor setups, our team helps create a space that works for your audience
            and vision.
          </p>
          <p>Events we host:</p>
          <ul>
            <li>Charity galas</li>
            <li>Fundraising dinners</li>
            <li>Auctions</li>
            <li>Community events</li>
            <li>Expos</li>
            <li>Trade shows</li>
            <li>Networking events</li>
            <li>Exhibitions</li>
            <li>Corporate & community showcases</li>
            <li>and many more</li>
          </ul>
        </ContentCard>

        <ContentCard title="Exceptional Catering & Guest Experience">
          <p>
            Great events leave a lasting impression. Our in-house culinary team provides customizable menu options,
            while our experienced hospitality team ensures your guests receive attentive service throughout your event.
          </p>
        </ContentCard>

        <ContentCard title="Supporting Successful Events From Start to Finish">
          <p>
            From selecting the right space to preparing the details for event day, our team provides dedicated support
            to help your organization create a seamless and memorable experience for every attendee.
          </p>
        </ContentCard>

        <ContentCard title="Why Choose Us for Your Event">
          <ul>
            <li>Flexible spaces for intimate gatherings and large-scale events</li>
            <li>Customizable layouts for dining, networking, and exhibitions</li>
            <li>In-house catering and professional bar services</li>
            <li>Experienced hospitality team</li>
            <li>Convenient GTA location with ample parking</li>
          </ul>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Event"
        description="Share your date and expected guest count."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
