"use client";

import { useMemo } from "react";
import { useBooking } from "@/context/BookingContext";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChevronDown } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import dynamic from "next/dynamic";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const PlacesAutocompleteInput = dynamic(() => import("@/components/googleComponents/PlacesAutoCompleteInput"), { ssr: false });

export default function RoundTripForm() {
  const {
    pickupLocation, setPickupLocation,
    dropLocation, setDropLocation,
    pickupDate, setPickupDate,
    returnDate, setReturnDate,
    pickupTime, setPickupTime,
  } = useBooking();

  // Logic restored: today's date for minDate
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Logic restored: time slots generator
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

  const cancelLocation = (type) => {
    if (type === "pickup") setPickupLocation("");
    if (type === "drop") setDropLocation("");
  };

  return (
    <div className="space-y-4">
      {/* GRID 1: LOCATIONS */}
      <div className="grid grid-cols-1 gap-4">
        {/* Pickup Location */}
        <div className="space-y-2">
          <label className="text-sm py-1 font-bold text-[#001D3D] uppercase tracking-wide ml-0.5">Where you from</label>
          <div className="flex items-center bg-[#F9FAFB] border border-gray-300 rounded-md px-3 py-0.3 shadow-sm">
            <FaMapMarkerAlt className="text-[#001D3D] text-sm shrink-0 mr-2" />
            <PlacesAutocompleteInput
              value={pickupLocation}
              onChange={setPickupLocation}
              onPlaceSelect={(place) => setPickupLocation(place.formatted_address)}
              placeholder="Select City"
              className="bg-transparent w-full outline-none font-bold text-gray-700 text-[13px]"
            />
            <RxCrossCircled
              onClick={() => cancelLocation("pickup")}
              className="text-gray-400 cursor-pointer hover:text-red-500 mr-2"
            />
            <FaChevronDown className="text-gray-400 text-[10px]" />
          </div>
        </div>

        {/* Drop Location */}
        <div className="space-y-2">
          <label className="text-sm py-1 font-bold text-[#001D3D] uppercase tracking-wide ml-0.5">Where you going</label>
          <div className="flex items-center bg-[#F9FAFB] border border-gray-300 rounded-md px-3 py-0.3 shadow-sm">
            <FaMapMarkerAlt className="text-[#001D3D] text-sm shrink-0 mr-2" />
            <PlacesAutocompleteInput
              value={dropLocation}
              onChange={setDropLocation}
              onPlaceSelect={(place) => setDropLocation(place.formatted_address)}
              placeholder="Select City"
              className="bg-transparent w-full outline-none font-bold text-gray-700 text-[13px]"
            />
            <RxCrossCircled
              onClick={() => cancelLocation("drop")}
              className="text-gray-400 cursor-pointer hover:text-red-500 mr-2"
            />
            <FaChevronDown className="text-gray-400 text-[10px]" />
          </div>
        </div>
      </div>

      {/* GRID 2: DATE & TIME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#001D3D] uppercase tracking-wide ml-0.5">Pickup Date</label>
          <div className="flex items-center bg-[#F9FAFB] border border-gray-300 rounded-md px-3 py-2 shadow-sm">
            <FaCalendarAlt className="text-gray-400 text-sm shrink-0 mr-2" />
            <DatePicker
              selected={pickupDate}
              onChange={(date) => setPickupDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={today}
              placeholderText="Enter date"
              wrapperClassName="w-full"
              className="bg-transparent w-full outline-none font-bold text-gray-700 text-[13px] cursor-pointer"
            />
            <FaChevronDown className="text-gray-400 text-[10px] ml-1" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#001D3D] uppercase tracking-wide ml-0.5">Pickup Time</label>
          <div className="flex items-center bg-[#F9FAFB] border border-gray-300 rounded-md px-3 py-2.5 shadow-sm">
            <FaClock className="text-gray-400 text-sm shrink-0 mr-2" />
            <select
              value={pickupTime || ""}
              onChange={(e) => setPickupTime(e.target.value)}
              className="bg-transparent w-full outline-none font-bold text-gray-700 text-[13px] cursor-pointer appearance-none"
            >
              <option value="">Select time</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            <FaChevronDown className="text-gray-400 text-[10px] ml-1" />
          </div>
        </div>
      </div>

      {/* RETURN DATE */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-[#001D3D] uppercase tracking-wide ml-0.5">Return Date</label>
        <div className="flex items-center bg-[#F9FAFB] border border-gray-300 rounded-md px-3 py-2 shadow-sm">
          <FaCalendarAlt className="text-gray-400 text-sm shrink-0 mr-2" />
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={pickupDate || today}
            placeholderText="Enter date"
            wrapperClassName="w-full"
            className="bg-transparent w-full outline-none font-bold text-gray-700 text-[13px] cursor-pointer"
          />
          <FaChevronDown className="text-gray-400 text-[10px] ml-1" />
        </div>
      </div>
    </div>
  );
}