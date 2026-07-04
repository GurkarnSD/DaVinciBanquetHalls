import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import MediaImage from '@/components/MediaImage';
import ScrollReveal from '@/components/ScrollReveal';
import { carouselSlots, homeHeroSlot } from '@/config/media-slots';
import { homeReelVideoSlots } from '@/config/video-slots';

export default function HomePageContent() {
  return (
    <div>
      <section className="section-edge relative min-h-[88dvh] border-b">
        <div className="absolute inset-0">
          <MediaImage
            slot={homeHeroSlot}
            fill
            imageClassName="object-cover object-left-top md:object-top"
            sizes="100vw"
            priority
            quality={85}
          />
        </div>
        <div className="media-scrim absolute inset-0" />
        <div className="on-media relative z-10 flex min-h-[88dvh] items-center px-4 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="container mx-auto flex">
            <div className="max-w-2xl md:ml-auto md:max-w-xl md:translate-x-10 lg:max-w-2xl xl:translate-x-16">
              <p className="eyebrow hero-enter mb-5">Woodbridge, Ontario</p>
              <h1 className="hero-enter hero-enter-delay-1 mb-5 font-serif text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl lg:text-6xl">
                Banquet halls for weddings, corporate events, and private celebrations
              </h1>
              <p className="lead hero-enter hero-enter-delay-2 mb-8 max-w-lg">
                Six halls, full-service catering, and on-site coordination for 50 to 1,000 guests.
              </p>
              <div className="hero-enter hero-enter-delay-3 flex flex-col gap-3 sm:flex-row">
                <Link href="/book" className="btn-primary px-7 py-3">
                  Book your event
                </Link>
                <Link href="/venue" className="btn-secondary px-7 py-3">
                  View the venue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-edge border-b py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="section-edge accent-top border-t pt-8 lg:col-span-5">
                <h2 className="text-theme-heading mb-4 font-serif text-2xl font-medium md:text-3xl">The space</h2>
                <p className="text-theme-body max-w-md text-base leading-relaxed">
                  Six configurable halls, professional lighting, sound, and flexible seating for gatherings of 50 to
                  1,000 guests.
                </p>
              </div>
              <div className="flex flex-col gap-12 lg:col-span-6 lg:col-start-7">
                {[
                  {
                    title: 'The menu',
                    description: 'Italian and South Asian cuisine with packages for every event type.',
                  },
                  {
                    title: 'The service',
                    description: 'On-site coordination, bar service, and catering from setup through service.',
                  },
                ].map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 80}>
                    <div className="section-edge accent-top border-t pt-6">
                      <h3 className="text-theme-heading mb-3 font-serif text-xl font-medium">{item.title}</h3>
                      <p className="text-theme-body max-w-md text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <VerticalVideoReel title="Recent celebrations" subtitle="Weddings, cultural events, and corporate functions across our halls." slots={homeReelVideoSlots} />

      <section className="section-edge border-t py-16 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeading title="Our halls" subtitle="Exterior, lobby, and hall configurations across the property." align="left" className="max-w-2xl" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="relative mx-auto max-w-5xl">
              <div className="media-frame relative aspect-3/2">
                <ImageCarousel slots={carouselSlots} />
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/gallery" className="btn-text">
                View gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Plan your event"
        description="Share your date, guest count, and event type. We will outline hall options and menu selections."
        primaryLabel="Book your event"
        primaryHref="/book"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </div>
  );
}
