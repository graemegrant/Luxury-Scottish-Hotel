import { defineType } from 'sanity';

export const offerSchema = defineType({
  name: 'offer',
  title: 'Offers & Packages',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r: any) => r.required() },
    { name: 'subtitle', title: 'Subtitle / Price Label', type: 'string', validation: (r: any) => r.required() },
    { name: 'description', title: 'Description', type: 'text', rows: 3, validation: (r: any) => r.required() },
    { name: 'tag', title: 'Tag / Badge', type: 'string', validation: (r: any) => r.required() },
    { name: 'heroImage', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'inclusions', title: 'Inclusions', type: 'array', of: [{ type: 'string' }] },
    { name: 'validFrom', title: 'Valid From', type: 'date' },
    { name: 'validTo', title: 'Valid To', type: 'date' },
    { name: 'offerType', title: 'Offer Type', type: 'string', options: { list: ['Bed & Breakfast', 'Dinner Bed & Breakfast', 'Romantic Escape', 'Adventure Package', 'Long Stay', 'Last Minute', 'Seasonal', 'Field Sports'] } },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle', media: 'heroImage' } },
});
