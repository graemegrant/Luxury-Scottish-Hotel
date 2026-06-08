'use client';

import { useState } from 'react';
import RoomCard from '@/components/RoomCard';
import BookingModal from '@/components/BookingModal';

const ROOM_TYPES = ['All', 'Classic', 'Deluxe', 'Suite'];

export default function RoomsClient({ rooms }: { rooms: any[] }) {
  const [filter, setFilter] = useState('All');
  const [bookingOpen, setBookingOpen] = useState(false);

  const filtered = filter === 'All' ? rooms : rooms.filter(r => r.type === filter);

  return (
    <>
      <section className="py-16 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {ROOM_TYPES.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-colors ${
                  filter === type
                    ? 'bg-[#1C3A2B] text-[#F2EDE4]'
                    : 'bg-transparent border border-[#1C3A2B]/30 text-[#1C3A2B]/70 hover:border-[#1C3A2B] hover:text-[#1C3A2B]'
                }`}
                style={{ fontFamily: 'Jost, sans-serif' }}
              >
                {type}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#2C2C2C]/40" style={{ fontFamily: 'Jost, sans-serif' }}>
              No rooms found for this filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(room => (
                <RoomCard
                  key={room._id || room.slug}
                  slug={room.slug}
                  name={room.name}
                  type={room.type}
                  sqm={room.sqm}
                  occupancy={room.occupancy}
                  rate={room.rate}
                  image={room.image}
                  shortDescription={room.shortDescription}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="bg-[#1C3A2B] border-t border-[#C4924A]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-[#F2EDE4] text-sm" style={{ fontFamily: 'Georgia, serif' }}>Ready to book?</div>
            <div className="text-[#C4924A] text-xs tracking-widest uppercase" style={{ fontFamily: 'Jost, sans-serif' }}>Best rate guaranteed on direct bookings</div>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="bg-[#C4924A] text-white text-sm tracking-[0.12em] uppercase px-8 py-3 hover:bg-[#d4a76a] transition-colors"
            style={{ fontFamily: 'Jost, sans-serif' }}
          >
            Check Availability
          </button>
        </div>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
