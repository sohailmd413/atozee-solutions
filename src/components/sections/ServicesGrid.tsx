"use client";

import { Container } from "@/components/layout/Container";
import { ArrowRight, Rocket, Palette, Globe, Smartphone, Server, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Rocket,
    title: "Product Strategy",
    description: "Roadmaps, prioritisation frameworks, and competitive positioning for digital products.",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "End-to-end UX/UI design — from discovery and wireframing to pixel-perfect systems.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance marketing sites, SaaS dashboards, and composable web apps.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS, Android, and cross-platform apps built to App Store standards.",
  },
  {
    icon: Server,
    title: "ERP & Enterprise Systems",
    description: "Custom ERP implementations and integrations for complex organisational workflows.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description: "Dashboards, pipelines, and BI tooling to surface actionable business intelligence.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-28 md:py-36 relative">
      {/* Very subtle section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.012] via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Our Capabilities</span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-foreground max-w-[22ch] leading-tight">
              End-to-end digital transformation
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group bg-background/80 p-8 md:p-10 hover:bg-white/[0.03] transition-colors duration-300 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center mb-6 text-foreground/70 group-hover:text-foreground transition-colors">
                  <Icon className="w-4.5 h-4.5" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground text-[1rem] mb-2 tracking-tight">{service.title}</h3>
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
