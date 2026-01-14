import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWeHelp from "@/components/HowWeHelp";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowWeHelp />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
