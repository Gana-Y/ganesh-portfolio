'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Cpu,
  Briefcase,
  Code2,
  ExternalLink,
  FileText,
  X,
  Download,
  type LucideIcon,
} from 'lucide-react';
import { CERTIFICATIONS } from '@/data';
import { Certification } from '@/types';

const CERT_ICONS: Record<string, LucideIcon> = {
  award: Award,
  cpu: Cpu,
  briefcase: Briefcase,
  code: Code2,
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SpaceCerts() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-20 sm:py-24 bg-canvas border-t border-hairline">
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
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.02em] leading-[1.15] text-primary">
            Verified credentials
          </h2>
          <p className="text-sm text-secondary mt-3">
            Select any credential to inspect the full certificate, competency list, or original PDF.
          </p>
        </motion.div>

        {/* Credentials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => {
            const IconComponent = CERT_ICONS[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                className="p-5 rounded-2xl bg-surface border border-hairline hover:border-hairline-strong transition-colors duration-150 ease-unslop flex flex-col justify-between cursor-pointer text-left"
              >
                <div>
                  {/* Top row: icon and issue date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-raised border border-hairline flex items-center justify-center text-muted">
                      <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-muted tabular-nums">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate preview thumbnail */}
                  {cert.previewUrl && (
                    <div className="w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-hairline bg-deep">
                      <img
                        src={cert.previewUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  )}

                  {/* Title and issuer */}
                  <h3 className="text-[15px] font-medium text-primary leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted mt-1.5">
                    {cert.issuer}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="h-8 px-3 rounded-lg bg-raised border border-hairline text-xs font-medium text-primary hover:border-hairline-strong transition-colors duration-150 ease-unslop"
                  >
                    View certificate
                  </button>

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-lg bg-raised border border-hairline flex items-center justify-center text-muted hover:text-primary hover:border-hairline-strong transition-colors duration-150 ease-unslop"
                      title="Open PDF directly"
                      aria-label={`Open ${cert.title} PDF`}
                    >
                      <FileText className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Credential Inspector Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: EASE }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-deep/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: EASE }}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-surface border border-hairline-strong p-6 sm:p-8 z-10 flex flex-col gap-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-hairline">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted mb-1.5">
                    <span>{selectedCert.issuer}</span>
                    <span>·</span>
                    <span>Issued {selectedCert.date}</span>
                    {selectedCert.credentialId && (
                      <>
                        <span>·</span>
                        <span>ID {selectedCert.credentialId}</span>
                      </>
                    )}
                  </div>
                  <h3
                    id="cert-modal-title"
                    className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-primary leading-snug"
                  >
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-lg bg-raised border border-hairline flex items-center justify-center text-secondary hover:text-primary hover:border-hairline-strong transition-colors duration-150 shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>

              {/* High-res certificate render */}
              <div className="rounded-xl overflow-hidden border border-hairline bg-deep">
                {selectedCert.previewUrl ? (
                  <div className="w-full max-h-[55vh] flex justify-center bg-deep">
                    <img
                      src={selectedCert.previewUrl}
                      alt={selectedCert.title}
                      className="max-h-[55vh] w-auto object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="py-16 text-center text-muted text-sm">
                    Open the PDF below to inspect this certificate.
                  </div>
                )}
              </div>

              {/* Competencies */}
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div>
                  <span className="font-mono text-xs text-muted block mb-2">
                    Validated skills
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-raised border border-hairline text-xs text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action footer */}
              <div className="pt-4 border-t border-hairline flex flex-wrap items-center justify-end gap-2">
                {selectedCert.pdfUrl && (
                  <>
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 px-4 rounded-lg bg-primary text-canvas text-xs font-medium inline-flex items-center gap-1.5 hover:bg-primary/90 transition-colors duration-150"
                    >
                      <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span>Open full PDF</span>
                    </a>

                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="h-9 px-3.5 rounded-lg bg-raised border border-hairline text-xs font-medium text-primary inline-flex items-center gap-1.5 hover:border-hairline-strong transition-colors duration-150"
                    >
                      <Download className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                      <span>Download</span>
                    </a>
                  </>
                )}

                {selectedCert.credentialUrl && selectedCert.credentialUrl !== '#' && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3.5 rounded-lg bg-raised border border-hairline text-xs font-medium text-secondary hover:text-primary inline-flex items-center gap-1.5 hover:border-hairline-strong transition-colors duration-150"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                    <span>Verify online</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
