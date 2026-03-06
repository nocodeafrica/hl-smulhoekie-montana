import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E05D36", // Warm terracotta / burnt orange
          dark: "#C14B29",
          light: "#EBA38B",
        },
        background: {
          DEFAULT: "#FDFBF7", // Cream / off-white
          alt: "#F4F0EA",
        },
        surface: "#FFFFFF",
        charcoal: {
          DEFAULT: "#2D2D2D",
          light: "#4A4A4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'dropdown': '0 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};

export default config;
