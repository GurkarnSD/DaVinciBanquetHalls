'use client';

import MenuCard from '@/components/MenuCard';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fullMenus = [
  {
    title: 'Italian Menu',
    description: 'Complete selection of authentic Italian dishes and options',
    href: '/menus/italian',
    image: '/assets/images/menus/italian/appetizers.jpg',
  },
  {
    title: 'South Asian Menu',
    description: 'Full range of traditional South Asian cuisine options',
    href: '/menus/south-asian',
    image: '/assets/images/menus/south-asian/appetizers.jpg',
  },
];

const sampleMenus = [
  {
    title: 'Wedding Menus',
    description: 'Curated selections designed for your special day',
    href: '/menus/weddings',
    image: '/assets/images/menus/weddings/menu-1.jpg',
  },
  {
    title: 'Shower Menus',
    description: 'Thoughtfully planned menus for baby and bridal showers',
    href: '/menus/showers',
    image: '/assets/images/menus/showers/menu-1.jpg',
  },
  {
    title: 'Stag Menus',
    description: 'Perfect selections for stag parties and celebrations',
    href: '/menus/stags',
    image: '/assets/images/menus/stags/menu.jpg',
  },
  {
    title: 'South Asian Celebrations',
    description: 'Specialized curated menus for South Asian celebrations',
    href: '/menus/south-asian-celebrations',
    image: '/assets/images/menus/south-asian-celebrations/gold-package.jpg',
  },
  {
    title: 'Celebration of Life',
    description: 'Thoughtful menu selections for memorial services',
    href: '/menus/celebration-of-life',
    image: '/assets/images/menus/weddings/menu-1.jpg',
  },
  {
    title: 'Holiday Menus',
    description: 'Festive curated menus for holiday celebrations',
    href: '/menus/holiday',
    image: '/assets/images/menus/holiday/menu-1.jpg',
  },
];

export default function MenusPage() {
  return (
    <div className="min-h-screen pt-24 pb-0">
      {/* Hero Section */}
      <section className="container mx-auto mb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-7xl">
            <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
              Our Menus
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
            Discover our complete culinary offerings and curated sample menus, all crafted to perfection for your
            special occasions.
          </p>
        </motion.div>
      </section>

      {/* Full Menu Catalogs Section */}
      <section className="container mx-auto mb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-8 text-center">
            <div className="mb-4 inline-block">
              <span className="bg-davinci-gold/10 text-davinci-gold rounded-full px-4 py-2 text-sm font-semibold tracking-wider uppercase">
                Complete Menu Catalogs
              </span>
            </div>
            <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
              <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                Explore All Options
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
              Browse our complete selection of dishes and options. These comprehensive menus showcase every item
              available, allowing you to build your perfect custom menu.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {fullMenus.map((menu, index) => (
            <motion.div
              key={menu.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MenuCard
                title={menu.title}
                description={menu.description}
                href={menu.href}
                image={menu.image}
                delay={0}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sample Menus Section */}
      <section className="mb-0 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block">
                <span className="bg-davinci-teal/10 text-davinci-teal rounded-full px-4 py-2 text-sm font-semibold tracking-wider uppercase">
                  Sample Menus
                </span>
              </div>
              <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
                <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
                  Curated Selections
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
                Every event is unique, but sometimes you need a place to start. We&apos;ve created sample menus based on
                different event types. Each menu can be customized to suit your preferences—we can always add or remove
                items to make your celebration truly memorable.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sampleMenus.map((menu, index) => (
              <motion.div
                key={menu.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MenuCard
                  title={menu.title}
                  description={menu.description}
                  href={menu.href}
                  image={menu.image}
                  delay={0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark mb-0 bg-linear-to-br py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">Customize Your Menu</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-xl leading-relaxed opacity-90">
              Have specific dietary requirements or preferences? We&apos;re happy to work with you to create a
              customized menu tailored to your event.
            </p>
            <Link
              href="/contact"
              className="bg-davinci-dark hover:bg-davinci-charcoal inline-block rounded-full px-8 py-4 text-lg font-medium text-white transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
