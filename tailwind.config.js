/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          steel:     '#3B3F45',
          'steel-dk':'#1E2126',
          red:       '#C0392B',
          'red-hover':'#A93226',
          'red-light':'#FADBD8',
          blue:      '#2E86C1',
          'blue-dk': '#1A5276',
          'blue-light':'#D6EAF8',
          off:       '#F7F8FA',
          grey100:   '#EEF0F2',
          grey200:   '#D5D8DC',
          grey600:   '#6C7A89',
          grey800:   '#2C3E50',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        card:    '0 4px 16px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 48px rgba(0,0,0,0.1)',
        modal:   '0 24px 64px rgba(0,0,0,0.25)',
        glow:    '0 8px 24px rgba(192,57,43,0.25)',
        banner:  '0 12px 40px rgba(192,57,43,0.35)',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '1' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
