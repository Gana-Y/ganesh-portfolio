'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, FileText } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp } from '@/animations/variants';

const CERTIFICATIONS = [
  {
    id: '1',
    title: 'OCI 2025 Certified Generative AI Professional',
    issuer: 'Oracle University',
    date: 'Oct 2025',
    credentialUrl: '',
    pdfUrl: '/certs/oracle-gen-ai-professional.pdf',
    icon: '🏆',
    color: 'from-orange-600/20 to-red-600/10',
    border: 'border-orange-500/30',
  },
  {
    id: '2',
    title: 'OCI 2025 AI Foundations Associate',
    issuer: 'Oracle University',
    date: 'Aug 2025',
    credentialUrl: '',
    pdfUrl: '/certs/oracle-ai-foundations.pdf',
    icon: '🔮',
    color: 'from-red-600/20 to-orange-600/10',
    border: 'border-red-500/30',
  },
  {
    id: '3',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase · Forage',
    date: 'Sep 2025',
    credentialUrl: '',
    pdfUrl: '/certs/jpmorgan-forage.pdf',
    icon: '🏦',
    color: 'from-blue-600/20 to-indigo-600/10',
    border: 'border-blue-500/30',
  },
  {
    id: '4',
    title: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    date: 'Sep 2025',
    credentialUrl: 'https://coursera.org/verify/FJTN4M7JRA72',
    pdfUrl: '/certs/google-python.pdf',
    icon: '🐍',
    color: 'from-green-600/20 to-emerald-600/10',
    border: 'border-green-500/30',
  },
];

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="section-padding">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Credentials & Learning"
          description="Structured learning supplementing hands-on project work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className={`glass-card rounded-2xl p-6 border ${cert.border} bg-gradient-to-br ${cert.color} hover:shadow-neon-sm transition-all group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-black/30 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>

              <h3 className="font-display font-semibold text-text-primary mb-1 text-base leading-snug group-hover:text-neon-bright transition-colors">
                {cert.title}
              </h3>
              <p className="text-text-muted text-xs font-mono mb-4">{cert.issuer}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neon-bright/70 border border-neon-purple/20 rounded-full px-2 py-0.5">
                  {cert.date}
                </span>

                <div className="flex items-center gap-2">
                  {/* PDF button */}
                  {cert.pdfUrl && (
                    <motion.a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neon-purple/20 border border-neon-purple/40 text-xs font-mono text-neon-bright hover:bg-neon-purple/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FileText className="w-3 h-3" />
                      PDF
                    </motion.a>
                  )}
                  {/* Verify link — only if credentialUrl is set */}
                  {cert.credentialUrl && (
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-neon-bright hover:border-neon-purple/40 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Verify Credential"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-purple/20 text-text-muted text-sm font-mono">
            <Award className="w-4 h-4 text-neon-bright" />
            More certifications being added continuously
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}