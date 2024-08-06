import AboutMeSection from "@/components/sections/about_me";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ProjectSections from "@/components/sections/projects";
import SkillsSection from "@/components/sections/skills";
import ExperiencesSection from "@/components/sections/experiences";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-white dark:bg-neutral-950">
      {/* Header */}
      <HeroSection />

      {/* About Me*/}

      <AboutMeSection />

      {/* Skills */}

      <SkillsSection />

      {/* Projects */}
      <ProjectSections />

      {/* More about... */}
      <ExperiencesSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
