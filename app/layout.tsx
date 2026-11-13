import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./components/Analytics";
import { PersonJsonLd } from "./components/PersonJsonLd";
import { absoluteUrl } from "../lib/site";
import "./globals.css";

export const dynamic = "force-static";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Rudraksh Syal · Data Science Lead, Agentic AI & Applied ML";
const description =
  "Rudraksh Syal is a data science lead with 11+ years across machine learning, pricing, measurement, and applied AI. Open to roles and available now in San Jose, CA or remote.";

const socialImage = absoluteUrl("/og.png");

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: title,
    template: "%s",
  },
  description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: absoluteUrl("/"),
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Rudraksh Syal, Data Science Lead. Open to roles. Available now.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PersonJsonLd />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
