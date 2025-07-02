"use client";
import { FaTimes } from "react-icons/fa";

export default function BookingSummaryModal({ onClose, bookingData, onBookNow }) {


  console.log("Booking Summary Data:", bookingData);

  function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }); // e.g., July
  const year = date.getFullYear();
  const weekday = date.toLocaleString('default', { weekday: 'short' }); // e.g., Wednesday

  return `${day} ${month} ${year} ${weekday}`;
}


  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/10 ">
      <div className="bg-white w-[90%] max-w-md rounded-md shadow-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-sky-500 px-5 py-3 text-white flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase">Your Booking Details</h2>
          <button onClick={onClose}>
            <FaTimes size={18} />
          </button>
        </div>

        {/* Booking Summary */}
        <div className="px-5 py-4 text-sm space-y-3 text-gray-800">
            {
                bookingData.service_type==="Cab Rental Service"?          <div className="flex justify-between">
            <span className="font-semibold">Pickup Address (City) :</span>
            <span>{bookingData.from}</span>
          </div>
          :
          <>
                    <div className="flex justify-between">
            <span className="font-semibold">Pickup City :</span>
            <span>{bookingData.from}</span>
          </div>
          <div className="flex justify-between">
           {bookingData.returnDate==="Invalid Date"? <span className="font-semibold">Drop City :</span> : <span className="font-semibold">Destination City :</span>}
            <span>{bookingData.to}</span>
          </div>
          </>
            }

          <div className="flex justify-between">
            <span className="font-semibold">Pickup Date :</span>
      <span>{formatDate(bookingData.pickupDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Pickup Time :</span>
            <span>{bookingData.pickupTime}</span>
          </div>
         {bookingData.returnDate!=="Invalid Date" && <div className="flex justify-between">
            <span className="font-semibold">Return Date :</span>
           <span>{formatDate(bookingData.returnDate)}</span>

          </div>}
          <div className="flex justify-between">
            <span className="font-semibold">Car Type :</span>
            <span>{bookingData.car.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">KMs Included :</span>
           {  bookingData.service_type==="Cab Rental Service"?<span>{bookingData.rental_service==="8hr_80km"?"80 KM":"120 KM"}</span>: <span>{bookingData.car.effectiveDistance} KM</span>}
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total Fare :</span>
           {  bookingData.service_type==="Cab Rental Service"? <span>₹ {Math.round(bookingData.car.rental_service[bookingData.rental_service]+bookingData.car.rental_service[bookingData.rental_service]*0.05)}</span>: <span>₹ {bookingData.car.estimatedFare?.toFixed(0)}</span>}
          </div>

          <button
            className="mt-4 w-full bg-orange-500 cursor-pointer text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
            onClick={()=>onBookNow(bookingData.car,rental_service=service_type)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
