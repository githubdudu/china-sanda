import Image from "next/image";

import { ScrollReveal } from "./ScrollReveal";

const ABOUT_IMAGE = "https://images.unsplash.com/photo-1620123083473-16ec15498174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hlciUyMHdyYXBwaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzU5ODY4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080";

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            className="text-center mb-16 tracking-wider"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            What we do
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <Image
                src={ABOUT_IMAGE}
                alt="Coach wrapping hands"
                width={1080}
                height={500}
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-50"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                We specialize in practical, high-quality combat sports, offering programs in Kickboxing, Chinese Sanda, Brazilian Jiu-Jitsu(BJJ), and Youth Martial Arts.
              </p>

              <div className="border-l-4 border-secondary pl-6 py-4 bg-background-secondary">
                <p className="display text-2xl italic">
                  &quot;Be water, my friend. Water can flow or it can crash.&quot;
                </p>
                  <p className="display text-primary "> -- Bruce Lee</p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/80">
                Whether you are stepping onto the mat for the first time, looking to build strength, or seeking confidence and discipline for your kids, you belong here. Our community welcomes working professionals, students, families, and fitness lovers. You will train in a safe, supportive, and friendly environment.
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
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
