import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mirshodbek Qahramonov — Software Developer",
  description:
    "Software developer specialising in Python backends, Telegram automation, Mini Apps, and payment integrations (TON, UzCard, HUMO, Click, Payme).",
  keywords: [
    "Software Developer",
    "Python",
    "Telegram Bot",
    "Telegram Mini App",
    "Aiogram",
    "FastAPI",
    "Backend",
    "Uzbekistan",
  ],
  authors: [{ name: "Mirshodbek Qahramonov" }],
  openGraph: {
    title: "Mirshodbek Qahramonov — Software Developer",
    description:
      "Python backend, Telegram bots, Mini Apps, and payment integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirshodbek Qahramonov — Software Developer",
    description:
      "Python backend, Telegram bots, Mini Apps, and payment integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
