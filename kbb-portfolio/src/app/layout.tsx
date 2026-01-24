import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. İbrahim Ünal | KBB ve Baş Boyun Cerrahisi",
  description: "Dr. İbrahim Ünal ile fonksiyonel KBB cerrahisi ve kişiye özel doğal estetik yaklaşımlar.",
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