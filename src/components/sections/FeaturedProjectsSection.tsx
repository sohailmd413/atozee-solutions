"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const filters = [
  "All",
  "Web Platforms",
  "ERP Systems",
  "Mobile Apps",
  "Product Design",
  "AI Solutions",
];

const projects = [
  {
    id: "erp-automation",
    title: "ERP Automation Platform",
    description: "Streamlined approvals, finance workflows, and inventory operations in one scalable ERP system.",
    category: "ERP Systems",
    gradient: "from-emerald-900/60 via-emerald-950/40 to-black",
    accent: "from-emerald-500/20 to-emerald-700/5",
    shape: "emerald",
  },
  {
    id: "mobile-ordering",
    title: "Enterprise Mobile Ordering App",
    description: "A high-performance mobile ordering experience built for field sales and customer convenience.",
    category: "Mobile Apps",
    gradient: "from-violet-900/60 via-violet-950/40 to-black",
    accent: "from-violet-500/20 to-violet-700/5",
    shape: "violet",
  },
  {
    id: "website-redesign",
    title: "B2B Website Redesign",
    description: "Modernized web presence with stronger UX, SEO structure, and lead-focused conversion paths.",
    category: "Web Platforms",
    gradient: "from-sky-900/60 via-sky-950/40 to-black",
    accent: "from-sky-500/20 to-sky-700/5",
    shape: "sky",
  },
  {
    id: "discovery-dashboard",
    title: "Product Discovery Dashboard",
    description: "A clean, data-rich dashboard for planning, prioritization, and internal product visibility.",
    category: "Product Design",
    gradient: "from-amber-900/60 via-amber-950/40 to-black",
    accent: "from-amber-500/20 to-amber-700/5",
    shape: "amber",
  },
  {
    id: "ai-support",
    title: "AI Support Workflow System",
    description: "Automated customer support flows using AI-assisted routing, tagging, and response support.",
    category: "AI Solutions",
    gradient: "from-rose-900/60 via-rose-950/40 to-black",
    accent: "from-rose-500/20 to-rose-700/5",
    shape: "rose",
  },
  {
    id: "analytics-portal",
    title: "Operations Analytics Portal",
    description: "A centralized reporting interface for KPIs, operational performance, and trend monitoring.",
    category: "Web Platforms",
    gradient: "from-cyan-900/60 via-cyan-950/40 to-black",
    accent: "from-cyan-500/20 to-cyan-700/5",
    shape: "cyan",
  },
];

function AbstractVisual({ shape, accent }: { shape: string; accent: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/[0.03] blur-xl" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-white/[0.02] blur-2xl" />
      {shape === "emerald" && (
        <>
          <div className="absolute top-8 right-12 w-20 h-20 rounded-lg bg-emerald-500/10 rotate-12 blur-sm" />
          <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-emerald-400/30" />
        </>
      )}
      {shape === "violet" && (
        <>
          <div className="absolute top-12 left-16 w-24 h-24 rounded-full bg-violet-500/10 -rotate-6 blur-sm" />
          <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-violet-400/40" />
        </>
      )}
      {shape === "sky" && (
        <>
          <div className="absolute top-16 right-20 w-16 h-16 rounded-xl bg-sky-500/10 rotate-45 blur-sm" />
          <div className="absolute bottom-24 left-16 w-2.5 h-2.5 rounded-full bg-sky-400/30" />
        </>
      )}
      {shape === "amber" && (
        <>
          <div className="absolute top-10 left-20 w-28 h-28 rounded-full bg-amber-500/10 blur-md" />
          <div className="absolute bottom-12 right-16 w-2 h-2 rounded-full bg-amber-400/30" />
        </>
      )}
      {shape === "rose" && (
        <>
          <div className="absolute top-20 right-16 w-20 h-20 rounded-lg bg-rose-500/10 -rotate-12 blur-sm" />
          <div className="absolute bottom-20 left-12 w-2 h-2 rounded-full bg-rose-400/30" />
        </>
      )}
      {shape === "cyan" && (
        <>
          <div className="absolute top-14 left-14 w-24 h-24 rounded-full bg-cyan-500/10 rotate-6 blur-sm" />
          <div className="absolute bottom-16 right-20 w-2.5 h-2.5 rounded-full bg-cyan-400/30" />
        </>
      )}
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

export function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 440;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 md:py-36 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-4 block">
              Selected Work
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-white max-w-[18ch] leading-tight">
              Built with AtoZee
            </h2>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {/* All projects link */}
            <Link
              href="/case-studies"
              className="hidden md:group items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              All projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => scroll("left")}
                className="group relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.95]"
                aria-label="Scroll left"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                <span className="relative text-white/70 group-hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </span>
              </motion.button>

              <motion.button
                onClick={() => scroll("right")}
                className="group relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.95]"
                aria-label="Scroll right"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
                <span className="relative text-white/70 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-[0.8125rem] font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-[#0a0a0a]"
                  : "bg-white/[0.04] text-white/40 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white/60"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Horizontal card scroller */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: smoothEase, delay: i * 0.06 }}
                className="group relative min-w-[320px] lg:min-w-[420px] h-[420px] rounded-[28px] overflow-hidden border border-white/10 bg-[#0a0a0a] snap-start shrink-0 cursor-pointer hover:border-white/20 transition-all duration-500"
              >
                {/* Abstract visual */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
                  <AbstractVisual shape={project.shape} accent={project.accent} />
                </div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-[0.6875rem] font-medium text-white/35 tracking-wider uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-[1.25rem] font-bold text-white tracking-tight mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[0.875rem] text-white/45 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  {/* Arrow icon */}
                  <div className="absolute top-7 right-7 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
