export const metadata = {
  title: "Complete Your Cab Booking | Yatra Travel India",
  description:
    "Securely complete your online cab booking with Yatra Travel India. Fast checkout, transparent fares, and trusted taxi services across India.",
  keywords: [
    "Cab booking payment",
    "Taxi fare payment",
    "Yatra cab checkout",
    "Secure cab booking",
    "Yatra Travel India",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/booking/payment`,
  },
  openGraph: {
    title: "Cab Payment | Yatra Travel India",
    description:
      "Pay for your cab ride securely. No hidden charges. Trusted by 1000s of travelers across India.",
    url: `${process.env.DOMAIN_NAME}/booking/payment`,
    siteName: "Yatra Travel India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab Payment | Yatra Travel India",
    description: "Complete your ride payment quickly and securely.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


"use client"
import React, { useEffect, useState } from 'react'
import PaymentDetailsUI from "@/components/payment/PaymentDetailsUI"
import { useRouter } from 'next/navigation'
import { useAuth } from "@/context/AuthContext";

const PaymentBooking = () => {
  const { isAuthenticated, user } = useAuth();
  console.log("The user in payment page",user,"the authenticated",isAuthenticated)
  const router = useRouter();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {

    // Wait for user to be loaded
    if (isAuthenticated && user) {
      const bookingData = JSON.parse(localStorage.getItem("bookingData"));
      if (!bookingData) {
        alert("Booking details not found!");
        return;
      }
      setBookingDetails(bookingData);
      console.log("Booking details:", bookingData);
      console.log("Simulating Razorpay payment...");

    }
      console.log("The user in payment page useefct",user,"the authenticated useeefcct",isAuthenticated)
  }, [isAuthenticated, user]);

  if (!user || !bookingDetails) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div>
      <PaymentDetailsUI bd={bookingDetails} user={user} />
    </div>
  );
};

export default PaymentBooking;
