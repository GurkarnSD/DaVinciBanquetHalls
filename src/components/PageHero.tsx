interface PageHeroProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function PageHero({ title, description, align = 'left', className = '' }: PageHeroProps) {
  const centered = align === 'center';

  return (
    <header className={`mb-16 md:mb-20 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h1 className="text-theme-heading mb-6 font-serif text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && <p className={`lead max-w-2xl ${centered ? 'mx-auto' : ''}`}>{description}</p>}
    </header>
  );
}
