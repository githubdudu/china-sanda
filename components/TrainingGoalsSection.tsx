import { Activity, Brain, ChevronDown, ShieldCheck, Wind } from "lucide-react";

import {
  ScrollReveal,
  ScrollRevealGroup,
  ScrollRevealItem,
} from "./ScrollReveal";

const trainingGoals = [
  {
    number: "01",
    title: "Strength",
    question: "Can combat training really change your body?",
    takeaway: "Build strength, coordination, and a healthier everyday life.",
    setup:
      "It is about more than improving fitness and building stronger bones.",
    detail:
      "With every step, shape a taller, more confident posture. With every strike, push beyond your limits. And with each day of commitment, build discipline and vitality.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Resilience",
    question: "What does combat training build on the inside?",
    takeaway:
      "Turn focus, perseverance, and challenges into lasting resilience.",
    setup: "It is about more than breaking a sweat or throwing a hard punch.",
    detail:
      "Find deep focus in every strike. Learn to stand back up after every fall. And through the fatigue of each challenge, forge the resolve to keep going.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Self-Defense",
    question: "Can combat training help you protect yourself?",
    takeaway: "Build awareness, sound judgment, and confidence under pressure.",
    setup: "It is about more than memorizing a few defensive techniques.",
    detail:
      "Sharpen your awareness through movement and evasion. Learn to assess situations calmly and avoid danger where possible. With control over your own strength comes greater confidence and composure.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Stress Relief",
    question: "Why make time to train when life is already so busy?",
    takeaway:
      "Leave daily pressure behind and return to the moment with clarity.",
    setup: "It is about more than getting active or burning calories.",
    detail:
      "Let focused punches clear your mind. Release the pressure of work and study with every breath and movement. In the simplicity of being fully present, rediscover a lighter balance of body and mind.",
    icon: Wind,
  },
];

function TrainingGoalsSection() {
  return (
    <section id="training-goals" className="bg-background-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <h2
              className="mb-16 tracking-wider"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Choose Your Goal
            </h2>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="grid gap-x-12 md:grid-cols-2">
          {trainingGoals.map((goal) => (
            <ScrollRevealItem key={goal.number}>
              <article className="border-t border-foreground/20 md:px-8 py-8 md:py-16 hover:[&_h3]:border-primary">
                <div className="mb-8 flex items-center gap-4 ">
                  <goal.icon
                    aria-hidden="true"
                    className="text-primary"
                    size={48}
                    strokeWidth={1.8}
                  />
                  <h3 className="text-3xl md:text-5xl border-transparent border-b-4 transition-all duration-100">{goal.title}</h3>
                </div>

                <p className="mb-8 leading-relaxed text-foreground/75">
                  {goal.takeaway}
                </p>

                <details className="group border-l-2 border-secondary pl-4">
                  <summary className="flex cursor-pointer list-none items-center gap-2 py-1 text-sm font-semibold text-primary marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                    <ChevronDown
                      aria-hidden="true"
                      size={16}
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="space-y-3 pb-2 pt-4 leading-relaxed text-foreground/75">
                    <p>{goal.question}</p>
                    <p>{goal.setup}</p>
                    <p>{goal.detail}</p>
                  </div>
                </details>
              </article>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

export default TrainingGoalsSection;
