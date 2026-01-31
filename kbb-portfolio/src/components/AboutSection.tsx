"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Geçici veri (Hata almamak için)
const mockData = {
    title: "Prof. Dr. İsmail İynen",
    subtitle: "KBB ve Baş Boyun Cerrahisi Uzmanı | Odyoloji ve Ses Hastalıkları",
    imageUrl: "/ismail-iynen-img.jpeg", // public klasörüne bu isimle bir foto atman lazım
    cvUrl: "#"
};

export default function AboutSection() {
    return (
        <section className="py-24 bg-slate-50" id="hakkimda">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Sol: Fotoğraf Alanı */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
                            {/* src kısmına hocanın fotoğrafını public klasörüne koyup yolunu yazmalısın */}
                            <img
                                src="{mockData.imageUrl}"
                                alt={mockData.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fotoğraf yüklenmezse gri bir alan görünsün diye:
                                    e.currentTarget.src = "https://via.placeholder.com/400x500?text=Hoca+Fotograf";
                                }}
                            />
                        </div>
                        {/* Tecrübe Rozeti */}
                        <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl z-10">
                            <span className="block text-4xl font-black text-white">30+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">Yıllık Tecrübe</span>
                        </div>
                    </motion.div>

                    {/* Sağ: Metin Alanı */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Özgeçmiş</h2>
                            <h1 className="text-5xl font-black text-slate-900 leading-tight">{mockData.title}</h1>
                            <p className="text-lg text-slate-500 mt-4 font-medium">{mockData.subtitle}</p>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-4 text-sm leading-relaxed">
                            <p>
                                1995 yılında Çukurova Üniversitesi Tıp Fakültesi’nden mezun olan Prof. Dr. İsmail İynen,
                                uzmanlığını Harran Üniversitesi’nde tamamladı. Akademik kariyerinde hızla yükselerek
                                2018 yılında <b>Profesör</b> unvanını aldı.
                            </p>
                            <p>
                                Sadece cerrahi ile kalmayıp Başkent Üniversitesi'nde <b>Odyoloji ve Ses Hastalıkları</b> üzerine
                                yüksek lisans yaparak, KBB alanındaki uzmanlığını çok daha geniş bir boyuta taşıdı.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href={mockData.cvUrl} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                                Özgeçmişi İndir (PDF)
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}