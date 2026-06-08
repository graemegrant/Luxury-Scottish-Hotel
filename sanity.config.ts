import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'craigmore-house',
  title: 'Craigmore House — CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-with-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Rooms & Suites').schemaType('room').child(S.documentTypeList('room').title('Rooms')),
            S.listItem().title('Experiences').schemaType('experience').child(S.documentTypeList('experience').title('Experiences')),
            S.listItem().title('Offers & Packages').schemaType('offer').child(S.documentTypeList('offer').title('Offers')),
            S.divider(),
            S.listItem().title('Journal Posts').schemaType('journalPost').child(S.documentTypeList('journalPost').title('Journal Posts')),
            S.listItem().title('Testimonials').schemaType('testimonial').child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem().title('Team').schemaType('teamMember').child(S.documentTypeList('teamMember').title('Team')),
          ]),
    }),
  ],

  schema: { types: schemaTypes },
});
