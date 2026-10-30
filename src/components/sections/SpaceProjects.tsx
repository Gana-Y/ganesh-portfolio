'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Terminal, Cpu, Database, Eye, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS } from '@/data';
import { Project } from '@/types';
import SpotlightTiltCard from '@/components/ui/SpotlightTiltCard';
import BorderBeam from '@/components/ui/BorderBeam';
import MagneticButton from '@/components/ui/MagneticButton';

function MissionCard({ project, index }: { project: Project; index: number }) {
  const [unveiled, setUnveiled] = useState(false);

  return (
    <SpotlightTiltCard
      tiltIntensity={7}
      spotlightColor="rgba(0, 212, 255, 0.18)"
      showCrosshairs={true}
      className="cosmic-hud rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between"
      onMouseEnter={() => setUnveiled(true)}
      onMouseLeave={() => setUnveiled(false)}
    >
      {/* Luminous Border Beam on Flagship Projects */}
      {project.featured && index < 2 && (
        <BorderBeam duration={14} colorFrom="#00d4ff" colorTo="#38bdf8" />
      )}

      {/* Visual Header / Simulation Window */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-void/90">
        {/* Background Image / Video for Flagship */}
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-nebula via-cosmos to-void flex items-center justify-center">
            <Cpu className="w-12 h-12 text-stellar-cyan/40" />
          </div>
        )}

        {/* Ambient Dark Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmos via-transparent to-black/60 pointer-events-none" />

        {/* Creative Unveil Veil: Luminous Shroud that pulls back on hover */}
        <motion.div
          initial={{ opacity: 0.85 }}
          animate={{
            opacity: unveiled ? 0 : 0.85,
            clipPath: unveiled ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)',
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-gradient-to-b from-void/90 via-cosmos/95 to-stellar-deep/40 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center pointer-events-none"
        >
          <div className="w-10 h-10 rounded-full bg-stellar-cyan/20 border border-stellar-cyan/50 flex items-center justify-center mb-3">
            <Eye className="w-5 h-5 text-stellar-cyan animate-pulse" />
          </div>
          <span className="font-cinematic text-xs tracking-[0.2em] uppercase text-stellar-cyan font-bold">
            MISSION ENCRYPTED // HOVER TO UNVEIL
          </span>
          <span className="text-[10px] font-mono text-stardust mt-1">
            ARCHITECTURAL SCHEMATICS &amp; SPECS
          </span>
        </motion.div>

        {/* Mission Index Badge */}
        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-void/80 border border-stellar-cyan/30 text-[10px] font-mono text-stellar-cyan z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-stellar-cyan" />
          <span>MSN_0{index + 1}</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-void/80 border border-white/10 text-[10px] font-mono text-starlight z-10">
          {project.status.toUpperCase()}
        </div>
      </div>

      {/* Mission Body Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-cosmos/60">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-stellar-cyan/10 border border-stellar-cyan/25 text-stellar-cyan"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-cinematic font-bold text-lg sm:text-xl text-starlight mb-2 group-hover:text-stellar-cyan transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stardust leading-relaxed mb-5 font-body">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/5 text-stardust/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl cosmic-pill text-xs font-mono text-starlight hover:text-stellar-cyan transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>SOURCE_CODE</span>
            </a>
          )}

          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stellar-cyan text-void text-xs font-mono font-bold tracking-wider hover:bg-stellar-glow transition-all shadow-stellar-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-void" />
              <span>LIVE_DEMO</span>
            </a>
          )}
        </div>
      </div>
    </SpotlightTiltCard>
  );
}

export default function SpaceProjects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Subtle Space Voyage Loop */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/space-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Layers className="w-3.5 h-3.5 text-stellar-cyan animate-pulse" />
            <span>SECTOR_03 // STELLAR MISSIONS</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            PRODUCTION SYSTEMS &amp; <br />
            <span className="shimmer-text">NEURAL BUILDS</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Deterministic codebases engineered for low latency, zero memory leaks, and high throughput. Hover each mission to unveil architectural specs.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {displayed.map((project, i) => (
            <MissionCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mission Expansion Controls with Magnetic Physics */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAll && PROJECTS.length > 4 && (
            <MagneticButton
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 rounded-full cosmic-pill text-xs font-mono tracking-wider text-starlight hover:text-stellar-cyan transition-all"
            >
              EXPAND ALL MISSIONS ({PROJECTS.length})
            </MagneticButton>
          )}

          <a
            href="https://github.com/Gana-Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <MagneticButton className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-stellar-cyan text-void text-xs font-mono font-bold tracking-wider hover:bg-stellar-glow transition-all shadow-stellar-sm">
              <Github className="w-4 h-4 text-void" />
              <span>VIEW GITHUB REPOSITORY</span>
            </MagneticButton>
          </a>
        </div>

      </div>
    </section>
  );
}
