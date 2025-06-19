"use client"
import React from 'react'
import { useBooking } from '@/context/BookingContext'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import CarBooking from '@/components/carBookingUI/CarBooking'

const page = () => {

  
  const searchParams = useSearchParams();
  
  const pickupLocation = searchParams.get("pickup_location");
  const dropLocation = searchParams.get("drop_location");
  const pickupDate = searchParams.get("pickup_date");
  const pickupTime = searchParams.get("pickup_time");
  const returnDate = searchParams.get("return_date");
  
  console.log("All details are select car",{pickupLocation, dropLocation, pickupDate, returnDate, pickupTime});

  return (
    <>
    <Navbar />
   

    <div>
      <CarBooking />
    </div>

    </>
  )
}

export default page
