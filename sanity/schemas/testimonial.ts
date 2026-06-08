import { defineType } from 'sanity';

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'guestName', title: 'Guest Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (r: any) => r.required() },
    { name: 'rating', title: 'Star Rating', type: 'number', validation: (r: any) => r.required().min(1).max(5) },
    { name: 'roomStayed', title: 'Room Stayed In', type: 'string' },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'sourcePlatform', title: 'Source', type: 'string', options: { list: ['Google', 'Tripadvisor', 'Booking.com', 'Direct', 'Press'] } },
    { name: 'featured', title: 'Show on Homepage', type: 'boolean', initialValue: false },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'guestName', subtitle: 'quote' } },
});
