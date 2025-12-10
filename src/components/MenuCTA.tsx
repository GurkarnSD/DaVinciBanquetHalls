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
            <div className="rounded-2xl bg-linear-to-br from-davinci-gold via-davinci-gold-light to-davinci-gold p-12 text-davinci-dark">
                <h3 className="mb-4 font-serif text-4xl font-bold">{title}</h3>
                <p className="mb-8 text-center text-xl leading-relaxed opacity-90">{description}</p>
                <Link
                    href="/contact"
                    className="inline-block rounded-full bg-davinci-dark px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-davinci-charcoal"
                >
                    Contact Us
                </Link>
            </div>
        </motion.div>
    );
}

