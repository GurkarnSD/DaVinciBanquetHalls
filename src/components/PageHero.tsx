interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function PageHero({ eyebrow, title, description, align = 'left', className = '' }: PageHeroProps) {
  const centered = align === 'center';

  return (
    <header className={`mb-16 md:mb-20 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h1 className="text-theme-heading mb-6 font-serif text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && <p className={`lead max-w-2xl ${centered ? 'mx-auto' : ''}`}>{description}</p>}
    </header>
  );
}
