export const metadata = {
  title: "Billing & Booking Details | Yatra Travel India",
  description:
    "Confirm your cab booking by providing contact details and reviewing pickup, drop, and fare summary. Fast and secure online booking with Yatra Travel India.",
  keywords: [
    "Cab booking checkout",
    "Cab billing form",
    "Taxi booking India",
    "Online taxi fare confirmation",
    "Yatra Travel India Booking",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/booking/billing_form`,
  },
  openGraph: {
    title: "Billing & Booking – Yatra Travel India",
    description:
      "Complete your booking by confirming pickup, drop and fare details for cabs across India. Trusted and fast taxi service.",
    url: `${process.env.DOMAIN_NAME}/booking/billing_form`,
    siteName: "Yatra Travel India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billing & Booking | Yatra Travel India",
    description:
      "Fill contact and trip details to confirm your cab booking. Fast and easy billing form.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams,useRouter } from 'next/navigation'

import GSTDetailsTabs from "@/components/company_details/GSTDetailsTabs";
import ProtectedRoute from "@/components/login/ProtectedRoute";

export default function BillingForm() {


  const router = useRouter();
    const {isAuthenticated} = useAuth()
   const searchParams = useSearchParams();
   const pickupLocation = searchParams.get("from");
  const dropLocation = searchParams.get("to");
  const pickupDate =  searchParams.get("pickup_date")
  const pickupTime = searchParams.get("pickup_time")
  const service_type = searchParams.get("service_type")

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")

  const returnDate = searchParams.get("return_date");
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
  console.log("All details are billing form",{pickupLocation, dropLocation, pickupDate, returnDate, pickupTime,carId, estimatedFare, distance,effectiveDistance, duration,service_type});

  const handleProceed=(e)=>{
    e.preventDefault()

    console.log("the proceeding details are",{
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
      service_type
    })


     const bookingDetails = {
    carName,seatCapacity,
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
      effectiveDistance,
    estimatedFare,
    distance,
    duration,
    // add more fields as needed
  };

  // Clear any existing data under the same key
  let remo=localStorage.removeItem("bookingData");

  // Set new data
 let setl= localStorage.setItem("bookingData", JSON.stringify(bookingDetails));
 console.log("the remove",remo,"the set",setl)
  console.log("The items in the local storge are",bookingDetails)

  // Redirect to payment page
  router.push("/booking/payment");
    
  }





  return (

    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">Home &gt; Select Car &gt; <span className="font-medium text-gray-800">Booking</span></div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact & Pickup Details */}
          <div className="bg-white shadow-md rounded-md p-6 flex-1">
            <h2 className="text-center text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
              CONTACT & PICKUP DETAILS
            </h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 mb-2">Please fill in your details to proceed with the booking.</p>
              <div className="">
                
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">Name</label>
              <input type="text" placeholder="Enter your name here" value={name} onChange={(e)=>setName(e.target.value)} className="w-full border-b border-gray-500 outline-none border-0 px-4 py-2 text-sm" />
              </div>
              <div className="">
                
              <label className="block text-base font-medium uppercase text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="Enter your email here" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border-b border-gray-500 outline-none border-0 px-4 py-2 text-sm" />
              </div>


              <div className=" ">
              <label className="block text-base font-medium uppercase text-gray-700 mb-1 w-32">Phone No.</label>
             

             
                <input type="text" placeholder="Enter your phone number here" value={"+91 7455946877"} disabled className="w-full border-b border-gray-500 outline-none border-0 px-4 py-2 text-sm" />
             
              </div>

              <div className="">
                
              <label className="block text-base font-medium w-48 uppercase text-gray-700 mb-1">Pickup Address</label>
              <input type="text" placeholder="Enter your name here" disabled value={pickupLocation} className="w-full border-b border-gray-500 outline-none border-0 px-4 py-2 text-sm" />
              </div>
            

            {rentalType===""? <div className="">
                
              <label className="block text-base font-medium w-48 uppercase text-gray-700 mb-1">Drop Address</label>
              <input type="text" placeholder="Enter your name here" disabled value={dropLocation} className="w-full border-b border-gray-500 outline-none border-0 px-4 py-2 text-sm" />
              </div>:
              ""}
              <button
                type="submit"
                className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold rounded py-2 mt-2"
                onClick={handleProceed}
              >
                PROCEED
              </button>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-4 w-full md:w-[320px]">
            <div className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-sm font-semibold text-blue-700 mb-2 border-b pb-1">YOUR BOOKING DETAILS</h3>

              <p><span className="font-medium">Pickup Date :</span> {pickupDate} at {pickupTime}</p>

        {   returnDate!=="Invalid Date" ?  <p><span className="font-medium">Return Date :</span> {returnDate}</p> : ""}

              <p><span className="font-medium">Cab Type :</span> {carName}</p>
              <p><span className="font-medium">Cab Facility :</span> AC</p>
              <p><span className="font-medium">Seat Capacity :</span> {seatCapacity} + 1</p>
{             rentalType===""?
<>
 <p><span className="font-medium">KMs Included :</span> {effectiveDistance} km</p>
              <p><span className="font-medium">Duration :</span> {duration}</p>
</>
:
<p><span className="font-medium">Rental Service :</span> {rentalType==="8hr_80km"?"8HR 80KM":"12HR 120KM"}</p>
}

              <p className="font-bold text-xl my-1"><span className="">Total Fare :</span> ₹ {estimatedFare}</p>
            </div>

            {/* Tabs */}
            <div className="bg-white shadow-md rounded-md">
              <GSTDetailsTabs car_extra_fare={car_extra_fare} km_limit={km_limit}/>
              
            
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
