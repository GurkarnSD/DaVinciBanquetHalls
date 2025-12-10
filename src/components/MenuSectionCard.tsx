'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MenuSectionCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  gradientFrom?: 'gold' | 'teal';
  children: ReactNode;
}

export default function MenuSectionCard({
  imageSrc,
  imageAlt,
  title,
  gradientFrom = 'gold',
  children,
}: MenuSectionCardProps) {
  const gradientClass =
    gradientFrom === 'teal'
      ? 'bg-linear-to-br from-davinci-teal/85 to-davinci-teal-dark/85'
      : 'bg-linear-to-br from-davinci-gold/85 to-davinci-gold-light/85';

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="premium-card overflow-hidden rounded-2xl">
        <div className="relative h-64 md:h-96">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            quality={80}
            loading="lazy"
          />
          <div className={`absolute inset-0 flex items-center justify-center ${gradientClass}`}>
            <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">{title}</h2>
          </div>
        </div>
        <div className="p-8 md:p-12">{children}</div>
      </div>
    </motion.section>
  );
}
