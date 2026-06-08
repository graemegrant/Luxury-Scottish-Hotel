import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  size?: 'default' | 'large';
}

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt, size = 'default' }: PageHeroProps) {
  const padding = size === 'large' ? 'pt-28 pb-32' : 'pt-28 pb-20';

  return (
    <section className={`relative ${padding} overflow-hidden bg-[#1C3A2B]`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
        {eyebrow && <SectionLabel color="parchment">{eyebrow}</SectionLabel>}
        <h1
          className="text-[#F2EDE4] text-5xl lg:text-6xl"
          style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-[#F2EDE4]/60 text-lg max-w-xl mx-auto mt-4"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
