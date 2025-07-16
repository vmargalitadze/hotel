import React from "react";
import Image from "next/image";
function Perfect() {
  return (
    <section className="max-w-7xl  mx-auto mt-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between   gap-12">
      
          <div className="w-full md:w-[55%]">
            <Image
              src="/perfect/polina-kuzovkova-dh3ykciekro-unsplash.webp"
              alt="სურათი"
              width={400}
              unoptimized
              height={500}
              className="w-full h-[700px] object-cover rounded-xl shadow-lg"
            />
          </div>

       
          <div className="w-full md:w-[35%] justify-center  flex flex-col items-center md:items-center text-center">
            <h1 className="text-[20px] md:text-[30px] text-black font-cormorant font-bold mb-6">
              სრულყოფილი გაქცევა გელოდება
            </h1>

            <div className="relative w-full mt-5 max-w-[570px] h-64 md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-4 group">
              <Image
                src="/perfect/pratik-bachhav-xtae1e3si6s-unsplash.webp"
                alt="სურათი"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />
            </div>

            <p className=" text-[20px] mt-7 text-center text-black font-cormorant">
              გაიღვიძეთ განსაცვიფრებელი ხედებით, დაისვენეთ მყუდრო კოტეჯებში და
              შეისწავლეთ თვალწარმტაცი ბილიკები, ჩანჩქერები და ველური ბუნება.
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfect;
