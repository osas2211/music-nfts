import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          1000: "#0A0A0A",
          900: "#121112",
          800: "#1B1819",
          700: "#262424",
          600: "#3C3839",
          500: "#534D4E",
          400: "#797072",
          300: "#B8B2B3",
          200: "#D6D2D3",
          100: "#E3E1E1",
          50: "#EDEBEC",
          0: "#FFFFFF",
        },
        primary: {
          default: "#1AC057",
          hover: "#94FFD8",
          active: "#DAFFFB",
        },
        accent: {
          default: "#8B11A9",
          hover: "#A715CB",
          active: "#B63CD4",
        },
      },
      fontFamily: {
        jersey: ["var(--font-jersey)"],
        arvo: ["var(--font-arvo)"],
      },
    },
  },
  plugins: [],
}
export default config
