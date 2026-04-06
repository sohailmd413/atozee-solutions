"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const smoothEase = [0.22, 1, 0.36, 1] as const;

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
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const triggersRef = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate progress through the section (0 to 1)
      const progress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (sectionHeight + viewportHeight * 0.5)));

      // Map progress to active step (0-3)
      const stepIndex = Math.min(3, Math.floor(progress * 4));
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-28 md:py-36 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.012] via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-4 block">
            Our Process
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-white leading-tight">
            How we deliver
          </h2>
        </motion.div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Horizontal timeline rail */}
          <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            {/* Active progress line */}
            <motion.div
              className="h-full bg-gradient-to-r from-white/60 to-white/20 rounded-full"
              style={{
                width: `${((activeStep + 1) / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: smoothEase }}
            />
          </div>

          {/* Step nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {steps.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.12 }}
                  className={`relative flex flex-col items-center text-center md:items-center ${
                    i < steps.length - 1 ? "md:pr-0" : ""
                  }`}
                >
                  {/* Number bubble */}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono mb-8 relative z-10 shrink-0 transition-all duration-500 ${
                      isCurrent
                        ? "border-white/40 bg-white/[0.06] text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                        : isActive
                        ? "border-white/20 bg-white/[0.03] text-white/60"
                        : "border-white/10 bg-white/[0.02] text-white/25"
                    } border`}
                  >
                    {step.num}
                    {/* Active glow */}
                    {isCurrent && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 rounded-full bg-white/5 blur-md"
                      />
                    )}
                  </motion.div>

                  {/* Step content */}
                  <h3
                    className={`text-lg font-semibold tracking-tight leading-snug mb-3 transition-colors duration-500 ${
                      isCurrent ? "text-white" : isActive ? "text-white/70" : "text-white/35"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-[0.875rem] leading-7 max-w-[280px] transition-colors duration-500 ${
                      isCurrent ? "text-white/65" : isActive ? "text-white/45" : "text-white/25"
                    }`}
                  >
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
