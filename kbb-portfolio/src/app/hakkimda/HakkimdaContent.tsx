"use client";
import React, { useState } from "react"; // useState eklendi
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence eklendi
import Footer from "@/components/Footer";
import {
    GraduationCap, Award, Stethoscope, BookOpen, ShieldCheck,
    Microscope, History, Globe, FileCheck, FileText, X, ChevronRight, CheckCircle2, BookOpenCheck
} from "lucide-react";


export default function HakkimdaPage() {
    const [isArchiveOpen, setIsArchiveOpen] = useState(false);

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

            {/* 2. SECTION: TAM KRONOLOJİ */}
            <section className="bg-slate-50 py-32 rounded-[4rem]">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="mb-24">
                        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] block mb-4">Adım Adım Başarı</span>
                        <h2 className="text-4xl font-black text-slate-900 uppercase">Mesleki Yolculuk</h2>
                    </div>
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-px before:bg-slate-200 text-left">
                        <TimelineItem year="1995" title="Tıp Doktorluğu" desc="Çukurova Üniversitesi Tıp Fakültesi mezuniyeti." icon={<GraduationCap size={18} />} />
                        <TimelineItem year="1999 - 2004" title="Uzmanlık Eğitimi" desc="Harran Üniversitesi KBB Anabilim Dalı Araştırma Görevlisi." icon={<History size={18} />} />
                        <TimelineItem year="2004" title="KBB Uzmanı" desc="'Ratlarda Cilt Fleplerinin Histopatolojik Değerlendirilmesi' tezi ile uzmanlık." icon={<Stethoscope size={18} />} />
                        <TimelineItem year="2005 - 2007" title="Klinik Tecrübe" desc="Adıyaman Özel Gözde Tıp Merkezi'nde uzman hekimlik." icon={<FileText size={18} />} />
                        <TimelineItem year="2010" title="KBB Yeterlilik" desc="Türk KBB-BBC Yeterlilik Sınavı'nı başarıyla tamamladı." icon={<FileCheck size={18} />} />
                        <TimelineItem year="2012" title="Doçentlik" desc="Aralık 2012'de Doçent Doktor ünvanını aldı." icon={<Award size={18} />} />
                        <TimelineItem year="2012" title="ABD Klinik Gözlem" desc="Texas Üniversitesi (Houston) KBB Anabilim Dalı'nda Observer (Gözlemci) görevlendirmesi." icon={<Globe size={18} />} />
                        <TimelineItem year="2013 - Günümüz" title="Anabilim Dalı Başkanı" desc="Harran Üniversitesi KBB Anabilim Dalı Başkanı." icon={<ShieldCheck size={18} />} />
                        <TimelineItem year="2014 - 2017" title="Odyoloji Yüksek Lisansı" desc="Başkent Üniversitesi Odyoloji, Ses Hastalıkları ve Konuşma Bozuklukları uzmanlığı." icon={<BookOpen size={18} />} />
                        <TimelineItem year="2018" title="Profesörlük" desc="Aralık 2018'de Profesör ünvanına hak kazandı." icon={<Award size={18} />} />
                    </div>
                </div>
            </section>

            {/* 3. SECTION: AKADEMİK KATKI KARTLARI */}
            {/* Bilimsel Başarılar, Projeler ve Global Vizyon */}
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

            {/* 🚀 AKADEMİK ARŞİV BUTONU */}
            <section className="pb-32 flex justify-center bg-white">
                <button
                    onClick={() => setIsArchiveOpen(true)}
                    className="group relative inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1"
                >
                    <BookOpenCheck size={20} className="group-hover:rotate-12 transition-transform" />
                    Tüm Akademik Kayıtları ve CV'yi İncele
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </section>

            {/* 📂 FULL AKADEMİK ARŞİV MODAL */}
            <AnimatePresence>
                {isArchiveOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsArchiveOpen(false)} className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col font-sans"
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b flex items-center justify-between sticky top-0 bg-white z-10">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Akademik Arşiv & Full CV</h2>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Prof. Dr. İsmail İynen — Resmi Eserler Listesi</p>
                                </div>
                                <button onClick={() => setIsArchiveOpen(false)} className="p-3 hover:bg-slate-100 rounded-full transition-colors"><X size={24} /></button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-20 bg-white">

                                {/* A. ULUSLARARASI MAKALELER (TAM LİSTE) */}
                                <ArchiveSection icon={<Globe size={22} />} title="A. Uluslararası Hakemli Dergilerde Yayımlanan Makaleler">
                                    <div className="grid grid-cols-1 gap-4">
                                        <ArchiveItem id="A1" text="San I, Ulas T, Bozkus F, Iynen I, et al. Prolidase activity and oxidative stress parameters in patients with nasal polyps. Clin Ter 2013." />
                                        <ArchiveItem id="A2" text="Bozkus F, Ulas T, Iynen I, et al. Primary localised laryngeal amiloidosis. JPMA 2013." />
                                        <ArchiveItem id="A3" text="Kaya H, Gokdemir MT, Sogut O, Bozkus F, Iynen I. Evaluation of oxidative status and trace elements in patients with BPPV. HealthMED 2013." />
                                        <ArchiveItem id="A4" text="Bozkus F, Bozan N, Iynen I. Analysis of sinonasal, pharyngeal and allergy-related risk factors for CSOM. Acta Medica Mediterranea 2013." />
                                        <ArchiveItem id="A8" text="Iynen I, Ciftci H, Bozkus F, Savas M. The effect of extracorporeal shock wave lithotripsy on the hearing. JPMA 2012." />
                                        <ArchiveItem id="A12" text="Iynen I, Bozkus F, San I, Alatas N. Use of a hemostatic agent Ankaferd Blood Stopper in Adenoidectomy. Int J Ped Otorhinolaryngol 2011." />
                                        <ArchiveItem id="A13" text="Iynen I, Sogut O, Kose R. Efficacy of Ankaferd Blood Stopper in Heparin-Induced Hemostatic Abnormality in a Rat Epistaxis Model. Otolaryngol Head Neck Surg 2011." />
                                        <ArchiveItem id="A17" text="Iynen I, Sogut O, San I, Bozkus F. A Rare Cause of Epistaxis, Hemoptysis and Anemia: Leech in the Nasopharynx. J Med Cases 2010." />
                                        <ArchiveItem id="A18" text="Iynen I, R. Kose. Nostril stenosis after undue power application of electric cauterization used in hypertrophy of inferior turbinate. JPMA 2010." />
                                        <ArchiveItem id="A20" text="Alatas N, Yazgan P, Ozturk A, San I, Iynen I. Audiological findings in patients with ankylosing spondylitis. J Laryngol Otol 2005." />
                                        <p className="text-[11px] text-blue-600 font-black uppercase tracking-tighter pt-4 border-t border-slate-100">
                                            + Toplam 20 Adet Uluslararası SCI-Expanded Yayınlanmış Makale
                                        </p>
                                    </div>
                                </ArchiveSection>

                                {/* PROJELER (DÜBAP) */}
                                <ArchiveSection icon={<Microscope size={22} />} title="Bilimsel Araştırma Projeleri">
                                    <div className="space-y-6">
                                        <ProjectDetail
                                            title="DÜBAP-146"
                                            desc="Fosfodiesteraz 5 İnhibitörlerinin (Sildenafil, Tadalafil, Vardanafil) Nazal Mukoza, Larenks ve Kulak Üzerine Etkilerinin Karşılaştırılması."
                                            role="Proje Değerlendiricisi"
                                        />
                                        <ProjectDetail
                                            title="DÜBAP-145"
                                            desc="Ototoksik Etkili Streptomisinin Steroid ve Sildenafille Kullanımında Rat İç Kulağına Olan Etkisinin Araştırılması."
                                            role="Proje Değerlendiricisi"
                                        />
                                        <ProjectDetail
                                            title="DÜBAP-476"
                                            desc="Cisplatin Uygulanan Ratlarda Bu İlacın Ototoksik Etkileri ve Kafeik Asit Fenetil Esterin Koruyucu Etkisi."
                                            role="Proje Değerlendiricisi"
                                        />
                                    </div>
                                </ArchiveSection>

                                {/* F. KURSLAR VE EĞİTİMLER (ÖNE ÇIKANLAR) */}
                                <ArchiveSection icon={<Award size={22} />} title="F. Katıldığı Teknik Kurslar ve Eğitimler">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <CourseItem text="Endoskopik Sinüs Cerrahisi Kadavrada Uygulamalı Diseksiyon (Mersin)" />
                                        <CourseItem text="Temporal Kemik - Transtemporal Yaklaşımlar Kadavra Diseksiyon (Mersin)" />
                                        <CourseItem text="Horlama ve Uyku Apnesi Cerrahi Tedavisi Kursu (GATA)" />
                                        <CourseItem text="Kadavra ve Rat Uygulamalı İntraoperatif Monitorizasyon" />
                                        <CourseItem text="Parotis Cerrahisi ve Fasiyal Sinir Güvenli Cerrahi Kursu (Antalya)" />
                                        <CourseItem text="Cochlear Implantation in Adults and Children (Hollanda)" />
                                        <CourseItem text="Otoplasti ve Aurikula Rekonstrüksiyonu Kursu" />
                                        <CourseItem text="Endoskopik Dakriyosistorinostomi Kursu" />
                                        <p className="col-span-full text-[11px] text-slate-400 font-black uppercase tracking-widest pt-4">
                                            + Toplam 64 Adet Ulusal ve Uluslararası Teknik Sertifikasyon
                                        </p>
                                    </div>
                                </ArchiveSection>

                                {/* İDARİ GÖREVLER VE ÜYELİKLER */}
                                <ArchiveSection icon={<ShieldCheck size={22} />} title="İdari Görevler ve Bilimsel Üyelikler">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <ul className="space-y-4">
                                            <li className="flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                                                <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                                                <span className="text-sm font-black text-slate-700 uppercase tracking-tighter leading-tight">
                                                    Harran Üniversitesi Tıp Fakültesi KBB Anabilim Dalı Başkanı (2013 - Günümüz)
                                                </span>
                                            </li>
                                            <li className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                                <CheckCircle2 className="text-slate-400 shrink-0" size={18} />
                                                <span className="text-sm font-bold text-slate-600">Hastane Malzeme Muayene Kabul Komisyon Üyeliği</span>
                                            </li>
                                        </ul>
                                        <div className="space-y-4">
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Bilimsel Kuruluş Üyelikleri</p>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                                                    <Award size={16} className="text-blue-600" />
                                                    <span className="text-xs font-bold text-slate-700 uppercase">Türk Tabipler Birliği</span>
                                                </div>
                                                <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                                                    <Award size={16} className="text-blue-600" />
                                                    <span className="text-xs font-bold text-slate-700 uppercase leading-tight">Türk KBB ve Baş Boyun Cerrahisi Derneği</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ArchiveSection>

                                {/* J & K. ULUSAL/ULUSLARARASI PANEL VE GÖREVLER */}
                                <ArchiveSection icon={<History size={22} />} title="Panelist, Eğitmen ve Yurtdışı Görevler">
                                    <div className="space-y-4">
                                        <div className="p-5 bg-blue-900 text-white rounded-[2rem] flex items-center gap-6 shadow-xl">
                                            <div className="p-4 bg-white/10 rounded-2xl"><Globe size={32} /></div>
                                            <div>
                                                <h4 className="text-lg font-black uppercase leading-tight tracking-tighter">Texas Üniversitesi Tıp Fakültesi</h4>
                                                <p className="text-sm opacity-80 italic font-medium">Houston, ABD - KBB Anabilim Dalı Observer (2012)</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border border-slate-100 rounded-2xl">
                                                <p className="text-[10px] text-blue-600 font-black uppercase">Panelist (2013)</p>
                                                <p className="text-xs font-bold text-slate-700 mt-1">Mezopotamya Çocukluk Dönemi Odyoloji ve KBB Sorunları</p>
                                            </div>
                                            <div className="p-4 border border-slate-100 rounded-2xl">
                                                <p className="text-[10px] text-blue-600 font-black uppercase">Uzmanlık Belgesi (2010)</p>
                                                <p className="text-xs font-bold text-slate-700 mt-1">KBB BBC Yeterlilik Sınavı Başarısı</p>
                                            </div>
                                        </div>
                                    </div>
                                </ArchiveSection>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}

