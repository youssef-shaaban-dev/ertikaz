import Image from "next/image";
import { useTranslations } from "next-intl";
import { Layers } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function CatalogSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";

  return (
    <section id="catalog" className="py-32 bg-[#f0f8ff] border-y border-sky-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            <Layers className="w-4 h-4" />
            <span>
              {isRtl ? "أنظمة تكييف عالمية معتمدة" : "GLOBAL HVAC BRANDS"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
            {t("catalog_title")}
          </h2>
          <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold">
            {t("catalog_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl overflow-hidden bg-white border border-sky-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between text-right rtl:text-right ltr:text-left">
            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-sky-50 text-blue-700">
                {isRtl ? "أنظمة متعددة المناطق" : "Multi-Zone VRF"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_1_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_1_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                DAIKIN AUTHORIZED
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-full transition-all"
              >
                {isRtl ? "اطلب عرض سعر" : "Inquire"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border-2 border-blue-500 shadow-md hover:shadow-2xl transition-all group flex flex-col justify-between relative text-right rtl:text-right ltr:text-left">
            <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
              {isRtl ? "الأكثر طلباً" : "BEST SELLER"}
            </div>

            <div className="relative w-full h-[200px] overflow-hidden bg-slate-50">
              <Image
                src="/modern_ac_unit.png"
                alt="Modern Luxury Air Conditioner"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-w-720px) 100vw, 33vw"
              />
            </div>

            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-50 text-blue-700">
                {isRtl ? "تكييف مخفي كونسيلد" : "Concealed Slim Split"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_3_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_3_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                GREE APPROVED
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-blue-600 text-white hover:bg-blue-700 rounded-full transition-all shadow-md"
              >
                {isRtl ? "طلب مقاس ومعاينة" : "Inquire"}
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-white border border-sky-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between text-right rtl:text-right ltr:text-left">
            <div className="p-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold bg-orange-50 text-orange-700">
                {isRtl ? "مشاريع وسعات ضخمة" : "High Capacity Chiller"}
              </div>
              <h3 className="text-2xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
                {t("unit_2_title")}
              </h3>
              <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
                {t("unit_2_desc")}
              </p>
            </div>
            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-sky-50">
              <span className="text-xs font-bold text-sky-600">
                CARRIER PARTNER
              </span>
              <a
                href="#contact"
                className="px-5 py-2 text-xs font-extrabold bg-sky-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-full transition-all"
              >
                {isRtl ? "اطلب عرض سعر" : "Inquire"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
