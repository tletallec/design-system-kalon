/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Core
        navy: {
          DEFAULT: '#1C3557',
          deep:    '#0F1F35',
          light:   '#EBF1F8',
        },
        // Accent Principal
        emerald: {
          DEFAULT: '#1E7A52', // CTA sur fond clair
          vivid:   '#2ecc9b', // CTA sur fond sombre
        },
        // Surface & Neutral
        surface: {
          DEFAULT: '#FFFFFF',
          soft:    '#F4F7FA',
        },
        border:   '#D9E3EE',
        // Text
        text: {
          DEFAULT:  '#0F1F35',
          muted:    '#4A637E',
          disabled: '#94A3B8',
        },
        // Verticales Métier
        vert: {
          DEFAULT: '#2ecc9b',
          dark:    '#1E7A52',
        },
        teal: {
          DEFAULT: '#0ea5a0',
          dark:    '#0a8a86',
        },
        bleu: {
          DEFAULT: '#4DA3FF',
          dark:    '#2f85dc',
        },
        violet: {
          DEFAULT: '#7C3AED',
          dark:    '#6D28D9',
        },
        // Semantic
        success: '#1E7A52',
        warning: '#D97706',
        error:   '#DC2626',
        info:    '#2f85dc',
      },

      fontFamily: {
        display: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['72px', { lineHeight: '76px', letterSpacing: '-1px',    fontWeight: '700' }],
        'display-l':  ['56px', { lineHeight: '60px', letterSpacing: '-0.5px',  fontWeight: '700' }],
        'headline-l': ['40px', { lineHeight: '48px', letterSpacing: '-0.25px', fontWeight: '600' }],
        'headline-m': ['32px', { lineHeight: '40px', letterSpacing: '0',       fontWeight: '600' }],
        'headline-s': ['24px', { lineHeight: '32px', letterSpacing: '0',       fontWeight: '600' }],
        'title-l':    ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'title-m':    ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-l':     ['18px', { lineHeight: '28px' }],
        'body-m':     ['16px', { lineHeight: '24px' }],
        'body-s':     ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'label-l':    ['14px', { lineHeight: '20px', letterSpacing: '0.5px', fontWeight: '500' }],
        'label-m':    ['12px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
        'label-s':    ['11px', { lineHeight: '14px', letterSpacing: '0.8px', fontWeight: '600' }],
        'eyebrow':    ['11px', { lineHeight: '14px', letterSpacing: '1.5px', fontWeight: '600' }],
      },

      borderRadius: {
        none:  '0px',
        sm:    '4px',
        DEFAULT: '8px',
        md:    '8px',
        lg:    '12px',
        xl:    '16px',
        badge: '6px',
        full:  '9999px',
      },

      boxShadow: {
        'elevation-0': 'none',
        'elevation-1': '0 1px 3px rgb(15 31 53 / .08), 0 1px 2px rgb(15 31 53 / .06)',
        'elevation-2': '0 4px 8px rgb(15 31 53 / .10), 0 2px 4px rgb(15 31 53 / .06)',
        'elevation-3': '0 8px 24px rgb(15 31 53 / .12), 0 4px 8px rgb(15 31 53 / .08)',
        'elevation-4': '0 16px 40px rgb(15 31 53 / .16), 0 8px 16px rgb(15 31 53 / .10)',
      },

      spacing: {
        '1':  '4px',
        '2':  '8px',
        '3':  '12px',
        '4':  '16px',
        '5':  '20px',
        '6':  '24px',
        '8':  '32px',
        '10': '40px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },

      maxWidth: {
        container: '1280px',
        prose:     '680px',
      },

      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },

      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        enter:    'cubic-bezier(0, 0, 0.2, 1)',
        exit:     'cubic-bezier(0.4, 0, 1, 1)',
        hover:    'cubic-bezier(0.2, 0, 0, 1)',
      },

      transitionDuration: {
        hover:    '150ms',
        enter:    '250ms',
        standard: '300ms',
        exit:     '200ms',
      },

      zIndex: {
        card:     '10',
        dropdown: '100',
        sticky:   '200',
        banner:   '900',
        header:   '1000',
        fab:      '1000',
        drawer:   '1100',
        modal:    '1200',
        toast:    '1300',
      },

      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        shimmer:   'shimmer 1.5s infinite linear',
        'slide-up': 'slide-up 250ms cubic-bezier(0, 0, 0.2, 1)',
        'fade-in':  'fade-in 250ms cubic-bezier(0, 0, 0.2, 1)',
        'scale-in': 'scale-in 250ms cubic-bezier(0, 0, 0.2, 1)',
        spin:       'spin 700ms linear infinite',
      },
    },
  },
  plugins: [],
};
