'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

export default function CelebrationOfLifeMenuPage() {
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
              Celebration of Life
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
            Thoughtful menu selections for memorial services
          </p>
          <Link
            href="/assets/menus/CelebrationofLifeMenu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-davinci-gold hover:text-davinci-gold-light inline-flex items-center text-lg font-semibold transition-colors"
          >
            Download Full PDF Menu
            <HiExternalLink className="ml-2 h-6 w-6" />
          </Link>
        </motion.div>

        {/* Sample Menu */}
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
                src="/assets/images/menus/weddings/menu-1.jpg"
                alt="Celebration of Life Menu"
                fill
                className="object-cover"
              />
              <div className="from-davinci-teal/85 to-davinci-teal-dark/85 absolute inset-0 flex items-center justify-center bg-linear-to-br">
                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Sample Menu</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              {/* Buffet Style Badge */}
              <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 mb-8 rounded-xl border bg-linear-to-r p-4 text-center">
                <p className="text-davinci-gold text-lg font-semibold">Buffet Style</p>
              </div>

              <div className="space-y-8">
                {/* Antipasto Bar */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Antipasto Bar</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="grid grid-cols-2 gap-3 text-lg leading-relaxed text-gray-200 md:grid-cols-3">
                      <p>• Prosciutto</p>
                      <p>• Assorted Cold Cuts</p>
                      <p>• Bocconcini & Cherry Tomatoes</p>
                      <p>• Grilled Vegetables</p>
                      <p>• Assorted Olives</p>
                      <p>• Vegetables Sott&apos;olio</p>
                      <p>• Green Salad</p>
                      <p>• Bean Salad</p>
                      <p>• Greek Salad</p>
                      <p>• Couscous Salad</p>
                      <p>• Assorted Pizzas</p>
                      <p>• Assorted Cheese Trays</p>
                    </div>
                  </div>
                </div>

                {/* Pasta */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Pasta</h3>
                  <div className="border-davinci-gold from-davinci-gold/20 to-davinci-gold-light/20 rounded-xl border-l-4 bg-linear-to-r p-6">
                    <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                      <p>• Penne al Pomodoro</p>
                      <p>• Tortellini alla Gigi with Rose Sauce, Prosciutto & Mushrooms</p>
                    </div>
                  </div>
                </div>

                {/* Entrée */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entrée</h3>
                  <div className="border-davinci-gold/20 from-davinci-gold/10 to-davinci-gold-light/10 rounded-xl border bg-linear-to-br p-6">
                    <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                      <p>• Chicken Breast al Limone</p>
                      <p>• Veal Parmigiana</p>
                      <p>• Seasonal Vegetables</p>
                      <p>• Oven Roasted Potatoes</p>
                    </div>
                  </div>
                </div>

                {/* Dessert */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Dessert</h3>
                  <div className="bg-davinci-dark-light border-davinci-gold/20 rounded-xl border p-6 text-center">
                    <p className="text-lg leading-relaxed text-gray-200">Assorted Pastries</p>
                  </div>
                </div>

                {/* Drinks */}
                <div>
                  <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Drinks</h3>
                  <div className="border-davinci-teal/20 from-davinci-teal/10 to-davinci-teal-dark/10 rounded-xl border bg-linear-to-br p-6">
                    <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                      <p>• Red & White Wine</p>
                      <p>• Soft Drinks, Juice, Still & Sparkling Water</p>
                      <p>• Coffee, Tea, Espresso</p>
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
            <h3 className="mb-4 font-serif text-4xl font-bold">Ready to Customize Your Menu?</h3>
            <p className="mb-8 text-center text-xl leading-relaxed opacity-90">
              Contact us to discuss your celebration of life service and create a thoughtful menu
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
