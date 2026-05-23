'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Zap, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '@/data';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t border-neon-purple/15">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-electric-blue flex items-center justify-center shadow-neon-sm">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg text-text-primary">
                Ganesh<span className="text-neon-bright">.</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Aspiring AI Engineer building intelligent systems at the intersection of healthcare and finance.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: PERSONAL_INFO.github, icon: Github },
                { href: PERSONAL_INFO.linkedin, icon: Linkedin },
                { href: PERSONAL_INFO.twitter, icon: Twitter },
                { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-bright hover:border-neon-purple/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-text-muted hover:text-neon-bright transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-text-muted hover:text-neon-bright transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm text-text-muted hover:text-neon-bright transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="text-sm text-text-ghost">India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-text-ghost text-xs font-mono">
            © {new Date().getFullYear()} Ganesh Y. Built with Next.js & ❤️
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-neon-bright transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
