import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container mx-auto px-6">
      <ScrollReveal className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-8">
          A Boutique Digital Partner for Service Businesses
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Nelson Dario Studio was founded with a simple belief: service businesses deserve the same 
            quality of design and technology that big brands get — without the complexity or the inflated pricing.
          </p>
          <p>
            We work closely with plumbers, electricians, contractors, cleaners, and other hands-on 
            professionals to build websites that earn trust, systems that save time, and tools that 
            actually help their business grow.
          </p>
          <p>
            No fluff. No jargon. Just clear thinking, clean design, and technology that works.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
