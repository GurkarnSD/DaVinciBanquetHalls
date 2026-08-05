---
name: Da Vinci Banquet Halls
description: Lookbook Flagship — bone paper, ink, and merlot for a Woodbridge banquet venue
colors:
  merlot: "#6B1F2B"
  merlot-deep: "#521722"
  merlot-light: "#8A2E3C"
  bone: "#F7F6F2"
  parchment: "#EDEAE3"
  stone: "#D8D6D0"
  ink: "#0B0B0B"
  ink-body: "#3F3F3F"
  ink-muted: "#5C5C5C"
  ink-faint: "#8A8A8A"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Bodoni Moda, ui-serif, Times New Roman, serif"
    fontSize: "clamp(3rem, 5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bodoni Moda, ui-serif, Times New Roman, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bodoni Moda, ui-serif, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#2A2A2A"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "12px 28px"
    typography: "{typography.label}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0"
    typography: "{typography.label}"
  button-text-hover:
    backgroundColor: "transparent"
    textColor: "{colors.merlot}"
    rounded: "{rounded.none}"
    padding: "0"
    typography: "{typography.label}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "0"
    typography: "{typography.label}"
---

# Design System: Da Vinci Banquet Halls

## Overview

**Creative North Star: "Lookbook Flagship"**

Da Vinci Banquet Halls presents as a luxury fashion lookbook translated to a banquet venue: real halls as looks, bone paper as the page, ink as structure, merlot as the rare accent. The system is editorial and spare — monumental Bodoni display against a quiet Geist grotesk, sharp ink rectangles, hairline rules, and venue photography as the only visual proof. Call is the loud act; everything else stays quiet enough that the halls and the booking path stay legible.

Density is low. Sections carry one job, one Bodoni headline, and short supporting copy. Surfaces stay flat on bone or parchment; depth comes from edge-to-edge media and hairline borders, not soft cards or gold glow. Light mode is the default lookbook; dark mode inverts to an ink-night lookbook using the same type and geometry.

