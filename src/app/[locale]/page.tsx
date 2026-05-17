import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import AboutSection from "@/components/home/AboutSection";
import PhilosophyGrid from "@/components/home/PhilosophyGrid";
import PipelineSection from "@/components/home/PipelineSection";
import SectorsSection from "@/components/home/SectorsSection";
import CatalogSection from "@/components/home/CatalogSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";

export default async function Page() {
  return (
    <main className="bg-linear-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <HeroSection />
      <AboutSection />
      <PhilosophyGrid />
      <PipelineSection />
      <ClientsSection />
      <SectorsSection />
      <CatalogSection />
      <ProjectsSection />
      <CtaSection />
      <StatsSection />
    </main>
  );
}
