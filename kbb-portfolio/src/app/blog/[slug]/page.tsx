'use client'
import { useEffect, useState } from 'react';
import { client } from '../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';

const saglikNotlari = [
    "Sağlıklı nefes, kaliteli yaşamın temelidir. Şikayetlerinizi ertelemek yerine modern tedavi yöntemleriyle kalıcı çözümlere ulaşabilirsiniz.",
    "Burun tıkanıklığı sadece bir konfor sorunu değil, kalp ve akciğer sağlığını doğrudan etkileyen ciddi bir durumdur.",
    "Çocuklarda geniz eti büyümesi, horlama ve işitme kayıpları üzerine kapsamlı rehber.",
    "Sinüzit tedavisinde güncel yöntemler sayesinde artık operasyon sonrası iyileşme süreleri çok daha kısadır."
];

export default function BlogDetail({ params }: { params: any }) {
    const [data, setData] = useState<any>(null);
    const [completion, setCompletion] = useState(0);
    const [rastgeleNot, setRastgeleNot] = useState("");

    // 1. Okuma Barı ve Rastgele Not
    useEffect(() => {
        setRastgeleNot(saglikNotlari[Math.floor(Math.random() * saglikNotlari.length)]);

        const updateScroll = () => {
            const current = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            setCompletion((current / height) * 100);
        };
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    // 2. Veri Çekme (Senin çalışan eski mantığın)
    useEffect(() => {
        if (params) {
            params.then((res: any) => {
                client.fetch(`{
                    "post": *[_type == "post" && slug.current == "${res.slug}"][0] {
                        title, publishedAt, body, "imageUrl": mainImage.asset->url
                    },
                    "related": *[_type == "post" && slug.current != "${res.slug}"] | order(publishedAt desc)[0...3] {
                        title, slug, "imageUrl": mainImage.asset->url
                    }
                }`).then(setData);
            });
        }
    }, [params]);

    if (!data) return null;

    return (
        <>
            {/* Üstteki Okuma Çubuğu */}
            <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-slate-100">
                <div className="h-full bg-blue-600 transition-all duration-150" style={{ width: `${completion}%` }} />
            </div>

            <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
                {/* Başlık Alanı */}
                <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight leading-[1.15] mb-8 italic">
                        {data.post.title}
                    </h1>
                </div>

                {/* Görsel Alanı */}
                <div className="container mx-auto px-4 max-w-4xl mb-16">
                    {data.post.imageUrl && (
                        <div className="relative h-[300px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-200">
                            <Image src={data.post.imageUrl} alt={data.post.title} fill className="object-cover" priority />
                        </div>
                    )}
                </div>

                {/* İçerik Düzeni: Sol (Yazı) - Sağ (Sidebar) */}
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Sol: Ana Yazı Kartı */}
                        <div className="lg:col-span-8 bg-white p-8 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
                            <div className="prose prose-lg max-w-none prose-slate prose-headings:font-black prose-headings:uppercase prose-p:text-slate-600 leading-relaxed italic">
                                <PortableText value={data.post.body} />
                            </div>
                        </div>

                        {/* Sağ: Sidebar (Yeni Nesil Dolu Sidebar) */}
                        <aside className="lg:col-span-4 space-y-6">
                            {/* Kutu 1: Uzmanlık Alanları */}
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                <h4 className="font-black text-slate-900 uppercase text-[11px] tracking-[0.25em] mb-6 pb-4 border-b border-slate-50 italic flex items-center justify-between">
                                    Hizmetler
                                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                                </h4>
                                <ul className="space-y-4">
                                    {['Burun Estetiği', 'Sinüzit Tedavisi', 'Çocuk KBB', 'Kepçe Kulak'].map((item) => (
                                        <li key={item} className="flex items-center gap-2 group cursor-pointer italic">
                                            <span className="h-[1px] w-4 bg-slate-200 group-hover:w-6 group-hover:bg-blue-600 transition-all"></span>
                                            <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 uppercase tracking-tighter">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Kutu 2: Dinamik Not Kutusu */}
                            <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
                                <h4 className="relative z-10 font-black uppercase text-[10px] tracking-[0.3em] text-blue-400 mb-5 italic">Önemli Not</h4>
                                <p className="relative z-10 text-[15px] leading-relaxed text-slate-300 font-semibold italic">
                                    "{rastgeleNot}"
                                </p>
                            </div>
                        </aside>

                    </div>
                </div>

                {/* Alt Kısım: Sıradaki Okuma - Gelişmiş Hover Efekti */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex items-center gap-6 mb-16">
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap italic">Sıradaki Okuma</h3>
                            <div className="h-[1px] w-full bg-slate-100" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-10">
                            {data.related.map((item: any) => (
                                <Link href={`/blog/${item.slug.current}`} key={item.slug.current} className="group flex flex-col">
                                    {/* Görsel Alanı */}
                                    <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        />
                                        {/* Görsel Üstü Hafif Karartma (Hover'da kaybolur) */}
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>

                                    {/* Metin Alanı */}
                                    <div className="px-2">
                                        <h4 className="font-black text-slate-900 text-lg leading-tight uppercase tracking-tighter group-hover:text-blue-600 transition-colors mb-4 italic">
                                            {item.title}
                                        </h4>

                                        {/* YENİ: Hover'da Çıkan Çizgi ve Yazı */}
                                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                                            <span className="h-[1px] w-8 bg-blue-600"></span>
                                            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">İncele</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}