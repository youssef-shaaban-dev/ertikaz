import { setRequestLocale } from "next-intl/server";
import ProjectsPageClient from "@/components/projects/ProjectsPageClient";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRtl = locale === "ar";
  return {
    title: isRtl 
      ? "مشاريع الارتكاز الدولية للمقاولات - أعمال MEP و HVAC" 
      : "Ertikaz Projects | MEP & HVAC Works in Saudi Arabia",
    description: isRtl
      ? "أهم المشاريع المنفذة من شركة الارتكاز الدولية في أعمال MEP وHVAC - التكييف، مكافحة الحريق، الكهرباء والتهوية في المملكة العربية السعودية."
      : "Explore Ertikaz projects in Saudi Arabia, including MEP, HVAC, fire protection, electrical, ventilation, and gas works.",
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsPageClient locale={locale} />;
}
