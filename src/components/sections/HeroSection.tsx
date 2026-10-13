'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { fadeInUp, staggerContainer, heroTextReveal } from '@/animations/variants';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data';
import HoloProfileCard from '@/components/ui/HoloProfileCard';

const TECH_PILLS = ['Python', 'FastAPI', 'Google Gemini', 'ChromaDB', 'AsyncIO', 'Low-Latency'];

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
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background High-Definition Ambient Video Engine */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mounted && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen scale-105 pointer-events-none"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Dark Gradient Scrims & Cinematic Lighting */}
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-abyss/60 to-abyss pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/90 via-transparent to-abyss/90 pointer-events-none" />

        {/* Soft atmospheric glow pods (Inspired by Image 1) */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full opacity-[0.14] blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, #ff6b4a 50%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-1/4 right-0 w-[60vw] h-[60vw] rounded-full opacity-[0.10] blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, transparent 70%)' }}
        />
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)] py-12 lg:py-20">
          
          {/* LEFT — Editorial Headline & Story (Columns 1-7) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 lg:pr-6"
          >
            {/* Live Status Pill */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-hud border border-white/15 text-xs font-mono text-electric-cyan shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wide">Python Engineer · LLM/RAG &amp; Low-Latency Systems</span>
              </div>
            </motion.div>

            {/* Editorial Name Typography */}
            <div className="overflow-hidden">
              <motion.div variants={heroTextReveal}>
                <h1 className="font-display font-extrabold leading-none tracking-tight">
                  <span className="block text-6xl md:text-7xl lg:text-8xl text-text-primary">
                    Ganesh
                  </span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl gradient-text-aurora mt-1 font-bold">
                    Yandigeri
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Title / Role Subheading */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-electric-cyan to-neon-purple" />
              <span className="font-mono text-sm uppercase tracking-widest text-electric-cyan font-semibold">
                {PERSONAL_INFO.title}
              </span>
            </motion.div>

            {/* Tagline / Pitch */}
            <motion.p
              variants={fadeInUp}
              className="text-text-secondary text-lg md:text-xl leading-relaxed font-body font-light max-w-2xl"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Concise Mission / Bio Summary */}
            <motion.p
              variants={fadeInUp}
              className="text-text-muted text-sm md:text-base leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Technical Quick-Pills (Inspired by Image 4 & 5) */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-1">
              {TECH_PILLS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-full glass-pill text-text-secondary hover:text-white hover:border-electric-cyan/40 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary font-medium text-white shadow-neon-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore Flagships</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="Ganesh_Yandigeri_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full glass-hud border border-white/15 font-medium text-text-primary hover:border-neon-bright/50 hover:bg-white/10 transition-all shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4 text-electric-cyan" />
                <span>Resume (PDF)</span>
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-3 rounded-full text-sm font-mono text-text-muted hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
              </motion.button>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.filter((s) => ['github', 'linkedin', 'twitter', 'mail'].includes(s.icon)).map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl glass-hud border border-white/10 flex items-center justify-center text-text-muted hover:text-electric-cyan hover:border-electric-cyan/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icons[link.icon]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Holographic Profile Card (Columns 8-12) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <HoloProfileCard />
          </motion.div>

        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-text-muted hover:text-electric-cyan transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.button>
    </section>
  );
}
