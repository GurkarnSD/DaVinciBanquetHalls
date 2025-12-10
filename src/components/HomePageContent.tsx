'use client';

import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import ImageCarousel from '@/components/ImageCarousel';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { carouselImages } from '@/config/carousel-images';
import { motion } from 'framer-motion';
import { FaBuilding, FaUtensils, FaStar } from 'react-icons/fa';

export default function HomePageContent() {
  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <VideoBackground fallbackImage="/assets/images/carousel/slider-1.jpg">
        <div className="relative z-10 px-4 text-center text-white">
          <div className="relative z-10 mx-auto max-w-5xl py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-shadow:0_4px_20px_rgba(0,0,0,0.8),_0_2px_8px_rgba(0,0,0,0.6) font-serif text-5xl leading-relaxed font-light text-white italic md:text-7xl lg:text-8xl">
                &ldquo;Simplicity is the
                <br className="hidden md:block" /> Ultimate Sophistication.&rdquo;
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-shadow:0_2px_12px_rgba(0,0,0,0.7) mb-12 text-center text-xl font-light tracking-wider text-gray-100 md:text-2xl"
            >
              — Leonardo da Vinci
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/book"
                className="group from-davinci-gold to-davinci-gold-light text-davinci-dark hover:shadow-davinci-gold/50 relative overflow-hidden rounded-full bg-linear-to-r px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Book Your Event</span>
              </Link>
              <Link
                href="/venue"
                className="border-davinci-gold bg-davinci-gold/10 hover:bg-davinci-gold/20 rounded-full border-2 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Explore Our Venues
              </Link>
            </motion.div>
          </div>
        </div>
      </VideoBackground>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="via-davinci-dark absolute inset-0 bg-linear-to-b from-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Experience Excellence
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-center text-xl text-gray-400">
              From intimate gatherings to grand celebrations, we provide exceptional service and elegant spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Elegant Venues',
                description: 'Beautifully designed spaces that accommodate events of all sizes',
                icon: FaBuilding,
                gradient: 'from-[#c9a961] to-[#e5c97a]',
              },
              {
                title: 'Exquisite Menus',
                description: 'Culinary excellence with Italian and South Asian cuisine',
                icon: FaUtensils,
                gradient: 'from-[#c9a961] to-[#e5c97a]',
              },
              {
                title: 'Memorable Events',
                description: 'Creating unforgettable moments for your special occasions',
                icon: FaStar,
                gradient: 'from-[#1a5f7a] to-[#2a7a9a]',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="premium-card group relative overflow-hidden rounded-2xl p-8 text-center"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <div className={`rounded-full bg-linear-to-br ${feature.gradient} p-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Our Venues
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-center text-xl text-gray-200">Step into elegance and sophistication</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-davinci-gold relative rounded-2xl border-2"
              >
                <ImagePlaceholder
                  height={300}
                  label={`Venue Image ${i}`}
                  className="h-[300px] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-0 bottom-0 left-0 rounded-b-2xl p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-serif text-2xl font-bold">Elegant Space {i}</h3>
                  <p className="text-sm text-gray-300">Perfect for your celebration</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/gallery"
              className="border-davinci-gold bg-davinci-gold/10 text-davinci-gold hover:bg-davinci-gold/20 inline-block rounded-full border-2 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Our Spaces
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-center text-xl text-gray-200">
              Take a glimpse into our elegant banquet halls
            </p>
          </motion.div>
          <div className="mx-auto max-w-6xl">
            <div className="h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <ImageCarousel images={carouselImages} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative mb-0 overflow-hidden py-24">
        <div className="from-davinci-gold via-davinci-gold-light to-davinci-gold absolute inset-0 bg-linear-to-br" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Ready to Plan Your Event?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-xl text-gray-100">
              Contact us today to discuss your celebration and let us help make it unforgettable.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group bg-davinci-dark hover:shadow-davinci-dark/50 relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Get in Touch</span>
              </Link>
              <Link
                href="/book"
                className="rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Book a Hall
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
