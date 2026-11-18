'use client';

import { useScrollProgress } from '@/hooks';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-accent/80"
      style={{
        transformOrigin: '0%',
        scaleX: progress,
      }}
    />
  );
}
