"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck, Microscope, Award, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Bileşen importları
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anasayfa", // Tarayıcıda: "Anasayfa | Prof. Dr. İsmail İynen"
  description: "Prof. Dr. İsmail İynen resmi web sitesi. KBB ve Baş Boyun Cerrahisi uzmanlığı.",
};


export default function Home() {
  return (
    <main className="bg-white relative">
      {/* 1. HERO SECTION: AKADEMİK OTORİTE VE KATMANLI TASARIM */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50" id="anasayfa">
        {/* ARKA PLAN DEKORU: Yana yatık asimetrik div */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/80 -skew-x-12 translate-x-1/2 pointer-events-none hidden lg:block" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* SOL TARAF: Tamamen Özgeçmiş Odaklı İçerik */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 z-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg shadow-blue-100">
                <ShieldCheck size={14} /> Harran Üniversitesi KBB Anabilim Dalı Başkanı
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                KBB ve Baş Boyun <br />
                <span className="text-blue-600">Cerrahi Uzmanlığı</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mt-8 leading-relaxed font-medium">
                1995 yılından bu yana tıp pratiğini akademik çalışmalarla bütünleştiren Prof. Dr. İsmail İynen;
                <span className="text-slate-900 font-bold"> cerrahi doku iyileşmesi, ses hastalıkları ve odyoloji </span>
                alanında uluslararası düzeyde bilimsel uzmanlık sunmaktadır.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link href="/randevu" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1 group">
                  <Calendar size={20} /> Randevu Alın
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/hakkimda" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                  Akademik Özgeçmiş <ArrowRight size={18} />
                </Link>
              </div>

              {/* Hızlı Başarı Göstergeleri - CV Verileri */}
              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-200 pt-10">
                <div>
                  <p className="text-3xl font-black text-slate-900">2018</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Profesörlük</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">70+</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Bilimsel Yayın</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">Çift</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Uzmanlık</p>
                </div>
              </div>
            </motion.div>

            {/* SAĞ TARAF: Katmanlı/Yana Yatık Div Tasarımı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2 relative flex justify-center px-4"
            >
              {/* Arkadaki yana yatık divler (O meşhur asimetrik yapı) */}
              <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-blue-600 rounded-[60px] rotate-6 absolute top-0 opacity-10"></div>
              <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-slate-200 rounded-[60px] -rotate-3 absolute top-4 opacity-30"></div>

              <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-white rounded-[60px] overflow-hidden relative z-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border-8 border-white">
                <img
                  src="/ismail-iynen-img.jpeg"
                  alt="Prof. Dr. İsmail İynen"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DİĞER BÖLÜMLER */}
      <section id="hizmetler" className="scroll-mt-20">
        <Services />
      </section>

      <section id="vakalar" className="scroll-mt-20">
        <BeforeAfter />
      </section>

      <section id="blog" className="scroll-mt-20">
        <BlogList />
      </section>

      <section id="sss" className="scroll-mt-20">
        <FAQ />
      </section>

      <Footer />
    </main>
  );


}