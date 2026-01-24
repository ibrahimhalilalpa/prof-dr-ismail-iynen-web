import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prof. Dr. İsmail İynen | KBB ve Baş Boyun Cerrahisi",
  description: "Ultrasonik (Piezo) Rinoplasti ve Revizyon Burun Estetiği Uzmanı Prof. Dr. İsmail İynen resmi web portfolyosu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-blue-100 selection:text-blue-700`}>
        {/* Navbar burada kalsın ama z-index ve pointer-events Navbar'ın kendi içinde çözüldü */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}