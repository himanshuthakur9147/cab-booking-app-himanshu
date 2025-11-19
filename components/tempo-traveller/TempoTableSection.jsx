"use client";

import { FaBus } from "react-icons/fa";

export default function TempoTableSection({cd}) {
  console.log("TempotableSection",cd)
  const data = [
    {
      type: "9 Seater Tempo Traveller",
      capacity: "9 + Driver",
      rate: "₹22 / km",
      ideal: "Family Trips / Airport Pickup",
    },
    {
      type: "12 Seater Tempo Traveller",
      capacity: "12 + Driver",
      rate: "₹24 / km",
      ideal: "Small Groups & Friends",
    },
    {
      type: "15 Seater Tempo Traveller",
      capacity: "15 + Driver",
      rate: "₹25 / km",
      ideal: "Office or School Trips",
    },
    {
      type: "17 Seater Tempo Traveller",
      capacity: "17 + Driver",
      rate: "₹26 / km",
      ideal: "Group Tours / Pilgrimages",
    },
    {
      type: "20 Seater Luxury Tempo Traveller",
      capacity: "20 + Driver",
      rate: "₹28 / km",
      ideal: "Corporate or Wedding Events",
    },
  ];

  return ( cd &&
    <section className="py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <FaBus className="text-[#2482c2] text-2xl" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2482c2]">
            Our Tempo Traveller Options {cd.cityname || ""}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          Choose the right vehicle for your group size:
        </p>

        {/* Table */}
        <div className="overflow-x-auto bg-[#f7fbff] rounded-2xl shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#2482c2] text-white text-left">
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Seating Capacity</th>
                <th className="py-3 px-4 font-semibold">Starting Rate</th>
                <th className="py-3 px-4 font-semibold">Ideal For</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 hover:bg-[#e9f4fb] transition`}
                >
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {row.type}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{row.capacity}</td>
                  <td className="py-3 px-4 font-semibold text-[#2482c2]">
                    {row.rate}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