**Key Characteristics:**
- Bone paper field (#F7F6F2) with ink (#0B0B0B) and merlot (#6B1F2B)
- Bodoni Moda display + Geist body/label pairing
- Sharp rectangles (0 radius) and 1px hairline borders
- Real venue photography and video only — no stock fantasy
- Primary CTA is Call; Book / inquiry is secondary
- Refuses dark-gold banquet hero aesthetics

## Colors

A three-note lookbook palette: bone field, ink structure, merlot accent. Neutrals carry most of the UI; merlot is scarce and intentional.

### Primary
- **Merlot** (#6B1F2B): Accent for focus rings, selection wash, phone link emphasis, text-button hover, and rare highlights. Legacy CSS still names this `--accent-gold`; the shipped value is merlot, not gold.
- **Merlot Deep** (#521722): Darker merlot step for pressed / deep accent contexts.
- **Merlot Light** (#8A2E3C): Lighter merlot for on-media accent moments when needed.

### Neutral
- **Bone** (#F7F6F2): Page and surface background (default lookbook).
- **Parchment** (#EDEAE3): Elevated / CTA band surfaces (`--bg-elevated`, `--cta-section-bg`).
- **Stone** (#D8D6D0): Media placeholder / waiting plane behind images.
- **Ink** (#0B0B0B): Headings, primary button fill, strong structure.
- **Ink Body** (#3F3F3F): Default body copy.
- **Ink Muted** (#5C5C5C): Nav links, secondary labels, quieter UI chrome.
- **Ink Faint** (#8A8A8A): Faintest supporting text.
- **White** (#FFFFFF): Input surfaces and on-media type when needed.

### Named Rules
**The Merlot Scarcity Rule.** Merlot appears as accent and focus — never as a full-bleed hero wash, gradient field, or dark-gold banquet glow. Ink rectangles and real photos carry the frame.

**The Bone Field Rule.** Default surfaces sit on bone or parchment. Do not reinstate a black full-page banquet shell as the light-mode identity.

## Typography

**Display Font:** Bodoni Moda (with ui-serif / Times New Roman)
**Body Font:** Geist (with ui-sans-serif / system-ui)

**Character:** Monumental fashion display against spare grotesk UI. Bodoni owns headlines; Geist owns body, nav, and button labels. Tracking on display is tight; labels are uppercase with wide tracking.

### Hierarchy
- **Display** (400, clamp ~3rem–4.25rem, line-height 1.05): Hero statements such as “Banquet halls for weddings, corporate events, and celebrations.”
- **Headline** (400, ~1.875rem–2.25rem, line-height 1.15): Section titles (“Full service in one booking”, CTA titles).
- **Title** (400, 1.5rem, line-height 1.15): Sub-look titles (“The space”, “The menu”, “The service”).
- **Body** (400, 0.9375rem–1rem, line-height 1.65): Supporting copy; hero support stays near 34ch; leads cap around 42rem.
- **Label** (500, 0.6875rem–0.75rem, letter-spacing 0.12em–0.16em, uppercase): Nav links, primary/secondary buttons, look-strip captions.

### Named Rules
**The Bodoni Display Rule.** Headings use Bodoni Moda at normal (400) weight on lookbook surfaces. Do not bold the display face into a banquet brochure weight for marketing heroes.

**The Quiet Label Rule.** UI chrome (nav, buttons) stays small, uppercase, tracked Geist — never competing with Bodoni for scale.

## Layout

Spatial model is editorial split and ruled sections, not a card dashboard.

- **Home first viewport:** 12-column split — type column (~5/12) left, tall venue media (~7/12) right; three-look photo strip under a hairline rule.
- **Content width:** `container` / `container-content` max ~72rem; narrow reading ~42rem (`container-narrow`).
- **Page shell:** Fixed hairline header; main content clears with substantial top padding (~6.5rem shell / hero uses ~4.5rem top pad under the header).
- **Section rhythm:** Large vertical padding (~5rem–7rem) with hairline `border-b` / `section-edge` separators between chapters.
- **Breakpoints observed:** strip and hero media step at 640px / 768px / 1024px; nav collapses below `xl`.
- **Density:** Sparse — one purpose per section; generous gaps (e.g. 2.5rem–4rem between lookbook columns).

### Named Rules
**The Split Editorial Rule.** The home first viewport is type left + real hall photo right + look strip below. Do not replace it with a dark full-bleed banquet hero or floating media card.

## Elevation & Depth

Flat by default. Depth comes from real photography, hairline borders, and occasional media scrims — not ambient card shadows.

- Surfaces use bone / parchment tonal steps and `1px` borders (`rgba(11,11,11,0.12)` / `0.28`).
- Header uses light backdrop blur (8px–12px) over translucent bone, not a heavy drop shadow.
- Media frames are clipped rectangles with optional subtle image scale on hover (~1.03–1.04); no soft card lift.
- Focus uses a 2px merlot outline (offset 3px on links/buttons).

### Named Rules
**The Flat Paper Rule.** No soft multi-layer shadows on lookbook surfaces. If a control needs presence, use ink fill, hairline border, or real media — not elevation theater.

## Shapes

Form language is sharp ink rectangles.

- **Corners:** `0` on buttons, look frames, and primary surfaces. `2px` only on sparse utility shells (skip link, some menu panels) — not a rounded system.
- **Borders:** 1px hairlines in ink-at-12%/28% opacity; section rules are full-width 1px.
- **Clipping:** Overflow-hidden media frames; no rounded hero cards or floating image tiles.
- **Geometry:** Rectangular lookbook cells and ruled strips; avoid pill CTAs and soft “card” silhouettes on the home flagship.

### Named Rules
**The Sharp Rectangle Rule.** Primary interactive and media shapes are square-cornered. Do not introduce rounded-full pills or soft marketing cards into the lookbook world.

## Components

### Buttons
Sharp uppercase labels. Call / primary actions use ink fill; secondary is hairline outline; text buttons are underlined or bare tracked type.

- **Shape:** Square corners (`0`)
- **Primary:** Ink fill, bone text, label typography, padding ~14×28px; hover shifts to charcoal (#2A2A2A); active scales to 0.97
- **Secondary:** Transparent with strong ink border; hover fills ink / bone text
- **Text:** Tracked uppercase; hover to merlot; often used for “Book an inquiry” beside Call
- **Focus:** 2px merlot outline, 3px offset

### Cards / Containers
Default: no cards on the lookbook home. Where list/media shells exist elsewhere, they are flat surfaces with hairline borders — not shadowed product cards.

- **Corner Style:** Sharp (`0`), occasional utility `2px`
- **Background:** Bone or parchment
- **Shadow Strategy:** None at rest (see Elevation)
- **Border:** 1px theme border
- **Internal Padding:** ~1.5rem on panel shells when used

### Inputs / Fields
- **Style:** White input surface on bone page; hairline border
- **Focus:** Merlot border + 2px merlot outline (offset 0)
- **Error:** Soft red alert panel tokens (`alert-error-*`) — functional, not brand accent

### Navigation
Hairline fixed header on translucent bone with blur.

- **Links:** 0.75rem uppercase Geist, tracked (~0.12em), muted ink; hover / active → ink
- **Phone:** Same label style, merlot color — Call stays visible in the chrome
- **Book:** Compact primary button in the header
- **Mobile:** Collapse below `xl`; panel drops from the header with short translate/fade; Call + Book remain available

### Look Strip (signature)
Three equal real-photo cells under the hero, ruled by hairlines. Small uppercase captions (Hall / Lobby / Arrive) sit in the corner of the media — proof labels, not marketing kickers. Hover gently scales the image; cells link to Venue.

### CTA Band
Parchment band with top hairline; centered Bodoni headline, short body, primary Call + secondary Book.

## Do's and Don'ts

### Do:
- **Do** keep Call as the primary loud action and Book / inquiry as secondary.
- **Do** use real venue photography and video as the visual proof layer.
- **Do** set display in Bodoni Moda and UI/body in Geist on the lookbook surfaces.
- **Do** separate chapters with hairline rules and generous vertical rhythm.
- **Do** treat merlot as a scarce accent (focus, phone, hover) on bone paper.

### Don't:
- **Don't** reinstate a dark-gold banquet hero (black full-bleed + metallic gold glow / gold gradients).
- **Don't** put soft elevated cards, floating media tiles, or rounded-full pill CTAs in the lookbook first viewport.
- **Don't** invent stock lifestyle imagery, awards, or testimonials as proof.
- **Don't** let eyebrow/kicker chips or badge clusters decorate the hero — the world leads with Bodoni statements and real media.
- **Don't** use gold (#B8860B / metallic banquet gold) as a brand accent; the accent is merlot (#6B1F2B).
