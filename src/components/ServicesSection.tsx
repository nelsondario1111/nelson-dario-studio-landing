import { Globe, Bot, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Custom, modern websites that build trust instantly and turn visitors into calls and customers. Designed for how people actually search and browse — on every device.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Lead capture forms, automated follow-ups, FAQ assistants, and smart workflow tools that save you hours every week — so you can focus on the work that matters.",
  },
  {
    icon: Settings,
    title: "Digital Systems",
    description: "Organized bookings, streamlined communication, and efficient operations. We connect the tools your business needs into one clear, manageable system.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
          Everything Your Business Needs to Grow Online
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-border bg-card p-8 hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <s.icon className="text-gold" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
