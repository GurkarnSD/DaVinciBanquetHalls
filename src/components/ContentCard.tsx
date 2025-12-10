'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  children: ReactNode;
  titleGradient?: boolean;
}

export default function ContentCard({ title, children, titleGradient = true }: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="premium-card rounded-2xl p-8 md:p-12"
    >
      <h2 className="mb-6 text-center font-serif text-4xl font-bold text-white md:text-5xl">
        {titleGradient ? (
          <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
            {title}
          </span>
        ) : (
          title
        )}
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-gray-300">{children}</div>
    </motion.div>
  );
}
