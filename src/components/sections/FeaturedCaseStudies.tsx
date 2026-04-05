"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Global ERP Overhaul",
    category: "Enterprise Infrastructure",
    description: "Redesigned and re-engineered a legacy ERP for a multinational logistics firm — reducing operational overhead by 40%.",
    tags: ["ERP", "Systems Design", "API Architecture"],
    size: "lg",
  },
  {
    title: "Fintech Mobile App",
    category: "Product Design & Engineering",
    description: "End-to-end design and development of a compliant B2C payments app launching in 3 markets.",
    tags: ["iOS", "Android", "Figma"],
    size: "sm",
  },
  {
    title: "SaaS Marketing Site",
    category: "Web Development",
    description: "Performance-first marketing site for a Series B SaaS company — 98 Lighthouse score out of the box.",
    tags: ["Next.js", "Animation", "SEO"],
    size: "sm",
  },
];

export function FeaturedCaseStudies() {
  return (
    <section className="py-28 md:py-36 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-foreground leading-tight max-w-[22ch]">
              Work that speaks for itself
            </h2>
          </div>
          <Link href="/case-studies">
            <Button variant="outline" className="hidden md:inline-flex rounded-full text-sm h-10 px-6 shrink-0">
              All case studies
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((project, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.12] rounded-2xl p-8 md:p-10 transition-all duration-400 cursor-pointer min-h-[320px] ${
                project.size === "lg" ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{project.category}</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-4 leading-snug">{project.title}</h3>
                <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              <div className="flex items-end justify-between mt-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[0.75rem] px-2.5 py-1 rounded-full border border-white/[0.08] text-white/40 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
