import Image from 'next/image';
import type { ReactNode } from 'react';

interface MenuSectionCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children: ReactNode;
}

export default function MenuSectionCard({ imageSrc, imageAlt, title, children }: MenuSectionCardProps) {
  return (
    <section className="section-edge mb-16 border-b pb-16 last:mb-0 last:border-b-0 last:pb-0">
      <div className="media-frame mb-8">
        <div className="relative aspect-21/9 md:aspect-21/8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            quality={80}
            loading="lazy"
          />
          <div className="media-scrim absolute inset-0" />
          <div className="on-media absolute inset-0 flex items-end p-6 md:p-8">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">{title}</h2>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
