import PageHero from '@/components/PageHero';
import GalleryGrid from '@/components/GalleryGrid';
import { aboutSlots } from '@/config/media-slots';

const eventTypes = [
  'Weddings',
  'Corporate Events',
  'Birthdays',
  'Anniversaries',
  'Engagements',
  'Galas',
  'Fundraisers',
  'Holiday Parties',
  'South Asian Gatherings (Sangeet, Jago, Mehndi)',
  'Baby Showers',
  'Bridal Showers',
  'Stags',
  'Retirement Parties',
  'Baptisms',
  'Communion',
  'Confirmation',
  'Graduations',
];

export default function AboutPage() {
  return (
    <div className="page-shell pb-16">
      <div className="container mx-auto max-w-5xl px-4">
        <PageHero
          title="Da Vinci Banquet Halls"
          description="Creating unforgettable weddings and events in Woodbridge and across the GTA with elegant spaces, exceptional cuisine, and dedicated hospitality."
        />

        <div className="mb-16">
          <GalleryGrid slots={aboutSlots} columns={2} />
        </div>

        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <article className="section-edge border-t pt-6">
            <h3 className="text-theme-heading mb-4 font-serif text-2xl font-medium">Venue & Catering</h3>
            <p className="text-theme-body text-sm leading-relaxed">
              Our versatile event spaces are designed to accommodate celebrations of all sizes, from intimate gatherings
              to grand events of up to 1,000 guests. With in-house catering featuring Italian and South Asian (Punjabi,
              Pakistani, Gujarati) cuisine, our experienced team provides exceptional hospitality and personalized
              support to bring your vision to life.
            </p>
          </article>

          <article className="section-edge border-t pt-6">
            <h3 className="text-theme-heading mb-4 font-serif text-2xl font-medium">Event Types</h3>
            <p className="text-theme-body mb-4 text-sm leading-relaxed">
              Proudly serving the Greater Toronto Area (Vaughan, Woodbridge, Brampton, Mississauga, Caledon, Toronto,
              Markham, Richmond Hill, and surrounding areas), we host a wide range of unforgettable events, including:
            </p>
            <ul className="text-theme-body list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {eventTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>and many more</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
