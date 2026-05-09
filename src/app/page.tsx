import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import HeroSection from "@/components/sections/Hero/HeroSection";
import AboutSection from "@/components/sections/About/AboutSection";
import SkillsSection from "@/components/sections/Skills/SkillsSection";
import ExperienceSection from "@/components/sections/Experience/ExperienceSection";
import ProjectsSection from "@/components/sections/Projects/ProjectsSection";
import ContactSection from "@/components/sections/Contact/ContactSection";
import TestimonialsSection from "@/components/sections/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
