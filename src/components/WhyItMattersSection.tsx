import { AlertTriangle, Clock, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  {
    icon: AlertTriangle,
    title: "Outdated websites lose clients",
    text: "Most small businesses lose potential customers because their site looks unprofessional or is hard to navigate. First impressions happen online.",
  },
  {
    icon: Clock,
    title: "Manual tasks waste hours",
    text: "Answering the same questions, chasing leads, and managing bookings by hand eats into the time you could spend on actual work.",
  },
  {
    icon: TrendingUp,
    title: "Better design + systems = growth",
    text: "A clear website builds trust. Smart automation saves time. Together, they mean more inquiries, happier customers, and a stronger business.",
  },
];

const WhyItMattersSection = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto px-6">
      <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Why It Matters</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
          The Real Cost of Doing Nothing
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.12}>
            <div className="text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
                <p.icon className="text-gold" size={22} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItMattersSection;
