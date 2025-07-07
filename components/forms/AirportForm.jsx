"use client";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useBooking } from "@/context/BookingContext";
import dynamic from "next/dynamic";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDateRange, MdAccessTimeFilled } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import Selector from "./SelectOptions";

const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
if (typeof window !== "undefined") {
  import("react-datepicker/dist/react-datepicker.css");
}

const PlacesAutocompleteInput = dynamic(
  () => import("@/components/googleComponents/PlacesAutoCompleteInput"),
  { ssr: false }
);

export default function AirportForm() {
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

  const [selectedCity, setSelectedCity] = useState("pickup_from_airport");
  const options = [
    { value: "pickup_from_airport", label: "Pickup from Airport" },
    { value: "drop_to_airport", label: "Drop to Airport" },
  ];

  const {
    pickupLocation,
    setPickupLocation,
    dropLocation,
    setDropLocation,
    carType,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
  } = useBooking();

  const onSubmit = () => {
    console.log({
      pickupLocation,
      dropLocation,
      carType,
      pickupDate,
      pickupTime,
    });
  };

const cancelLocation = (type) => {
  if (type === "pickup") setPickupLocation("");
  else setDropLocation("");
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-x-8 gap-y-4 items-start w-full"
    >
      <div className="w-full sm:w-[48%] min-w-[240px]">
        <label
          htmlFor="trip"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Trip
        </label>
        <div className="flex py-2">
          <Selector
            id="trip"
            options={options}
            value={selectedCity}
            onChange={setSelectedCity}
          />
        </div>
      </div>

      <div className="w-full sm:w-[48%] min-w-[240px]">
        <label
          htmlFor="pickup-address"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Pickup Address
        </label>
        <div className="flex items-center gap-2 py-2">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="flex-1">
            <PlacesAutocompleteInput
              id="pickup-address"
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

      <div className="w-full sm:w-[48%] min-w-[240px]">
        <label
          htmlFor="drop-address"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Drop Address
        </label>
        <div className="flex items-center gap-2 py-2">
          <FaMapMarkerAlt className="text-lg text-gray-700" />
          <div className="flex-1">
            <PlacesAutocompleteInput
              id="drop-address"
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

      <div className="w-full sm:w-[48%] min-w-[200px]">
        <label
          htmlFor="pickup-date"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Pickup Date
        </label>
        <div className="flex items-center gap-2 py-2">
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

      <div className="w-full sm:w-[48%] min-w-[200px]">
        <label
          htmlFor="pickup-time"
          className="block text-sm md:text-base lg:text-lg font-bold text-gray-800 uppercase"
        >
          Pickup Time
        </label>
        <div className="flex items-center gap-2 py-2">
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
