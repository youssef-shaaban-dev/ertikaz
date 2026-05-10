"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Layers, ArrowLeft, ArrowRight } from "lucide-react";
import { categories, getIcon } from "@/data/services";


export default function CatalogSection() {
  const t = useTranslations("Catalog");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section id="services" className="py-24 sm:py-32 bg-linear-to-b from-[#f0f8ff] via-[#ffffff] to-[#e8f4fd] border-y border-sky-100 relative z-20 overflow-hidden">
      {/* Decorative dynamic background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/60">
            <Layers className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-blue-900/60 text-base sm:text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
            {t("desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/${locale}/services/${category.id}`}
              className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-sky-100/80 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between text-right rtl:text-right ltr:text-left h-[500px]"
            >
              {/* Category Image */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src={category.image}
                  alt={isRtl ? category.titleAr : category.titleEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />
                
                {/* Glowing Floating Icon */}
                <div className="absolute bottom-0 translate-y-1/2 rtl:left-6 ltr:right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white z-10">
                  {getIcon(category.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 pt-12 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors duration-300">
                    {isRtl ? category.titleAr : category.titleEn}
                  </h3>
                  <p className="text-blue-900/60 text-sm leading-relaxed font-semibold">
                    {isRtl ? category.descAr : category.descEn}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-sky-50 mt-6">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-blue-600 transition-colors">
                    {t("explore")}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform rtl:group-hover:-translate-x-1.5 ltr:group-hover:translate-x-1.5 shadow-sm">
                    {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
