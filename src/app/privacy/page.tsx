import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description: 'How Da Vinci Banquet Halls collects, uses, and protects your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="page-shell pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <PageHero
          eyebrow="Legal"
          title="Privacy policy"
          description="Last updated July 2026. This policy describes how we handle information submitted through our website and booking forms."
        />
        <ContentCard title="Information we collect">
          <p>
            When you contact us or submit a booking request, we collect details you provide such as your name, email,
            phone number, event date, guest count, and message content.
          </p>
          <p>
            We also collect standard technical data through analytics tools, including page views and general device
            information, to improve site performance.
          </p>
        </ContentCard>
        <div className="mt-8">
          <ContentCard title="How we use your information">
            <p>
              We use your information to respond to inquiries, coordinate venue tours, prepare quotes, and manage event
              bookings. We do not sell your personal information to third parties.
            </p>
            <p>
              We may share necessary details with service providers that help us operate our website and email
              communications, subject to appropriate safeguards.
            </p>
          </ContentCard>
        </div>
        <div className="mt-8">
          <ContentCard title="Contact">
            <p>
              For privacy-related questions, email{' '}
              <a href="mailto:contact@davincibanquethalls.com" className="link-subtle">
                contact@davincibanquethalls.com
              </a>{' '}
              or call{' '}
              <a href="tel:905-851-3131" className="link-subtle">
                905-851-3131
              </a>
              .
            </p>
          </ContentCard>
        </div>
      </div>
    </div>
  );
}
