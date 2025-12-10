'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface EventPageHeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
}

export default function EventPageHero({ imageSrc, imageAlt, title, subtitle }: EventPageHeroProps) {
  return (
    <section className="relative mb-16 h-96">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" priority quality={85} />
        <div className="bg-davinci-charcoal/40 absolute inset-0" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl">{title}</h1>
          <p className="text-center text-xl md:text-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
