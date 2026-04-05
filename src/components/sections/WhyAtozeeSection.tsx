"use client";

import { Container } from "@/components/layout/Container";

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
    <section className="py-28 md:py-36">
      <Container>
        {/* Section label + headline */}
        <div className="max-w-2xl mb-20">
          <span className="section-label">Why AtoZee</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter leading-tight text-foreground">
            Built for scale. <br />Designed for humans.
          </h2>
        </div>

        {/* Pillars — horizontal on desktop, stacked with dividers on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/[0.06]">
          {pillars.map((p, i) => (
            <div key={i} className="md:px-10 first:pl-0 last:pr-0 pb-10 md:pb-0 border-b md:border-b-0 border-white/[0.06] last:border-b-0">
              <span className="text-xs font-mono text-white/20 tracking-widest mb-6 block">{p.num}</span>
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug tracking-tight">{p.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
