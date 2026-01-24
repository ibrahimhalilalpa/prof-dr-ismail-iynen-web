import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import { Calendar, Phone, ArrowRight, Mail, MapPin, Instagram, MessageCircle, Check } from 'lucide-react';
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/Appointment";
import BlogList from "@/components/BlogList";

export default function Home() {
  const WHATSAPP_URL = "https://wa.me/905555555555";

  return (
    <main className="bg-white relative">
      {/* Sabit WhatsApp Butonu */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">

          {/* SOL TARAF: Metinler ve Butonlar */}
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-blue-100">
              KBB ve Baş Boyun Cerrahisi
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Sağlıklı Nefes <br />
              <span className="text-blue-600">Doğal Estetik</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 max-w-xl leading-relaxed">
              Dr. İbrahim Ünal ile fonksiyonel cerrahi çözümleri ve yüz hatlarınızla uyumlu, kişiye özel estetik yaklaşımlar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/randevu" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
                <Calendar size={22} /> Randevu Alın
              </a>
              <a href="#iletisim" className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                İletişim <ArrowRight size={18} />
              </a>
            </div>

            {/* Yeni Özellikler Alanı */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 opacity-80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Check size={20} />
                </div>
                <div className="text-sm font-bold text-slate-700 leading-tight">Doğal ve Estetik <br /> Sonuçlar</div>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-300" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Check size={20} />
                </div>
                <div className="text-sm font-bold text-slate-700 leading-tight">Konforlu Nefes <br /> Garantisi</div>
              </div>
            </div>
          </div> {/* SOL TARAF BURADA KAPANMALIYDI */}

          {/* SAĞ TARAF: Doktor Fotoğrafı */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center px-4">
            <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-blue-600 rounded-[60px] rotate-6 absolute top-0 opacity-10 animate-pulse"></div>
            <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-slate-200 rounded-[60px] -rotate-3 absolute top-4 opacity-30"></div>

            <div className="w-72 h-72 lg:w-[480px] lg:h-[480px] bg-white rounded-[60px] overflow-hidden relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-white">
              <img
                src="/doktor.jpeg"
                alt="Dr. İbrahim Ünal"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div> {/* Container burada kapanıyor */}
      </section>

      <div className="relative z-20 ">
        <Services />
        <BeforeAfter />
        <BlogList />
        <FAQ />
        <Footer />
      </div>


    </main>
  );
}