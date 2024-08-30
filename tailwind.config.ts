/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      inset: {
        "17": "68px",
        "26": "104px",
      },
      colors: {
        primary: "#8ec2ce",
        // primary: "#bf896b",
        // secondary: "#2d2d2d",
        secondary: "#035069",
        tertiary: "#f0f4f8",
      },
      fontFamily: {
        brush: ["var(--font-alex-brush)"],
        ptSerif: ["var(--font-pt-serif)"],
        bitter: ["var(--font-bitter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
