'use client';

import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

export default function SpecialOffersClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-[#1C3A2B] text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-[#F2EDE4]/60 text-base mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            All offers are available exclusively on direct bookings. Book via the button below for the best rate and no hidden fees.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#d4a76a] transition-colors"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Check Availability
          </button>
        </div>
      </section>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
