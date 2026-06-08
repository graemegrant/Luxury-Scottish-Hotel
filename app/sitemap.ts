import { MetadataRoute } from 'next';
import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_ROOMS_QUERY, ALL_EXPERIENCES_QUERY, ALL_JOURNAL_POSTS_QUERY } from '@/sanity/lib/queries';
import type { SanityRoom, SanityExperience, SanityJournalPost } from '@/sanity/lib/types';
import { rooms as staticRooms, experiences as staticExperiences, journalPosts as staticPosts } from '@/lib/data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://craigmorehouse.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sanityRooms, sanityExps, sanityPosts] = await Promise.all([
    sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY),
    sanityFetch<SanityExperience[]>(ALL_EXPERIENCES_QUERY),
    sanityFetch<SanityJournalPost[]>(ALL_JOURNAL_POSTS_QUERY),
  ]);

  const rooms = sanityRooms?.length ? sanityRooms : staticRooms;
  const experiences = sanityExps?.length ? sanityExps : staticExperiences;
  const posts = sanityPosts?.length ? sanityPosts : staticPosts;

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/rooms`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/dining`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/experiences`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/weddings`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/special-offers`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/journal`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/location`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/gift-vouchers`, priority: 0.6, changeFrequency: 'monthly' },
  ];

  const roomPages: MetadataRoute.Sitemap = rooms.map((r: any) => ({
    url: `${BASE_URL}/rooms/${r.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const expPages: MetadataRoute.Sitemap = experiences.map((e: any) => ({
    url: `${BASE_URL}/experiences/${e.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((p: any) => ({
    url: `${BASE_URL}/journal/${p.slug}`,
    priority: 0.6,
    changeFrequency: 'yearly' as const,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticPages, ...roomPages, ...expPages, ...postPages];
}
