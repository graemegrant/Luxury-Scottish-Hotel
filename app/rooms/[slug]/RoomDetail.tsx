'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Maximize2, Users, ArrowLeft, X } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';
import RoomCard from '@/components/RoomCard';
import BookingModal from '@/components/BookingModal';

interface Room {
  slug: string;
  name: string;
  type: string;
  sqm: number;
  occupancy: number;
  floor: string;
  view: string;
  rate: number;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  amenities: string[];
  featured: boolean;
}

export default function RoomDetail({ room, allRooms }: { room: Room; allRooms: any[] }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const others = allRooms.filter(r => r.slug !== room.slug).slice(0, 3);

  return (
    <>
      {/* Gallery Hero */}
      <section className="pt-20">
        <div
          className="relative aspect-[16/7] md:aspect-[21/7] overflow-hidden cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <Image src={room.gallery[galleryIndex]} alt={room.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/60 to-transparent" />
          <div className="absolute bottom-6 right-6 bg-black/40 text-white text-xs px-3 py-1.5 tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>
            View Gallery
          </div>
        </div>
        {room.gallery.length > 1 && (
          <div className="bg-[#1C3A2B] flex gap-1 overflow-x-auto p-1">
            {room.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className={`relative w-24 h-16 shrink-0 overflow-hidden transition-opacity ${i === galleryIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
              >
                <Image src={img} alt={`${room.name} ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Link href="/rooms" className="inline-flex items-center gap-2 text-[#1C3A2B]/50 text-xs tracking-widest uppercase mb-6 hover:text-[#1C3A2B] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
                <ArrowLeft size={12} /> All Rooms
              </Link>
              <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{room.type}</div>
              <h1 className="text-[#1C3A2B] text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>{room.name}</h1>
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-sm text-[#1C3A2B]/60" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                <span className="flex items-center gap-1.5"><Maximize2 size={13} className="text-[#C4924A]" />{room.sqm} m²</span>
                <span className="flex items-center gap-1.5"><Users size={13} className="text-[#C4924A]" />Up to {room.occupancy} guests</span>
                <span className="text-[#1C3A2B]/40">{room.floor}</span>
                <span className="text-[#1C3A2B]/40">{room.view} View</span>
              </div>
              <div className="h-px bg-[#C4924A]/20 mb-8" />
              <p className="text-[#2C2C2C]/70 text-base leading-relaxed mb-10" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}>
                {room.description}
              </p>
              <h2 className="text-[#1C3A2B] text-2xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>Room Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#1C3A2B]/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-[#C4924A]" />
                    </div>
                    <span className="text-[#2C2C2C]/60 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#1C3A2B] p-8">
                <div className="text-[#C4924A] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>From</div>
                <div className="text-[#F2EDE4] text-4xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  £{room.rate}
                </div>
                <div className="text-[#F2EDE4]/40 text-xs mb-6" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>per night</div>
                <button
                  onClick={() => setBookingOpen(true)}
                  className="block w-full bg-[#C4924A] text-white text-sm tracking-[0.1em] uppercase py-4 text-center hover:bg-[#d4a76a] transition-colors mb-3"
                  style={{ fontFamily: 'Jost, sans-serif' }}
                >
                  Book Direct — Best Rate
                </button>
                <div className="space-y-2 mt-5 pt-5 border-t border-white/10">
                  {['Best rate guaranteed', 'No booking fees', 'Welcome dram on arrival', 'Free cancellation available'].map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-3.5 h-3.5 bg-[#C4924A]/20 flex items-center justify-center shrink-0">
                        <Check size={8} className="text-[#C4924A]" />
                      </div>
                      <span className="text-[#F2EDE4]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-16 bg-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Other Rooms</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {others.map(r => <RoomCard key={r.slug} {...r} />)}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="relative w-full max-w-5xl aspect-[16/9]">
            <Image src={room.gallery[galleryIndex]} alt={room.name} fill className="object-contain" />
          </div>
          <div className="absolute bottom-6 flex gap-2">
            {room.gallery.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === galleryIndex ? 'bg-[#C4924A]' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      )}

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
