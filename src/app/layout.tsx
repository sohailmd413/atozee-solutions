import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

// Primary UI font — Inter: precision at small sizes, SaaS-grade neutrality
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  // Fallback stack matches Inter metrics closely — minimises FOUT layout shift
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  // Let Next.js auto-adjust fallback metrics to match Inter
  adjustFontFallback: true,
  preload: true,
});

// Monospace — JetBrains Mono for code, data, and monospaced labels
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  fallback: ["ui-monospace", "Cascadia Code", "Consolas", "Menlo", "monospace"],
  preload: false, // Not critical-path — only used for code blocks
});

export const metadata: Metadata = {
  title: "AtoZee Solutions | Premium Digital Products",
  description: "AtoZee Solutions helps businesses build and improve digital products, websites, ERP systems, mobile apps, and product experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark antialiased h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/20 selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
