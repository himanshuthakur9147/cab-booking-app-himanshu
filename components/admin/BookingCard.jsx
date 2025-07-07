"use client";

import React, { useMemo } from "react";
import Image from "next/image";

const BookingCard = ({ booking }) => {
  const {
    booked_at,
    booked_by = {},
    name,
    email,
    payment_id,
    order_id,
    payment_status,
    pickup_address,
    drop_address,
    pickup_date,
    return_date,
    pickup_time,
    duration,
    total_estimate_fare,
    paid_amount,
    service_type,
    rentalType,
    effective_distance,
    cab_type = {},
  } = booking || {};

  const formattedBookedAt = useMemo(() => {
    const date = new Date(booked_at);
    return isNaN(date.getTime()) ? "N/A" : date.toDateString();
  }, [booked_at]);

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white mb-6">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="text-sm lg:text-lg font-bold text-gray-800">
          {name} ({booked_by?.phone || "N/A"})
        </h2>
        <div className="text-sm flex gap-x-2 text-gray-700 font-semibold mt-1">
          Booked At: <span>{formattedBookedAt}</span>
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-2 space-y-1">
        <p>Email: {email || "N/A"}</p>
        <p>Payment ID: {payment_id || "N/A"}</p>
        <p>Order ID: {order_id || "N/A"}</p>
        <p>
          Payment Status:{" "}
          <span
            className={`font-semibold ${
              payment_status === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {payment_status || "N/A"}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <p className="font-medium">Pickup Address:</p>
          <p>{pickup_address || "N/A"}</p>
        </div>
        <div>
          <p className="font-medium">Drop Address:</p>
          <p>{drop_address || "N/A"}</p>
        </div>
        <div>
          <p className="font-medium">Pickup Date & Time:</p>
          <p>
            {pickup_date || "N/A"} at {pickup_time || "N/A"}
          </p>
        </div>
        <div>
          <p className="font-medium">Return Date:</p>
          <p>{return_date && return_date !== "Invalid Date" ? return_date : "N/A"}</p>
        </div>
        <div>
          <p className="font-medium">Trip Duration:</p>
          <p>{duration || "N/A"}</p>
        </div>
        <div>
          <p className="font-medium">Service Type:</p>
          <p>
            {service_type || "N/A"}{" "}
            {rentalType &&
              `- ${rentalType === "8hr_80km" ? "8HR 80KM" : "12HR 120KM"}`}
          </p>
        </div>
        <div>
          <p className="font-medium">Total Amount:</p>
          <p>₹{total_estimate_fare || 0}</p>
        </div>
        <div>
          <p className="font-medium">Paid Amount:</p>
          <p>₹{paid_amount || 0}</p>
        </div>
        <div>
          <p className="font-medium">Effective Distance:</p>
          <p>{effective_distance || 0} km</p>
        </div>
      </div>

      {/* Cab Details */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-sm lg:text-base font-semibold text-gray-700 mb-2">
          Cab Details
        </h3>
        <div className="flex items-center gap-4">
          {cab_type?.image ? (
            <Image
              src={cab_type.image}
              alt={cab_type.name || "Cab"}
              width={100}
              height={60}
              className="object-contain rounded"
            />
          ) : (
            <div className="w-[100px] h-[60px] bg-gray-100 flex items-center justify-center text-xs text-gray-500 rounded">
              No Image
            </div>
          )}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Name:</strong> {cab_type.name || "N/A"}
            </p>
            <p>
              <strong>Seats:</strong> {cab_type.seat_capacity || 0} + 1
            </p>
            <p>
              <strong>Fare/km:</strong> ₹{cab_type.per_km_fare || 0}
            </p>
            <p>
              <strong>Night Charges:</strong> ₹{cab_type.night_charges || 0}
            </p>
            <p>
              <strong>TADA:</strong> ₹{cab_type.tada || 0}
            </p>
            <p>
              <strong>Extra/km:</strong> ₹{cab_type.extra_charge_per_km || 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
