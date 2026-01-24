"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const services = ["Burun Estetiği", "Sinüzit Tedavisi", "Kepçe Kulak", "Diğer"];

export default function AppointmentForm() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (form.current) {
            emailjs.sendForm('service_9my5xfd', 'template_4klwrtb', form.current, 'xaLOnGmYys9B9OQhG')
                .then(() => {
                    alert('Randevu talebiniz iletildi!');
                    form.current?.reset();
                    setSelectedService("");
                    setLoading(false);
                }, () => setLoading(false));
        }
    };

    return (
        <div className="bg-[#F8FAFC]">
            <section id="randevu" className="py-20 lg:py-24">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* SOL: Bilgi Alanı - Boyutlar Optimize Edildi */}
                        <div className="w-full space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                                    Randevu & <br /> İletişim
                                </h2>
                                <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm">
                                    Size en kısa sürede dönüş yapabilmemiz için formu doldurabilir veya klinik hattımızdan bize ulaşabilirsiniz.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { label: 'Telefon', val: '+90 541 710 2113', icon: '📞' },
                                    { label: 'Klinik Adresi', val: 'Bağdat Caddesi, İstanbul', icon: '📍' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center text-lg border border-slate-100">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.label}</p>
                                            <p className="font-bold text-slate-700 text-sm uppercase">{item.val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SAĞ: Form Kartı - Daha Kompakt ve Şık */}
                        <div className="w-full">
                            <form ref={form} onSubmit={sendEmail}
                                className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl border border-slate-50 space-y-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Ad Soyad</label>
                                        <input type="text" name="user_name" placeholder="Ad Soyad" required
                                            className="w-full py-3 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-200" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefon</label>
                                        <input type="tel" name="user_phone" placeholder="05XX..." required
                                            className="w-full py-3 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-200" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-posta</label>
                                    <input type="email" name="user_email" placeholder="ornek@mail.com" required
                                        className="w-full py-3 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-200" />
                                </div>

                                {/* ÖZEL SEÇİM MENÜSÜ (Dropdown) */}
                                <div className="space-y-1.5 relative">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hizmet Seçimi</label>
                                    <input type="hidden" name="service_type" value={selectedService} required />
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full py-3 border-b-2 border-slate-100 flex justify-between items-center cursor-pointer hover:border-blue-600 transition-all"
                                    >
                                        <span className={`font-bold ${selectedService ? 'text-slate-800' : 'text-slate-200'}`}>
                                            {selectedService || "İşlem Seçiniz..."}
                                        </span>
                                        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-300'}`}>▼</span>
                                    </div>

                                    {isOpen && (
                                        <div className="absolute z-50 left-0 right-0 mt-1 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-1">
                                            {services.map((service) => (
                                                <div
                                                    key={service}
                                                    onClick={() => { setSelectedService(service); setIsOpen(false); }}
                                                    className="px-6 py-2.5 hover:bg-blue-50 hover:text-blue-600 cursor-pointer font-bold transition-all text-slate-700 text-sm"
                                                >
                                                    {service}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mesajınız</label>
                                    <textarea name="message" placeholder="Notunuz..." required
                                        className="w-full py-3 bg-transparent border-b-2 border-slate-100 focus:border-blue-600 outline-none font-bold text-slate-800 h-20 resize-none placeholder:text-slate-200" />
                                </div>

                                <button type="submit" disabled={loading}
                                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-blue-600 transition-all hover:-translate-y-1 active:scale-95 shadow-lg shadow-slate-200">
                                    {loading ? 'GÖNDERİLİYOR...' : 'TALEBİ GÖNDER →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}