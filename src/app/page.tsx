import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { AnimatedBackground } from "@/components/ui/Background";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { EducationSection } from "@/components/sections/Education";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-full text-slate-800">
        <AnimatedBackground />
        <ScrollProgress />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
