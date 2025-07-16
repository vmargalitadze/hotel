import React from "react";
import rooms from "./data";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
function Cottages() {
  return (
    <>
      <section>
        <div className="max-w-7xl bg-white mt-16 mx-auto">
          <div className="container mx-auto">
            <h2 className="  text-[20px] mb-4 md:text-[30px] font-cormorant font-bold md:text-start text-center">
              იპოვეთ თქვენთვის იდეალური კოტეჯი –{" "}
              <span>
                {" "}
                <br />
                <span>მყუდრო, მომხიბვლელი და ბუნებით გარშემორტყმული</span>
              </span>
            </h2>

            <div className="grid mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {rooms.map((cottage, index) => {
                // Define class name based on index
                const indexClass =
                  index === 0
                    ? "first"
                    : index === 1
                    ? "second"
                    : index === 2
                    ? "third"
                    : "";

                return (
                  <div
                    key={cottage.id}
                    className={`${indexClass} rounded-lg flex flex-col justify-end items-center text-white h-full`}
                  >
                    <div className="mb-6 flex w-full items-center justify-around">
                      <Link
                        href={`/rooms/${cottage.id}`}
                        className="text-white hover:underline text-[20px] md:text-[24px] font-semibold"
                        aria-label={cottage.name}
                      >
                        <span>{cottage.name}</span>
                      </Link>

                      <Link
                        href={`/rooms/${cottage.id}`}
                        aria-label={`Go to ${cottage.name}`}
                        className="bg-[#ff7200] rounded-full w-10 h-10 flex items-center justify-center shrink-0 hover:opacity-90 transition"
                      >
                        <ArrowRight className="text-black text-xl" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cottages;
