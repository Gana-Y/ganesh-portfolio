'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { Project } from '@/types';
import { useTilt } from '@/hooks';

const STATUS_COLORS: Record<string, string> = {
  Complete: 'text-green-400 bg-green-400/10 border-green-400/30',
  'In Progress': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  Building: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  Planned: 'text-neon-bright bg-neon-purple/10 border-neon-purple/30',
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card rounded-2xl overflow-hidden border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300 group h-full flex flex-col"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      >
        {/* Card image / gradient header */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-electric-blue/20 to-transparent" />

          {/* Neural net pattern - fixed coordinates (no Math.random) */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <line x1="20"  y1="30"  x2="150" y2="80"  stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <line x1="150" y1="80"  x2="280" y2="40"  stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <line x1="280" y1="40"  x2="370" y2="130" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <line x1="150" y1="80"  x2="200" y2="160" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <line x1="200" y1="160" x2="320" y2="170" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <line x1="80"  y1="150" x2="200" y2="160" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="0.5" />
              <circle cx="20"  cy="30"  r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="150" cy="80"  r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="280" cy="40"  r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="370" cy="130" r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="200" cy="160" r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="80"  cy="150" r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="320" cy="170" r="3" fill="#a78bfa" opacity="0.6" />
              <circle cx="100" cy="60"  r="3" fill="#a78bfa" opacity="0.6" />
            </svg>
          </div>

          {/* Project number */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/40 border border-neon-purple/30 flex items-center justify-center text-xs font-mono text-neon-bright">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Status badge */}
          <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-mono border ${STATUS_COLORS[project.status]}`}>
            {project.status}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full text-xs font-mono bg-neon-purple/20 border border-neon-purple/40 text-neon-bright">
              ★ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display font-bold text-xl text-text-primary mb-2 group-hover:text-neon-bright transition-colors">
            {project.title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded-md bg-neon-purple/10 text-neon-electric border border-neon-purple/20"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-text-muted border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 justify-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-neon-purple/40 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 justify-center px-4 py-2 rounded-lg btn-primary text-sm font-medium text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}