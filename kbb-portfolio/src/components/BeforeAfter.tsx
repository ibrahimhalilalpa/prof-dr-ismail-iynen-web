"use client";
import React, { useState, useEffect, useRef } from 'react';
import { client, urlFor } from '@/lib/sanity';

export default function BeforeAfter() {
    const [tumVakalar, setTumVakalar] = useState<any[]>([]);
    const [filtreliVakalar, setFiltreliVakalar] = useState<any[]>([]);
    const [seciliKategori, setSeciliKategori] = useState<string>('Hepsi');
    const [seciliVaka, setSeciliVaka] = useState<any>(null);
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    // Dinamik Kategoriler
    const kategoriler = ['Hepsi', ...new Set(tumVakalar.map(v => v.kategori).filter(Boolean))];

    useEffect(() => {
        const query = `*[_type == "vaka"] | order(_createdAt desc)`;
        client.fetch(query).then((data) => {
            setTumVakalar(data);
            setFiltreliVakalar(data);
            if (data.length > 0) setSeciliVaka(data[0]);
        });
    }, []);

    useEffect(() => {
        const yeniListe = seciliKategori === 'Hepsi'
            ? tumVakalar
            : tumVakalar.filter(v => v.kategori === seciliKategori);

        setFiltreliVakalar(yeniListe);
        if (yeniListe.length > 0) setSeciliVaka(yeniListe[0]);
        setSliderPos(50);
    }, [seciliKategori, tumVakalar]);

    const handleMove = (e: any) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = clientX - rect.left;
        setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    };

    if (!seciliVaka) return <div className="py-20 text-center text-slate-400">Yükleniyor...</div>;

    return (
        <section className="py-16 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Vaka Sonuçları</h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>

                    {/* ANA KATEGORİLER */}
                    <div className="flex justify-center gap-2 flex-wrap mb-8">
                        {kategoriler.map((kat) => (
                            <button
                                key={kat}
                                onClick={() => setSeciliKategori(kat)}
                                className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase transition-all duration-300 ${seciliKategori === kat
                                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                                    : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400'
                                    }`}
                            >
                                {kat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">

                    {/* SOL TARAF: VAKA LİSTESİ (Çok vaka olunca aşağı doğru veya mobilde yana kayar) */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">
                            {seciliKategori} Vakaları
                        </h3>
                        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] pb-4 no-scrollbar snap-x">
                            {filtreliVakalar.map((vaka) => (
                                <button
                                    key={vaka._id}
                                    onClick={() => { setSeciliVaka(vaka); setSliderPos(50); }}
                                    className={`snap-start min-w-[140px] lg:min-w-full group relative p-2 rounded-2xl transition-all border-2 ${seciliVaka._id === vaka._id
                                        ? 'border-blue-600 bg-blue-50'
                                        : 'border-transparent bg-white hover:bg-slate-50'
                                        }`}
                                >
                                    <div className="flex flex-col lg:flex-row items-center gap-3">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0 shadow-sm">
                                            <img src={urlFor(vaka.sonrasi).url()} className="w-full h-full object-cover" alt="thumb" />
                                        </div>
                                        <span className={`text-xs font-bold text-center lg:text-left leading-tight ${seciliVaka._id === vaka._id ? 'text-blue-700' : 'text-slate-600'
                                            }`}>
                                            {vaka.baslik}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ TARAF: BÜYÜK SLIDER */}
                    <div className="lg:col-span-3 order-1 lg:order-2">
                        <div className="relative group">
                            <div
                                ref={containerRef}
                                className="relative aspect-[4/3] md:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[10px] border-white bg-white cursor-ew-resize"
                                onMouseMove={handleMove}
                                onTouchMove={handleMove}
                            >
                                {/* Katmanlar */}
                                <img src={urlFor(seciliVaka.sonrasi).url()} className="absolute inset-0 w-full h-full object-cover" alt="Sonrası" />
                                <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                                    <img src={urlFor(seciliVaka.oncesi).url()} className="absolute inset-0 w-full h-full object-cover" alt="Öncesi" />
                                </div>

                                {/* Bilgi Etiketleri */}
                                <div className="absolute top-6 left-6 z-30 bg-blue-600/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter">Öncesi</div>
                                <div className="absolute top-6 right-6 z-30 bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter">Sonrası</div>

                                {/* Kaydırıcı */}
                                <div className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]" style={{ left: `${sliderPos}%` }}>
                                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white cursor-ew-resize group-hover:scale-110 transition-transform">
                                        <div className="flex items-center gap-1.5 text-blue-600">
                                            {/* Sol Ok */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
                                            {/* Sağ Ok */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}