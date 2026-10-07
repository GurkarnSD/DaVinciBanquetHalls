'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';
import ContactEventFields from './ContactEventFields';
import ContactFormSuccess from './ContactFormSuccess';
import { EMPTY_CONTACT_FORM, type ContactFormData } from './contact-form-data';

interface ContactFormProps {
  title?: string;
  variant?: 'contact' | 'booking';
}

const inputClass =
  'w-full rounded-sm border border-theme bg-theme-input px-4 py-3 text-sm text-theme-heading placeholder:text-theme-faint focus:border-theme-strong focus:outline-none';

const labelClass = 'mb-1.5 block text-sm font-medium text-theme-heading';

function introCopy(isBooking: boolean) {
  if (isBooking) return 'Fields marked with * are required. We typically respond within 48 hours.';
  return 'Fill in your details and we will get back to you within 48 hours.';
}

function messageLabel(isBooking: boolean) {
  if (isBooking) return 'Additional details';
  return 'Message';
}

function messagePlaceholder(isBooking: boolean) {
  if (isBooking) return 'Hall preference, menu interest, setup notes, or questions...';
  return 'How can we help?';
}

function submitLabel(isSubmitting: boolean, isBooking: boolean) {
  if (isSubmitting) return 'Sending…';
  if (isBooking) return 'Submit Reservation Request';
  return 'Send Message';
}

async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData }),
    });
    const data = (await response.json()) as { error?: string };
    if (!response.ok) return data.error ?? 'Something went wrong. Please try again.';
    return null;
  } catch (err) {
    return err instanceof Error ? err.message : 'Something went wrong. Please try again.';
  }
}

export default function ContactForm({ title, variant = 'contact' }: ContactFormProps) {
  const isBooking = variant === 'booking';
  const [formData, setFormData] = useState(EMPTY_CONTACT_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError('');
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    const nextError = await submitContactForm(formData);
    if (nextError) {
      setError(nextError);
      setIsSubmitting(false);
      return;
    }
    setSubmitted(true);
    setFormData(EMPTY_CONTACT_FORM);
    setIsSubmitting(false);
  };

  if (submitted) {
    return <ContactFormSuccess isBooking={isBooking} onReset={() => setSubmitted(false)} />;
  }

  return (
    <div className="surface p-8 md:p-10">
      {title && <h2 className="text-theme-heading mb-2 font-serif text-2xl font-medium">{title}</h2>}
      <p className="text-theme-body mb-8 text-sm">{introCopy(isBooking)}</p>

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

        <ContactEventFields
          isBooking={isBooking}
          formData={formData}
          inputClass={inputClass}
          labelClass={labelClass}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="message" className={labelClass}>
            {messageLabel(isBooking)} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder={messagePlaceholder(isBooking)}
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full py-3.5 disabled:opacity-50">
          {submitLabel(isSubmitting, isBooking)}
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
