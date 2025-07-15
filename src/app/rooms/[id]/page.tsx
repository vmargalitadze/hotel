import Image from "next/image";

const RoomDetailsPage = async(props: {
  params:Promise< {id:string,locale: string} >
}) => {
  const {id} = await props.params;
  const roomId = id;

  // Placeholder data (replace with real fetch later)
  const room = {
    id: roomId,
    name: "ლუქსი ოთახი",
    price: 210,
    images: [
      "/cottages/1.webp",
      "/rooms/302939238.jpg",
      "/rooms/564959252.jpg",
      "/rooms/cottage-image-for-rc-lp.jpg",
    ],
  };

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
            src={room.images[0]}
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

          <div className="space-y-3 font-cormorant">
            <input type="date" className="w-full px-4 py-2 border rounded font-cormorant" placeholder="ჩამოსვლის თარიღი" />
            <input type="date" className="w-full px-4 py-2 border rounded font-cormorant" placeholder="გამგზავრების თარიღი" />
            <select className="w-full px-4 py-2 border rounded font-cormorant">
              <option>1 ოთახი</option>
              <option>2 ოთახი</option>
              <option>3 ოთახი</option>
            </select>
            <select className="w-full px-4 py-2 border rounded font-cormorant">
              <option>1 სტუმარი</option>
              <option>2 სტუმარი</option>
              <option>3 სტუმარი</option>
            </select>
            <select className="w-full px-4 py-2 border rounded font-cormorant">
              <option>1 ბავშვი</option>
              <option>2 ბავშვი</option>
              <option>3 ბავშვი</option>
            </select>

            <div>
              <h4 className="font-semibold mb-2 font-cormorant">დამატებითი სერვისები</h4>
              <div className="space-y-2">
                <label className="flex gap-2 items-center font-cormorant">კონდიციონერი</label>
                <label className="flex gap-2 items-center font-cormorant">უფასო ინტერნეტი</label>
                <label className="flex gap-2 items-center font-cormorant">LED ტელევიზორი</label>
                <label className="flex gap-2 items-center font-cormorant">მიკროტალღური ღუმელი</label>
              </div>
            </div>

            <div className="mt-4 font-bold text-lg font-cormorant">₾{room.price} / ღამე</div>
            <button className="w-full mt-2 bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 font-cormorant">შეამოწმე ხელმისაწვდომობა</button>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-12 font-cormorant">
        <h3 className="text-2xl font-semibold mb-4 font-cormorant">სერვისები</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-700 list-disc list-inside font-cormorant">
          <li>42&quot; სრული ეკრანის ტელევიზორი</li>
          <li>მინი-მაცივარი</li>
          <li>სეიფი</li>
          <li>უფასო ბოთლის წყალი</li>
          <li>საუზმე</li>
        </ul>
      </div>

      {/* Rules */}
      <div className="mt-10 font-cormorant">
        <h3 className="text-2xl font-semibold mb-4 font-cormorant">წესები და პირობები</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1 font-cormorant">
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