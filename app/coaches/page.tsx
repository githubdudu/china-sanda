import type { Metadata } from "next";
import { coaches as defaultCoaches } from "@/data/coaches";
import { Instructor } from "@/sanity/sanity.types";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/sanityImageUrl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Coaches | 教练团队 - China Sanda Club",
  description:
    "Meet our world-class Sanda coaches with decades of experience training champions. 认识我们世界一流的散打教练团队。",
};

// Enable static generation with on-demand revalidation
export const revalidate = 60;

const COACH_QUERY = `*[_type == "instructor"]`;

const CoachesPage = async () => {
  let coachData;
  try {
    coachData = await client.fetch<Instructor[]>(COACH_QUERY);
  } catch (error) {
    coachData = defaultCoaches;
    console.error("Error fetching hero data from Sanity.io", error);
  }
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coaches</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Train with world-class instructors who bring decades of experience
            and championship credentials.
          </p>
        </div>

        {/* Placeholder: CoachCard components will be rendered here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachData.map((coach) => (
            <div
              key={coach._id}
              className="p-6 rounded-lg border border-foreground/10"
            >
              {/* TODO: Replace with CoachCard component */}
              <div className="aspect-square bg-foreground/5 rounded-lg mb-4 flex items-center justify-center">
                {coach?.photo ? (
                  <Image
                    src={urlFor(coach?.photo).url() || ""}
                    alt={coach?.name || ""}
                    width={250}
                    height={200}
                  />
                ) : (
                  `Photo of ${coach?.name}`
                )}
              </div>
              <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
              <p className="text-sm opacity-70 mb-3">{coach.bio}</p>
              <div className="flex flex-wrap gap-2">
                {coach?.specialties?.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10"
                    style={{ color: "var(--primary)" }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="text-sm mt-4 opacity-50">
                {coach.experience && `${coach?.experience} years experience`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
