"use client";

import { Container } from "@/components/layout/Container";

const stacks = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Framer Motion"] },
  { label: "Backend", items: ["Node.js", "Go", "Python", "REST & GraphQL"] },
  { label: "Mobile", items: ["React Native", "Swift", "Kotlin", "Expo"] },
  { label: "Data", items: ["PostgreSQL", "Redis", "Prisma", "Supabase"] },
  { label: "Cloud", items: ["AWS", "GCP", "Vercel", "Docker"] },
  { label: "Tools", items: ["Figma", "Linear", "GitHub", "Datadog"] },
];

export function TechnologyCapabilities() {
  return (
    <section className="py-28 md:py-36 relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Technology</span>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-tighter text-foreground leading-tight">
              Modern stack, production proven
            </h2>
          </div>
          <p className="text-[0.9375rem] text-muted-foreground max-w-sm md:text-right leading-relaxed">
            We use the tools that elite teams trust — not whatever is trending this week.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {stacks.map((stack, i) => (
            <div key={i} className="bg-background/80 p-7 hover:bg-white/[0.03] transition-colors duration-300">
              <p className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-white/25 mb-4">{stack.label}</p>
              <ul className="space-y-2.5">
                {stack.items.map((item) => (
                  <li key={item} className="text-[0.875rem] text-foreground/70 font-medium">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
