import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Precision Plumbing Co.",
    category: "Plumbing Company Site",
    description: "A clean, trustworthy website with online booking, service pages, and automated lead follow-up.",
  },
  {
    title: "Summit Contracting",
    category: "Contractor Website",
    description: "A bold, professional site showcasing past projects, client testimonials, and easy quote requests.",
  },
  {
    title: "BrightClean Services",
    category: "Local Service Booking Page",
    description: "A conversion-focused landing page with instant booking, AI chat, and review integration.",
  },
];

const FeaturedWorkSection = () => (
  <section id="work" className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Featured Work</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
          Built to Perform
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.12}>
            <div className="group rounded-xl border border-border bg-card overflow-hidden h-full hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-charcoal/5" />
                <div className="text-center z-10">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.category}</p>
                  <p className="font-display font-semibold text-foreground">{p.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                  <ExternalLink className="text-muted-foreground group-hover:text-gold transition-colors" size={16} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedWorkSection;
