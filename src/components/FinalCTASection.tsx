import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/[0.03] to-background" />

    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6">
          Let's Build Something That Actually Helps Your Business Grow
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          No pressure. No pitch deck. Just a simple conversation about where your business is today 
          and how the right website, systems, or automation could make a real difference.
        </p>
        <Button variant="gold" size="lg" className="text-base px-10 py-6" asChild>
          <a href="mailto:hello@nelsondariostudio.com">
            Book a Free Call
            <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
