import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClientProviders } from "@/components/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://bread.coop"),
  title: {
    default: "Bread Cooperative",
    template: "%s | Bread Cooperative",
  },
  description: "Tools for today. Solidarity forever.",
  alternates: {
    // Homepage canonical. Every other route overrides this with its own
    // `alternates.canonical`, so this value only applies to "/".
    canonical: "/",
  },
  openGraph: {
    title: "Bread Cooperative",
    description: "Tools for today. Solidarity forever.",
    url: "/",
    siteName: "Bread Cooperative",
    images: [
      {
        url: "https://bread.coop/preview.png?v=2",
        width: 1200,
        height: 630,
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
    images: ["https://bread.coop/preview.png?v=2"],
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

// Site-wide structured data. Content is maintainer-curated and verified against
// the repo (src/constants/links.ts) — no fabricated values.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bread Cooperative",
  legalName: "Bread Cooperative DAO LLC",
  url: "https://bread.coop",
  logo: "https://bread.coop/logo.svg",
  email: "contact@bread.coop",
  foundingDate: "2022",
  description:
    "A worker-owned software development cooperative building tools for financial solidarity",
  sameAs: [
    "https://github.com/BreadchainCoop",
    "https://x.com/breadcoop",
    "https://www.linkedin.com/company/bread-cooperative",
    "https://www.youtube.com/@BreadCooperative",
    "https://farcaster.xyz/~/channel/cryptoleft",
    "https://paragraph.com/@breadcoop",
    "https://discord.com/invite/zmNqsHRHDa",
    "https://giveth.io/project/breadchain-cooperative",
    "https://opencollective.com/bread-cooperative",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bread Cooperative",
  url: "https://bread.coop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}
        />
      </head>
      <body className="font-roboto bg-paper-main text-text-standard antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
