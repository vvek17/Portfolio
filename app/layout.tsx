import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import SplashCursor from "../components/SplashCursor";
import { Outfit, Inter } from "next/font/google";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const siteUrl = "https://portfolio-phi-dun-85.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vivek Solanki | Software Engineer & Data Scientist",
  description:
    "Portfolio of Vivek Solanki, a Computational Data Science graduate student at Temple University building data-driven applications and intelligent systems with Python, Machine Learning, and AI.",
  keywords: [
    "Vivek Solanki",
    "Software Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Temple University",
    "Portfolio",
  ],
  authors: [{ name: "Vivek Solanki" }],
  openGraph: {
    title: "Vivek Solanki | Software Engineer & Data Scientist",
    description:
      "Building data-driven applications and intelligent systems with SQL, Python, Machine Learning, and Artificial Intelligence.",
    url: siteUrl,
    siteName: "Vivek Solanki",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Solanki | Software Engineer & Data Scientist",
    description:
      "Building data-driven applications and intelligent systems with SQL, Python, Machine Learning, and Artificial Intelligence.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <SplashCursor />
      </body>
    </html>
  );
}
