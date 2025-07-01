// components/PopularRoutes.tsx
import React from 'react';

const routesData = [
  {
    city: "Delhi",
    routes: [
      "Delhi → Agra",
      "Delhi → Jaipur",
      "Delhi → Haridwar & Rishikesh",
      "Delhi → Shimla",
      "Delhi → Chandigarh",
      "Delhi → Mathura & Vrindavan",
      "Delhi → Amritsar",
      "Delhi → Dehradun"
    ]
  },
  {
    city: "Bangalore",
    routes: [
      "Bangalore → Mysore",
      "Bangalore → Ooty",
      "Bangalore → Coorg",
      "Bangalore → Chikmagalur",
      "Bangalore → Tirupati",
      "Bangalore → Wayanad",
      "Bangalore → Hyderabad",
      "Bangalore → Pune"
    ]
  },
  {
    city: "Hyderabad",
    routes: [
      "Hyderabad → Srisailam",
      "Hyderabad → Tirupati",
      "Hyderabad → Vijayawada",
      "Hyderabad → Warangal",
      "Hyderabad → Visakhapatnam",
      "Hyderabad → Goa",
      "Hyderabad → Bangalore",
      "Hyderabad → Chennai"
    ]
  }
];

export default function PopularRoutes() {
  return (
    <section className="py-6 px-4 md:px-8 lg:px-16 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-dark-btn">
        Popular Outstation Routes
      </h2>

      {routesData.map(({ city, routes }) => (
        <div key={city} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b border-gray-300 pb-2">
            From {city}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {routes.map((route, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition duration-200"
              >
                <p className="text-gray-600 font-medium">{route}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
