import type React from "react";
import type { Metadata } from "next";
// Removed remote Google Font imports to avoid build-time network fetches
// (Next's `next/font/google` fetches fonts at build time which fails in
// network-restricted environments). To re-enable remote fonts, re-add
// the imports from `next/font/google` or use local font files and @font-face.
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "../components/ui/toaster";

// Note: font variables are intentionally omitted so the app uses the
// project's Tailwind/system font stack defined in `globals.css` / tailwind
// config. This avoids remote network requests during `next build`.

export const metadata: Metadata = {
  title: "Seventeen Visuals - Film & Videography",
  description:
    "Professional film, BTS, and videography services. Cinematic storytelling for brands and creators.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
