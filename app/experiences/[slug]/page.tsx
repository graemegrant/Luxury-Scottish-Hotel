import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowLeft, Clock } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { EXPERIENCE_BY_SLUG_QUERY, ALL_EXPERIENCES_QUERY } from '@/sanity/lib/queries';
import type { SanityExperience } from '@/sanity/lib/types';
import { experiences as staticExperiences } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import SectionLabel from '@/components/SectionLabel';

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const exp = await sanityFetch<SanityExperience>(EXPERIENCE_BY_SLUG_QUERY, { slug: params.slug })
    || staticExperiences.find(e => e.slug === params.slug);
  if (!exp) return {};
  return buildMetadata({
    title: (exp as any).name,
    description: (exp as any).description?.slice(0, 155),
    path: `/experiences/${params.slug}`,
    ogImage: (exp as any).image,
  });
}

export async function generateStaticParams() {
  return staticExperiences.map(e => ({ slug: e.slug }));
}

export default async function ExperiencePage({ params }: Props) {
  const [sanityExp, allSanityExps] = await Promise.all([
    sanityFetch<SanityExperience>(EXPERIENCE_BY_SLUG_QUERY, { slug: params.slug }),
    sanityFetch<SanityExperience[]>(ALL_EXPERIENCES_QUERY),
  ]);

  const exp = sanityExp || staticExperiences.find(e => e.slug === params.slug);
  if (!exp) notFound();

  const allExps = allSanityExps?.length ? allSanityExps : staticExperiences;
  const related = allExps.filter((e: any) => e.slug !== params.slug).slice(0, 3);

  const e = exp as any;

  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image src={e.image} alt={e.name} fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{e.category}</div>
          <h1 className="text-[#F2EDE4] text-4xl lg:text-5xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{e.name}</h1>
        </div>
      </section>

      <section className="py-16 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Link href="/experiences" className="inline-flex items-center gap-2 text-[#1C3A2B]/50 text-xs tracking-widest uppercase mb-6 hover:text-[#1C3A2B] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
                <ArrowLeft size={12} /> All Experiences
              </Link>
              {e.seasons?.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {e.seasons.map((s: string) => (
                    <span key={s} className="bg-[#E8E2D9] text-[#1C3A2B]/60 text-xs tracking-widest uppercase px-3 py-1.5 border border-[#1C3A2B]/10" style={{ fontFamily: 'Jost, sans-serif' }}>{s}</span>
                  ))}
                  <span className="flex items-center gap-1.5 text-[#1C3A2B]/40 text-xs" style={{ fontFamily: 'Jost, sans-serif' }}>
                    <Clock size={11} /> {e.duration}
                  </span>
                </div>
              )}
              <p className="text-[#2C2C2C]/70 text-base leading-relaxed mb-10" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>{e.description}</p>
              {e.includes?.length > 0 && (
                <>
                  <h2 className="text-[#1C3A2B] text-2xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>What&apos;s Included</h2>
                  <ul className="space-y-3">
                    {e.includes.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-4 h-4 bg-[#1C3A2B]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-[#C4924A]" />
                        </div>
                        <span className="text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#1C3A2B] p-8">
                <div className="text-[#F2EDE4]/50 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Pricing Guide</div>
                <div className="text-[#F2EDE4] text-2xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>{e.price}</div>
                <Link href="/contact" className="block w-full bg-[#C4924A] text-white text-sm tracking-[0.1em] uppercase py-4 text-center hover:bg-[#d4a76a] transition-colors mb-3" style={{ fontFamily: 'Jost, sans-serif' }}>
                  Enquire &amp; Book
                </Link>
                <p className="text-[#F2EDE4]/40 text-xs text-center" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  We arrange all experiences personally. Please contact us to check availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionLabel>More Experiences</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {related.map((r: any) => (
                <Link key={r.slug} href={`/experiences/${r.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-video mb-4">
                    <Image src={r.image} alt={r.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>{r.category}</div>
                  <h3 className="text-[#1C3A2B] text-lg" style={{ fontFamily: 'Georgia, serif' }}>{r.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
