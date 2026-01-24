# Dr. İbrahim Ünal  
## KBB ve Baş & Boyun Cerrahisi – Web Portfolyosu

Bu proje, KBB Uzmanı Dr. İbrahim Ünal için geliştirilmiş; yüksek performanslı, SEO uyumlu ve modern mimariye sahip bir cerrah portfolyo ve randevu web sitesidir.  
Proje, Next.js (App Router) ve Sanity.io (Headless CMS) altyapısıyla inşa edilmiştir.

Canlı Demo: https://kbb-portfolio.vercel.app
Repository: https://github.com/ibrahimhalilalpa/dr-ibrahim-unal-web

---

## Proje Özellikleri

### Dinamik İçerik Yönetimi
Sanity.io entegrasyonu sayesinde aşağıdaki içerikler kod yazılmadan yönetilebilir:
- Hizmetler
- Blog yazıları
- Sıkça Sorulan Sorular (SSS)
- Vaka ve galeri içerikleri

### Vaka Analiz Sistemi
- Ameliyat öncesi ve sonrası görseller
- Yüksek çözünürlüklü before/after slider yapısı
- Mobil ve masaüstü uyumlu arayüz

### Randevu Talep Sistemi
- EmailJS ve Gmail API entegrasyonu
- Doğrudan e-posta ile randevu talebi oluşturma
- Form doğrulama ve güvenlik kontrolleri

### Performans ve SEO
- Next.js App Router mimarisi
- Turbopack ile optimize edilmiş build süreci
- Server Components ve ISR kullanımı
- SEO uyumlu meta ve yapılandırılmış veri (schema) desteği

### Mobil Öncelikli Tasarım
- Tailwind CSS ile responsive yapı
- Mobil cihazlarda taşma ve çakışma problemi olmayan arayüz
- Slider ve kart yapılarında yatay kayma (x-scroll) önlemleri

---

## Kullanılan Teknolojiler

### Frontend
- Next.js
- React
- Tailwind CSS
- Framer Motion
- Swiper.js

### CMS ve Servisler
- Sanity.io
- EmailJS
- Gmail API

### Yayınlama
- Vercel

---

## Proje Yapısı (Özet)

```txt
kbb-portfolio/
├── src/
│   ├── app/                         # Next.js 15 App Router Sistemi
│   │   ├── blog/ [slug]/            # Dinamik blog detay sayfaları
│   │   ├── randevu/                 # Özel randevu yönetim sayfası
│   │   ├── studio/ [[...tool]]/     # Sanity Studio yönetim paneli (Giriş)
│   │   ├── data/                    # Yerel veriler (cases.json vb.)
│   │   ├── favicon.ico              # Site ikonu
│   │   ├── globals.css              # Tailwind & Global CSS stilleri
│   │   ├── layout.tsx               # Ana şablon (Navbar & Footer'ın evi)
│   │   └── page.tsx                 # Ana sayfa (Tüm section'ların birleşimi)
│   ├── components/                  # UI Bileşenleri (Seninle düzelttiğimiz yer)
│   │   ├── Navbar.tsx               # Logo solda, yönlendirmeler ortada olan bar
│   │   ├── Appointment.tsx          # EmailJS entegreli randevu formu
│   │   ├── BeforeAfter.tsx          # Vaka analiz slider bileşeni
│   │   ├── BlogList.tsx             # Ana sayfadaki blog kartları
│   │   ├── FAQ.tsx                  # Sıkça Sorulan Sorular akordiyonu
│   │   ├── Footer.tsx               # İletişim bilgilerinin olduğu alt kısım
│   │   └── Services.tsx             # Hizmetler listesi
│   ├── lib/                         # Yardımcı kütüphaneler
│   │   └── sanity.ts                # Sanity istemci bağlantı ayarları
│   └── sanity/ schemaTypes/         # İçerik Yönetim Modelleri
│       ├── index.ts                 # Şemaların birleştiği ana dosya
│       ├── post.ts                  # Blog yazısı veri yapısı
│       └── vaka.ts                  # Ameliyat vakaları veri yapısı
├── public/                          # Statik dosyalar ve görseller
├── .gitignore                       # Git dışı bırakılacaklar
├── next.config.ts                   # Next.js & Turbopack yapılandırması
├── package.json                     # Proje bağımlılıkları ve scriptler
├── README.md                        # Seninle yazdığımız profesyonel döküman
└── vercel.json                      # Vercel deployment ayarları (varsa)
```



## Kurulum ve Çalıştırma
### Depoyu Klonlama

````bash
git clone https://github.com/ibrahimhalilalpa/dr-ibrahim-unal-web.git
cd dr-ibrahim-unal-web
````


## Bağımlılıkları Yükleme

````bash
npm install
````

