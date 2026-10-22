import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onDiscussProject: (serviceName: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onDiscussProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'Web Design', 'Financial Markets', 'AI Automation'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-white dark:bg-[#0B1F3A]/50 border-t border-[#0B1F3A]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
              Featured Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
              Selected Work & Projects
            </h2>
            <p className="text-sm sm:text-base text-[#667085] dark:text-slate-300">
              A curated selection of verified commercial websites, financial market research, and automated digital workflows built with precision.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Controls, compliant with frontend design skill) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#F5F7FA] dark:bg-[#102944] border border-[#0B1F3A]/10 dark:border-white/10 self-start md:self-end" role="tablist" aria-label="Project filter">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white shadow-xs font-semibold'
                      : 'text-[#667085] dark:text-slate-300 hover:text-[#0B1F3A] dark:hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA]/50 dark:bg-[#102944]/50 hover:bg-white dark:hover:bg-[#102944] hover:shadow-lg transition-all duration-200"
            >
              {/* Image Preview Container */}
              <div
                className="relative overflow-hidden aspect-video bg-slate-200 dark:bg-[#0B1F3A] cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                  width="600"
                  height="338"
                />
                
                {/* Overlay Quick View Pill */}
                <div className="absolute inset-0 bg-[#0B1F3A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <span className="px-4 py-2 rounded-lg bg-white/95 dark:bg-[#102944]/95 text-[#0B1F3A] dark:text-white text-xs font-semibold shadow-md flex items-center gap-1.5">
                    <span>View Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF8A00]" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between text-xs text-[#667085] dark:text-slate-400">
                    <span className="font-medium text-[#FF8A00]">{project.category}</span>
                    <span>{project.statusTag}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className="text-lg font-heading font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#FF8A00] transition-colors cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[#667085] dark:text-slate-300">
                    {project.subtitle}
                  </p>

                  {/* Problem solved description */}
                  <p className="text-xs sm:text-sm text-[#667085] dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Action Links */}
                <div className="pt-3 border-t border-[#0B1F3A]/10 dark:border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-[#667085] dark:text-slate-400">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-[#667085] dark:text-slate-400">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-[#0B1F3A] dark:text-white hover:text-[#FF8A00] dark:hover:text-[#FF8A00] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF8A00]" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#667085] hover:text-[#FF8A00] dark:text-slate-400 dark:hover:text-[#FF8A00] flex items-center gap-1 transition-colors"
                        title={`Visit ${project.title}`}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={onDiscussProject}
      />
    </section>
  );
};
