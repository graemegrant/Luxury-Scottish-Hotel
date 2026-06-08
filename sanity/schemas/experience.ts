import { defineType } from 'sanity';

export const experienceSchema = defineType({
  name: 'experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (r: any) => r.required() },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Field Sports', 'Tasting & Dining', 'Outdoors', 'Wellness', 'Walking & Hiking', 'Water Sports', 'Wildlife & Nature', 'Cultural'] }, validation: (r: any) => r.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 4, validation: (r: any) => r.required() },
    { name: 'heroImage', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'duration', title: 'Duration', type: 'string', validation: (r: any) => r.required() },
    { name: 'price', title: 'Price Label', type: 'string', validation: (r: any) => r.required() },
    { name: 'seasons', title: 'Available Seasons', type: 'array', of: [{ type: 'string' }], options: { list: ['Spring', 'Summer', 'Autumn', 'Winter'] } },
    { name: 'includes', title: "What's Included", type: 'array', of: [{ type: 'string' }] },
    { name: 'bookingUrl', title: 'Booking URL', type: 'url' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'heroImage' } },
});
