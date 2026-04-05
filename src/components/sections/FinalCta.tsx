"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Soft centered glow — deliberate, not excessive */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Top divider gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container className="relative z-10 text-center">
        <span className="section-label inline-block text-center">Get started</span>
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter leading-[1.05] max-w-[18ch] mx-auto mb-6 text-gradient">
          Ready to build something remarkable?
        </h2>
        <p className="text-[1.0625rem] text-muted-foreground max-w-[50ch] mx-auto mb-12 leading-relaxed">
          Tell us about your project. Our team will get back within one business day with a clear next step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-10 h-12 text-[0.9375rem] font-semibold tracking-tight shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.6)]"
            >
              Start a project
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-10 h-12 text-[0.9375rem] text-muted-foreground hover:text-foreground"
            >
              Learn about us
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
