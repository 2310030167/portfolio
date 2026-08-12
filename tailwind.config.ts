import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070708",
        brand: {
          peach: "#FFA586", // Warm Apricot / Peach Silk (Primary Warm Accent)
          navy: "#161B2F",  // Deep Midnight Obsidian (Atmospheric Base)
          slate: "#242F49", // Slate Navy (Surface & Card Accent)
          steel: "#384358", // Muted Steel
          crimson: "#B51A2B",
          burgundy: "#541A2E",
        },
        surface: {
          50: "#18181c",
          100: "#141418",
          200: "#0f0f13",
          DEFAULT: "#0b0b0e",
          card: "#0c0d12",
          hover: "#13151f",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
