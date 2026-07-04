import Link from 'next/link';
import type { MediaSlot } from '@/config/media-slots';
import MediaImage from './MediaImage';

interface EventCardProps {
  title: string;
  description?: string;
  href: string;
  slot: MediaSlot;
}

export default function EventCard({ title, description, href, slot }: EventCardProps) {
  return (
    <Link href={href} className="group block">
      <article>
        <div className="media-frame relative mb-4 aspect-3/2">
          <div className="media-frame-zoom absolute inset-0">
            <MediaImage
              slot={slot}
              fill
              imageClassName="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={75}
              loading="lazy"
            />
          </div>
        </div>
        <h3 className="text-theme-heading group-hover:text-[var(--accent-gold)] mb-2 font-serif text-xl font-medium transition-colors duration-200">
          {title}
        </h3>
        {description && <p className="text-theme-muted mb-3 text-sm leading-relaxed">{description}</p>}
        <span className="btn-text">Learn more</span>
      </article>
    </Link>
  );
}
