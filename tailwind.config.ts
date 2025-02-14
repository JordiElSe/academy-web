import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      perspective: {
        "1000": "1000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      transitionDelay: {
        "600": "600ms",
      },
      //   backgroundColor: {
      //     "bg-100": "var(--bg-100)",
      //     "bg-200": "var(--bg-200)",
      //     "bg-300": "var(--bg-300)",
      //     "bg-400": "var(--bg-400)",
      //     "bg-500": "var(--bg-500)",
      //     "bg-600": "var(--bg-600)",
      //     "bg-700": "var(--bg-700)",
      //     "bg-800": "var(--bg-800)",
      //     "bg-900": "var(--bg-900)",
      //   },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "bg-50": "hsl(var(--bg-50))",
        "bg-100": "hsl(var(--bg-100))",
        "bg-200": "hsl(var(--bg-200))",
        "bg-300": "hsl(var(--bg-300))",
        "bg-400": "hsl(var(--bg-400))",
        "bg-500": "hsl(var(--bg-500))",
        "bg-600": "hsl(var(--bg-600))",
        "bg-700": "hsl(var(--bg-700))",
        "bg-800": "hsl(var(--bg-800))",
        "bg-900": "hsl(var(--bg-900))",
        foreground: "hsl(var(--foreground))",
        primary: {
          dark: "#8962FA",
          DEFAULT: "#8962FA",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#8962FA",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      scale: {
        "115": "1.15",
      },
      keyframes: {
        pingWithDelay: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(2.5)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0",
          },
        },
        "fade-in-out": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "w-expand": {
          "0%": {
            width: "5rem",
          },
          "100%": {
            width: "14rem",
          },
        },
        "w-shrink": {
          "0%": {
            width: "14rem",
          },
          "100%": {
            width: "5rem",
          },
        },
        "ml-expand": {
          "0%": {
            marginLeft: "5rem",
          },
          "100%": {
            marginLeft: "14rem",
          },
        },
        "ml-shrink": {
          "0%": {
            marginLeft: "14rem",
          },
          "100%": {
            marginLeft: "5rem",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "w-expand": "w-expand 0.3s ease-in-out forwards",
        "w-shrink": "w-shrink 0.3s ease-in-out forwards",
        "ml-expand": "ml-expand 0.3s ease-in-out forwards",
        "ml-shrink": "ml-shrink 0.3s ease-in-out forwards",
        "fade-in-out": "fade-in-out 6s infinite",
        pingWithDelay: "pingWithDelay 3s ease-in-out infinite",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
