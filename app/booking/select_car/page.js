"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import CarBooking from "@/components/carBookingUI/CarBooking";
import Head from "next/head";

const Page = () => {
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

  const title = `Book Cab from ${from} to ${to} | Yatra Travel India`;
  const description = `Select the best cab options from ${from} to ${to}. Compare taxi fares, AC cars, and get instant booking with Yatra Travel India.`;
  const canonical = `${process.env.DOMAIN_NAME}/select-car?pickup_location=${from}&drop_location=${to}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`Cab from ${from} to ${to}, ${from} to ${to} taxi service, Yatra ${from} ${to} cab, Online cab booking, Affordable taxi India`} />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${process.env.DOMAIN_NAME}/logo.jpeg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${process.env.DOMAIN_NAME}/logo.jpeg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: `Cab Booking from ${from} to ${to}`,
              description,
              brand: {
                "@type": "Brand",
                name: "Yatra Travel India",
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "499",
                highPrice: "5999",
                offerCount: "10",
              },
            }),
          }}
        />
      </Head>

      <Navbar />
      <div>
        <CarBooking cabs={cabs} setCabs={setCabs} />
      </div>

      <section className="mt-10 px-4 max-w-5xl mx-auto hidden text-gray-700 text-sm leading-relaxed">
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
};

export default Page;
