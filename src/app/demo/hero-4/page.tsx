import { HeroSection } from "@/components/ui/hero-4";

const avatarData = [
  {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "User 1",
    fallback: "U1",
  },
  {
    src: "https://i.pravatar.cc/150?img=2",
    alt: "User 2",
    fallback: "U2",
  },
  {
    src: "https://i.pravatar.cc/150?img=3",
    alt: "User 3",
    fallback: "U3",
  },
];

export default function Hero4Demo() {
  return (
    <div className="w-full bg-background">
      <HeroSection
        title={<>How to make money <br /></>}
        animatedTexts={[
          "in digital marketing?",
          "with content creation?",
          "through e-commerce",
          "by mastering SEO",
        ]}
        subtitle="Achieve your goals and learn high-income skills with Coursiv"
        infoBadgeText="Annual income of Social Media Marketer: $70,000*"
        ctaButtonText="Get started"
        socialProofText="More than 100,000+ people joined"
        avatars={avatarData}
      />
    </div>
  );
}
