import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thabisogiftndlovu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thabiso Gift Ndlovu — Building AI Systems for South Africa",
    template: "%s · Thabiso Gift Ndlovu",
  },
  description:
    "Marketer, AI builder, and SaaS founder creating digital products, automation systems, and platforms for the next generation of African businesses.",
  keywords: [
    "Thabiso Gift Ndlovu",
    "AI builder",
    "SaaS founder",
    "South Africa",
    "digital products",
    "automation",
    "marketing strategy",
    "Plumbers.co.za",
    "Smart Z83",
    "GKZ",
  ],
  authors: [{ name: "Thabiso Gift Ndlovu" }],
  creator: "Thabiso Gift Ndlovu",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Thabiso Gift Ndlovu",
    title: "Thabiso Gift Ndlovu — Building AI Systems for South Africa",
    description:
      "Marketer, AI builder, and SaaS founder creating digital products and AI systems for African businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thabiso Gift Ndlovu — Building AI Systems for South Africa",
    description:
      "Marketer, AI builder, and SaaS founder creating digital products and AI systems for African businesses.",
    creator: "@your-handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#38bdf8" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
