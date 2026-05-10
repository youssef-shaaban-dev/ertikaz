"use client";
import { useTranslations } from "next-intl";
import { CheckCircle2, Quote, Target, Rocket, Award, Shield, Star, Lightbulb, Eye } from "lucide-react";




export default function PhilosophyGrid() {
  const t = useTranslations("About");

  return (
    <section className="py-16 bg-[#F8FAFC] relative z-10 overflow-hidden px-4 sm:px-6 lg:px-12">
      {/* Decorative abstract backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* The Bento-style Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
          
          {/* ========================================== */}
          {/* CARD 1: EXCELLENCE IN WORK (Spans 2 cols on desktop) */}
          {/* ========================================== */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
            <div>
              {/* Replicating user header banner look on top left of card */}
              <div className="relative inline-flex items-center gap-3 mb-6">
                <div className="absolute -bottom-1 left-0 w-full h-5 bg-[#54c4f3]/20 rounded-full -z-0" />
                <h3 className="text-2xl sm:text-3xl font-black text-blue-950 relative z-10">
                  {t("exc_title")}
                </h3>
                <div className="flex items-end gap-1 shrink-0">
                  <div className="w-3.5 h-8 bg-[#54c4f3] rounded-full" />
                  <div className="w-3.5 h-5 bg-[#86d8f7] rounded-full" />
                </div>
              </div>

              {/* Horizontal/compact Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="p-4 rounded-2xl bg-slate-50/80 hover:bg-sky-50 border border-slate-100 group/pill transition-colors flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-[#54c4f3]/10 flex items-center justify-center text-[#54c4f3] group-hover/pill:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-[15px] font-black text-blue-950">{t(`exc_${num}_label`)}</span>
                    </div>
                    <p className="text-[13px] font-bold text-slate-500 leading-snug mt-1">
                      {t(`exc_${num}_desc`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unified Quote Block tucked neatly at bottom of this wide card */}
            <div className="relative bg-[#F8FAFC] border-l-4 border-[#54c4f3] rounded-r-2xl p-5 mt-auto overflow-hidden group-hover:bg-sky-50/30 transition-colors">
              <Quote className="absolute -right-2 -top-2 w-16 h-16 text-slate-200/30 -z-0 transform rotate-12" />
              <p className="text-[14px] sm:text-base text-blue-900 font-black leading-relaxed relative z-10 italic">
                “{t("exc_quote")}”
              </p>
            </div>
          </div>

          {/* ========================================== */}
          {/* CARD 2: OUR VISION (Spans 1 col) */}
          {/* ========================================== */}
          <div className="bg-gradient-to-br from-[#54c4f3] to-sky-600 rounded-3xl p-6 sm:p-8 text-white flex flex-col items-center text-center justify-center group hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-400/20 transition-all duration-500">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div className="relative inline-block mb-4">
              <div className="absolute -bottom-1 left-0 w-full h-4 bg-black/10 rounded-full -z-10" />
              <h3 className="text-2xl font-black">{t("vision_title")}</h3>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed font-bold text-white/90 text-balance">
              {t("vision_desc")}
            </p>
          </div>

          {/* ========================================== */}
          {/* CARD 3: OUR MISSION (Spans 1 col) */}
          {/* ========================================== */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 p-6 sm:p-8 text-center flex flex-col items-center justify-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
            <div className="w-14 h-14 bg-[#54c4f3]/10 rounded-2xl flex items-center justify-center mb-6 text-[#54c4f3] group-hover:-rotate-6 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <div className="relative inline-block mb-4">
              <div className="absolute -bottom-1 left-0 w-full h-4 bg-[#54c4f3]/20 rounded-full -z-10" />
              <h3 className="text-2xl font-black text-blue-950">{t("mission_title")}</h3>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed font-bold text-slate-600">
              {t("mission_desc")}
            </p>
          </div>

          {/* ========================================== */}
          {/* CARD 4: OUR GOALS (Spans 2 cols) */}
          {/* ========================================== */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 p-6 sm:p-8 group hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6">
            
            {/* Compact Title Side */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-3">
              <div className="w-12 h-12 bg-blue-950 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-950/20">
                <Award className="w-6 h-6" />
              </div>
              <div className="relative">
                <div className="absolute -bottom-1 left-0 w-full h-4 bg-[#54c4f3]/20 rounded-full -z-10" />
                <h3 className="text-2xl font-black text-blue-950">{t("goals_title")}</h3>
              </div>
            </div>

            {/* Distinct Grid of compact goals pills */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: 1, icon: <Star className="w-4 h-4" /> },
                { key: 2, icon: <Lightbulb className="w-4 h-4" /> },
                { key: 3, icon: <Shield className="w-4 h-4" /> },
                { key: 4, icon: <Rocket className="w-4 h-4" /> },
              ].map((goal) => (
                <div key={goal.key} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100/50 hover:bg-sky-50 hover:border-sky-100 transition-colors group/goal">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#54c4f3] border border-slate-100 shadow-sm group-hover/goal:bg-[#54c4f3] group-hover/goal:text-white transition-all">
                    {goal.icon}
                  </div>
                  <div className="text-right rtl:text-right ltr:text-left">
                    <div className="text-[14px] font-black text-blue-950">{t(`goal_${goal.key}_label`)}</div>
                    <div className="text-[11px] font-bold text-slate-500 line-clamp-1">{t(`goal_${goal.key}_desc`)}</div>
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
