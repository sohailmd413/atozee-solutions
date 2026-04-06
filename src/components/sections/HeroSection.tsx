"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, ChevronRight } from "lucide-react";

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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Glowing Glass Orb Component ────────────────────────────
function GlowingOrb() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [-15, 15, -15],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Core glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          x: "-50%",
          left: "50%",
        }}
      />

      {/* Main translucent shell */}
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "320px",
          height: "320px",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            boxShadow: "inset 0 0 80px rgba(255,255,255,0.1), inset 0 0 40px rgba(255,255,255,0.05), 0 0 60px rgba(255,255,255,0.08)",
          }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "200px",
            height: "200px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)",
            filter: "blur(15px)",
          }}
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {/* Center glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "120px",
            height: "120px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[
        { size: 4, x: -180, y: -120, duration: 7 },
        { size: 3, x: 160, y: -80, duration: 6 },
        { size: 5, x: -140, y: 100, duration: 8 },
        { size: 3, x: 180, y: 120, duration: 7.5 },
        { size: 4, x: -80, y: -160, duration: 6.5 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            x: particle.x,
            y: particle.y,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(255,255,255,0.7)",
            boxShadow: "0 0 12px 2px rgba(255,255,255,0.5)",
          }}
          animate={{
            y: [particle.y, particle.y - 30, particle.y],
            x: [particle.x, particle.x + 20, particle.x],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
}

// ─── Enhanced Hero Visual Composition ───────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full flex justify-center items-center h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Massive radial bloom */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow layer */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Orbiting rings */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "450px",
          height: "450px",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            top: -2,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 0 20px 4px rgba(255,255,255,0.4)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "380px",
          height: "380px",
          border: "1px dashed rgba(255,255,255,0.04)",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -2,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.6)",
            boxShadow: "0 0 15px 3px rgba(255,255,255,0.3)",
          }}
        />
      </motion.div>

      {/* Main glowing orb */}
      <div className="relative z-10">
        <GlowingOrb />
      </div>
    </div>
  );
}

// ─── Main HeroSection export ─────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden min-h-[calc(100vh-4.75rem)]">
      {/* Background visual layer - more visible now */}
      <div className="absolute inset-0 z-0">
        <HeroVisual />
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
              that scale with confidence
            </span>
          </motion.h1>

          {/* ── Supporting paragraph ──────────── */}
          <motion.p
            variants={fadeUp}
            className="text-[1.0625rem] md:text-[1.125rem] text-white/60 leading-[1.7] max-w-[42ch] mb-11"
          >
            AtoZee designs, engineers, and grows digital infrastructure — ERP systems, mobile apps, and SaaS platforms — with zero compromise on quality.
          </motion.p>

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

      {/* TrustStrip moved here - positioned higher with less vertical space */}
      <div className="relative z-10 w-full mt-auto pb-8">
        <div className="py-8">
          <Container>
            <p className="text-center text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-6">
              Trusted by forward-thinking teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 md:gap-x-14">
              {['Accenture', 'Deloitte', 'KPMG', 'Oracle', 'McKinsey', 'SAP'].map((name) => (
                <div
                  key={name}
                  className="w-24 h-4 bg-white/[0.12] rounded-sm"
                  style={{ maskImage: "linear-gradient(to bottom, white, white)" }}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* Bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </section>
  );
}
