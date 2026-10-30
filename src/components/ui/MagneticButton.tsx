'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.22,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // High-inertia spring physics for tactile tactile magnetic feel
  const x = useSpring(rawX, { stiffness: 320, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 320, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    rawX.set((e.clientX - centerX) * strength);
    rawY.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-shadow active:scale-95 will-change-transform cursor-pointer ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
