import { useTranslations } from "next-intl";

interface SectionProps {
  locale: string;
}

export default function StatsSection({ locale }: SectionProps) {
  const t = useTranslations("Index");

  return (
    <section className="py-24 bg-blue-900 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_1_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_1_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_2_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_2_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_3_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_3_label")}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl sm:text-6xl font-black text-sky-300">
            {t("stat_4_num")}
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-sky-100 uppercase tracking-wider">
            {t("stat_4_label")}
          </p>
        </div>
      </div>
    </section>
  );
}
