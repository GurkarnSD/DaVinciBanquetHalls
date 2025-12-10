import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Corporate Events',
  description:
    'Professional corporate event venues in Woodbridge, ON. Perfect for meetings, conferences, corporate celebrations, and business gatherings at Da Vinci Banquet Halls.',
  path: '/events/corporate',
  image: '/assets/images/events/corporate/hero.jpg',
});

export default function CorporateEventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <EventPageHero
        imageSrc="/assets/images/events/corporate/hero.jpg"
        imageAlt="Corporate Events"
        title="Corporate Events"
        subtitle="Professional Venues for Business Success"
      />

      {/* Main Content Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Corporate Events" titleGradient={false}>
          <p>
            Da Vinci Banquet Hall is a popular choice when it comes to corporate events. We can host small meetings or
            large corporate events efficiently and seamlessly. We offer state of the art audio visual equipment, video
            and staging technology and other amenities to ensure a successful event. During your events you can have
            large meetings as well as break out sessions that we can organize in our facilities.
          </p>
          <p>
            Our food and beverage offering will definitely impress your corporate guests as we take pride in the food we
            serve. We can host:
          </p>
          <ul className="ml-4 list-inside list-disc space-y-2">
            <li>Corporate Meetings</li>
            <li>Corporate Seminars</li>
            <li>Trade Shows</li>
            <li>Product and Service Launch</li>
            <li>Promotional Events</li>
          </ul>
          <p>
            We ensure professionalism and excellent service so that the attendees can focus on task at hand without
            interruptions in beautiful surroundings.
          </p>
        </ContentCard>
      </section>

      {/* CTA Section */}
      <section className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark bg-linear-to-br py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Plan Your Corporate Event?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
            Contact us today to discuss your corporate event needs and let us help make it a success.
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
