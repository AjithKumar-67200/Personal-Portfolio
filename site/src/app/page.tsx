import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <main className="bg-black">
      <HeroSection />
      <div className="relative z-20">
        <ProjectsSection />
        <SkillsSection />
      </div>
    </main>
  );
}
