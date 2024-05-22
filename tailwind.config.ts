import type { Config } from "tailwindcss";

const config: Config = {

  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "darkx",
  darkMode: ["selector", "[data-theme='darkx']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        lightx: {
          primary: "#f0f",
          "primary-content": "#fff",
          secondary: "#f08",
          "secondary-content": "#fff",
          accent: "#0ff",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#eee",
          "base-300": "#ddd",
          "base-content": "#00f",
          info: "#08f",
          success: "#0f0",
          warning: "#F80",
          error: "#F00",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        darkx: {
          primary: "#f0f",
          "primary-content": "#fff",
          secondary: "#f08",
          "secondary-content": "#fff",
          accent: "#0ff",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#eee",
          "base-300": "#ddd",
          "base-content": "#00f",
          info: "#08f",
          success: "#0f0",
          warning: "#F80",
          error: "#F00",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
export default config;
