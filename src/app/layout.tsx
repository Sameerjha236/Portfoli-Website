import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular & Bold for headlines
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500"], // Regular & Medium for body text
});

export const metadata: Metadata = {
  title: "Sameer Jha Portfolio Website",
  description: "A portfolio with a classic newspaper-inspired design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${garamond.variable} antialiased min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
