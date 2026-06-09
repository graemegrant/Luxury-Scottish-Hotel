import { notFound } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { JOURNAL_POST_BY_SLUG_QUERY, ALL_JOURNAL_POSTS_QUERY, ALL_ROOMS_QUERY } from '@/sanity/lib/queries';
import type { SanityJournalPost, SanityRoom } from '@/sanity/lib/types';
import { journalPosts as staticPosts, rooms as staticRooms } from '@/lib/data';
import { buildMetadata, buildBlogPostingSchema } from '@/lib/seo';
import SectionLabel from '@/components/SectionLabel';
import PortableText from '@/components/PortableText';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const post = staticPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt?.slice(0, 155),
    path: `/journal/${params.slug}`,
    ogImage: post.image,
  });
}

export async function generateStaticParams() {
  return staticPosts.map(p => ({ slug: p.slug }));
}

export default async function JournalPostPage({ params }: Props) {
  const [sanityPost, allSanityPosts, sanityRooms] = await Promise.all([
    sanityFetch<SanityJournalPost>(JOURNAL_POST_BY_SLUG_QUERY, { slug: params.slug }),
    sanityFetch<SanityJournalPost[]>(ALL_JOURNAL_POSTS_QUERY),
    sanityFetch<SanityRoom[]>(ALL_ROOMS_QUERY),
  ]);

  const post = sanityPost || staticPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const allPosts = allSanityPosts?.length ? allSanityPosts : staticPosts;
  const related = allPosts.filter((p: any) => p.slug !== params.slug).slice(0, 2);

  const featuredRoom = sanityRooms?.[0] || staticRooms[0];

  const p = post as any;
  const schema = buildBlogPostingSchema({
    title: p.title,
    excerpt: p.excerpt,
    publishedAt: p.publishedAt,
    author: p.author,
    image: p.image,
    slug: params.slug,
  });

  return (
    <>
      <Script id={`schema-post-${params.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image src={p.image} alt={p.title} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{p.category}</div>
          <h1 className="text-[#F2EDE4] text-4xl lg:text-5xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{p.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3">
              <Link href="/journal" className="inline-flex items-center gap-2 text-[#1C3A2B]/50 text-xs tracking-widest uppercase mb-8 hover:text-[#1C3A2B] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
                <ArrowLeft size={12} /> The Journal
              </Link>
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#1C3A2B]/10">
                <div>
                  <div className="text-[#1C3A2B] text-sm font-medium" style={{ fontFamily: 'Jost, sans-serif' }}>{p.author}</div>
                  <div className="text-[#2C2C2C]/40 text-xs mt-0.5" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                    {new Date(p.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} &middot; {p.readingTime}
                  </div>
                </div>
              </div>

              {/* Body */}
              {p.body ? (
                <PortableText value={p.body} />
              ) : (
                <>
                  <p className="text-[#2C2C2C]/70 text-lg leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.9 }}>{p.excerpt}</p>
                  <p className="text-[#2C2C2C]/60 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.9 }}>
                    The Scottish highlands operate on their own calendar — not the one hanging in the kitchen, but the one written in light and weather and the behaviour of birds.
                  </p>
                  <blockquote className="border-l-2 border-[#C4924A] pl-6 my-8">
                    <p className="text-[#1C3A2B] text-xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                      The best reason to return is that it is never quite the same place twice.
                    </p>
                  </blockquote>
                </>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-[#1C3A2B] p-6">
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image src={(featuredRoom as any).image} alt={(featuredRoom as any).name} fill className="object-cover" />
                  </div>
                  <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Featured Room</div>
                  <h3 className="text-[#F2EDE4] text-lg mb-2" style={{ fontFamily: 'Georgia, serif' }}>{(featuredRoom as any).name}</h3>
                  <p className="text-[#F2EDE4]/40 text-xs mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>From £{(featuredRoom as any).rate}/night</p>
                  <Link href={`/rooms/${(featuredRoom as any).slug}`} className="block w-full bg-[#C4924A] text-white text-xs tracking-[0.12em] uppercase py-3 text-center hover:bg-[#d4a76a] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
                    Book Now
                  </Link>
                </div>
                <div>
                  <div className="text-[#1C3A2B] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>Categories</div>
                  {['Food & Drink', 'Wildlife', 'Local Guides', 'News', 'Seasonal', 'Field Sports'].map(cat => (
                    <div key={cat} className="py-2 border-b border-[#1C3A2B]/10">
                      <span className="text-[#2C2C2C]/60 text-sm hover:text-[#C4924A] transition-colors cursor-pointer" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionLabel>More from the Journal</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
              {related.map((r: any) => (
                <Link key={r.slug} href={`/journal/${r.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-video mb-4">
                    <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>{r.category}</div>
                  <h3 className="text-[#1C3A2B] text-lg group-hover:text-[#2a5040] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
