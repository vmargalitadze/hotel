import React from "react";
import Image from "next/image";
function Perfect() {
  return (
    <section className="w-full mt-16 bg-white">
      <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-12 lg:px-20 gap-12">
        {/* მარცხენა: დიდი სურათი */}
        <div className="w-full md:w-[60%]">
          <Image
            src="/perfect/polina-kuzovkova-dh3ykciekro-unsplash.webp"
            alt="სურათი"
            width={500}
            unoptimized
            height={700}
            className="w-full h-[900px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* მარჯვენა: სურათი + ტექსტი ცენტრში */}
        <div className="w-full md:w-[35%] justify-center mt-5 md:mt-24 flex flex-col items-center md:items-center text-center">
          <h1 className="text-[20px] md:text-[30px] text-black font-cormorant font-bold mb-6">
            სრულყოფილი გაქცევა გელოდება
          </h1>

          <div className="relative w-full max-w-[350px] h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-4 group">
            <Image
              src="/perfect/pratik-bachhav-xtae1e3si6s-unsplash.webp"
              alt="სურათი"
              fill
              unoptimized
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />
          </div>

          <p className=" text-[18px] text-black font-cormorant">
            გაიღვიძეთ განსაცვიფრებელი ხედებით, დაისვენეთ მყუდრო კოტეჯებში და
            შეისწავლეთ თვალწარმტაცი ბილიკები, ჩანჩქერები და ველური ბუნება.
            თავგადასავლებისთვის თუ დასვენებისთვის, ეს იდეალური ადგილია
            დასასვენებლად
          </p>
        </div>
      </div>
    </section>
  );
}

export default Perfect;
