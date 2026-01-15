"use client";
import React from "react";

const vehicles = [
  {
    type: "9 Seater Tempo Traveller",
    capacity: "9 + Driver",
    ac: "AC",
    ideal: "Perfect for small families, couples, airport pickups, city sightseeing, and short local trips",
  },
  {
    type: "12 Seater Luxury Tempo Traveller",
    capacity: "12 + Driver",
    ac: "AC",
    ideal: "Ideal for luxury family trips, VIP transfers, weddings, team travels, and outstation travel",
  },
  {
    type: "12 Seater Maharaja Tempo Traveller",
    capacity: "12 + Driver",
    ac: "AC with climate control",
    ideal: "Perfect for VIP group travel, luxury family outings, small corporate tours, and special occasions",
  },
  {
    type: "16 Seater Urbania Tempo Traveller",
    capacity: "16 + Driver",
    ac: "AC",
    ideal: "Excellent for corporate group tours, family trips, weekend excursions, mid-distance outstation travel, and group sightseeing",
  },
  {
    type: "15 Seater Tempo Traveller",
    capacity: "15 + Driver",
    ac: "AC",
    ideal: "Great for school excursions, office outings, and family day trips, and nearby city travel",
  },
  {
    type: "17 Seater Tempo Traveller",
    capacity: "17 + Driver",
    ac: "AC",
    ideal: "Suitable for group tours, pilgrimages, long-distance trips, weekend getaways, and mid-size travel groups",
  },
  {
    type: "25 Seater Mini Bus",
    capacity: "25 + Driver",
    ac: "AC",
    ideal: "Perfect for wedding transfers, corporate events, pilgrimage group travel, school outings, and long journeys",
  },
  {
    type: "28 Seater Mini Bus",
    capacity: "28 + Driver",
    ac: "AC",
    ideal: "Suitable for corporate events, large group tours, and long-distance travel with full comfort and safety",
  },
  {
    type: "30 Seater Mini Bus",
    capacity: "30 + Driver",
    ac: "AC",
    ideal: "Ideal for school or college trips, pilgrimage tours, large family vacations, and group travel",
  },
  {
    type: "32 Seater Mini Bus",
    capacity: "32 + Driver",
    ac: "AC",
    ideal: "Great for large groups, business family trips, and long-distance tours",
  },
  {
    type: "35 Seater Mini Bus",
    capacity: "35 + Driver",
    ac: "AC",
    ideal: "Perfect for very large groups, long-distance travel, pilgrimage journeys, and big family gatherings",
  },
];

export default function TempoSeatConfig({city}) {

  console.log("TempoSeatConfig",city)
  return (
    <section className="py-12 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
          Tempo Traveller & Mini Bus Options in {city.toUpperCase() || ""}
        </h2>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="w-full border-collapse">
            <thead className="bg-[#2482c2] text-white">
              <tr>
                {["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map(
                  (heading, i) => (
                    <th
                      key={i}
                      className="py-4 px-4 text-left text-sm md:text-base font-semibold border-b border-[#1e6ea4]"
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-700">
              {vehicles.map((v, i) => (
                <tr key={i} className="hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-4">{v.type}</td>
                  <td className="py-4 px-4">{v.capacity}</td>
                  <td className="py-4 px-4">{v.ac}</td>
                  <td className="py-4 px-4">{v.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
