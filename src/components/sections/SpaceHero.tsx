'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown, Terminal, Eye, Zap, Shield, Cpu, Image as ImageIcon, Video } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';

const TELEMETRY = [
  { label: 'MATCH ENGINE', value: '136K', unit: 'ops/s', sub: 'O(1) Heap Index' },
  { label: 'RAG LATENCY', value: '<200', unit: 'ms', sub: 'ChromaDB HNSW' },
  { label: 'MATCH SPEED', value: '4.3', unit: 'µs', sub: 'Price-Time' },
];

const PHASE_TEXTS = [
  {
    tag: 'COGNITIVE ARCHITECTURE',
    title: 'THE ARCHITECTURE',
    highlight: 'OF INTELLIGENCE',
    desc: 'Building autonomous RAG reasoning engines, vector neural pipelines, and high-throughput low-latency Python backends.',
  },
  {
    tag: 'HIGH-FREQUENCY SYSTEMS',
    title: 'THE SPEED',
    highlight: 'OF MARKETS',
    desc: 'Engineering matching engines handling 136,000 orders/sec with sub-5-microsecond deterministic executions.',
  },
  {
    tag: 'NEURAL HORIZON',
    title: 'SYNTHETIC',
    highlight: 'REASONING',
    desc: 'Multi-modal document synthesis and Gemini-powered contextual intelligence for critical domains.',
  },
];

