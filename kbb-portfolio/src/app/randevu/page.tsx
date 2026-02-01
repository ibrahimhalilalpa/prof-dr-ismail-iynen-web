// app/randevu/page.tsx
import { Metadata } from "next";
import RandevuContent from "./RandevuContent";

export const metadata: Metadata = {
    title: "Randevu Al",
    description: "Muayene ve cerrahi operasyonlar için Prof. Dr. İsmail İynen'den online randevu alın.",
};

export default function RandevuPage() {
    return <RandevuContent />;
}