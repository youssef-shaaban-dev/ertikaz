import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";
import { categories } from "@/data/services";

const locales = ["ar", "en"];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.map((cat) => ({ locale, category: cat.id }))
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category: categoryId } = await params;
  setRequestLocale(locale);
  const isRtl = locale === "ar";

  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    notFound();
  }

  const categoryTitle = isRtl ? category.titleAr : category.titleEn;
  const categoryDesc = isRtl ? category.descAr : category.descEn;

  return (
    <main className="min-h-screen">
      {/* Spectacular Hero Section with Category Image */}
      <section className="relative h-[380px] sm:h-[480px] w-full flex items-center justify-center text-center text-white overflow-hidden pt-20">
        {/* Category Image as Background */}
        <Image
          src={category.image}
          alt={categoryTitle}
          fill
          className="object-cover object-center transform scale-105"
          sizes="100vw"
          priority
        />
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/75 to-[#f0f9ff]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-5 mt-8 animate-fade-in">
          {/* Breadcrumbs as a floating glassmorphic badge inside the Hero */}
          <div className="inline-flex items-center gap-2 text-xs text-white/70 font-bold bg-white/10 backdrop-blur-md py-2 px-4 rounded-full border border-white/15 mx-auto">
            <Link href={`/${locale}`} className="hover:text-blue-300 transition-colors">
              {isRtl ? "الرئيسية" : "Home"}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/services`} className="hover:text-blue-300 transition-colors">
              {isRtl ? "خدماتنا" : "Services"}
            </Link>
            <span>/</span>
            <span className="text-sky-300">{categoryTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-sm text-white">
            {categoryTitle}
          </h1>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-sm">
            {categoryDesc}
          </p>
        </div>
      </section>

      {/* Sub-services Section Underneath */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-20">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 border-b border-sky-100 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/60">
            <Layers className="w-4 h-4" />
            <span>{isRtl ? "الأنظمة والخدمات الفرعية" : "SUB-SERVICES & SYSTEMS"}</span>
          </div>

          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-xs sm:text-sm font-extrabold rounded-full border border-sky-100 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {isRtl ? (
              <>
                <ArrowRight className="w-4 h-4" />
                <span>العودة للأقسام الرئيسية</span>
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Services</span>
              </>
            )}
          </Link>
        </div>

        {/* Sub-services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {category.subServices.map((subService) => (
            <Link
              key={subService.id}
              href={`/${locale}/services/${category.id}/${subService.id}`}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-sky-100/80 shadow-lg hover:shadow-2xl hover:border-blue-200/80 transition-all duration-500 flex flex-col justify-between text-right rtl:text-right ltr:text-left h-[440px]"
            >
              {/* Subservice Image */}
              <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                <Image
                  src={subService.image}
                  alt={isRtl ? subService.titleAr : subService.titleEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors duration-300">
                    {isRtl ? subService.titleAr : subService.titleEn}
                  </h3>
                  <p className="text-blue-900/60 text-xs sm:text-sm leading-relaxed font-semibold line-clamp-3">
                    {isRtl ? subService.descAr : subService.descEn}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-sky-50 mt-4">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-blue-600 transition-colors">
                    {isRtl ? "عرض التفاصيل والمواصفات" : "View Full Details"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform rtl:group-hover:-translate-x-1 ltr:group-hover:translate-x-1 shadow-sm">
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
