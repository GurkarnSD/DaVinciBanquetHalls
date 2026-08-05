import Link from 'next/link';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import CTASection from '@/components/CTASection';
import MediaImage from '@/components/MediaImage';
import ScrollReveal from '@/components/ScrollReveal';
import { type MediaSlot, carouselSlots, homeHeroSlot } from '@/config/media-slots';
import { homeReelVideoSlots } from '@/config/video-slots';

const venue = (filename: string, title: string): MediaSlot => ({
  id: `home-${filename}`,
  category: 'Venue',
  title,
  aspect: '3:2',
  layout: 'landscape',
  src: `/assets/images/venue/${filename}`,
});

const heroSlot = venue('hall-a-lobby-angled.jpg', 'Lobby and hall entrance dressed for an event');

const lookStrip = [
  { slot: venue('hall-a-av-lights.jpg', 'Hall A with tables, lighting, and AV'), label: 'Hall' },
  { slot: venue('stage-loveseat-left.jpg', 'Stage setup with seating'), label: 'Stage' },
  { slot: carouselSlots[0] ?? homeHeroSlot, label: 'Exterior' },
] as const;

export default function HomePageContent() {
  return (
    <div>
      <section className="section-edge border-b pt-[4.5rem]">
        <div className="lookbook-hero-grid">
          <div className="lookbook-hero-media lookbook-hero-reveal relative bg-[var(--bg-media)]">
            <MediaImage
              slot={heroSlot}
              fill
              imageClassName="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
              quality={85}
            />
          </div>

          <div className="lookbook-hero-copy flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-24 xl:px-16">
            <h1 className="hero-enter text-theme-heading font-serif text-[2.75rem] leading-[1.05] font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Banquet halls for weddings, corporate events, and celebrations
            </h1>
            <p className="hero-enter hero-enter-delay-1 text-theme-body mt-6 max-w-[38ch] text-[0.9375rem] leading-relaxed sm:mt-8">
              Six halls in Woodbridge with Italian and South Asian catering, bar service, and on-site coordination for 50
              to 1,000 guests.
            </p>
            <div className="hero-enter hero-enter-delay-2 mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
              <a href="tel:905-851-3131" className="btn-primary px-7 py-3.5">
                Call now
              </a>
              <Link href="/book" className="btn-text border-b border-current pb-0.5">
                Submit an inquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="section-edge grid border-t sm:grid-cols-3">
          {lookStrip.map((item, index) => (
            <Link
              key={item.label}
              href="/venue"
              className="lookbook-strip-item group relative overflow-hidden border-[var(--border)] sm:border-r sm:last:border-r-0"
            >
              <MediaImage
                slot={item.slot}
                fill
                imageClassName="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={75}
              />
              <span className="absolute bottom-3 left-3 text-[0.625rem] font-medium tracking-[0.16em] text-white uppercase drop-shadow">
                {item.label}
              </span>
              <span className="sr-only">View venue — look {index + 1}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-edge border-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <h2 className="text-theme-heading font-serif text-3xl font-normal tracking-tight md:text-4xl">
                  Full service in one booking
                </h2>
              </div>
              <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8">
                {[
                  {
                    title: 'The space',
                    description: 'Six configurable halls, lighting, sound, and seating for 50 to 1,000 guests.',
                    href: '/venue',
                  },
                  {
                    title: 'The menu',
                    description: 'Italian and South Asian cuisine with packages for every event type.',
                    href: '/menus',
                  },
                  {
                    title: 'The service',
                    description: 'On-site coordination, bar service, and catering from setup through service.',
                    href: '/contact',
                  },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="group block">
                    <h3 className="text-theme-heading mb-3 font-serif text-2xl font-normal tracking-tight group-hover:opacity-70">
                      {item.title}
                    </h3>
                    <p className="text-theme-body max-w-xs text-sm leading-relaxed">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VerticalVideoReel
        title="Recent celebrations"
        slots={homeReelVideoSlots}
        maxSlots={6}
        idlePlaybackLimit={3}
      />

      <CTASection
        title="Plan your event"
        description="Share your date, guest count, and event type. We will outline hall options and menu selections."
        primaryLabel="Call 905-851-3131"
        primaryHref="tel:905-851-3131"
        secondaryLabel="Submit an inquiry"
        secondaryHref="/book"
      />
    </div>
  );
}
