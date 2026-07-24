import Navbar from "@/components/Navbar";
import LatestNews from "@/components/LatestNews";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import AcademicExcellence from "@/components/AcademicExcellence";
import Facilities from "@/components/Facilities";
import GallerySection from "@/components/Gallery/GallerySection";
import ProgrammesSection from "@/components/Programmes/ProgrammesSection";
import InstitutionNetwork from "@/components/InstitutionNetwork";
import LeadershipSection from "@/components/Leadership/LeadershipSection"; 
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative pt-24 lg:pt-28">
      <Navbar />
      <LatestNews />
      <Hero />
      <TrustBar />
      <About />
      <LeadershipSection />
      <AcademicExcellence />
      <Facilities />
      <GallerySection />
      <ProgrammesSection />
      <InstitutionNetwork />
      <Contact />
      <Footer />
    </main>
  );
}