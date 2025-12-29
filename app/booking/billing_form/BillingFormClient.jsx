"use client";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams, useRouter } from "next/navigation";
import GSTDetailsTabs from "@/components/company_details/GSTDetailsTabs";
import { useToast } from "@/context/ToastContext";


export default function BillingFormClient() {
  const router = useRouter();
  const { showToast } = useToast();

  const { isAuthenticated,user } = useAuth();

  const searchParams = useSearchParams();

  const pickupLocation = searchParams.get("from");
  const dropLocation = searchParams.get("to");
  const pickupDate = searchParams.get("pickup_date");
  const pickupTime = searchParams.get("pickup_time");
  const returnDate = searchParams.get("return_date");
  const service_type = searchParams.get("service_type");
  const carId = searchParams.get("carId");
  const estimatedFare = searchParams.get("estimatedFare");
  const distance = searchParams.get("distance");
  const duration = searchParams.get("duration");
  const rentalType = searchParams.get("rental_type");
  const carName = searchParams.get("carName");
  const seatCapacity = searchParams.get("seatCapacity");
  const car_extra_fare = searchParams.get("car_extra_fare");
  const km_limit = searchParams.get("km_limit");
  const effectiveDistance = searchParams.get("effectiveDistance");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


const handleProceed = (e) => {
  e.preventDefault();

  if (name.trim() === "" || email.trim() === "") {
    showToast("Please fill in all required fields.", "error");
    return;
  }

  const bookingDetails = {
    carName,
    seatCapacity,
    name,
    email,
    service_type,
    rentalType,
    pickupLocation,
    dropLocation,
    pickupDate,
    returnDate,
    pickupTime,
    carId,
    estimatedFare,
    distance,
    effectiveDistance,
    duration,
  };

  localStorage.removeItem("bookingData");
  localStorage.setItem("bookingData", JSON.stringify(bookingDetails));

  router.push("/booking/payment");
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-600 mb-4">
        Home &gt; Select Car &gt;{" "}
        <span className="font-medium text-gray-800">Booking</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="bg-white shadow-md rounded-md p-6 flex-1">
          <h2 className="text-center text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            CONTACT & PICKUP DETAILS
          </h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-2">
              Please fill in your details to proceed with the booking.
            </p>
            <div>
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-500 outline-none px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-500 outline-none px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">
                Phone No.
              </label>
              <input
                type="text"
                value={user.user.phone}
                disabled
                className="w-full border-b border-gray-500 outline-none px-4 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">
                Pickup Address
              </label>
              <input
                type="text"
                value={pickupLocation}
                disabled
                className="w-full border-b border-gray-500 outline-none px-4 py-2 text-sm"
              />
            </div>

            {!rentalType && (
              <div>
                <label className="block text-base font-medium uppercase text-gray-700 mb-1">
                  Drop Address
                </label>
                <input
                  type="text"
                  value={dropLocation}
                  disabled
                  className="w-full border-b border-gray-500 outline-none px-4 py-2 text-sm"
                />
              </div>
            )}

            <button
              onClick={handleProceed}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded py-2 mt-2"
            >
              PROCEED
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 w-full md:w-[320px]">
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-sm font-semibold text-blue-700 mb-2 border-b pb-1">
              YOUR BOOKING DETAILS
            </h3>
            <p>
              <span className="font-medium">Pickup Date :</span> {pickupDate} at {pickupTime}
            </p>
            {returnDate !== "Invalid Date" && (
              <p>
                <span className="font-medium">Return Date :</span> {returnDate}
              </p>
            )}
            <p>
              <span className="font-medium">Cab Type :</span> {carName}
            </p>
            <p>
              <span className="font-medium">Cab Facility :</span> AC
            </p>
            <p>
              <span className="font-medium">Seat Capacity :</span> {seatCapacity} + 1
            </p>
            {!rentalType ? (
              <>
                <p>
                  <span className="font-medium">KMs Included :</span> {effectiveDistance} km
                </p>
                <p>
                  <span className="font-medium">Duration :</span> {duration}
                </p>
              </>
            ) : (
              <p>
                <span className="font-medium">Rental Service :</span>{" "}
                {rentalType === "8hr_80km" ? "8HR 80KM" : "12HR 120KM"}
              </p>
            )}
            <p className="font-bold text-xl my-1">
              <span>Total Fare :</span> ₹ {estimatedFare}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md">
            <GSTDetailsTabs car_extra_fare={car_extra_fare} km_limit={km_limit} />
          </div>
        </div>
      </div>
    </div>
  );
}
