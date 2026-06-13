import type { MediaSlot } from '@/config/media-slots';
import MediaPlaceholder from './MediaPlaceholder';
import Image from 'next/image';

interface EventPageHeroProps {
  slot: MediaSlot;
  title: string;
  subtitle: string;
}

export default function EventPageHero({ slot, title, subtitle }: EventPageHeroProps) {
  return (
    <section className="section-edge relative mb-14 border-b">
      <div className="media-frame relative aspect-[21/9] max-h-[420px] w-full md:aspect-[21/8]">
        {slot.src ? (
          <Image src={slot.src} alt={slot.title} fill className="object-cover" sizes="100vw" priority quality={85} />
        ) : (
          <MediaPlaceholder title={slot.title} aspect={slot.aspect} category={slot.category} slotId={slot.id} />
        )}
        <div className="media-scrim absolute inset-0" />
        <div className="on-media absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <p className="eyebrow mb-3">Events</p>
          <h1 className="mb-2 font-serif text-4xl font-medium md:text-5xl">{title}</h1>
          <p className="max-w-xl text-sm md:text-base">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