// 📂 ARŞİV MODAL YARDIMCI BİLEŞENLERİ
function ArchiveSection({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) {
    return (
        <div>
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-5">
                <div className="p-3 bg-slate-900 text-white rounded-2xl shadow-lg">{icon}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{title}</h3>
            </div>
            <div className="pl-0 md:pl-4">{children}</div>
        </div>
    );
}

function ArchiveItem({ id, text }: { id: string, text: string }) {
    return (
        <div className="flex gap-5 p-5 rounded-[1.5rem] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
            <span className="text-blue-600 font-black text-xs pt-1 group-hover:scale-110 transition-transform">{id}</span>
            <p className="text-sm text-slate-700 leading-relaxed font-semibold">{text}</p>
        </div>
    );
}

function ProjectDetail({ title, desc, role }: { title: string, desc: string, role: string }) {
    return (
        <div className="border-l-4 border-slate-900 pl-6 py-2 bg-slate-50/50 rounded-r-2xl">
            <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase">{title}</h4>
            <p className="text-xs text-slate-500 mt-1 font-bold leading-relaxed">{desc}</p>
            <p className="text-[10px] text-blue-600 font-bold uppercase mt-1 italic">{role}</p>
        </div>
    );
}

function CourseItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
            <CheckCircle2 size={16} className="text-blue-600" />
            <span className="text-[11px] font-black text-slate-800 uppercase tracking-tighter leading-none">{text}</span>
        </div>
    );
}

// 💎 ANA SAYFA YARDIMCI BİLEŞENLERİ
function StatBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="border-l-4 border-blue-600 pl-4 py-1 text-left">
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