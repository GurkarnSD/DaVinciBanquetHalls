'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/config/gallery-images';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-7xl">
            <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
            Explore our beautiful venues and see the elegance we bring to every celebration
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4">
        <GalleryGrid images={galleryImages} columns={3} />
      </section>
    </div>
  );
}
