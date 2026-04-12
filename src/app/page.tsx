import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PlatformSection } from "@/components/PlatformSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { WhyCausalySection } from "@/components/WhyCausalySection";
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
        <UseCasesSection />
        <WhyCausalySection />
        <TestimonialSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
