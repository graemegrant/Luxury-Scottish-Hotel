// ── ROOM ──────────────────────────────────────────────────────────────────
export interface SanityRoom {
  _id: string;
  name: string;
  slug: string;
  type: string;
  shortDescription: string;
  description?: string;
  rate: number;
  sqm: number;
  occupancy: number;
  floor?: string;
  view?: string;
  featured: boolean;
  image: string;
  gallery?: string[];
  amenities?: string[];
  seo?: { title?: string; description?: string };
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────
export interface SanityExperience {
  _id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  seasons?: string[];
  includes?: string[];
  featured: boolean;
  image: string;
}

// ── OFFER ─────────────────────────────────────────────────────────────────
export interface SanityOffer {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  inclusions?: string[];
  validFrom?: string;
  validTo?: string;
  featured: boolean;
}

// ── JOURNAL POST ──────────────────────────────────────────────────────────
export interface SanityJournalPost {
  _id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime?: string;
  excerpt: string;
  body?: unknown[];
  featured: boolean;
  image: string;
  seo?: { title?: string; description?: string };
}

// ── TESTIMONIAL ───────────────────────────────────────────────────────────
export interface SanityTestimonial {
  _id: string;
  guestName: string;
  quote: string;
  rating: number;
  roomStayed?: string;
  date?: string;
  sourcePlatform?: string;
}

// ── TEAM MEMBER ───────────────────────────────────────────────────────────
export interface SanityTeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  department?: string;
  image: string;
}
