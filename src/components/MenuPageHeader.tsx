'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

interface MenuPageHeaderProps {
  title: string;
  subtitle: string;
  pdfLink?: string;
}

export default function MenuPageHeader({ title, subtitle, pdfLink }: MenuPageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-7xl">
        <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
        {subtitle}
      </p>
      {pdfLink && (
        <Link
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-lg font-semibold text-davinci-gold transition-colors hover:text-davinci-gold-light"
        >
          Download Full PDF Menu
          <HiExternalLink className="ml-2 h-6 w-6" />
        </Link>
      )}
    </motion.div>
  );
}

