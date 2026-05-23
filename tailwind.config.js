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
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        void: '#000000',
        abyss: '#030308',
        deep: '#08080f',
        surface: '#0d0d1a',
        elevated: '#12121f',
        border: '#1a1a2e',
        'border-bright': '#2d2d5e',
        neon: {
          purple: '#7c3aed',
          violet: '#8b5cf6',
          bright: '#a78bfa',
          electric: '#c4b5fd',
          glow: '#6d28d9',
        },
        electric: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          indigo: '#6366f1',
        },
        text: {
          primary: '#f8f7ff',
          secondary: '#c4b5fd',
          muted: '#6b7280',
          ghost: '#374151',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
        'aurora': 'linear-gradient(135deg, #6d28d9 0%, #1e40af 50%, #7c3aed 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora-wave': 'auroraWave 10s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(124, 58, 237, 0.8), 0 0 100px rgba(124, 58, 237, 0.4)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        auroraWave: {
          '0%, 100%': { transform: 'translate(0%, 0%) rotate(0deg)', opacity: '0.4' },
          '33%': { transform: 'translate(30%, -30%) rotate(120deg)', opacity: '0.6' },
          '66%': { transform: 'translate(-20%, 20%) rotate(240deg)', opacity: '0.3' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(124, 58, 237, 0.5)',
        'neon-md': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.2)',
        'neon-lg': '0 0 40px rgba(124, 58, 237, 0.6), 0 0 80px rgba(124, 58, 237, 0.3)',
        'neon-xl': '0 0 60px rgba(124, 58, 237, 0.7), 0 0 120px rgba(124, 58, 237, 0.4)',
        'electric': '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
    },
  },
  plugins: [],
};
