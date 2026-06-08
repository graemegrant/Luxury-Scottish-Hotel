import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface JournalCardProps {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export default function JournalCard({ slug, title, category, author, readingTime, excerpt, image, featured }: JournalCardProps) {
  if (featured) {
    return (
      <Link href={`/journal/${slug}`} className="group block">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-[#E8E2D9]">
            <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: 'Jost, sans-serif' }}>{category}</div>
            <h2 className="text-[#1C3A2B] text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{title}</h2>
            <p className="text-[#2C2C2C]/60 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="text-[#2C2C2C]/40 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                {author} &middot; {readingTime}
              </div>
              <span
                className="inline-flex items-center gap-2 text-[#1C3A2B] text-xs tracking-[0.15em] uppercase border-b border-[#C4924A]/50 pb-0.5 group-hover:border-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Read More <ArrowRight size={11} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="group">
      <Link href={`/journal/${slug}`}>
        <div className="relative overflow-hidden aspect-video mb-5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{category}</div>
        <h2 className="text-[#1C3A2B] text-xl mb-2 group-hover:text-[#2a5040] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
        <p className="text-[#2C2C2C]/60 text-sm leading-relaxed mb-3" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          {excerpt.slice(0, 120)}...
        </p>
        <div className="text-[#2C2C2C]/40 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          {author} &middot; {readingTime}
        </div>
      </Link>
    </article>
  );
}
