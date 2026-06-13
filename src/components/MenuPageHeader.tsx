import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';
import PageHero from './PageHero';

interface MenuPageHeaderProps {
  title: string;
  subtitle: string;
  pdfLink?: string;
}

export default function MenuPageHeader({ title, subtitle, pdfLink }: MenuPageHeaderProps) {
  return (
    <div className="mb-14">
      <PageHero title={title} description={subtitle} align="center" className="mx-auto mb-6 max-w-3xl" />
      {pdfLink && (
        <div className="text-center">
          <Link
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text inline-flex items-center gap-2"
          >
            Download PDF
            <HiExternalLink className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
