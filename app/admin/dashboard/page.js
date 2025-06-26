"use client";
import React, { useEffect,useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import BookingCard from "@/components/admin/BookingCard";

const Page = () => {
  const { user, isAuthenticated } = useAuth();
  const [bookings, setBookings] = useState([]);
    const router=useRouter()

  useEffect(() => {
    const getUser = async () => {
      if (isAuthenticated && user.role==="admin") {
      try {
          const res = await fetch("/api/users/get_user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone: user.phoneNumber }),
          });

          const data = await res.json();
          console.log("Response from get_user:", data.user.phone);
          if ( data.user.role==="admin") {
            console.log("User fetched from DB:", data.user);
          } else {

            router.push("/")
          }
        } catch (err) {
          console.error("Request failed:", err);
          router.push("/")
        }
      }
    };

    const fetchAllBookings=async()=>{
      const a=await fetch("/api/bookings")
      const b=await a.json()
      console.log("All bookings:", b.bookings);
      setBookings(b.bookings)
    }

    getUser();
    fetchAllBookings();
  }, [isAuthenticated, user]);



  return <div>
        <h1 className="text-xl text-center py-4 text-gray-800 font-bold">ADMIN DASHBOARD</h1>
    <div className="max-w-5xl mx-auto px-4 py-6">
    {bookings.map((booking) => (
      <BookingCard key={booking._id} booking={booking} />
    ))}
  </div>
  </div>;
};

export default Page;
