import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "kafein.dev",
  description: "Kafein's Personal WebSite",
};