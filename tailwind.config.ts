import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      spacing: {
        '25': '6.25rem',
        '6.5px': '6.5px'
      },
    },
    fontFamily: {
      'mazzard': ['Mazzard'],
      'soft': ['"Mazzard Soft"'],
    },
  },
  plugins: [],
} satisfies Config

