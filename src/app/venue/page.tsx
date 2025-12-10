'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaBuilding, FaVolumeUp, FaLightbulb, FaChair, FaWineGlass, FaUtensils, FaKey, FaParking } from 'react-icons/fa';

const floorplans = [
  {
    name: 'Hall A',
    capacity: '180-380 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall A.pdf',
  },
  {
    name: 'Hall A & B',
    capacity: '350-550 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall AB.pdf',
  },
  {
    name: 'Hall A, B & C',
    capacity: '500-1000 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall ABC.pdf',
  },
  {
    name: 'Hall B & C',
    capacity: '200-400 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall BC.pdf',
  },
  {
    name: 'Hall C',
    capacity: '80-200 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall C.pdf',
  },
  {
    name: 'Hall D',
    capacity: '50-120 guests',
    pdf: '/assets/floorplans/DaVinci Floorplan Hall D.pdf',
  },
];

export default function VenuePage() {
  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative mb-16 h-96">
        <div className="absolute inset-0">
          <Image src="/assets/images/hero/venue.jpg" alt="Da Vinci Banquet Halls Venue" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl">Our Venues</h1>
            <p className="text-xl md:text-2xl">Elegant Spaces for Every Occasion</p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto mb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
              <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Venue Information</span>
            </h2>
            <p className="text-center text-xl leading-relaxed text-gray-300">
              Our beautifully designed banquet halls offer flexible spaces that can accommodate events of all sizes.
              Each hall features elegant decor, state-of-the-art facilities, and the perfect ambiance for your
              celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capacities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Capacities & Floorplans</span>
            </h2>
            <p className="text-center text-xl text-gray-300">Choose the perfect space for your event</p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {floorplans.map((hall, index) => (
              <motion.div
                key={hall.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card overflow-hidden rounded-2xl transition-all hover:scale-105"
              >
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-2xl font-bold text-white">{hall.name}</h3>
                  <p className="mb-4 text-gray-300">{hall.capacity}</p>
                  <Link
                    href={hall.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-davinci-gold hover:text-davinci-gold-light"
                  >
                    View Floorplan
                    <HiExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Venue Features</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Elegant Decor', icon: FaBuilding },
            { name: 'State-of-the-Art Sound System', icon: FaVolumeUp },
            { name: 'Professional Lighting', icon: FaLightbulb },
            { name: 'Flexible Seating Arrangements', icon: FaChair },
            { name: 'Full-Service Bar', icon: FaWineGlass },
            { name: 'Premium Catering Kitchen', icon: FaUtensils },
            { name: 'Bridal Suite', icon: FaKey },
            { name: 'Ample Parking', icon: FaParking },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card rounded-2xl p-6 text-center"
              >
                <div className="mb-3 flex justify-center">
                  <IconComponent className="h-8 w-8 text-davinci-gold" />
                </div>
                <h3 className="font-semibold text-white">{feature.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-0 bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold py-16 text-davinci-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Book Your Event?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-xl opacity-90">
              Contact us to schedule a tour and see our beautiful venues in person.
            </p>
            <Link
              href="/book"
              className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
            >
              Book a Hall
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
