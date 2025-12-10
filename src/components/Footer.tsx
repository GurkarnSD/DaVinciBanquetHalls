import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative border-t border-davinci-gold/20 bg-linear-to-b from-davinci-dark to-davinci-dark-light text-gray-300">
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/assets/images/logos/logo.png"
                alt="Da Vinci Banquet Halls"
                width={150}
                height={75}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Elegant banquet halls for your most important celebrations.
            </p>
            <div className="mt-4 h-1 w-20 bg-linear-to-r from-davinci-gold to-davinci-gold-light" />
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Address:</span>
                <br />
                5732 Highway 7
                <br />
                Woodbridge, ON, L4L3A2
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:905-851-3131" className="transition-colors hover:text-[#C9A961]">
                  905-851-3131
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:contact@davincibanquethalls.com" className="transition-colors hover:text-[#C9A961]">
                  contact@davincibanquethalls.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Hours</h3>
            <div className="space-y-1 text-sm">
              <p>
                Mon: <span className="text-gray-500">Closed</span>
              </p>
              <p>Tues: 11:00 AM - 6:00 PM</p>
              <p>Wed-Thurs: 12:00 PM - 8:00 PM</p>
              <p>Fri-Sun: 11:00 AM - 5:00 PM</p>
              <p className="mt-2 text-xs text-gray-500 italic">(By Appointment Only)</p>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <div className="mb-6 space-y-2 text-sm">
              <Link href="/about" className="block transition-colors hover:text-[#C9A961]">
                About Us
              </Link>
              <Link href="/venue" className="block transition-colors hover:text-[#C9A961]">
                Venue Info
              </Link>
              <Link href="/menus" className="block transition-colors hover:text-[#C9A961]">
                Menus
              </Link>
              <Link href="/events" className="block transition-colors hover:text-[#C9A961]">
                Events
              </Link>
              <Link href="/gallery" className="block transition-colors hover:text-[#C9A961]">
                Gallery
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/DaVinciBanquetHalls/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#C9A961]"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/davinci.banquethalls/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#C9A961]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="http://m.me/DaVinciBanquetHalls"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#C9A961]"
                aria-label="Facebook Messenger"
              >
                <FaFacebookMessenger className="h-6 w-6" />
              </a>
            </div>
            <Link
              href="/book"
              className="mt-6 inline-block rounded-full bg-linear-to-r from-davinci-gold to-davinci-gold-light px-6 py-2 text-sm font-medium text-davinci-dark transition-all duration-200 hover:from-davinci-gold-light hover:to-davinci-gold hover:scale-105"
            >
              Book a Hall
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-davinci-gold/20 pt-8 text-center text-sm text-gray-500">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Da Vinci Banquet Halls. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
