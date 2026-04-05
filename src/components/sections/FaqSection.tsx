"use client";

import { Container } from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does a typical engagement look like?",
    a: "Most projects begin with a 2-week Discovery phase — aligning on scope, architecture, and design direction — before moving into a structured delivery cycle with clear weekly milestones.",
  },
  {
    q: "How long does a project take from start to launch?",
    a: "Strategy and design typically takes 2–4 weeks. Development spans 4–12 weeks for standard web and mobile builds. Complex ERP or platform projects are scoped individually.",
  },
  {
    q: "Do you work with legacy ERP systems?",
    a: "Yes. We specialise in building modern API layers and interfaces over legacy infrastructure — modernising your capabilities without the risk of a full rewrite.",
  },
  {
    q: "Can we engage you for design only?",
    a: "Absolutely. We act as an embedded design partner for many teams — handling UX research, wireframing, prototyping, and final design systems before handing off to your internal engineers.",
  },
  {
    q: "What does post-launch support look like?",
    a: "We offer flexible retainer agreements covering SLA-backed support, monitoring, infrastructure management, and ongoing feature delivery. Scope is tailored to your team's needs.",
  },
];

export function FaqSection() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <span className="section-label">FAQ</span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-foreground leading-tight">
              Questions we&apos;re often asked
            </h2>
          </div>

          <Accordion className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-white/[0.07] py-1"
              >
                <AccordionTrigger className="text-[1rem] font-medium hover:no-underline hover:text-foreground text-foreground/80 transition-colors text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[0.9375rem] text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
