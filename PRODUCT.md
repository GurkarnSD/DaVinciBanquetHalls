# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audiences are treated as equal: wedding couples and families, South Asian celebration hosts, corporate/event planners, and social/fundraiser organizers across the Greater Toronto Area (Woodbridge, Brampton, Mississauga, Vaughan, and nearby). The site must not steer visitors away from any event type. If a single audience must be favored in a given surface, prefer the path that converts best (inquiry / book) rather than a fixed brand hierarchy.

Job to be done: evaluate whether Da Vinci Banquet Halls can host their date and guest count, understand halls/menus/service, then submit a reservation inquiry or contact the venue.

## Product Purpose

Da Vinci Banquet Halls is a Woodbridge banquet venue marketing and inquiry site. It presents the property (six configurable halls for roughly 50–1,000 guests), in-house Italian and South Asian catering, bar service, and on-site coordination, then routes visitors into booking or contact.

Success means qualified inquiries with date, guest count, and event type — not generic brand awareness alone.

## Positioning

Full-service venue experience: halls, catering, bar, lighting/sound, and on-site coordination in one booking. Guests choose Da Vinci to reduce vendor juggling while still covering weddings, cultural celebrations, corporate, and social events.

## Operating Context

- Physical venue at 5732 Highway 7, Woodbridge, ON L4L 3A2; phone 905-851-3131; email contact@davincibanquethalls.com.
- Hours published on-site: Mon–Thu 11 AM–8 PM; Fri–Sun 11 AM–5 PM.
- Booking flow: online reservation form → availability confirmation within 24–48 hours → venue tour → menu and booking/deposit.
- Instagram: https://www.instagram.com/davinci.banquethalls/
- Visitors browse on mobile and desktop while comparing GTA banquet options; heavy photo and video media are part of how the venue is evaluated.

## Capabilities and Constraints

- Confirmed site surfaces: home, venue, menus (Italian, South Asian, South Asian celebration packages, weddings, showers, stags, holiday, celebration of life), events (weddings, South Asian, corporate, social, fundraisers/tradeshows), gallery, about, book, contact, privacy, terms.
- Inquiry/booking via on-site forms with email confirmation (Resend); not a full reservation/payment system.
- Stack is existing Next.js (App Router) + React + Tailwind; not greenfield.
- Large local video library under `public/assets/videos-optimized/` (plus images under `public/assets/images/`) is a technical constraint: loading performance matters and must improve without discarding the real venue media.
- Open: which event type currently converts best is undecided; use conversion preference only when a surface must prioritize.

## Brand Commitments

- Legal/marketing name: **Da Vinci Banquet Halls** (logo at `public/assets/images/logos/logo.png`).
- Location and contact details above are binding product facts.
- Cuisine claims on the site: Italian and South Asian menus with packages for multiple event types.
- Capacity claim: six halls, roughly 50 to 1,000 guests — preserve unless the business corrects it.
- Voice on the current site is straightforward and venue-forward (space, menu, service); no alternate brand voice was approved in init.

## Evidence on Hand

- Real venue photography (exteriors, lobby, halls, setups) in `public/assets/images/`.
- Real event/venue/food video clips in `public/assets/videos-optimized/` (home reel, gallery, and page-specific slots via `src/config/video-slots.ts` and `src/config/media-slots.ts`).
- Menu package content for Italian, South Asian, and South Asian celebration tiers (Gold/Platinum/Diamond/Exclusive) in app routes under `src/app/menus/`.
- No fabricated testimonials, press quotes, awards, or pricing claims exist as approved evidence — do not invent them.

## Product Principles

1. Serve every confirmed event type without alienating another; prioritize conversion only when a surface must choose.
2. Sell the full-service package (space + food + bar + coordination), not décor fantasy alone.
3. Use real venue media as proof; never fabricate social proof or claims.
4. Keep the path to inquire short: date, guests, event type, then human follow-up.
5. Treat media weight as a product constraint — beauty that does not load fails the evaluation job.
