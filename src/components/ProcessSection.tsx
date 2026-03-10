import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    text: "We learn about your business, your customers, and your goals. No jargon — just a clear conversation about what you need.",
  },
  {
    num: "02",
    title: "Design",
    text: "We create a clean, modern design that reflects your business and speaks directly to your ideal customers.",
  },
  {
    num: "03",
    title: "Build",
    text: "We develop your website and systems with precision — fast, mobile-friendly, and built to convert.",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    text: "We launch your new online presence and fine-tune performance to keep results growing over time.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding">
    <div className="container mx-auto px-6">
      <ScrollReveal className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Our Process</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
          Simple, Clear, Effective
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.1}>
            <div className="relative group">
              <div className="rounded-xl border border-border bg-card p-7 h-full hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300">
                <span className="text-4xl font-display font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                  {s.num}
                </span>
                <h3 className="text-lg font-display font-semibold text-foreground mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
