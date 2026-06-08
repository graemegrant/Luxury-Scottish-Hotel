import { defineType } from 'sanity';

export const roomSchema = defineType({
  name: 'room',
  title: 'Rooms',
  type: 'document',
  fields: [
    { name: 'name', title: 'Room Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (r: any) => r.required() },
    { name: 'type', title: 'Room Type', type: 'string', options: { list: ['Suite', 'Deluxe', 'Classic', 'Twin', 'Single', 'Family Room'] }, validation: (r: any) => r.required() },
    { name: 'shortDescription', title: 'Short Description', type: 'text', rows: 2, validation: (r: any) => r.required().max(200) },
    { name: 'description', title: 'Full Description', type: 'text', rows: 5, validation: (r: any) => r.required() },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'gallery', title: 'Image Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'rate', title: 'Price Per Night (£)', type: 'number', validation: (r: any) => r.required().positive() },
    { name: 'sqm', title: 'Room Size (m²)', type: 'number', validation: (r: any) => r.required().positive() },
    { name: 'occupancy', title: 'Max Occupancy', type: 'number', validation: (r: any) => r.required().positive() },
    { name: 'floor', title: 'Floor / Location', type: 'string' },
    { name: 'view', title: 'View Type', type: 'string' },
    { name: 'amenities', title: 'Amenities', type: 'array', of: [{ type: 'string' }] },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'active', title: 'Active / Visible', type: 'boolean', initialValue: true },
    {
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Meta Title' },
        { name: 'description', type: 'text', title: 'Meta Description', rows: 2 },
      ],
    },
  ],
  preview: { select: { title: 'name', subtitle: 'type', media: 'heroImage' } },
  orderings: [
    { title: 'Rate (High to Low)', name: 'rateDesc', by: [{ field: 'rate', direction: 'desc' }] },
    { title: 'Rate (Low to High)', name: 'rateAsc', by: [{ field: 'rate', direction: 'asc' }] },
  ],
});
