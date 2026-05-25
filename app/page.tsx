import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clinic from "@/components/Clinic";
import SocialFeed from "@/components/SocialFeed";
import Testimonials from "@/components/Testimonials";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MaintenancePage from "@/components/MaintenancePage";
import MobileParallax from "@/components/MobileParallax";
import ScrollAnimator from "@/components/ScrollAnimator";
import SmoothScroll from "@/components/SmoothScroll";
import { isMaintenanceMode } from "@/lib/maintenance";

export default function Page() {
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Services />
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
