'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Users } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';

const weddingPackages = [
  {
    name: 'The Intimate Ceremony',
    guests: 'Up to 30',
    price: 'From £8,500',
    inclusions: [
      'Exclusive use of the Library for ceremony',
      'Wedding breakfast for up to 30 guests',
      'Complimentary bridal suite',
      'Dedicated wedding coordinator',
      'Floral arrangements from the estate garden',
      'Welcome drinks and canapés',
    ],
  },
  {
    name: 'The Estate Wedding',
    guests: 'Up to 80',
    price: 'From £18,500',
    inclusions: [
      'Exclusive use of the house and grounds',
      'Outdoor ceremony on the estate lawn',
      'Wedding breakfast for up to 80 guests',
      'Complimentary bridal suite for 2 nights',
      'Accommodation for 12 guests in our rooms',
      'Full coordination team',
      'Bespoke menu by Chef Finlay Ross',
      'Floral arrangements',
      'Piper for the ceremony',
    ],
    featured: true,
  },
  {
    name: 'The House Party',
    guests: 'Up to 12 overnight',
    price: 'From £24,000',
    inclusions: [
      'Exclusive buyout of all 12 rooms for 2 nights',
      'All meals included — breakfast, lunch, dinner',
      'Unlimited bar (house spirits, wine, beer)',
      'Full estate activities programme',
      'Private ghillie, stalker and ranger',
      'Bespoke ceremony arrangements',
      'Dedicated team of 12 staff',
    ],
  },
];

export default function WeddingsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden bg-[#1C3A2B]">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=1600&q=80" alt="Weddings at Craigmore House" fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C3A2B]/40 to-[#1C3A2B]/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <SectionLabel color="parchment">Craigmore House</SectionLabel>
          <h1 className="text-[#F2EDE4] text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1.1 }}>
            Weddings in the Highlands
          </h1>
          <p className="text-[#F2EDE4]/70 text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            A setting of such beauty that it does most of the work for you. The rest, we handle.
          </p>
          <a href="#enquiry" className="inline-flex items-center gap-2 bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#d4a76a] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
            Enquire Now <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <div className="bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '12', label: 'Bedrooms' },
            { num: '80', label: 'Max Ceremony Guests' },
            { num: '400', label: 'Estate Acres' },
            { num: '1', label: 'Wedding Per Weekend' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-[#C4924A] text-4xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>{num}</div>
              <div className="text-[#F2EDE4]/50 text-xs tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>The Venue</SectionLabel>
              <h2 className="text-[#1C3A2B] text-4xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                A House Made for Occasions
              </h2>
              <div className="space-y-5 text-[#2C2C2C]/60 text-base leading-relaxed mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>
                <p>
                  Craigmore House has been hosting celebrations since 1847. The Drawing Room, with its 14-foot ceilings and original fireplace, accommodates ceremonies for up to 40 guests. The estate lawn — framed by ancient woodland — is the setting for outdoor ceremonies in summer and autumn.
                </p>
                <p>
                  We host only one wedding per weekend. You will never share Craigmore with strangers. The entire house — its staff, its kitchen, its 400 acres — is yours.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {['Licensed for civil ceremonies and marriages', 'No corkage on wines sourced elsewhere', 'All food prepared by our kitchen team', 'Exclusive hire only — no shared dates'].map(point => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#1C3A2B]/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-[#C4924A]" />
                    </div>
                    <span className="text-[#2C2C2C]/70 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=600&q=80',
                'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=600&q=80',
                'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&q=80',
                'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?w=600&q=80',
              ].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image src={src} alt="Wedding at Craigmore" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel color="parchment">Packages</SectionLabel>
          <h2 className="text-[#F2EDE4] text-4xl text-center mb-14" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Wedding Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingPackages.map(pkg => (
              <div key={pkg.name} className={`p-8 ${pkg.featured ? 'bg-[#C4924A]' : 'bg-white/5 border border-white/10'}`}>
                {pkg.featured && (
                  <div className="text-white/70 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Jost, sans-serif' }}>Most Popular</div>
                )}
                <h3 className={`text-2xl mb-1 ${pkg.featured ? 'text-white' : 'text-[#F2EDE4]'}`} style={{ fontFamily: 'Georgia, serif' }}>{pkg.name}</h3>
                <div className={`text-sm mb-1 ${pkg.featured ? 'text-white/80' : 'text-[#F2EDE4]/60'}`} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  <Users size={12} className="inline mr-1.5" />{pkg.guests} guests
                </div>
                <div className={`text-3xl mb-6 ${pkg.featured ? 'text-white' : 'text-[#C4924A]'}`} style={{ fontFamily: 'Georgia, serif' }}>{pkg.price}</div>
                <ul className="space-y-3">
                  {pkg.inclusions.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={12} className={`mt-0.5 shrink-0 ${pkg.featured ? 'text-white' : 'text-[#C4924A]'}`} />
                      <span className={`text-sm ${pkg.featured ? 'text-white/80' : 'text-[#F2EDE4]/60'}`} style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-[#F2EDE4]/30 text-sm mt-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            All packages are bespoke. The above are starting points — please enquire for a tailored proposal.
          </p>
        </div>
      </section>

      <section id="enquiry" className="py-20 bg-[#F2EDE4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel>Begin the Conversation</SectionLabel>
          <h2 className="text-[#1C3A2B] text-4xl text-center mb-10" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
            Wedding Enquiry
          </h2>

          {submitted ? (
            <div className="bg-[#1C3A2B] p-10 text-center">
              <div className="text-[#C4924A] text-4xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>&mdash;</div>
              <h3 className="text-[#F2EDE4] text-2xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>Thank You</h3>
              <p className="text-[#F2EDE4]/60 text-base" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                We will be in touch within 24 hours with availability and a tailored proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Name *</label>
                  <input required className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }} />
                </div>
                <div>
                  <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Email *</label>
                  <input type="email" required className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Proposed Date</label>
                  <input type="date" className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }} />
                </div>
                <div>
                  <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Approximate Guest Count</label>
                  <input type="number" className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }} />
                </div>
              </div>
              <div>
                <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Ceremony Type</label>
                <select className="w-full border border-[#1C3A2B]/20 bg-[#F2EDE4] px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors appearance-none" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  <option>Civil Ceremony</option>
                  <option>Humanist Ceremony</option>
                  <option>Religious Ceremony</option>
                  <option>Reception Only</option>
                </select>
              </div>
              <div>
                <label className="block text-[#1C3A2B]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Tell us about your day</label>
                <textarea rows={4} className="w-full border border-[#1C3A2B]/20 bg-transparent px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4924A] transition-colors resize-none" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }} />
              </div>
              <button type="submit" className="bg-[#1C3A2B] text-[#F2EDE4] text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#2a5040] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
