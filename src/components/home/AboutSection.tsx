import Image from "next/image";
import { useTranslations } from "next-intl";
import { Wind, Flame, Droplet, Zap } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("About");

  const inlineServices = [
    {
      title: t("svc_1_title"),
      desc: t("svc_1_desc"),
      icon: <Wind className="w-6 h-6" />,
    },
    {
      title: t("svc_2_title"),
      desc: t("svc_2_desc"),
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: t("svc_3_title"),
      desc: t("svc_3_desc"),
      icon: <Droplet className="w-6 h-6" />,
    },
    {
      title: t("svc_4_title"),
      desc: t("svc_4_desc"),
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative z-20 overflow-hidden px-6 lg:px-12">
      {/* Abstract top corner glow/wave element */}
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-[35%] h-64 bg-sky-400/10 rounded-bl-[80px] -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Compact Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* 1. Architectural Visual Column */}
          <div className="lg:col-span-5 relative h-[300px] sm:h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-xl shadow-sky-100/50 order-2 lg:order-1 group">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Modern glass architecture"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
          </div>

          {/* 2. Content Container */}
          <div className="lg:col-span-7 flex flex-col justify-center text-right rtl:text-right ltr:text-left order-1 lg:order-2">
            
            {/* Header with bespoke twin-drop fluid branding graphic */}
            <div className="flex items-center gap-3 mb-6 rtl:justify-start ltr:justify-end rtl:flex-row ltr:flex-row-reverse">
              <h2 className="text-3xl sm:text-4xl font-black text-blue-950 leading-tight tracking-tight">
                {t("intro_title")}
              </h2>
              <div className="flex items-end gap-1">
                <div className="w-4 h-8 bg-[#54c4f3] rounded-full" />
                <div className="w-4 h-5 bg-[#86d8f7] rounded-full" />
              </div>
            </div>

            {/* Focused Paragraph Block using dynamic translation */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-semibold text-justify mb-10">
              {t("intro_desc")}
            </p>

            {/* Nested Nested Micro-Grid for Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pr-2">
              {inlineServices.map((svc, idx) => (
                <div key={idx} className="flex items-start gap-4 rtl:flex-row ltr:flex-row-reverse group hover:bg-sky-50/50 p-2 rounded-2xl transition-all duration-300">
                  
                  {/* Dynamic Overflow Circle Icon Aesthetic */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#54c4f3] rounded-full group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center text-slate-900 drop-shadow-sm transform -translate-x-2 rtl:translate-x-2">
                      <div className="scale-[1.1]">
                        {svc.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="flex-1">
                    <h4 className="text-base font-black text-slate-900 mb-1 leading-tight group-hover:text-[#54c4f3] transition-colors">
                      {svc.title}
                    </h4>
                    <p className="text-slate-500 text-[12px] font-bold leading-relaxed line-clamp-2">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
