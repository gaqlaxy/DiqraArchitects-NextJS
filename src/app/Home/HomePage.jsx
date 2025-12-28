"use client";
import OhHerosection from "@/app/components/OhHeroSection";
import FeaturedWorks from "@/app/components/FeaturedWorks";
import ProcessSection from "@/app/components/ProcessSection";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import AboutSection from "../components/About";


export default function HomePage() {
  return (
    <>
      <OhHerosection />
      {/* <Herosection /> */}
      <AboutSection />
      <FeaturedWorks />
      <ProcessSection />
      <Services />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
