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
        "starick-green": "#738c4a",
        "starick-brown": "#726658",
        "starick-orange": "#e86e34",
        "starick-olive": "#c3c9a0",
        "starick-white": "#f3f4f6",
        "starick-black": "#030712",
        "messenger-grey": "#f0f0f0"
      }
    }
  },
  safelist: ["bg-white"],
  plugins: []
};
