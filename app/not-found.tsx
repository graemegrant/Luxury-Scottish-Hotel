import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1C3A2B] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-[#C4924A] text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Jost, sans-serif' }}>
          404
        </div>
        <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.1 }}>
          Lost on the Moor
        </h1>
        <p className="text-[#F2EDE4]/50 text-base leading-relaxed mb-10" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
          This page has wandered off into the heather. Our ranger is looking for it. In the meantime, let us guide you back to the house.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#d4a76a] transition-colors"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}
          >
            Back to Home
          </Link>
          <Link
            href="/rooms"
            className="inline-flex items-center justify-center gap-2 border border-[#F2EDE4]/30 text-[#F2EDE4]/70 text-sm tracking-[0.15em] uppercase px-8 py-4 hover:border-[#F2EDE4]/60 hover:text-[#F2EDE4] transition-colors"
            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
          >
            View Rooms <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
