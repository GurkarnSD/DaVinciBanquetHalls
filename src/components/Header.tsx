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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-davinci-dark/98 border-davinci-gold/20 border-b shadow-2xl backdrop-blur-md'
          : 'bg-davinci-dark/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center space-x-2">
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
            className="hidden shrink-0 items-center xl:flex"
            style={{
              gap: 'clamp(0.5rem, 1.5vw, 2rem)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-davinci-gold shrink-0 font-medium whitespace-nowrap text-gray-300 transition-colors duration-200"
                style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="from-davinci-gold to-davinci-gold-light text-davinci-dark hover:from-davinci-gold-light hover:to-davinci-gold shrink-0 rounded-full bg-linear-to-r px-6 py-2.5 font-medium whitespace-nowrap transition-all duration-200 hover:scale-105"
              style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)' }}
            >
              Book a Hall
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="hover:text-davinci-gold focus:ring-davinci-gold shrink-0 rounded-md p-2 text-gray-300 transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="bg-davinci-dark-light/95 border-davinci-gold/20 mt-4 rounded-lg border pb-4 shadow-2xl backdrop-blur-md xl:hidden">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-davinci-gold py-2 font-medium text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="from-davinci-gold to-davinci-gold-light text-davinci-dark hover:from-davinci-gold-light hover:to-davinci-gold mt-2 rounded-full bg-linear-to-r px-6 py-2 text-center font-medium transition-all duration-200 hover:scale-105"
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
