import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhyItMattersSection />
      <ProcessSection />
      <ResultsSection />
      <FeaturedWorkSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
