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
      },
      colors: {
        canvas: '#0b0d14',
        deep: '#07080d',
        surface: '#11141c',
        raised: '#1a1e28',
        primary: '#eef0f5',
        secondary: '#a3a9b8',
        muted: '#7a8296',
        accent: '#2dd4bf',
        live: '#4cc38a',
        danger: '#e5484d',
        hairline: 'rgba(238, 240, 245, 0.08)',
        'hairline-strong': 'rgba(238, 240, 245, 0.16)',
      },
      transitionTimingFunction: {
        unslop: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
