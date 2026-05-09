import { useTranslations } from "next-intl";
import { Briefcase, Wind, Activity, Shield, Cpu } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function ServicesSection({ locale }: SectionProps) {
  const t = useTranslations("Index");
  const isRtl = locale === "ar";

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-blue-700">
          <Briefcase className="w-4 h-4" />
          <span>
            {isRtl ? "خدماتنا الهندسية المعتمدة" : "OUR CONTRACTING SECTORS"}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
          {t("services_title")}
        </h2>
        <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
          {t("services_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Wind className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_hvac_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_hvac_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Activity className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_plumb_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_plumb_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Shield className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_fire_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_fire_desc")}
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md transition-all group flex gap-6 items-start text-right rtl:text-right ltr:text-left">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Cpu className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-blue-950 group-hover:text-blue-600 transition-colors">
              {t("serv_elec_title")}
            </h3>
            <p className="text-blue-900/70 text-sm leading-relaxed font-semibold">
              {t("serv_elec_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
