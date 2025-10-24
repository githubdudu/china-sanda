import Hero from "@/components/Hero";

import { client } from "@/sanity/client";
import { type HomePage } from "@/sanity/sanity.types";

const CONTENT_QUERY = `*[_type == "homePage"][0]`;

// Enable static generation with on-demand revalidation
export const revalidate = false;

export default async function Home() {
  const heroData = await client.fetch<HomePage>(CONTENT_QUERY);

  return (
    <div className="font-sans">
      <main className="flex flex-col gap-8">
        <Hero heroData={heroData} />
      </main>
    </div>
  );
}
