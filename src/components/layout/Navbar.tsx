"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Customers", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Fixed wrapper — full width, no pointer events on gap ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-5 pt-4 sm:pt-[1.125rem] pointer-events-none">

        {/* ── Pill ─────────────────────────────────────────────────── */}
        <nav
          className={[
            // Core shape
            "pointer-events-auto w-full max-w-[68rem] rounded-full",
            // *** 3-column grid — the only correct way to true-center nav ***
            "grid grid-cols-[1fr_auto_1fr] items-center",
            "h-[3.5rem] px-5",
            // Border + glass
            "border transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            scrolled
              ? "bg-[#0c0c0c]/90 backdrop-blur-2xl backdrop-saturate-[180%] border-white/[0.09] shadow-[0_0_0_1px_rgba(255,255,255,0.035),0_8px_48px_rgba(0,0,0,0.7)]"
              : "bg-[#0c0c0c]/60 backdrop-blur-xl backdrop-saturate-[150%] border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.45)]",
          ].join(" ")}
        >
          {/* ── Col 1: Logo (left-aligned) ─────────────────────────── */}
          <div className="flex items-center justify-start">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-baseline gap-1.5 group select-none"
            >
              <span className="text-[0.9375rem] font-bold tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
                AtoZee
              </span>
              <span className="hidden lg:inline text-[0.5625rem] font-semibold tracking-[0.22em] uppercase text-white/20 group-hover:text-white/40 transition-colors duration-200">
                Solutions
              </span>
            </Link>
          </div>

          {/* ── Col 2: Nav links (true center — grid auto column) ───── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative px-3.5 py-2 rounded-md",
                  "text-[0.8125rem] font-[450] text-white/40",
                  "hover:text-white/85 transition-colors duration-200",
                  // Subtle underline on hover
                  "after:absolute after:bottom-[5px] after:left-1/2 after:-translate-x-1/2",
                  "after:h-px after:w-0 after:rounded-full after:bg-white/35",
                  "after:transition-[width] after:duration-300 hover:after:w-[50%]",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── Col 3: Actions (right-aligned) ───────────────────────── */}
          <div className="flex items-center justify-end gap-1">
            {/* Desktop: Log in + CTA */}
            <Link
              href="/login"
              className="hidden md:block px-3.5 py-2 text-[0.8125rem] font-[450] text-white/38 hover:text-white/80 transition-colors duration-200 rounded-full select-none"
            >
              Log in
            </Link>

            <Link href="/contact" className="hidden md:block">
              <button
                className={[
                  "flex items-center gap-1.5",
                  "h-[2.0625rem] pl-[1.0625rem] pr-[0.875rem] rounded-full",
                  "text-[0.8125rem] font-semibold tracking-[0.01em] text-[#0a0a0a]",
                  "bg-white",
                  "transition-all duration-250 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.55)]",
                  "hover:bg-white/95 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.28),0_0_22px_6px_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.55)]",
                  "active:scale-[0.97]",
                  "select-none",
                ].join(" ")}
              >
                Get started
                <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
              </button>
            </Link>

            {/* Mobile: hamburger only */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-white/50 hover:text-white/90 hover:bg-white/[0.07] transition-all duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen
                ? <X className="w-[1.0625rem] h-[1.0625rem]" />
                : <Menu className="w-[1.0625rem] h-[1.0625rem]" />
              }
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile full-screen overlay ──────────────────────────── */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden flex flex-col",
          "transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-[#080808]/96 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />

        <div className="relative z-10 flex flex-col h-full pt-[5.5rem] px-6 pb-8">
          <nav className="flex flex-col border-t border-white/[0.05]">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: mobileOpen ? `${i * 35}ms` : "0ms" }}
                className={[
                  "flex items-center justify-between py-4 border-b border-white/[0.05]",
                  "text-[1.0625rem] font-medium text-white/50 hover:text-white/90",
                  "transition-all duration-200",
                  mobileOpen ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0",
                ].join(" ")}
              >
                {link.label}
                <ArrowRight className="w-4 h-4 text-white/15" />
              </Link>
            ))}
          </nav>

          <div
            className={[
              "flex flex-col gap-3 mt-auto",
              "transition-all duration-300",
              mobileOpen ? "translate-y-0 opacity-100 delay-[240ms]" : "translate-y-3 opacity-0",
            ].join(" ")}
          >
            <Link href="/login" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-12 rounded-xl border border-white/[0.09] text-[0.9375rem] font-semibold text-white/55 hover:text-white hover:border-white/[0.16] transition-all duration-200 active:scale-[0.98]">
                Log in
              </button>
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full h-12 rounded-xl bg-white text-[#0a0a0a] text-[0.9375rem] font-semibold flex items-center justify-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:bg-white/95 transition-all duration-200 active:scale-[0.98]">
                Get started
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Spacer: clears fixed pill ─────────────────────────────── */}
      <div className="h-[4.75rem] md:h-[5rem]" />
    </>
  );
}
