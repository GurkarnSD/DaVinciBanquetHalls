'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/venue', label: 'Venue' },
  { href: '/menus', label: 'Menus' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`site-header fixed top-0 right-0 left-0 z-50 border-b transition-colors duration-200 ${isScrolled ? 'site-header-scrolled' : ''}`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/images/logos/logo.png"
            alt="Da Vinci Banquet Halls"
            width={120}
            height={60}
            className="site-logo h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'nav-link-active' : ''}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 xl:flex">
          <a href="tel:905-851-3131" className="nav-link text-[var(--accent-gold)] hover:opacity-80">
            905-851-3131
          </a>
          <ThemeToggle />
          <Link href="/book" className="btn-primary px-5 py-2.5">
            Book
          </Link>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <a href="tel:905-851-3131" className="nav-link hidden px-2 sm:inline" aria-label="Call Da Vinci">
            Call
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="theme-toggle p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="site-header-mobile mobile-nav-panel border-t xl:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-mobile py-2.5 ${isActive(link.href) ? 'nav-link-mobile-active' : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:905-851-3131" className="nav-link-mobile py-2.5 text-[var(--accent-gold)]">
              905-851-3131
            </a>
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
