'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/venue', label: 'Venue' },
    { href: '/menus', label: 'Menus' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`site-header fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-200 ${isScrolled ? 'site-header-scrolled' : ''}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/images/logos/logo.png"
            alt="Da Vinci Banquet Halls"
            width={120}
            height={60}
            className="site-logo h-10 w-auto md:h-11"
          />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/book" className="btn-primary px-5 py-2.5">
            Book
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="theme-toggle p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-header-mobile border-t xl:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-mobile py-2.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="btn-primary mt-3 px-5 py-2.5 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
