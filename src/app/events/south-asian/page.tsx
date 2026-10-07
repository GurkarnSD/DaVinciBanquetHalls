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
  image: '/assets/images/events/south-asian/hero.jpg',
});

export default function SouthAsianEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots['south-asian']}
        title="South Asian Events"
        subtitle="Weddings, rokha ceremonies, engagement parties, maiyaan events, jagos, mehndi, sangeet, receptions, and post-wedding celebrations."
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Honouring Traditions, Celebrating Every Moment">
          <p>
            South Asian celebrations are filled with meaningful traditions, vibrant gatherings, and unforgettable
            moments shared with family and loved ones. Our venue provides a beautiful and versatile setting for every
            stage of your celebration, from intimate ceremonies to grand receptions. With customizable spaces, in-house
            catering, and a dedicated hospitality team, we help bring your vision and traditions to life.
          </p>
        </ContentCard>

        <ContentCard title="A Venue for Every Celebration">
          <p>
            From pre-wedding ceremonies to the final reception, our flexible event spaces can be tailored to accommodate
            gatherings of all sizes. Whether you are planning an intimate family celebration or a grand event with
            hundreds of guests, our team is here to support every detail and create an experience that feels uniquely
            yours.
          </p>
          <p>South Asian events we host:</p>
          <ul>
            <li>Wedding ceremonies</li>
            <li>Wedding receptions</li>
            <li>Rokha ceremonies</li>
            <li>Engagement parties</li>
            <li>Maiyaan ceremonies</li>
            <li>Jago celebrations</li>
            <li>Mehndi events</li>
            <li>Sangeet celebrations</li>
            <li>Post-wedding celebrations</li>
            <li>Shaguns</li>
            <li>Cultural celebrations</li>
            <li>and many more</li>
          </ul>
        </ContentCard>

        <ContentCard title="Authentic Cuisine & Exceptional Hospitality">
          <p>
            Food is at the heart of every South Asian celebration. Our culinary team offers customizable menu options
            featuring traditional flavours and thoughtfully prepared dishes, complemented by professional service and a
            team dedicated to making your celebration seamless.
          </p>
        </ContentCard>

        <ContentCard title="A Celebration Designed Around Your Traditions">
          <p>
            We understand that every family has unique traditions, customs, and expectations. Our experienced team works
            with you to create a celebration that reflects your culture, style, and vision while ensuring a welcoming
            experience for you and your guests.
          </p>
        </ContentCard>

        <ContentCard title="Why Choose Us for Your South Asian Celebration">
          <ul>
            <li>Versatile spaces for intimate ceremonies and grand receptions</li>
            <li>In-house catering and customizable menus</li>
            <li>Experienced hospitality team</li>
            <li>Support for multi-event wedding celebrations</li>
            <li>Convenient GTA location with ample parking</li>
          </ul>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Celebration"
        description="Share your event type, date, and expected guest count."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="South Asian menus"
        secondaryHref="/menus/south-asian-celebrations"
      />
    </div>
  );
}
