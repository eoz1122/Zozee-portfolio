import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import { Providers } from "../providers";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Richard Acquaye - Developer Portfolio",
  description: "Creative portfolio of Richard Acquaye.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans xl:flex xl:flex-col xl:items-center xl:overflow-x-hidden`}
      >
        <Providers>
          <Header />
          <main className="flex-grow flex flex-col items-center w-full bg-[rgb(var(--bg))] text-[rgb(var(--txt-body))]">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
