import { Building, Briefcase, Layers, Cpu } from "lucide-react";

interface SectionProps {
  locale: string;
}

export default function ProjectSectorsSection({ locale }: SectionProps) {
  const isRtl = locale === "ar";

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
          <Building className="w-4 h-4" />
          <span>{isRtl ? "مشاريعنا منفذة بالمملكة" : "PROJECT SECTORS"}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-blue-950">
          {isRtl ? "أين يتم تطبيق أنظمة ارتكاز؟" : "Engineering Projects Sectors"}
        </h2>
        <p className="text-blue-900/70 text-lg max-w-2xl mx-auto font-semibold">
          {isRtl
            ? "حلول تكييف كهروميكانيكية متخصصة مصممة لكافة المساحات والقطاعات."
            : "We deliver tailored thermodynamic MEP engineering for all architectural sectors."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Building className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "الفلل والقصور السكنية" : "Luxury Villas & Palaces"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Briefcase className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "المجمعات والمولات" : "Commercial Malls"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Layers className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "الفنادق والأبراج السكنية" : "Hotels & Residential Towers"}
          </h4>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-sky-100 text-center space-y-3 shadow-sm hover:border-sky-300 hover:shadow transition-all">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto">
            <Cpu className="w-5 h-5" />
          </div>
          <h4 className="font-extrabold text-sm sm:text-base text-blue-950">
            {isRtl ? "المصانع والمستودعات" : "Factories & Warehouses"}
          </h4>
        </div>
      </div>
    </section>
  );
}
