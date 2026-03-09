import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--charcoal)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--charcoal)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
              Websites · AI · Digital Systems
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.1] tracking-tight text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Premium Websites &{" "}
            <span className="text-gold">Smart AI Systems</span>{" "}
            for Service Businesses
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We help local businesses look better online, generate more leads, and save time with simple, powerful digital systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="gold" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contact">
                Book a Free Call
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="gold-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#process">See How It Works</a>
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-xl border border-border bg-card shadow-2xl shadow-foreground/5 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <span className="w-3 h-3 rounded-full bg-border" />
              <span className="w-3 h-3 rounded-full bg-border" />
              <span className="w-3 h-3 rounded-full bg-border" />
              <span className="flex-1 text-center text-xs text-muted-foreground">nelsonDarioStudio.com</span>
            </div>
            <div className="p-6 md:p-10 space-y-6">
              {/* Mock dashboard */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "New Leads", value: "47", change: "+18%" },
                  { label: "Calls Booked", value: "23", change: "+32%" },
                  { label: "Response Time", value: "< 2 min", change: "AI Powered" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border bg-background p-4">
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-display font-semibold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-gold mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="h-32 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Leads & Performance Overview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
