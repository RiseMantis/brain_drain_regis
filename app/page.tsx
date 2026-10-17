import Navigation from "@/components/Navigation";
import ScrollFeatures from "@/components/ScrollFeatures";
import HeroSection from "@/components/HeroSection";
import InfoBanner from "@/components/InfoBanner";
import AboutSection from "@/components/AboutSection";
import RoundsSection from "@/components/RoundsSection";
import ShinobiTerminal from "@/components/ShinobiTerminal";
import ScheduleSection from "@/components/ScheduleSection";
import RulesFAQSection from "@/components/RulesFAQSection";
import GallerySection from "@/components/GallerySection";
import PrizesSection from "@/components/PrizesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Scroll-driven progress and teleport jutsu widget */}
      <ScrollFeatures />

      {/* Persistent navigation */}
      <Navigation />

      {/* Main content */}
      <main id="main-content">
        {/* Hero — Full-bleed cinematic landing */}
        <HeroSection />

        {/* Information banner — overlaps hero bottom */}
        <InfoBanner />

        {/* About — Event identity and pillars */}
        <AboutSection />

        {/* Challenge Rounds — three mission cards */}
        <RoundsSection />

        {/* Interactive Shinobi Terminal / Kernel console */}
        <ShinobiTerminal />

        {/* Schedule — vertical mission timeline */}
        <ScheduleSection />

        {/* Rules & FAQ — engagement guidelines and accordion */}
        <RulesFAQSection />

        {/* Gallery — cinematic image grid */}
        <GallerySection />

        {/* Prizes — ranked reward panels */}
        <PrizesSection />

        {/* Contact — registration CTA, organizer info, social */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
