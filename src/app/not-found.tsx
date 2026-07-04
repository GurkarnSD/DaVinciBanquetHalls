import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function NotFound() {
  return (
    <div className="page-shell pb-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <PageHero
          eyebrow="404"
          title="This page could not be found"
          description="The link may be outdated or the page may have moved. Head back to the homepage or contact us for help."
          align="center"
        />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary px-7 py-3">
            Back to homepage
          </Link>
          <Link href="/contact" className="btn-secondary px-7 py-3">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
