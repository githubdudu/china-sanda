import type { Metadata } from "next";
import { coaches } from "@/data/coaches";

export const metadata: Metadata = {
  title: "Our Coaches | 教练团队 - China Sanda Club",
  description: "Meet our world-class Sanda coaches with decades of experience training champions. 认识我们世界一流的散打教练团队。",
};

const CoachesPage = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Coaches
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
            教练团队
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-80">
            Train with world-class instructors who bring decades of experience and championship credentials.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-80 mt-2">
            与拥有数十年经验和冠军资历的世界级教练一起训练。
          </p>
        </div>

        {/* Placeholder: CoachCard components will be rendered here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div key={coach.id} className="p-6 rounded-lg border border-foreground/10">
              {/* TODO: Replace with CoachCard component */}
              <div className="aspect-square bg-foreground/5 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-foreground/30">Photo</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
              <p className="text-xl mb-4" style={{ color: "var(--primary)" }}>{coach.nameChinese}</p>
              <p className="text-sm opacity-70 mb-3">{coach.bio}</p>
              <p className="text-sm opacity-70 mb-4">{coach.bioChinese}</p>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((specialty, idx) => (
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
                {`${coach.experience} years experience`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
