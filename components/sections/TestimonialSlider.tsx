'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  guestName: string;
  roomStayed: string;
  rating: number;
  date: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <div className="relative">
      <div className="text-center">
        <div className="text-[#C4924A] text-5xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
        <blockquote
          className="text-[#2C2C2C] text-xl lg:text-2xl mb-6 leading-relaxed"
          style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}
        >
          {t.quote}
        </blockquote>
        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-[#C4924A] text-[#C4924A]" />
          ))}
        </div>
        <div className="text-[#1C3A2B] text-sm font-medium mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>
          {t.guestName}
        </div>
        <div className="text-[#2C2C2C]/50 text-xs tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          {t.roomStayed} &middot; {t.date}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className="w-10 h-10 border border-[#1C3A2B]/30 flex items-center justify-center hover:border-[#1C3A2B] transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} className="text-[#1C3A2B]" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-[#C4924A]' : 'bg-[#1C3A2B]/20'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className="w-10 h-10 border border-[#1C3A2B]/30 flex items-center justify-center hover:border-[#1C3A2B] transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} className="text-[#1C3A2B]" />
        </button>
      </div>
    </div>
  );
}
