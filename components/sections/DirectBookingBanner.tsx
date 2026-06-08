'use client';

import { useState } from 'react';
import BookingModal from '@/components/BookingModal';

interface DirectBookingBannerProps {
  message?: string;
}

export default function DirectBookingBanner({ message = 'Save up to 15% by booking direct — best rate guaranteed, no fees, complimentary welcome dram.' }: DirectBookingBannerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-[#C4924A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-sm tracking-wide text-center sm:text-left" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            <strong className="font-medium">Save up to 15%</strong>{' '}
            {message.replace('Save up to 15% by booking direct — ', '')}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="shrink-0 bg-white text-[#C4924A] text-xs tracking-[0.15em] uppercase px-6 py-2.5 hover:bg-[#F2EDE4] transition-colors font-medium whitespace-nowrap"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Book Direct Now
          </button>
        </div>
      </div>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
