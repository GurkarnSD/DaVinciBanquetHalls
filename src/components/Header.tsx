'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/venue', label: 'Venue Info' },
    { href: '/menus', label: 'Menus' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-davinci-dark/98 shadow-2xl backdrop-blur-md border-b border-davinci-gold/20'
        : 'bg-davinci-dark/90 backdrop-blur-sm'
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0 flex items-center space-x-2">
            <Image
              src="/assets/images/logos/logo.png"
              alt="Da Vinci Banquet Halls"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:flex items-center shrink-0"
            style={{
              gap: 'clamp(0.5rem, 1.5vw, 2rem)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap font-medium text-gray-300 transition-colors duration-200 hover:text-davinci-gold"
                style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="shrink-0 whitespace-nowrap rounded-full bg-linear-to-r from-davinci-gold to-davinci-gold-light px-6 py-2.5 font-medium text-davinci-dark transition-all duration-200 hover:from-davinci-gold-light hover:to-davinci-gold hover:scale-105"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
            >
              Book a Hall
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden shrink-0 p-2 text-gray-300 transition-colors hover:text-davinci-gold focus:outline-none focus:ring-2 focus:ring-davinci-gold focus:ring-offset-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 rounded-lg bg-davinci-dark-light/95 border border-davinci-gold/20 pb-4 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 font-medium text-gray-300 transition-colors duration-200 hover:text-davinci-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-2 rounded-full bg-linear-to-r from-davinci-gold to-davinci-gold-light px-6 py-2 text-center font-medium text-davinci-dark transition-all duration-200 hover:from-davinci-gold-light hover:to-davinci-gold hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Hall
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
