interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`mb-12 md:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-theme-heading mb-4 font-serif text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className={`lead max-w-xl text-base ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
}
