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

export default function RoundTripForm() {
  const { register, handleSubmit } = useForm();
  const today = new Date();
  today.setHours(0, 0, 0, 0); // remove time

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
      carType,
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
      className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 items-start w-full"
    >
      {/* Pickup Location */}
      <div className="input-form w-full sm:w-[48%] lg:w-[32%]">
        <label className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase">
          From
        </label>
        <div className="flex items-center gap-2 py-2">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="flex-1">
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

      {/* Drop Location */}
      <div className="input-form w-full sm:w-[48%] lg:w-[32%]">
        <label className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase">
          To
        </label>
        <div className="flex items-center gap-2 py-2">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="flex-1">
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
      <div className="input-form w-full sm:w-[48%] lg:w-[20%]">
        <label className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase">
          Pickup Date
        </label>
        <div className="flex items-center gap-2 py-2">
          <MdDateRange className="text-lg text-gray-700" />
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Enter date"
            className="border-b w-full text-gray-700 placeholder:text-gray-700 outline-none pl-2 py-1"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            minDate={today}
          />
          <RxCrossCircled className="text-base text-gray-700" />
        </div>
      </div>

      {/* Return Date */}
      <div className="input-form w-full sm:w-[48%] lg:w-[20%]">
        <label className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase">
          Return Date
        </label>
        <div className="flex items-center gap-2 py-2">
          <MdDateRange className="text-lg text-gray-700" />
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            placeholderText="Enter date"
            className="border-b w-full text-gray-700 placeholder:text-gray-700 outline-none pl-2 py-1"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            minDate={today}
          />
          <RxCrossCircled className="text-base text-gray-700" />
        </div>
      </div>

      {/* Pickup Time */}
      <div className="input-form w-full sm:w-[48%] lg:w-[20%]">
        <label className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase">
          Pickup Time
        </label>
        <div className="flex items-center gap-2 py-2">
          <MdAccessTimeFilled className="text-lg text-gray-700" />
          <select
            value={pickupTime || ""}
            onChange={(e) => setPickupTime(e.target.value)}
            className="border-b w-full text-gray-700 outline-none pl-2 py-1"
          >
            <option value="" disabled>Select time</option>
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
