'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/data';

export default function SpaceCerts() {
  return (
    <section id="certifications" className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-void">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-10 left-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cosmic-pill mb-4 text-xs font-mono text-stellar-cyan">
            <Award className="w-3.5 h-3.5 text-stellar-cyan" />
            <span>SECTOR_05 // ACCREDITED MISSIONS</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl font-extrabold tracking-tight text-starlight leading-tight">
            ORBITAL CREDENTIALS &amp; <br />
            <span className="gradient-stellar">CERTIFICATIONS</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-stardust mt-4 tracking-wide max-w-xl mx-auto">
            Rigorous enterprise accreditations in Generative AI, cloud infrastructure, and software engineering.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cosmic-hud cosmic-hud-hover p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Orbital Medallion Icon */}
                <div className="w-14 h-14 rounded-2xl bg-stellar-cyan/10 border border-stellar-cyan/30 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>

                {/* Title */}
                <h3 className="font-cinematic font-bold text-base text-starlight mb-1.5 leading-snug group-hover:text-stellar-cyan transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-mono text-stardust mb-4">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-starlight/80">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stellar-cyan">VERIFIED_CREDENTIAL</span>
                <span className="text-stellar-cyan group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
