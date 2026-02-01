// app/page.tsx (Server Component)
import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
    // Burada doğrudan tam başlık yazmak, ana sayfa için en sağlıklı SEO yöntemidir.
    title: "Prof. Dr. İsmail İynen | KBB ve Burun Estetiği Uzmanı",
    description: "Prof. Dr. İsmail İynen resmi web sitesi. Ultrasonik Piezo Rinoplasti, Odyoloji ve Baş Boyun Cerrahisi uzmanlığı.",
};

export default function Page() {
    return <HomeContent />;
}   