"use client";

import React from "react";
import { FaBusAlt, FaCheckCircle } from "react-icons/fa";
import HaridwarRoutes from "./HaridwarRoutes";
import DehradunCharDham from "./DehradunCharDham";

const PopularRoutesSection = ({cd}) => {
  console.log("cd in PopularRoutesSection:", cd);

  const highlights = [
    "Fully AC, spacious, and comfortable tempo travellers",
    "Experienced and verified drivers for a safe journey",
    "Hassle-free booking with instant quotes via call or WhatsApp",
    "Transparent and affordable pricing with no hidden charges",
    "Ideal for families, groups, weddings, corporates, and pilgrims",
  ];

  return (
    <>
    <section className="bg-gray-50 py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2482c2] mb-4">
            Popular Tempo Traveller Routes from {cd.cityname}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
           {cd.routesLine}
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cd.routes && cd.routes.map((route, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 hover:border-[#2482c2]/40"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaBusAlt className="text-[#2482c2] w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-900">{route.from}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{route.description}</p>
            </div>
          ))}
        </div>
{cd.cityname.toLowerCase() ==="haridwar" && <HaridwarRoutes/>}
{cd.cityname.toLowerCase() ==="dehradun" && <DehradunCharDham/>}
        {/* Highlights Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-[#2482c2] mb-4 text-center">
            Why Customers Love These Routes
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 mt-4">
            {highlights && highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="text-[#2482c2] mt-1 w-4 h-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default PopularRoutesSection;
