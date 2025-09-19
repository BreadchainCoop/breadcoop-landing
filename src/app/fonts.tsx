// src/app/fonts.ts
import localFont from "next/font/local";

// breadDisplay (900)
export const breadDisplay = localFont({
  src: [
    {
      path: "../fonts/raw/display/PogacaDisplayBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/raw/display/PogacaDisplayBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/raw/display/PogacaDisplayRegular.woff2",
      weight: "400",
      style: "normal",
    },
    // add more weights/styles here if you use them
  ],
  variable: "--font-breadDisplay",
  display: "swap",
});

// breadBody (400, 700)
export const breadBody = localFont({
  src: [
    {
      path: "../fonts/raw/body/PogacaBodyRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/raw/body/PogacaBodyBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-breadBody",
  display: "swap",
});
