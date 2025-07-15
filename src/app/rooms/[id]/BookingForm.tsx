"use client";
import { createBooking } from "@/actions/booking";
import { useState } from "react";


interface FieldErrors {
  [key: string]: string | undefined;
}

export default function BookingForm({ roomId, price, bookedRanges }: { roomId: number; price: number; bookedRanges: { checkIn: string; checkOut: string }[] }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    piradoba: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomId,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    setFieldErrors({});

    try {
      await createBooking({
        ...form,
        guests: Number(form.guests),
        roomId: Number(roomId),
      });
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        piradoba: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomId,
      });
    } catch (err: unknown) {
      console.error(err);
      if (
        typeof err === "object" &&
        err !== null &&
        "errors" in err &&
        Array.isArray((err as { errors?: unknown }).errors)
      ) {
        // Zod validation errors
        const errors: FieldErrors = {};
        (err as { errors: Array<{ path: string[]; message: string }> }).errors.forEach((zodErr) => {
          if (zodErr.path && zodErr.path[0]) {
            errors[zodErr.path[0]] = zodErr.message;
          }
        });
        setFieldErrors(errors);
      } else {
        setError("დაჯავშნა ვერ მოხერხდა. გთხოვთ, შეამოწმეთ ველები ან სცადეთ მოგვიანებით.");
      }
    }
    setLoading(false);
  };

  // Helper to check if a date is blocked
  function isDateBlocked(dateStr: string) {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    return bookedRanges.some(range => {
      const start = new Date(range.checkIn);
      const end = new Date(range.checkOut);
      return date >= start && date <= end;
    });
  }

  // Show error if selected range overlaps
  const isRangeBlocked = form.checkIn && form.checkOut && bookedRanges.some(range => {
    const start = new Date(range.checkIn);
    const end = new Date(range.checkOut);
    const checkIn = new Date(form.checkIn);
    const checkOut = new Date(form.checkOut);
    return (
      (checkIn <= end && checkIn >= start) ||
      (checkOut <= end && checkOut >= start) ||
      (checkIn <= start && checkOut >= end)
    );
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-cormorant">
      <div>
        <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="სრული სახელი" className="w-full px-4 py-2 border rounded" />
        {fieldErrors.fullName && <div className="text-red-500 text-sm mt-1">{fieldErrors.fullName}</div>}
      </div>
      <div>
        <input name="email" value={form.email} onChange={handleChange} placeholder="ელ.ფოსტა" className="w-full px-4 py-2 border rounded" />
        {fieldErrors.email && <div className="text-red-500 text-sm mt-1">{fieldErrors.email}</div>}
      </div>
      <div>
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="ტელეფონი" className="w-full px-4 py-2 border rounded" />
        {fieldErrors.phone && <div className="text-red-500 text-sm mt-1">{fieldErrors.phone}</div>}
      </div>
      <div>
        <input name="piradoba" value={form.piradoba} onChange={handleChange} placeholder="პირადობა" className="w-full px-4 py-2 border rounded" />
        {fieldErrors.piradoba && <div className="text-red-500 text-sm mt-1">{fieldErrors.piradoba}</div>}
      </div>
      <div>
        <input name="checkIn" type="date" value={form.checkIn} onChange={handleChange} className="w-full px-4 py-2 border rounded" min={new Date().toISOString().slice(0, 10)} />
        {fieldErrors.checkIn && <div className="text-red-500 text-sm mt-1">{fieldErrors.checkIn}</div>}
        {form.checkIn && isDateBlocked(form.checkIn) && <div className="text-red-500 text-sm mt-1">ეს თარიღი უკვე დაჯავშნილია</div>}
      </div>
      <div>
        <input name="checkOut" type="date" value={form.checkOut} onChange={handleChange} className="w-full px-4 py-2 border rounded" min={form.checkIn || new Date().toISOString().slice(0, 10)} />
        {fieldErrors.checkOut && <div className="text-red-500 text-sm mt-1">{fieldErrors.checkOut}</div>}
        {form.checkOut && isDateBlocked(form.checkOut) && <div className="text-red-500 text-sm mt-1">ეს თარიღი უკვე დაჯავშნილია</div>}
      </div>
      {isRangeBlocked && <div className="text-red-500 text-sm mt-1">არჩეული პერიოდი უკვე დაჯავშნილია</div>}
      <div>
        <select name="guests" value={form.guests} onChange={handleChange} className="w-full px-4 py-2 border rounded">
          <option value={1}>1 სტუმარი</option>
          <option value={2}>2 სტუმარი</option>
          <option value={3}>3 სტუმარი</option>
          <option value={4}>4 სტუმარი</option>
          <option value={5}>5 სტუმარი</option>
        </select>
        {fieldErrors.guests && <div className="text-red-500 text-sm mt-1">{fieldErrors.guests}</div>}
      </div>
      <div className="mt-4 font-bold text-lg font-cormorant">₾{price} / ღამე</div>
      <button type="submit" disabled={loading || isRangeBlocked || isDateBlocked(form.checkIn) || isDateBlocked(form.checkOut)} className="w-full mt-2 bg-[#ff7200] rounded-2xl text-white font-semibold py-2 cursor-pointer font-cormorant">
        {loading ? "იტვირთება..." : "დაჯავშნა"}
      </button>
      {success && <div className="text-green-600">დაჯავშნა წარმატებით შესრულდა!</div>}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
}
