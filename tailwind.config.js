import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#DCE0E5",
          200: "#ff0000",
          300: "#00000066",
          400: "#5D7285",
          500: "#E9F5FE",
          600: "#0C7FDA",
          700: "#667A8A",
          800: "#615EF0",
          850: "#F8F9FF",
          900: "#F1F1F1",
          950: "#EDF2F7",
          1000: "#F3F3F3",
          1001: "#68D391",
          1002: "#E2E8F0",
          1003: "#999999",
          1004: "#747070",
          1005: "#14181F",
          1006: "#2196F3",
          1007: "#D9D9D9",
          
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("tailwind-scrollbar-hide")],
};
