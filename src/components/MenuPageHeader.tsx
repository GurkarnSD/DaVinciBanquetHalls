import ExternalTextLink from '@/components/ExternalTextLink';
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
          <ExternalTextLink href={pdfLink}>Download PDF</ExternalTextLink>
        </div>
      )}
    </div>
  );
}
