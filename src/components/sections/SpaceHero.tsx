'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data';

const METRICS = [
  { label: 'OrderCore throughput', value: '136,000', unit: '/s', accent: true },
  { label: 'Median match latency', value: '4.3', unit: 'µs', accent: false },
  { label: 'RAG retrieval', value: '<200', unit: 'ms', accent: false },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SpaceHero() {
  const handleScroll = (id: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement, opts?: object) => void } }).__lenis;
    const el = document.getElementById(id);
    if (lenis && el) {
      lenis.scrollTo(el, { offset: -64, duration: 0.9 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 lg:pt-28 lg:pb-24 flex items-center bg-canvas"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Primary visual moment — blinking eye video */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-hairline bg-deep">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/eye-hero.mp4?v=2" type="video/mp4" />
              </video>

              {/* Soft edge blend into page background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(11,13,20,0.65) 0%, transparent 28%, transparent 78%, rgba(11,13,20,0.45) 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Identity, value proposition, metrics, and actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: EASE }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <p className="font-mono text-xs text-muted tracking-[0.01em] mb-4">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-[-0.03em] leading-[1.06] text-primary">
              {PERSONAL_INFO.name}
            </h1>

            <p className="text-base sm:text-lg text-secondary leading-[1.6] mt-5 max-w-lg">
              Building low-latency matching engines, cgroup code sandboxes, and production RAG pipelines in Python and FastAPI.
            </p>

            {/* Verified production numbers */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-hairline">
              {METRICS.map((item) => (
                <div key={item.label}>
                  <div
                    className={`font-mono text-xl sm:text-2xl font-medium tabular-nums leading-none ${
                      item.accent ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {item.value}
                    <span className="text-xs text-muted ml-0.5">{item.unit}</span>
                  </div>
                  <div className="text-xs text-muted mt-2 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* One primary and one secondary action */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <button
                type="button"
                onClick={() => handleScroll('projects')}
                className="h-11 px-5 rounded-lg bg-primary text-canvas text-sm font-medium inline-flex items-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-[background-color,transform] duration-150 ease-unslop"
              >
                <span>View projects</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('about')}
                className="h-11 px-5 rounded-lg bg-raised border border-hairline text-primary text-sm font-medium control-highlight hover:border-hairline-strong active:scale-[0.98] transition-[border-color,transform] duration-150 ease-unslop"
              >
                About me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
