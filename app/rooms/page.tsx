import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_ROOMS_QUERY } from '@/sanity/lib/queries';
import type { SanityRoom } from '@/sanity/lib/types';
import { rooms as staticRooms } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import TrustStrip from '@/components/TrustStrip';
import SectionLabel from '@/components/SectionLabel';
import RoomsClient from './RoomsClient';

export const metadata = buildMetadata({
  title: 'Rooms & Suites',
  description: 'Twelve individual rooms at Craigmore House, Perthshire. Suites, Deluxe and Classic rooms from £245/night. Book direct for the best rate.',
  path: '/rooms',
});

export default async function RoomsPage() {
  const sanityRooms = await sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY);

  const rooms = sanityRooms?.length
    ? sanityRooms
    : staticRooms.map(r => ({ ...r, _id: r.slug, image: r.image }));

  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=1600&q=80"
            alt="Craigmore House Rooms"
            fill priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <SectionLabel color="parchment">{rooms.length} Rooms</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Rooms &amp; Suites
          </h1>
          <p className="text-[#F2EDE4]/60 text-lg max-w-xl mx-auto" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            No two rooms are alike. Each has been designed around its view, its history, and a distinct highland character.
          </p>
        </div>
      </section>

      <TrustStrip variant="dark" />
      <RoomsClient rooms={rooms} />
    </>
  );
}
