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
  title: "Olive Studio | Fan Intelligence for Live Games",
  description:
    "Turn fan behavior into revenue decisions — across monetization, marketing, product, and engagement. Built by live ops veterans who've done this at scale.",
  icons: {
    icon: "/icon-32.png",
    apple: "/icon-32.png",
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
    title: "Olive Studio | Fan Intelligence for Live Games",
    description:
      "Turn fan behavior into revenue decisions — across monetization, marketing, product, and engagement.",
    url: "https://olivestudio.ai",
    siteName: "Olive Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olive Studio | Fan Intelligence for Live Games",
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
