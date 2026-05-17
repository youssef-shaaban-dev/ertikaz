"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Briefcase, ArrowLeft, ArrowRight } from "lucide-react";

import { projectsList, Project } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import ProjectLightbox from "../projects/ProjectLightbox";

export default function ProjectsSection() {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Pick 3 flagship projects in the exact order requested by the user
  const featuredProjectIds = ["arasco-aviation-lounge", "airport-kkia-t5", "ceer-factory-rabigh"];
  const featuredProjects = featuredProjectIds
    .map((id) => projectsList.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  // Fallback to first 3 if ids don't match (safety measure)
  const homeProjects = featuredProjects.length === 3 ? featuredProjects : projectsList.slice(0, 3);

  // Modal Slider State
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Prevent background scroll when modal is active
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
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-white border-y border-sky-100/60 relative z-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/60">
            <Briefcase className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-blue-950 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-blue-900/60 text-base sm:text-lg max-w-2xl mx-auto font-semibold leading-relaxed">
            {t("desc")}
          </p>
        </div>

        {/* Dynamic Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openSlider(project)}
              isRtl={isRtl}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-black rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <span>{t("btn_all")}</span>
            {isRtl ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </div>
      </div>

      {/* Glassmorphic Popup Lightbox Modal */}
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
    </section>
  );
}
