"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/hero/photo-1449158743715-0a90ebb6d2d8.avif",
  "/hero/HD-wallpaper-forest-cottage-house-mountains-path-trees-artwork.jpg",
];

const Moments = () => {
  return (
    <section className="relative mt-16 w-full h-[80vh] md:h-screen overflow-hidden">
      <style jsx>{`
        @keyframes continuousZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.3);
          }
        }
        .zoom-animation {
          animation: continuousZoom 15s linear infinite;
        }
      `}</style>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 zoom-animation">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="z-0"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-black/30 z-10" />
              {/* Top Left Text */}
              <div className="absolute top-10 left-10 md:left-24 z-20 max-w-[90%] md:max-w-[60%]">
                <h1 className="text-white font-cormorant text-[22px] md:text-[36px] font-bold drop-shadow-lg">
                  ისიამოვნეთ ყოველი <br /> გატარებული წამით
                </h1>
              </div>

              {/* Bottom Left Paragraph */}
              <div className="absolute bottom-10 left-10 md:left-24 z-20 max-w-[90%] md:max-w-[60%]">
                <p className=" text-[18px] text-white font-cormorant">
                  ჩაეფლეთ ბუნებაში და შექმენით დაუვიწყარი მოგონებები <br />{" "}
                  ჩვენი მრავალფეროვანი გარე და დასასვენებელი აქტივობებით.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Moments;
