import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";
import DemoSection from "@/components/DemoSection";
import HowItWorks from "@/components/HowItWorks";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CapabilitiesShowcase />
        <DemoSection />
        <HowItWorks />
        <FeatureDeepDive />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
