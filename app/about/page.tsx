import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import StatsBar from "@/components/about/StatsBar";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutMission from "@/components/about/AboutMission";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <StatsBar />
      <AboutPhilosophy />
      <AboutMission />
      <AboutCTA />
      <Footer />
    </>
  );
}
