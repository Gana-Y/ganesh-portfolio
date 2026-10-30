'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, Orbit, Terminal, Shield, Zap } from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '@/data';
import SpotlightTiltCard from '@/components/ui/SpotlightTiltCard';

export default function SpaceSkills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Star Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-stellar-cyan/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Cpu className="w-3.5 h-3.5 text-stellar-cyan" />
            <span>SECTOR_04 // TECHNICAL ARSENAL</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            CONSTELLATION OF <br />
            <span className="shimmer-text">CAPABILITIES</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Tools, architectures, and protocols engineered to deploy intelligent systems into production.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeCategory === cat
                  ? 'text-stellar-cyan font-bold'
                  : 'text-stardust hover:text-starlight'
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="skills-star-pill"
                  className="absolute inset-0 rounded-full bg-stellar-cyan/15 border border-stellar-cyan/40 shadow-stellar-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Star Grid with 3D Spotlight Tilt */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <SpotlightTiltCard
                key={skill.name}
                tiltIntensity={6}
                spotlightColor="rgba(0, 212, 255, 0.14)"
                showCrosshairs={false}
                className="cosmic-hud p-4 sm:p-5 rounded-2xl flex flex-col justify-between group relative overflow-hidden border border-white/10"
              >
                {/* Orbital Progress Background Glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{ background: skill.color || '#00d4ff' }}
                />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-starlight group-hover:text-stellar-cyan transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-stardust uppercase">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-stellar-cyan">
                    {skill.level}%
                  </span>
                </div>

                {/* Star Track Progress Line */}
                <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, #00d4ff, ${skill.color || '#38bdf8'})`,
                      boxShadow: `0 0 10px ${skill.color || '#00d4ff'}80`,
                    }}
                  />
                </div>
              </SpotlightTiltCard>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
