import { defineType } from 'sanity';

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'role', title: 'Job Title', type: 'string', validation: (r: any) => r.required() },
    { name: 'bio', title: 'Bio', type: 'text', rows: 4, validation: (r: any) => r.required() },
    { name: 'headshot', title: 'Headshot', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'department', title: 'Department', type: 'string', options: { list: ['Management', 'Front of House', 'Kitchen', 'Housekeeping', 'Events', 'Grounds'] } },
    { name: 'displayOrder', title: 'Display Order', type: 'number', initialValue: 99 },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'headshot' } },
  orderings: [{ title: 'Display Order', name: 'displayOrder', by: [{ field: 'displayOrder', direction: 'asc' }] }],
});
