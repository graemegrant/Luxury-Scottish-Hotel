import { notFound } from 'next/navigation';
import Script from 'next/script';
import { sanityFetch } from '@/sanity/lib/fetch';
import { ROOM_BY_SLUG_QUERY, ALL_ROOMS_QUERY } from '@/sanity/lib/queries';
import type { SanityRoom } from '@/sanity/lib/types';
import { rooms as staticRooms } from '@/lib/data';
import { buildMetadata, buildHotelRoomSchema } from '@/lib/seo';
import RoomDetail from './RoomDetail';
export const dynamic = 'force-dynamic';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const room = await sanityFetch<SanityRoom>(ROOM_BY_SLUG_QUERY, { slug: params.slug })
    || staticRooms.find(r => r.slug === params.slug);
  if (!room) return {};
  return buildMetadata({
    title: (room as any).name,
    description: `${(room as any).shortDescription} Book direct from £${(room as any).rate}/night.`,
    path: `/rooms/${params.slug}`,
    ogImage: (room as any).image || (room as any).heroImage,
  });
}

export async function generateStaticParams() {
  const sanityRooms = await sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY).catch(() => []);
  const rooms = sanityRooms?.length ? sanityRooms : staticRooms;
  return rooms.map((r: any) => ({ slug: r.slug }));
}

export default async function RoomPage({ params }: Props) {
  const [sanityRoom, allSanityRooms] = await Promise.all([
    sanityFetch<SanityRoom>(ROOM_BY_SLUG_QUERY, { slug: params.slug }),
    sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY),
  ]);

  const room = sanityRoom || staticRooms.find(r => r.slug === params.slug);
  if (!room) notFound();

  const allRooms = allSanityRooms?.length
    ? allSanityRooms
    : staticRooms.map(r => ({ ...r, _id: r.slug, image: r.image }));

  // Normalise — Sanity uses heroImage.asset->url projected as 'image', static data uses 'image'
  const normalised = {
    ...(room as any),
    image: (room as any).image || (room as any).heroImage,
    gallery: (room as any).gallery || [(room as any).image],
  };

  const schema = buildHotelRoomSchema({
    name: normalised.name,
    description: normalised.description || normalised.shortDescription,
    rate: normalised.rate,
    sqm: normalised.sqm,
    occupancy: normalised.occupancy,
    slug: params.slug,
  });

  return (
    <>
      <Script id={`schema-room-${params.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <RoomDetail room={normalised} allRooms={allRooms} />
    </>
  );
}
