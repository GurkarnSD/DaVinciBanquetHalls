import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import CTASection from '@/components/CTASection';
import { eventHeroSlots } from '@/config/media-slots';

export const metadata: Metadata = generateMetadata({
  title: 'Wedding Events',
  locationKeywords: 'Woodbridge, Brampton, Mississauga, Vaughan, GTA',
  description:
    'Wedding venues at Da Vinci Banquet Halls — ceremonies, receptions, stags, and showers. Serving Woodbridge, Brampton, Mississauga, Vaughan, and the GTA.',
  path: '/events/weddings',
  image: '/assets/images/events/weddings/couple.jpg',
});

export default function WeddingsEventsPage() {
  return (
    <div className="page-shell pb-0">
      <EventPageHero
        slot={eventHeroSlots.weddings}
        title="Weddings"
        subtitle="Ceremonies, receptions, engagement parties, bridal showers, rehearsal dinners, stags & does, and many more."
        imageClassName="object-cover object-[center_18%]"
      />

      <section className="container mx-auto mb-12 max-w-3xl space-y-8 px-4">
        <ContentCard title="Your Wedding Day">
          <p>
            Your wedding day deserves a venue that brings together beautiful spaces, exceptional cuisine, and attentive
            hospitality. From intimate ceremonies to grand receptions, our experienced team works with you to create a
            seamless celebration that reflects your vision, style, and traditions.
          </p>
        </ContentCard>

        <ContentCard title="A Space for Every Wedding Moment">
          <p>
            From your first look and ceremony to your reception and late-night celebrations, our versatile event spaces
            can be tailored to accommodate weddings of all sizes. Whether you are planning an intimate gathering or a
            grand celebration with hundreds of guests, we provide the setting to make every moment memorable.
          </p>
          <p>Wedding celebrations we host:</p>
          <ul>
            <li>Ceremonies</li>
            <li>Wedding receptions</li>
            <li>Engagement parties</li>
            <li>Bridal showers</li>
            <li>Rehearsal dinners</li>
            <li>Stags & does</li>
            <li>Anniversary celebrations</li>
            <li>and many more</li>
          </ul>
        </ContentCard>

        <ContentCard title="Exceptional Cuisine & Hospitality">
          <p>
            Our in-house culinary team creates memorable dining experiences featuring customizable menus, thoughtfully
            prepared cuisine, and professional service designed around your celebration.
          </p>
        </ContentCard>

        <ContentCard title="Why Couples Choose Us">
          <ul>
            <li>Flexible spaces for intimate and large celebrations</li>
            <li>In-house catering</li>
            <li>Full-service bar options</li>
            <li>Experienced and dedicated hospitality team</li>
            <li>Convenient GTA location with parking</li>
          </ul>
        </ContentCard>

        <ContentCard title="Your Celebration, Supported Every Step of the Way">
          <p>
            From selecting your space and menu to preparing the details for your event day, our dedicated team is here
            to provide guidance and support to help bring your wedding vision to life.
          </p>
        </ContentCard>
      </section>

      <CTASection
        title="Plan Your Wedding"
        description="Share your date and expected guest count."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Wedding menus"
        secondaryHref="/menus/weddings"
      />
    </div>
  );
}
