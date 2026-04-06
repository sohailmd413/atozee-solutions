import { HeroSection } from "@/components/sections/HeroSection";
import { WhyAtozeeSection } from "@/components/sections/WhyAtozeeSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { FeaturedCaseStudies } from "@/components/sections/FeaturedCaseStudies";
import { TechnologyCapabilities } from "@/components/sections/TechnologyCapabilities";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <HeroSection />
      <WhyAtozeeSection />
      <ServicesGrid />
      <HowWeWorkSection />
      <FeaturedCaseStudies />
      <TechnologyCapabilities />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
