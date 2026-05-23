'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/data';

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <SectionWrapper id="projects" className="section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="My Work"
          title="Projects & Builds"
          description="Real systems. Real code. Each project is a lesson in building better AI."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-12">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {!showAll && PROJECTS.length > 4 && (
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-xl glass-card border border-neon-purple/30 text-text-primary font-medium hover:border-neon-purple/60 hover:bg-neon-purple/10 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View All Projects
            </motion.button>
          )}

          <motion.a
            href="https://github.com/Gana-Y"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-xl btn-primary font-medium text-white shadow-neon-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github className="w-4 h-4" />
            View GitHub
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
