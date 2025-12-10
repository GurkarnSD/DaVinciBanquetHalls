'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

interface EventCardProps {
  title: string;
  description?: string;
  href: string;
  image?: string;
  delay?: number;
}

export default function EventCard({
  title,
  description,
  href,
  image = '/assets/images/events/events.jpg',
  delay = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href}>
        <div className="premium-card group relative overflow-hidden rounded-2xl transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            ) : (
              <ImagePlaceholder height={256} label={title} className="h-full" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            <div className="from-davinci-gold/20 absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="p-6">
            <h3 className="group-hover:text-davinci-gold mb-2 text-2xl font-bold text-white transition-colors">
              {title}
            </h3>
            {description && <p className="mb-4 text-gray-400">{description}</p>}
            <span className="text-davinci-gold inline-block font-medium transition-all group-hover:translate-x-2">
              Learn More →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
