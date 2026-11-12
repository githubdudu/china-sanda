import { ScrollReveal } from "./ScrollReveal";

function InstagramSection() {
  return (
    <section id="instagram" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            className="text-center mb-4 tracking-wider"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Excellent Instagram Moments
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          {/* The embedded Instagram feed */}
          <div data-behold-id="EyZEvBtFnxmVXPdCgSez"></div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default InstagramSection;
