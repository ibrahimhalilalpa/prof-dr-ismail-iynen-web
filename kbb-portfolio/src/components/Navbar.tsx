"use client";
import React, { useState, useEffect } from 'react';
import { Stethoscope, ArrowLeft, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    if (pathname?.startsWith('/studio')) return null;

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsVisible(false);
                setIsMenuOpen(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const isInternalPage = pathname !== '/';
    const navLinks = [
        { name: 'Hizmetler', href: '/#hizmetler' },
        { name: 'Vakalar', href: '/#vakalar' },
        { name: 'S.S.S.', href: '/#sss' },
        { name: 'İletişim', href: '/#iletisim' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-[100] px-4 py-4 transition-all duration-500 pointer-events-none ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="container mx-auto max-w-6xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-[2.5rem] px-6 py-3 flex items-center justify-between pointer-events-auto relative min-h-[70px]">

                {/* SOL: Geri Butonu (Sadece İç Sayfalarda) */}
                <div className="flex items-center">
                    {isInternalPage ? (
                        <Link href="/" className="p-2.5 bg-slate-50 text-slate-600 rounded-2xl border border-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="w-10 lg:hidden" /> // Boşluk dengeleyici
                    )}
                </div>

                {/* MERKEZ: Logo (Mobilde tam ortada, masaüstünde sola çekilebilir) */}
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shrink-0 hidden sm:block">
                            <Stethoscope size={18} className="text-white" />
                        </div>
                        <div className="flex flex-col leading-tight text-center">
                            <span className="text-slate-900 font-black text-[12px] md:text-sm uppercase tracking-tight whitespace-nowrap">Dr. İbrahim Ünal</span>
                            <span className="text-blue-600 text-[8px] font-bold uppercase tracking-[0.2em]">KBB Cerrahisi</span>
                        </div>
                    </Link>
                </div>

                {/* SAĞ: WhatsApp (Sadece Masaüstü) & Hamburger Menü */}
                <div className="flex items-center gap-4">
                    {/* WhatsApp butonu mobilde (hidden) kapalı, lg ekranda (flex) açık */}
                    <a
                        href="https://wa.me/905555555555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-[#25D366] text-white rounded-full transition-all duration-300 shadow-lg group"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">WhatsApp</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2.5 text-slate-900 bg-slate-50 rounded-2xl border border-slate-100"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobil Menü Overlay */}
            {isMenuOpen && (
                <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-4 flex flex-col gap-2 lg:hidden pointer-events-auto border border-slate-100 animate-in slide-in-from-top-5 duration-300 overflow-hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-slate-900 font-bold p-5 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-3xl flex justify-between items-center uppercase text-xs tracking-[0.1em] transition-all"
                        >
                            {link.name}
                            <span className="opacity-20">→</span>
                        </a>
                    ))}
                    {/* Mobilde WhatsApp butonu menünün en altına taşındı */}
                    <a
                        href="https://wa.me/905555555555"
                        className="flex items-center justify-center gap-2 p-5 bg-slate-900 text-white rounded-3xl font-black uppercase text-xs tracking-widest mt-2"
                    >
                        WhatsApp İletişim
                    </a>
                </div>
            )}
        </nav>
    );
}