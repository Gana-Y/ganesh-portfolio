'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const PRINCIPLES = [
  {
    id: '01',
    title: 'Vector indexing',
    desc: 'HNSW graphs and metadata filtering in ChromaDB for sub-200ms semantic retrieval with deterministic SQLite fallbacks.',
  },
  {
    id: '02',
    title: 'Deterministic latency',
    desc: 'Heap-indexed price levels, O(1) amortised cancellations, and minimal allocation paths for microsecond matching.',
  },
  {
    id: '03',
    title: 'Defense-in-depth isolation',
    desc: 'Linux cgroups, PID caps, air-gapped networking, and read-only root filesystems around every untrusted workload.',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

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
    <section id="singularity" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.38, ease: EASE }}
          className="max-w-2xl mb-12"
        >
          <p className="font-mono text-xs text-sky-400 tracking-[0.02em] mb-3 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
            Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
            Deterministic systems around probabilistic models
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Clean looping visual with minimal playback controls */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-hairline bg-surface hover:border-sky-500/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300">
              <div className="relative w-full aspect-square bg-deep">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/videos/wormhole-loop.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="px-4 py-3 border-t border-hairline bg-surface flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-8 h-8 rounded-lg bg-raised border border-hairline text-secondary hover:text-sky-300 hover:border-sky-500/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] flex items-center justify-center transition-all duration-150 ease-unslop"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <Play className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleSound}
                    className="w-8 h-8 rounded-lg bg-raised border border-hairline text-secondary hover:text-sky-300 hover:border-sky-500/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] flex items-center justify-center transition-all duration-150 ease-unslop"
                    aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" strokeWidth={1.5} />
                    ) : (
                      <Volume2 className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>
                </div>

                <span className="font-mono text-xs text-muted">
                  Event horizon study
                </span>
              </div>
            </div>
          </div>

          {/* Right: Engineering approach and three core principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-[15px] leading-[1.7] text-secondary">
              <p>
                Building reliable software on top of probabilistic models means putting strict, testable boundaries around every unpredictable step.
              </p>
              <p>
                Every vector query, async queue, and sandboxed process is instrumented for latency, memory ceilings, and clear failure modes — so whether matching market orders or synthesizing academic documents, the system behaves predictably under load.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {PRINCIPLES.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-surface border border-hairline hover:border-sky-500/50 hover:shadow-[0_0_22px_rgba(56,189,248,0.18)] transition-all duration-150 flex items-start gap-4 group"
                >
                  <span className="font-mono text-xs text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.4)] tabular-nums mt-0.5 shrink-0 group-hover:text-sky-300 transition-colors">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-primary group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary mt-1 leading-relaxed">
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
