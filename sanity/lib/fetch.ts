import { sanityClient } from './client';

export async function sanityFetch<T = unknown>(
  query: string,
  params?: Record<string, unknown>
): Promise<T> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId || projectId === 'placeholder' || projectId === 'your-project-id') {
    return (query.includes('[0]') ? null : []) as T;
  }

  try {
    return await sanityClient.fetch<T>(query, params || {});
  } catch (err) {
    console.warn('[sanityFetch] Query failed, returning empty fallback:', err);
    return (query.includes('[0]') ? null : []) as T;
  }
}