import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_JOURNAL_POSTS_QUERY } from '@/sanity/lib/queries';
import type { SanityJournalPost } from '@/sanity/lib/types';
import { journalPosts as staticPosts } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import SectionLabel from '@/components/SectionLabel';
import JournalCard from '@/components/cards/JournalCard';

export const metadata = buildMetadata({
  title: 'The Journal',
  description: 'Dispatches from the Craigmore estate — seasons, recipes, field sports and local guides from Perthshire, Scotland.',
  path: '/journal',
});

export default async function JournalPage() {
  const sanityPosts = await sanityFetch<SanityJournalPost[]>(ALL_JOURNAL_POSTS_QUERY);

  const posts = sanityPosts?.length
    ? sanityPosts
    : staticPosts.map(p => ({ ...p, _id: p.slug, image: p.image }));

  const [featured, ...rest] = posts;

  return (
    <>
      <section className="pt-28 pb-16 bg-[#1C3A2B] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel color="parchment">Craigmore</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>The Journal</h1>
          <p className="text-[#F2EDE4]/50 text-base" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            Dispatches from the estate — seasons, recipes, field sports and local guides.
          </p>
        </div>
      </section>

      {featured && (
        <section className="bg-[#F2EDE4]">
          <JournalCard
            slug={(featured as any).slug}
            title={(featured as any).title}
            category={(featured as any).category}
            author={(featured as any).author}
            publishedAt={(featured as any).publishedAt}
            readingTime={(featured as any).readingTime || ''}
            excerpt={(featured as any).excerpt}
            image={(featured as any).image}
            featured
          />
        </section>
      )}

      {rest.length > 0 && (
        <section className="py-16 bg-[#F2EDE4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map(post => (
                <JournalCard
                  key={(post as any)._id || (post as any).slug}
                  slug={(post as any).slug}
                  title={(post as any).title}
                  category={(post as any).category}
                  author={(post as any).author}
                  publishedAt={(post as any).publishedAt}
                  readingTime={(post as any).readingTime || ''}
                  excerpt={(post as any).excerpt}
                  image={(post as any).image}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
