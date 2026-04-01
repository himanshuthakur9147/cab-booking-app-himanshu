"use client";

import { useState } from "react";
import OneWayForm from "./forms/OneWayForm";
import RoundTripForm from "./forms/RoundTripForm";
import LocalForm from "./forms/LocalForm";
import AirportForm from "./forms/AirportForm";
import { MdLoop, MdFlightTakeoff, MdLocationCity, MdLocalAirport } from "react-icons/md";

export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState("roundTrip");

  const tabs = [
    { key: "roundTrip", label: "Round Trip", icon: <MdLoop /> },
    { key: "oneWay", label: "One Way", icon: <MdFlightTakeoff /> },
    { key: "local", label: "Local", icon: <MdLocationCity /> },
    { key: "airport", label: "Airport", icon: <MdLocalAirport /> },
  ];

  return (
    // Added responsive horizontal padding and reduced vertical padding for mobile
    <div className="w-full max-w-4xl mx-auto px-2 md:px-4 pb-8 md:pb-12">
      <div className="relative pt-6 md:pt-12 pb-8 px-2 sm:px-6 md:px-10">
        
        {/* HEADER TEXT - Improved font scaling */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1e293b] uppercase leading-tight">
            BOOK YOUR YATRA <br />
            <span className="text-[#254997]">TRAVELS, SAFE AND SIMPLE</span>
          </h2>
          <p className="text-gray-600 text-xs md:text-sm font-medium mt-2 md:mt-3">
            Secure Your Ride Today
          </p>
        </div>

      
      {/* TABS - Using Grid for perfect 2x2 on mobile and 4x1 on desktop */}
<div className="grid grid-cols-2 md:flex items-center justify-center bg-[#F1F5F9] p-1 md:p-0 rounded-xl md:rounded-lg border border-gray-300 mb-6 md:mb-8 overflow-hidden">
  {tabs.map((tab) => (
    <button
      key={tab.key}
      onClick={() => setActiveTab(tab.key)}
      className={`flex items-center justify-center gap-2 py-3 md:py-2.5 px-2 transition-all text-[10px] sm:text-[11px] md:text-xs font-bold uppercase md:flex-1 ${
        activeTab === tab.key
          ? "bg-[#254997] text-white shadow-md md:rounded-md rounded-lg"
          : "text-gray-700 hover:bg-gray-200 bg-transparent"
      }`}
    >
      <span className="text-base md:text-lg">{tab.icon}</span>
      <span className="whitespace-nowrap">{tab.label}</span>
    </button>
  ))}
</div>

        {/* FORM CONTENT - Added a subtle container to keep forms tidy on small screens */}
        <div className="transition-opacity duration-300 bg-white rounded-lg shadow-sm md:shadow-none p-2 md:p-0">
           {activeTab === "oneWay" && <OneWayForm />}
           {activeTab === "roundTrip" && <RoundTripForm />}
           {activeTab === "local" && <LocalForm />}
           {activeTab === "airport" && <AirportForm />}
        </div>
      </div>
    </div>
  );
}