'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import GalleryGrid from '@/components/GalleryGrid';
import { aboutSlots } from '@/config/media-slots';

export default function AboutPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <PageHero
          eyebrow="About"
          title="Da Vinci Banquet Halls"
          description="Wedding and event venue in Woodbridge with six configurable halls, in-house catering, and on-site coordination."
        />

        <div className="mb-16">
          <GalleryGrid slots={aboutSlots} columns={2} />
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <article className="section-edge border-t pt-6">
            <h3 className="text-theme-heading mb-4 font-serif text-2xl font-medium">Venue & catering</h3>
            <p className="text-theme-body mb-4 text-sm leading-relaxed">
              Halls accommodate 50 to 1,000 guests with flexible seating, professional lighting, sound, and a
              full-service bar. Italian and South Asian menus are available across all event types.
            </p>
            <p className="text-theme-body text-sm leading-relaxed">
              Layout, décor, and service are coordinated with your event requirements.
            </p>
          </article>

          <article className="section-edge border-t pt-6">
            <h3 className="text-theme-heading mb-4 font-serif text-2xl font-medium">Event types</h3>
            <p className="text-theme-body mb-4 text-sm leading-relaxed">
              Weddings, corporate meetings, South Asian celebrations, social gatherings, fundraisers, and trade shows
              across the Greater Toronto Area.
            </p>
            <p className="text-theme-body text-sm leading-relaxed">
              Located at 5732 Highway 7, Woodbridge, with ample on-site parking.
            </p>
          </article>
        </div>

        <SectionHeading eyebrow="Amenities" title="Included with every booking" align="left" />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: 'Halls & AV', description: 'Configurable rooms, lighting, and sound.' },
            { title: 'Catering & bar', description: 'In-house kitchen and full bar service.' },
            { title: 'Coordination', description: 'On-site staff for setup and event flow.' },
          ].map((item) => (
            <div key={item.title} className="section-edge border-t pt-5">
              <h3 className="text-theme-heading mb-2 font-serif text-lg font-medium">{item.title}</h3>
              <p className="text-theme-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
