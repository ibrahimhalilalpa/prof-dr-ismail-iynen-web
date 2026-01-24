"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Rinoplasti (Burun Estetiği) sonrası iyileşme süreci ne kadar sürer?",
        answer: "Ameliyat sonrası ilk 1 hafta alçı ve bantlarınız kalır. Genellikle 10. günde sosyal hayata dönebilirsiniz. Ödemlerin tamamen inmesi ve burnun son şeklini alması 6 ay ile 1 yıl arasındadır."
    },
    {
        question: "Ameliyat sonrası çok ağrım olur mu?",
        answer: "Modern teknikler sayesinde rinoplasti sonrası şiddetli ağrılar beklenmez. Genellikle ilk 2 gün hafif bir dolgunluk hissi olur ve bu durum basit ağrı kesicilerle kolayca kontrol altına alınır."
    },
    {
        question: "Burun ameliyatında tampon kullanılıyor mu?",
        answer: "Eski tip bez tamponlar yerine, nefes almanıza izin veren silikon splintler kullanıyoruz. Bu sayede operasyon sonrası nefes alabiliyorsunuz ve çıkarılırken herhangi bir acı hissetmiyorsunuz."
    },
    {
        question: "Kepçe kulak ameliyatı kalıcı çözüm sunar mı?",
        answer: "Evet, otoplasti (kepçe kulak estetiği) kalıcı bir operasyondur. Kulağın kıkırdak yapısı yeniden şekillendirildiği için sonuçlar ömür boyu kalıcılığını korur."
    },
    {
        question: "Sinüzit tedavisinde cerrahi ne zaman gereklidir?",
        answer: "İlaç tedavisine yanıt vermeyen, kronikleşmiş ve yaşam kalitesini bozan sinüzit vakalarında endoskopik sinüs cerrahisi (ESC) en etkili çözümdür."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50" id='sss'>
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Bilgi Merkezi</h2>
                        <h3 className="text-4xl font-black text-slate-900">Sıkça Sorulan Sorular</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-slate-800 pr-8">{faq.question}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}