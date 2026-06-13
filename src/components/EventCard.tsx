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
        <div className="media-frame relative mb-4 aspect-[3/2]">
          <MediaImage
            slot={slot}
            fill
            imageClassName="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
          />
        </div>
        <h3 className="text-theme-heading mb-2 font-serif text-xl font-medium">{title}</h3>
        {description && <p className="text-theme-muted mb-3 text-sm leading-relaxed">{description}</p>}
        <span className="btn-text">Learn more</span>
      </article>
    </Link>
  );
}
