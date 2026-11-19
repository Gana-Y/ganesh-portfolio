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
        sans: ['Inter', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        body: ['Inter', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['Inter', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'var(--font-mono)', 'monospace'],
        script: ['"Dancing Script"', 'Satisfy', 'cursive'],
      },
      colors: {
        canvas: '#070b14',
        deep: '#04060c',
        surface: '#0d1322',
        raised: '#141c30',
        primary: '#eef3fb',
        secondary: '#94a3b8',
        muted: '#64748b',
        accent: '#38bdf8',
        'accent-glow': 'rgba(56, 189, 248, 0.45)',
        live: '#38bdf8',
        danger: '#e5484d',
        hairline: 'rgba(56, 189, 248, 0.12)',
        'hairline-strong': 'rgba(56, 189, 248, 0.28)',
      },
      transitionTimingFunction: {
        unslop: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
