"use client";

import { useState } from "react";
import OneWayForm from "./forms/OneWayForm";
import RoundTripForm from "./forms/RoundTripForm";
import LocalForm from "./forms/LocalForm";
import AirportForm from "./forms/AirportForm";
import {
  MdLoop,
  MdFlightTakeoff,
  MdLocationCity,
  MdLocalAirport,
} from "react-icons/md";

export default function BookingTabs() {
  const [activeTab, setActiveTab] = useState("roundTrip");

  const tabs = [
    {
      key: "roundTrip",
      label: "Round Trip",
      icon: <MdLoop className="text-sm sm:text-base mr-1" />,
    },
    {
      key: "oneWay",
      label: "One Way",
      icon: <MdFlightTakeoff className="text-sm sm:text-base mr-1" />,
    },
    {
      key: "local",
      label: "Local",
      icon: <MdLocationCity className="text-sm sm:text-base mr-1" />,
    },
    {
      key: "airport",
      label: "Airport",
      icon: <MdLocalAirport className="text-sm sm:text-base mr-1" />,
    },
  ];

  return (
    <div className="max-w-full mx-auto p-4">
      {/* Tabs */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 border border-gray-400 p-2 rounded-md bg-white shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1 px-3 py-2 text-xs sm:text-sm font-semibold rounded-md uppercase transition
                ${
                  activeTab === tab.key
                    ? "bg-dark-btn text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Form section */}
      <div className="mt-4">
        {activeTab === "oneWay" && <OneWayForm />}
        {activeTab === "roundTrip" && <RoundTripForm />}
        {activeTab === "local" && <LocalForm />}
        {activeTab === "airport" && <AirportForm />}
      </div>
    </div>
  );
}
