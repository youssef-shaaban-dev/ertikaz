import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, CheckCircle2, Award, Check } from "lucide-react";
import { categories } from "@/data/services";

const locales = ["ar", "en"];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categories.flatMap((cat) =>
      cat.subServices.map((sub) => ({
        locale,
        category: cat.id,
        subservice: sub.id,
      }))
    )
  );
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ locale: string; category: string; subservice: string }>;
}) {
  const { locale, category: categoryId, subservice: subServiceId } = await params;
  setRequestLocale(locale);
  const isRtl = locale === "ar";

  const category = categories.find((c) => c.id === categoryId);
  const subService = category?.subServices.find((s) => s.id === subServiceId);

  if (!category || !subService) {
    notFound();
  }

  const categoryTitle = isRtl ? category.titleAr : category.titleEn;
  const subServiceTitle = isRtl ? subService.titleAr : subService.titleEn;
  const subServiceDesc = isRtl ? subService.descAr : subService.descEn;

  return (
    <main className="min-h-screen">
      {/* Magnificent Hero Section with Sub-service Image */}
      <section className="relative h-[380px] sm:h-[480px] w-full flex items-center justify-center text-center text-white overflow-hidden pt-20">
        {/* Sub-service Image as Background */}
        <Image
          src={subService.image}
          alt={subServiceTitle}
          fill
          className="object-cover object-center transform scale-105"
          sizes="100vw"
          priority
        />
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/90 via-blue-950/75 to-[#f0f9ff]" />

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
            <Link href={`/${locale}/services/${category.id}`} className="hover:text-blue-300 transition-colors">
              {categoryTitle}
            </Link>
            <span>/</span>
            <span className="text-sky-300">{subServiceTitle}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight drop-shadow-sm text-white">
            {subServiceTitle}
          </h1>
          <p className="text-white/80 text-sm sm:text-lg max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-sm">
            {isRtl ? "استكشف المزايا الهندسية والمواصفات الفنية لهذا النظام المتكامل:" : "Explore technical specs and engineering features of this integrated system:"}
          </p>
        </div>
      </section>

      {/* Deep Technical Details Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 relative z-20">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />

        {/* Back Button Line */}
        <div className="flex justify-end mb-12">
          <Link
            href={`/${locale}/services/${category.id}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-700 text-xs sm:text-sm font-extrabold rounded-full border border-sky-100 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {isRtl ? (
              <>
                <ArrowRight className="w-4 h-4" />
                <span>العودة لأنظمة {category.titleAr.split(" ")[1] || "القسم"}</span>
              </>
            ) : (
              <>
                <ArrowLeft className="w-4 h-4" />
                <span>Back to {category.titleEn.split(" ")[0] || "Services"} List</span>
              </>
            )}
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-8 text-right rtl:text-right ltr:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black bg-blue-50 text-blue-700 border border-blue-100">
                {isRtl ? "مواصفات هندسية فائقة الجودة" : "PREMIUM ENGINEERING STANDARD"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 leading-tight">
                {subServiceTitle}
              </h2>
              <p className="text-blue-900/70 text-base leading-relaxed font-semibold border-r-4 border-blue-500 pr-4 rtl:border-r-4 rtl:pr-4 ltr:border-l-4 ltr:pl-4">
                {subServiceDesc}
              </p>
            </div>

            {/* Technical Features & Specifications */}
            <div className="space-y-6">
              <h3 className="text-lg font-black text-blue-950 flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>{isRtl ? "المزايا والمواصفات الفنية للخدمة" : "Technical Features & Specs"}</span>
              </h3>

              <div className="space-y-6">
                {subService.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/60 hover:bg-white border border-sky-50 hover:border-sky-100 p-5 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100/60">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="space-y-1 text-right rtl:text-right ltr:text-left">
                      <h4 className="text-base font-black text-blue-950">
                        {isRtl ? feature.titleAr : feature.titleEn}
                      </h4>
                      <p className="text-blue-900/60 text-xs sm:text-sm leading-relaxed font-semibold">
                        {isRtl ? feature.descAr : feature.descEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button - Anchors to Contact form on home page */}
            <div className="pt-4">
              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-sm sm:text-base font-extrabold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center animate-pulse"
              >
                <span>{isRtl ? "اطلب دراسة ومعاينة مجانية لمشروعك" : "Request Free Consultation"}</span>
                {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative w-full aspect-square lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
            <Image
              src={subService.image}
              alt={subServiceTitle}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-w-1024px) 100vw, 40vw"
              priority
            />
            
            {/* Dark overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating glassmorphic info badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-right rtl:text-right ltr:text-left">
                <h4 className="font-black text-sm text-blue-950">
                  {isRtl ? "اعتماد وجودة هندسية" : "Certified Engineering Quality"}
                </h4>
                <p className="text-[10px] sm:text-xs text-blue-900/60 font-black">
                  {isRtl ? "صيانة وتوريد معتمد بالمملكة" : "Approved Contracting & Supply in KSA"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Systems Taxonomy Lists */}
        {subService.systems && subService.systems.length > 0 && (
          <div className="mt-16 sm:mt-24 border-t border-sky-100 pt-16">
            <div className="flex items-center gap-3 mb-10 rtl:flex-row ltr:flex-row-reverse rtl:justify-start ltr:justify-end">
              <h3 className="text-2xl sm:text-3xl font-black text-blue-950">
                {isRtl ? "الأنظمة والمكونات التفصيلية المشمولة" : "Detailed Systems & Components Covered"}
              </h3>
              <div className="w-2 h-8 bg-blue-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subService.systems.map((sys, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/60 backdrop-blur-sm border border-sky-100 hover:border-blue-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col text-right rtl:text-right ltr:text-left"
                >
                  {/* Top glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10" />
                  
                  <h4 className="text-lg font-black text-blue-950 border-b border-sky-100 pb-4 mb-5 group-hover:text-blue-700 transition-colors">
                    {isRtl ? sys.titleAr : sys.titleEn}
                  </h4>

                  <ul className="space-y-3 flex-grow">
                    {(isRtl ? sys.itemsAr : sys.itemsEn).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 hover:text-slate-950 transition-colors duration-300">
                        <div className="w-5 h-5 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-sky-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                          <span className="w-1.5 h-1.5 bg-current rounded-full" />
                        </div>
                        <span className="font-semibold leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
