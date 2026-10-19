import type { Metadata } from "next";
import { content as c } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  title: c.seo.title,
  description: c.seo.description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title: c.seo.title, description: c.seo.description, images: [c.seo.ogImage], type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Pinyon+Script&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
          <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" /><feDisplacementMap in="SourceGraphic" scale="4" /></filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
