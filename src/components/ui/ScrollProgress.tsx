'use client';

import { useScrollProgress } from '@/hooks';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
      style={{
        transformOrigin: '0%',
        scaleX: progress,
      }}
    />
  );
}
