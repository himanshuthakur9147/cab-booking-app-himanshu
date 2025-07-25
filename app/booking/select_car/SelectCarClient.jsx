"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarBooking from "@/components/carBookingUI/CarBooking";
import Loader from "@/components/Loader/Loader";
import GoogleMapsLoader from "@/components/googleComponents/GoogleMapsLoader";

export default function SelectCarClient() {
  const [cabs, setCabs] = useState([]);
  const searchParams = useSearchParams();

  const from = searchParams.get("pickup_location") || "your city";
  const to = searchParams.get("drop_location") || "destination";
  const pickupDate = searchParams.get("pickup_date") || "";
  const pickupTime = searchParams.get("pickup_time") || "";
  const returnDate = searchParams.get("return_date") || "";
  const service_type = searchParams.get("service_type") || "";

  useEffect(() => {
    if (!service_type) return;

    const fetchCabsData = async () => {
      try {
        const res = await fetch("/api/cabs");
        const data = await res.json();
        console.log("Fetched cabs data:", data);
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
    <GoogleMapsLoader/>
      {cabs.length>0?<CarBooking cabs={cabs} setCabs={setCabs} />:<Loader/>}

  
    </>
  );
}
