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
        subtitle="Conferences, meetings, seminars, networking events, award galas, holiday parties, and team-building events."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="A Professional Setting for Meetings, Celebrations, and Corporate Gatherings">
          <p>
            Whether you are hosting a company meeting, corporate celebration, networking event, or large-scale
            gathering, our venue offers a professional and welcoming environment designed to bring your event to life.
            With versatile spaces, customizable menus, and a dedicated hospitality team, we provide the flexibility and
            support needed for successful corporate events of all sizes.
          </p>
        </ContentCard>

        <ContentCard title="Flexible Spaces Designed for Business Events">
          <p>
            From intimate team meetings to large conferences and award galas, our versatile event spaces can be
            customized to suit your agenda, guest count, and event objectives. With flexible layouts and a team
            experienced in hosting professional gatherings, we help create a seamless experience for both organizers and
            attendees.
          </p>
          <p>Corporate events we host:</p>
          <ul>
            <li>Conferences</li>
            <li>Business meetings</li>
            <li>Seminars & workshops</li>
            <li>Networking events</li>
            <li>Award galas</li>
            <li>Holiday parties</li>
            <li>Team building events</li>
            <li>Company milestone celebrations</li>
            <li>Corporate dinners</li>
            <li>Employee appreciation events</li>
            <li>and many more</li>
          </ul>
        </ContentCard>

        <ContentCard title="Customized Catering & Hospitality">
          <p>
            Great corporate events require great service. Our in-house culinary team offers customizable menu options
            designed to suit your event, while our experienced staff ensures guests receive attentive, professional
            service from start to finish.
          </p>
        </ContentCard>

        <ContentCard title="Support Every Step of the Way">
          <p>
            From selecting the right space to preparing the details for your event day, our team provides dedicated
            support to help ensure a smooth and successful experience for your organization and guests.
          </p>
        </ContentCard>

        <ContentCard title="Why Choose Us for Your Corporate Event">
          <ul>
            <li>Flexible event spaces for small and large gatherings</li>
            <li>Customizable catering options</li>
            <li>Professional hospitality team</li>
            <li>Convenient GTA location with ample parking</li>
            <li>Experience hosting corporate and community events</li>
          </ul>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Corporate Event"
        description="Share your date and expected guest count."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
