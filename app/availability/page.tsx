'use client';

import { useState } from 'react';
import { Shield, Tag, Gift, Star } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import BookingModal from '@/components/BookingModal';

export default function AvailabilityPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="pt-28 pb-20 bg-[#1C3A2B] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#C4924A]/20 border border-[#C4924A]/30 px-4 py-2 mb-6">
            <Shield size={12} className="text-[#C4924A]" />
            <span className="text-[#C4924A] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>Best Rate Guaranteed</span>
          </div>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Book Direct &amp; Save
          </h1>
          <p className="text-[#F2EDE4]/60 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            You will always find the lowest price here. We guarantee it — and we&apos;ll match any rate you find elsewhere.
          </p>
          <button onClick={() => setBookingOpen(true)} className="bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-12 py-5 hover:bg-[#d4a76a] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
            Check Availability Now
          </button>
        </div>
      </section>

      <section className="py-12 bg-[#F2EDE4]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Tag, title: 'No Booking Fees', desc: 'Zero commission, zero surcharges' },
              { icon: Shield, title: 'Best Rate', desc: 'Guaranteed lowest available price' },
              { icon: Gift, title: 'Welcome Dram', desc: 'Complimentary on direct bookings' },
              { icon: Star, title: '5-Star Rated', desc: 'Consistently excellent reviews' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#E8E2D9] p-6">
                <Icon size={20} className="text-[#C4924A] mx-auto mb-3" />
                <h3 className="text-[#1C3A2B] text-base mb-1" style={{ fontFamily: 'Georgia, serif' }}>{title}</h3>
                <p className="text-[#2C2C2C]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E8E2D9]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why Book Direct</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-10" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Direct vs OTA — The True Cost
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1C3A2B]/10">
                  <th className="text-left py-4 text-[#2C2C2C]/50 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Jost, sans-serif' }}></th>
                  <th className="text-center py-4 text-[#1C3A2B] text-xs tracking-[0.2em] uppercase bg-[#C4924A]/10 px-4" style={{ fontFamily: 'Jost, sans-serif' }}>Craigmore Direct</th>
                  <th className="text-center py-4 text-[#2C2C2C]/50 text-xs tracking-[0.2em] uppercase px-4" style={{ fontFamily: 'Jost, sans-serif' }}>Booking.com / Expedia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nightly Rate', 'Lowest available', 'Up to 15% higher'],
                  ['Booking Fees', 'None', 'Up to 3% credit card fee'],
                  ['Welcome Dram', 'Included', 'Not available'],
                  ['Flexible Cancellation', 'Available on request', 'Often more restrictive'],
                  ['Direct Contact', 'Always', 'Via platform only'],
                  ['Personalisation', 'Full', 'Limited'],
                ].map(([feature, direct, ota]) => (
                  <tr key={feature} className="border-b border-[#1C3A2B]/10">
                    <td className="py-4 text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{feature}</td>
                    <td className="py-4 text-center text-sm bg-[#C4924A]/5 px-4"><span className="text-[#1C3A2B]" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>{direct}</span></td>
                    <td className="py-4 text-center text-[#2C2C2C]/40 text-sm px-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{ota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3A2B] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-[#F2EDE4] text-4xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Ready to Book?</h2>
          <p className="text-[#F2EDE4]/50 text-base mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Check availability below. We guarantee the lowest rate on every room, every night.</p>
          <button onClick={() => setBookingOpen(true)} className="bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-12 py-5 hover:bg-[#d4a76a] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>Check Availability</button>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
