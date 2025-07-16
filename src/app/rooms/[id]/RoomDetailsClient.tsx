"use client";
import React, { useState } from "react";
import Image from "next/image";
import BookingForm from "./BookingForm";

interface Booking {
  checkIn: Date | string;
  checkOut: Date | string;
}

interface Room {
  image: string;
  images: string[];
  name: string;
  description: string;
  price: number;
  discountPrice?: number | null;
  capacity: number;
  size?: number | null;
  checkInTime: string;
  checkOutTime: string;
  amenities: string[];
  rules: string[];
  bookings: Booking[];
}

const RoomDetailsClient = ({ room, roomId }: { room: Room; roomId: number }) => {
  const [mainImage, setMainImage] = useState(room.image);
  const bookedRanges = room.bookings.map((b) => ({
    checkIn: typeof b.checkIn === 'string' ? b.checkIn : b.checkIn.toISOString().slice(0, 10),
    checkOut: typeof b.checkOut === 'string' ? b.checkOut : b.checkOut.toISOString().slice(0, 10),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 py-10 font-cormorant">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 font-cormorant">{room.name}</h1>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Images */}
        <div className="md:col-span-2 space-y-4">
          <Image
            src={mainImage}
            alt="ოთახის მთავარი ფოტო"
            width={800}
            height={500}
            className="rounded-xl w-full h-[500px] object-cover font-cormorant"
          />
          <div className="grid grid-cols-4 gap-4">
            {room.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`ოთახი-${i}`}
                width={200}
                height={120}
                className={`rounded-lg object-cover w-full h-28 font-cormorant cursor-pointer ${mainImage === img ? "ring-2 ring-[#ff7200]" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="mb-10">
            <p className=" font-cormorant text-[24px] font-bold">ოთახის დეტალები:</p>
            <div className="  text-[20px] mt-2">{room.description}</div>
            <div className=" text-[20px] mt-2">
              <span className="text-[20px] font-bold">ფასი:</span> ₾{room.price}
            </div>
            {room.discountPrice && (
              <div className="text-green-600 text-[18px] mt-1">
                <span className="text-[20px] font-bold">₾{room.discountPrice}</span> ₾{room.price}
              </div>
            )}
            <div className=" text-[20px] mt-2">
              <span className="text-[20px] font-bold">ტევადობა:</span> {room.capacity} სტუმარი
            </div>
            {room.size && <div className="text-gray-700 text-[18px] mt-2">ზომა: {room.size} მ²</div>}
            <div className=" text-[20px] mt-2">
              <span className="text-[20px] font-bold">შესვლა:</span> {room.checkInTime} | <span className="text-[20px] font-bold">გასვლა:</span> {room.checkOutTime}
            </div>
          </div>
        </div>
        {/* Reservation Section */}
        <div className="bg-gray-100 h-fit p-6 rounded-xl shadow-md font-cormorant">
          <h2 className="text-xl font-semibold mb-4 font-cormorant">დაჯავშნა</h2>
          <BookingForm roomId={roomId} price={room.price} bookedRanges={bookedRanges} capacity={room.capacity} />
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-12 font-cormorant">
        <h3 className="text-[24px] font-bold mb-4 font-cormorant">სერვისები</h3>
        <ul className=" grid-cols-2 flex flex-col text-[20px]  gap-2 text-gray-700 list-disc list-inside font-cormorant">
          {room.amenities.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      {/* Rules */}
      <div className="mt-10 font-cormorant">
        <h3 className="text-[24px] font-bold mb-4 font-cormorant">წესები და პირობები</h3>
        <ul className="list-disc list-inside text-[20px] text-gray-700 space-y-1 font-cormorant">
          {room.rules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default RoomDetailsClient; 