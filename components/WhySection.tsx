import Image from "next/image";

import { ScrollReveal } from "./ScrollReveal";

const ABOUT_IMAGE = "/frank_chen.png";

function WhySection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            className="text-center mb-16 tracking-wider"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Why Train With Us
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6 py-4 bg-background-secondary">
                <p className="display text-2xl italic">
                  Former Chinese National Sanda Team Athlete
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-6 py-4 bg-background-secondary">
                <p className="display text-2xl italic">
                  Brazillian Jiu Jitsu Black Belt Coach
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/80">
                With over 10 years of coaching experience, our instructors bring
                proven expertise to every session.
              </p>

              <a
                href="/coaches"
                className="display inline-block px-8 py-3 btn-primary"
                style={{ fontSize: "1.125rem", letterSpacing: "2px" }}
              >
                Meet Our Team
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative">
              <Image
                src={ABOUT_IMAGE}
                alt="Coach wrapping hands"
                width={1080}
                height={500}
                className="w-full h-[500px] object-cover object-top shadow-2xl "
              />
              {/* Dark corners */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)",
                }}
              ></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-50"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
