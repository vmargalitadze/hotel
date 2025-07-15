import React from "react";

const cottages = [
  {
    id: 1,
    name: "The Forest Haven",
  },
  {
    id: 2,
    name: "Lakeside Serenity",
  },
  {
    id: 3,
    name: "Mountain View",
  },
];

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
              {cottages.map((cottage, index) => {
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
                    <div className="mb-6 flex flex-col w-full">
                      <h4 className="text-[20px] md:text-[30px] font-semibold w-full">
                        <Link
                          href={`/rooms/${cottage.id}`}
                          className="flex items-center justify-around w-full text-white hover:underline"
                          aria-label="Lakeside Serenity"
                        >
                          <span>{cottage.name}</span>
                          <span className="bg-[#ff7200] rounded-full w-10 h-10 flex items-center justify-center ml-4 shrink-0">
                            <ArrowRight className="text-black text-2xl" />
                          </span>
                        </Link>
                      </h4>
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
