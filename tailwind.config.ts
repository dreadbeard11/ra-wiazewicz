import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
          secondary: "#80f",
          "secondary-content": "#fff",
          accent: "#f08",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#fff",
          "base-200": "#eee",
          "base-300": "#ddd",
          "base-content": "#346",
          info: "#08f",
          success: "#0f0",
          warning: "#F80",
          error: "#F00",
          
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
      neonx: {
          primary: "#80f",
          "primary-content": "#fff",
          secondary: "#80f",
          "secondary-content": "#fff",
          accent: "#0f0",
          "accent-content": "#00f",
          neutral: "#888",
          "neutral-content": "#ffffff",
          "base-100": "#00f",
          "base-200": "#00e",
          "base-300": "#ddd",
          "base-content": "#fff",
          info: "#08f",
          success: "#0f0",
          warning: "#F80",
          error: "#F00",
          
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
          "base-100": "#000",
          "base-200": "#111",
          "base-300": "#222",
          "base-content": "#fff",
          info: "#08f",
          success: "#0f0",
          warning: "#F80",
          error: "#F00",

          ".logo": {
    "font-family": "Ogg-Bold",
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
 
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
export default config;
