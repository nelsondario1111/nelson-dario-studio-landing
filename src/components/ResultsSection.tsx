import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Look more professional to every customer",
  "Get more inquiries and booked jobs",
  "Save hours each week with automation",
  "Build lasting trust with your audience",
  "Stand out from local competitors",
];

const ResultsSection = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-sm font-medium text-gold uppercase tracking-wider mb-3">Results</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Real Outcomes for Real Businesses
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our clients don't just get a website — they get a system that works around the clock. 
            Better design, smarter tools, and measurable results.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
              <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
              <span className="font-medium text-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
