import { useEffect } from "react";
import { gsap } from "gsap";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achivements";
import SocialLinks from "@/components/FollowMe";

const Index = () => {
  useEffect(() => {
    gsap.fromTo(
      document.body,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
