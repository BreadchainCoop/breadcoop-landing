import type { Metadata } from "next";
import { akzidenz, univers } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bread Cooperative",
  description: "Solidarity forever.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#EA6023",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bread Cooperative",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${akzidenz.variable} ${univers.variable}`}>
      <body className="font-roboto bg-paper-main text-text-standard antialiased">
        {children}
      </body>
    </html>
  );
}
