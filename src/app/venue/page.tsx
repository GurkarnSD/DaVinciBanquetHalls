'use client';

import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import VerticalVideoReel from '@/components/VerticalVideoReel';
import GalleryGrid from '@/components/GalleryGrid';
import { venueSlots } from '@/config/media-slots';
import { venueVideoSlots } from '@/config/video-slots';
import {
  FaBuilding,
  FaVolumeUp,
  FaLightbulb,
  FaChair,
  FaWineGlass,
  FaUtensils,
  FaKey,
  FaParking,
} from 'react-icons/fa';

const floorplans = [
  { name: 'Hall A', capacity: '150–380 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall A.pdf' },
  { name: 'Hall A & B', capacity: '320–550 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall AB.pdf' },
  { name: 'Hall A, B & C', capacity: '500–1000 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall ABC.pdf' },
  { name: 'Hall B & C', capacity: '150–380 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall BC.pdf' },
  { name: 'Hall C', capacity: '80–260 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall C.pdf' },
  { name: 'Hall D', capacity: '50–120 guests', pdf: '/assets/floorplans/DaVinci Floorplan Hall D.pdf' },
];

const features = [
  { name: 'Elegant decor', icon: FaBuilding },
  { name: 'Sound system', icon: FaVolumeUp },
  { name: 'Professional lighting', icon: FaLightbulb },
  { name: 'Flexible seating', icon: FaChair },
  { name: 'Full-service bar', icon: FaWineGlass },
  { name: 'Catering kitchen', icon: FaUtensils },
  { name: 'Bridal suite', icon: FaKey },
  { name: 'Ample parking', icon: FaParking },
];

export default function VenuePage() {
  return (
    <div className="page-shell pb-0">
      <div className="container mx-auto max-w-5xl px-4">
        <PageHero
          eyebrow="Venue"
          title="Spaces That Scale with Your Guest List"
          description="Renovated halls with flexible configurations, from intimate dinners to events of a thousand."
        />
      </div>

      <VerticalVideoReel eyebrow="Walkthrough" title="The Halls in Motion" slots={venueVideoSlots} />

      <section className="section-edge container mx-auto max-w-5xl border-t px-4 py-16">
        <SectionHeading
          eyebrow="Gallery"
          title="The Space"
          subtitle="Exterior, lobby, halls, and event setups."
          align="left"
        />
        <GalleryGrid slots={venueSlots} columns={3} />
      </section>

      <section className="container mx-auto max-w-5xl px-4 py-16">
        <SectionHeading
          eyebrow="Capacity"
          title="Floorplans"
          subtitle="Select a configuration that fits your guest count."
          align="left"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {floorplans.map((hall) => (
            <article key={hall.name} className="surface p-5">
              <h3 className="text-theme-heading mb-1 font-serif text-lg font-medium">{hall.name}</h3>
              <p className="text-theme-muted mb-4 text-sm">{hall.capacity}</p>
              <Link
                href={hall.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text inline-flex items-center gap-2"
              >
                View floorplan
                <HiExternalLink className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-edge container mx-auto max-w-5xl border-t px-4 py-16">
        <SectionHeading title="Included Amenities" align="left" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="flex items-start gap-3">
                <Icon className="text-theme-muted mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-theme-body text-sm">{feature.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Schedule a Tour"
        description="Walk the halls in person and discuss layout options with our team."
        primaryLabel="Book your event"
        primaryHref="/book"
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </div>
  );
}
