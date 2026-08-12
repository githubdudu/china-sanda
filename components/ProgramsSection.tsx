"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HandFist, HandGrab, Medal, X } from "lucide-react";
import Image from "next/image";

import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

const programs = [
  {
    title: "Boxing",
    description: "Master the fundamentals of striking, footwork, and defense.",
    details: "Master the fundamentals of striking, footwork, and defense. Designed for all fitness levels, from beginners to advanced fighters. Our Boxing classes focus on sharp technique, body conditioning, and stress relief in a controlled, high-energy environment. Gain confidence, discipline, and self-respect with our boxing program. ",
    level: "All Levels/ Beginner friendly",
    image: "https://images.unsplash.com/photo-1711825049074-a0ff4a845ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGJveGluZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTg2ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: HandFist,
  },
  {
    title: "Brazilian Jiu Jitsu(BJJ)",
    description: "Learn the art of ground fighting, leverage, and submissions.",
    details: "Learn the art of ground fighting, leverage, and submissions techniques. BJJ empowers you to control opponents using skill and body positioning rather than raw strength, building confidence and mental resilience.",
    level: "All Levels/ Fundamentals & Advanced",
    image: "https://images.unsplash.com/photo-1651707999616-be901bcc97fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NTk3NjY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: HandGrab,
  },
  {
    title: "1-1 Private Coaching",
    description: "Accelerate your progress with personalized, instruction tailored to your specific goals.",
    details: "Accelerate your progress with personalized, instruction tailored to your specific goals. Whether you want to master technical details, fast-track your fitness, build self-defense confidence, or work around dynamic schedules - private training provides the ultimate direct guidance. Ideal for beginners, busy professionals, and advanced technique refinement.",
    level: "All Levels / Beginner friendly",
    image: "https://images.unsplash.com/photo-1727990617119-5a6a93e4c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBib3hlciUyMHRyYWluaW5nfGVufDF8fHx8MTc1OTg2ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Medal,
  },
];

const CARD_SIZES = "(min-width: 768px) 33vw, 100vw";

function Programs() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : programs[selected];

  return (
    <section id="programs" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            className="text-center mb-4 tracking-wider"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Programs for Every Fighter.
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        </ScrollReveal>

        <ScrollRevealGroup className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollRevealItem key={program.title}>
              <motion.div
                className="group relative overflow-hidden bg-background shadow-lg cursor-pointer border-2 border-transparent"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(index)}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes={CARD_SIZES}
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 size-12 bg-primary rounded-full flex items-center justify-center">
                    <program.icon className="text-background" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-[1.75rem]">{program.title}</h3>
                  <p className="text-foreground/70 mb-4">{program.description}</p>
                  <div className="w-12 h-1 bg-secondary group-hover:w-full transition-all duration-300"></div>
                </div>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="/classes"
              className="display inline-block px-8 py-3 btn-primary"
              style={{ fontSize: "1.125rem", letterSpacing: "2px" }}
            >
              View Class Schedule
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Program Detail Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 p-2 bg-primary text-background hover:bg-primary-dark transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <active.icon className="text-background" size={24} />
                  </div>
                  <h3 className="text-[2.5rem]">{active.title}</h3>
                </div>

                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{active.details}</p>

                <div className="bg-background-secondary p-4 mb-6">
                  <h4 className="display text-xl mb-2">Level</h4>
                  <p className="text-foreground/80">{active.level}</p>
                </div>

                <div className="flex gap-4">
                  <a
                    href="/contact"
                    className="display flex-1 px-6 py-3 btn-primary"
                    style={{ fontSize: "1.125rem", letterSpacing: "2px" }}
                  >
                    Sign Up Now
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="display px-6 py-3 bg-foreground text-background hover:opacity-80 transition-opacity"
                    style={{ fontSize: "1.125rem", letterSpacing: "2px" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Programs;
