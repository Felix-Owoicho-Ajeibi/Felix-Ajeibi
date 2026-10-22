import React, { useEffect } from 'react';
import { X, ExternalLink, ArrowRight, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscussProject: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#102944] rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA] dark:bg-[#0B1F3A]/60">
          <div className="flex items-center gap-2 text-xs font-medium text-[#667085] dark:text-slate-300">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.statusTag}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#667085] hover:text-[#0B1F3A] dark:text-slate-300 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Cover Image */}
          <div className="relative rounded-xl overflow-hidden border border-[#0B1F3A]/10 dark:border-white/10 bg-slate-100 dark:bg-[#0B1F3A]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover aspect-video"
              loading="lazy"
            />
          </div>

          {/* Titles */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#0B1F3A] dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-[#FF8A00] mt-1">
              {project.subtitle}
            </p>
            <p className="text-sm text-[#667085] dark:text-slate-300 mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A]/40 border border-[#0B1F3A]/5 dark:border-white/5 space-y-2">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400">
                The Objective / Challenge
              </h3>
              <p className="text-sm text-[#0B1F3A] dark:text-slate-200 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A]/40 border border-[#0B1F3A]/5 dark:border-white/5 space-y-2">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
                The Solution & Approach
              </h3>
              <p className="text-sm text-[#0B1F3A] dark:text-slate-200 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services Delivered */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400">
              Services Delivered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#0B1F3A] dark:text-slate-200">
              {project.servicesDelivered.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#FF8A00] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack - Quiet inline tags */}
          <div className="space-y-2 pt-2 border-t border-[#0B1F3A]/10 dark:border-white/10">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400">
              Tools & Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-[#0B1F3A] dark:text-slate-300">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#0B1F3A]/10 dark:border-white/10">
            <div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF8A00] hover:text-[#E67A00] transition-colors"
                >
                  <span>Visit Verified URL</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              ) : (
                <span className="text-xs text-[#667085] dark:text-slate-400">
                  Private or institutional case study
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onDiscussProject(
                  project.category === 'Web Design'
                    ? 'Web Design & Development'
                    : project.category === 'Financial Markets'
                    ? 'Financial Market Analysis'
                    : 'AI Automation'
                );
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8A00] hover:bg-[#E67A00] text-white font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
