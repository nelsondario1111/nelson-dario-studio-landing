import { Shield, Smartphone, Zap, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Shield, text: "Built for real service businesses" },
  { icon: Smartphone, text: "Fast, modern, mobile-friendly" },
  { icon: Zap, text: "AI automation that saves time" },
  { icon: Target, text: "Strategy, design & implementation" },
];

const TrustStrip = () => (
  <section className="section-alt border-y border-border">
    <div className="container mx-auto px-6 py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <ScrollReveal key={item.text} delay={i * 0.1}>
            <div className="flex items-start gap-3">
              <item.icon className="text-gold shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
