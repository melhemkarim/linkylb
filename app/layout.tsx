import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fredoka, Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const display = Fredoka({ subsets: ["latin"], variable: "--display" });
const serif = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--serif" });
const body = Figtree({ subsets: ["latin"], variable: "--body" });

export const metadata: Metadata = {
  title: "Linky | A little link, a big feeling",
  description: "Personalized birthday, anniversary, love message, wedding and surprise pages, shared with one link.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
