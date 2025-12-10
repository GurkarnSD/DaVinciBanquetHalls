import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Social Events',
  description:
    "Celebrate life's special moments at Da Vinci Banquet Halls in Woodbridge, ON. Beautiful venues for birthdays, anniversaries, family reunions, and social gatherings.",
  path: '/events/social',
  image: '/assets/images/events/social/hero.jpg',
});

export default function SocialEventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <EventPageHero
        imageSrc="/assets/images/events/social/hero.jpg"
        imageAlt="Social Events"
        title="Social Events"
        subtitle="Celebrate Life's Special Moments"
      />

      {/* Birthday Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Birthday">
          <p>
            Whether you are celebrating a milestone birthday of a baby, teenager or an adult, Da Vinci Banquet Hall is
            the perfect venue. With our spectacular halls for gatherings of all sizes, we have a perfect solution for
            your parties.
          </p>
          <p>
            Whether you do a sit-down dinner or buffet, we can accommodate your requirements exactly as you want. We
            also provide extensive menus so your guests can enjoy delicious food and celebrate to the fullest.
          </p>
        </ContentCard>
      </section>

      {/* Communion/Confirmation/Baptism Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Communion/Confirmation/Baptism">
          <p>
            Da Vinci Banquet Hall is the perfect venue for celebrating Communion, Confirmation or Baptism. We can host
            gatherings of small and large sizes depending on your guest list. These are special occasions that will be
            remembered by all your guests forever.
          </p>
          <p>
            We have extensive menus to cater to different culinary expectations and state of the art audio/visual
            equipment to make your event perfect. We can customize the décor according to your theme so that the
            ambiance will be beautiful.
          </p>
        </ContentCard>
      </section>

      {/* CTA Section */}
      <section className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark bg-linear-to-br py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Plan Your Social Event?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
            Contact us today to discuss your celebration and let us help make it unforgettable.
          </p>
          <Link
            href="/contact"
            className="bg-davinci-dark hover:bg-davinci-charcoal inline-block rounded-full px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
