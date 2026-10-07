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
  image: '/assets/images/events/social/hero.webp',
});

export default function SocialEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots.social}
        title="Social Events"
        subtitle="Birthday parties, anniversaries, baby showers, baptisms, communions, confirmations, retirement celebrations, holiday parties, and family gatherings."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Celebrate Life’s Special Moments with Family and Friends">
          <p>
            From milestone birthdays and anniversaries to baby showers, religious celebrations, and family gatherings,
            our venue provides the perfect setting to bring your loved ones together. With versatile spaces, exceptional
            cuisine, and attentive hospitality, we help you create memorable celebrations tailored to your occasion.
          </p>
        </ContentCard>

        <ContentCard title="A Beautiful Space for Every Celebration">
          <p>
            Whether you are planning an intimate gathering or a large celebration, our flexible event spaces can be
            customized to suit your guest list, style, and vision. From extravagant food setups to thoughtfully arranged
            layouts, our team helps create an atmosphere that feels unique to every occasion.
          </p>
          <p>Social events we host:</p>
          <ul>
            <li>Birthday parties</li>
            <li>Anniversary celebrations</li>
            <li>Baby showers</li>
            <li>Baptisms</li>
            <li>Communions</li>
            <li>Confirmations</li>
            <li>Retirement celebrations</li>
            <li>Holiday parties</li>
            <li>Family gatherings</li>
            <li>Milestone celebrations</li>
            <li>and many more</li>
          </ul>
        </ContentCard>

        <ContentCard title="Exceptional Food & Hospitality">
          <p>
            Great celebrations are built around great food and memorable experiences. Our in-house culinary team offers
            customizable menus featuring delicious cuisine, complemented by professional service and a dedicated team
            focused on making your event seamless.
          </p>
        </ContentCard>

        <ContentCard title="A Team Dedicated to Your Celebration">
          <p>
            From selecting the perfect space to final event details, our experienced team is here to provide support and
            ensure your celebration is everything you imagined.
          </p>
        </ContentCard>

        <ContentCard title="Why Choose Us for Your Social Event">
          <ul>
            <li>Flexible spaces for gatherings of all sizes</li>
            <li>Customized menu options</li>
            <li>Full-service bar options</li>
            <li>Professional hospitality team</li>
            <li>Convenient GTA location with ample parking</li>
          </ul>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Social Event"
        description="Share your date and expected guest count."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </div>
  );
}
