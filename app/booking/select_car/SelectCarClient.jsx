"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarBooking from "@/components/carBookingUI/CarBooking";

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
      <CarBooking cabs={cabs} setCabs={setCabs} />

      <section className="mt-10 px-4 max-w-5xl mx-auto text-gray-700 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold mb-2">
          Why Book a Cab from {from} to {to} with Yatra Travel India?
        </h2>
        <p>
          Traveling from <strong>{from}</strong> to <strong>{to}</strong>? Yatra Travel India
          provides safe, affordable, and reliable cab options. Our top-rated chauffeurs and
          flexible one-way or round trip packages make your journey smooth. Compare fares, choose
          AC or SUV, and travel stress-free. No hidden charges – instant confirmation.
        </p>
      </section>
    </>
  );
}
