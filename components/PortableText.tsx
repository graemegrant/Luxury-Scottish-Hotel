import { PortableText as SanityPortableText } from '@portabletext/react';
import Image from 'next/image';

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-[#2C2C2C]/70 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.9 }}>
        {children}
      </p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-[#1C3A2B] text-2xl mt-10 mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-[#1C3A2B] text-xl mt-8 mb-3" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-[#C4924A] pl-6 my-8">
        <p className="text-[#1C3A2B] text-xl" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-medium text-[#1C3A2B]">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-[#C4924A] border-b border-[#C4924A]/40 hover:border-[#C4924A] transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url && !value?.asset) return null;
      const src = value.asset?.url || value.asset;
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden">
            <Image src={src} alt={value.alt || ''} fill className="object-cover" />
          </div>
          {value.caption && (
            <figcaption className="text-center text-[#2C2C2C]/40 text-xs mt-3 tracking-wide" style={{ fontFamily: 'Jost, sans-serif' }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextProps {
  value: unknown[];
}

export default function PortableText({ value }: PortableTextProps) {
  return <SanityPortableText value={value as any} components={components} />;
}
