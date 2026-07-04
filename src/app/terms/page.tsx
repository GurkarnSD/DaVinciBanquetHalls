import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContentCard from '@/components/ContentCard';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Terms of Service',
  description: 'Terms governing use of the Da Vinci Banquet Halls website and online inquiry services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="page-shell pb-20">
      <div className="container mx-auto max-w-3xl px-4">
        <PageHero
          eyebrow="Legal"
          title="Terms of service"
          description="Last updated July 2026. By using this website, you agree to the terms outlined below."
        />
        <ContentCard title="Website use">
          <p>
            This website provides information about Da Vinci Banquet Halls and a way to submit event inquiries. Content is
            provided for general reference and may change without notice.
          </p>
          <p>
            Submitting a form does not guarantee availability, pricing, or a confirmed booking. All reservations are
            subject to contract terms agreed upon separately with our team.
          </p>
        </ContentCard>
        <div className="mt-8">
          <ContentCard title="Content and media">
            <p>
              Photographs, videos, and copy on this site are owned by Da Vinci Banquet Halls or used with permission.
              Reproduction without written consent is not permitted.
            </p>
          </ContentCard>
        </div>
        <div className="mt-8">
          <ContentCard title="Questions">
            <p>
              For questions about these terms, contact{' '}
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
