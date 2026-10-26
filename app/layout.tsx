import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makeshift Engineering — We build things that matter.",
  description:
    "Makeshift Engineering is a small team of friends building open-source projects. From databases to developer tools, we make software that matters.",
  keywords: [
    "Makeshift Engineering",
    "open source",
    "PenguinDB",
    "databases",
    "developer tools",
    "engineering",
  ],
  authors: [{ name: "Makeshift Engineering" }],
  metadataBase: new URL("https://makeshift.pro"),
  openGraph: {
    title: "Makeshift Engineering — We build things that matter.",
    description:
      "A small team of friends building open-source projects. From databases to developer tools.",
    url: "https://makeshift.pro",
    siteName: "Makeshift Engineering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makeshift Engineering — We build things that matter.",
    description:
      "A small team of friends building open-source projects. From databases to developer tools.",
  },
  alternates: {
    canonical: "https://makeshift.pro",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
