'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download, ChevronRight } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, heroTextReveal } from '@/animations/variants';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data';
import dynamic from 'next/dynamic';

const AISphere = dynamic(() => import('@/components/three/AISphere'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-neon-purple/30 animate-pulse-glow" />
    </div>
  ),
});

const TECH_TAGS = ['Python', 'PyTorch', 'LangChain', 'LLMs', 'FastAPI', 'Deep Learning'];

const icons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background aurora layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] rounded-full opacity-[0.07] blur-[100px] aurora-bg"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', animation: 'auroraMove 25s ease-in-out infinite reverse' }}
        />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-20">
          {/* LEFT — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:pr-12"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-purple/30 text-xs font-mono text-neon-bright">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden">
              <motion.div variants={heroTextReveal}>
                <h1 className="font-display font-bold leading-none">
                  <span className="block text-6xl md:text-7xl lg:text-8xl text-text-primary">
                    {PERSONAL_INFO.name.split(' ')[0]}
                  </span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl gradient-text-aurora mt-1">
                    {PERSONAL_INFO.name.split(' ')[1]}
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Title */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="h-px w-8 bg-neon-purple" />
              <span className="font-mono text-sm uppercase tracking-widest text-neon-bright">
                {PERSONAL_INFO.title}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary text-lg md:text-xl leading-relaxed font-body font-light max-w-xl"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-base leading-relaxed max-w-lg"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {TECH_TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.08 }}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-neon-purple/10 border border-neon-purple/25 text-neon-electric hover:border-neon-purple/50 hover:bg-neon-purple/20 transition-all cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl btn-primary font-medium text-white shadow-neon-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-neon-purple/30 font-medium text-text-primary hover:border-neon-purple/60 hover:bg-neon-purple/10 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4 text-neon-bright" />
                Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-text-muted hover:text-neon-bright transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              {SOCIAL_LINKS.filter((s) => ['github', 'linkedin', 'twitter', 'mail'].includes(s.icon)).map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-bright hover:border-neon-purple/50 hover:shadow-neon-sm transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icons[link.icon]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — 3D Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-1/4 rounded-full blur-[80px] opacity-30"
              style={{ background: 'radial-gradient(circle, #7c3aed 0%, #3b82f6 100%)' }}
            />
            {mounted && (
              <Suspense fallback={null}>
                <AISphere />
              </Suspense>
            )}

            {/* Floating tech cards */}
            <FloatingCard
              label="LLMs"
              icon="🧠"
              className="absolute top-8 left-4 lg:-left-8"
              delay={1.5}
            />
            <FloatingCard
              label="PyTorch"
              icon="🔥"
              className="absolute bottom-16 left-0 lg:-left-4"
              delay={1.7}
            />
            <FloatingCard
              label="LangChain"
              icon="🔗"
              className="absolute top-16 right-4 lg:-right-4"
              delay={1.9}
            />
            <FloatingCard
              label="FastAPI"
              icon="⚡"
              className="absolute bottom-8 right-0 lg:-right-8"
              delay={2.1}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted hover:text-neon-bright transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
}

function FloatingCard({ label, icon, className, delay }: { label: string; icon: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`${className} z-20`}
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-sm font-mono border border-neon-purple/25 shadow-glass"
      >
        <span>{icon}</span>
        <span className="text-neon-electric text-xs">{label}</span>
      </motion.div>
    </motion.div>
  );
}
