"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Home } from "lucide-react";

import { projectsList, Project, CategoryFilter } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectLightbox from "./ProjectLightbox";

export default function ProjectsPageClient({ locale }: { locale: string }) {
  const isRtl = locale === "ar";
  
  // State variables
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Derived state: Calculate filtered list dynamically on render
  const filteredProjects = selectedCategory === "all"
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  // Lock body scroll on active modal to maintain scroll sanity
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeProject]);

  // Slider navigation handlers
  const openSlider = (project: Project) => {
    setActiveProject(project);
    setCurrentSlideIndex(0);
  };

  const closeSlider = () => {
    setActiveProject(null);
  };

  const nextSlide = () => {
    if (!activeProject) return;
    setCurrentSlideIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevSlide = () => {
    if (!activeProject) return;
    setCurrentSlideIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-blue-950 selection:bg-blue-600 selection:text-white">
      
      {/* Majestic Sub-Page Hero Section */}
      <section className="relative h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Engineering Blueprint"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-blue-950/90 to-slate-50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-5 mt-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white text-xs sm:text-sm font-bold">
            <Link href={`/${locale}`} className="hover:text-sky-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>{isRtl ? "الرئيسية" : "Home"}</span>
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-sky-300">{isRtl ? "معرض مشاريعنا" : "Projects Gallery"}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            {isRtl ? "سجل منجزات ارتكاز" : "Our Projects"}
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            {isRtl
              ? "نستعرض بكل فخر سلة من كبرى المشاريع الكهروميكانيكية والتكييف التي نفذتها ارتكاز عبر ربوع المملكة."
              : "Discover our proud record of major electromechanical, HVAC, and civil defense contracting across Saudi Arabia."}
          </p>
        </div>
      </section>

      {/* Main Projects Grid & Filter */}
      <section className="py-16 max-w-7xl mx-auto px-6 relative z-10 -mt-16">
        <div className="bg-white rounded-[3rem] shadow-xl border border-sky-100/60 p-8 sm:p-12 space-y-12">
          
          {/* Filter Toolbar */}
          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            isRtl={isRtl}
          />

          {/* Active Projects List */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => openSlider(project)}
                  isRtl={isRtl}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center text-slate-400">
              <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-40 text-blue-600" />
              <p className="text-lg font-bold">
                {isRtl ? "لا توجد مشاريع مضافة في هذا التصنيف حالياً." : "No projects in this category currently."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Modal/Image Slider Popup */}
      {activeProject && (
        <ProjectLightbox
          activeProject={activeProject}
          currentSlideIndex={currentSlideIndex}
          onClose={closeSlider}
          onNext={nextSlide}
          onPrev={prevSlide}
          onIndicatorClick={setCurrentSlideIndex}
          isRtl={isRtl}
        />
      )}

    </div>
  );
}
