import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

function ActionLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http');
  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="cta-section py-20 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-theme-heading mb-4 font-serif text-3xl font-normal md:text-4xl">{title}</h2>
        <p className="text-theme-body mx-auto mb-8 max-w-xl text-base leading-relaxed">{description}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href={primaryHref} className="btn-primary px-7 py-3">
            {primaryLabel}
          </ActionLink>
          {secondaryLabel && secondaryHref && (
            <ActionLink href={secondaryHref} className="btn-secondary px-7 py-3">
              {secondaryLabel}
            </ActionLink>
          )}
        </div>
      </div>
    </section>
  );
}
