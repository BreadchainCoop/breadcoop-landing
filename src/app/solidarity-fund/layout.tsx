import type { Metadata } from "next";

// The /solidarity-fund page is a Client Component ("use client"), so it can't
// export `metadata` itself. This route-level layout supplies its metadata and
// simply renders the page unchanged.
const description =
  "The Bread Solidarity Fund: bake $BREAD, put your funds to work generating yield, and vote to direct that yield to the member projects you support. Give without giving — built for solidarity, not speculation.";

export const metadata: Metadata = {
  title: "Solidarity Fund",
  description,
  alternates: { canonical: "/solidarity-fund" },
  openGraph: {
    title: "Solidarity Fund | Bread Cooperative",
    description,
    url: "/solidarity-fund",
    siteName: "Bread Cooperative",
    type: "website",
  },
};

export default function SolidarityFundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
