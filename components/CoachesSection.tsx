import { Heart } from "lucide-react";
import Image from "next/image";

import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

const COACH_IMAGE = "https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjb2FjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTg1NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080";

const CARD_SIZES = "(min-width: 768px) 33vw, 100vw";

const coaches = [
  {
    name: "Coach Frank Chen",
    title: "ISKA World Champion, 15 years experience.",
    image: COACH_IMAGE,
    icon: Heart,
  },
  {
    name: "Coach Frank Chen",
    title: "Former Chinese National Sanda Team Athlete",
    image: COACH_IMAGE,
    icon: Heart,
  },
];

function CoachesSection() {
  return (
    <section id="coaches" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            className="text-center mb-4 tracking-wider"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Meet the Coaches.
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <ScrollRevealItem key={coach.name}>
              <div className="group">
                <div className="relative h-96 overflow-hidden shadow-lg">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    sizes={CARD_SIZES}
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon overlay on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-primary rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <coach.icon className="text-background" size={40} />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="mb-2 text-2xl">{coach.name}</h3>
                  <p className="text-foreground/70">{coach.title}</p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="/contact?interest=private"
              className="display inline-block px-8 py-3 btn-primary"
              style={{ fontSize: "1.125rem", letterSpacing: "2px" }}
            >
              Book a Private Session  
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CoachesSection;
