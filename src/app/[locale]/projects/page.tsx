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
    title: isRtl ? "معرض أعمال ومشاريع ارتكاز" : "Ertikaz Engineering Projects Gallery",
    description: isRtl
      ? "تصفح سجل كبرى مشاريع التكييف والتبريد والمقاولات الكهروميكانيكية المعتمدة التي نفذتها شركة ارتكاز بالمملكة العربية السعودية."
      : "Browse the engineering portfolio of premier HVAC, electromechanical, and fire protection projects implemented by Ertikaz in Saudi Arabia.",
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
