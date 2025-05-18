"use client";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-[#b7a47a] scroll-smooth">
      <NavBar />
      <HeroSection />
      <ProductSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
