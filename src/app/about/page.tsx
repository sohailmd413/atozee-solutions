import { Container } from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <div className="py-24">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight mb-6">About AtoZee</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          We are a team of passionate engineers, designers, and strategists dedicated to crafting premium digital solutions.
        </p>
      </Container>
    </div>
  );
}
