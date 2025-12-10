'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuCTAProps {
  title: string;
  description: string;
}

export default function MenuCTA({ title, description }: MenuCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark rounded-2xl bg-linear-to-br p-12">
        <h3 className="mb-4 font-serif text-4xl font-bold">{title}</h3>
        <p className="mb-8 text-center text-xl leading-relaxed opacity-90">{description}</p>
        <Link
          href="/contact"
          className="bg-davinci-dark hover:bg-davinci-charcoal inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
