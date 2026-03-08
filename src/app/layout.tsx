import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FanCortex | Fan Intelligence for Live Games",
  description:
    "Turn fan behavior into revenue decisions — across monetization, marketing, product, and engagement. Built by live ops veterans who've done this at scale.",
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  keywords: [
    "fan intelligence",
    "live games",
    "player analytics",
    "game monetization",
    "live ops",
    "ARPU optimization",
    "player retention",
  ],
  openGraph: {
    title: "FanCortex | Fan Intelligence for Live Games",
    description:
      "Turn fan behavior into revenue decisions — across monetization, marketing, product, and engagement.",
    url: "https://fancortex.ai",
    siteName: "FanCortex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FanCortex | Fan Intelligence for Live Games",
    description:
      "Turn fan behavior into revenue decisions — across monetization, marketing, product, and engagement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
