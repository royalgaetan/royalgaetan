import AboutMeSection from "@/components/sections/about_me";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ProjectSections from "@/components/sections/projects";
import { FooterSection } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-full overflow-clip bg-white dark:bg-neutral-950">
      {/* Header */}
      <HeroSection />

      {/* Projects */}
      <ProjectSections />

      {/* About Me */}
      <AboutMeSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
