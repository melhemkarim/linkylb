import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";
import { site } from "@/site.config";

export const metadata: Metadata = {
  // Netlify fills URL with your site address, so the share picture works
  metadataBase: new URL(process.env.URL || "http://localhost:3000"),
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, images: ["/og.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf8ff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
