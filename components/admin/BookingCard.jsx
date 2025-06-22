import React from "react";
import Image from "next/image";

const BookingCard = ({ booking }) => {
  const {
    booked_at,
    booked_by,
    name,
    phone,
    email,
    payment_id,
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
    cab_type,
  } = booking;

  const formattedBookedAt = new Date(booked_at).toDateString();

  return (
    <>

    <div className="border rounded-lg shadow-sm p-4 bg-white mb-6">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-gray-800">
          {name} ({booked_by.phone})
        </div>
        <div className="text-base text-gray-700 font-semibold">Booked At: {formattedBookedAt}</div>
      </div>

      <div className="text-sm text-gray-600 mt-2">
        <p>Email: {email}</p>
        <p>Payment ID: {payment_id || "N/A"}</p>
        <p>Payment Status: <span className={`font-semibold ${payment_status === "success" ? "text-green-600" : "text-red-600"}`}>{payment_status}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="font-medium">Pickup Address:</p>
          <p>{pickup_address}</p>
        </div>
        <div>
          <p className="font-medium">Drop Address:</p>
          <p>{drop_address || "N/A"}</p>
        </div>

        <div>
          <p className="font-medium">Pickup Date & Time:</p>
          <p>{pickup_date} at {pickup_time}</p>
        </div>

        <div>
          <p className="font-medium">Return Date:</p>
          <p>{return_date !== "Invalid Date" ? return_date : "N/A"}</p>
        </div>

        <div>
          <p className="font-medium">Trip Duration:</p>
          <p>{duration || "N/A"}</p>
        </div>

        <div>
          <p className="font-medium">Service Type:</p>
          <p>{service_type} {rentalType ? `- ${rentalType==="8hr_80km"?"8HR 80KM":"12HR 120KM"}` : ""}</p>
        </div>

        <div>
          <p className="font-medium">Total Amount:</p>
          <p>₹{total_estimate_fare}</p>
        </div>

        <div>
          <p className="font-medium">Paid Amount:</p>
          <p>₹{paid_amount}</p>
        </div>

        <div>
          <p className="font-medium">Effective Distance:</p>
          <p>{effective_distance} km</p>
        </div>
      </div>

      {/* Cab Details */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-base font-semibold text-gray-700 mb-2">Cab Details</h3>
        <div className="flex items-center gap-4">
          <Image src={cab_type.image} alt={cab_type.name} width={100} height={60} className="object-contain rounded" />
          <div>
            <p><strong>Name:</strong> {cab_type.name}</p>
            <p><strong>Seats:</strong> {cab_type.seat_capacity} + 1</p>
            <p><strong>Fare per KM:</strong> ₹{cab_type.per_km_fare}</p>
            <p><strong>Night Charges:</strong> ₹{cab_type.night_charges}</p>
            <p><strong>TADA:</strong> ₹{cab_type.tada}</p>
            <p><strong>Extra per KM:</strong> ₹{cab_type.extra_charge_per_km}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingCard;
