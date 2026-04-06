"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const pillars = [
  {
    num: "01",
    title: "Enterprise-grade reliability",
    text: "We architect systems that scale from day one — built on production-tested infrastructure with zero tolerance for downtime.",
  },
  {
    num: "02",
    title: "Pixel-perfect design craft",
    text: "Our design practice is rooted in detail and hierarchy. Every interface we ship makes a strong, lasting impression.",
  },
  {
    num: "03",
    title: "Speed without compromise",
    text: "Agile delivery that doesn't cut corners. We ship fast, validate early, and iterate with rigor.",
  },
];

export function WhyAtozeeSection() {
  return (
    <motion.section 
      className="py-28 md:py-36"
      initial="hidden"
      whileInView="show"
      viewport={viewportConfig}
    >
      <Container>
        {/* Section label + headline */}
        <motion.div 
          className="max-w-2xl mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          <motion.span 
            className="section-label block mb-4"
            variants={fadeUp}
          >
            Why AtoZee
          </motion.span>
          <motion.h2 
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter leading-tight text-foreground"
            variants={fadeUp}
          >
            Built for scale. <br />Designed for humans.
          </motion.h2>
        </motion.div>

        {/* Pillars — horizontal on desktop, stacked with dividers on mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/[0.06]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
        >
          {pillars.map((p, i) => (
            <motion.div 
              key={i} 
              className="md:px-10 first:pl-0 last:pr-0 pb-10 md:pb-0 border-b md:border-b-0 border-white/[0.06] last:border-b-0"
              variants={fadeUp}
            >
              <span className="text-xs font-mono text-white/20 tracking-widest mb-6 block">{p.num}</span>
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug tracking-tight">{p.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}
