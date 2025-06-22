"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";

export default function MyBookingsPage() {
  const { isAuthenticated, user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/users/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: user.phoneNumber }),
      });

      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchBookings();
    }
  }, [isAuthenticated, user]);

  if (loading) return <p className="text-center py-10 text-gray-600">Loading your bookings...</p>;

  return (
    <>
    <Navbar/>
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookings.map((booking, i) => (
            <div
              key={i}
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-orange-600">
                    {booking.cab_type.name} ({booking.cab_type.seat_capacity} Seater)
                  </h2>
                  <p className="text-sm text-gray-600">{booking.service_type}</p>
                </div>
                <img
                  src={booking.cab_type.image}
                  alt="Cab"
                  className="w-24 h-16 object-cover rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
                <div>
                  <p><strong>Pickup:</strong> {booking.pickup_address}</p>
                  <p><strong>Drop:</strong> {booking.drop_address || "N/A"}</p>
                  <p><strong>Pickup Date:</strong> {booking.pickup_date}</p>
                  {booking.return_date!=="Invalid Date" && <p><strong>Return Date:</strong> {booking.return_date}</p>}
                </div>

                <div>
                  <p><strong>Fare Paid:</strong> ₹{booking.paid_amount}</p>
                  <p><strong>Total Fare:</strong> ₹{booking.total_estimate_fare}</p>
                  {
                    booking.service_type==="Cab Rental Service"?
                    <p><strong>Rental Type:</strong> {booking.rentalType==="8hr_80km"?"8HR 80KM":"12HR 120KM"}</p>:
                    <>
                                      <p><strong>Distance:</strong> {booking.effective_distance} KM</p>
                  <p><strong>Duration:</strong> {booking.duration}</p>
                    
                    </>
                  }

                  <p><strong>Status:</strong> <span className="text-blue-600">{booking.payment_status}</span></p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-sm text-gray-500">
                  <p><strong>Booked By:</strong> {booking.name} ({booking.booked_by.phone})</p>
                  <p><strong>Booked At:</strong> {new Date(booking.booked_at).toDateString()} </p>
                  <p><strong>Payment ID:</strong> {booking.payment_id || "N/A"}</p>
                </div>

                <div className="flex gap-3">
                  <button disabled className="bg-red-500   text-white px-4 py-2 rounded text-sm">
                    Booked
                  </button>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
