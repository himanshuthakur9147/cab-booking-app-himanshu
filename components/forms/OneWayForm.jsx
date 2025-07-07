"use client";

import { useForm } from "react-hook-form";
import { useBooking } from "@/context/BookingContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdDateRange } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const PlacesAutocompleteInput = dynamic(
  () => import("@/components/googleComponents/PlacesAutoCompleteInput"),
  { ssr: false }
);

import "react-datepicker/dist/react-datepicker.css";

export default function OneWayForm() {
  const { register, handleSubmit } = useForm();
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const {
    pickupLocation,
    setPickupLocation,
    dropLocation,
    setDropLocation,
    carType,
    pickupDate,
    setPickupDate,
    setReturnDate,
    setPickupTime,
    returnDate,
    pickupTime,
    setCarType,
  } = useBooking();

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

  const onSubmit = () => {
    console.log({
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
    });
  };

  const cancelLocation = (location) => {
    if (location === "pickup") setPickupLocation("");
    else if (location === "drop") setDropLocation("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-4 sm:gap-x-6"
    >
      {/* FROM Location */}
      <div className="input-form w-full sm:w-auto flex-1 min-w-[240px]">
        <label htmlFor="pickupLocation" className="block text-base font-bold text-gray-800 uppercase">
          From
        </label>
        <div className="input-box flex items-center gap-2 py-2 w-full">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="w-full">
            <PlacesAutocompleteInput
              id="pickupLocation"
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={setPickupLocation}
              onPlaceSelect={(place) => setPickupLocation(place.formatted_address)}
            />
          </div>
          <RxCrossCircled
            onClick={() => cancelLocation("pickup")}
            className="text-base text-gray-700 cursor-pointer"
            aria-label="Clear pickup location"
          />
        </div>
      </div>

      {/* TO Location */}
      <div className="input-form w-full sm:w-auto flex-1 min-w-[240px]">
        <label htmlFor="dropLocation" className="block text-base font-bold text-gray-800 uppercase">
          To
        </label>
        <div className="input-box flex items-center gap-2 py-2 w-full">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="w-full">
            <PlacesAutocompleteInput
              id="dropLocation"
              placeholder="Enter drop location"
              value={dropLocation}
              onChange={setDropLocation}
              onPlaceSelect={(place) => setDropLocation(place.formatted_address)}
            />
          </div>
          <RxCrossCircled
            onClick={() => cancelLocation("drop")}
            className="text-base text-gray-700 cursor-pointer"
            aria-label="Clear drop location"
          />
        </div>
      </div>

      {/* Pickup Date */}
      <div className="input-form w-full sm:w-auto flex-1 min-w-[200px]">
        <label htmlFor="pickupDate" className="block text-base font-bold text-gray-800 uppercase">
          Pickup Date
        </label>
        <div className="input-box flex items-center gap-2 py-2 w-full">
          <MdDateRange className="text-lg text-gray-700" />
          <DatePicker
            id="pickupDate"
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Enter the date"
            className="border-b text-gray-700 w-full placeholder:text-gray-700 outline-none pl-2 py-1"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            minDate={today}
          />
          <RxCrossCircled
            onClick={() => setPickupDate(null)}
            className="text-base text-gray-700 cursor-pointer"
            aria-label="Clear pickup date"
          />
        </div>
      </div>

      {/* Pickup Time */}
      <div className="input-form w-full sm:w-auto flex-1 min-w-[200px]">
        <label htmlFor="pickupTime" className="block text-base font-bold text-gray-800 uppercase">
          Pickup Time
        </label>
        <div className="input-box flex items-center gap-2 py-2 w-full">
          <MdAccessTimeFilled className="text-lg text-gray-700" />
          <select
            id="pickupTime"
            value={pickupTime || ""}
            onChange={(e) => setPickupTime(e.target.value)}
            className="border-b border-gray-400 text-gray-700 outline-none pl-2 py-1 w-full"
          >
            <option value="">Select Time</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <RxCrossCircled
            onClick={() => setPickupTime(null)}
            className="text-base text-gray-700 cursor-pointer"
            aria-label="Clear pickup time"
          />
        </div>
      </div>
    </form>
  );
}
