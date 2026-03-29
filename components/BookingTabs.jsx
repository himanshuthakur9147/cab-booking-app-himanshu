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
    <div className="w-full max-w-2xl mx-auto px-4 pb-12">
      <div className="relative pt-12 pb-8 px-6 md:px-10">
        
      

        {/* HEADER TEXT */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b]  uppercase ">
            BOOK YOUR YATRA <br />
            TRAVELS, SAFE AND SIMPLE
          </h2>
          <p className="text-gray-600 text-sm font-medium mt-3">Secure Your Ride Today</p>
        </div>

        {/* TABS */}
        <div className="flex items-center justify-between bg-[#F1F5F9] rounded-lg border border-gray-300 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-2  transition-all text-[11px] md:text-xs font-bold uppercase ${
                activeTab === tab.key
                  ? "bg-[#254997] text-white rounded-md shadow-md"
                  : "text-gray-900 hover:bg-gray-300 bg-gray-200"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* FORM CONTENT */}
        <div className="transition-opacity duration-300">
           {activeTab === "oneWay" && <OneWayForm />}
            {activeTab === "roundTrip" && <RoundTripForm />}
            {activeTab === "local" && <LocalForm />}
            {activeTab === "airport" && <AirportForm />}
          {/* Add other forms here */}
        </div>
      </div>
    </div>
  );
}