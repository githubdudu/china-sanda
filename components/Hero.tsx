import Link from "next/link";
import Image from "next/image";
import AnimatedHeadings from "./AnimatedHeadings";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6.25rem)] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="China Sanda Club training facility"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-8 z-10 container mx-auto px-4 sm:px-8 text-center">
        {/* Animated Bilingual Headings */}
        <AnimatedHeadings />

        {/* CTA Buttons */}
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <Link
            href="/contact"
            className="px-8 py-4 text-lg btn-primary w-full sm:w-auto"
          >
            Book Free Trial
          </Link>
          <Link
            href="/classes"
            className="px-8 py-4 text-lg btn-secondary w-full sm:w-auto"
          >
            View Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
