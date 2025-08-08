// src/app/fonts.ts
import localFont from "next/font/local";

// Akzidenz-Grotesk (900)
export const akzidenz = localFont({
  src: [
    {
      path: "../fonts/akzidenz/AkzidenzGroteskBE-Super.otf",
      weight: "900",
      style: "normal",
    },
    // add more weights/styles here if you use them
  ],
  variable: "--font-akzidenz",
  display: "swap",
});

// Univers (400, 700)
export const univers = localFont({
  src: [
    {
      path: "../fonts/univers/UniversRegular.otf", // or .ttf
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/univers/UniversBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-univers",
  display: "swap",
});
