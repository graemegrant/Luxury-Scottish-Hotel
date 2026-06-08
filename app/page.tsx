import { sanityFetch } from '@/sanity/lib/fetch';
import {
  FEATURED_ROOMS_QUERY,
  ALL_EXPERIENCES_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
  ALL_OFFERS_QUERY,
} from '@/sanity/lib/queries';
import type { SanityRoom, SanityExperience, SanityTestimonial, SanityOffer } from '@/sanity/lib/types';
import { rooms as staticRooms, experiences as staticExperiences, testimonials as staticTestimonials, offers as staticOffers } from '@/lib/data';
import HomeClient from './HomeClient';

export default async function HomePage() {
  const [sanityRooms, sanityExperiences, sanityTestimonials, sanityOffers] = await Promise.all([
    sanityFetch<SanityRoom[]>(FEATURED_ROOMS_QUERY),
    sanityFetch<SanityExperience[]>(ALL_EXPERIENCES_QUERY),
    sanityFetch<SanityTestimonial[]>(FEATURED_TESTIMONIALS_QUERY),
    sanityFetch<SanityOffer[]>(ALL_OFFERS_QUERY),
  ]);

  // Fall back to static data when Sanity is not yet configured
  const featuredRooms = sanityRooms?.length
    ? sanityRooms
    : staticRooms.filter(r => r.featured).map(r => ({ ...r, _id: r.slug, image: r.image }));

  const experiences = sanityExperiences?.length
    ? sanityExperiences
    : staticExperiences.map(e => ({ ...e, _id: e.slug, image: e.image }));

  const testimonials = sanityTestimonials?.length
    ? sanityTestimonials
    : staticTestimonials.map(t => ({ ...t, _id: String(t.id), guestName: t.guestName, roomStayed: t.roomStayed }));

  const offers = sanityOffers?.length
    ? sanityOffers
    : staticOffers.map(o => ({ ...o, _id: o.slug, image: o.image }));

  return (
    <HomeClient
      featuredRooms={featuredRooms}
      experiences={experiences.slice(0, 3)}
      testimonials={testimonials}
      offers={offers.slice(0, 3)}
    />
  );
}
