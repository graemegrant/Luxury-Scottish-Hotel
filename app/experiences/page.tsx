import { sanityFetch } from '@/sanity/lib/fetch';
import { ALL_EXPERIENCES_QUERY } from '@/sanity/lib/queries';
import type { SanityExperience } from '@/sanity/lib/types';
import { experiences as staticExperiences } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';
import PageHero from '@/components/sections/PageHero';
import SectionLabel from '@/components/SectionLabel';
import ExperienceCard from '@/components/cards/ExperienceCard';

export const metadata = buildMetadata({
  title: 'Experiences',
  description: 'Fly fishing, deer stalking, whisky tastings, foraging and more — curated experiences on the 400-acre Craigmore estate, Perthshire.',
  path: '/experiences',
});

export default async function ExperiencesPage() {
  const sanityExperiences = await sanityFetch<SanityExperience[]>(ALL_EXPERIENCES_QUERY);

  const experiences = sanityExperiences?.length
    ? sanityExperiences
    : staticExperiences.map(e => ({ ...e, _id: e.slug, image: e.image }));

  return (
    <>
      <PageHero
        eyebrow="400 Acres"
        title="Experiences"
        subtitle="Fly fishing on the Tay, red deer stalking, private whisky tastings, foraging with the chef — or nothing at all, which is equally encouraged."
        image="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?w=1600&q=80"
        imageAlt="Experiences at Craigmore"
      />
      <section className="py-20 bg-[#F2EDE4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>All Experiences</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {experiences.map(exp => (
              <ExperienceCard
                key={(exp as any)._id || exp.slug}
                slug={exp.slug}
                name={exp.name}
                category={exp.category}
                duration={exp.duration}
                price={exp.price}
                image={exp.image}
                description={exp.description}
                seasons={(exp as any).seasons || []}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
