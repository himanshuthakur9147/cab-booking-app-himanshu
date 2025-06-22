"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import CarBooking from "@/components/carBookingUI/CarBooking";

const Page = () => {
  const [cabs, setCabs] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const pickupLocation = searchParams.get("pickup_location");
    const dropLocation = searchParams.get("drop_location");
    const pickupDate = searchParams.get("pickup_date");
    const pickupTime = searchParams.get("pickup_time");
    const returnDate = searchParams.get("return_date");
    const service_type = searchParams.get("service_type");

    if (!service_type) return;

    const fetchCabsData = async () => {
      try {
        const res = await fetch("/api/cabs");
        const data = await res.json();

        if (service_type === "One Way") {
          const filtered = data.filter((cab) => cab.one_way);
          setCabs(filtered);
        } else {
          setCabs(data);
        }
      } catch (err) {
        console.error("Failed to fetch cabs:", err);
      }
    };

    fetchCabsData();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div>
        <CarBooking cabs={cabs} setCabs={setCabs} />
      </div>
    </>
  );
};

export default Page;
