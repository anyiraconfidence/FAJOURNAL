/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        secondary: '#111118',
        card: '#17171F',
        primary: '#7C3AED',
        'gradient-start': '#6D28D9',
        'gradient-end': '#9333EA',
        success: '#22C55E',
        danger: '#EF4444',
        'accent-orange': '#F97316',
        'accent-cyan': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '20px',
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(124, 58, 237, 0.5)',
        'purple-glow-lg': '0 0 40px rgba(124, 58, 237, 0.6)',
        'glow': '0 0 15px rgba(124, 58, 237, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};