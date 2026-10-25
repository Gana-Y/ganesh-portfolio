/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cinematic: ['Cinzel', 'var(--font-display)', 'serif'],
        display: ['Space Grotesk', 'var(--font-display)', 'sans-serif'],
        body: ['DM Sans', 'var(--font-body)', 'sans-serif'],
        mono: ['JetBrains Mono', 'var(--font-mono)', 'monospace'],
      },
      colors: {
        void: '#020205',
        abyss: '#030308',
        cosmos: '#070b16',
        nebula: '#0b1329',
        stellar: {
          cyan: '#00d4ff',
          glow: '#38bdf8',
          blue: '#1d4ed8',
          deep: '#0369a1',
        },
        plasma: {
          amber: '#f59e0b',
          orange: '#ff6b35',
          coral: '#fb7185',
        },
        starlight: {
          DEFAULT: '#f0f6fc',
          muted: '#94a3b8',
          ghost: '#475569',
        },
        border: {
          stellar: 'rgba(0, 212, 255, 0.2)',
          subtle: 'rgba(255, 255, 255, 0.08)',
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, #0b1a3a 0%, #030308 75%)',
        'singularity': 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(7,11,22,0.8) 50%, #030308 100%)',
        'ring-gradient': 'conic-gradient(from 0deg, #00d4ff, #3b82f6, #6366f1, #00d4ff)',
      },
      animation: {
        'ring-spin': 'ringSpin 20s linear infinite',
        'ring-pulse': 'ringPulse 4s ease-in-out infinite',
        'iris-glow': 'irisGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'star-twinkle': 'twinkle 3s ease-in-out infinite',
        'unveil': 'unveil 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        ringSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ringPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        irisGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 35px rgba(0, 212, 255, 0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        unveil: {
          '0%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleY(0)', opacity: '0' },
        },
      },
      boxShadow: {
        'stellar-sm': '0 0 15px rgba(0, 212, 255, 0.35)',
        'stellar-md': '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(56, 189, 248, 0.15)',
        'stellar-lg': '0 0 50px rgba(0, 212, 255, 0.5), 0 0 100px rgba(0, 212, 255, 0.25)',
        'cosmic-card': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 1px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
