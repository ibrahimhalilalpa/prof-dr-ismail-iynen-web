"use client";
import React from 'react';
import { Ear, Wind, Speech, ArrowUpRight } from 'lucide-react';

const uzmanlikAlanlari = [
    {
        title: "Burun ve Sinüs",
        icon: <Wind className="w-8 h-8 text-blue-600" />,
        description: "Hem estetik hem de fonksiyonel açıdan kusursuz bir nefes için modern cerrahi yaklaşımlar.",
        procedures: ["Rinoplasti (Burun Estetiği)", "Septoplasti (Deviasyon)", "Sinüzit Cerrahisi", "Burun Eti Tedavisi"],
        bgColor: "bg-blue-50"
    },
    {
        title: "Kulak ve İşitme",
        icon: <Ear className="w-8 h-8 text-emerald-600" />,
        description: "İşitme sağlığınızı koruyan ve yaşam kalitenizi artıran mikro-cerrahi müdahaleler.",
        procedures: ["Kulak Zarı Ameliyatları", "Kepçe Kulak Estetiği", "Orta Kulak İltihabı", "İşitme Kayıpları"],
        bgColor: "bg-emerald-50"
    },
    {
        title: "Boğaz ve Ses",
        icon: <Speech className="w-8 h-8 text-purple-600" />,
        description: "Ses telleri, yutma bozuklukları ve boğaz sağlığına yönelik güncel tedavi yöntemleri.",
        procedures: ["Bademcik ve Geniz Eti", "Ses Teli Polipleri", "Horlama Tedavisi", "Tükürük Bezi Hastalıkları"],
        bgColor: "bg-purple-50"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="hizmetler">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Uzmanlık Alanları</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        Kapsamlı KBB Çözümleri
                    </h3>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Modern tıp teknolojileri ve hasta odaklı yaklaşımımızla, Kulak, Burun ve Boğaz sağlığınız için en güncel cerrahi yöntemleri uyguluyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {uzmanlikAlanlari.map((alan, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/40 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* İkon ve Başlık */}
                            <div className={`w-16 h-16 ${alan.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {alan.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                {alan.title}
                                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-blue-600" />
                            </h4>

                            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                {alan.description}
                            </p>

                            {/* İşlem Listesi */}
                            <ul className="space-y-3 border-t border-slate-50 pt-6">
                                {alan.procedures.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}