"use client";

import { useLocale } from "next-intl";
import { 
  PenTool, 
  FileCheck, 
  GitMerge, 
  Wrench, 
  FileSpreadsheet, 
  Settings,
  Rocket
} from "lucide-react";

export default function PipelineSection() {
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Company operational execution journey (6 steps)
  const services = [
    {
      titleAr: "التصاميم والمخططات التنفيذية",
      titleEn: "Design & Shop Drawings",
      descAr: "إعداد المخططات التنفيذية المتكاملة والحسابات الهيدروليكية والحرارية الدقيقة.",
      descEn: "Drafting precise execution shop drawings, hydraulic grids, and thermal load calculations.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      titleAr: "اعتماد المواد والمعدات",
      titleEn: "Material Submittals",
      descAr: "اختيار وتوريد المعدات والأنظمة الكهروميكانيكية بأعلى المعايير والمواصفات المعتمدة.",
      descEn: "Procuring and approving elite electro-mechanical systems matching local specifications.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      titleAr: "التنسيق الفني الموحد",
      titleEn: "Technical Coordination",
      descAr: "تطوير مخططات التنسيق (Coordination) الشاملة لمنع أي تداخل ميداني بين الأنظمة المختلفة.",
      descEn: "Resolving layout conflicts through synchronized multi-disciplinary MEP coordination schemas.",
      icon: <GitMerge className="w-6 h-6" />
    },
    {
      titleAr: "التوريد والتركيب الاحترافي",
      titleEn: "Supply & Installation",
      descAr: "التنفيذ الميداني بكفاءة هندسية وسرعة فائقة عبر فرق فنية ذات خبرة عريقة.",
      descEn: "Professional site implementation by industry-vetted specialized engineering crews.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      titleAr: "مخططات As-Built والكتيبات",
      titleEn: "As-Built & O&M Manuals",
      descAr: "إعداد المخططات كما نفذت فعلياً وتسليم الكتيبات الشاملة للتشغيل والصيانة الوقائية.",
      descEn: "Delivering final physical as-built drawings and comprehensive operational maintenance manuals.",
      icon: <FileSpreadsheet className="w-6 h-6" />
    },
    {
      titleAr: "الاختبارات والتشغيل الدائم",
      titleEn: "Testing & Maintenance",
      descAr: "فحص وضمان أداء الأنظمة بالكامل، والتشغيل التجاري وتقديم برامج الصيانة الدورية.",
      descEn: "Full performance startup testing, system commissioning, and scheduled maintenance visits.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-white relative z-20 overflow-hidden px-6 lg:px-12">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[40%] h-96 bg-[#f0f9ff] rounded-bl-[120px] -z-10 blur-2xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Decorative Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#54c4f3] bg-sky-50 px-4 py-2 rounded-full border border-[#54c4f3]/20">
              <Rocket className="w-4 h-4" />
              <span>{isRtl ? "خدمات ومسار تنفيذ الشركة" : "OUR EXECUTION PIPELINE"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 leading-tight tracking-tight">
              {isRtl ? "كيف نُدير ونُنفذ المشاريع الكهروميكانيكية؟" : "How We Deliver Complete MEP Projects"}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
              {isRtl 
                ? "نطبق دورة تنفيذ هندسية صارمة ومتكاملة تضمن جودة المخرجات من الفكرة المبدئية وحتى التشغيل والخدمات المستدامة." 
                : "We apply an uncompromising and seamless engineering workflow securing absolute quality from blueprint to daily operation."}
            </p>
          </div>

          {/* The Journey Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connector line hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-sky-100 to-transparent -translate-y-1/2 -z-10" />

            {services.map((svc, index) => (
              <div 
                key={index} 
                className="group bg-white border border-slate-100/80 rounded-[2rem] p-8 shadow-lg shadow-slate-100/60 hover:shadow-2xl hover:shadow-sky-100/60 transition-all duration-500 flex flex-col text-right rtl:text-right ltr:text-left hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Numerical Badge */}
                <div className="absolute top-6 ltr:right-8 rtl:left-8 text-5xl font-black text-slate-100/80 group-hover:text-sky-100/50 transition-colors select-none">
                  0{index + 1}
                </div>

                {/* Icon aesthetic */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-sky-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {svc.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-black text-blue-950 mb-3 group-hover:text-blue-600 transition-colors pr-2">
                  {isRtl ? svc.titleAr : svc.titleEn}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {isRtl ? svc.descAr : svc.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
