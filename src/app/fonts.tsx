// src/app/fonts.ts
import localFont from "next/font/local";

// Akzidenz-Grotesk (900)
export const akzidenz = localFont({
  src: [
    {
      path: "../fonts/compressed/Akzidenz-Grotesk-Black-latinExt-puct-curr.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/raw/akzidenz/AkzidenzGroteskBE-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/raw/akzidenz/AkzidenzGroteskBE-Md.otf",
      weight: "500",
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
      path: "../fonts/compressed/UniversRegular-latinExt-puct-curr.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/compressed/UniversBold-latinExt-puct-curr.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-univers",
  display: "swap",
});
