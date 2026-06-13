import Link from 'next/link';
import Image from 'next/image';

interface MenuCardProps {
  title: string;
  description?: string;
  href: string;
  image?: string;
}

export default function MenuCard({
  title,
  description,
  href,
  image = '/assets/images/menus/italian/appetizers.jpg',
}: MenuCardProps) {
  return (
    <Link href={href} className="group block">
      <article>
        <div className="media-frame relative mb-4 aspect-4/3">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
          />
        </div>
        <h3 className="text-theme-heading mb-2 font-serif text-xl font-medium">{title}</h3>
        {description && <p className="text-theme-muted mb-3 text-sm leading-relaxed">{description}</p>}
        <span className="btn-text">View menu</span>
      </article>
    </Link>
  );
}
