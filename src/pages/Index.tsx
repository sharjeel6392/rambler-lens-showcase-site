
import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="pt-20">
        {activeSection === "home" && <HomeSection setActiveSection={setActiveSection} />}
        {activeSection === "portfolio" && <PortfolioSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </div>
    </div>
  );
};

export default Index;
