'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILLS, SKILL_CATEGORIES } from '@/data';
import { staggerContainer, skillCardVariants, progressBarVariants } from '@/animations/variants';

function SkillBar({ name, level, icon, color }: { name: string; level: number; icon: string; color: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={skillCardVariants}
      className="glass-card rounded-xl p-4 hover:border-neon-purple/40 transition-all group border border-neon-purple/15"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="font-mono text-sm font-medium text-text-primary group-hover:text-neon-bright transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-neon-bright">{level}%</span>
      </div>

      {/* Progress track */}
      <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          variants={progressBarVariants(level)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #7c3aed, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={inView ? { x: ['−100%', '300%'] } : {}}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="section-padding">
      {/* Decorative divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Technical Arsenal"
          title="Skills & Technologies"
          description="Tools I use to build intelligent systems — from data wrangling to deploying production AI."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-mono transition-all ${
                activeCategory === cat
                  ? 'text-neon-bright'
                  : 'text-text-muted hover:text-text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="skill-filter"
                  className="absolute inset-0 rounded-full bg-neon-purple/15 border border-neon-purple/40"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-text-ghost font-mono text-sm">
            And always learning more{' '}
            <span className="text-neon-bright animate-pulse">_</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
