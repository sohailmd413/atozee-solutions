"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Layers, PenTool, Monitor, Building2, Smartphone, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const topServices = [
  {
    icon: Layers,
    title: "Product Strategy",
    description: "Roadmaps, prioritisation frameworks, and competitive positioning for digital products.",
    accent: "from-emerald-400/20 to-emerald-600/5",
    iconColor: "text-emerald-400/80",
  },
  {
    icon: PenTool,
    title: "Product Design",
    description: "End-to-end UX/UI design — from discovery and wireframing to pixel-perfect systems.",
    accent: "from-violet-400/20 to-violet-600/5",
    iconColor: "text-violet-400/80",
  },
  {
    icon: Monitor,
    title: "Web Platforms",
    description: "High-performance marketing sites, SaaS dashboards, and composable web apps.",
    accent: "from-sky-400/20 to-sky-600/5",
    iconColor: "text-sky-400/80",
  },
  {
    icon: Building2,
    title: "ERP Systems",
    description: "Custom ERP implementations and integrations for complex organisational workflows.",
    accent: "from-amber-400/20 to-amber-600/5",
    iconColor: "text-amber-400/80",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS, Android, and cross-platform apps built to App Store standards.",
    accent: "from-rose-400/20 to-rose-600/5",
    iconColor: "text-rose-400/80",
  },
];

const capabilities = [
  {
    icon: "architecture",
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business from day one.",
  },
  {
    icon: "design",
    title: "Design Consistency",
    description: "Unified design systems that maintain brand quality at scale.",
  },
  {
    icon: "automation",
    title: "Business Automation",
    description: "Streamlined workflows that reduce manual effort and errors.",
  },
  {
    icon: "analytics",
    title: "Analytics & Optimization",
    description: "Data-driven insights that power continuous improvement.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  switch (type) {
    case "architecture":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "design":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      );
    case "automation":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "analytics":
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="M7 16l4-6 4 3 5-7" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServicesGrid() {
  return (
    <section className="py-28 md:py-36 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-4 block">
              Our Capabilities
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-white max-w-[22ch] leading-tight">
              End-to-end digital transformation
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors shrink-0"
          >
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Top row - 5 service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {topServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.08 }}
                className="group cursor-default"
              >
                {/* Visual tile */}
                <div className="relative h-[120px] rounded-2xl bg-[#0a0a0a] border border-white/[0.06] overflow-hidden mb-5 group-hover:border-white/10 transition-colors duration-300">
                  {/* Accent glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-60`} />
                  {/* Abstract shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center ${service.iconColor}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Subtle corner accent */}
                  <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accent.split(" ")[0].replace("/20", "/40")}`} />
                </div>
                {/* Title + description */}
                <h3 className="text-[0.9375rem] font-semibold text-white mb-1.5 tracking-tight">{service.title}</h3>
                <p className="text-[0.8125rem] text-white/35 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom split - Platform/Foundation area */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left - Statement */}
          <div className="lg:w-[45%] lg:shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <span className="text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-4 block">
                Platform
              </span>
              <h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tighter text-white leading-[1.08] mb-6">
                Build on a strong
                <br />
                digital foundation
              </h3>
              <p className="text-[1.0625rem] text-white/45 leading-[1.7] mb-8 max-w-md">
                AtoZee combines strategy, design, engineering, and optimization into a delivery system built for modern businesses.
              </p>
              <Link href="/services">
                <button className="inline-flex items-center gap-2 h-[2.875rem] pl-7 pr-5 rounded-full bg-white text-[#0a0a0a] text-[0.9375rem] font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.22),inset_0_1px_0_rgba(255,255,255,0.65),0_4px_24px_rgba(0,0,0,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.38),0_0_28px_8px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.65)] hover:bg-white/95 transition-all duration-300 active:scale-[0.97] select-none">
                  View Services
                  <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right - 4 capability items */}
          <div className="lg:w-[55%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: smoothEase, delay: i * 0.1 }}
                  className="group bg-[#0c0c0c] p-6 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 text-white/30 group-hover:text-white/50 transition-colors">
                    <CapabilityIcon type={cap.icon} />
                  </div>
                  <h4 className="text-[0.9375rem] font-semibold text-white mb-1.5 tracking-tight">{cap.title}</h4>
                  <p className="text-[0.8125rem] text-white/35 leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
