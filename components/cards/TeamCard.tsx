import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <article className="group">
      <div className="relative overflow-hidden aspect-[3/4] mb-5">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <h3 className="text-[#1C3A2B] text-xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>{name}</h3>
      <div className="text-[#C4924A] text-xs tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'Jost, sans-serif' }}>{role}</div>
      <p className="text-[#2C2C2C]/60 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>{bio}</p>
    </article>
  );
}
