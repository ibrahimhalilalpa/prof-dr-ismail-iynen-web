"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, MapPin } from 'lucide-react';

export default function BakimdaPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 font-sans text-slate-900">


            <div className="max-w-3xl w-full bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-16 text-center relative overflow-hidden">

                {/* Soft Arka Plan Logosu (Hafif Görünür) */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
                    <Clock size={300} />
                </div>

                {/* Başlık Bölümü */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        <Clock size={14} /> Bilgilendirme
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight">
                        Sitemiz <span className="text-blue-600">Güncelleniyor</span>
                    </h1>

                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto mb-12">
                        Prof. Dr. İsmail İynen resmi web sitesi şu an bakım aşamasındadır. Sizlere daha iyi bir deneyim sunmak için çalışıyoruz.
                    </p>
                </motion.div>

                {/* Alt Bilgi */}
                <motion.p
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
                >
                    Anlayışınız İçin Teşekkür Ederiz
                </motion.p>
            </div>

            {/* Footer Logosu */}
            <div className="mt-12 opacity-20 grayscale">
                <p className="font-black text-xl tracking-tighter uppercase italic">Prof. Dr. İsmail İynen</p>
            </div>
        </div>
    );
}