import CatalogSection from "@/components/home/CatalogSection";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <CatalogSection locale={locale} />
    </>
  );
}
