"use client";
import { createBooking } from "@/actions/booking";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
interface FieldErrors {
  [key: string]: string | undefined;
}

// ✅ Helper: parse YYYY-MM-DD string to local Date (no -1 day issues)


// ✅ Helper: add days
function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export default function BookingForm({
  roomId,
  price,
  bookedRanges,
  capacity,
}: {
  roomId: number;
  price: number;
  bookedRanges: { checkIn: string; checkOut: string }[];
  capacity: number;
}) {
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
        const errors: FieldErrors = {};
        (err as { errors: Array<{ path: string[]; message: string }> }).errors.forEach(
          (zodErr) => {
            if (zodErr.path && zodErr.path[0]) {
              errors[zodErr.path[0]] = zodErr.message;
            }
          }
        );
        setFieldErrors(errors);
      } else {
        setError(
          "დაჯავშნა ვერ მოხერხდა. გთხოვთ, შეამოწმეთ ველები ან სცადეთ მოგვიანებით."
        );
      }
    }

    setLoading(false);
  };
  function parseLocalDate(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  // ✅ Check if single date is blocked (within existing booking ranges)
  function isDateBlocked(date: Date) {
    const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return bookedRanges.some(({ checkIn, checkOut }) => {
      const start = parseLocalDate(checkIn);
      const end = parseLocalDate(checkOut);
      return current >= start && current < end;
    });
  }

  // ✅ Check if selected checkIn/checkOut range overlaps with existing bookings
  const isRangeBlocked =
    form.checkIn &&
    form.checkOut &&
    bookedRanges.some((range) => {
      const existingStart = new Date(range.checkIn).setHours(0, 0, 0, 0);
      const existingEnd = new Date(range.checkOut).setHours(0, 0, 0, 0);
      const newStart = parseLocalDate(form.checkIn).setHours(0, 0, 0, 0);
      const newEnd = parseLocalDate(form.checkOut).setHours(0, 0, 0, 0);

      return newStart < existingEnd && newEnd > existingStart;
    });

  function getNights() {
    if (!form.checkIn || !form.checkOut) return 0;
    const checkIn = parseLocalDate(form.checkIn);
    const checkOut = parseLocalDate(form.checkOut);
    const diff = checkOut.getTime() - checkIn.getTime();
    const nights = diff / (1000 * 60 * 60 * 24);
    return nights > 0 ? nights : 0;
  }

  const nights = getNights();
  const totalPrice = nights * price;

  return (
    <form onSubmit={handleSubmit} className="space-y-3 font-cormorant">
      <div>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="სრული სახელი"
          className="w-full px-4 py-2 border rounded-lg text-[20px]"
        />
        {fieldErrors.fullName && (
          <div className="text-red-500 text-sm mt-1">
            {fieldErrors.fullName}
          </div>
        )}
      </div>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ელ.ფოსტა"
          className="w-full px-4 py-2 border rounded-lg text-[20px]"
        />
        {fieldErrors.email && (
          <div className="text-red-500 text-sm mt-1">{fieldErrors.email}</div>
        )}
      </div>
      <div>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="ტელეფონი"
          className="w-full px-4 py-2 border rounded-lg text-[20px]"
        />
        {fieldErrors.phone && (
          <div className="text-red-500 text-sm mt-1">{fieldErrors.phone}</div>
        )}
      </div>
      <div>
        <input
          name="piradoba"
          value={form.piradoba}
          onChange={handleChange}
          placeholder="პირადობა"
          className="w-full px-4 py-2 border rounded-lg text-[20px]"
        />
        {fieldErrors.piradoba && (
          <div className="text-red-500 text-sm mt-1">
            {fieldErrors.piradoba}
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <DatePicker
          selected={form.checkIn ? parseLocalDate(form.checkIn) : null}
          onChange={(date) => {
            if (!date) return;
            const formatted = format(date, "yyyy-MM-dd");
            setForm((prev) => ({ ...prev, checkIn: formatted }));
            setFieldErrors((prev) => ({ ...prev, checkIn: undefined }));
          }}
          minDate={new Date()}
          filterDate={(date) => {
            const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return !bookedRanges.some(({ checkIn, checkOut }) => {
              const start = parseLocalDate(checkIn);
              const end = parseLocalDate(checkOut);
              return current >= start && current < end;
            });
          }}
          placeholderText="შესვლა"
          className="w-full px-4 py-2 border rounded-lg text-[20px]"
          dateFormat="yyyy-MM-dd"
        />

        <DatePicker
          selected={form.checkOut ? parseLocalDate(form.checkOut) : null}
          onChange={(date) => {
            if (!date) return;
            const formatted = format(date, "yyyy-MM-dd");
            setForm((prev) => ({ ...prev, checkOut: formatted }));
            setFieldErrors((prev) => ({ ...prev, checkOut: undefined }));
          }}
          minDate={form.checkIn ? addDays(parseLocalDate(form.checkIn), 1) : new Date()}
          filterDate={(date) => {
            const current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return !bookedRanges.some(({ checkIn, checkOut }) => {
              const start = parseLocalDate(checkIn);
              const end = parseLocalDate(checkOut);
              return current > start && current < end;
            });
          }}
          placeholderText="გასვლა"
          className="w-full  px-4 py-2 border rounded-lg text-[20px]"
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <div>
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded text-[20px]"
        >
          {Array.from({ length: capacity }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} სტუმარი
            </option>
          ))}
        </select>
        {fieldErrors.guests && (
          <div className="text-red-500 text-sm mt-1">{fieldErrors.guests}</div>
        )}
      </div>

      <div className="mt-4 font-bold text-lg font-cormorant">
        ₾{price} / ღამე
        {nights > 0 && (
          <div className="text-base font-normal mt-1">
            ჯამი: ₾{totalPrice} ({nights} ღამე)
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={
          loading ||
          isRangeBlocked ||
          isDateBlocked(parseLocalDate(form.checkIn)) ||
          (isDateBlocked(parseLocalDate(form.checkOut)) &&
            !bookedRanges.some(
              (range) =>
                parseLocalDate(form.checkOut).toDateString() ===
                new Date(range.checkOut).toDateString()
            ))
        }
        className="w-full text-[20px] mt-2 bg-[#ff7200] rounded-lg text-white font-semibold py-2 cursor-pointer font-cormorant"
      >
        {loading ? "იტვირთება..." : "დაჯავშნა"}
      </button>

      {success && (
        <div className="text-green-600">დაჯავშნა წარმატებით შესრულდა!</div>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
}
