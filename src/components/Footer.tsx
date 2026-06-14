import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="section-edge border-t transition-colors duration-200"
      style={{ backgroundColor: 'var(--bg-page)', borderColor: 'var(--border)' }}
    >
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 inline-block">
              <Image
                src="/assets/images/logos/logo.png"
                alt="Da Vinci Banquet Halls"
                width={140}
                height={70}
                className="site-logo h-12 w-auto"
              />
            </Link>
            <p className="text-theme-body max-w-xs text-sm leading-relaxed">
              Banquet halls for weddings, corporate events, and private celebrations in Woodbridge.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Contact</h3>
            <div className="text-theme-body space-y-2 text-sm">
              <p>
                5732 Highway 7
                <br />
                Woodbridge, ON L4L 3A2
              </p>
              <p>
                <a href="tel:905-851-3131" className="link-subtle">
                  905-851-3131
                </a>
              </p>
              <p>
                <a href="mailto:contact@davincibanquethalls.com" className="link-subtle">
                  contact@davincibanquethalls.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Hours</h3>
            <div className="text-theme-body space-y-1 text-sm">
              <p>Mon – Thu: 11 AM – 8 PM</p>
              <p>Fri – Sun: 11 AM – 5 PM</p>
            </div>
          </div>

          <div>
            <h3 className="footer-heading">Explore</h3>
            <div className="space-y-2">
              {[
                { href: '/venue', label: 'Venue' },
                { href: '/menus', label: 'Menus' },
                { href: '/events', label: 'Events' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/book', label: 'Book' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href="https://www.instagram.com/davinci.banquethalls/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link mt-5 inline-flex"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="section-edge text-theme-muted mt-12 border-t pt-6 text-center text-xs">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Da Vinci Banquet Halls</p>
        </div>
      </div>
    </footer>
  );
}
