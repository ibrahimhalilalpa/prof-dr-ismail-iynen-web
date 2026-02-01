import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// 1. GOOGLE SEARCH SEO AYARLARI (METADATA)
export const metadata: Metadata = {
  // Tarayıcı sekmesinde görünecek isim
  title: {
    default: "Prof. Dr. İsmail İynen | KBB ve Baş Boyun Cerrahisi Uzmanı",
    template: "%s | Prof. Dr. İsmail İynen" // Buradaki %s, alt sayfalardan gelen "Anasayfa" metnini buraya yerleştirir.
  },
  // Google arama sonuçlarındaki o küçük açıklama metni
  description: "Prof. Dr. İsmail İynen - Piezo (Ultrasonik) Rinoplasti, Revizyon Burun Estetiği, Odyoloji ve Ses Hastalıkları Uzmanı. 30 yıllık akademik ve cerrahi tecrübe.",
  keywords: [
    "Piezo Rinoplasti",
    "Ultrasonik Burun Estetiği",
    "Gaziantep KBB Uzmanı",
    "Şanlıurfa KBB",
    "Revizyon Burun Ameliyatı",
    "Odyoloji ve Ses Hastalıkları",
    "İsmail İynen"
  ],
  authors: [{ name: "Prof. Dr. İsmail İynen" }],
  //viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", // Google'a "bu siteyi tara ve kaydet" diyoruz.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // 2. GOOGLE BOTLARI İÇİN ÖZEL KİMLİK KARTI (JSON-LD SCHEMA)
  // Bu kod sayfada görünmez ama Google botları buna bayılır.
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Prof. Dr. İsmail İynen",
    "image": "https://www.ismailiynen.com/ismail-iynen-img.jpeg", // Sitenin gerçek URL'sini buraya yazmalısın
    "medicalSpecialty": "Otolaryngology",
    "description": "Harran Üniversitesi KBB Anabilim Dalı Başkanı. Piezo Rinoplasti ve Odyoloji alanında uzman KBB Profesörü.",
    "url": "https://www.ismailiynen.com",
    "telephone": "+905000000000", // Gerçek telefon numarasını buraya ekle
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Şanlıurfa",
      "addressRegion": "Güneydoğu Anadolu",
      "addressCountry": "TR"
    },
    "alumniOf": [
      { "@type": "EducationalOrganization", "name": "Çukurova Üniversitesi Tıp Fakültesi" },
      { "@type": "EducationalOrganization", "name": "Başkent Üniversitesi Odyoloji Yüksek Lisans" },
      { "@type": "EducationalOrganization", "name": "University of Texas (Houston) ENT Department" }
    ],
    "knowsAbout": [
      "Rinoplasti",
      "Piezo Burun Estetiği",
      "Ses Hastalıkları",
      "Odyoloji",
      "Baş Boyun Cerrahisi"
    ],
    "award": [
      "Top 50 Submissions - MEMC VI Yunanistan",
      "KBB-BBC Yeterlilik Sertifikası"
    ]
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google'ın siteyi okuması için Schema scriptini ekliyoruz */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-blue-100 selection:text-blue-700`}>
        {/* Navbar bileşeni tüm sayfalarda ortak */}
        <Navbar />

        {/* Sayfa içerikleri burada render edilecek */}
        {children}
      </body>
    </html>
  );
}