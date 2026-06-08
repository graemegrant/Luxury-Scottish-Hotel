'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Gift, ArrowRight, Check } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import PageHero from '@/components/sections/PageHero';
import BookingModal from '@/components/BookingModal';

const vouchers = [
  {
    id: 'dinner-for-two',
    title: 'Dinner for Two',
    description: 'A three-course dinner for two in The Glen Dining Room, with a glass of champagne on arrival. The perfect evening in Perthshire.',
    price: '£95',
    type: 'Dining',
    validity: '12 months',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=800&q=80',
    includes: ['Three-course dinner for two', 'Welcome glass of champagne', 'Valid any evening (subject to availability)', 'Beautifully presented in a Craigmore gift box'],
  },
  {
    id: 'one-night-escape',
    title: 'One Night Highland Escape',
    description: 'A one-night stay in a Classic or Deluxe room with full Scottish breakfast. Ideal as a gift for a birthday, anniversary, or simply because.',
    price: '£250',
    type: 'Stay',
    validity: '12 months',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?w=800&q=80',
    includes: ['One night in Classic or Deluxe room', 'Full Scottish breakfast', 'Complimentary welcome dram', 'Valid subject to availability'],
  },
  {
    id: 'choose-your-amount',
    title: 'Gift Voucher — Your Amount',
    description: 'Let them choose. A monetary gift voucher redeemable against any room, experience, dining or spa treatment at Craigmore.',
    price: 'From £50',
    type: 'Monetary',
    validity: '12 months',
    image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?w=800&q=80',
    includes: ['Redeemable against any Craigmore service', 'Any value from £50 upwards', 'Posted or emailed on your chosen date', 'Presented in a Craigmore gift box'],
  },
];

export default function GiftVouchersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Gifts"
        title="Gift Vouchers"
        subtitle="The gift of Craigmore — for someone who deserves something extraordinary."
        image="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=1600&q=80"
        imageAlt="Craigmore House gift vouchers"
      />

      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Available Vouchers</SectionLabel>
          <p className="text-[#2C2C2C]/60 text-center text-lg max-w-xl mx-auto mt-4 mb-14" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            All vouchers are valid for 12 months from purchase, beautifully presented, and can be posted or emailed on your chosen date.
          </p>

          <div className="space-y-16">
            {vouchers.map((v, i) => (
              <article key={v.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${i % 2 === 1 ? '' : ''}`}>
                <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image src={v.image} alt={v.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#C4924A] text-white text-xs tracking-widest uppercase px-3 py-1.5" style={{ fontFamily: 'Jost, sans-serif' }}>
                      {v.type}
                    </span>
                  </div>
                </div>
                <div className={`bg-[#E8E2D9] p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Gift size={16} className="text-[#C4924A]" />
                    <span className="text-[#C4924A] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>Valid {v.validity}</span>
                  </div>
                  <h2 className="text-[#1C3A2B] text-3xl mb-2" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{v.title}</h2>
                  <p className="text-[#C4924A] text-xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>{v.price}</p>
                  <p className="text-[#2C2C2C]/60 text-base leading-relaxed mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>{v.description}</p>
                  <ul className="space-y-2 mb-8">
                    {v.includes.map(item => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#1C3A2B]/10 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-[#C4924A]" />
                        </div>
                        <span className="text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="inline-flex items-center gap-2 bg-[#1C3A2B] text-[#F2EDE4] text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#2a5040] transition-colors self-start"
                    style={{ fontFamily: 'Jost, sans-serif' }}
                  >
                    Purchase Voucher <ArrowRight size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-20 bg-[#1C3A2B] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionLabel color="parchment">Bespoke</SectionLabel>
          <h2 className="text-[#F2EDE4] text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Something More Bespoke?
          </h2>
          <p className="text-[#F2EDE4]/60 text-base mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            We can create a bespoke gift package for any occasion — a fishing weekend, a whisky masterclass, or an entire house-party weekend. Just ask.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#C4924A] text-[#C4924A] text-xs tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-[#C4924A] hover:text-white transition-colors duration-300"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Speak to Us <ArrowRight size={13} />
          </a>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
