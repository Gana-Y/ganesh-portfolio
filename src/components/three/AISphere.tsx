'use client';

import { motion } from 'framer-motion';

export default function AISphere() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center relative">

      {/* Outer glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-80 h-80 rounded-full blur-[80px] opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, #3b82f6 100%)' }}
        />
      </div>

      {/* Main sphere */}
      <div className="relative w-64 h-64 flex items-center justify-center">

        {/* Core glowing sphere */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #a78bfa, #7c3aed, #4c1d95)',
            boxShadow: '0 0 60px rgba(124,58,237,0.6), 0 0 120px rgba(124,58,237,0.3), inset 0 0 40px rgba(167,139,250,0.2)',
          }}
        />

        {/* Wireframe rings */}
        {[0, 60, 120].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full border border-neon-purple/40"
            style={{ transform: `rotateX(${deg}deg) rotateY(${deg}deg)` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8 + i * 4, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Orbit ring 1 */}
        <motion.div
          className="absolute w-56 h-56 rounded-full border border-neon-purple/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ borderStyle: 'dashed' }}
        >
          {/* Dot on orbit 1 */}
          <div
            className="absolute w-3 h-3 rounded-full -top-1.5 left-1/2 -translate-x-1/2"
            style={{ background: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }}
          />
        </motion.div>

        {/* Orbit ring 2 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-electric-blue/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          {/* Dot on orbit 2 */}
          <div
            className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
            style={{ background: '#60a5fa', boxShadow: '0 0 8px #60a5fa' }}
          />
        </motion.div>

        {/* Orbit ring 3 */}
        <motion.div
          className="absolute w-48 h-48 rounded-full border border-cyan-500/20"
          style={{ transform: 'rotateX(70deg)', borderStyle: 'dotted' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute w-2 h-2 rounded-full -top-1 left-1/2 -translate-x-1/2"
            style={{ background: '#06b6d4', boxShadow: '0 0 8px #06b6d4' }}
          />
        </motion.div>

        {/* Floating particles */}
        {[
          { x: -90, y: -60, size: 3, color: '#a78bfa', delay: 0 },
          { x: 90, y: -80, size: 2, color: '#60a5fa', delay: 0.5 },
          { x: -100, y: 40, size: 2, color: '#34d399', delay: 1 },
          { x: 85, y: 60, size: 3, color: '#a78bfa', delay: 1.5 },
          { x: -40, y: 100, size: 2, color: '#06b6d4', delay: 0.8 },
          { x: 50, y: -110, size: 2, color: '#60a5fa', delay: 1.2 },
          { x: 110, y: 0, size: 2, color: '#34d399', delay: 0.3 },
          { x: -110, y: -20, size: 2, color: '#a78bfa', delay: 1.8 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size * 2,
              height: p.size * 2,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              left: `calc(50% + ${p.x}px)`,
              top: `calc(50% + ${p.y}px)`,
            }}
            animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}

        {/* Neural network lines (SVG) */}
        <svg className="absolute w-64 h-64 opacity-20" viewBox="0 0 256 256">
          <line x1="128" y1="20"  x2="200" y2="80"  stroke="#7c3aed" strokeWidth="0.5" />
          <line x1="128" y1="20"  x2="56"  y2="80"  stroke="#7c3aed" strokeWidth="0.5" />
          <line x1="200" y1="80"  x2="220" y2="160" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="56"  y1="80"  x2="36"  y2="160" stroke="#3b82f6" strokeWidth="0.5" />
          <line x1="200" y1="80"  x2="128" y2="180" stroke="#7c3aed" strokeWidth="0.5" />
          <line x1="56"  y1="80"  x2="128" y2="180" stroke="#7c3aed" strokeWidth="0.5" />
          <line x1="128" y1="20"  x2="128" y2="180" stroke="#a78bfa" strokeWidth="0.3" />
          <circle cx="128" cy="20"  r="3" fill="#a78bfa" opacity="0.8" />
          <circle cx="200" cy="80"  r="3" fill="#7c3aed" opacity="0.8" />
          <circle cx="56"  cy="80"  r="3" fill="#7c3aed" opacity="0.8" />
          <circle cx="220" cy="160" r="3" fill="#3b82f6" opacity="0.8" />
          <circle cx="36"  cy="160" r="3" fill="#3b82f6" opacity="0.8" />
          <circle cx="128" cy="180" r="3" fill="#a78bfa" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}