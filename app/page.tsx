import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clinic from "@/components/Clinic";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import SmoothScroll from "@/components/SmoothScroll";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Services />
        <Clinic />
        <Gallery />
        <About />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimator />
      <SmoothScroll />
    </>
  );
}
