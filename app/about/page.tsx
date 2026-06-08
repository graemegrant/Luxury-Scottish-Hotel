import Image from 'next/image';
import { Leaf, Award, Heart } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_TEAM_QUERY } from '@/sanity/lib/queries';
import type { SanityTeamMember } from '@/sanity/lib/types';
import { teamMembers as staticTeam } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import SectionLabel from '@/components/SectionLabel';
import TeamCard from '@/components/cards/TeamCard';

export const metadata = buildMetadata({
  title: 'Our Story',
  description: 'The history, ethos and team behind Craigmore House — a family-restored Scottish highland retreat in the heart of Perthshire.',
  path: '/about',
});

export default async function AboutPage() {
  const sanityTeam = await sanityFetch<SanityTeamMember[]>(ALL_TEAM_QUERY);

  const team = sanityTeam?.length
    ? sanityTeam
    : staticTeam.map(m => ({ ...m, _id: m.name, image: m.image }));

  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=1600&q=80" alt="Craigmore House" fill priority className="object-cover opacity-40" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <SectionLabel color="parchment">Est. 2018</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Our Story</h1>
        </div>
      </section>

      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel>History</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-10" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Craigmore House</h2>
          <div className="space-y-6 text-[#2C2C2C]/70 text-base leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.9 }}>
            <p>Craigmore House was built in 1847 as a sporting retreat for the Mackenzie family, who had farmed this corner of Perthshire for three generations before. The original house — a modest laird&apos;s dwelling — was substantially enlarged in the 1870s when the Victorian passion for highland estates was at its height, adding the tower that now houses our most coveted suite.</p>
            <p>The house passed through several owners in the twentieth century, falling into disrepair in the 1990s before being acquired by Alasdair Mackenzie in 2015 — a distant descendant of the original family — who spent three years restoring it before opening to guests in 2018.</p>
            <p>The restoration preserved everything that makes old Scottish houses extraordinary — the panelled library, the stone-flagged kitchen, the four-acre walled garden — while making the house genuinely comfortable for the twenty-first century. No chintz was harmed in the making of Craigmore.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=600&q=80',
            'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?w=600&q=80',
            'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?w=600&q=80',
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img} alt="Craigmore Estate" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section className="py-20 bg-[#1C3A2B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionLabel color="parchment">The Team</SectionLabel>
            <h2 className="text-[#F2EDE4] text-4xl text-center mb-14" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>The People Behind Craigmore</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map(member => (
                <TeamCard
                  key={(member as any)._id || (member as any).name}
                  name={(member as any).name}
                  role={(member as any).role}
                  bio={(member as any).bio}
                  image={(member as any).image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ethos */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel>Our Ethos</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl mb-8" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Hospitality', text: 'Genuine warmth over scripted service. We remember your name, not your room number.' },
              { icon: Leaf, title: 'The Land', text: 'The estate feeds the kitchen, the kitchen feeds the guests. Nothing superfluous, nothing flown in.' },
              { icon: Award, title: 'Craft', text: 'Everything at Craigmore — from the jam at breakfast to the thread count in the bedrooms — is chosen with care.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={20} className="text-[#C4924A] mx-auto mb-4" />
                <h3 className="text-[#1C3A2B] text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
                <p className="text-[#2C2C2C]/60 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video overflow-hidden">
              <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&q=80" alt="Craigmore Kitchen Garden" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#1C3A2B] text-4xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>The Estate&apos;s Commitments</h2>
              <ul className="space-y-4">
                {[
                  'Four-acre walled kitchen garden supplying over 70% of our vegetables',
                  'Wood from the estate fuels every log fire and the biomass boiler',
                  'Estate venison, game birds and river fish replace imported protein',
                  'All linens and bathroom products from Scottish makers',
                  'EV charging for all estate vehicles and guest charging points',
                  'Native woodland expansion: 6,000 trees planted since 2019',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <Leaf size={14} className="text-[#C4924A] mt-0.5 shrink-0" />
                    <span className="text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 bg-[#1C3A2B] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-[#F2EDE4]/30 text-xs tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'Jost, sans-serif' }}>As Featured In</div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Condé Nast Traveller', 'The Sunday Times', 'The Guardian', "Harper's Bazaar", 'Country Life'].map(name => (
              <div key={name} className="text-[#F2EDE4]/40 text-sm tracking-wider" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
