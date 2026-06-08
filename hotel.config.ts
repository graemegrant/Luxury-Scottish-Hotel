/**
 * hotel.config.ts — Per-client configuration file.
 *
 * When cloning this template for a new hotel client:
 * 1. Update every value in this file
 * 2. Swap the Tailwind colour tokens in tailwind.config.ts
 * 3. Set NEXT_PUBLIC_SITE_URL in .env.local
 * 4. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 * 5. Set NEXT_PUBLIC_BOOKING_ENGINE_URL in .env.local
 *
 * That is the full clone checklist. Everything else pulls from this file.
 */

export const hotelConfig = {
  // ── Identity ───────────────────────────────────────────────────────────
  name: 'Craigmore House',
  tagline: 'Highland solitude, done properly.',
  logo: null, // path to logo file, or null to use text logo
  established: 'Est. 2018',

  // ── Location ───────────────────────────────────────────────────────────
  location: {
    address: 'Perthshire, PH15 2NR',
    region: 'Perthshire, Scotland',
    country: 'GB',
    postcode: 'PH15 2NR',
    lat: 56.6,
    lng: -3.9,
    mapEmbedUrl: '', // Google Maps embed URL
  },

  // ── Contact ────────────────────────────────────────────────────────────
  contact: {
    phone: '+44 (0)1796 000 000',
    email: 'enquiries@craigmorehouse.com',
    instagram: 'https://instagram.com/craigmorehouse',
    facebook: 'https://facebook.com/craigmorehouse',
    twitter: '',
  },

  // ── Booking engine ─────────────────────────────────────────────────────
  // Set NEXT_PUBLIC_BOOKING_ENGINE_URL in .env.local
  // The BookingModal will redirect to this URL with date params appended
  bookingEngineUrl: process.env.NEXT_PUBLIC_BOOKING_ENGINE_URL || '',

  // ── Property facts ─────────────────────────────────────────────────────
  rooms: 12,
  starRating: 4,
  estateAcres: 400,
  priceRange: '£££',

  // ── Trust strip items ─────────────────────────────────────────────────
  trustItems: [
    'Best Rate Guaranteed',
    'No Booking Fees',
    'Complimentary Welcome Dram',
    'Rated 5 Stars by Guests',
  ],

  // ── Direct booking message ─────────────────────────────────────────────
  directBookingMessage: 'Save up to 15% by booking direct — best rate guaranteed, no fees, complimentary welcome dram.',

  // ── SEO ────────────────────────────────────────────────────────────────
  seo: {
    defaultTitle: 'Craigmore House | Luxury Highland Hotel, Perthshire',
    titleTemplate: '%s | Craigmore House',
    defaultDescription: 'A 12-room luxury highland retreat in the heart of Perthshire, Scotland. Fly fishing, field sports, seasonal dining. Best rate guaranteed on direct bookings.',
  },

  // ── Colours (mirror values in tailwind.config.ts) ─────────────────────
  // These are for reference — the actual tokens live in tailwind.config.ts
  palette: {
    primary: '#1C3A2B',    // Forest green
    accent: '#C4924A',     // Gold
    parchment: '#F2EDE4',  // Cream
    warm: '#E8E2D9',       // Warm grey
    dark: '#2C2C2C',       // Text
  },
};

export type HotelConfig = typeof hotelConfig;
