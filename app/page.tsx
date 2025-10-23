import Hero from "@/components/Hero";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const CONTENT_QUERY = `*[_type == "homePage"]`;

// Enable static generation with on-demand revalidation
export const revalidate = false;

export default async function Home() {
  const content = await client.fetch<SanityDocument[]>(CONTENT_QUERY);

  return (
    <div className="font-sans">
      <main className="flex flex-col gap-8">
        <Hero />
      </main>
    </div>
  );
}
