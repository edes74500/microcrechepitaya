"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "/slider/home/1.jpg",
  },

  {
    image: "/slider/home/3.jpg",
  },
  {
    image: "/slider/home/4.jpg",
  },
  {
    image: "/slider/home/5.jpg",
  },
  {
    image: "/slider/home/6.jpg",
  },
  {
    image: "/slider/home/7.jpg",
  },
];

export default function CarrousselHomePage() {
  return (
    <div className="relative h-[70vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] tracking-wide">
                    Pitaya Micro-Crèche
                  </h1>
                  <p className="text-xl md:text-2xl mb-14 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] font-light max-w-3xl mx-auto">
                    Un environnement chaleureux et bienveillant au cœur de Besançon, où chaque enfant s'épanouit dans un
                    cadre adapté à son développement.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <Link href="/pre-inscription">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-10 py-6 font-semibold shadow-lg hover:scale-105 transition-transform"
                      >
                        Pré-inscription
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button
                        size="lg"
                        className="text-lg px-10 py-6 font-semibold shadow-lg hover:scale-105 transition-transform"
                      >
                        Découvrir la crèche
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
