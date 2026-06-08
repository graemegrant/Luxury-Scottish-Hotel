'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { hotelConfig } from '@/hotel.config';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'done'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to Mailchimp/Kit when NEXT_PUBLIC_NEWSLETTER_URL is set
    const url = process.env.NEXT_PUBLIC_NEWSLETTER_URL;
    if (url) {
      fetch(url, { method: 'POST', body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' } })
        .catch(() => {});
    }
    setSubStatus('done');
  };

  const socialLinks = [
    { icon: Instagram, href: hotelConfig.contact.instagram, label: 'Instagram' },
    { icon: Facebook, href: hotelConfig.contact.facebook, label: 'Facebook' },
    ...(hotelConfig.contact.twitter ? [{ icon: Twitter, href: hotelConfig.contact.twitter, label: 'Twitter' }] : []),
  ].filter(s => s.href);

  const [namePart, housePart] = hotelConfig.name.split(' ');

  return (
    <footer className="bg-[#1C3A2B]">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-[#F2EDE4] text-xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                Seasonal Letters from {namePart}
              </h3>
              <p className="text-[#F2EDE4]/50 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                Closed-door events, seasonal offers, and dispatches from the estate.
              </p>
            </div>
            {subStatus === 'done' ? (
              <div className="text-[#C4924A] text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                Thank you — we&apos;ll be in touch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0 w-full md:w-auto min-w-[320px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/20 text-[#F2EDE4] px-4 py-3 text-sm placeholder-white/30 focus:outline-none focus:border-[#C4924A] transition-colors"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                />
                <button
                  type="submit"
                  className="bg-[#C4924A] text-white px-6 py-3 text-xs tracking-[0.12em] uppercase hover:bg-[#d4a76a] transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <div className="text-[#F2EDE4] text-2xl tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                {namePart}
              </div>
              {housePart && (
                <div className="text-[#C4924A] text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  {housePart}
                </div>
              )}
              <p className="text-[#F2EDE4]/50 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                {hotelConfig.tagline}
              </p>
            </div>
            <div className="border border-[#C4924A]/40 p-4 text-center mb-6">
              <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Best Rate Guaranteed</div>
              <div className="text-[#F2EDE4]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Always cheaper booking direct</div>
            </div>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 border border-white/20 flex items-center justify-center text-[#F2EDE4]/50 hover:text-[#C4924A] hover:border-[#C4924A]/50 transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* The House */}
          <div>
            <h4 className="text-[#F2EDE4] text-xs tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
              The House
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Rooms & Suites', href: '/rooms' },
                { label: 'Dining', href: '/dining' },
                { label: 'Experiences', href: '/experiences' },
                { label: 'Weddings', href: '/weddings' },
                { label: 'Gift Vouchers', href: '/gift-vouchers' },
                { label: 'Special Offers', href: '/special-offers' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#F2EDE4]/50 text-sm hover:text-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[#F2EDE4] text-xs tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
              About
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/about' },
                { label: 'The Team', href: '/about#team' },
                { label: 'Sustainability', href: '/about#sustainability' },
                { label: 'Location', href: '/location' },
                { label: 'Journal', href: '/journal' },
                { label: 'Contact', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#F2EDE4]/50 text-sm hover:text-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F2EDE4] text-xs tracking-[0.25em] uppercase mb-5" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
              Find Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C4924A] mt-0.5 shrink-0" />
                <span className="text-[#F2EDE4]/50 text-sm leading-relaxed" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  {hotelConfig.name}<br />
                  {hotelConfig.location.region}<br />
                  {hotelConfig.location.postcode}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${hotelConfig.contact.phone.replace(/[\s()]/g, '')}`}
                  className="flex items-center gap-3 text-[#F2EDE4]/50 text-sm hover:text-[#C4924A] transition-colors"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                >
                  <Phone size={14} className="text-[#C4924A] shrink-0" />
                  {hotelConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${hotelConfig.contact.email}`}
                  className="flex items-start gap-3 text-[#F2EDE4]/50 text-sm hover:text-[#C4924A] transition-colors break-all"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                >
                  <Mail size={14} className="text-[#C4924A] shrink-0 mt-0.5" />
                  {hotelConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-xs tracking-[0.15em] uppercase text-[#C4924A] border-b border-[#C4924A]/40 pb-0.5 hover:border-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Make an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#F2EDE4]/30 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
            &copy; {new Date().getFullYear()} {hotelConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Accessibility', href: '/accessibility' },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#F2EDE4]/30 text-xs hover:text-[#F2EDE4]/60 transition-colors"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
