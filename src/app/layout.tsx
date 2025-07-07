import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DockNav from "@/components/DockNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Witty Mavericks",
  description: "WittyMavericks - Your partner in creating cutting-edge digital experiences. We specialize in web development, design, and innovative solutions.",
  keywords: "WittyMavericks, web development, digital solutions, innovation, design",
  authors: [{ name: "WittyMavericks Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <DockNav />
      </body>
    </html>
  );
}
