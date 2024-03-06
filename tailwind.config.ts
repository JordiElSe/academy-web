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
      colors: {
        light: {
          primary: "oklch(49.12% 0.3096 275.75)",
          secondary: "oklch(69.71% 0.329 342.55)",
          "secondary-content": "oklch(98.71% 0.0106 342.55)",
          accent: "oklch(76.76% 0.184 183.61)",
          neutral: "#2B3440",
          "neutral-content": "#D7DDE4",
          "base-100": "oklch(100% 0 0)",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
        },
        dark: {
          primary: "oklch(65.69% 0.196 275.75)",
          secondary: "oklch(74.8% 0.26 342.55)",
          accent: "oklch(74.51% 0.167 183.61)",
          neutral: "#2a323c",
          "neutral-content": "#A6ADBB",
          "base-100": "#1d232a",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "base-content": "#A6ADBB",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
        },
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
