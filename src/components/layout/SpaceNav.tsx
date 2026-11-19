'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data';
import { useScrolled, useActiveSection } from '@/hooks';

export default function SpaceNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(24);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement | number, opts?: object) => void } }).__lenis;
    const el = document.querySelector(href);
    if (lenis && el) {
      lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 0.9 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.9 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-[background-color,border-color] duration-150 ease-unslop ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-hairline'
          : 'bg-canvas/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between gap-6">
        {/* Wordmark in custom signature script with shining blue glow */}
        <a
          href="#"
          onClick={scrollToTop}
          className="font-script text-2xl sm:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.7)] hover:drop-shadow-[0_0_22px_rgba(56,189,248,1)] hover:scale-105 transition-all duration-200 shrink-0 select-none py-1"
        >
          Ganesh Yandigeri
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`h-8 px-3 rounded-lg text-sm transition-all duration-150 ease-unslop ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 shadow-[0_0_15px_rgba(56,189,248,0.2)] font-medium'
                    : 'text-secondary hover:text-sky-300 hover:bg-sky-500/10 hover:shadow-[0_0_12px_rgba(56,189,248,0.15)]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Actions: quiet resume link + single primary button */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="Ganesh_Yandigeri_Resume.pdf"
            className="hidden sm:inline-block text-sm text-secondary hover:text-sky-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-150 ease-unslop"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => handleNavClick('#contact')}
            className="h-9 px-4 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-medium border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.35)] hover:from-sky-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] active:scale-[0.98] transition-all duration-150 ease-unslop"
          >
            Get in touch
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-9 w-9 rounded-lg flex items-center justify-center text-secondary hover:text-sky-300 hover:bg-sky-500/10 transition-colors duration-150 ease-unslop"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-[18px] h-[18px]" strokeWidth={1.5} /> : <Menu className="w-[18px] h-[18px]" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-hairline px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`h-10 px-3 rounded-lg text-left text-sm transition-colors duration-150 ease-unslop ${
                  isActive
                    ? 'bg-sky-500/15 text-sky-300 font-medium border border-sky-500/30'
                    : 'text-secondary hover:text-sky-300 hover:bg-sky-500/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="/resume.pdf"
            download="Ganesh_Yandigeri_Resume.pdf"
            className="h-10 px-3 mt-2 rounded-lg border border-hairline flex items-center justify-center text-sm text-primary hover:text-sky-300 hover:border-sky-500/40 hover:bg-sky-500/10 transition-colors duration-150 ease-unslop"
          >
            Download resume (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
