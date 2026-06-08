import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_OFFERS_QUERY } from '@/sanity/lib/queries';
import type { SanityOffer } from '@/sanity/lib/types';
import { offers as staticOffers } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import PageHero from '@/components/sections/PageHero';
import OfferCard from '@/components/cards/OfferCard';
import SpecialOffersClient from './SpecialOffersClient';

export const metadata = buildMetadata({
  title: 'Special Offers',
  description: 'Seasonal packages and curated escapes at Craigmore House, Perthshire. Available exclusively on direct bookings — best rate guaranteed.',
  path: '/special-offers',
});

export default async function SpecialOffersPage() {
  const sanityOffers = await sanityFetch<SanityOffer[]>(ALL_OFFERS_QUERY);

  const offers = sanityOffers?.length
    ? sanityOffers
    : staticOffers.map(o => ({ ...o, _id: o.slug, image: o.image }));

  return (
    <>
      <PageHero
        eyebrow="Direct Bookings Only"
        title="Special Offers"
        subtitle="Seasonal packages and curated experiences, available exclusively through direct booking."
        image="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=1600&q=80"
        imageAlt="Special offers at Craigmore House"
      />
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-0">
          {offers.map((offer, i) => (
            <OfferCard
              key={(offer as any)._id || (offer as any).slug}
              slug={(offer as any).slug}
              title={(offer as any).title}
              subtitle={(offer as any).subtitle}
              description={(offer as any).description}
              image={(offer as any).image}
              tag={(offer as any).tag}
              inclusions={(offer as any).inclusions}
              layout="feature"
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>
      <SpecialOffersClient />
    </>
  );
}
