import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Maximize2, Users } from 'lucide-react';

interface RoomCardProps {
  slug: string;
  name: string;
  type: string;
  sqm: number;
  occupancy: number;
  rate: number;
  image: string;
  shortDescription: string;
}

export default function RoomCard({ slug, name, type, sqm, occupancy, rate, image, shortDescription }: RoomCardProps) {
  return (
    <article className="group bg-[#F2EDE4]">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span
            className="bg-[#1C3A2B] text-[#C4924A] text-xs tracking-[0.18em] uppercase px-3 py-1.5"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
          >
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-[#1C3A2B] text-xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>
          {name}
        </h3>
        <p className="text-[#2C2C2C]/60 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          {shortDescription}
        </p>
        <div className="flex items-center gap-4 mb-5 text-xs text-[#1C3A2B]/50" style={{ fontFamily: 'Jost, sans-serif' }}>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={12} className="text-[#C4924A]" />
            {sqm} m&sup2;
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={12} className="text-[#C4924A]" />
            Up to {occupancy} guests
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[#1C3A2B]/40 text-xs tracking-widest uppercase mb-0.5" style={{ fontFamily: 'Jost, sans-serif' }}>
              From
            </div>
            <div className="text-[#1C3A2B] text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              &pound;{rate}
              <span className="text-sm text-[#1C3A2B]/40 ml-1" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>/night</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/rooms/${slug}`}
              className="text-xs tracking-[0.1em] uppercase text-[#1C3A2B] border border-[#1C3A2B]/30 px-4 py-2 hover:border-[#1C3A2B] transition-colors"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              View Room
            </Link>
            <Link
              href={`/availability`}
              className="text-xs tracking-[0.1em] uppercase bg-[#C4924A] text-white px-4 py-2 hover:bg-[#d4a76a] transition-colors flex items-center gap-1.5"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Book <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
