import { Container } from "./Container";
import Link from "next/link";

const navLinks = [
  {
    heading: "Services",
    links: [
      { label: "Product Design", href: "/services" },
      { label: "Web Development", href: "/services" },
      { label: "ERP Systems", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Analytics", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06] bg-background pt-20 pb-10 text-sm text-muted-foreground">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <span className="text-lg font-bold tracking-tighter text-foreground block">AtoZee</span>
            <p className="text-[0.875rem] text-muted-foreground leading-relaxed max-w-[22ch]">
              Premium digital solutions for ambitious enterprises.
            </p>
            <p className="text-[0.75rem] text-white/20 font-medium tracking-wide">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Nav columns */}
          {navLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-white/25 mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[0.8125rem] text-white/25">
          <p>© {new Date().getFullYear()} AtoZee Solutions Ltd. All rights reserved.</p>
          <p>Designed & built with intentional care.</p>
        </div>
      </Container>
    </footer>
  );
}
