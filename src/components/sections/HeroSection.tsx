"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronRight } from "lucide-react";

// ─── Motion variants ─────────────────────────────────────────
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── 3D Glass Cube ───────────────────────────────────────────
function GlassCube({ size = 200 }: { size?: number }) {
  const h = size / 2;
  const base: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    backfaceVisibility: "hidden",
    willChange: "transform",
  };

  const faces: { transform: string; gradient: string; border?: string }[] = [
    {
      transform: `translateZ(${h}px)`,
      gradient: "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 100%)",
      border: "1px solid rgba(255,255,255,0.12)",
    },
    {
      transform: `translateZ(-${h}px) rotateY(180deg)`,
      gradient: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.07) 100%)",
      border: "1px solid rgba(255,255,255,0.06)",
    },
    {
      transform: `translateX(-${h}px) rotateY(-90deg)`,
      gradient: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
      border: "1px solid rgba(255,255,255,0.07)",
    },
    {
      transform: `translateX(${h}px) rotateY(90deg)`,
      gradient: "linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.04) 100%)",
      border: "1px solid rgba(255,255,255,0.09)",
    },
    {
      // Top — brightest face (catches "light")
      transform: `translateY(-${h}px) rotateX(90deg)`,
      gradient: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 100%)",
      border: "1px solid rgba(255,255,255,0.18)",
    },
    {
      transform: `translateY(${h}px) rotateX(-90deg)`,
      gradient: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
      border: "1px solid rgba(255,255,255,0.04)",
    },
  ];

  return (
    /* Perspective must be on the PARENT of the preserve-3d element */
    <div style={{ perspective: "1100px", width: size, height: size, position: "relative" }}>
      <motion.div
        style={{
          width: size,
          height: size,
          position: "relative",
          transformStyle: "preserve-3d",
          rotateX: 22, // static downward tilt — reveals the top face
        }}
        animate={{
          rotateY: [0, 360],
          y: [0, -18, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            style={{
              ...base,
              transform: face.transform,
              background: face.gradient,
              border: face.border,
              backdropFilter: i === 0 ? "blur(10px)" : undefined,
              // Inner glow on top face
              boxShadow: i === 4
                ? "inset 0 0 60px rgba(255,255,255,0.12), 0 0 40px rgba(255,255,255,0.06)"
                : undefined,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Full Hero Visual composition ────────────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full flex justify-center items-center" style={{ height: 500 }}>
      {/* ── Deep ambient bloom ─────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.065) 0%, transparent 62%)",
          filter: "blur(50px)",
          borderRadius: "50%",
        }}
      />

      {/* ── Perspective grid floor ──────────── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden"
        style={{ width: 700, height: 200 }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: "perspective(300px) rotateX(70deg)",
            transformOrigin: "top center",
            maskImage: "linear-gradient(to bottom, transparent 0%, white 40%, white 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Outer slow-orbit ring ───────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 380,
          height: 380,
          border: "1px solid rgba(255,255,255,0.055)",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {/* Dot on ring */}
        <div
          style={{
            position: "absolute",
            top: -3,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0 0 10px 2px rgba(255,255,255,0.3)",
          }}
        />
      </motion.div>

      {/* ── Inner counter-orbit ring ─────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 290,
          height: 290,
          border: "1px dashed rgba(255,255,255,0.04)",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -3,
            left: "50%",
            transform: "translateX(-50%)",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.35)",
            boxShadow: "0 0 8px 2px rgba(255,255,255,0.15)",
          }}
        />
      </motion.div>

      {/* ── Corner accent lines ──────────────── */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([dx, dy], i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: 24,
            height: 24,
            borderTop: dy === -1 ? "1px solid rgba(255,255,255,0.2)" : undefined,
            borderBottom: dy === 1 ? "1px solid rgba(255,255,255,0.2)" : undefined,
            borderLeft: dx === -1 ? "1px solid rgba(255,255,255,0.2)" : undefined,
            borderRight: dx === 1 ? "1px solid rgba(255,255,255,0.2)" : undefined,
            top: dy === -1 ? "50%" : undefined,
            bottom: dy === 1 ? "calc(50% - 100px)" : undefined,
            left: dx === -1 ? "calc(50% - 180px)" : undefined,
            right: dx === 1 ? "calc(50% - 180px)" : undefined,
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* ── The cube ─────────────────────────── */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <GlassCube size={200} />
      </div>
    </div>
  );
}

// ─── Main HeroSection export ─────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-[calc(100vh-4.75rem)]">
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
              that scale with confidence
            </span>
          </motion.h1>

          {/* ── Supporting paragraph ──────────── */}
          <motion.p
            variants={fadeUp}
            className="text-[1.0625rem] md:text-[1.125rem] text-white/48 leading-[1.7] max-w-[46ch] mb-11"
          >
            AtoZee designs, engineers, and grows digital infrastructure — ERP systems, mobile apps, and SaaS platforms — with zero compromise on quality.
          </motion.p>

          {/* ── CTA Buttons ───────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            {/* Primary */}
            <Link href="/contact">
              <button className="flex items-center gap-2 h-[2.875rem] pl-7 pr-5 rounded-full bg-white text-[#0a0a0a] text-[0.9375rem] font-semibold tracking-[-0.01em] shadow-[0_0_0_1px_rgba(255,255,255,0.22),inset_0_1px_0_rgba(255,255,255,0.65),0_4px_24px_rgba(0,0,0,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.38),0_0_28px_8px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.65)] hover:bg-white/95 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] select-none">
                Start a project
                <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              </button>
            </Link>

            {/* Secondary */}
            <Link href="/case-studies">
              <button className="flex items-center h-[2.875rem] px-7 rounded-full border border-white/[0.1] bg-transparent text-[0.9375rem] font-medium text-white/55 hover:text-white/85 hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-300 active:scale-[0.97] select-none">
                View our work
              </button>
            </Link>
          </motion.div>

          {/* ── Hero Visual ───────────────────── */}
          <motion.div
            variants={fadeUp}
            className="w-full mt-16 md:mt-20"
          >
            <HeroVisual />
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </section>
  );
}
