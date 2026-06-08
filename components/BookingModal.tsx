'use client';

import { useState } from 'react';
import { X, Calendar, Users, Check } from 'lucide-react';
import { hotelConfig } from '@/hotel.config';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalEntrance } from '@/components/Motion';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  const handleBook = () => {
    const engineUrl = hotelConfig.bookingEngineUrl;
    if (!engineUrl) {
      window.location.href = '/contact';
      return;
    }
    const params = new URLSearchParams({
      arrival,
      departure,
      adults: guests,
      rooms,
    });
    window.open(`${engineUrl}?${params.toString()}`, '_blank');
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <ModalEntrance>
            <div className="relative bg-[#1C3A2B] w-full max-w-lg shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div>
                  <h2 className="text-[#F2EDE4] text-xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                    Check Availability
                  </h2>
                  <p className="text-[#C4924A] text-xs tracking-widest uppercase mt-1" style={{ fontFamily: 'Jost, sans-serif' }}>
                    Best Rate Guaranteed
                  </p>
                </div>
                <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1" aria-label="Close">
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F2EDE4]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Arrival</label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4924A]" />
                      <input
                        type="date"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 text-[#F2EDE4] pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-[#C4924A] transition-colors"
                        style={{ fontFamily: 'Jost, sans-serif', colorScheme: 'dark' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#F2EDE4]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Departure</label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4924A]" />
                      <input
                        type="date"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 text-[#F2EDE4] pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-[#C4924A] transition-colors"
                        style={{ fontFamily: 'Jost, sans-serif', colorScheme: 'dark' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F2EDE4]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Guests</label>
                    <div className="relative">
                      <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4924A]" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 text-[#F2EDE4] pl-9 pr-3 py-3 text-sm focus:outline-none focus:border-[#C4924A] transition-colors appearance-none"
                        style={{ fontFamily: 'Jost, sans-serif' }}
                      >
                        {[1,2,3,4].map(n => <option key={n} value={n} className="bg-[#1C3A2B]">{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#F2EDE4]/60 text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'Jost, sans-serif' }}>Rooms</label>
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full bg-white/5 border border-white/20 text-[#F2EDE4] px-3 py-3 text-sm focus:outline-none focus:border-[#C4924A] transition-colors appearance-none"
                      style={{ fontFamily: 'Jost, sans-serif' }}
                    >
                      {[1,2,3].map(n => <option key={n} value={n} className="bg-[#1C3A2B]">{n} {n === 1 ? 'Room' : 'Rooms'}</option>)}
                    </select>
                  </div>
                </div>

                <button
                  className="w-full bg-[#C4924A] text-white py-4 text-sm tracking-[0.12em] uppercase hover:bg-[#d4a76a] transition-colors duration-300"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500 }}
                  onClick={handleBook}
                >
                  {hotelConfig.bookingEngineUrl ? 'Check Availability' : 'Enquire to Book'}
                </button>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {['No booking fees', 'Best rate guaranteed', 'Welcome dram'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[#F2EDE4]/50 text-xs" style={{ fontFamily: 'Jost, sans-serif' }}>
                      <div className="w-4 h-4 bg-[#C4924A]/20 border border-[#C4924A]/50 flex items-center justify-center">
                        <Check size={8} className="text-[#C4924A]" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ModalEntrance>
        </div>
      )}
    </AnimatePresence>
  );
}