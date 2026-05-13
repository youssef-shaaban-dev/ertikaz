"use client";

import { Filter } from "lucide-react";
import { CategoryFilter, categoriesTabs } from "@/data/projects";

interface ProjectFilterProps {
  selectedCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  isRtl: boolean;
}

export default function ProjectFilter({ selectedCategory, onCategoryChange, isRtl }: ProjectFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8">
      <div className="flex items-center gap-2 text-blue-950">
        <Filter className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-black">{isRtl ? "تصفية وتحديد المشاريع" : "Filter Projects"}</h3>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categoriesTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onCategoryChange(tab.id)}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 ${
              selectedCategory === tab.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "bg-slate-50 hover:bg-slate-100 text-blue-950 border border-slate-100"
            }`}
          >
            {isRtl ? tab.labelAr : tab.labelEn}
          </button>
        ))}
      </div>
    </div>
  );
}
