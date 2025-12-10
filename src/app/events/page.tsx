'use client';

import EventCard from '@/components/EventCard';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Weddings',
    description: 'Create unforgettable memories on your special day with our elegant wedding venues and services',
    href: '/events/weddings',
    image: '/assets/images/events/weddings/hero.jpg',
  },
  {
    title: 'Social Events',
    description: "Celebrate life's special moments with family and friends in our beautiful banquet halls",
    href: '/events/social',
    image: '/assets/images/events/social/hero.jpg',
  },
  {
    title: 'Corporate Events',
    description: 'Professional venues and services for meetings, conferences, and corporate celebrations',
    href: '/events/corporate',
    image: '/assets/images/events/corporate/hero.jpg',
  },
  {
    title: 'South Asian Events',
    description: 'Specialized services and venues for South Asian celebrations and cultural events',
    href: '/events/south-asian',
    image: '/assets/images/events/south-asian/hero.jpg',
  },
  {
    title: 'Fundraisers & Trade Shows',
    description: 'Spacious venues perfect for fundraisers, trade shows, and large gatherings',
    href: '/events/fundraisers-tradeshows',
    image: '/assets/images/events/fundraisers-tradeshows/hero.jpg',
  },
];

export default function EventsPage() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-7xl">
            <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Our Events</span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
            From intimate gatherings to grand celebrations, we provide the perfect venue and exceptional service for
            every occasion.
          </p>
        </motion.div>
      </section>

      {/* Event Cards Grid */}
      <section className="container mx-auto px-4">
        {/* Top Row - 3 Cards */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {events.slice(0, 3).map((event, index) => (
            <EventCard
              key={event.href}
              title={event.title}
              description={event.description}
              href={event.href}
              image={event.image}
              delay={index * 0.1}
            />
          ))}
        </div>
        {/* Bottom Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {events.slice(3, 5).map((event, index) => (
              <EventCard
                key={event.href}
                title={event.title}
                description={event.description}
                href={event.href}
                image={event.image}
                delay={(index + 3) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 mb-0 bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold py-16 text-davinci-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Plan Your Perfect Event</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
              Let us help you create an unforgettable experience. Contact us today to discuss your event needs.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