export default function SpaceHero() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'video' | 'art'>('video');

  // Cycle transmission phase every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % PHASE_TEXTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0 bg-void"
    >
      {/* Background Deep Space Scrims */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-stellar-cyan/5 blur-[160px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT: THE COSMIC EYE PORTAL (VIDEO + ARTWORK SWITCHER)         */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            {/* Outer HUD Framing Container */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-stellar-cyan/30 bg-cosmos/80 shadow-stellar-md group">
              
              {/* Conditional Display: Live Blinking Video OR High-Res Artwork */}
              {viewMode === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                >
                  <source src="/videos/eye-hero.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/images/cosmic-eye-art.jpg"
                  alt="The Cosmic Eye Silhouette Artwork"
                  className="w-full h-full object-cover opacity-95 transition-opacity duration-700"
                />
              )}

              {/* Edge Vignette & Dark Cosmic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/70 pointer-events-none" />

              {/* Holographic Concentric Grid Overlay (Eye HUD) */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 400 225">
                  <circle
                    cx="200"
                    cy="112"
                    r="80"
                    fill="none"
                    stroke="#00d4ff"
                    strokeWidth="0.5"
                    strokeDasharray="4 8"
                  />
                  <circle
                    cx="200"
                    cy="112"
                    r="55"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.75"
                    strokeDasharray="20 40"
                    className="animate-spin-slow"
                  />
                  <line x1="200" y1="12" x2="200" y2="212" stroke="#00d4ff" strokeWidth="0.3" opacity="0.3" />
                  <line x1="100" y1="112" x2="300" y2="112" stroke="#00d4ff" strokeWidth="0.3" opacity="0.3" />
                </svg>
              </div>

              {/* Top HUD Status Bar & Video / Artwork Toggle */}
              <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-stellar-cyan z-20">
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-void/80 border border-stellar-cyan/30 backdrop-blur-md">
                  <button
                    onClick={() => setViewMode('video')}
                    className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full transition-all ${
                      viewMode === 'video'
                        ? 'bg-stellar-cyan text-void font-bold shadow-sm'
                        : 'text-stardust hover:text-starlight'
                    }`}
                  >
                    <Video className="w-3 h-3" />
                    <span>LIVE EYE VIDEO</span>
                  </button>

                  <button
                    onClick={() => setViewMode('art')}
                    className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full transition-all ${
                      viewMode === 'art'
                        ? 'bg-stellar-cyan text-void font-bold shadow-sm'
                        : 'text-stardust hover:text-starlight'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>ORIGINAL ART</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5 text-stardust bg-void/60 px-2 py-0.5 rounded border border-white/5 hidden sm:flex">
                  <Terminal className="w-3 h-3 text-stellar-cyan" />
                  <span>SYNAPSE_v4.2</span>
                </div>
              </div>

              {/* Bottom Telemetry Overlay Badge on the Eye Frame */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20 text-[11px] font-mono">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-void/80 border border-stellar-cyan/20 backdrop-blur-md text-starlight">
                  <Eye className="w-3.5 h-3.5 text-stellar-cyan animate-pulse" />
                  <span>{viewMode === 'video' ? 'OCULAR HUD :: BLINK SYNCED' : 'CYBERNETIC IRIS :: 4K RENDER'}</span>
                </div>
                <span className="text-stardust text-[10px] tracking-wider hidden sm:block">
                  COORD: 12.9716° N, 77.5946° E
                </span>
              </div>
            </div>

            {/* Glowing Corner Accents on the Container */}
            <div className="flex items-center justify-between px-2 text-[10px] font-mono text-stardust/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                NEURAL VISUAL FEED // 1280×720 OCULAR
              </span>
              <span>SWITCH FEED VIA TOGGLE BUTTONS ABOVE</span>
            </div>
          </motion.div>


          {/* ============================================================== */}
          {/* RIGHT: THE STELLAR IDENTITY & TRANSMISSION TERMINAL (~45%)     */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            {/* Transmission Phase Badge */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-pulse" />
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-stellar-cyan font-semibold">
                {PHASE_TEXTS[phaseIndex].tag}
              </span>
            </div>

            {/* Big Headline — Editorial Cinematic Serif Typography */}
            <div>
              <p className="font-mono text-xs text-stardust uppercase tracking-widest mb-1.5">
                TRANSMISSION FROM
              </p>
              <h1 className="font-cinematic text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-starlight leading-[1.05]">
                GANESH
                <span className="block text-3xl sm:text-4xl lg:text-5xl gradient-stellar mt-1">
                  YANDIGERI
                </span>
              </h1>
            </div>

            {/* Title / Role Subheading */}
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-stellar-cyan" />
              <p className="font-mono text-xs sm:text-sm text-stellar-glow tracking-wider font-semibold">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Dynamic Cycling Thought / Manifesto Box */}
            <div className="min-h-[90px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-1.5"
                >
                  <p className="font-cinematic text-lg sm:text-xl font-bold tracking-wider text-starlight">
                    {PHASE_TEXTS[phaseIndex].title}{' '}
                    <span className="text-stellar-cyan">{PHASE_TEXTS[phaseIndex].highlight}</span>
                  </p>
                  <p className="text-stardust text-xs sm:text-sm leading-relaxed font-body">
                    {PHASE_TEXTS[phaseIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Verified Mission Telemetry Grid */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl cosmic-hud border border-white/10">
              {TELEMETRY.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-[9px] font-mono text-stardust uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg text-stellar-cyan my-0.5">
                    {item.value}
                    <span className="text-[10px] text-starlight/70 ml-0.5">{item.unit}</span>
                  </div>
                  <div className="text-[9px] font-mono text-starlight/60 truncate">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleScroll('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-stellar-cyan text-void text-xs font-mono font-bold tracking-wider hover:bg-stellar-glow transition-all shadow-stellar-sm"
              >
                <span>EXPLORE MISSIONS</span>
                <ChevronRight className="w-3.5 h-3.5 text-void" />
              </button>

              <button
                onClick={() => handleScroll('about')}
                className="flex items-center gap-2 px-5 py-3 rounded-full cosmic-pill text-xs font-mono text-starlight hover:text-stellar-cyan"
              >
                <span>ENTER PORTAL</span>
                <span className="text-stellar-cyan">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Corner Action Scroll Trigger */}
      <button
        onClick={() => handleScroll('about')}
        aria-label="Scroll to next sector"
        className="absolute bottom-6 right-8 z-30 group flex items-center gap-3"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase text-stardust group-hover:text-stellar-cyan transition-colors hidden sm:block">
          SECTOR_02 // PORTAL
        </span>
        <div className="w-11 h-11 rounded-full bg-plasma-orange/90 text-void flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-plasma-amber transition-all">
          <ArrowDown className="w-4 h-4 text-void animate-bounce" />
        </div>
      </button>
    </section>
  );
}
