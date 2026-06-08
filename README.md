# Craigmore House — Codero Hotel Template

A production-ready Next.js hotel website template built by Codero. Designed to be cloned per client and adapted in under 2 hours.

## Tech Stack

- **Next.js 13** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Sanity v3** (headless CMS + studio at `/studio`)
- **Cormorant Garamond + Jost** (Google Fonts)
- **Resend** (contact form emails — add when wiring up)

---

## Clone Checklist (new client)

**1. Clone the repo**
```bash
git clone https://github.com/your-org/hotel-template new-client-name
cd new-client-name
npm install
```

**2. Update `hotel.config.ts`**
Every hardcoded string — hotel name, location, contact details, trust items — lives here. Update all values.

**3. Update colour tokens in `tailwind.config.ts`**
Find the `colors.hotel` block and swap the five hex values to match the client's brand palette.

**4. Create a Sanity project**
- Go to [sanity.io](https://sanity.io) → New Project
- Copy the project ID

**5. Set environment variables**
```bash
cp .env.local.example .env.local
```
Fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from Sanity dashboard
- `NEXT_PUBLIC_SITE_URL` — the client's domain
- `NEXT_PUBLIC_BOOKING_ENGINE_URL` — FreeToBook/Guestline/SiteMinder URL (leave blank if not yet known)

**6. Populate content in Sanity Studio**
```bash
npm run dev
```
Visit `http://localhost:3000/studio` and add:
- Rooms (minimum 3 to populate homepage)
- Experiences
- Testimonials (mark 3–4 as Featured)
- Offers (minimum 3)
- Team members
- Journal posts (minimum 4, mark 1 as Featured)

**7. Swap images**
Replace Pexels placeholder images in pages with client photography. Images in components pull from Sanity.

**8. Deploy to Vercel**
```bash
vercel --prod
```
Set the same env vars in the Vercel project settings.

---

## Local Development

```bash
npm run dev          # Start Next.js dev server
npm run build        # Production build
npm run typecheck    # TypeScript check
```

---

## Project Structure

```
hotel.config.ts          ← Client config (name, contact, colours)
.env.local.example       ← Environment variable template

app/
  layout.tsx             ← Root layout, fonts, JSON-LD schema
  page.tsx               ← Homepage
  rooms/
    page.tsx             ← Rooms index
    [slug]/
      page.tsx           ← Room detail (server, metadata)
      RoomDetail.tsx     ← Room detail (client interactions)
  experiences/
  journal/
  weddings/
  special-offers/
  dining/
  about/
  contact/
  location/
  gift-vouchers/
  not-found.tsx
  sitemap.ts
  robots.ts
  studio/[[...tool]]/    ← Sanity Studio

components/
  cards/
    RoomCard.tsx
    ExperienceCard.tsx
    JournalCard.tsx
    OfferCard.tsx
    TeamCard.tsx
  sections/
    PageHero.tsx
    TestimonialSlider.tsx
    DirectBookingBanner.tsx
  Navbar.tsx
  Footer.tsx
  BookingModal.tsx        ← Connects to NEXT_PUBLIC_BOOKING_ENGINE_URL
  TrustStrip.tsx
  SectionLabel.tsx

sanity/
  schemas/               ← All Sanity document types
  lib/
    client.ts            ← Sanity client
    fetch.ts             ← sanityFetch() wrapper
    queries.ts           ← All GROQ queries
    types.ts             ← TypeScript interfaces
    image.ts             ← urlFor() image helper

lib/
  data.ts                ← Static fallback data (used before Sanity is connected)
  seo.ts                 ← buildMetadata(), JSON-LD schema builders
```

---

## Adding Sanity Data to a Page

```tsx
// Server component
import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_ROOMS_QUERY } from '@/sanity/lib/queries';
import type { SanityRoom } from '@/sanity/lib/types';

export default async function RoomsPage() {
  const rooms = await sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY);
  // ...
}
```

When `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set, `sanityFetch` returns empty arrays and the site still builds using the static data in `lib/data.ts`.

---

## Booking Engine Integration

Set `NEXT_PUBLIC_BOOKING_ENGINE_URL` to the engine's booking page URL. The `BookingModal` appends `?arrival=&departure=&adults=&rooms=` query params automatically. Most booking engines (FreeToBook, Guestline, SiteMinder, Little Hotelier) accept these params — verify with the client's engine documentation.

If no URL is set, the "Book Now" button links to `/contact`.

---

*Built by [Codero](https://codero.co.uk) — the hospitality digital agency for independent hotels.*
