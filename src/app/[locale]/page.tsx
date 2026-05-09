import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import AboutSection from "@/components/home/AboutSection";
import DisassemblySection from "@/components/home/DisassemblySection";
import CatalogSection from "@/components/home/CatalogSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StatsSection from "@/components/home/StatsSection";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="bg-linear-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <HeroSection locale={locale} />
      <ClientsSection locale={locale} />
      <AboutSection locale={locale} />
      <DisassemblySection locale={locale} />
      <CatalogSection locale={locale} />
      <ProjectsSection locale={locale} />
      <StatsSection locale={locale} />
    </main>
  );
}
