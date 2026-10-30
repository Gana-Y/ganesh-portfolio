'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface SpotlightTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number; // default: 12
  spotlightColor?: string; // default: rgba(0, 212, 255, 0.18)
  showCrosshairs?: boolean;
  role?: string;
  tabIndex?: number;
}

export default function SpotlightTiltCard({
  children,
  className = '',
  tiltIntensity = 10,
  spotlightColor = 'rgba(0, 212, 255, 0.18)',
  showCrosshairs = true,
  onClick,
  ...props
}: SpotlightTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values for the spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // 3D tilt motion values
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Spring physics for buttery 3D tilt damping
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 24, mass: 0.8 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 24, mass: 0.8 });
  const scale = useSpring(isHovered ? 1.015 : 1, { stiffness: 260, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);

      // Normalize coordinates from -0.5 to +0.5
      const normX = (x / rect.width) - 0.5;
      const normY = (y / rect.height) - 0.5;

      // Calculate tilt degrees (tiltIntensity max degrees)
      rawRotateX.set(-normY * tiltIntensity);
      rawRotateY.set(normX * tiltIntensity);
    },
    [tiltIntensity, mouseX, mouseY, rawRotateX, rawRotateY]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Radial gradients for liquid glass inner glow & outer specular border
  const spotlightBackground = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const borderHighlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(0, 212, 255, 0.45), transparent 70%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      className={`relative group rounded-2xl sm:rounded-3xl transition-shadow duration-500 will-change-transform ${className}`}
      {...(props as any)}
    >
      {/* Dynamic Specular Border Highlight that follows cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
        style={{
          background: borderHighlight,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Liquid Glass Inner Spotlight Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0"
        style={{ background: spotlightBackground }}
      />

      {/* Sci-Fi HUD Corner Crosshairs */}
      {showCrosshairs && (
        <>
          <span className="pointer-events-none absolute top-2 left-2 text-[9px] font-mono text-stellar-cyan/40 group-hover:text-stellar-cyan/80 transition-colors z-20 select-none">
            +
          </span>
          <span className="pointer-events-none absolute top-2 right-2 text-[9px] font-mono text-stellar-cyan/40 group-hover:text-stellar-cyan/80 transition-colors z-20 select-none">
            +
          </span>
          <span className="pointer-events-none absolute bottom-2 left-2 text-[9px] font-mono text-stellar-cyan/40 group-hover:text-stellar-cyan/80 transition-colors z-20 select-none">
            +
          </span>
          <span className="pointer-events-none absolute bottom-2 right-2 text-[9px] font-mono text-stellar-cyan/40 group-hover:text-stellar-cyan/80 transition-colors z-20 select-none">
            +
          </span>
        </>
      )}

      {/* Main Content Body */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
