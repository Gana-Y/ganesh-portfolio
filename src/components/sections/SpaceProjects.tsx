'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Cpu,
  Terminal,
  X,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '@/data';
import { Project } from '@/types';

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  project,
  onInspect,
}: {
  project: Project;
  onInspect: (project: Project) => void;
}) {
  const isLive = project.status === 'Production / Live';

  return (
    <article className="rounded-2xl bg-surface border border-hairline hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.22)] transition-all duration-200 ease-unslop flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Visual preview for projects with real screenshots */}
        <div className="relative aspect-[16/10] bg-deep border-b border-hairline group-hover:border-sky-500/30 transition-colors overflow-hidden">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-deep">
              <Cpu className="w-6 h-6 text-muted group-hover:text-sky-400 transition-colors" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="p-6">
          {/* Status & meta row */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              {isLive ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] shrink-0" aria-hidden="true" />
                  <span className="text-sky-300 font-medium">Live</span>
                </>
              ) : (
                <span>{project.status}</span>
              )}
              {project.date && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.date}</span>
                </>
              )}
            </div>

            {project.category && (
              <span className="font-mono text-xs text-muted truncate">
                {project.category.split('/')[0].trim()}
              </span>
            )}
          </div>

          {/* Title & subtitle */}
          <h3 className="text-xl font-medium tracking-[-0.01em] text-primary group-hover:text-sky-300 transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-sm text-secondary mt-1">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-secondary leading-relaxed mt-3">
            {project.description}
          </p>

          {/* Key highlights / tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md bg-sky-950/30 border border-sky-500/20 font-mono text-xs text-sky-300 hover:border-sky-400/50 hover:shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.techStack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-deep border border-hairline font-mono text-[11px] text-muted group-hover:border-sky-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="px-2 py-0.5 font-mono text-[11px] text-muted">
                +{project.techStack.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action footer */}
      <div className="px-6 py-4 border-t border-hairline flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-medium inline-flex items-center gap-1.5 border border-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.35)] hover:from-sky-400 hover:to-blue-500 hover:shadow-[0_0_22px_rgba(56,189,248,0.6)] active:scale-[0.98] transition-all duration-150 ease-unslop"
            >
              <span>Live demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-lg bg-raised border border-hairline text-primary text-xs font-medium inline-flex items-center gap-1.5 hover:border-sky-500/60 hover:text-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:bg-sky-500/10 active:scale-[0.98] transition-all duration-150 ease-unslop"
            >
              <Github className="w-3.5 h-3.5 text-muted group-hover:text-sky-400" strokeWidth={1.5} />
              <span>GitHub</span>
            </a>
          )}

          {project.swaggerUrl && (
            <a
              href={project.swaggerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-lg bg-raised border border-hairline text-secondary hover:text-sky-300 hover:border-sky-500/60 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:bg-sky-500/10 text-xs font-medium inline-flex items-center gap-1.5 transition-all duration-150 ease-unslop"
            >
              <Terminal className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
              <span>API docs</span>
            </a>
          )}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="text-xs font-medium text-sky-400 hover:text-sky-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-150 ease-unslop"
          >
            Architecture details
          </button>
        )}
      </div>
    </article>
  );
}

export default function SpaceProjects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.38, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-sky-400 tracking-[0.02em] mb-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
              Projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
              Production systems and execution engines
            </h2>
          </div>

          <a
            href="https://github.com/Gana-Y"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 rounded-lg bg-raised border border-hairline text-sm text-primary inline-flex items-center gap-2 hover:border-sky-500/50 hover:text-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:bg-sky-500/10 transition-all duration-150 ease-unslop self-start md:self-auto shrink-0"
          >
            <Github className="w-4 h-4 text-muted" strokeWidth={1.5} />
            <span>All repositories</span>
          </a>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onInspect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Show more toggle */}
        {PROJECTS.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="h-10 px-5 rounded-lg bg-surface border border-hairline text-sm text-secondary hover:text-sky-300 hover:border-sky-500/50 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)] hover:bg-sky-500/10 transition-all duration-150 ease-unslop"
            >
              {showAll ? 'Show fewer projects' : `Show all ${PROJECTS.length} projects`}
            </button>
          </div>
        )}
      </div>

      {/* Project Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: EASE }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-deep/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.25)] p-6 sm:p-8 z-10 flex flex-col gap-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-hairline">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted mb-2">
                    {selectedProject.status === 'Production / Live' && (
                      <span className="inline-flex items-center gap-1.5 text-sky-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                        Live
                      </span>
                    )}
                    {selectedProject.category && (
                      <>
                        <span>·</span>
                        <span>{selectedProject.category}</span>
                      </>
                    )}
                    {selectedProject.date && (
                      <>
                        <span>·</span>
                        <span>{selectedProject.date}</span>
                      </>
                    )}
                  </div>

                  <h3
                    id="project-modal-title"
                    className="text-2xl font-medium tracking-[-0.02em] text-primary"
                  >
                    {selectedProject.title}
                  </h3>
                  {selectedProject.subtitle && (
                    <p className="text-sm text-secondary mt-1">
                      {selectedProject.subtitle}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-lg bg-raised border border-hairline flex items-center justify-center text-secondary hover:text-sky-300 hover:border-sky-500/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all duration-150"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* Preview image */}
              {selectedProject.imageUrl && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-hairline bg-deep">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Summary */}
              <p className="text-sm text-secondary leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architectural highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs text-sky-400 tracking-wider">
                    Architecture highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => {
                      const [title, ...rest] = highlight.split(':');
                      return (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-deep border border-hairline hover:border-sky-500/30 transition-colors flex items-start gap-3 text-sm"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-sky-400 shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <div className="leading-relaxed">
                            <span className="font-medium text-primary">{title}:</span>
                            <span className="text-secondary ml-1">
                              {rest.join(':')}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Full tech stack */}
              <div>
                <h4 className="font-mono text-xs text-sky-400 mb-2.5 tracking-wider">
                  Technology stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-raised border border-hairline font-mono text-xs text-secondary hover:text-sky-300 hover:border-sky-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div className="pt-5 border-t border-hairline flex flex-wrap items-center justify-end gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded-lg bg-raised border border-hairline text-xs font-medium text-primary inline-flex items-center gap-1.5 hover:border-sky-500/50 hover:text-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:bg-sky-500/10 transition-all duration-150"
                  >
                    <Github className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                    <span>GitHub repository</span>
                  </a>
                )}

                {selectedProject.swaggerUrl && (
                  <a
                    href={selectedProject.swaggerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded-lg bg-raised border border-hairline text-xs font-medium text-primary inline-flex items-center gap-1.5 hover:border-sky-500/50 hover:text-sky-300 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:bg-sky-500/10 transition-all duration-150"
                  >
                    <Terminal className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                    <span>Swagger docs</span>
                  </a>
                )}

                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-medium inline-flex items-center gap-1.5 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.35)] hover:from-sky-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-150"
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span>Open live demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
