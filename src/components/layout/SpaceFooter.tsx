'use client';

import { Github, Linkedin, Twitter, Code2, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" strokeWidth={1.5} />,
  linkedin: <Linkedin className="w-4 h-4" strokeWidth={1.5} />,
  twitter: <Twitter className="w-4 h-4" strokeWidth={1.5} />,
  code: <Code2 className="w-4 h-4" strokeWidth={1.5} />,
  mail: <Mail className="w-4 h-4" strokeWidth={1.5} />,
};

export default function SpaceFooter() {
  const scrollToTop = () => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.9 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-hairline bg-deep py-12 text-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-hairline">
          <div>
            <div className="font-script text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
              Ganesh Yandigeri
            </div>
            <div className="text-xs font-mono text-muted mt-1">
              Python &amp; AI Systems Engineer · Bangalore, India
            </div>
          </div>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="w-9 h-9 rounded-lg border border-hairline bg-surface flex items-center justify-center text-muted hover:text-sky-400 hover:border-sky-500/50 hover:shadow-[0_0_14px_rgba(56,189,248,0.3)] hover:bg-sky-500/10 transition-all duration-150 ease-unslop"
              >
                {iconMap[link.icon] || <Code2 className="w-4 h-4" strokeWidth={1.5} />}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="h-9 px-3.5 rounded-lg border border-hairline bg-surface inline-flex items-center gap-2 text-xs text-secondary hover:text-sky-300 hover:border-sky-500/50 hover:shadow-[0_0_14px_rgba(56,189,248,0.3)] hover:bg-sky-500/10 transition-all duration-150 ease-unslop"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-muted group-hover:text-sky-400" strokeWidth={1.5} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} Ganesh Yandigeri</span>
          <span className="font-mono text-sky-400/80">Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
