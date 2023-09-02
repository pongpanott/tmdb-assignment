/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans',
      },
      aspectRatio: {
        poster: '1 / 1.7',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '16px'],
        base: ['16px', '16px'],
        lg: ['18px', '23px'],
      },
      colors: {
        grey: {
          200: '#E5E7EB',
          400: '#9CA3AF',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
