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
                        <span className="bg-linear-to-r from-davinci-gold to-davinci-gold-light bg-clip-text text-transparent">Celebration of Life</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-center text-2xl leading-relaxed text-gray-400 md:text-3xl">
                        Thoughtful menu selections for memorial services
                    </p>
                    <Link
                        href="/assets/menus/CelebrationofLifeMenu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lg font-semibold text-davinci-gold transition-colors hover:text-davinci-gold-light"
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
                    <div className="overflow-hidden rounded-2xl premium-card">
                        <div className="relative h-64 md:h-96">
                            <Image
                                src="/assets/images/menus/weddings/menu-1.jpg"
                                alt="Celebration of Life Menu"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-davinci-teal/85 to-davinci-teal-dark/85">
                                <h2 className="px-4 text-center font-serif text-5xl font-bold text-white md:text-6xl">Sample Menu</h2>
                            </div>
                        </div>
                        <div className="p-8 md:p-12">
                            {/* Buffet Style Badge */}
                            <div className="mb-8 rounded-xl border border-davinci-gold/20 bg-linear-to-r from-davinci-gold/10 to-davinci-gold-light/10 p-4 text-center">
                                <p className="text-lg font-semibold text-davinci-gold">Buffet Style</p>
                            </div>

                            <div className="space-y-8">
                                {/* Antipasto Bar */}
                                <div>
                                    <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Antipasto Bar</h3>
                                    <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
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
                                    <div className="rounded-xl border-l-4 border-davinci-gold bg-linear-to-r from-davinci-gold/20 to-davinci-gold-light/20 p-6">
                                        <div className="space-y-3 text-lg leading-relaxed text-gray-200">
                                            <p>• Penne al Pomodoro</p>
                                            <p>• Tortellini alla Gigi with Rose Sauce, Prosciutto & Mushrooms</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Entrée */}
                                <div>
                                    <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Entrée</h3>
                                    <div className="rounded-xl border border-davinci-gold/20 bg-linear-to-br from-davinci-gold/10 to-davinci-gold-light/10 p-6">
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
                                    <div className="rounded-xl bg-davinci-dark-light border border-davinci-gold/20 p-6 text-center">
                                        <p className="text-lg leading-relaxed text-gray-200">Assorted Pastries</p>
                                    </div>
                                </div>

                                {/* Drinks */}
                                <div>
                                    <h3 className="mb-4 text-center font-serif text-3xl font-bold text-white">Drinks</h3>
                                    <div className="rounded-xl border border-davinci-teal/20 bg-linear-to-br from-davinci-teal/10 to-davinci-teal-dark/10 p-6">
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
                    <div className="rounded-2xl bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold p-12 text-davinci-dark">
                        <h3 className="mb-4 font-serif text-4xl font-bold">Ready to Customize Your Menu?</h3>
                        <p className="mb-8 text-center text-xl leading-relaxed opacity-90">
                            Contact us to discuss your celebration of life service and create a thoughtful menu
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
