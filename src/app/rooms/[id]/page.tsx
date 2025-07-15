import Image from "next/image";
import BookingForm from "./BookingForm";
import {  getRoomById } from "@/actions/booking";

const RoomDetailsPage = async(props: {
  params:Promise< {id:string,locale: string} >
}) => {
  const {id} = await props.params;
  const roomId = Number(id);

  // Get room data from database
  const room = await getRoomById(roomId);
  if (!room) return <div>ოთახი ვერ მოიძებნა</div>;

  // Fetch booked date ranges for this room
  const bookedRanges = room.bookings.map(b => ({ checkIn: b.checkIn.toISOString().slice(0,10), checkOut: b.checkOut.toISOString().slice(0,10) }));

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 py-10 font-cormorant">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-cormorant">{room.name}</h1>
       
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Images */}
        <div className="md:col-span-2 space-y-4">
          <Image
            src={room.image}
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
                className="rounded-lg object-cover w-full h-28 font-cormorant"
              />
            ))}
          </div>
        <div className="mb-10">
      
        <p className="text-gray-500 font-cormorant">ოთახის დეტალები:</p>
        <div className="text-gray-700  text-[18px] mt-2">{room.description}</div>
        <div className="text-gray-700 text-[18px] mt-2">ფასი: ₾{room.price}</div>
        {room.discountPrice && <div className="text-green-600 text-[18px] mt-1">ფასდაკლება: ₾{room.discountPrice}</div>}
        <div className="text-gray-700 text-[18px] mt-2">ტევადობა: {room.capacity} სტუმარი</div>
        {room.size && <div className="text-gray-700 text-[18px] mt-2">ზომა: {room.size} მ²</div>}
        <div className="text-gray-700 text-[18px] mt-2">შესვლა: {room.checkInTime} | გასვლა: {room.checkOutTime}</div>
        <div className="text-gray-700 text-[18px] mt-2">{room.available ? "ხელმისაწვდომია" : "დაკავებულია"}</div>
      </div>
        </div>
        {/* Reservation Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md font-cormorant">
          <h2 className="text-xl font-semibold mb-4 font-cormorant">დაჯავშნა</h2>
          <BookingForm roomId={roomId} price={room.price} bookedRanges={bookedRanges} capacity={room.capacity} />
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-12 font-cormorant">
        <h3 className="text-[20px] font-bold mb-4 font-cormorant">სერვისები</h3>
        <ul className="grid grid-cols-2 text-[18px] md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700 list-disc list-inside font-cormorant">
          {room.amenities.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      {/* Rules */}
      <div className="mt-10 font-cormorant">
        <h3 className="text-[20px] font-bold mb-4 font-cormorant">წესები და პირობები</h3>
        <ul className="list-disc list-inside text-[18px] text-gray-700 space-y-1 font-cormorant">
          {room.rules.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

  


    </div>
  );
}
export default RoomDetailsPage;
