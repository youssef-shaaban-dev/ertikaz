import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DisassemblySection from "@/components/DisassemblySection";
import ServicesSection from "@/components/ServicesSection";
import CatalogSection from "@/components/CatalogSection";
import ProjectSectorsSection from "@/components/ProjectSectorsSection";
import StatsSection from "@/components/StatsSection";
// import WhatsAppInquirySection from "@/components/WhatsAppInquirySection";
import FooterSection from "@/components/FooterSection";
import { Phone } from "lucide-react";
import StickyWhatsapp from "@/components/StickyWhatsapp";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] via-[#ffffff] to-[#e6f4fe] text-blue-950 min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <HeaderSection locale={locale} />
      <HeroSection locale={locale} />
      <AboutSection locale={locale} />
      <DisassemblySection locale={locale} />
      <ServicesSection locale={locale} />
      <CatalogSection locale={locale} />
      <ProjectSectorsSection locale={locale} />
      <StatsSection locale={locale} />
      {/* <WhatsAppInquirySection locale={locale} /> */}
      <StickyWhatsapp />
      <FooterSection locale={locale} />
    </div>
  );
}
