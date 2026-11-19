'use client';

import { motion } from 'framer-motion';
import { Layers, Gauge, Shield, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';

const FOCUS_AREAS = [
  {
    icon: Layers,
    title: 'Retrieval and LLMs',
    desc: 'Multimodal ingestion, HNSW vector indexing, and grounded response pipelines built with ChromaDB and Gemini.',
  },
  {
    icon: Gauge,
    title: 'Low-latency backends',
    desc: 'Heap-indexed limit order books, AsyncIO services, and WebSocket streams tuned for predictable microsecond paths.',
  },
  {
    icon: Shield,
    title: 'Sandboxed execution',
    desc: 'Multi-tenant code runners enforcing Linux cgroups, PID limits, read-only filesystems, and POSIX signal arbitration.',
  },
  {
    icon: Activity,
    title: 'Healthcare AI',
    desc: 'Applied diagnostic models combining clinical retrieval and computer vision for structured triage workflows.',
  },
];

const STATS = [
  { label: 'Projects built', val: '6' },
  { label: 'MCA CGPA', val: '9.35' },
  { label: 'Python LOC', val: '35K+' },
  { label: 'Active backlogs', val: '0' },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SpaceAbout() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
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
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
            Systems engineering built for strict constraints
          </h2>
        </motion.div>

        {/* Portrait and bio */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-hairline bg-surface hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.22)] transition-all duration-300">
              <div className="relative w-full aspect-[4/5] bg-deep">
                <img
                  src="/images/portrait.png"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-surface text-muted font-mono text-2xl -z-10">
                  GY
                </div>
              </div>
              <div className="px-5 py-4 border-t border-hairline flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-primary">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-muted mt-0.5">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
                <div className="text-right font-mono tabular-nums">
                  <div className="text-xs font-medium text-sky-400">MCA 9.35</div>
                  <div className="text-xs text-muted mt-0.5">0 backlogs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between gap-8">
            <div className="space-y-5 text-[15px] leading-[1.75] text-secondary">
              {/* Scroll-triggered highlighter sweep on identity sentence */}
              <motion.p
                initial={{ opacity: 0.9 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-primary text-[15.5px]"
              >
                <motion.span
                  initial={{ backgroundSize: '0% 100%' }}
                  whileInView={{ backgroundSize: '100% 100%' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded px-1.5 py-0.5 text-sky-100 font-medium border-b-2 border-sky-400/90 shadow-[0_0_15px_rgba(56,189,248,0.25)] bg-gradient-to-r from-sky-500/20 via-blue-500/25 to-sky-400/20 bg-no-repeat [background-position:0_100%] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] inline leading-[1.85]"
                >
                  I am Ganesh Yandigeri, a Python and AI systems engineer working at the intersection of low-latency backend architecture and retrieval-augmented language models.
                </motion.span>
              </motion.p>

              <p>
                Production AI systems depend as much on storage, scheduling, and isolation as on the model itself. My work focuses on deterministic execution engines and fast retrieval pipelines that hold up under strict memory, latency, and security bounds.
              </p>

              {/* Scroll-triggered highlights on flagship projects */}
              <p>
                Recent builds include{' '}
                <motion.span
                  initial={{ backgroundSize: '0% 100%', color: 'inherit' }}
                  whileInView={{ backgroundSize: '100% 100%', color: '#7dd3fc' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
                  className="font-semibold px-1.5 py-0.5 rounded bg-gradient-to-r from-sky-500/25 to-blue-500/25 border-b-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)] bg-no-repeat [background-position:0_100%] inline-block transition-colors"
                >
                  Florix AI
                </motion.span>{' '}
                (ChromaDB HNSW retrieval with Google Gemini across 15+ PostgreSQL tables),{' '}
                <motion.span
                  initial={{ backgroundSize: '0% 100%', color: 'inherit' }}
                  whileInView={{ backgroundSize: '100% 100%', color: '#7dd3fc' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
                  className="font-semibold px-1.5 py-0.5 rounded bg-gradient-to-r from-sky-500/25 to-blue-500/25 border-b-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)] bg-no-repeat [background-position:0_100%] inline-block transition-colors"
                >
                  OrderCore
                </motion.span>{' '}
                (a heap-indexed limit order book sustaining 136,000 orders/sec at 4.3 µs median latency), and{' '}
                <motion.span
                  initial={{ backgroundSize: '0% 100%', color: 'inherit' }}
                  whileInView={{ backgroundSize: '100% 100%', color: '#7dd3fc' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
                  className="font-semibold px-1.5 py-0.5 rounded bg-gradient-to-r from-sky-500/25 to-blue-500/25 border-b-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.3)] bg-no-repeat [background-position:0_100%] inline-block transition-colors"
                >
                  Vesper
                </motion.span>{' '}
                (a Docker and Linux cgroup sandbox arbitrating untrusted C++17, Python, and Java code).
              </p>
            </div>

            {/* Four compact stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-surface border border-hairline hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-150 group"
                >
                  <div className="font-mono text-2xl font-medium tabular-nums text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.35)] leading-none group-hover:text-sky-300 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.6)] transition-all">
                    {item.val}
                  </div>
                  <div className="text-xs text-muted mt-2 group-hover:text-secondary transition-colors">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Four focus areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOCUS_AREAS.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-surface border border-hairline hover:border-sky-500/40 hover:shadow-[0_0_22px_rgba(56,189,248,0.18)] transition-all duration-150 flex flex-col gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-raised border border-hairline flex items-center justify-center text-muted group-hover:border-sky-500/50 group-hover:text-sky-400 transition-colors">
                <item.icon className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-medium text-primary group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
