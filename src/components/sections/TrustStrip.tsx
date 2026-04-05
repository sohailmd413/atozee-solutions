"use client";

import { Container } from "@/components/layout/Container";

const logos = [
  { name: "Accenture", width: "w-28" },
  { name: "Deloitte", width: "w-24" },
  { name: "KPMG", width: "w-20" },
  { name: "Oracle", width: "w-24" },
  { name: "McKinsey", width: "w-32" },
  { name: "SAP", width: "w-16" },
];

export function TrustStrip() {
  return (
    <section className="py-20 relative">
      <Container>
        <p className="text-center text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-white/25 mb-10">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6 md:gap-x-20">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-5 bg-white/[0.12] rounded-sm`}
              style={{ maskImage: "linear-gradient(to bottom, white, white)" }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
