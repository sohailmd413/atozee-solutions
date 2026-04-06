"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronRight } from "lucide-react";
import * as React from "react";

// ─── AI Company Logos Data ─────────────────────────────────────────
export const aiLogos = [
  { name: "Meta", src: "/logos/meta.svg" },
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "Mistral AI", src: "/logos/mistral.svg" },
  { name: "Hugging Face", src: "/logos/huggingface.svg" },
  { name: "Perplexity", src: "/logos/perplexity.svg" },
  { name: "ElevenLabs", src: "/logos/elevenlabs.svg" },
  { name: "Suno", src: "/logos/suno.svg" },
  { name: "Tailscale", src: "/logos/tailscale.svg" },
  { name: "Snapdragon", src: "/logos/snapdragon.svg" },
  { name: "MasterCard", src: "/logos/mastercard.svg" },
  { name: "Qwiklabs", src: "/logos/qwiklabs.svg" },
  { name: "Pinterest", src: "/logos/pinterest.svg" },
  { name: "Substack", src: "/logos/substack.svg" },
  { name: "X", src: "/logos/x.svg" },
  { name: "MariaDB", src: "/logos/mariadb.svg" },
  { name: "Emirates", src: "/logos/emirates.svg" },
  { name: "Apple", src: "/logos/apple.svg" },
  { name: "Jenkins", src: "/logos/jenkins.svg" },
  { name: "GitLab", src: "/logos/gitlab.svg" },
];

// ─── Typewriter Animation ──────────────────────────────────────────
function TypewriterText({ texts, className }: { texts: string[]; className?: string }) {
  const [textIndex, setTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullText = texts[textIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setDisplayText((prev) => fullText.substring(0, prev.length + 1));
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typeInterval = setInterval(handleTyping, typingSpeed);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearInterval(typeInterval);
  }, [displayText, isDeleting, textIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[0.85em] bg-white/60 ml-1 align-middle"
      />
    </span>
  );
}

// ─── Floating Paths Background ───────────────────────────────────────────
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Hero Background</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── Motion variants ─────────────────────────────────────────
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Main HeroSection export ─────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-[calc(100vh-4.75rem)]">
      {/* Background paths animation */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.055)_0%,_transparent_65%)]" />
      </div>

      {/* Noise texture — barely visible, adds depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.016,
        }}
      />

      <Container className="relative z-10 flex flex-col items-center text-center w-full pt-16 md:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* ── Eyebrow badge ─────────────────── */}
          <motion.div variants={fadeUp}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.035] hover:bg-white/[0.065] hover:border-white/[0.18] transition-all duration-300 group"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-white/70 shrink-0" />
              <span className="text-[0.78125rem] font-medium text-white/45 tracking-wide group-hover:text-white/65 transition-colors">
                Introducing Enterprise Platform 2.0
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-white/22 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>

          {/* ── Headline ──────────────────────── */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.75rem,7.5vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.04] text-white max-w-[16ch] mb-7"
          >
            Build digital products
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(to bottom, #ffffff 25%, rgba(255,255,255,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <TypewriterText
                texts={[
                  "that scale with confidence",
                  "that drive real growth",
                  "built for the future",
                  "with zero compromise",
                ]}
              />
            </span>
          </motion.h1>

          {/* ── CTA Buttons ───────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary */}
            <Link href="/contact">
              <button className="flex items-center gap-2.5 h-[3.125rem] pl-8 pr-6 rounded-full bg-white text-[#0a0a0a] text-[1rem] font-semibold tracking-[-0.01em] shadow-[0_0_0_1px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.7),0_8px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_0_32px_12px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.7)] hover:bg-white/95 transition-all duration-350 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] select-none">
                Start a project
                <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={2.5} />
              </button>
            </Link>

            {/* Secondary */}
            <Link href="/case-studies">
              <button className="flex items-center h-[3.125rem] px-8 rounded-full border border-white/[0.12] bg-transparent text-[1rem] font-medium text-white/65 hover:text-white/90 hover:border-white/[0.2] hover:bg-white/[0.06] transition-all duration-300 active:scale-[0.97] select-none">
                View our work
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* TrustStrip - AI Company Logos */}
      <div className="relative z-10 w-full mt-auto pb-8 px-4">
        <div className="py-10">
          <Container>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="px-8 pt-8 pb-2">
                <p className="text-center text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/30 mb-0">
                  Trusted by forward-thinking teams
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
                {aiLogos.map((logo, index) => (
                  <div
                    key={logo.name}
                    className={`flex items-center justify-center min-h-[88px] border-r border-b border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors ${
                      (index + 1) % 5 === 0 ? 'border-r-0' : ''
                    } ${index >= aiLogos.length - 5 ? 'border-b-0' : ''}`}
                  >
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="h-6 w-auto invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <span className="text-[0.8125rem] font-medium text-white/70 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        {logo.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </section>
  );
}
