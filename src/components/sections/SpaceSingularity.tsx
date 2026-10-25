'use client';

import { motion } from 'framer-motion';
import { Compass, Eye, Waves, Sparkles, Navigation } from 'lucide-react';

export default function SpaceSingularity() {
  return (
    <section id="singularity" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Deep Space Scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-10 w-[60vw] h-[60vw] rounded-full bg-stellar-cyan/5 blur-[200px]" />
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
            <span className="gradient-stellar">EVENT HORIZON</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Charting through stochastic noise to build deterministic, low-latency intelligence.
          </p>
        </div>

        {/* Central Masterpiece Showcase: User's Uploaded Wormhole-Portal Image */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: The High-Resolution "Round Things" Singularity Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative flex justify-center"
          >
            <div className="relative w-full max-w-xl aspect-[1/1] rounded-3xl overflow-hidden border border-stellar-cyan/40 bg-cosmos/80 shadow-stellar-lg group">
              <img
                src="/images/wormhole-portal.png"
                alt="The Cosmic Singularity Portal with Sailboat"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Edge Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-black/30 pointer-events-none" />

              {/* Top HUD Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-void/80 border border-stellar-cyan/30 backdrop-blur-md text-xs font-mono text-stellar-cyan">
                <span className="w-2 h-2 rounded-full bg-stellar-cyan animate-ping" />
                <span>SINGULARITY_PORTAL // 4K RENDER</span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-void/85 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-starlight font-cinematic font-bold block">
                    ROUND THINGS // COSMIC VORTEX
                  </span>
                  <span className="text-stardust text-[10px]">
                    NAVIGATING UNCHARTED INTELLECTUAL SECTORS
                  </span>
                </div>
                <span className="text-stellar-cyan text-[11px] font-bold">
                  SECTOR_INFINITY
                </span>
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
