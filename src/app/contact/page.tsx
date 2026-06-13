'use client';

import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import { FaInstagram } from 'react-icons/fa';

const CONTACT_ITEMS = [
  {
    label: 'Address',
    content: (
      <>
        5732 Highway 7
        <br />
        Woodbridge, ON L4L 3A2
      </>
    ),
  },
  {
    label: 'Phone',
    content: (
      <a href="tel:905-851-3131" className="link-subtle">
        905-851-3131
      </a>
    ),
  },
  {
    label: 'Email',
    content: (
      <a href="mailto:contact@davincibanquethalls.com" className="link-subtle">
        contact@davincibanquethalls.com
      </a>
    ),
  },
  {
    label: 'Hours',
    content: (
      <>
        Mon – Thu: 11 AM – 8 PM
        <br />
        Fri – Sun: 11 AM – 5 PM
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <PageHero
          eyebrow="Contact"
          title="Get in Touch"
          description="Questions about availability, capacity, or menus? Send us a note and we will follow up."
        />

        <div className="surface mb-10 p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label}>
                <dt className="eyebrow mb-2 tracking-[0.14em] normal-case">{item.label}</dt>
                <dd className="text-theme-body text-sm leading-relaxed">{item.content}</dd>
              </div>
            ))}
          </dl>
          <a
            href="https://www.instagram.com/davinci.banquethalls/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-subtle mt-6 inline-flex items-center gap-2 text-sm"
          >
            <FaInstagram className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <ContactForm title="Send a Message" variant="contact" />
      </div>
    </div>
  );
}
