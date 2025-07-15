"use server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

// Zod schema for booking creation

 const bookingSchema = z.object({
  fullName: z.string().min(2, "სახელი ძალიან მოკლეა").max(30, "სახელი ძალიან გრძელია"),
  email: z.string().email("არასწორი ელ.ფოსტა"),
  phone: z.string().min(6, "ტელეფონის ნომერი ძალიან მოკლეა"),
  piradoba: z
    .string()
    .regex(/^\d{11}$/, "პირადობის ნომერი უნდა შედგებოდეს 11 ციფრისგან"),
  roomId: z.number().int(),
  checkIn: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "ჩამოსვლის თარიღი აუცილებელია"),
  checkOut: z
    .string()
    .refine(
      (val) => !isNaN(Date.parse(val)),
      "გამგზავრების თარიღი აუცილებელია"
    ),
  guests: z.number().int().min(1, "სტუმრების რაოდენობა აუცილებელია"),
});

export async function createBooking(data: z.infer<typeof bookingSchema>) {
  const parsed = bookingSchema.safeParse(data);
  if (!parsed.success) {
    throw parsed.error;
  }
  return prisma.booking.create({
    data: {
      ...parsed.data,
      checkIn: new Date(parsed.data.checkIn),
      checkOut: new Date(parsed.data.checkOut),
    },
  });
}

export async function getBookings() {
  return prisma.booking.findMany({
    include: { room: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getBookingById(id: number) {
  return prisma.booking.findUnique({
    where: { id },
    include: { room: true },
  });
}

export async function updateBooking(
  id: number,
  data: Partial<z.infer<typeof bookingSchema>>
) {
  // Optionally validate fields if updating
  return prisma.booking.update({
    where: { id },
    data,
  });
}

export async function deleteBooking(id: number) {
  return prisma.booking.delete({
    where: { id },
  });
}

export async function getBookingsByRoomId(roomId: number) {
  return prisma.booking.findMany({
    where: { roomId },
    select: { checkIn: true, checkOut: true },
    orderBy: { checkIn: 'asc' },
  });
}

export async function getRoomById(id: number) {
  return prisma.room.findUnique({
    where: { id },
    include: {
      bookings: true,
      comments: true,
    },
  });
}


