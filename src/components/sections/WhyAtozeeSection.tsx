"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { whyAtozeeFeatures } from "@/lib/why-features";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function WhyAtozeeSection() {
  const [activeFeature, setActiveFeature] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const triggersRef = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const viewportCenter = window.innerHeight * 0.4;

      let closestIndex = 0;
      let closestDistance = Infinity;

      triggersRef.current.forEach((trigger, index) => {
        if (!trigger) return;
        const triggerRect = trigger.getBoundingClientRect();
        const triggerCenter = triggerRect.top + triggerRect.height * 0.3;
        const distance = Math.abs(triggerCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveFeature(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeData = whyAtozeeFeatures[activeFeature];

  return (
    <section ref={sectionRef} className="relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Section label + headline */}
        <div className="pt-28 md:pt-36 pb-12 md:pb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/30 mb-4 block"
          >
            Why AtoZee
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-tighter leading-tight text-white"
          >
            Built for scale.
            <br />
            Designed for humans.
          </motion.h2>
        </div>

        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pb-28 md:pb-36">
          {/* Left feature nav - sticky */}
          <div className="lg:w-[280px] lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              {whyAtozeeFeatures.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    triggersRef.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`w-full text-left py-5 border-b border-white/[0.06] transition-all duration-500 group ${
                    index === activeFeature ? "cursor-default" : "cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono transition-colors duration-500 ${
                        index === activeFeature
                          ? "text-white/70"
                          : "text-white/20 group-hover:text-white/35"
                      }`}
                    >
                      {feature.num}
                    </span>
                    <span
                      className={`text-[0.9375rem] font-medium transition-colors duration-500 ${
                        index === activeFeature
                          ? "text-white"
                          : "text-white/30 group-hover:text-white/50"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </div>
                  {index === activeFeature && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="h-[2px] bg-white/30 mt-3 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right content area with scroll triggers */}
          <div className="flex-1">
            {/* Scroll triggers - create scroll height */}
            {whyAtozeeFeatures.map((_, index) => (
              <div
                key={index}
                ref={(el) => {
                  triggersRef.current[index] = el;
                }}
                className="h-[50vh] lg:h-[70vh]"
              >
                {/* Sticky content panel inside each trigger */}
                <div className="lg:sticky lg:top-28">
                  <AnimatePresence mode="wait">
                    {index === activeFeature && (
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="relative h-[420px] lg:h-[500px] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 lg:p-8 overflow-hidden flex flex-col justify-start hover:border-white/20 transition-all duration-300"
                      >
                        {/* Ambient glow behind panel */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent blur-2xl pointer-events-none" />

                        <h3 className="text-[clamp(1.375rem,2.5vw,2rem)] font-bold tracking-tight text-white leading-tight mb-2">
                          {activeData.title}
                        </h3>
                        <p className="text-[1rem] text-white/70 leading-relaxed max-w-lg mb-5">
                          {activeData.description}
                        </p>
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, ease: smoothEase, delay: 0.1 }}
                          className="flex-1 min-h-0 relative z-10"
                        >
                          {activeData.visual}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
