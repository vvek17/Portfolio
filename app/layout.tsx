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
