"use client";

import { useLocale } from "next-intl";
import { 
  Building,
  Home,
  Factory,
  Activity,
  Bed,
  Server,
  HardHat,
  Cog,
  Target
} from "lucide-react";

export default function SectorsSection() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Target sectors (8 core market sectors)
  const sectors = [
    {
      titleAr: "القطاع التجاري والإداري",
      titleEn: "Commercial & Offices",
      descAr: "المجمعات التجارية الكبرى، المعارض الفاخرة، والمكاتب ومراكز الأعمال الإدارية.",
      descEn: "Malls, high-end retail showrooms, administrative centers, and corporate offices.",
      icon: <Building className="w-7 h-7" />
    },
    {
      titleAr: "القطاع السكني الفاخر",
      titleEn: "Residential Palaces & Villas",
      descAr: "المجمعات السكنية المتكاملة (Compounds)، القصور الخاصة، والفلل الراقية والبيوت الذكية.",
      descEn: "Gated residential compounds, private palaces, high-end villas, and smart homes.",
      icon: <Home className="w-7 h-7" />
    },
    {
      titleAr: "المستودعات والقطاع اللوجستي",
      titleEn: "Warehouses & Logistics",
      descAr: "المستودعات الصناعية الضخمة، المخازن الجافة والباردة، وهناجر الطائرات الكبرى.",
      descEn: "Massive industrial warehouses, dry/cold storages, and major aircraft hangars.",
      icon: <Factory className="w-7 h-7" />
    },
    {
      titleAr: "المستشفيات والمراكز الطبية",
      titleEn: "Hospitals & Healthcare",
      descAr: "المستشفيات الكبرى، المستوصفات التخصصية، والمراكز الطبية وعيادات جراحة اليوم الواحد.",
      descEn: "Major state-of-the-art hospitals, private clinics, and advanced surgical wellness hubs.",
      icon: <Activity className="w-7 h-7" />
    },
    {
      titleAr: "الفنادق والقرى السياحية",
      titleEn: "Hotels & Tourism Resorts",
      descAr: "الفنادق العالمية، القرى والمنتجعات السياحية الفاخرة، والمنشآت الترفيهية العامة.",
      descEn: "International star hotels, luxury beach resorts, and public leisure/entertainment complexes.",
      icon: <Bed className="w-7 h-7" />
    },
    {
      titleAr: "مراكز البيانات والغرف المعقمة",
      titleEn: "Data Centers & Clean Rooms",
      descAr: "مراكز البيانات العملاقة، غرف سيرفرات البنوك، ومختبرات الأبحاث الطبية والصيدلانية المعقمة.",
      descEn: "Enterprise-scale data hubs, high-security server rooms, and ISO pharmaceutical cleanrooms.",
      icon: <Server className="w-7 h-7" />
    },
    {
      titleAr: "محطات البنية التحتية والحكومية",
      titleEn: "Infrastructure & Civic Projects",
      descAr: "محطات الخدمات المركزية، مشاريع المرافق الكبرى، والمباني والقطاعات الحكومية الإستراتيجية.",
      descEn: "Centralized service utility plants, public works, and strategic governmental installations.",
      icon: <HardHat className="w-7 h-7" />
    },
    {
      titleAr: "مصانع وخطوط الإنتاج",
      titleEn: "Production Factories",
      descAr: "المصانع الإنتاجية، مصانع الأغذية والأدوية، والمرافق الصناعية المساندة.",
      descEn: "Process manufacturing facilities, food & beverage factories, and industrial auxiliary support.",
      icon: <Cog className="w-7 h-7" />
    }
  ];

  return (
    <section id="sectors" className="py-24 bg-white relative z-20 overflow-hidden px-6 lg:px-12">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-96 bg-[#f0f9ff] rounded-bl-[120px] -z-10 blur-2xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Decorative Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/60">
              <Target className="w-4 h-4" />
              <span>{isRtl ? "القطاعات المستهدفة والمجالات" : "TARGET SECTORS & MARKETS"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 leading-tight tracking-tight">
              {isRtl ? "القطاعات المستهدفة والمجالات" : "TARGET SECTORS & MARKETS"}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
              {isRtl 
                ? "نمتلك الجاهزية الهندسية لتنفيذ كافة النطاقات الإنشائية والمواصفات القياسية المطلوبة في مختلف المشاريع التنموية بالمملكة." 
                : "Equipped with specialized engineering readiness to serve all structural frameworks and standards within Saudi Arabia's fast growing sectors."}
            </p>
          </div>

          {/* Dynamic Bento Grid of Sectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sect, index) => (
              <div 
                key={index} 
                className="group relative p-6 sm:p-8 bg-slate-50/60 hover:bg-blue-950 border border-slate-100/80 rounded-3xl transition-all duration-500 flex flex-col gap-4 text-right rtl:text-right ltr:text-left hover:shadow-xl overflow-hidden"
              >
                {/* Fluid Background Hover Blob */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-blue-900 rounded-full group-hover:scale-[4] group-hover:bg-blue-900/20 transition-transform duration-700 opacity-0 group-hover:opacity-100 -z-10" />

                {/* Sector Icon with circular badge */}
                <div className="w-14 h-14 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-[#54c4f3] group-hover:text-white transition-all duration-500">
                  {sect.icon}
                </div>

                <div className="space-y-2">
                  <h4 className="font-black text-base sm:text-lg text-blue-950 group-hover:text-white transition-colors duration-300">
                    {isRtl ? sect.titleAr : sect.titleEn}
                  </h4>
                  <p className="text-xs sm:text-[13px] font-medium text-slate-500 group-hover:text-blue-100/80 leading-relaxed transition-colors duration-300">
                    {isRtl ? sect.descAr : sect.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
