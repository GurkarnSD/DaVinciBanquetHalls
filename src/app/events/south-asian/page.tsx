'use client';

import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export default function SouthAsianEventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <EventPageHero
        imageSrc="/assets/images/events/south-asian/hero.jpg"
        imageAlt="South Asian Events"
        title="South Asian Events"
        subtitle="Vibrant Celebrations & Cultural Events"
      />

      {/* Wedding Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Wedding">
          <p>
            We can customize everything from theme colours, music, décor, seating and food for your magical day. We
            understand the amount of coordination and preparation goes into planning the wedding day and all the
            events leading up to it. We have our whole team at your disposal at Da Vinci Banquet Hall so that your
            special day goes smoothly and seamlessly.
          </p>
          <p>
            We strive to take care of everything so that you can enjoy your wedding day to the fullest without any
            stress or worry. We provide full service packages for weddings of all sizes. Your guests will be dazzled
            with the ambiance of your event and will be floored by the food. At Da Vinci Banquet Hall, we have state
            of the art audio visual equipment so that the guests can enjoy the music and presentations.
          </p>
          <p>Celebrate your love story with us and we assure you that it will be better than you ever envisioned.</p>
        </ContentCard>
      </section>

      {/* Mehndi Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Mehndi">
          <p>
            Whether you decide to do all of your pre-wedding, wedding and post-wedding events at Da Vinci or just one,
            we provide impeccable service each and every time. We have extensive experience with South Asian weddings
            and have a team to cater to all your needs. Engagement, Mehndi, Jago, Sangeet, Maiyaan, the wedding and
            reception, we do it all.
          </p>
          <p>
            We can help you coordinate each and every detail for any and all of your events so that it will be one
            less thing for you to worry about.
          </p>
        </ContentCard>
      </section>

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
            also provide extensive menus for South Asian gatherings so your guests can enjoy delicious food and
            celebrate to the fullest.
          </p>
        </ContentCard>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold py-16 text-davinci-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Plan Your South Asian Event?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
            Contact us today to discuss your celebration and let us help make it unforgettable.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
            >
              Contact Us
            </Link>
            <Link
              href="/menus/south-asian-celebrations"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              View South Asian Menus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
