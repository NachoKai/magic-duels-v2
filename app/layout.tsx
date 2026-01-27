import type React from "react";
import type { Metadata } from "next";
import { Cinzel, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

const _cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Duels - Wizard Battle",
  description: "A Harry Potter inspired spell dueling game",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/assets/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/assets/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/assets/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/assets/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/assets/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/assets/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
