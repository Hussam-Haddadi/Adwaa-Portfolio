import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adwaa Saeed Alghamdi | Physics",
  description:
    "Adwaa Saeed Alghamdi — Physics major, King Abdulaziz University. Research, leadership, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased min-h-screen bg-[#0a0a0f] text-slate-100`}>
        <Navbar />
        <main className="min-h-screen bg-[#0a0a0f]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
