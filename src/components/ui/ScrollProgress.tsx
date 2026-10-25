'use client';

import { useScrollProgress } from '@/hooks';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{
        background: 'linear-gradient(90deg, #00d4ff, #38bdf8, #1d4ed8)',
        boxShadow: '0 0 8px rgba(0, 212, 255, 0.6)',
        transformOrigin: '0%',
        scaleX: progress,
      }}
    />
  );
}
