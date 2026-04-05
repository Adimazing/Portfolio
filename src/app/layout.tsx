import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import ScrollAnimator from "@/components/ScrollAnimator";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400","500","600"],
});

export const metadata: Metadata = {
  title: "Aditya Raj | B.Tech AI & ML | Portfolio",
  description: "Personal portfolio of Aditya Raj Rai — B.Tech CSE (AI & ML) student at Asansol Engineering College. Passionate about web development, AI, and creating intelligent user-centric solutions.",
  keywords: ["Aditya Raj", "AI ML student", "portfolio", "web developer", "machine learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f4ff]">
        {children}
        <ScrollAnimator />
      </body>
    </html>
  );
}
