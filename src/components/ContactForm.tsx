'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';

interface ContactFormProps {
  title?: string;
  showEventType?: boolean;
  showDate?: boolean;
  showGuests?: boolean;
}

export default function ContactForm({
  title = 'Contact Us',
  showEventType = false,
  showDate = false,
  showGuests = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventType: '',
    date: '',
    guests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder: console.log for now
    console.log('Form submitted:', formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      eventType: '',
      date: '',
      guests: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="premium-card rounded-2xl border border-davinci-gold/30 p-8 text-center"
      >
        <div className="mb-4 text-davinci-gold">
          <HiCheck className="mx-auto h-16 w-16" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">Thank You!</h3>
        <p className="text-gray-300">Your message has been received. We&apos;ll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card rounded-2xl p-8"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
          />
        </div>

        {showEventType && (
          <div>
            <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-gray-300">
              Event Type
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
            >
              <option value="" className="bg-davinci-dark-light text-white">Select event type</option>
              <option value="wedding" className="bg-davinci-dark-light text-white">Wedding</option>
              <option value="corporate" className="bg-davinci-dark-light text-white">Corporate</option>
              <option value="social" className="bg-davinci-dark-light text-white">Social Event</option>
              <option value="south-asian" className="bg-davinci-dark-light text-white">South Asian Celebration</option>
              <option value="fundraiser" className="bg-davinci-dark-light text-white">Fundraiser</option>
              <option value="other" className="bg-davinci-dark-light text-white">Other</option>
            </select>
          </div>
        )}

        {showDate && (
          <div>
            <label htmlFor="date" className="mb-2 block text-sm font-medium text-gray-300">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
            />
          </div>
        )}

        {showGuests && (
          <div>
            <label htmlFor="guests" className="mb-2 block text-sm font-medium text-gray-300">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
            />
          </div>
        )}

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-600 bg-davinci-dark-light px-4 py-2 text-white placeholder-gray-500 focus:border-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-linear-to-r from-davinci-gold to-davinci-gold-light py-3 font-medium text-davinci-dark transition-all hover:from-davinci-gold-light hover:to-davinci-gold hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </motion.div>
  );
}
