/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1218',
          panel: '#161A22',
          raised: '#1C212B',
          line: '#262C38',
          text: '#E8EAEF',
          mute: '#8B94A7',
          faint: '#5B6475',
        },
        accent: {
          DEFAULT: '#8AA4FF',
          strong: '#A9BCFF',
          dim: 'rgba(138, 164, 255, 0.12)',
        },
        live: '#3DDC97',
        // Legacy token names, remapped so the terminal modal matches the new palette.
        cyber: {
          green: '#8AA4FF',
          cyan: '#A9BCFF',
          blue: '#8AA4FF',
          pink: '#F2788F',
          orange: '#E9B872',
          purple: '#B49CFF',
          dark: '#0F1218',
          darker: '#0B0E13',
        },
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
