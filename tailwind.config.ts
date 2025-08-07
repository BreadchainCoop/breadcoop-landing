import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        akzidenz: ["var(--font-inter)", "sans-serif"], // Using Inter for Akzidenz
        univers: ["var(--font-roboto)", "sans-serif"], // Using Roboto for Univers
      },
      colors: {
        "primary-orange": "#EA6023",
        "orange-0": "#FFC080",
        "orange-1": "#D14A0F",
        "orange-2": "#B83C08",
        "primary-jade": "#286B63",
        "jade-0": "#9CACC6",
        "jade-1": "#72849D",
        "jade-2": "#404B5A",
        "primary-blue": "#1C5BB9",
        "blue-0": "#A8C3EA",
        "blue-1": "#588DDB",
        "blue-2": "#1B4A90",
        "paper-main": "#F6F3EB",
        "paper-0": "#FDFCF9",
        "paper-1": "#F0EBE0",
        "paper-2": "#EAE2D6",
        "surface-ink": "#1B201A",
        "surface-grey": "#808080",
        "surface-brown": "#513C35",
        "surface-brown-1": "#301F18",
        "system-green": "#32A800",
        "system-red": "#DF0B00",
        "system-warning": "#CE7F00",
        "text-standard": "#171414",
      },
    },
  },
  plugins: [],
};
export default config;
