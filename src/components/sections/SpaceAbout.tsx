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
          <p className="font-mono text-xs text-muted tracking-[0.01em] mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
            Systems engineering built for strict constraints
          </h2>
        </motion.div>

        {/* Portrait and bio */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden border border-hairline bg-surface">
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
                  <div className="text-xs font-medium text-primary">MCA 9.35</div>
                  <div className="text-xs text-muted mt-0.5">0 backlogs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between gap-8">
            <div className="space-y-4 text-[15px] leading-[1.7] text-secondary">
              <p className="text-primary">
                I am Ganesh Yandigeri, a Python and AI systems engineer working at the intersection of low-latency backend architecture and retrieval-augmented language models.
              </p>

              <p>
                Production AI systems depend as much on storage, scheduling, and isolation as on the model itself. My work focuses on deterministic execution engines and fast retrieval pipelines that hold up under strict memory, latency, and security bounds.
              </p>

              <p>
                Recent builds include <span className="text-primary font-medium">Florix AI</span> (ChromaDB HNSW retrieval with Google Gemini across 15+ PostgreSQL tables), <span className="text-primary font-medium">OrderCore</span> (a heap-indexed limit order book sustaining 136,000 orders/sec at 4.3 µs median latency), and <span className="text-primary font-medium">Vesper</span> (a Docker and Linux cgroup sandbox arbitrating untrusted C++17, Python, and Java code).
              </p>
            </div>

            {/* Four compact stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-surface border border-hairline"
                >
                  <div className="font-mono text-2xl font-medium tabular-nums text-primary leading-none">
                    {item.val}
                  </div>
                  <div className="text-xs text-muted mt-2">{item.label}</div>
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
              className="p-5 rounded-xl bg-surface border border-hairline flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-raised border border-hairline flex items-center justify-center text-muted">
                <item.icon className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-medium text-primary">
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
