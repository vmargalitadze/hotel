import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <Image
        src="/hero/photo-1449158743715-0a90ebb6d2d8.avif"
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
      <div className="relative font-cormorant z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          გაიქეცი ბუნებაში,
          <span className="gap-y-2">
            {" "}
            <br />{" "}
          </span>
          <span className="block mt-2">დარჩი კომფორტში</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
