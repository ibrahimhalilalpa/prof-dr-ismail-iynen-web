// src/app/hakkimda/page.tsx
import { Metadata } from "next";
import HakkimdaContent from "./HakkimdaContent";

export const metadata: Metadata = {
    title: "Hakkımda",
    description: "Prof. Dr. İsmail İynen'in akademik geçmişi ve çalışmaları.",
};

export default function Page() {
    return <HakkimdaContent />;
}