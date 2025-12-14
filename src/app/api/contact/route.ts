import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { render } from '@react-email/render';
import React from 'react';
import BookingConfirmationEmail from '@/emails/BookingConfirmationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const bookingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().min(1, 'Message is required'),
  eventType: z.string().optional(),
  date: z.string().optional(),
  guests: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;

    // Validate form data
    const validatedData = bookingSchema.parse(body as Record<string, unknown>);

    const { name, email, phone, message, eventType, date, guests } = validatedData;

    // Normalize email to lowercase to avoid errors
    const normalizedEmail = email.toLowerCase().trim();

    // Hardcoded email addresses
    const staffEmail = 'contact@davincibanquethalls.com';
    // Use form subdomain as the from address
    const fromEmail = 'Da Vinci Banquet Halls <noreply@form.davincibanquethalls.com>';

    // Build descriptive subject line for easy identification
    const eventTypeFormatted = eventType
      ? eventType
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      : 'Event';

    const emailSubject = `Da Vinci Reservation Request - ${name} - ${eventTypeFormatted}`;

    // Render booking confirmation email
    const bookingEmailProps = {
      name,
      email: normalizedEmail,
      phone,
      message,
      eventType,
      date,
      guests,
    };
    const emailHtml = await render(React.createElement(BookingConfirmationEmail, bookingEmailProps));

    // Send two separate emails for bidirectional communication:
    // 1. Email to customer with replyTo set to staff (customer replies go to staff)
    // 2. Email to staff with replyTo set to customer (staff replies go to customer)

    const customerEmailResult = await resend.emails.send({
      from: fromEmail,
      to: normalizedEmail,
      replyTo: staffEmail, // When customer replies, it goes to staff
      subject: emailSubject,
      html: emailHtml,
    });

    if (customerEmailResult.error) {
      console.error('Customer email sending error:', customerEmailResult.error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    const staffEmailResult = await resend.emails.send({
      from: fromEmail,
      to: staffEmail,
      replyTo: normalizedEmail, // When staff replies, it goes to customer
      subject: `New Inquiry: ${emailSubject}`,
      html: emailHtml,
    });

    if (staffEmailResult.error) {
      console.error('Staff email sending error:', staffEmailResult.error);
      // Don't fail the request if staff email fails, customer already got their confirmation
      console.warn('Customer email sent successfully, but staff notification failed');
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
