import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        paper: '#F2F2F2',
        softRed: '#B4251D',
        berryGrey: '#EAE5DF',
        matcha: '#CCCC00',
        sky: '#99C7E1',
        fadedRed: '#D84E2A'
      },
      borderRadius: { xl: '1rem', '2xl': '1.5rem' },
      fontFamily: {
        heading: ['var(--font-heading)', '"Fira Code"', 'ui-monospace', 'monospace'],
        body: ['var(--font-body)', '"Work Sans"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
