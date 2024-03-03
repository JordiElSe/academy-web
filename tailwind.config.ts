import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        115: "1.15",
      },
      height: {
        "9/10": "90vh",
      },
      animation: {
        expand: "expand 0.3s ease-in-out forwards",
        shrink: "shrink 0.3s ease-in-out forwards",
      },
      keyframes: {
        expand: {
          "0%": { width: "5rem" },
          "100%": { width: "14rem" },
        },
        shrink: {
          "0%": { width: "14rem" },
          "100%": { width: "5rem" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
