import Image from "next/image";
import BookingForm from "./BookingForm";
import { getBookingsByRoomId } from "@/actions/booking";
import rooms from "@/components/data";

const RoomDetailsPage = async(props: {
  params:Promise< {id:string,locale: string} >
}) => {
  const {id} = await props.params;
  const roomId = Number(id);

  // Get room data from rooms array
  const room = rooms.find(r => r.id === roomId);
  if (!room) return <div>ოთახი ვერ მოიძებნა</div>;

  // Fetch booked date ranges for this room
  const bookings = await getBookingsByRoomId(roomId);
  const bookedRanges = bookings.map(b => ({ checkIn: b.checkIn.toISOString().slice(0,10), checkOut: b.checkOut.toISOString().slice(0,10) }));

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 py-10 font-cormorant">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-cormorant">{room.name}</h1>
        <p className="text-gray-500 font-cormorant">ოთახის დეტალები</p>
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
        </div>

        {/* Reservation Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md font-cormorant">
          <h2 className="text-xl font-semibold mb-4 font-cormorant">დაჯავშნა</h2>
          <BookingForm roomId={roomId} price={room.price} bookedRanges={bookedRanges} />
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-12 font-cormorant">
        <h3 className="text-[20px] font-bold mb-4 font-cormorant">სერვისები</h3>
        <ul className="grid grid-cols-2 text-[18px] md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700 list-disc list-inside font-cormorant">
          <li>42&quot; სრული ეკრანის ტელევიზორი</li>
          <li>მინი-მაცივარი</li>
          <li>სეიფი</li>
          <li>უფასო ბოთლის წყალი</li>
          <li>საუზმე</li>
        </ul>
      </div>

      {/* Rules */}
      <div className="mt-10 font-cormorant">
        <h3 className="text-[20px] font-bold mb-4 font-cormorant">წესები და პირობები</h3>
        <ul className="list-disc list-inside text-[18px] text-gray-700 space-y-1 font-cormorant">
          <li>მოწევა აკრძალულია</li>
          <li>ჩექ-ინი 12:00 საათის შემდეგ</li>
          <li>ჩექ-აუტი 11:00 საათამდე</li>
          <li>ცხოველები აკრძალულია</li>
          <li>ჩასახლებაზე საჭიროა პირადობის მოწმობა</li>
        </ul>
      </div>

      {/* Add Review */}
      <div className="mt-12 font-cormorant">
        <h3 className="text-2xl font-semibold mb-4 font-cormorant">დამატეთ შეფასება</h3>
        <form className="space-y-4 font-cormorant">
          <input type="text" placeholder="თქვენი სახელი" className="w-full border px-4 py-2 rounded font-cormorant" />
          <input type="email" placeholder="თქვენი ელ.ფოსტა" className="w-full border px-4 py-2 rounded font-cormorant" />
          <textarea placeholder="კომენტარი" rows={5} className="w-full border px-4 py-2 rounded font-cormorant" />
          <button type="submit" className="bg-[#ff7200] text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 font-cormorant">
            შეფასების დამატება
          </button>
        </form>
      </div>
    </div>
  );
}
export default RoomDetailsPage;
