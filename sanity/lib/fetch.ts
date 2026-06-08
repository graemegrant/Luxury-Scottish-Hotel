import { sanityClient } from './client';

/**
 * sanityFetch — typed wrapper around sanityClient.fetch.
 * Falls back to an empty array/null if Sanity env vars are missing,
 * so the site still builds with static data during development.
 */
export async function sanityFetch<T = unknown>(
  query: string,
  params?: Record<string, unknown>
): Promise<T> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId || projectId === 'your-project-id') {
    console.warn('[sanityFetch] No Sanity project ID set — returning empty data. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local');
    // Return empty array or null based on query shape
    return (query.includes('[0]') ? null : []) as T;
  }

  return sanityClient.fetch<T>(query, params || {});
}
