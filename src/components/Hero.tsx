"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/hero/748188.jpg",
    title: "გაიქეცი ბუნებაში, დარჩი კომფორტში",
  },
  {
    id: 2,
    image: "/hero/vQEAIdbkKzlqj6PkO6jU6eK8H2oxTkD9lKPIobb3.jpeg",
    title: "დაისვენე მშვიდ გარემოში"
  },

];

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gray-900">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={slide.image}
                alt="კოტეჯი ბუნებაში"
                layout="fill"
                objectFit="cover"
                quality={90}
                unoptimized
                className="z-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10" />
              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 font-cormorant">
                <h1 className=" text-[30px] mb-4 md:text-[45px] font-cormorant font-bold md:text-start text-center text-white">
                  {slide.title.split(",")[0]}
                  <br />
                  <span className="block mt-2">{slide.title.split(",")[1]}</span>
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
