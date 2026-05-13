"use client";

import Image from "next/image";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectLightboxProps {
  activeProject: Project;
  currentSlideIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onIndicatorClick: (index: number) => void;
  isRtl: boolean;
}

export default function ProjectLightbox({
  activeProject,
  currentSlideIndex,
  onClose,
  onNext,
  onPrev,
  onIndicatorClick,
  isRtl,
}: ProjectLightboxProps) {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in bg-slate-950/80 backdrop-blur-xl">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col justify-between max-h-[90vh]">
        
        {/* Header / Meta Line */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 relative z-20">
          <div className="text-white text-right rtl:text-right ltr:text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-black">
              {isRtl ? activeProject.titleAr : activeProject.titleEn}
            </h3>
            <div className="flex items-center gap-4 text-xs font-bold text-white/60">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{isRtl ? activeProject.locationAr : activeProject.locationEn}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>{isRtl ? activeProject.dateAr : activeProject.dateEn}</span>
              </span>
            </div>
          </div>

          {/* Rotating Hover Close Button */}
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 transform hover:rotate-90 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Slider / Image Viewer */}
        <div className="relative flex-grow flex items-center justify-center min-h-[300px] sm:min-h-[450px] overflow-hidden group/slider">
          {/* Active Image */}
          <div className="relative w-full h-full aspect-video max-h-[50vh] overflow-hidden">
            <Image
              src={activeProject.images[currentSlideIndex].url}
              alt={isRtl ? activeProject.images[currentSlideIndex].captionAr : activeProject.images[currentSlideIndex].captionEn}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Navigation Left Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 shadow-md transform ltr:group-hover/slider:translate-x-1 rtl:group-hover/slider:-translate-x-1"
          >
            {isRtl ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          {/* Navigation Right Arrow */}
          <button
            onClick={onNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-blue-950 flex items-center justify-center transition-all duration-300 border border-white/20 shadow-md transform ltr:group-hover/slider:-translate-x-1 rtl:group-hover/slider:translate-x-1"
          >
            {isRtl ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Floating Caption Overlay */}
          <div className="absolute bottom-4 left-6 right-6 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 text-center text-white max-w-xl mx-auto">
            <p className="text-xs sm:text-sm font-black tracking-wide leading-relaxed">
              {isRtl
                ? activeProject.images[currentSlideIndex].captionAr
                : activeProject.images[currentSlideIndex].captionEn}
            </p>
          </div>
        </div>

        {/* Slider Indicators Footer */}
        <div className="p-6 border-t border-white/10 flex items-center justify-center gap-2.5">
          {activeProject.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onIndicatorClick(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlideIndex === idx 
                  ? "w-8 bg-sky-400" 
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
