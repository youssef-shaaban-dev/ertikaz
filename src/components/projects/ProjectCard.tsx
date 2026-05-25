"use client";

import Image from "next/image";
import { Eye, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  isRtl: boolean;
}

export default function ProjectCard({ project, onClick, isRtl }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col justify-between h-[450px]"
    >
      {/* Image wrapper */}
      <div className="relative w-full h-[280px] overflow-hidden bg-slate-50">
        <Image
          src={project.mainImage}
          alt={isRtl ? project.titleAr : project.titleEn}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

        {/* Overlay Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500 border border-white">
            <Eye className="w-6 h-6" />
          </div>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-4 rtl:right-6 ltr:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[10px] sm:text-xs font-black text-blue-950 shadow-md flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span>{isRtl ? project.locationAr.split("،")[0] : project.locationEn.split(",")[0]}</span>
        </div>
      </div>

      {/* Descriptions */}
      <div className="p-6 sm:p-8 grow flex flex-col justify-between text-right rtl:text-right ltr:text-left">
        <div className="space-y-2">
          <h4 className="text-lg font-black text-blue-950 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            {isRtl ? project.titleAr : project.titleEn}
          </h4>
          <p className="text-blue-900/60 text-xs sm:text-sm font-semibold line-clamp-2 leading-relaxed">
            {isRtl ? project.descAr : project.descEn}
          </p>
        </div>
      </div>
    </div>
  );
}
