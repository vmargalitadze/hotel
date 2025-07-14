import Image from "next/image";
import React from "react";

function Sec() {
  return (
    <section>
      <div className="max-w-7xl mt-16 mx-auto">
        <div className="container mx-auto">

        <h2 className="  text-[20px] mb-4 md:text-[30px] font-cormorant font-bold text-start">
          კოტეჯის გამოცდილება, რომლის მსგავსიც სხვა არაფერია –{" "}
          <span> <br/>
            <span>სადაც კომფორტი ბუნების სილამაზეს ხვდება</span>
          </span>
        </h2>

        <div className="grid mt-2 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/sec/josh-hild-zsuqlsxrjrk-unsplash.webp"
                  alt="კოტეჯი ბუნებაში"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-cormorant font-semibold text-gray-800 mb-4">
                  ბუნებაში ჩაფლული ჩვენი კოტეჯები თანამედროვე კომფორტსა და
                  სოფლურ ხიბლს აერთიანებს. გაიღვიძეთ ჩიტების ჭიკჭიკით, ისუნთქეთ
                  სუფთა ჰაერით და იგრძენით თავი განახლებულად.
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/sec/oleksii-piekhov-zosdndugsta-unsplash.webp"
                  alt="კოტეჯის ინტერიერი"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Sec;
