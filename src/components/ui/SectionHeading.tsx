'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '@/animations/variants';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 justify-center">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-neon-purple" />
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-bright">
          {label}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-neon-purple" />
      </motion.div>

      <motion.h2
        variants={fadeInUp}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
