import { ReactNode } from "react";

export interface FeatureItem {
  id: string;
  num: string;
  title: string;
  description: string;
  visual: ReactNode;
}

export const whyAtozeeFeatures: FeatureItem[] = [
  {
    id: "product-strategy",
    num: "01",
    title: "Product Strategy",
    description:
      "We define product direction, priorities, and delivery roadmaps that align with real business goals.",
    visual: (
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
            <span className="text-xs font-mono text-emerald-400/80 tracking-wider">ROADMAP</span>
          </div>
          <div className="space-y-4 flex-1">
            {["Q1 Discovery", "Q2 Design", "Q3 Build", "Q4 Launch"].map((phase, i) => (
              <div key={phase} className="flex items-center gap-3">
                <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                    style={{ width: `${85 - i * 15}%` }}
                  />
                </div>
                <span className="text-[0.6875rem] text-white/40 font-mono w-[70px] text-right">{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "design-systems",
    num: "02",
    title: "Design Systems",
    description:
      "We craft scalable interfaces and consistent UX systems that improve speed, usability, and brand quality.",
    visual: (
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
            <span className="text-xs font-mono text-violet-400/80 tracking-wider">COMPONENTS</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5 flex-1 content-start">
            {["Button", "Input", "Card", "Modal", "Badge", "Toggle"].map((comp) => (
              <div
                key={comp}
                className="h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span className="text-[0.625rem] text-white/40 font-mono">{comp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "engineering",
    num: "03",
    title: "Engineering Execution",
    description:
      "We build robust web platforms, mobile apps, and ERP solutions with strong performance and maintainability.",
    visual: (
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-col h-full font-mono text-[0.6875rem]">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            <span className="text-xs text-amber-400/80 tracking-wider">ARCHITECTURE</span>
          </div>
          <div className="space-y-1.5 flex-1">
            <p>
              <span className="text-amber-300/60">const</span>{" "}
              <span className="text-white/70">platform</span>{" "}
              <span className="text-white/40">=</span>{" "}
              <span className="text-white/50">{"{"}</span>
            </p>
            <p className="pl-4">
              <span className="text-white/40">frontend:</span>{" "}
              <span className="text-emerald-400/70">"Next.js 16"</span>
              <span className="text-white/30">,</span>
            </p>
            <p className="pl-4">
              <span className="text-white/40">backend:</span>{" "}
              <span className="text-emerald-400/70">"Node.js"</span>
              <span className="text-white/30">,</span>
            </p>
            <p className="pl-4">
              <span className="text-white/40">database:</span>{" "}
              <span className="text-emerald-400/70">"PostgreSQL"</span>
              <span className="text-white/30">,</span>
            </p>
            <p className="pl-4">
              <span className="text-white/40">deploy:</span>{" "}
              <span className="text-emerald-400/70">"Vercel"</span>
            </p>
            <p>
              <span className="text-white/50">{"}"}</span>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "growth",
    num: "04",
    title: "Growth & Optimization",
    description:
      "We monitor, refine, and improve digital products after launch through analytics and iteration.",
    visual: (
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] via-transparent to-transparent pointer-events-none" />
        <div className="relative flex flex-col h-full">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            <span className="text-xs font-mono text-sky-400/80 tracking-wider">ANALYTICS</span>
          </div>
          <div className="flex items-end gap-1.5 flex-1">
            {[35, 50, 40, 65, 55, 75, 60, 85, 70, 90, 80, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-500/40 to-sky-400/20 relative"
                style={{ height: `${h}%` }}
              >
                {i === 11 && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];
