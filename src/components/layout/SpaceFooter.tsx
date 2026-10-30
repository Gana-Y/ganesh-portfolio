'use client';

import { Compass, Github, Linkedin, Twitter, Code2, Heart, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/data';

const icons: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  code: <Code2 className="w-4 h-4" />,
};

export default function SpaceFooter() {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-void py-12 overflow-hidden text-stardust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Identity & Coordinates */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-stellar-cyan/10 border border-stellar-cyan/40 flex items-center justify-center">
              <Compass className="w-4 h-4 text-stellar-cyan" />
            </div>
            <div>
              <div className="font-cinematic font-bold text-sm tracking-wider text-starlight">
                GANESH YANDIGERI
              </div>
              <div className="text-[10px] font-mono text-stardust">
                EARTH // 12.9716° N, 77.5946° E · BANGALORE
              </div>
            </div>
          </div>

          {/* Social Beacon Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-full cosmic-pill flex items-center justify-center text-stardust hover:text-stellar-cyan hover:border-stellar-cyan/50 transition-colors"
              >
                {icons[link.icon] || <Code2 className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Scroll to Zenith */}
          <button
            onClick={scrollToTop}
            aria-label="Return to Zenith"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full cosmic-pill text-xs font-mono text-stardust hover:text-stellar-cyan transition-colors"
          >
            <span>ZENITH</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-stardust/70">
          <div>
            © {new Date().getFullYear()} GANESH YANDIGERI · ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ORBITAL STACK: NEXT.JS 16 · TAILWIND · FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
