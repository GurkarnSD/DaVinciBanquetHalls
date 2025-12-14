'use client';

import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
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
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-xl text-gray-300">
              Have questions or ready to plan your event? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-card mb-12 rounded-2xl p-8 md:p-12"
          >
            <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-3xl">Get in Touch</h2>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <span className="text-davinci-gold text-lg font-semibold">Address:</span>
                </div>
                <p className="text-base text-gray-300">
                  5732 Highway 7
                  <br />
                  Woodbridge, ON, L4L3A2
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <span className="text-davinci-gold text-lg font-semibold">Phone:</span>
                </div>
                <a
                  href="tel:905-851-3131"
                  className="text-davinci-gold hover:text-davinci-gold-light text-base transition-colors"
                >
                  905-851-3131
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <span className="text-davinci-gold text-lg font-semibold">Email:</span>
                </div>
                <a
                  href="mailto:contact@davincibanquethalls.com"
                  className="text-davinci-gold hover:text-davinci-gold-light text-base break-all transition-colors"
                >
                  contact@davincibanquethalls.com
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <span className="text-davinci-gold text-lg font-semibold">Hours:</span>
                </div>
                <p className="text-base text-gray-300">
                  Monday: 11:00 AM - 8:00 PM
                  <br />
                  Tuesday: 11:00 AM - 8:00 PM
                  <br />
                  Wednesday: 11:00 AM - 8:00 PM
                  <br />
                  Thursday: 11:00 AM - 8:00 PM
                  <br />
                  Friday: 11:00 AM - 5:00 PM
                  <br />
                  Saturday: 11:00 AM - 5:00 PM
                  <br />
                  Sunday: 11:00 AM - 5:00 PM
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <div className="shrink-0">
                  <span className="text-davinci-gold text-lg font-semibold">Follow Us:</span>
                </div>
                <div className="flex items-center space-x-6">
                  <a
                    href="https://www.instagram.com/davinci.banquethalls/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-davinci-gold flex items-center space-x-2 text-base text-gray-300 transition-colors"
                  >
                    <FaInstagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <ContactForm title="Inquire About Your Event" showEventType={true} showDate={true} showGuests={true} />
        </div>
      </div>
    </div>
  );
}
