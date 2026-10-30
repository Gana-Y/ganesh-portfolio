'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Menu, X, Terminal, Radio } from 'lucide-react';
import { NAV_LINKS } from '@/data';
import { useScrolled, useActiveSection } from '@/hooks';

export default function SpaceNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
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
    const lenis = (window as any).__lenis;
    const el = document.querySelector(href);
    if (lenis && el) {
      lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'cosmic-hud bg-void/80 border-stellar-cyan/30 shadow-stellar-sm'
              : 'bg-void/40 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo / Coordinates */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as any).__lenis;
              if (lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-7 h-7 rounded-full bg-stellar-cyan/10 border border-stellar-cyan/40 flex items-center justify-center group-hover:border-stellar-cyan transition-colors">
              <Compass className="w-4 h-4 text-stellar-cyan animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinematic font-bold text-sm tracking-wider text-starlight group-hover:text-stellar-cyan transition-colors">
                GANESH<span className="text-stellar-cyan">.</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-stardust -mt-0.5 hidden sm:block">
                SYS::ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-full ${
                    isActive
                      ? 'text-stellar-cyan font-semibold'
                      : 'text-stardust hover:text-starlight'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="space-nav-pill"
                      className="absolute inset-0 rounded-full bg-stellar-cyan/15 border border-stellar-cyan/40 shadow-stellar-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-stellar-cyan animate-ping" />
                    )}
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Transmission CTA & Mobile menu toggle */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Ganesh_Yandigeri_Resume.pdf"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full cosmic-pill text-xs font-mono text-stellar-cyan hover:text-white"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>LOG (PDF)</span>
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stellar-cyan text-void text-xs font-mono font-bold tracking-wider hover:bg-stellar-glow transition-all shadow-stellar-sm"
            >
              <Radio className="w-3 h-3 text-void" />
              <span>TRANSMIT</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full text-starlight hover:text-stellar-cyan"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl cosmic-hud md:hidden flex flex-col gap-3 shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center justify-between text-left py-2 text-sm font-mono uppercase text-starlight hover:text-stellar-cyan border-b border-white/5"
            >
              <span>{link.label}</span>
              <span className="text-xs text-stellar-cyan">→</span>
            </button>
          ))}
          <a
            href="/resume.pdf"
            download="Ganesh_Yandigeri_Resume.pdf"
            className="text-center py-2 text-xs font-mono text-stellar-cyan border border-stellar-cyan/30 rounded-xl mt-2"
          >
            DOWNLOAD RESUME (PDF)
          </a>
        </motion.div>
      )}
    </>
  );
}
