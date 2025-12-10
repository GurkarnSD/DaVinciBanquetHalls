'use client';

import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export default function FundraisersTradeShowsEventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <EventPageHero
        imageSrc="/assets/images/events/fundraisers-tradeshows/hero.jpg"
        imageAlt="Fundraisers & Trade Shows"
        title="Fundraisers & Trade Shows"
        subtitle="Professional Venues for Impactful Events"
      />

      {/* Main Content Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Fundraisers & Trade Shows" titleGradient={false}>
          <p>
            At Da Vinci Banquet Hall, we have a lot of experience in holding fundraisers and trade shows for various
            organizations, businesses and even individuals. These events can be extremely important and you need to
            put your best foot forward to impress the attendees.
          </p>
          <p>
            Our team can help you organize your fundraiser and trade show down to the minutest detail. Our
            professional staff can help you with planning the seating as well as registration and admission on the day
            of the event so that everything is organized.
          </p>
          <p>
            Our spaces have ample space and lighting that is imperative for these events. We have enough parking for
            your guests for ease of attending the event.
          </p>
        </ContentCard>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold py-16 text-davinci-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
            Ready to Plan Your Fundraiser or Trade Show?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
            Contact us today to discuss your event needs and let us help make it a success.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
