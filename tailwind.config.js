/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      tajawal: ["var(--font-tajawal)", "sans-serif"],
      sans: ["var(--font-tajawal)", "var(--font-geist-sans)", "sans-serif"],
      mono: ["var(--font-geist-mono)", "monospace"],
    },
    extend: {
      colors: {
        indigo: {
          50: "#f0f5ff",
          100: "#e5edff",
          200: "#cddbfe",
          300: "#b4c6fc",
          400: "#8da2fb",
          500: "#6875f5",
          600: "#5850ec",
          700: "#5145cd",
          800: "#42389d",
          900: "#362f78",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
