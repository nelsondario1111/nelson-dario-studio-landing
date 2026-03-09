const footerLinks = [
  { label: "Websites", href: "#services" },
  { label: "AI Automation", href: "#services" },
  { label: "Digital Systems", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">Nelson Dario Studio</p>
          <p className="text-sm text-muted-foreground mt-1">Premium digital systems for service businesses.</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nelson Dario Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {["Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" className="text-xs text-muted-foreground hover:text-gold transition-colors">
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
