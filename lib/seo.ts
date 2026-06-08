import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://craigmorehouse.com';
const SITE_NAME = 'Craigmore House';
const DEFAULT_OG_IMAGE = 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=1200&q=80';

export function buildMetadata({
  title,
  description,
  path = '',
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_GB',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export const SCHEMA_BASE = {
  lodgingBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: SITE_NAME,
    description: 'A 12-room luxury highland retreat in the heart of Perthshire, Scotland. Fly fishing, field sports, seasonal dining and extraordinary landscapes.',
    url: BASE_URL,
    telephone: '+441796000000',
    email: 'enquiries@craigmorehouse.com',
    starRating: { '@type': 'Rating', ratingValue: '4' },
    numberOfRooms: 12,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Craigmore Estate',
      addressLocality: 'Perthshire',
      addressRegion: 'Scotland',
      postalCode: 'PH15 2NR',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.6,
      longitude: -3.9,
    },
    priceRange: '£££',
    servesCuisine: 'Modern Scottish',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
    ],
  },
};

export function buildHotelRoomSchema(room: {
  name: string;
  description: string;
  rate: number;
  sqm: number;
  occupancy: number;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: room.name,
    description: room.description,
    url: `${BASE_URL}/rooms/${room.slug}`,
    floorSize: { '@type': 'QuantitativeValue', value: room.sqm, unitCode: 'MTK' },
    occupancy: { '@type': 'QuantitativeValue', minValue: 1, maxValue: room.occupancy },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      price: room.rate,
      priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
    },
  };
}

export function buildBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  image: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    url: `${BASE_URL}/journal/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
  };
}
