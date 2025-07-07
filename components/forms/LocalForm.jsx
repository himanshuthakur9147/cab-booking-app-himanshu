"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useBooking } from "@/context/BookingContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdDateRange } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import dynamic from "next/dynamic";

// ✅ Lazy load react-datepicker (for performance)
const DatePicker = dynamic(() => import("react-datepicker"), {
  ssr: false,
});
if (typeof window !== "undefined") {
  import("react-datepicker/dist/react-datepicker.css");
}

// ✅ Lazy load Google input
const PlacesAutocompleteInput = dynamic(
  () => import("@/components/googleComponents/PlacesAutoCompleteInput"),
  { ssr: false }
);

export default function LocalForm() {
  const { register, handleSubmit } = useForm();

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const ampm = hour < 12 ? "AM" : "PM";
        const minuteStr = min.toString().padStart(2, "0");
        slots.push(`${hour12}:${minuteStr} ${ampm}`);
      }
    }
    return slots;
  }, []);

  const {
    pickupLocation,
    setPickupLocation,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
  } = useBooking();

  const onSubmit = () => {
    console.log({
      pickupLocation,
      pickupDate,
      pickupTime,
    });
  };

  const cancelLocation = () => setPickupLocation("");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-x-8 gap-y-4 items-start w-full"
    >
      {/* City (pickup) */}
      <div className="w-full sm:w-[48%] min-w-[240px]">
        <label
          htmlFor="city-location"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          City
        </label>
        <div className="flex items-center gap-2 py-2 w-full">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="flex-1">
            <PlacesAutocompleteInput
              id="city-location"
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={setPickupLocation}
              onPlaceSelect={(place) =>
                setPickupLocation(place.formatted_address)
              }
            />
          </div>
          <RxCrossCircled
            onClick={cancelLocation}
            className="text-base text-gray-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Pickup Date */}
      <div className="w-full sm:w-[48%] min-w-[200px]">
        <label
          htmlFor="pickup-date"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Pickup Date
        </label>
        <div className="flex items-center gap-2 py-2 w-full">
          <MdDateRange className="text-lg text-gray-700" />
          <DatePicker
            id="pickup-date"
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Enter the date"
            className="border-b w-full text-gray-700 placeholder:text-gray-700 outline-none pl-2 py-1"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            minDate={today}
          />
          <RxCrossCircled
            onClick={() => setPickupDate(null)}
            className="text-base text-gray-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Pickup Time */}
      <div className="w-full sm:w-[48%] min-w-[200px]">
        <label
          htmlFor="pickup-time"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Pickup Time
        </label>
        <div className="flex items-center gap-2 py-2 w-full">
          <MdAccessTimeFilled className="text-lg text-gray-700" />
          <select
            id="pickup-time"
            value={pickupTime || ""}
            onChange={(e) => setPickupTime(e.target.value)}
            className="border-b w-full text-gray-700 outline-none pl-2 py-1"
          >
            <option value="">Select time</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <RxCrossCircled
            onClick={() => setPickupTime(null)}
            className="text-base text-gray-700 cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
}
