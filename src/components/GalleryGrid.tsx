'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

interface GalleryGridProps {
  images: string[];
  columns?: number;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      <div className={`grid ${gridCols[columns as keyof typeof gridCols] || gridCols[3]} gap-4`}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '50px' }}
            transition={{ duration: 0.2, delay: Math.min(index * 0.05, 0.5) }}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading={index < 6 ? 'eager' : 'lazy'}
              quality={80}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-full max-h-[90vh] w-full max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Selected image" fill className="object-contain" quality={90} priority />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <HiX className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
