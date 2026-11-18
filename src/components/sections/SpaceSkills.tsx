'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  Braces,
  Database,
  Layers,
  Search,
  Cpu,
  Network,
  Terminal,
  Activity,
  Server,
  Radio,
  Gauge,
  Globe,
  Box,
  Workflow,
  HardDrive,
  Zap,
  Container,
  GitBranch,
  CheckSquare,
  type LucideIcon,
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '@/data';

const ICON_MAP: Record<string, LucideIcon> = {
  code: Code2,
  'file-code': FileCode,
  braces: Braces,
  database: Database,
  layers: Layers,
  search: Search,
  cpu: Cpu,
  network: Network,
  terminal: Terminal,
  activity: Activity,
  server: Server,
  radio: Radio,
  gauge: Gauge,
  globe: Globe,
  box: Box,
  workflow: Workflow,
  'hard-drive': HardDrive,
  zap: Zap,
  container: Container,
  'git-branch': GitBranch,
  'check-square': CheckSquare,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SpaceSkills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.38, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs text-muted tracking-[0.01em] mb-3">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
              Core stack and infrastructure
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap gap-1.5"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`h-8 px-3 rounded-lg text-xs font-medium transition-[background-color,color,border-color] duration-150 ease-unslop border ${
                    active
                      ? 'bg-raised text-primary border-hairline-strong'
                      : 'bg-transparent text-secondary border-transparent hover:text-primary hover:bg-surface'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.icon] || Code2;
            const isPrimaryStrength = skill.level >= 90;

            return (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-surface border border-hairline flex flex-col gap-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-raised border border-hairline flex items-center justify-center text-muted shrink-0">
                      <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-primary truncate">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-muted">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs tabular-nums text-secondary shrink-0">
                    {skill.level}%
                  </span>
                </div>

                {/* Quiet neutral bar, subtle accent only on 90%+ core tools */}
                <div className="h-1 w-full bg-raised rounded-sm overflow-hidden">
                  <div
                    className={`h-full rounded-sm ${
                      isPrimaryStrength ? 'bg-accent/80' : 'bg-secondary/50'
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
