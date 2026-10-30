'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Navigation,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Maximize2,
  Sparkles,
  Waves,
  Cpu,
} from 'lucide-react';
import BorderBeam from '@/components/ui/BorderBeam';

export default function SpaceSingularity() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="singularity" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Deep Space Scrims */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[60vw] h-[60vw] rounded-full bg-stellar-cyan/5 blur-[200px]" />
        <div className="absolute bottom-10 left-10 w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Navigation className="w-3.5 h-3.5 text-stellar-cyan animate-pulse" />
            <span>SECTOR_03 // THE SINGULARITY PORTAL</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            NAVIGATING THE <br />
            <span className="shimmer-text">EVENT HORIZON</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Charting through stochastic noise to build deterministic, low-latency intelligence.
          </p>
        </div>

        {/* Central Masterpiece Showcase: User's Clean Looping Video */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: 4K Looping Singularity Video Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative flex flex-col items-center"
          >
            <div className="relative w-full max-w-xl aspect-[1/1] sm:aspect-[4/3] lg:aspect-[1/1] rounded-3xl overflow-hidden border border-stellar-cyan/40 bg-cosmos/90 shadow-stellar-lg group">
              {/* Luminous Starlight Border Beam */}
              <BorderBeam duration={12} colorFrom="#38bdf8" colorTo="#00d4ff" />
              
              {/* Active Visual Stream: Clean Video Loop */}
              <div className="w-full h-full relative">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                >
                  <source src="/videos/wormhole-loop.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Edge Vignette & Ambient Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-black/40 pointer-events-none" />

              {/* Top HUD Controls Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono z-20">
                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-void/85 border border-stellar-cyan/40 backdrop-blur-md text-stellar-cyan">
                  <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-ping" />
                  <span className="font-bold tracking-wider">
                    LIVE VORTEX LOOP // 24FPS
                  </span>
                </div>

                {/* Sector Coordinate HUD Badge */}
                <div className="px-3 py-1 rounded-full bg-void/85 border border-white/10 backdrop-blur-md text-[10px] font-mono text-stardust">
                  SECTOR_INFINITY
                </div>
              </div>

              {/* Bottom Interactive HUD Bar: Play/Pause, Sound Toggle, Telemetry */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-void/90 border border-stellar-cyan/30 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs font-mono z-20">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-lg bg-stellar-cyan/15 hover:bg-stellar-cyan/30 border border-stellar-cyan/40 text-stellar-cyan flex items-center justify-center transition-colors"
                    title={isPlaying ? 'Pause Loop' : 'Play Loop'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={toggleSound}
                    className="w-8 h-8 rounded-lg bg-stellar-cyan/15 hover:bg-stellar-cyan/30 border border-stellar-cyan/40 text-stellar-cyan flex items-center justify-center transition-colors"
                    title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-stellar-cyan animate-pulse" />}
                  </button>

                  <div>
                    <span className="text-starlight font-cinematic font-bold block text-xs sm:text-sm tracking-wide">
                      ROUND THINGS // COSMIC VORTEX
                    </span>
                    <span className="text-stardust text-[10px] tracking-wider block font-mono">
                      EVENT HORIZON // SECTOR_INFINITY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-stellar-cyan rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-stellar-cyan rounded-br-2xl pointer-events-none" />
          </motion.div>

          {/* RIGHT: Editorial Philosophy & Technical Translation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4 text-starlight/90 text-sm sm:text-base leading-relaxed">
              <p className="font-cinematic text-lg sm:text-xl font-bold tracking-wide text-stellar-cyan">
                CHARTING THE DEEP FRONTIER
              </p>
              
              <p className="text-stardust leading-relaxed font-body">
                Like a solitary vessel navigating the precipice of a colossal vortex, building modern AI architectures requires steering through the chaos of non-deterministic models to extract rock-solid engineering value.
              </p>

              <p className="text-stardust leading-relaxed font-body">
                My approach to software engineering treats every vector search, asynchronous queue, and neural embedding as part of a coherent navigation system — ensuring that whether processing millions of market events or synthesizing thousands of medical documents, the system never loses its heading.
              </p>
            </div>

            {/* 3 Core Manifestos */}
            <div className="space-y-3 pt-2">
              {[
                {
                  id: '01',
                  title: 'VECTOR HYPERPLANES',
                  desc: 'HNSW indexing & cosine similarity clustering for instant semantic retrieval.',
                },
                {
                  id: '02',
                  title: 'DETERMINISTIC LATENCY',
                  desc: 'Sub-5-microsecond heap-indexed matching and zero-garbage-collection paths.',
                },
                {
                  id: '03',
                  title: 'MULTIMODAL REASONING',
                  desc: 'Gemini-powered vision and audio ingestion pipelines for production engines.',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl cosmic-hud flex items-start gap-3.5 border border-white/5"
                >
                  <span className="font-cinematic text-sm font-bold text-stellar-cyan mt-0.5">
                    {item.id}
                  </span>
                  <div>
                    <h4 className="font-cinematic text-xs font-bold text-starlight tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-stardust mt-0.5 font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
