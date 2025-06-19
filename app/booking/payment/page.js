"use client"
import React,{useEffect,useState} from 'react'
import PaymentDetailsUI from "@/components/payment/PaymentDetailsUI"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/context/AuthContext";

const PaymentBooking = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const [bookingDetails, setBookingDetails] = useState(null);

      useEffect(() => {
    if (isAuthenticated=== false) {
        alert("You need to be logged in to access this page.");
        router.push("/");
        return;
    }
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    if (!bookingData) {
      alert("Booking details not found!");
      return;
    }
    setBookingDetails(bookingData);
    console.log("Booking details:", bookingData);
    console.log("Simulating Razorpay payment...");

    // Redirect or show success UI
  }, []);
    
  return (
    <div>
<PaymentDetailsUI bd={bookingDetails}/>
    </div>
  )
}

export default PaymentBooking
