"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
    GraduationCap,
    Award,
    Stethoscope,
    BookOpen,
    ShieldCheck,
    Microscope,
    History,
    Globe,
    FileCheck,
    FileText
} from "lucide-react";

export default function HakkimdaPage() {
    return (
        <main className="min-h-screen bg-white pt-24">
            {/* 1. SECTION: AKADEMİK KİMLİK (HERO) */}
            <section className="container mx-auto max-w-6xl px-4 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-5 relative">
                        <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-slate-200">
                            <img src="/ismail-iynen-img.jpeg" alt="Prof. Dr. İsmail İynen" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl text-center">
                            <p className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-1">Akademik Görev</p>
                            <p className="text-slate-900 font-black text-xl leading-tight">Anabilim Dalı Başkanı</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 pt-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            <ShieldCheck size={14} /> KBB ve Baş Boyun Cerrahisi Uzmanı
                        </div>
                        <h1 className="text-7xl font-black text-slate-900 leading-[1] mb-8 tracking-tighter">
                            Prof. Dr. <br /> İsmail İynen
                        </h1>
                        <div className="space-y-6 text-slate-600">
                            <p className="text-2xl font-semibold text-slate-800 leading-snug border-l-4 border-blue-600 pl-6">
                                "Akademik derinlik ve cerrahi tecrübenin buluştuğu nokta."
                            </p>
                            <p className="text-lg leading-relaxed opacity-90">
                                1995 yılında Çukurova Üniversitesi'nden mezun olan Prof. Dr. İynen, 2018 yılında Profesörlük ünvanını almıştır.
                                Özellikle <b>Texas Üniversitesi (ABD)</b> bünyesinde gerçekleştirdiği klinik gözlemler ve <b>Odyoloji</b> alanındaki akademik yüksek lisansı ile ses, işitme ve burun cerrahisinde multidisipliner bir ekolü temsil etmektedir.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100 mt-10 text-center">
                            <StatBox value="70+" label="Uluslararası Makale" />
                            <StatBox value="2010" label="KBB Yeterlilik" />
                            <StatBox value="30" label="Yıllık Tecrübe" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. SECTION: TAM KRONOLOJİ (MESLEKİ YOLCULUK) */}
            <section className="bg-slate-50 py-32 rounded-[4rem]">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="text-center mb-24">
                        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Adım Adım Başarı</span>
                        <h2 className="text-4xl font-black text-slate-900 uppercase">Mesleki Yolculuk</h2>
                    </div>
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-px before:bg-slate-200">
                        <TimelineItem year="1995" title="Tıp Doktorluğu" desc="Çukurova Üniversitesi Tıp Fakültesi mezuniyeti." icon={<GraduationCap size={18} />} />
                        <TimelineItem year="1999 - 2004" title="Uzmanlık Eğitimi" desc="Harran Üniversitesi KBB Anabilim Dalı Araştırma Görevlisi." icon={<History size={18} />} />
                        <TimelineItem year="2004" title="KBB Uzmanı" desc="'Ratlarda Cilt Fleplerinin Histopatolojik Değerlendirilmesi' tezi ile uzmanlık." icon={<Stethoscope size={18} />} />
                        <TimelineItem year="2005 - 2007" title="Klinik Tecrübe" desc="Adıyaman Özel Gözde Tıp Merkezi'nde uzman hekimlik." icon={<FileText size={18} />} />
                        <TimelineItem year="2010" title="KBB Yeterlilik" desc="Türk KBB-BBC Yeterlilik Sınavı'nı başarıyla tamamladı." icon={<FileCheck size={18} />} />
                        <TimelineItem year="2012" title="Doçentlik" desc="Aralık 2012'de Doçent Doktor ünvanını aldı." icon={<Award size={18} />} />
                        <TimelineItem year="2012" title="ABD Klinik Gözlem" desc="Texas Üniversitesi (Houston) KBB Anabilim Dalı'nda Observer (Gözlemci) görevlendirmesi." icon={<Globe size={18} />} />
                        <TimelineItem year="2013 - Günümüz" title="Anabilim Dalı Başkanlığı" desc="Harran Üniversitesi KBB Anabilim Dalı Başkanı." icon={<ShieldCheck size={18} />} />
                        <TimelineItem year="2014 - 2017" title="Odyoloji Yüksek Lisansı" desc="Başkent Üniversitesi Odyoloji, Ses Hastalıkları ve Konuşma Bozuklukları uzmanlığı." icon={<BookOpen size={18} />} />
                        <TimelineItem year="2018" title="Profesörlük" desc="Aralık 2018'de Profesör ünvanına hak kazandı." icon={<Award size={18} />} />
                    </div>
                </div>
            </section>

            {/* 3. SECTION: Bilimsel Başarılar, Projeler ve Global Deneyim */}

            <section className="py-32 bg-white px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20 leading-tight">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Akademik Katkı ve Uzmanlık Odakları</h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* 1. KART: ÖNE ÇIKAN BAŞARILAR */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase">Başarılar</h3>
                            </div>
                            <ul className="space-y-5 text-sm text-slate-600 font-medium">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                                    <p><b>MEMC VI (Yunanistan)</b> bünyesinde "Top 50 Submissions" ödüllü Ankaferd çalışması.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                                    <p><b>70'in üzerinde</b> uluslararası ve ulusal hakemli dergi makalesi (SCI-Expanded dahil).</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                                    <p><b>KBB-BBC Yeterlilik Sınavı</b> başarısı ve resmi tescili (2010).</p>
                                </li>
                            </ul>
                        </motion.div>

                        {/* 2. KART: ARAŞTIRMA PROJELERİ (DÜBAP - 3 PROJE) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                                    <Microscope size={24} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight">DÜBAP Projeleri</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <h4 className="text-blue-400 font-bold text-[9px] uppercase tracking-widest">DÜBAP-146</h4>
                                    <p className="text-[10px] opacity-80 leading-tight italic">Sildenafil, Tadalafil ve Vardanafil'in nazal mukoza ve kulak üzerine etkileri.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <h4 className="text-blue-400 font-bold text-[9px] uppercase tracking-widest">DÜBAP-145</h4>
                                    <p className="text-[10px] opacity-80 leading-tight italic">Ototoksik etkili Streptomisin kullanımında rat iç kulağı üzerine araştırmalar.</p>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <h4 className="text-blue-400 font-bold text-[9px] uppercase tracking-widest">DÜBAP-476</h4>
                                    <p className="text-[10px] opacity-80 leading-tight italic">Cisplatin ototoksisitesine karşı Kafeik Asit Fenetil Esterin koruyucu etkisi.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. KART: ULUSLARARASI DENEYİM & EĞİTİM (TEZ YERİNE) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Global Vizyon</h3>
                            </div>
                            <div className="space-y-5">
                                <div className="border-l-2 border-blue-600 pl-4">
                                    <p className="font-bold text-slate-900 text-sm">Texas Üniversitesi (Houston, ABD)</p>
                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">KBB Anabilim Dalı bünyesinde klinik gözlemci (Observer) görevlendirmesi (2012).</p>
                                </div>
                                <div className="border-l-2 border-slate-100 pl-4">
                                    <p className="font-bold text-slate-900 text-sm">Sürekli Mesleki Gelişim</p>
                                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                        Endoskopik Sinüs Cerrahisi ve Ses Hastalıkları dahil olmak üzere <b>64 adet</b> ulusal ve uluslararası kurs katılımı.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Yardımcı Bileşenler
function StatBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="border-l-4 border-blue-600 pl-4 py-1">
            <p className="text-3xl font-black text-slate-900 tracking-tighter">{value}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">{label}</p>
        </div>
    );
}

function TimelineItem({ year, title, desc, icon }: { year: string; title: string; desc: string; icon: React.ReactNode }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 transition-colors">
                {icon}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="text-blue-600 font-black text-xs block mb-1">{year}</span>
                <h4 className="text-slate-900 font-bold text-lg mb-2 leading-tight">{title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
            </div>
        </motion.div>
    );
}