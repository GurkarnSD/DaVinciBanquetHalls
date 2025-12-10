'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function BookPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-6 font-serif text-5xl font-bold text-white md:text-6xl">
              <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Book a Hall</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-xl text-gray-300">
              Reserve your date and let us help create your perfect celebration. Fill out the form below and we&apos;ll get
              back to you soon.
            </p>
          </motion.div>

          {/* Booking Form */}
          <ContactForm title="Reservation Request" showEventType={true} showDate={true} showGuests={true} />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 premium-card rounded-2xl p-8"
          >
            <h2 className="mb-4 font-serif text-2xl font-bold text-white">What Happens Next?</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3 text-davinci-gold">✓</span>
                <span>We&apos;ll review your request and contact you within 24-48 hours</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-davinci-gold">✓</span>
                <span>We&apos;ll schedule a venue tour at your convenience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-davinci-gold">✓</span>
                <span>We&apos;ll work with you to customize your event details</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-davinci-gold">✓</span>
                <span>We&apos;ll confirm your booking and help you plan every detail</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
