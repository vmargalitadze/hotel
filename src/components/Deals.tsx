import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
function Deals() {
  return (
    <section className="bg-white mt-16 mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="  text-[20px] mb-4 md:text-[30px] font-cormorant font-bold md:text-start text-center">
          ექსკლუზიური შეთავაზებები
          <span>
            {" "}
            <br />
            <span>თქვენი იდეალური დასვენებისთვის</span>
          </span>
        </h2>

        {/* Description + Cards */}
        <div className="grid md:grid-cols-4 gap-6 items-start">
          {/* Card 1 */}
          <div className="col-span-1 cursor-pointer relative group overflow-hidden rounded-xl shadow-lg h-[420px]">
            <Image
              src="/deals/1.webp"
              alt="Early Bird Discount"
              fill
              className="object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-6 left-6 text-white space-y-2">
              <h3 className="text-xl font-semibold">Early Bird Discount</h3>
              <p className="text-sm">Book in advance and save 15%!</p>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-lg">
              <span className="bg-[#ff7200] rounded-full w-10 h-10 flex items-center justify-center ml-4 shrink-0">
                <ArrowRight className="text-black text-2xl" />
              </span>
            </div>
          </div>

          {/* Middle Description (col-span-1) */}
          <div className="hidden md:block col-span-1">
            <p className=" text-[18px] text-black font-cormorant">
              დაუჯერებელი შეთავაზებები თქვენი სტუმრობის კიდევ უფრო
             საინტერესოდ გახდომისთვის.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-span-1 cursor-pointer relative mt-0 md:mt-24 group overflow-hidden rounded-xl shadow-lg h-[420px]">
            <Image
              src="/deals/2.webp"
              alt="Weekend Escape Deal"
              fill
              className="object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-6 left-6 text-white space-y-2">
              <h3 className="text-xl font-semibold">Weekend Escape Deal</h3>
              <p className="text-sm">Stay 2 nights, get the 3rd night free!</p>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-lg">
              <span className="bg-[#ff7200] rounded-full w-10 h-10 flex items-center justify-center ml-4 shrink-0">
                <ArrowRight className="text-black text-2xl" />
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-1 cursor-pointer relative group overflow-hidden rounded-xl shadow-lg h-[420px]">
            <Image
              src="/deals/3.webp"
              alt="Romantic Escape"
              fill
              className="object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute top-6 left-6 text-white space-y-2">
              <h3 className="text-xl font-semibold">Romantic Escape</h3>
              <p className="text-sm">Complimentary treats for couples</p>
            </div>
            <div className="absolute bottom-6 right-6 text-white text-lg">
              <span className="bg-[#ff7200] rounded-full w-10 h-10 flex items-center justify-center ml-4 shrink-0">
                <ArrowRight className="text-black text-2xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deals;
