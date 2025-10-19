import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
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
        {/* English Heading */}
        <Heading1
          s1Normal="Welcome to"
          s1Stress="China Sanda Club"
          s2Normal="The World-Class"
          s2Stress="Sanda Club"
        />

        {/* Chinese Heading */}
        <Heading1
          s1Normal="欢迎来到"
          s1Stress="中国散打"
          s2Normal="世界一流的"
          s2Stress="散打搏击俱乐部"
        />

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

interface Heading1Props {
  s1Normal: string;
  s1Stress: string;
  s2Normal: string;
  s2Stress: string;
}

const Heading1 = ({
  s1Normal,
  s1Stress,
  s2Normal,
  s2Stress,
}: Heading1Props) => {
  return (
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left leading-tight">
      <div className="mb-2">
        {s1Normal}
        &nbsp;
        <span className="underline underline-offset-4 decoration-primary">
          {s1Stress}
        </span>
      </div>
      <div>
        <span className="underline underline-offset-4 decoration-primary">
          {s2Normal}
        </span>
        &nbsp;
        {s2Stress}
      </div>
    </h1>
  );
};
