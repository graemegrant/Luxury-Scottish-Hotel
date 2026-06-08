import { groq } from 'next-sanity';

// ── ROOMS ──────────────────────────────────────────────────────────────────
export const ALL_ROOMS_QUERY = groq`
  *[_type == "room" && active == true] | order(rate asc) {
    _id,
    name,
    "slug": slug.current,
    type,
    shortDescription,
    rate,
    sqm,
    occupancy,
    floor,
    view,
    featured,
    "image": heroImage.asset->url,
    "gallery": gallery[].asset->url,
    amenities,
  }
`;

export const FEATURED_ROOMS_QUERY = groq`
  *[_type == "room" && active == true && featured == true] | order(rate asc) {
    _id,
    name,
    "slug": slug.current,
    type,
    shortDescription,
    rate,
    sqm,
    occupancy,
    "image": heroImage.asset->url,
  }
`;

export const ROOM_BY_SLUG_QUERY = groq`
  *[_type == "room" && slug.current == $slug && active == true][0] {
    _id,
    name,
    "slug": slug.current,
    type,
    shortDescription,
    description,
    rate,
    sqm,
    occupancy,
    floor,
    view,
    amenities,
    "image": heroImage.asset->url,
    "gallery": gallery[].asset->url,
    seo,
  }
`;

// ── EXPERIENCES ────────────────────────────────────────────────────────────
export const ALL_EXPERIENCES_QUERY = groq`
  *[_type == "experience" && active == true] | order(_createdAt asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    description,
    duration,
    price,
    seasons,
    includes,
    featured,
    "image": heroImage.asset->url,
  }
`;

export const EXPERIENCE_BY_SLUG_QUERY = groq`
  *[_type == "experience" && slug.current == $slug && active == true][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    description,
    duration,
    price,
    seasons,
    includes,
    "image": heroImage.asset->url,
  }
`;

// ── OFFERS ─────────────────────────────────────────────────────────────────
export const ALL_OFFERS_QUERY = groq`
  *[_type == "offer" && active == true] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current,
    subtitle,
    description,
    tag,
    inclusions,
    validFrom,
    validTo,
    featured,
    "image": heroImage.asset->url,
  }
`;

// ── JOURNAL ────────────────────────────────────────────────────────────────
export const ALL_JOURNAL_POSTS_QUERY = groq`
  *[_type == "journalPost" && active == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    author,
    publishedAt,
    readingTime,
    excerpt,
    featured,
    "image": heroImage.asset->url,
  }
`;

export const JOURNAL_POST_BY_SLUG_QUERY = groq`
  *[_type == "journalPost" && slug.current == $slug && active == true][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    author,
    publishedAt,
    readingTime,
    excerpt,
    body,
    "image": heroImage.asset->url,
    seo,
  }
`;

// ── TESTIMONIALS ───────────────────────────────────────────────────────────
export const FEATURED_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && active == true && featured == true] | order(_createdAt asc) {
    _id,
    guestName,
    quote,
    rating,
    roomStayed,
    date,
    sourcePlatform,
  }
`;

// ── TEAM ───────────────────────────────────────────────────────────────────
export const ALL_TEAM_QUERY = groq`
  *[_type == "teamMember" && active == true] | order(displayOrder asc) {
    _id,
    name,
    role,
    bio,
    department,
    "image": headshot.asset->url,
  }
`;
