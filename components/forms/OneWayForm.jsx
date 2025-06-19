"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useBooking } from "@/context/BookingContext";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdDateRange } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import DatePicker from "react-datepicker";
import PlacesAutocompleteInput from "../googleComponents/PlacesAutoCompleteInput";
import "react-datepicker/dist/react-datepicker.css";

// ✅ Helper to generate time slots
function generateTimeSlots() {
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
}

export default function OneWayForm() {
  const { register, handleSubmit } = useForm();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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

  const onSubmit = () => {
    console.log({
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
    });
  };

  const cancelLocation = (location) => {
    if (location === "pickup") {
      setPickupLocation("");
    } else if (location === "drop") {
      setDropLocation("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-x-6 gap-y-2 flex-wrap"
    >
      {/* FROM Location */}
      <div className="input-form w-full sm:w-auto">
        <label className="block lg:text-xl text-base font-bold text-gray-800 uppercase">
          from
        </label>
        <div className="input-box flex items-center gap-2 py-4">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="w-full">
            <PlacesAutocompleteInput
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={setPickupLocation}
              onPlaceSelect={(place) =>
                setPickupLocation(place.formatted_address)
              }
            />
          </div>
          <RxCrossCircled
            onClick={() => cancelLocation("pickup")}
            className="text-base text-gray-700 cursor-pointer"
          />
        </div>
      </div>

      {/* TO Location */}
      <div className="input-form w-full sm:w-auto">
        <label className="block lg:text-xl text-base font-bold text-gray-800 uppercase">
          to
        </label>
        <div className="input-box flex items-center gap-2 py-4">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="w-full">
            <PlacesAutocompleteInput
              placeholder="Enter drop location"
              value={dropLocation}
              onChange={setDropLocation}
              onPlaceSelect={(place) =>
                setDropLocation(place.formatted_address)
              }
            />
          </div>
          <RxCrossCircled
            onClick={() => cancelLocation("drop")}
            className="text-base text-gray-700 cursor-pointer"
          />
        </div>
      </div>

      {/* Pickup Date */}
      <div className="input-form w-full sm:w-auto">
        <label className="block lg:text-xl text-base font-bold text-gray-800 uppercase">
          pickup date
        </label>
        <div className="input-box flex items-center gap-2 py-4">
          <MdDateRange className="text-lg text-gray-700" />
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Enter the date"
            className="border-b text-gray-700 placeholder:text-gray-700 outline-none pl-2 py-1"
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

      {/* Pickup Time Dropdown */}
      <div className="input-form w-full sm:w-auto">
        <label className="block lg:text-xl text-base font-bold text-gray-800 uppercase">
          pickup time
        </label>
        <div className="input-box flex items-center gap-2 py-4">
          <MdAccessTimeFilled className="text-lg text-gray-700" />
          <select
            value={pickupTime || ""}
            onChange={(e) => setPickupTime(e.target.value)}
            className="border-b border-gray-400 text-gray-700 outline-none pl-2 py-1 w-full"
          >
           
            {generateTimeSlots().map((time, index) => (
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
