'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  FileText,
  CheckCircle2,
  ShieldCheck,
  X,
  Download,
  Eye,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { CERTIFICATIONS } from '@/data';
import { Certification } from '@/types';
import SpotlightTiltCard from '@/components/ui/SpotlightTiltCard';

export default function SpaceCerts() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-stellar-cyan/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Award className="w-3.5 h-3.5 text-stellar-cyan animate-pulse" />
            <span>SECTOR_05 // ACCREDITED MISSIONS</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            ORBITAL CREDENTIALS &amp; <br />
            <span className="shimmer-text">CERTIFICATIONS</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Rigorous enterprise accreditations in Generative AI, cloud infrastructure, and software engineering. Click any credential to inspect.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <SpotlightTiltCard
              key={cert.id}
              tiltIntensity={8}
              spotlightColor="rgba(0, 212, 255, 0.18)"
              showCrosshairs={true}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCert(cert);
                }
              }}
              className="cosmic-hud p-5 sm:p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden cursor-pointer text-left border border-white/10"
            >
              <div>
                {/* Header Icon & Status Beacon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stellar-cyan/10 border border-stellar-cyan/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Certificate Preview Thumbnail */}
                {cert.previewUrl && (
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-white/10 bg-cosmos group-hover:border-stellar-cyan/40 transition-colors">
                    <img
                      src={cert.previewUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-void/50 backdrop-blur-xs">
                      <div className="px-3 py-1.5 rounded-full bg-stellar-cyan text-void text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-stellar-sm">
                        <Eye className="w-3.5 h-3.5" />
                        <span>INSPECT</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="font-cinematic font-bold text-sm sm:text-base text-starlight mb-1.5 leading-snug group-hover:text-stellar-cyan transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono text-stardust mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-starlight/80">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-stellar-cyan flex items-center gap-1">
                  <span>VIEW CREDENTIAL</span>
                </span>
                <span className="text-stellar-cyan group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </SpotlightTiltCard>
          ))}
        </div>

      </div>

      {/* ============================================================== */}
      {/* COSMIC HUD CREDENTIAL INSPECTOR MODAL                          */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-void/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl cosmic-hud border border-stellar-cyan/40 bg-cosmos/95 p-5 sm:p-8 shadow-stellar-lg z-10 flex flex-col justify-between"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-stellar-cyan/15 border border-stellar-cyan/30 flex items-center justify-center text-3xl shrink-0">
                    {selectedCert.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>AUTHENTICATED CREDENTIAL</span>
                      </span>
                      <span className="text-[10px] font-mono text-stardust">
                        ISSUED: {selectedCert.date}
                      </span>
                    </div>
                    <h3 className="font-cinematic font-bold text-lg sm:text-2xl text-starlight leading-tight">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs font-mono text-stellar-cyan mt-0.5">
                      {selectedCert.issuer} {selectedCert.credentialId && `· ID: ${selectedCert.credentialId}`}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-stardust hover:text-white transition-colors shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Full Visual Preview */}
              <div className="my-5 relative rounded-2xl overflow-hidden border border-stellar-cyan/30 bg-void/80 shadow-inner group">
                {selectedCert.previewUrl ? (
                  <div className="relative w-full max-h-[55vh] flex justify-center bg-black/40 overflow-hidden">
                    <img
                      src={selectedCert.previewUrl}
                      alt={selectedCert.title}
                      className="max-h-[55vh] w-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div className="py-20 text-center text-stardust font-mono text-xs">
                    Preview rendered in vector format. Click &ldquo;Open Full PDF&rdquo; below to view.
                  </div>
                )}

                {/* Corner decorative anchors */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-stellar-cyan pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-stellar-cyan pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-stellar-cyan pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-stellar-cyan pointer-events-none" />
              </div>

              {/* Skills Tags */}
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div className="mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stardust block mb-2">
                    VALIDATED COMPETENCIES &amp; SKILLS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-starlight"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Footer Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="text-[11px] font-mono text-stardust flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>DIGITALLY SIGNED // SECURE FILE</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {selectedCert.pdfUrl && (
                    <>
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stellar-cyan text-void text-xs font-mono font-bold hover:bg-stellar-glow transition-colors shadow-stellar-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>OPEN FULL PDF</span>
                      </a>

                      <a
                        href={selectedCert.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-starlight transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>DOWNLOAD</span>
                      </a>
                    </>
                  )}

                  {selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-stellar-cyan transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>VERIFY ONLINE</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
