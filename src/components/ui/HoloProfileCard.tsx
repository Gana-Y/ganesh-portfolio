'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Activity, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useTilt } from '@/hooks';

export default function HoloProfileCard() {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(10);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient background bloom */}
      <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 via-electric-cyan/20 to-neon-violet/20 rounded-3xl blur-2xl opacity-60 pointer-events-none animate-pulse-glow" />

      {/* Holographic Card Container */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl glass-hud glass-hud-hover overflow-hidden p-6 sm:p-7 border border-white/15"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out',
        }}
      >
        {/* Specular glass reflection layer */}
        <div className="absolute inset-0 specular-sheen pointer-events-none" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider text-emerald-300 uppercase">
              System Online · Available
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-neon-electric">
            <Terminal className="w-3 h-3 text-electric-cyan" />
            <span>v2.5.0</span>
          </div>
        </div>

        {/* Profile Identity Block */}
        <div className="flex items-center gap-4 sm:gap-5 mb-6 relative z-10">
          {/* Avatar with spinning conic glow */}
          <div className="relative flex-shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-[3px] rounded-full z-0 opacity-80"
              style={{
                background: 'conic-gradient(from 0deg, #7c3aed, #06b6d4, #a78bfa, #3b82f6, #7c3aed)',
                borderRadius: '50%',
              }}
            />
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden z-10 border-2 border-abyss bg-deep/90 shadow-2xl flex items-center justify-center">
              <img
                src="/images/profile.png"
                alt="Ganesh Yandigeri"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neon-purple to-electric-blue text-white font-display font-bold text-xl -z-10">
                GY
              </div>
            </div>
            {/* Verified icon badge */}
            <div className="absolute -bottom-1 -right-1 z-20 w-6 h-6 rounded-full bg-electric-cyan text-void flex items-center justify-center shadow-md">
              <BadgeCheck className="w-4 h-4 text-abyss fill-electric-cyan" />
            </div>
          </div>

          {/* User Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary truncate">
                Ganesh Yandigeri
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-electric-cyan font-medium flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              Python &amp; AI Systems Engineer
            </p>
            <p className="text-xs font-mono text-text-muted mt-1">
              📍 Bangalore, India · @Gana-Y
            </p>
          </div>
        </div>

        {/* Telemetry Metrics Grid (Inspired by Image 2 stats) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3 px-3.5 rounded-2xl bg-black/40 border border-white/10 mb-6 relative z-10">
          <div className="text-center">
            <div className="font-display font-bold text-base sm:text-lg text-electric-cyan">
              136K<span className="text-xs font-mono text-white/60">/s</span>
            </div>
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mt-0.5">
              Engine Ops
            </div>
          </div>

          <div className="text-center border-x border-white/10">
            <div className="font-display font-bold text-base sm:text-lg text-neon-bright">
              &lt; 200<span className="text-xs font-mono text-white/60">ms</span>
            </div>
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mt-0.5">
              RAG Retrieval
            </div>
          </div>

          <div className="text-center">
            <div className="font-display font-bold text-base sm:text-lg text-emerald-400">
              4.3<span className="text-xs font-mono text-white/60">µs</span>
            </div>
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-wider mt-0.5">
              Match Latency
            </div>
          </div>
        </div>

        {/* Live Systems Tag Pills (Inspired by Image 4 & 5 pills) */}
        <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
          {['FastAPI', 'Google Gemini', 'ChromaDB', 'AsyncIO', 'React 19', 'Docker'].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono text-text-secondary bg-white/5 border border-white/10 hover:border-electric-cyan/40 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Card Status */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted relative z-10">
          <div className="flex items-center gap-1.5 text-text-secondary">
            <Zap className="w-3.5 h-3.5 text-neon-bright" />
            <span>High-Throughput Systems</span>
          </div>
          <span className="text-electric-cyan font-medium">99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
}
