'use client';

import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';

const STEPS = [
  { step: '1', title: 'Submit This Form', detail: 'Include your date, guest count, and event type.' },
  { step: '2', title: 'We Confirm Availability', detail: 'Response within 24–48 hours by email or phone.' },
  { step: '3', title: 'Venue Tour', detail: 'Walk the halls and review floorplan options.' },
  { step: '4', title: 'Menu & Booking', detail: 'Finalize hall, catering, and deposit details.' },
];

export default function BookPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <PageHero
          eyebrow="Book"
          title="Reserve Your Date"
          description="Submit your event details below. Our team will confirm availability and schedule a tour."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <ContactForm title="Reservation Request" variant="booking" />

          <aside className="space-y-6">
            <div className="surface p-8">
              <h2 className="text-theme-heading mb-6 font-serif text-xl font-medium">What Happens Next</h2>
              <ol className="space-y-5">
                {STEPS.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="border-theme text-theme-heading flex h-8 w-8 shrink-0 items-center justify-center border text-xs font-medium">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-theme-heading text-sm font-medium">{item.title}</p>
                      <p className="text-theme-body text-sm">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="surface text-theme-body p-8 text-sm">
              <p className="text-theme-heading mb-1 font-medium">Questions Before Booking?</p>
              <p className="mb-3">Call or email us directly.</p>
              <p>
                <a href="tel:905-851-3131" className="text-theme-heading font-medium hover:underline">
                  905-851-3131
                </a>
              </p>
              <p>
                <a href="mailto:contact@davincibanquethalls.com" className="hover:underline">
                  contact@davincibanquethalls.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
