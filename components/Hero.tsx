import Link from "next/link";
import Image from "next/image";
import AnimatedHeadings from "./AnimatedHeadings";
import { heroData as defaultHeroData } from "@/data/hero";

import { type HomePage } from "@/sanity/sanity.types";

/**
 * Hero section component
 * @param heroData use defaultHeroData if not provided
 * @returns JSX.Element
 */
const Hero = ({ heroData = defaultHeroData }: { heroData: HomePage }) => {
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
        <AnimatedHeadings pageTitle={heroData.pageTitle} />

        {/* CTA Buttons */}
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          {heroData?.button1Red && (
            <Link
              href={heroData.button1Red.url || "/contact"}
              className="px-8 py-4 text-lg btn-primary w-full sm:w-auto"
            >
              <span>Book Trial</span>
              {heroData?.button1Red?.nameCN && (
                <span>
                  &nbsp;|&nbsp;
                  {heroData.button1Red.nameCN}
                </span>
              )}
            </Link>
          )}
          {heroData?.button2White && (
            <Link
              href={heroData.button2White.url || "/classes"}
              className="btn-secondary text-[#ededed] ring-[#ededed]/50 hover:bg-[#ededed]/5 px-8 py-4 text-lg  w-full sm:w-auto"
            >
              <span>View Classes</span>
              {heroData?.button2White?.nameCN && (
                <span>
                  &nbsp;|&nbsp;
                  {heroData?.button2White?.nameCN}
                </span>
              )}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
