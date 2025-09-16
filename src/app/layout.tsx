import type { Metadata } from "next";
import { akzidenz, univers } from "./fonts";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClientProviders } from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Bread Cooperative",
  description: "Tools for today. Solidarity forever.",
  openGraph: {
    title: "Bread Cooperative",
    description: "Tools for today. Solidarity forever.",
    url: "https://bread.coop/",
    siteName: "Bread Cooperative",
    images: [
      {
        url: "https://bread.coop/preview.png",
        width: 800,
        height: 600,
        alt: "Bread Cooperative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bread Cooperative",
    description: "Tools for today. Solidarity forever.",
    images: ["https://bread.coop/preview.png"],
  },
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
      <head>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
      </head>
      <body className="font-roboto bg-paper-main text-text-standard antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
