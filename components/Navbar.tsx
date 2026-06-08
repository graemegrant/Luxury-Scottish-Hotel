'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';
import { hotelConfig } from '@/hotel.config';

const navLinks = [
  {
    label: 'Rooms & Suites',
    href: '/rooms',
    children: [
      { label: 'All Rooms', href: '/rooms' },
      { label: 'Suites', href: '/rooms?type=Suite' },
      { label: 'Deluxe Rooms', href: '/rooms?type=Deluxe' },
      { label: 'Classic Rooms', href: '/rooms?type=Classic' },
    ],
  },
  { label: 'Dining', href: '/dining' },
  {
    label: 'Experiences',
    href: '/experiences',
    children: [
      { label: 'All Experiences', href: '/experiences' },
      { label: 'Field Sports', href: '/experiences' },
      { label: 'Food & Drink', href: '/experiences' },
      { label: 'Outdoors', href: '/experiences' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'The Team', href: '/about#team' },
      { label: 'Sustainability', href: '/about#sustainability' },
      { label: 'Location', href: '/location' },
    ],
  },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Journal', href: '/journal' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const [namePart, housePart] = hotelConfig.name.split(' ');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen ? 'bg-[#1C3A2B] shadow-xl' : 'bg-[#1C3A2B]/60 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none z-10" aria-label={hotelConfig.name}>
              <span className="text-[#F2EDE4] text-xl tracking-[0.2em] uppercase" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>
                {namePart || hotelConfig.name}
              </span>
              {housePart && (
                <span className="text-[#C4924A] text-[10px] tracking-[0.35em] uppercase" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                  {housePart}
                </span>
              )}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm tracking-[0.06em] uppercase transition-colors duration-300 ${
                      pathname.startsWith(link.href) && link.href !== '/'
                        ? 'text-[#C4924A]'
                        : 'text-[#F2EDE4] hover:text-[#C4924A]'
                    }`}
                    style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={12} className="opacity-60" />}
                  </Link>

                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 min-w-[200px]">
                      <div className="bg-[#1C3A2B] border border-[#C4924A]/20 shadow-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-3 text-[#F2EDE4]/70 text-sm hover:text-[#C4924A] hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                            style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/special-offers"
                className="text-[#F2EDE4]/50 text-xs tracking-widest uppercase hover:text-[#C4924A] transition-colors"
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                Offers
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="bg-[#C4924A] text-white text-sm tracking-[0.1em] uppercase px-6 py-3 hover:bg-[#d4a76a] transition-colors duration-300"
                style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
              >
                Book Direct
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#F2EDE4] p-2 z-10 -mr-2"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="lg:hidden fixed inset-0 top-20 bg-[#1C3A2B] z-40 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-6 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-white/10">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between py-4 text-[#F2EDE4] text-base"
                        style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`text-[#C4924A] transition-transform duration-300 ${expandedMobile === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedMobile === link.label && (
                        <div className="pb-3 pl-4 flex flex-col gap-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="py-2 text-[#F2EDE4]/60 text-sm hover:text-[#C4924A] transition-colors"
                              style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-4 text-[#F2EDE4] text-base hover:text-[#C4924A] transition-colors"
                      style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-8 space-y-3">
                <Link
                  href="/special-offers"
                  className="block text-center text-[#C4924A] text-xs tracking-widest uppercase border border-[#C4924A]/40 py-3 hover:bg-[#C4924A]/10 transition-colors"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                >
                  Special Offers
                </Link>
                <button
                  onClick={() => { setBookingOpen(true); setMobileOpen(false); }}
                  className="w-full bg-[#C4924A] text-white text-sm tracking-[0.1em] uppercase py-4 hover:bg-[#d4a76a] transition-colors"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
                >
                  Book Direct
                </button>
              </div>

              {/* Contact strip in mobile menu */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                <a href={`tel:${hotelConfig.contact.phone.replace(/\s/g, '')}`} className="block text-[#F2EDE4]/40 text-xs" style={{ fontFamily: 'Jost, sans-serif' }}>
                  {hotelConfig.contact.phone}
                </a>
                <a href={`mailto:${hotelConfig.contact.email}`} className="block text-[#F2EDE4]/40 text-xs" style={{ fontFamily: 'Jost, sans-serif' }}>
                  {hotelConfig.contact.email}
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
