'use client';

import React from 'react';

interface BorderBeamProps {
  className?: string;
  duration?: number; // seconds per cycle
  colorFrom?: string;
  colorTo?: string;
  glowIntensity?: string;
}

export default function BorderBeam({
  className = '',
  duration = 8,
  colorFrom = '#00d4ff',
  colorTo = '#38bdf8',
  glowIntensity = 'rgba(0, 212, 255, 0.4)',
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden z-20 ${className}`}
      style={{
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        padding: '1.5px',
      }}
    >
      <div
        className="absolute -inset-[150%] animate-spin-slow opacity-90"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 290deg, ${colorFrom} 340deg, ${colorTo} 360deg)`,
          animationDuration: `${duration}s`,
          filter: `drop-shadow(0 0 10px ${glowIntensity})`,
        }}
      />
    </div>
  );
}
