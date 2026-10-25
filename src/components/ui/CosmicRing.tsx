'use client';

import { motion } from 'framer-motion';

interface CosmicRingProps {
  size?: number;
  className?: string;
  glowColor?: string;
  children?: React.ReactNode;
}

export default function CosmicRing({
  size = 400,
  className = '',
  glowColor = '#00d4ff',
  children,
}: CosmicRingProps) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient blur aura */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(56, 189, 248, 0.2) 50%, transparent 70%)`,
        }}
      />

      {/* Rotating outer segmented arc */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke={glowColor}
            strokeWidth="0.5"
            strokeDasharray="6 8 2 12"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="0.25"
            strokeDasharray="20 40"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Counter-rotating middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[4%] rounded-full pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="0.3"
            strokeDasharray="4 6 12 4"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Main Luminous Neon Eclipse Ring (EXODE style) */}
      <div
        className="absolute inset-[8%] rounded-full pointer-events-none"
        style={{
          border: `2px solid ${glowColor}`,
          boxShadow: `0 0 25px ${glowColor}, 0 0 60px ${glowColor}80, inset 0 0 35px ${glowColor}50`,
        }}
      />

      {/* Dark Singularity / Event Horizon Void */}
      <div className="absolute inset-[10%] rounded-full bg-void/90 backdrop-blur-md overflow-hidden flex items-center justify-center border border-white/5">
        {children}
      </div>
    </div>
  );
}
