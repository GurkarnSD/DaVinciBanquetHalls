import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { render } from '@react-email/render';
import React from 'react';
import ContactConfirmationEmail from '@/emails/ContactConfirmationEmail';
import BookingConfirmationEmail from '@/emails/BookingConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
  eventType: z.string().optional(),
  date: z.string().optional(),
  guests: z.string().optional(),
  formType: z.enum(['contact', 'booking']).default('contact'),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    // Validate form data
    const validatedData = contactSchema.parse(body as Record<string, unknown>);

    const { name, email, phone, message, eventType, date, guests, formType } = validatedData;

    // Normalize email to lowercase to avoid errors
    const normalizedEmail = email.toLowerCase().trim();

    // Hardcoded email addresses
    const staffEmail = 'gurkarnsd@outlook.com';
    // Use Resend's domain for "from" (required for sending), but set reply-to to staff
    // This way replies go directly to staff email
    const fromEmail = 'DaVinci Banquet Halls <onboarding@resend.dev>';

    // Format date if provided
    const formattedDate = date
      ? new Date(date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null;

    // Subject line for email subject - includes customer name for easy identification
    const emailSubject =
      formType === 'booking'
        ? eventType && date
          ? `${name} - ${eventType.charAt(0).toUpperCase() + eventType.slice(1)} availability - ${formattedDate}`
          : `${name} - Reservation Request`
        : `${name} - Contact Form Submission`;

    // Form subject (what the user entered or default)
    const formSubject =
      formType === 'booking'
        ? eventType
          ? `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} availability`
          : 'Reservation Request'
        : 'General Inquiry';

    // Render appropriate email template based on form type
    let customerEmailHtml: string;

    if (formType === 'booking') {
      const bookingEmailProps = {
        name,
        email: normalizedEmail,
        phone,
        message,
        subject: formSubject,
        eventType,
        date,
        guests,
      };
      customerEmailHtml = await render(React.createElement(BookingConfirmationEmail, bookingEmailProps));
    } else {
      const contactEmailProps = {
        name,
        email: normalizedEmail,
        phone,
        message,
        subject: formSubject,
      };
      customerEmailHtml = await render(React.createElement(ContactConfirmationEmail, contactEmailProps));
    }

    // Send single email: to customer, BCC staff, reply-to staff
    // Customer receives confirmation, staff gets a copy, and replies go to staff
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: normalizedEmail,
      bcc: staffEmail, // Staff gets a copy in their inbox
      replyTo: staffEmail, // When customer replies, it goes directly to staff
      subject: `Thank You for Contacting Us - ${emailSubject}`,
      html: customerEmailHtml,
    });

    if (emailResult.error) {
      console.error('Email sending error:', emailResult.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Form submitted successfully', success: true }, { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
