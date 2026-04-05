"use client";

import { Container } from "@/components/layout/Container";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    text: "We immerse in your business context, technical landscape, and user needs to define a focused, achievable scope.",
  },
  {
    num: "02",
    title: "Design & Prototyping",
    text: "High-fidelity prototypes validated with stakeholders before a single line of production code is written.",
  },
  {
    num: "03",
    title: "Engineering",
    text: "Rigorous, test-driven development with weekly delivery milestones and transparent progress reporting.",
  },
  {
    num: "04",
    title: "Launch & Growth",
    text: "Staged rollouts, performance monitoring, and a structured handoff — or ongoing partnership.",
  },
];

export function HowWeWorkSection() {
  return (
    <section className="py-28 md:py-36 relative">
      <Container>
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="section-label">Our Process</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-foreground leading-tight">
            How we deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[1.125rem] left-[calc(12.5%+1.75rem)] right-[calc(12.5%+1.75rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center md:items-center">
              {/* Number bubble */}
              <div className="w-9 h-9 rounded-full border border-white/15 bg-background flex items-center justify-center text-xs font-mono text-white/40 mb-7 relative z-10 shrink-0">
                {step.num}
              </div>
              <h3 className="text-[0.9375rem] font-semibold text-foreground mb-2 tracking-tight leading-snug">{step.title}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
