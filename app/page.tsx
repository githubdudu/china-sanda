import Hero from "@/components/Hero";

import { client } from "@/sanity/client";
import { type HomePage } from "@/sanity/sanity.types";
import { heroData as defaultHeroData } from "@/data/hero";

const CONTENT_QUERY = `*[_type == "homePage"][0]`;

// Enable static generation with on-demand revalidation
export const revalidate = false;

export default async function Home() {
  let heroData: HomePage | null = null;
  try {
    heroData = await client.fetch<HomePage>(CONTENT_QUERY);
  }
  catch (error) {
    heroData = defaultHeroData;
    console.error("Error fetching hero data from Sanity.io", error);
  }

  return (
    <div className="font-sans">
      <main className="flex flex-col gap-8">
        <Hero heroData={heroData} />
      </main>
    </div>
  );
}
