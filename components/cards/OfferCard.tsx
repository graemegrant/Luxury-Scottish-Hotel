import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

interface OfferCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  inclusions?: string[];
  layout?: 'grid' | 'feature';
  reverse?: boolean;
}

export default function OfferCard({ slug, title, subtitle, description, image, tag, inclusions, layout = 'grid', reverse }: OfferCardProps) {
  if (layout === 'feature') {
    return (
      <article id={slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden`}>
        <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
          <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute top-6 left-6">
            <span className="bg-[#C4924A] text-white text-xs tracking-widest uppercase px-3 py-1.5" style={{ fontFamily: 'Jost, sans-serif' }}>{tag}</span>
          </div>
        </div>
        <div className={`bg-[#E8E2D9] p-10 lg:p-14 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
          <h2 className="text-[#1C3A2B] text-3xl mb-2" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{title}</h2>
          <p className="text-[#C4924A] text-base mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{subtitle}</p>
          <p className="text-[#2C2C2C]/60 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>{description}</p>
          {inclusions && (
            <>
              <h3 className="text-[#1C3A2B] text-sm tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>What&apos;s Included</h3>
              <ul className="space-y-2 mb-8">
                {inclusions.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#1C3A2B]/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-[#C4924A]" />
                    </div>
                    <span className="text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link
            href={`/special-offers#${slug}`}
            className="inline-flex items-center gap-2 bg-[#1C3A2B] text-[#F2EDE4] text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#2a5040] transition-colors self-start"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Book This Offer <ArrowRight size={12} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-[#E8E2D9] h-full flex flex-col">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#C4924A] text-white text-xs tracking-widest uppercase px-3 py-1" style={{ fontFamily: 'Jost, sans-serif' }}>{tag}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#1C3A2B] text-xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
        <p className="text-[#C4924A] text-sm mb-3" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{subtitle}</p>
        <p className="text-[#2C2C2C]/60 text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{description}</p>
        <Link
          href={`/special-offers#${slug}`}
          className="inline-flex items-center gap-2 text-[#1C3A2B] text-xs tracking-[0.15em] uppercase border-b border-[#C4924A]/50 pb-0.5 hover:border-[#C4924A] transition-colors self-start"
          style={{ fontFamily: 'Jost, sans-serif' }}
        >
          View Offer <ArrowRight size={11} />
        </Link>
      </div>
    </article>
  );
}
