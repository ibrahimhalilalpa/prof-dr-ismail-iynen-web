"use client";
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
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
        { name: 'Anasayfa', href: '/#anasayfa' },
        { name: 'Hizmetler', href: '/#hizmetler' },
        { name: 'Vakalar', href: '/#vakalar' },
        { name: 'S.S.S.', href: '/#sss' },
        { name: 'İletişim', href: '/#iletisim' },
        { name: 'Randevu', href: '/randevu', highlight: true },
        { name: 'Hakkımda', href: '/hakkimda' },
    ];

    return (
        <nav className={`fixed w-full top-0 z-[100] px-4 py-3 transition-all duration-500 pointer-events-none ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            {/* min-h düşürüldü, py azaltıldı, gölge yumuşatıldı */}
            <div className="container mx-auto max-w-6xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg rounded-full px-6 py-2 flex items-center justify-between pointer-events-auto relative min-h-[56px]">

                {/* 1. SOL: Logo & Geri Butonu */}
                <div className="flex items-center gap-4 z-10">
                    {isInternalPage && (
                        <Link href="/" className="p-2 bg-slate-50 text-slate-600 rounded-xl border border-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-all group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    )}
                    <Link href="/" className="flex items-center">
                        {/* Logo kapsayıcısı küçüldü ama img tam kapasite kullanıyor */}
                        <div className="h-10 md:h-12 w-auto flex items-center justify-center">
                            <img
                                src="/logo.jpg"
                                alt="Prof. Dr. İsmail İynen Logo"
                                className="h-full w-auto object-contain mix-blend-multiply"
                            />
                        </div>
                    </Link>
                </div>

                {/* 2. MERKEZ: Navigasyon */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-all whitespace-nowrap px-2 py-1 rounded-lg ${link.highlight ? 'text-blue-600 bg-blue-50/50' : 'text-slate-500 hover:text-blue-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* 3. SAĞ: WhatsApp & Mobil Menu */}
                <div className="flex items-center gap-3 z-10">
                    <a
                        href="https://wa.me/905309007501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-[#25D366] text-white rounded-full transition-all duration-300 shadow-md group"
                    >
                        <span className="text-[9px] font-bold uppercase tracking-[0.1em]">WhatsApp</span>
                        <span className="group-hover:translate-x-1 transition-transform text-xs">→</span>
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobil Menü Overlay */}
            {isMenuOpen && (
                <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-3 flex flex-col gap-1 lg:hidden pointer-events-auto border border-slate-100 animate-in slide-in-from-top-2 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`p-4 rounded-2xl flex justify-between items-center uppercase text-[10px] tracking-[0.1em] transition-all ${link.highlight
                                ? 'bg-blue-600 text-white font-bold'
                                : 'text-slate-700 font-semibold bg-slate-50 hover:bg-blue-50'
                                }`}
                        >
                            {link.name}
                            <span className="text-xs">→</span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}