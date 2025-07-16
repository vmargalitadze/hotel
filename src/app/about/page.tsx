"use client";
import Moments from "@/components/Moments";
import Image from "next/image";
import { Database, Wifi, Clock } from "lucide-react";

const facilities = [
  {
    icon: (
     <Database className="w-8 h-8 text-[#ff7200]" />
    ),
    title: "ოთახები ",
    desc: "სხვადასხვა ტიპის ოთახები, სტანდარტული და ლუქსები, აღჭურვილი ყველა საჭიროებით."
  },
  {
    icon: (
     <Clock className="w-8 h-8 text-[#ff7200]" />
    ),
    title: "24/7 უსაფრთხოება",
    desc: "უსაფრთხოების პერსონალი და ვიდეოთვალთვალი, დაცული გარემო და სეიფი."
  },
  {
    icon: (
     <Wifi className="w-8 h-8 text-[#ff7200]" />
    ),
    title: "ულიმიტო wifi",
    desc: "ულიმიტო wifi დაცული გარემოში."
  },
  
];



export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 font-cormorant">

        <Moments />
      {/* Welcome/Story Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative flex flex-col items-center md:items-start">
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#ff7200]/10 rounded-3xl z-0 hidden md:block" />
          <div className="relative z-10">
            <Image src="/rooms/302939238.jpg" alt="Mountain" width={260} height={180} className="rounded-xl shadow-lg mb-4" />
            <Image src="/rooms/564959252.jpg" alt="Hiker" width={180} height={120} className="rounded-xl shadow-lg absolute left-36 top-24 border-4 border-white hidden md:block" />
          </div>
        </div>
        <div>
          <span className="text-[#ff7200] text-lg font-semibold">ჩვენს შესახებ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">მოგესალმებით ჩვენს სასტუმროში</h2>
          <p className="text-lg text-gray-700 mb-4">ჩვენი სასტუმრო დაარსდა 1999 წელს და მას შემდეგ სტუმრებს ვთავაზობთ განსაკუთრებულ გარემოს, კომფორტს და დაუვიწყარ დასვენებას. ჩვენი ნომრები და სერვისები შექმნილია იმისთვის, რომ თქვენი ვიზიტი იყოს სრულყოფილი.</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-2xl font-cursive text-[#ff7200]">გიორგი</span>
            <span className="text-gray-500">დამფუძნებელი</span>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-1 gap-8">
            <h3 className="text-2xl font-bold mb-6 text-[#ff7200]">სასტუმროს სერვისები</h3>
            {facilities.map((f, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{f.title}</h4>
                  <p className="text-gray-600 text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image src="/rooms/302939238.jpg" alt="Room" width={500} height={440} className="rounded-2xl shadow-xl object-cover" />
          </div>
        </div>
      </section>

  

     

  
    </main>
  );
} 