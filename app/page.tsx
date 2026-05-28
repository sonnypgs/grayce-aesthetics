import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Promos from "@/components/Promos";
import Clinic from "@/components/Clinic";
import SocialFeed from "@/components/SocialFeed";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MaintenancePage from "@/components/MaintenancePage";
import MobileParallax from "@/components/MobileParallax";
import PreviewGate from "@/components/PreviewGate";
import ScrollAnimator from "@/components/ScrollAnimator";
import SmoothScroll from "@/components/SmoothScroll";
import { isMaintenanceMode } from "@/lib/maintenance";
import { isPreviewGateEnabled, previewPasswordHash } from "@/lib/preview-gate";

export default function Page() {
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  const site = <SiteContent />;

  if (isPreviewGateEnabled) {
    return (
      <PreviewGate passwordHash={previewPasswordHash}>
        {site}
      </PreviewGate>
    );
  }

  return site;
}

function SiteContent() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Services />
        <Promos />
        <Clinic />
        <SocialFeed />
        <Testimonials />
        <About />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimator />
      <MobileParallax />
      <SmoothScroll />
    </>
  );
}
