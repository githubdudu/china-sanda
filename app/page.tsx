import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import ProgramsSection from "@/components/ProgramsSection";
import CoachesSection from "@/components/CoachesSection";

import { client } from "@/sanity/client";
import { type HomePage, type Program } from "@/sanity/sanity.types";
import { urlFor } from "@/sanity/sanityImageUrl";
import { type ProgramCard } from "@/components/ProgramsSection";
import { heroData as defaultHeroData } from "@/data/hero";

const CONTENT_QUERY = `*[_type == "homePage"][0]`;
const PROGRAM_QUERY = `*[_type == "program"]`;

// Enable static generation with on-demand revalidation
export const revalidate = 60;

export default async function Home() {
  let heroData: HomePage | null = null;
  let programs: ProgramCard[] | undefined;
  try {
    heroData = await client.fetch<HomePage>(CONTENT_QUERY);
    // Resolve image URLs here: sanity/client needs server-only env vars.
    programs = (await client.fetch<Program[]>(PROGRAM_QUERY)).map((p) => ({
      title: p.title ?? "",
      description: p.description ?? "",
      details: p.details ?? "",
      level: p.level ?? "",
      image: p.image ? urlFor(p.image).url() : "",
    }));
  }
  catch (error) {
    heroData = defaultHeroData;
    console.error("Error fetching data from Sanity.io", error);
  }

  return (
    <div>
      <main className="flex flex-col gap-8">
        <Hero heroData={heroData} />
        <AboutSection />
        <WhySection />
        <ProgramsSection programs={programs} />
        <CoachesSection />
        {/*
        <Schedule />
        <Community />
        <Testimonials />
        <Contact /> */}
      </main>
    </div>
  );
}
