'use client';

import { motion } from 'framer-motion';
import { Sparkles, Orbit, Code2, Heart, TrendingUp, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';
import SpotlightTiltCard from '@/components/ui/SpotlightTiltCard';
import BorderBeam from '@/components/ui/BorderBeam';

const ORBITING_PILLARS = [
  {
    icon: Sparkles,
    title: 'AI-First Singularity',
    desc: 'Viewing computing problems through the lens of autonomous reasoning, semantic embeddings, and probabilistic models.',
    tag: 'INTELLIGENCE',
  },
  {
    icon: Heart,
    title: 'Healthcare AI Impact',
    desc: 'Engineering predictive models and multimodal RAG assistants to accelerate clinical diagnosis and patient triage.',
    tag: 'HEALTHCARE',
  },
  {
    icon: TrendingUp,
    title: 'FinTech Micro-Latency',
    desc: 'Building high-throughput limit order books and algorithmic pipelines that parse high-frequency financial signals.',
    tag: 'FINTECH',
  },
  {
    icon: Code2,
    title: 'Builder by Nature',
    desc: 'Turning raw specifications into production Docker microservices, AsyncIO WebSocket daemons, and reactive UIs.',
    tag: 'SYSTEMS',
  },
];

export default function SpaceAbout() {
  return (
    <section id="about" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Ambient Voyage Video */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/ambient-glow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Celestial Coordinates */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Orbit className="w-3.5 h-3.5 text-stellar-cyan animate-spin-slow" />
            <span>SECTOR_02 // THE ARCHITECT &amp; MONOLITH</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            THE ENGINEER BEYOND <br />
            <span className="shimmer-text">THE HORIZON</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            &ldquo;The best way to understand intelligence is to build it into the void.&rdquo;
          </p>
        </div>

        {/* Main Grid: Sharp Rectangular Portrait + Deep Story */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          
          {/* LEFT: Sharp Rectangular Portrait with 3D Spotlight Tilt & Border Beam */}
          <div className="lg:col-span-5 flex justify-center">
            <SpotlightTiltCard
              tiltIntensity={6}
              spotlightColor="rgba(0, 212, 255, 0.22)"
              showCrosshairs={true}
              className="relative w-full max-w-[360px] rounded-2xl overflow-hidden border border-stellar-cyan/30 bg-cosmos/90 shadow-cosmic-card group"
            >
              {/* Luminous Starlight Border Beam */}
              <BorderBeam duration={11} colorFrom="#00d4ff" colorTo="#38bdf8" />

              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src="/images/profile.png"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-black/30 pointer-events-none" />
                
                {/* Fallback initials if image fails */}
                <div className="absolute inset-0 flex items-center justify-center bg-cosmos text-white font-cinematic font-bold text-4xl -z-10">
                  GY
                </div>

                {/* Status Beacon Top */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-void/80 border border-stellar-cyan/30 backdrop-blur-md text-[10px] font-mono text-stellar-cyan flex items-center gap-1.5 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYSTEM_OPERATOR</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-void/85 border border-white/10 backdrop-blur-md flex items-center justify-between z-10">
                  <div>
                    <h3 className="font-cinematic font-bold text-sm text-starlight">
                      GANESH YANDIGERI
                    </h3>
                    <p className="text-[10px] font-mono text-stellar-glow">
                      AI Systems Engineer · Bangalore
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-emerald-400 font-bold block">
                      MCA 9.35
                    </span>
                    <span className="text-[8px] font-mono text-stardust">
                      0 BACKLOGS
                    </span>
                  </div>
                </div>
              </div>
            </SpotlightTiltCard>
          </div>

          {/* RIGHT: Deep Story & Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-starlight/90 text-sm sm:text-base leading-relaxed">
              <p className="font-body">
                I am <span className="text-stellar-cyan font-semibold">Ganesh Yandigeri</span>, an AI systems engineer operating at the convergence of high-throughput distributed computing and autonomous cognitive architectures.
              </p>

              <p className="text-stardust leading-relaxed">
                Modern artificial intelligence is not merely a collection of API endpoints — it represents a fundamental architectural evolution in how information is indexed, synthesized, and acted upon. My work centers on building deterministic, sub-millisecond execution engines and resilient RAG retrieval pipelines capable of real-world reasoning under strict resource constraints.
              </p>

              <p className="text-stardust leading-relaxed">
                Whether orchestrating ChromaDB vector graphs with Google Gemini embeddings in <span className="text-starlight font-mono">Florix AI</span>, designing heap-indexed price-time matching engines processing <span className="text-stellar-cyan font-mono font-semibold">136,000 orders/sec</span> with <span className="text-stellar-cyan font-mono font-semibold">4.3µs</span> latency in <span className="text-starlight font-mono">OrderCore</span>, or architecting multi-tenant Linux cgroup sandboxes with POSIX signal verdict arbitration in <span className="text-stellar-cyan font-mono font-semibold">Vesper</span>, my commitment is to code that is mathematically sound, rigorously tested, and built for production.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'PROJECTS', val: '6+' },
                { label: 'MCA CGPA', val: '9.35' },
                { label: 'PYTHON', val: '35K+ LOC' },
                { label: 'BACKLOGS', val: '0 ACTIVE' },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl cosmic-hud text-center">
                  <div className="font-cinematic font-bold text-lg text-stellar-cyan">{item.val}</div>
                  <div className="text-[10px] font-mono text-stardust mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Thematic Pillars with 3D Spotlight Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ORBITING_PILLARS.map((pillar) => (
            <SpotlightTiltCard
              key={pillar.title}
              tiltIntensity={9}
              spotlightColor="rgba(0, 212, 255, 0.16)"
              showCrosshairs={true}
              className="cosmic-hud p-6 rounded-2xl flex flex-col justify-between group border border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-stellar-cyan/10 border border-stellar-cyan/30 flex items-center justify-center text-stellar-cyan group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-stardust/70">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-cinematic text-base font-bold text-starlight mb-2 group-hover:text-stellar-cyan transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-stardust leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-stardust/60">
                <span>SECTOR // ACTIVE</span>
                <span className="text-stellar-cyan">→</span>
              </div>
            </SpotlightTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
