import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Car, Train, Plane, ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import PageHero from '@/components/sections/PageHero';

export const metadata = {
  title: 'Location & Getting Here',
  description: 'Craigmore House is set in 400 acres in highland Perthshire. Find directions from Edinburgh, Glasgow and beyond.',
};

const routes = [
  { icon: Car, from: 'Edinburgh', time: '1 hr 15 min', via: 'A9 north via Perth', detail: 'Take the M90 to Perth, then A9 north. Follow signs for Pitlochry and look for Craigmore House signage.' },
  { icon: Car, from: 'Glasgow', time: '1 hr 30 min', via: 'M80 to A9', detail: 'M80 north to Stirling, then A9 through Perth. A direct and scenic drive through the heart of Scotland.' },
  { icon: Car, from: 'Inverness', time: '1 hr 45 min', via: 'A9 south', detail: 'South on the A9, through the Cairngorms National Park. One of the finest drives in Britain.' },
  { icon: Train, from: 'Perth Station', time: '25 min', via: 'Taxi from station', detail: 'Edinburgh to Perth is 1 hour by ScotRail. We can arrange a taxi transfer from Perth station — please contact us.' },
  { icon: Train, from: 'Pitlochry Station', time: '15 min', via: 'Taxi from station', detail: 'Pitlochry is a short stop on the Inverness line. Transfers available by arrangement.' },
  { icon: Plane, from: 'Edinburgh Airport', time: '1 hr 30 min', via: 'Car hire or transfer', detail: 'Hire car recommended. Alternatively we can arrange a private transfer — please enquire in advance.' },
];

const nearbyAttractions = [
  { name: 'Loch Earn', distance: '2 miles', type: 'Loch', description: 'Stunning freshwater loch with watersports, kayaking and walking.' },
  { name: 'Crieff & Glenturret Distillery', distance: '8 miles', type: 'Town & Distillery', description: 'Scotland\'s oldest working distillery — home of The Macallan parent company.' },
  { name: 'Ben Vorlich (Munro)', distance: '14 miles', type: 'Mountain', description: 'A popular Munro at 985m, manageable in a half day with superb loch views.' },
  { name: 'Pitlochry', distance: '18 miles', type: 'Town', description: 'Victorian spa town with the famous theatre, dam, and a dozen whisky shops.' },
  { name: 'Dunkeld', distance: '20 miles', type: 'Town', description: 'Cathedral town on the Tay — remarkable medieval history and riverside walks.' },
  { name: 'Aberfeldy', distance: '10 miles', type: 'Town', description: 'Gateway to the Tay valley, with the famous Wade\'s Bridge and Dewar\'s World of Whisky.' },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Perthshire, Scotland"
        title="Getting Here"
        subtitle="Remote enough to feel truly away. Easily reached from Edinburgh, Glasgow and beyond."
        image="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?w=1600&q=80"
        imageAlt="Perthshire Highland landscape"
      />

      {/* Map embed */}
      <section className="bg-[#1C3A2B]">
        <div className="w-full h-80 bg-[#1C3A2B]/50 flex items-center justify-center border-b border-white/10">
          <div className="text-center px-6">
            <MapPin size={24} className="text-[#C4924A] mx-auto mb-3" />
            <p className="text-[#F2EDE4]/60 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Craigmore House, Perthshire, PH15 2NR
            </p>
            <p className="text-[#F2EDE4]/30 text-xs mt-2" style={{ fontFamily: 'Jost, sans-serif' }}>
              Map embed — add Google Maps iframe for production
            </p>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Directions</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-14" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            How to Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <div key={route.from} className="bg-[#E8E2D9] p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={16} className="text-[#C4924A]" />
                    <div>
                      <div className="text-[#1C3A2B] text-sm font-medium" style={{ fontFamily: 'Jost, sans-serif' }}>From {route.from}</div>
                      <div className="text-[#C4924A] text-xs" style={{ fontFamily: 'Georgia, serif' }}>{route.time}</div>
                    </div>
                  </div>
                  <div className="text-[#2C2C2C]/50 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{route.via}</div>
                  <p className="text-[#2C2C2C]/60 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{route.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#1C3A2B] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Need a transfer?</div>
              <p className="text-[#F2EDE4]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                We can arrange private transfers from Perth, Pitlochry or Edinburgh Airport. Please contact us when booking.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 border border-[#C4924A] text-[#C4924A] text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#C4924A] hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: 'Jost, sans-serif' }}>
              Arrange Transfer <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby attractions */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Explore</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-14" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            The Local Area
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((place) => (
              <div key={place.name} className="bg-[#F2EDE4] p-7 border-t-2 border-[#C4924A]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[#1C3A2B] text-lg" style={{ fontFamily: 'Georgia, serif' }}>{place.name}</h3>
                  <span className="text-[#C4924A] text-xs tracking-widest uppercase ml-4 shrink-0 mt-1" style={{ fontFamily: 'Jost, sans-serif' }}>{place.distance}</span>
                </div>
                <div className="text-[#2C2C2C]/40 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'Jost, sans-serif' }}>{place.type}</div>
                <p className="text-[#2C2C2C]/60 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{place.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address block */}
      <section className="py-16 bg-[#1C3A2B] text-center">
        <div className="max-w-md mx-auto px-6">
          <MapPin size={20} className="text-[#C4924A] mx-auto mb-4" />
          <div className="text-[#F2EDE4] text-xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>Craigmore House</div>
          <div className="text-[#F2EDE4]/50 text-sm leading-relaxed space-y-1" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            <p>Perthshire, PH15 2NR</p>
            <p>Scotland, United Kingdom</p>
            <p className="mt-3 text-[#C4924A]">+44 (0)1796 000 000</p>
            <p>enquiries@craigmorehouse.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
