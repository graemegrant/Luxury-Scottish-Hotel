'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import BookingModal from '@/components/BookingModal';

const menuItems = [
  { course: 'Starter', name: 'Smoked Tay Salmon', desc: 'Cucumber, dill crème fraîche, pickled shallots' },
  { course: 'Starter', name: 'Estate Venison Tartare', desc: 'Quail egg, capers, sourdough, mustard leaf' },
  { course: 'Main', name: 'Roast Perthshire Pheasant', desc: 'Celeriac, blackberries, game jus, watercress' },
  { course: 'Main', name: 'Halibut from Scrabster', desc: 'Braised leeks, sea herbs, brown butter, fennel' },
  { course: 'Dessert', name: 'Heather Honey Panna Cotta', desc: 'Raspberry, shortbread, crystallised violet' },
  { course: 'Dessert', name: 'Aged Highland Cheddar', desc: 'Membrillo, oatcakes, pickled walnut, chutney' },
];

export default function DiningPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=1600&q=80"
            alt="The Glen Dining Room"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/80 to-[#1C3A2B]/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <SectionLabel color="parchment">Craigmore House</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            The Glen Dining Room
          </h1>
          <p className="text-[#F2EDE4]/70 text-lg max-w-xl mx-auto" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            A seasonal menu shaped by the estate, the river, and the Perthshire larder.
          </p>
        </div>
      </section>

      {/* Dining info bar */}
      <div className="bg-[#1C3A2B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-6 justify-center md:justify-between items-center">
          {[
            { label: 'Dinner', detail: 'Wednesday – Sunday, 7pm – 9:30pm' },
            { label: 'Breakfast', detail: 'Daily, 7:30am – 10am' },
            { label: 'Afternoon Tea', detail: 'Daily, 3pm – 5pm (booking required)' },
          ].map(item => (
            <div key={item.label} className="text-center md:text-left">
              <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-0.5" style={{ fontFamily: 'Jost, sans-serif' }}>{item.label}</div>
              <div className="text-[#F2EDE4]/60 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item.detail}</div>
            </div>
          ))}
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#C4924A] text-white text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#d4a76a] transition-colors"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Reserve a Table
          </button>
        </div>
      </div>

      {/* Chef section */}
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>The Kitchen</SectionLabel>
              <h2 className="text-[#1C3A2B] text-4xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                Chef Finlay Ross
              </h2>
              <div className="space-y-5 text-[#2C2C2C]/60 text-base leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>
                <p>
                  Finlay Ross trained under two Michelin-starred chefs before returning to Scotland to cook the land he grew up on. His menus at Craigmore change weekly, dictated by what the estate&apos;s head ranger brings in, what the walled garden is yielding, and what the Tay is offering in the way of fish.
                </p>
                <p>
                  Nothing is forced. Nothing is flown in. The menu in October looks nothing like the menu in April, and that is exactly as it should be.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#1C3A2B] text-xs tracking-[0.15em] uppercase border-b border-[#C4924A]/50 pb-0.5 hover:border-[#C4924A] transition-colors mt-6"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Private Dining Enquiry <ArrowRight size={12} />
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?w=800&q=80"
                alt="Chef Finlay Ross"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-[#1C3A2B]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel color="parchment">Current Season</SectionLabel>
          <h2 className="text-[#F2EDE4] text-4xl text-center mb-3" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Sample Menu
          </h2>
          <p className="text-[#F2EDE4]/40 text-center text-sm mb-12" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            Our menu changes weekly. This is a sample only.
          </p>

          {['Starter', 'Main', 'Dessert'].map(course => (
            <div key={course} className="mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-[#C4924A]/20" />
                <span className="text-[#C4924A] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>{course}</span>
                <div className="h-px flex-1 bg-[#C4924A]/20" />
              </div>
              {menuItems.filter(i => i.course === course).map(item => (
                <div key={item.name} className="mb-5">
                  <div className="text-[#F2EDE4] text-lg mb-1" style={{ fontFamily: 'Georgia, serif' }}>{item.name}</div>
                  <div className="text-[#F2EDE4]/40 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          ))}

          <div className="text-center mt-8">
            <div className="text-[#F2EDE4]/40 text-sm mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Five-course tasting menu &pound;95 &middot; Three courses &pound;68 &middot; Wine pairing available
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="bg-[#C4924A] text-white text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#d4a76a] transition-colors"
              style={{ fontFamily: 'Jost, sans-serif' }}
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=800&q=80"
                alt="Private Dining at Craigmore"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <SectionLabel>The Library</SectionLabel>
              <h2 className="text-[#1C3A2B] text-4xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                Private Dining
              </h2>
              <p className="text-[#2C2C2C]/60 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>
                The Craigmore Library seats up to 12 guests for private dinner. Chef Finlay designs a bespoke menu around your preferences — dietary requirements, favourite ingredients, an occasion to celebrate.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Capacity</div>
                  <div className="text-[#1C3A2B] text-2xl" style={{ fontFamily: 'Georgia, serif' }}>2–12</div>
                  <div className="text-[#2C2C2C]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Guests</div>
                </div>
                <div className="w-px bg-[#1C3A2B]/10" />
                <div>
                  <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Notice</div>
                  <div className="text-[#1C3A2B] text-2xl" style={{ fontFamily: 'Georgia, serif' }}>72hrs</div>
                  <div className="text-[#2C2C2C]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Minimum</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1C3A2B] text-[#F2EDE4] text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#2a5040] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Enquire About Private Dining <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whisky & Bar */}
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel>The Bar</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            The Craigmore Bar
          </h2>
          <p className="text-[#2C2C2C]/60 text-base max-w-xl mx-auto mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            Over 200 single malt whiskies, with particular depth in the Perthshire and Highland regions. Open to residents daily from noon.
          </p>
          <div className="grid grid-cols-3 max-w-sm mx-auto gap-4">
            {[['200+', 'Whiskies'], ['15+', 'Perthshire Malts'], ['3', 'House Cocktails']].map(([num, label]) => (
              <div key={label}>
                <div className="text-[#1C3A2B] text-3xl" style={{ fontFamily: 'Georgia, serif' }}>{num}</div>
                <div className="text-[#2C2C2C]/50 text-xs tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
