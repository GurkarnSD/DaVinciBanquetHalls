'use client';

import { useState } from 'react';
import { HiCheck, HiPhone } from 'react-icons/hi';
import Link from 'next/link';

interface ContactFormProps {
  title?: string;
  variant?: 'contact' | 'booking';
}

const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'social', label: 'Social event' },
  { value: 'south-asian', label: 'South Asian celebration' },
  { value: 'fundraiser', label: 'Fundraiser / trade show' },
  { value: 'other', label: 'Other' },
];

const GUEST_RANGES = [
  { value: '', label: 'Select guest count' },
  { value: '50-120', label: '50-120 (Hall D)' },
  { value: '80-260', label: '80-260 (Hall C)' },
  { value: '150-380', label: '150-380 (Hall A or B/C)' },
  { value: '320-550', label: '320-550 (Hall A & B)' },
  { value: '500-1000', label: '500-1,000 (Hall A, B & C)' },
  { value: 'unsure', label: 'Not sure yet' },
];

export default function ContactForm({ title, variant = 'contact' }: ContactFormProps) {
  const isBooking = variant === 'booking';

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
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData }),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? 'Something went wrong. Please try again.');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '', eventType: '', date: '', guests: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full rounded-sm border border-theme bg-theme-input px-4 py-3 text-sm text-theme-heading placeholder:text-theme-faint focus:border-theme-strong focus:outline-none';

  const labelClass = 'mb-1.5 block text-sm font-medium text-theme-heading';

  if (submitted) {
    return (
      <div className="surface p-8 md:p-10">
        <div className="mx-auto max-w-md text-center">
          <div className="border-theme bg-theme-elevated mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border">
            <HiCheck className="text-theme-heading h-6 w-6" />
          </div>
          <h3 className="text-theme-heading mb-2 font-serif text-2xl font-medium">
            {isBooking ? 'Request received' : 'Message sent'}
          </h3>
          <p className="text-theme-body mb-6 text-sm leading-relaxed">
            {isBooking
              ? 'Our team will review your date and guest count, then respond within 24-48 hours to confirm availability and schedule a tour.'
              : 'We received your message and will respond within 24-48 hours.'}
          </p>
          <div className="surface text-theme-body mb-6 p-4 text-left text-sm">
            <p className="text-theme-heading mb-1 font-medium">Need a faster response?</p>
            <a
              href="tel:905-851-3131"
              className="hover:text-theme-heading inline-flex items-center gap-2 transition-colors"
            >
              <HiPhone className="h-4 w-4" />
              905-851-3131
            </a>
          </div>
          <button type="button" onClick={() => setSubmitted(false)} className="btn-text">
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="surface p-8 md:p-10">
      {title && <h2 className="text-theme-heading mb-2 font-serif text-2xl font-medium">{title}</h2>}
      <p className="text-theme-body mb-8 text-sm">
        {isBooking
          ? 'Fields marked with * are required. We typically respond within 24-48 hours.'
          : 'Fill in your details and we will get back to you within 24-48 hours.'}
      </p>

      {error && (
        <div className="alert-error mb-6 px-4 py-3 text-sm" role="alert">
          {error} Or call{' '}
          <a href="tel:905-851-3131" className="underline">
            905-851-3131
          </a>
          .
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Full name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="905-555-0100"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {isBooking && (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="eventType" className={labelClass}>
                Event type *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select event type</option>
                {EVENT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className={labelClass}>
                Preferred date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                min={today}
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        )}

        {isBooking && (
          <div>
            <label htmlFor="guests" className={labelClass}>
              Estimated guests
            </label>
            <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className={inputClass}>
              {GUEST_RANGES.map((range) => (
                <option key={range.value || 'empty'} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {!isBooking && (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="eventType" className={labelClass}>
                Event type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select (optional)</option>
                {EVENT_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date" className={labelClass}>
                Preferred date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className={labelClass}>
            {isBooking ? 'Additional details' : 'Message'} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={
              isBooking ? 'Hall preference, menu interest, setup notes, or questions...' : 'How can we help?'
            }
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5 disabled:opacity-50">
          {isSubmitting ? 'Sending…' : isBooking ? 'Submit reservation request' : 'Send message'}
        </button>

        <p className="text-theme-muted text-center text-xs">
          Prefer to talk?{' '}
          <Link href="tel:905-851-3131" className="hover:text-theme-heading underline">
            905-851-3131
          </Link>
        </p>
      </form>
    </div>
  );
}
