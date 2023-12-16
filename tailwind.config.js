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
        "starick-green": "var(--starick-green)",
        "starick-brown": "var(--starick-brown)",
        "starick-orange": "var(--starick-orange)",
        "starick-olive": "var(--starick-olive)",
        "starick-white": "var(--starick-white)",
        "starick-black": "var(--starick-black)"
      }
    }
  },
  safelist: ["bg-[--starick-olive]"],
  plugins: []
};
