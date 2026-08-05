import type { MediaSlot } from '@/config/media-slots';
import MediaImage from './MediaImage';

interface EventPageHeroProps {
  slot: MediaSlot;
  title: string;
  subtitle: string;
}

export default function EventPageHero({ slot, title, subtitle }: EventPageHeroProps) {
  return (
    <section className="section-edge relative mb-14 border-b">
      <div className="media-frame relative aspect-[21/9] max-h-[420px] w-full md:aspect-[21/8]">
        <MediaImage slot={slot} fill imageClassName="object-cover" sizes="100vw" priority quality={85} />
        <div className="event-hero-scrim absolute inset-0" />
        <div className="on-media absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <div className="event-hero-copy max-w-2xl p-5 md:p-6">
            <h1 className="mb-2 font-serif text-4xl font-normal md:text-5xl">{title}</h1>
            <p className="max-w-xl text-sm md:text-base">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
