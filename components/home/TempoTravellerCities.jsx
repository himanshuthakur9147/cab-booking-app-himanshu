// components/TempoTravellerCityList.tsx
import Link from "next/link";
import React from "react";

const cities = [
  "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Lucknow", "Chandigarh", "Surat", "Indore", "Bhopal", "Nagpur", "Coimbatore",
  "Visakhapatnam", "Vijayawada", "Patna", "Ranchi", "Varanasi", "Agra", "Udaipur", "Haridwar",
  "Rishikesh", "Amritsar", "Mysuru", "Shimla", "Manali", "Goa", "Tirupati", "Madurai"
];

export default function TempoTravellerCityList() {
  // Divide cities into 3 nearly equal columns
  const chunkedCities = Array.from({ length: 3 }, (_, i) =>
    cities.slice(i * Math.ceil(cities.length / 3), (i + 1) * Math.ceil(cities.length / 3))
  );

  return (
    <section className="bg-white px-4 py-12 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark-btn mb-6 border-b border-gray-300 pb-3">
          Tempo Traveller Services in Top Cities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chunkedCities.map((column, colIdx) => (
            <ul key={colIdx} className="space-y-3">
              {column.map((city, idx) => (
               <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition cursor-pointer text-sm sm:text-base"
                >
                   <Link href={`/tempo-traveller/tempo-traveller-in-${city.toLowerCase()}`}><span className="text-gray-400">›</span> Tempo Traveller in {city} </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
