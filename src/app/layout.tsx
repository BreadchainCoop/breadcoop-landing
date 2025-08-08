import type { Metadata } from "next";
import { akzidenz, univers } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bread Cooperative",
  description: "Solidarity forever.",
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
