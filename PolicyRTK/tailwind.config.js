/** @type {import('tailwindcss').Config} */
/* Tailwind Config in your tailwind.config.js */

module.exports = {
  theme: {
    extend: {
      colors: {
        customLightBlue: '#f0f9ff', // Custom light blue background
        customIndigo: '#4c51bf', // Custom indigo color for buttons and icons
      },
      boxShadow: {
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '72': '18rem', // Custom spacing if needed
      },
    },
  },
  variants: {},
  plugins: [],
};
