import Image from 'next/image';
import Link from 'next/link';
import { Clock } from 'lucide-react';

interface ExperienceCardProps {
  slug: string;
  name: string;
  category: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  seasons: string[];
}

export default function ExperienceCard({ slug, name, category, duration, price, image }: ExperienceCardProps) {
  return (
    <article className="group bg-[#E8E2D9]">
      <Link href={`/experiences/${slug}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span
              className="bg-[#1C3A2B]/80 text-[#C4924A] text-xs tracking-[0.18em] uppercase px-3 py-1.5 backdrop-blur-sm"
              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
            >
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-[#1C3A2B] text-xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[#2C2C2C]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              <Clock size={11} className="text-[#C4924A]" />
              {duration}
            </div>
            <div className="text-[#C4924A] text-sm" style={{ fontFamily: 'Georgia, serif' }}>
              {price}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
