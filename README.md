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
├── app/
│   ├── blog/
│   ├── services/
│   ├── cases/
│   └── appointment/
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── Sliders
│   └── Forms
├── sanity/
│   ├── schemas/
│   └── client.ts
├── lib/
│   ├── emailjs.ts
│   └── seo.ts
├── public/
└── styles/
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

