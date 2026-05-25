import { setRequestLocale } from "next-intl/server";
import CatalogSection from "@/components/home/CatalogSection";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CatalogSection />
    </>
  );
}
