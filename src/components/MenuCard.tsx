'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
  description?: string;
  href: string;
  image?: string;
  delay?: number;
}

export default function MenuCard({
  title,
  description,
  href,
  image = '/assets/images/menus/menu.jpg',
  delay = 0,
}: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href}>
        <div className="premium-card relative overflow-hidden rounded-2xl transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-davinci-gold">
              {title}
            </h3>
            {description && <p className="mb-4 text-gray-400">{description}</p>}
            <span className="font-medium text-davinci-gold group-hover:underline">View Menu →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
