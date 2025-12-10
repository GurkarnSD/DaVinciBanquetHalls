'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

export default function SouthAsianCelebrationsMenuPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 font-serif text-6xl font-bold text-white md:text-7xl">
            <span className="from-davinci-gold to-davinci-gold-light bg-linear-to-r bg-clip-text text-transparent">
              South Asian Celebrations
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
            Specialized curated menus for South Asian celebrations
          </p>
          <Link
            href="/assets/menus/SouthAsianCelebrationMenus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-davinci-gold hover:text-davinci-gold-light inline-flex items-center text-lg font-semibold transition-colors"
          >
            Download Full PDF Menu
            <HiExternalLink className="ml-2 h-6 w-6" />
          </Link>
        </motion.div>

        {/* Gold Package */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/gold-package.jpg"
                alt="Gold Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#C9A961]/85 to-[#A68B3D]/85">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Gold</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Appetizers */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Appetizers</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Cucumber Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Garden Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 1 Sweet (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 1 Ice Cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Diamond Package */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/diamond-package.jpg"
                alt="Diamond Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#1A5F7A]/85 to-[#0F4C5C]/85">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Diamond</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Cocktail Hour */}
                <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                  <h3 className="text-davinci-gold mb-2 font-serif text-2xl font-bold">Cocktail Hour</h3>
                  <p className="text-lg leading-relaxed text-gray-200">Choice of 1 Welcome Drink</p>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Appetizers</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 2 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-4">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Garden Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Pasta Salad</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-4">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 1 Ice Cream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Platinum Package */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/platinum-package.jpg"
                alt="Platinum Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="from-davinci-gold/85 to-davinci-gold-light/85 absolute inset-0 flex items-center justify-center bg-linear-to-br">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Platinum</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Cocktail Hour */}
                <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                  <h3 className="text-davinci-gold mb-2 font-serif text-2xl font-bold">Cocktail Hour</h3>
                  <p className="text-lg leading-relaxed text-gray-200">Choice of 1 Welcome Drink</p>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Appetizers</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 2 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Choice of 3 Salads</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">• Fresh Butter Naan</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)</p>
                      <p>Choice of 2 Ice Creams</p>
                      <p>Fruit Platters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Exclusive Package */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="premium-card overflow-hidden rounded-2xl">
            <div className="relative h-64 md:h-96">
              <Image
                src="/assets/images/menus/south-asian-celebrations/exclusive-package.jpg"
                alt="Exclusive Package"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#C9A961]/85 to-[#A68B3D]/85">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Exclusive</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Cocktail Hour */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Cocktail Hour</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                    <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
                      <p>Choice of 1 Welcome Drink</p>
                      <p>Chef&apos;s Choice Hors D&apos;Oeuvres</p>
                    </div>
                  </div>
                </div>

                {/* Appetizers */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Appetizers</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="mb-4 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Appetizers</p>
                      </div>
                      <div>
                        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                        <p className="text-lg leading-relaxed text-gray-200">Choice of 3 Non-Vegetarian Appetizers</p>
                      </div>
                    </div>
                    <div className="border-t border-[#C9A961]/30 pt-4 text-center">
                      <p className="text-lg leading-relaxed text-gray-200">
                        Sweet Platters to be included with Coffee & Tea
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dinner</h3>
                  <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">Choice of 4 Vegetarian Dinner Items</p>
                        </div>
                        <div>
                          <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
                          <p className="text-lg leading-relaxed text-gray-200">
                            Choice of 3 Non-Vegetarian Dinner Items
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3">
                        <p className="text-lg leading-relaxed text-gray-200">• Basmati Rice</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Cucumber Raita</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Salad Bar</p>
                        <p className="text-lg leading-relaxed text-gray-200 md:col-span-3">
                          • Fresh Butter & Garlic Naan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sweet Table */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Sweet Table</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6">
                    <div className="space-y-4">
                      <p className="text-center text-lg leading-relaxed text-gray-300">
                        Choice of 2 Sweets (Raas Malai, Gulab Jamun, Moong Halwa, and/or Gajar Halwa)
                      </p>
                      <p className="text-center text-lg leading-relaxed text-gray-300">
                        Ice Cream Bar with 2 Flavours of Ice Cream (with toppings)
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4 md:grid-cols-4">
                        <p className="text-lg leading-relaxed text-gray-200">• Assorted Cakes</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Italian Pastries</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Assorted Tarts</p>
                        <p className="text-lg leading-relaxed text-gray-200">• Fresh Fruit Platters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="from-davinci-gold via-davinci-gold-light to-davinci-gold text-davinci-dark rounded-2xl bg-linear-to-br p-12">
            <h3 className="mb-4 font-serif text-4xl font-bold">Ready to Customize Your Celebration Menu?</h3>
            <p className="mb-8 text-center text-xl leading-relaxed opacity-90">
              Contact us to discuss your South Asian celebration and create the perfect menu
            </p>
            <Link
              href="/contact"
              className="bg-davinci-dark hover:bg-davinci-charcoal inline-block rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
