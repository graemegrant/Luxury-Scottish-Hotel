import { defineType } from 'sanity';

export const journalPostSchema = defineType({
  name: 'journalPost',
  title: 'Journal Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r: any) => r.required() },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Food & Drink', 'Wildlife', 'Local Guides', 'News', 'Seasonal', 'Field Sports'] }, validation: (r: any) => r.required() },
    { name: 'author', title: 'Author', type: 'string', validation: (r: any) => r.required() },
    { name: 'publishedAt', title: 'Published Date', type: 'date', validation: (r: any) => r.required() },
    { name: 'readingTime', title: 'Reading Time', type: 'string' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (r: any) => r.required().max(300) },
    {
      name: 'body', title: 'Body', type: 'array',
      of: [
        { type: 'block', styles: [{ title: 'Normal', value: 'normal' }, { title: 'H2', value: 'h2' }, { title: 'H3', value: 'h3' }, { title: 'Quote', value: 'blockquote' }] },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'featured', title: 'Featured Post', type: 'boolean', initialValue: false },
    { name: 'active', title: 'Published', type: 'boolean', initialValue: true },
    {
      name: 'seo', title: 'SEO', type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'Meta Title' },
        { name: 'description', type: 'text', title: 'Meta Description', rows: 2 },
      ],
    },
  ],
  preview: { select: { title: 'title', subtitle: 'author', media: 'heroImage' } },
  orderings: [{ title: 'Published (Newest)', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
});
