"use client";
import React from 'react';
import { Phone, Mail, Instagram, Stethoscope, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="iletisim" className="bg-slate-950 text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 border-b border-slate-800 pb-16">

                    {/* 1. Bölüm: İsim ve Akademik Ünvan */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-3 text-blue-500">
                            <Stethoscope size={32} />
                            <h3 className="text-2xl font-black tracking-tighter uppercase text-white leading-tight">
                                Prof. Dr. <br /> İsmail İynen
                            </h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed max-w-sm font-medium">
                            Harran Üniversitesi Tıp Fakültesi Kulak Burun Boğaz Hastalıkları A.D. Başkanı olarak modern cerrahi tekniklerle sağlığınızı önemsiyoruz.
                        </p>
                    </div>

                    {/* 2. Bölüm: İletişim Bilgileri */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">İletişim & Konum</h4>
                        <div className="space-y-4">
                            <a href="tel:+905309007501" className="flex items-center gap-4 text-slate-400 hover:text-white transition group">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="font-bold text-sm">0530 900 7501</span>
                            </a>
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-100/10 flex items-center justify-center">
                                    <MapPin size={18} />
                                </div>
                                <span className="font-bold text-sm">Harran Üniversitesi, Şanlıurfa</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Bölüm: Sosyal Medya */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Sosyal Medya</h4>
                        <a
                            href="https://instagram.com/prof.dr.ismailiynen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all group"
                        >
                            <Instagram size={24} className="text-pink-500 group-hover:scale-110 transition-transform" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-bold uppercase">Instagram Takip Edin</span>
                                <span className="font-bold text-sm text-white">@prof.dr.ismailiynen</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Alt Kısım: Telif ve Yasal Haklar */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} PROF. DR. İSMAİL İYNEN
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                        <a href="#" className="hover:text-white">KVKK</a>
                        <a href="#" className="hover:text-white">Yasal Uyarı</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}