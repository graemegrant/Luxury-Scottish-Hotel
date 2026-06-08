'use client';

import { useState, useEffect } from 'react';
import { hotelConfig } from '@/hotel.config';

const COOKIE_KEY = `${hotelConfig.name.toLowerCase().replace(/\s/g, '-')}-cookie-consent`;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem(COOKIE_KEY, 'accepted'); setVisible(false); };
  const decline = () => { localStorage.setItem(COOKIE_KEY, 'necessary-only'); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-[#1C3A2B] border-t border-[#C4924A]/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[#F2EDE4]/70 text-sm leading-relaxed max-w-2xl" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          We use cookies to enhance your experience at {hotelConfig.name} — including analytics and personalisation.{' '}
          <a href="/cookie-policy" className="text-[#C4924A] hover:underline">Learn more</a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="px-5 py-2 text-xs tracking-widest uppercase text-[#F2EDE4]/60 border border-white/20 hover:border-white/40 transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
            Essential Only
          </button>
          <button onClick={accept} className="px-5 py-2 text-xs tracking-widest uppercase bg-[#C4924A] text-white hover:bg-[#d4a76a] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
