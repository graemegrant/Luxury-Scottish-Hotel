'use client';

import { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import TrustStrip from '@/components/TrustStrip';
import SectionLabel from '@/components/SectionLabel';
import RoomCard from '@/components/RoomCard';
import BookingModal from '@/components/BookingModal';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import DirectBookingBanner from '@/components/sections/DirectBookingBanner';
import OfferCard from '@/components/cards/OfferCard';
import { motion } from 'framer-motion';
import { FadeUp, StaggerGrid, StaggerItem } from '@/components/Motion';


interface Props {
  featuredRooms: any[];
  experiences: any[];
  testimonials: any[];
  offers: any[];
}

export default function HomeClient({ featuredRooms, experiences, testimonials, offers }: Props) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?w=1920&q=85"
            alt="Craigmore House — Highland Retreat, Perthshire"
            fill priority className="object-cover"
            style={{ animation: 'kenBurns 24s ease-in-out infinite alternate' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C3A2B]/60 via-[#1C3A2B]/30 to-[#1C3A2B]/70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <div className="h-px w-14 bg-[#C4924A]/70" />
            <span className="text-[#C4924A] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>Perthshire, Scotland</span>
            <div className="h-px w-14 bg-[#C4924A]/70" />
          </motion.div>
          <motion.h1
            className="text-[#F2EDE4] text-5xl sm:text-6xl lg:text-7xl mb-6"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 300, lineHeight: 1.1 }}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
          >
            Craigmore House
          </motion.h1>
          <motion.p
            className="text-[#F2EDE4]/80 text-lg sm:text-xl mb-10"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            Highland solitude, done properly.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <button onClick={() => setBookingOpen(true)} className="bg-[#C4924A] text-white text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#d4a76a] transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>
              Check Availability
            </button>
            <Link href="/rooms" className="border border-[#F2EDE4]/50 text-[#F2EDE4] text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-white/10 hover:border-[#F2EDE4] transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Explore the House
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
          <div className="w-px h-12 bg-[#F2EDE4]/50 animate-pulse" />
        </div>
      </section>

      <TrustStrip variant="dark" />
      <DirectBookingBanner />

      {/* ROOMS */}
      <section className="py-24 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Rooms &amp; Suites</SectionLabel>
            <h2 className="text-[#1C3A2B] text-4xl lg:text-5xl text-center mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Twelve Rooms, Twelve Characters</h2>
            <p className="text-[#2C2C2C]/60 text-lg text-center max-w-xl mx-auto mb-14" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              No two rooms at Craigmore are alike. Each is designed around its view, its character, its particular quality of light.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <StaggerItem key={room._id || room.slug}>
                <RoomCard slug={room.slug} name={room.name} type={room.type} sqm={room.sqm} occupancy={room.occupancy} rate={room.rate} image={room.image} shortDescription={room.shortDescription} />
               </StaggerItem>
              ))}
          </StaggerGrid>
          <FadeUp className="text-center mt-12">
            <Link href="/rooms" className="inline-flex items-center gap-2 text-[#1C3A2B] text-sm tracking-[0.15em] uppercase border-b border-[#C4924A]/60 pb-1 hover:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
              View All Rooms &amp; Suites <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionLabel color="parchment">The Estate</SectionLabel>
            <h2 className="text-[#F2EDE4] text-4xl lg:text-5xl text-center mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Life on the Estate</h2>
            <p className="text-[#F2EDE4]/50 text-lg text-center max-w-xl mx-auto mb-14" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Four hundred acres of river, moorland and ancient woodland.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {experiences.map((exp) => (
              <StaggerItem key={exp._id || exp.slug}>
                <Link href={`/experiences/${exp.slug}`} className="group block relative overflow-hidden aspect-[3/4]">
                  <Image src={exp.image} alt={exp.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3A2B]/90 via-[#1C3A2B]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[#C4924A] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>{exp.category}</div>
                    <h3 className="text-[#F2EDE4] text-xl mb-1" style={{ fontFamily: 'Georgia, serif' }}>{exp.name}</h3>
                    <p className="text-[#F2EDE4]/60 text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{exp.duration}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <FadeUp className="text-center mt-10">
            <Link href="/experiences" className="inline-flex items-center gap-2 text-[#C4924A] text-sm tracking-[0.15em] uppercase border-b border-[#C4924A]/40 pb-1 hover:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
              All Experiences <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* DINING QUOTE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=1600&q=80" alt="Craigmore House dining" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#1C3A2B]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <FadeUp>
            <div className="text-[#C4924A] text-5xl mb-4" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <blockquote className="text-[#F2EDE4] text-2xl lg:text-3xl mb-8 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
              The menu changes with the estate and the season. We have never cooked a dish we could not walk to.
            </blockquote>
            <div className="text-[#C4924A] text-sm tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'Jost, sans-serif' }}>Finlay Ross</div>
            <div className="text-[#F2EDE4]/50 text-xs tracking-[0.15em] uppercase mb-8" style={{ fontFamily: 'Jost, sans-serif' }}>Head Chef, The Glen Dining Room</div>
            <Link href="/dining" className="inline-flex items-center gap-2 border border-[#C4924A] text-[#C4924A] text-xs tracking-[0.18em] uppercase px-8 py-3.5 hover:bg-[#C4924A] hover:text-white transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif' }}>
              The Glen Dining Room <ArrowRight size={13} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Guest Stories</SectionLabel>
            <h2 className="text-[#1C3A2B] text-4xl text-center mb-12" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Words from Our Guests</h2>
          </FadeUp>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* OFFERS */}
      <section className="py-24 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <SectionLabel>Seasonal Packages</SectionLabel>
            <h2 className="text-[#1C3A2B] text-4xl text-center mb-12" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Special Offers</h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <StaggerItem key={offer._id || offer.slug}>
                <OfferCard slug={offer.slug} title={offer.title} subtitle={offer.subtitle} description={offer.description} image={offer.image} tag={offer.tag} layout="grid" />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 bg-[#1C3A2B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionLabel color="parchment">Getting Here</SectionLabel>
              <h2 className="text-[#F2EDE4] text-4xl mb-6" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>In the Heart of Perthshire</h2>
              <p className="text-[#F2EDE4]/60 text-base leading-relaxed mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
                Craigmore House sits within a 400-acre estate in highland Perthshire — remote enough to feel truly away, easily reached from Edinburgh, Glasgow and London.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { from: 'Edinburgh', time: '1 hr 15 min', via: 'A9 north' },
                  { from: 'Glasgow', time: '1 hr 30 min', via: 'M80/A9' },
                  { from: 'Inverness', time: '1 hr 45 min', via: 'A9 south' },
                  { from: 'Perth Station', time: '25 min', via: 'Taxi available' },
                ].map((route) => (
                  <li key={route.from} className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <div className="text-[#F2EDE4] text-sm" style={{ fontFamily: 'Jost, sans-serif' }}>From {route.from}</div>
                      <div className="text-[#F2EDE4]/40 text-xs mt-0.5" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{route.via}</div>
                    </div>
                    <div className="text-[#C4924A] text-sm" style={{ fontFamily: 'Georgia, serif' }}>{route.time}</div>
                  </li>
                ))}
              </ul>
              <Link href="/location" className="inline-flex items-center gap-2 text-[#C4924A] text-sm tracking-[0.1em] uppercase border-b border-[#C4924A]/40 pb-0.5 hover:border-[#C4924A] transition-colors" style={{ fontFamily: 'Jost, sans-serif' }}>
                Full Directions &amp; Local Area <ArrowRight size={13} />
              </Link>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative aspect-square overflow-hidden">
                <Image src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?w=800&q=80" alt="Perthshire Highlands" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute bottom-6 left-6 bg-[#1C3A2B] px-4 py-3 flex items-center gap-2">
                  <MapPin size={14} className="text-[#C4924A]" />
                  <span className="text-[#F2EDE4] text-sm" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>Perthshire, PH15 2NR</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#F2EDE4] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeUp>
            <SectionLabel>Direct Booking</SectionLabel>
            <h2 className="text-[#1C3A2B] text-4xl lg:text-5xl mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Reserve Your Room</h2>
            <p className="text-[#2C2C2C]/60 text-base mb-8" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>
              Booking direct guarantees the best available rate, no fees, and a complimentary dram of our house whisky on arrival.
            </p>
            <button onClick={() => setBookingOpen(true)} className="bg-[#1C3A2B] text-[#F2EDE4] text-sm tracking-[0.15em] uppercase px-12 py-5 hover:bg-[#2a5040] transition-colors duration-300" style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
              Check Availability
            </button>
            <div className="mt-4 text-[#2C2C2C]/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>
              Best rate guaranteed &middot; No booking fees &middot; Free cancellation available
            </div>
          </FadeUp>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
