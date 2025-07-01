"use client";

import { useState } from "react";
import OneWayForm from "./forms/OneWayForm";
import RoundTripForm from "./forms/RoundTripForm";
import LocalForm from "./forms/LocalForm";
import AirportForm from "./forms/AirportForm";


export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState("oneWay");

  const tabs = [
    { key: "roundTrip", label: "Round Trip" },
    { key: "oneWay", label: "One Way" },
    { key: "local", label: "Local" },
    { key: "airport", label: "Airport" },
  ];

  return (
    <div className="max-w-full m-auto p-4   rounded-md">
      {/* Tabs */}
      <div className="flex justify-center border-gray-400 rounded-t-md overflow-hidden">
        <div className="border border-gray-400 rounded-t-md overflow-hidden">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-2 md:px-4 py-2  text-[8px] sm:text-xs md:text-sm lg:text-base  border-r cursor-pointer border-gray-400 last:border-r-0 font-bold uppercase
              ${
                activeTab === tab.key
                  ? "bg-dark-btn text-white  "
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
        </div>
      </div>

      {/* Form section with border around */}
      <div className=" p-4">
        {activeTab === "oneWay" &&  <OneWayForm />}
        {activeTab === "roundTrip" && <RoundTripForm />}
        {activeTab === "local" && <LocalForm />}
        {activeTab === "airport" && <AirportForm />}
      </div>
    </div>
  );
}
