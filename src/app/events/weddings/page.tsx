import { type Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import EventPageHero from '@/components/EventPageHero';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Wedding Events',
  description:
    'Plan your perfect wedding at Da Vinci Banquet Halls in Woodbridge, ON. Elegant venues for weddings, stag parties, and bridal showers. Customizable decor, exceptional service, and memorable celebrations.',
  path: '/events/weddings',
  image: '/assets/images/events/weddings/hero.jpg',
});

export default function WeddingsEventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      <EventPageHero
        imageSrc="/assets/images/events/weddings/hero.jpg"
        imageAlt="Wedding Events"
        title="Weddings"
        subtitle="Your Perfect Day Starts Here"
      />

      {/* Weddings Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Da Vinci Wedding Service">
          <p>
            Each couple has a vision of what they want their special day to look like. Weddings involve a lot of
            meticulous planning, attention to detail coupled with stress and incessant decision making. There are
            endless questions to be answered about the style, number of guests, cuisine, dress, music and of course, the
            venue.
          </p>
          <p>
            At Da Vinci Banquet Hall, we want to become your partners when planning the perfect venue for your wedding.
            Whether you are planning a large wedding or a cozy, intimate affair, we will help you plan the nitty gritty.
            We can accommodate any size of wedding party. We will assist you at every step of the way to bring your
            vision to life with the perfect setting, décor, food, music and ambiance.
          </p>
          <p>
            Our neutral background spaces will complement any kind of décor and colours you choose. We offer a huge
            variety of linens, backdrops and tableware for you to choose from. Choose Da Vinci Banquet Halls and be
            assured that we will help you bring your vision to life!
          </p>
        </ContentCard>
      </section>

      {/* Stag Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Stag">
          <p>
            So, you want to celebrate the last day of freedom! We have extensive experience in hosting Stag parties. We
            will ensure you have a fantastic experience and a memorable evening at your stag.
          </p>
          <p>
            Our food menus will blow you away as we customize them to your taste. Our excellent staff will be at your
            service so that you can enjoy and have fun on the last day of your being bachelor.
          </p>
        </ContentCard>
      </section>

      {/* Bridal Shower Section */}
      <section className="container mx-auto mb-16 max-w-4xl px-4">
        <ContentCard title="Bridal Shower">
          <p>
            Your bridal shower is the beginning of the festivities of your big day! This is the day when you set the
            tone for the upcoming wedding and celebrate with the special women in your life.
          </p>
          <p>
            Choose Da Vinci Banquet Hall to host your bridal shower and you will not be disappointed. Our beautiful
            venue will be the perfect backdrop of your celebrations and the new memories make. Our excellent food menus
            will keep your guests happy while they celebrate this special day.
          </p>
          <p>We promise that we will exceed your expectations.</p>
        </ContentCard>
      </section>

      {/* CTA Section */}
      <section className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark bg-linear-to-br py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Plan Your Celebration?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
            Contact us today to discuss your vision and let us help make your special day unforgettable.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="bg-davinci-dark hover:bg-davinci-charcoal inline-block rounded-full px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/menus/weddings"
              className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:bg-white/10"
            >
              View Wedding Menus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
