import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.room.createMany({
    data: [
      {
        id: 1,
        name: "სტანდარტული ოთახი",
        slug: "standard-room",
        description: "კომფორტული და ნათელი ოთახი ორ ადამიანზე, შესაფერისი ოჯახებისთვის ან მეგობრებისთვის.",
        price: 210,
        image: "/cottages/1.webp",
        images: [
          "/rooms/302939238.jpg",
          "/rooms/564959252.jpg",
          "/rooms/cottage-image-for-rc-lp.jpg",
        ],
        amenities: ["მინი მაცივარი", "საუზმე", "Wi-Fi", "პირადი აბაზანა"],
        capacity: 2,
        available: true,
        checkInTime: "13:00",
        checkOutTime: "11:00",
        rules: ["მოწევა აკრძალულია", "ჩასახლებაზე საჭიროა პირადობის მოწმობა"],
      },
      {
        id: 2,
        name: "ლუქსი ოთახი",
        slug: "lux-room",
        description: "ელეგანტური დიზაინის ოთახი მაღალი დონის კომფორტით, სრულყოფილი დასვენებისთვის.",
        price: 250,
        image: "/cottages/1.webp",
        images: [
          "/rooms/302939238.jpg",
          "/rooms/564959252.jpg",
          "/rooms/cottage-image-for-rc-lp.jpg",
        ],
        amenities: ["მინი მაცივარი", "სეიფი", "კონდიციონერი", "საუზმე", "Wi-Fi"],
        capacity: 3,
        available: true,
        checkInTime: "12:00",
        checkOutTime: "11:00",
        rules: ["ცხოველები აკრძალულია", "მოწევა აკრძალულია"],
      },
      {
        id: 3,
        name: "სამეფო ოთახი",
        slug: "royal-room",
        description: "განსაკუთრებული სტანდარტის ოთახი ფართო სივრცით, საუცხოო ინტერიერით და პრივილეგიებით.",
        price: 300,
        image: "/cottages/1.webp",
        images: [
          "/rooms/302939238.jpg",
          "/rooms/564959252.jpg",
          "/rooms/cottage-image-for-rc-lp.jpg",
        ],
        amenities: ["ტელევიზორი", "სეიფი", "ჯაკუზი", "მინი ბარი", "კონდიციონერი", "Wi-Fi"],
        capacity: 4,
        available: true,
        checkInTime: "14:00",
        checkOutTime: "12:00",
        rules: ["მოწევა აკრძალულია", "პარტიები აკრძალულია", "მოწვევის გარეშე სტუმრები არ დაიშვებიან"],
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect());
