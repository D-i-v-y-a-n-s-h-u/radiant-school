import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Academics from "@/components/Academics";
import Facilities from "@/components/Facilities";
import GallerySection from "@/components/Gallery/GallerySection";
import ProgrammesSection from "@/components/Programmes/ProgrammesSection";
import InstitutionNetwork from "@/components/InstitutionNetwork";
import LeadershipSection from "@/components/Leadership/LeadershipSection"; 
import Testimonials from "@/components/Testimonials";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <LeadershipSection />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <GallerySection />
      <ProgrammesSection />
      <InstitutionNetwork />
     { /* <Testimonials />  */}
     { /* <Admissions /> */}
      <Contact />
      <Footer />
    </main>
  );
}