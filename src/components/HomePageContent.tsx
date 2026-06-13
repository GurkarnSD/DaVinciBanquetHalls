'use client';

import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import { carouselSlots, homeHeroSlot } from '@/config/media-slots';
import { homeReelVideoSlots } from '@/config/video-slots';

export default function HomePageContent() {
  return (
    <div>
      <section className="section-edge relative min-h-[88vh] border-b">
        <div className="absolute inset-0">
          <MediaPlaceholder
            title={homeHeroSlot.title}
            aspect={homeHeroSlot.aspect}
            category={homeHeroSlot.category}
            slotId={homeHeroSlot.id}
          />
        </div>
        <div className="media-scrim absolute inset-0" />
        <div className="on-media relative z-10 flex min-h-[88vh] items-center px-4 pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <p className="eyebrow mb-6">Woodbridge, Ontario</p>
              <h1 className="mb-6 font-serif text-4xl leading-[1.12] font-medium md:text-5xl lg:text-6xl">
                Banquet halls for weddings, corporate events, and private celebrations.
              </h1>
              <p className="lead mb-10 max-w-lg">
                Renovated halls, full-service catering, and flexible room configurations for 50 to 1,000 guests.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/book" className="btn-primary px-7 py-3">
                  Book Your Event
                </Link>
                <Link href="/venue" className="btn-secondary px-7 py-3">
                  View the Venue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-edge border-b py-20 md:py-24">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-3 md:gap-8">
          {[
            {
              title: 'The Space',
              description: 'Six configurable halls, professional lighting, sound, and flexible seating.',
            },
            { title: 'The Menu', description: 'Italian and South Asian cuisine with packages for every event type.' },
            {
              title: 'The Service',
              description: 'On-site coordination, bar service, and catering from setup through service.',
            },
          ].map((item) => (
            <div key={item.title} className="section-edge accent-top border-t pt-6">
              <h3 className="text-theme-heading mb-3 font-serif text-xl font-medium">{item.title}</h3>
              <p className="text-theme-body text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <VerticalVideoReel
        eyebrow="Events"
        title="Recent celebrations"
        subtitle="Weddings, cultural events, and corporate functions across our halls."
        slots={homeReelVideoSlots}
      />

      <section className="section-edge border-t py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Venue"
            title="Our halls"
            subtitle="Interior and exterior views of Da Vinci Banquet Halls."
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="media-frame relative h-[360px] md:h-[440px]">
              <ImageCarousel slots={carouselSlots} />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/gallery" className="btn-text">
              View gallery
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Plan your event"
        description="Share your date, guest count, and event type. We will outline hall options and menu selections."
        primaryLabel="Book a consultation"
        primaryHref="/book"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </div>
  );
}
