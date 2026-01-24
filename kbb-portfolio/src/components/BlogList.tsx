'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function BlogList() {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...10] {
            title,
            slug,
            "imageUrl": mainImage.asset->url,
            "description": pt::text(body) 
        }`).then(data => setPosts(data)).catch(err => console.error("Blog çekilemedi:", err))
    }, [])

    if (!posts || posts.length === 0) return null

    return (
        <section id="blog" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                        Sağlık Rehberi
                    </h2>
                    <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mt-4"></div>
                </div>

                {/* 1. slidesPerView: 3 (Masaüstünde sadece 3 kart görünür)
                    2. el: '.custom-pagination' (Noktaları Swiper dışına atar)
                */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination'
                        }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className="!overflow-hidden"
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post.slug?.current} className="pb-4">
                                <Link href={`/blog/${post.slug?.current}`} className="group block h-full">
                                    <div className="bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] h-[540px] flex flex-col p-4">

                                        <div className="relative h-64 w-full rounded-[2rem] overflow-hidden">
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                            />
                                        </div>

                                        <div className="p-6 flex flex-1 flex-col justify-between">
                                            <div>
                                                <h3 className="font-black text-slate-900 text-xl leading-tight uppercase tracking-tighter group-hover:text-blue-600 transition-colors line-clamp-2 italic">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-4 text-slate-500 text-sm leading-relaxed line-clamp-2 italic">
                                                    {post.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="h-[1px] w-8 bg-blue-600 group-hover:w-12 transition-all"></span>
                                                <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest">İncele</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* NOKTALAR: Swiper konteynerinin tamamen dışında ve 64px (mt-16) aşağıda */}
                <div className="custom-pagination flex justify-center gap-2 mt-16 relative z-30"></div>
            </div>

            <style jsx global>{`
                /* 4. kartın yandan sızmasını engelleyen Swiper konteyner kuralı */
                .swiper {
                    overflow: clip !important;
                }
                .custom-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #cbd5e1;
                    opacity: 1;
                    transition: all 0.3s ease;
                    border-radius: 50%;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    width: 32px;
                    background: #2563eb;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    )
}