import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PlatformSection } from "@/components/PlatformSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WhyEnjambSection } from "@/components/WhyEnjambSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroSection />
        <PlatformSection />
        <FeaturesSection />
        <UseCasesSection />
        <WhyEnjambSection />
        <TestimonialSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
