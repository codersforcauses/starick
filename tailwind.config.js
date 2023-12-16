/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        'light-green': '#C3C9A0',
        'dark-green': '#738C4B',
        'orange': '#E86E34',
        'background-white': '#FDFFFA',
        'brown': '#786868'
      }
    }
  },
  safelist: [
    'bg-[--starick-olive]'
  ],
  plugins: []
};
