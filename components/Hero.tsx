"use client";

import { motion } from "motion/react";
import { type HomePage, type Sentence } from "@/sanity/sanity.types";

import { Instagram, Youtube, TickTock, RedBook } from "./SocialIcons";

function Hero({ heroData }: { heroData: HomePage }) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1570456717698-41ac2f7157bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTk4NDgxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-white mb-4 tracking-wider"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: "1.1",
          }}
        >
          <HeroTitle pageTitle={heroData?.pageTitle} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="text-[#FFD600] mb-8"
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            letterSpacing: "2px",
          }}
        >
          {/* TODO: Wire with Sanity content */}
          Punch. Kick. Throw. Master All Three.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <HeroButton
            onClick={() => scrollToSection("join")}
            variant="primary"
          >
            {heroData?.button1Red?.name}
          </HeroButton>
          <HeroButton
            onClick={() => scrollToSection("contact")}
            variant="secondary"
          >
            {heroData?.button2White?.name}
          </HeroButton>
        </motion.div>

        <div className="flex gap-6 justify-center items-center">
          <a
            href="#"
            className="text-white hover:text-[#FFD600] transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#FFD600] transition-colors"
          >
            <TickTock />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#FFD600] transition-colors"
          >
            <RedBook />
          </a>
          <a
            href="#"
            className="text-white hover:text-[#FFD600] transition-colors"
          >
            <Youtube />
          </a>
        </div>

        <p className="text-white/80 mt-8">
          Located in the heart of Auckland City
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

const FALLBACK_TITLE = "China Sanda Club";

/** Renders each title line, underlining the sentence's stressWord if present. */
function HeroTitle({ pageTitle }: { pageTitle?: HomePage["pageTitle"] }) {
  const lines = pageTitle?.filter((item) => item.title?.sentence) ?? [];

  if (lines.length === 0) {
    return <>{FALLBACK_TITLE}</>;
  }

  return (
    <>
      {lines.map((item) => (
        <span key={item._key} className="block">
          <StressedSentence sentence={item.title!} />
        </span>
      ))}
    </>
  );
}

function StressedSentence({ sentence }: { sentence: Sentence }) {
  const text = sentence.sentence ?? "";
  const stress = sentence.stressWord;
  const index = stress ? text.indexOf(stress) : -1;

  if (!stress || index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <span className="text-[#FFD600]">{stress}</span>
      {text.slice(index + stress.length)}
    </>
  );
}

function HeroButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-4 ${
        variant === "primary"
          ? "bg-[#C62828] text-white hover:bg-gradient-to-b hover:from-[#C62828] hover:to-[#a01f1f]"
          : "bg-white text-[#111111] hover:bg-[#FFD600]"
      } transition-colors shadow-lg`}
      whileHover={{ y: -2, boxShadow: "0 8px 16px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      style={{
        fontFamily: "Bebas Neue, sans-serif",
        fontSize: "1.125rem",
        letterSpacing: "2px",
      }}
    >
      {children}
    </motion.button>
  );
}

export default Hero;
