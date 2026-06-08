import { Shield, Tag, Gift, Star } from 'lucide-react';

const items = [
  { icon: Shield, text: 'Best Rate Guaranteed' },
  { icon: Tag, text: 'No Booking Fees' },
  { icon: Gift, text: 'Complimentary Welcome Dram' },
  { icon: Star, text: 'Rated 5 Stars by Guests' },
];

interface TrustStripProps {
  variant?: 'light' | 'dark';
}

export default function TrustStrip({ variant = 'light' }: TrustStripProps) {
  const bg = variant === 'dark' ? 'bg-[#1C3A2B]' : 'bg-[#E8E2D9]';
  const text = variant === 'dark' ? 'text-[#F2EDE4]/70' : 'text-[#1C3A2B]/70';
  const divider = variant === 'dark' ? 'border-white/10' : 'border-[#1C3A2B]/10';
  const iconColor = 'text-[#C4924A]';

  return (
    <div className={`${bg} border-y ${divider}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {items.map(({ icon: Icon, text: label }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon size={14} className={iconColor} />
              <span className={`${text} text-xs tracking-[0.1em] uppercase`} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
