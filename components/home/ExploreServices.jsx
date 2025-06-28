"use client";

import React from "react";
import Image from "next/image";
import oneway from "@/imgs/one-way.jpg";
import rt from "@/imgs/round-trip.jpg";
import local from "@/imgs/local.jpg";
import airport from "@/imgs/airport.jpg";

const services = [
  
  {
    title: "Round Trip",
    image: rt,
    features: [
      "Door-to-Door Pickup & Drop",
      "Full schedule flexibility",
      "Expert and professional drivers",
      "24x7 customer support",
    ],
  },
  {
    title: "One Way",
    image: oneway,
    features: [
      "Well maintained cabs",
      "Affordable rates",
      "Professional drivers",
      "24x7 customer service",
    ],
  },
  {
    title: "Local Car Rental",
    image: local,
    features: [
      "Hourly package",
      "Experienced local driver",
      "Easy booking and fast service",
      "24x7 customer service",
    ],
  },
  {
    title: "Airport Transfers",
    image: airport,
    features: [
      "Punctual driver",
      "Easy booking",
      "Luggage carrier available",
      "24x7 customer service",
    ],
  },
];

export default function ExploreServices() {
  return (
    <section className="bg-white py-16 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-dark-btn">
        Our Car Rental Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-lg border  border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative mb-20 xs:mb-32 md:mb-24 xl:mb-6 h-44 w-full">
              <Image
                src={service.image}
                alt={service.title}
                width={340}
                height={240}
                className="object-cover w-full h-[250px] xs:h-[300px] md:h-[275px] xl:w-[275px] rounded-lg xl:h-[200px] object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold uppercase text-gray-800 mb-3 text-center">
                {service.title}
              </h3>
              <ol className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
