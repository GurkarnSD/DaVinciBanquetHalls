'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-16 h-96">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/about.jpg"
            alt="About Da Vinci Banquet Halls"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 font-serif text-5xl font-bold md:text-6xl">About Us</h1>
            <p className="text-xl md:text-2xl">Our Story & Mission</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto mb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-center text-xl leading-relaxed text-gray-400">
              At Da Vinci Banquet Halls, we are dedicated to creating extraordinary experiences for your most important
              celebrations. Our mission is to provide elegant, sophisticated venues where every detail is carefully
              crafted to ensure your event is nothing short of perfection.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-2xl p-8"
            >
              <h3 className="mb-4 font-serif text-3xl font-bold text-white">Excellence in Every Detail</h3>
              <p className="mb-4 leading-relaxed text-gray-400">
                We believe that every celebration deserves the finest attention to detail. From the moment you step
                through our doors, you&apos;ll experience the elegance and sophistication that sets Da Vinci Banquet
                Halls apart.
              </p>
              <p className="leading-relaxed text-gray-400">
                Our team is committed to understanding your vision and bringing it to life, ensuring that your event
                exceeds expectations and creates lasting memories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card rounded-2xl p-8"
            >
              <h3 className="mb-4 font-serif text-3xl font-bold text-white">A Legacy of Celebration</h3>
              <p className="mb-4 leading-relaxed text-gray-400">
                With years of experience in hosting memorable events, we have built a reputation for excellence in the
                banquet hall industry. Our venues have been the backdrop for countless weddings, corporate gatherings,
                and special celebrations.
              </p>
              <p className="leading-relaxed text-gray-400">
                We take pride in being part of your most important moments and are honored to help you create memories
                that will last a lifetime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
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
                Our Values
              </span>
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Elegance',
                description:
                  'We maintain the highest standards of elegance and sophistication in every aspect of our service.',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from venue design to culinary offerings.',
              },
              {
                title: 'Experience',
                description: 'We are dedicated to creating unforgettable experiences that exceed your expectations.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="premium-card rounded-2xl p-8 text-center"
              >
                <h3 className="text-davinci-gold mb-4 font-serif text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
