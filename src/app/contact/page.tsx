import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container>
        <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          Ready to start your next project? Get in touch with our team today.
        </p>
        <div className="max-w-md space-y-6">
          <div className="p-8 border border-white/10 rounded-2xl bg-card">
            <p className="text-muted-foreground mb-6">Contact form placeholder.</p>
            <Button className="w-full rounded-full">Send Message</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
