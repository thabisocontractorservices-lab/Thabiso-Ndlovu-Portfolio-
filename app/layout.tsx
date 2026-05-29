import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thabisondlovu.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thabiso Gift Ndlovu — AI Systems Built on Fundamentals, Not Hype",
    template: "%s · Thabiso Gift Ndlovu",
  },
  description:
    "I help businesses implement practical AI and automation systems that remain valuable long after trends and tools change. AI systems strategist & startup builder.",
  keywords: [
    "Thabiso Gift Ndlovu",
    "AI systems strategist",
    "AI implementation",
    "automation systems",
    "workflow automation",
    "South Africa",
    "startup builder",
  ],
  authors: [{ name: "Thabiso Gift Ndlovu" }],
  creator: "Thabiso Gift Ndlovu",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Thabiso Gift Ndlovu",
    title: "AI Systems Built on Fundamentals, Not Hype",
    description:
      "Practical AI and automation systems that remain valuable long after trends and tools change.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Systems Built on Fundamentals, Not Hype",
    description:
      "Practical AI and automation systems that remain valuable long after trends and tools change.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
