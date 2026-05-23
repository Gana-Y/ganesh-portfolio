'use client';

import { useScrollProgress } from '@/hooks';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px]"
      style={{
        background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4)',
        transformOrigin: '0%',
        scaleX: progress,
      }}
    />
  );
}
