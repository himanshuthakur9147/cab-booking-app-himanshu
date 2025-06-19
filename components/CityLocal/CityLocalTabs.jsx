"use client";

import { useState } from "react";
import LocalCityService from "./LocalCityService";



export default function CityLocalTabs({cabs,handleSelectCar}) {
  const [activeTab, setActiveTab] = useState("8hr_80km");

  const tabs = [
    { key: "8hr_80km", label: "8HR 80KM" },
    { key: "12hr_120km", label: "12HR 120KM" },

  ];

  return (
    <div className="max-w-full m-auto p-4   shadow rounded-md">
      {/* Tabs */}
      <div className="flex justify-center border-gray-400 rounded-t-md overflow-hidden">
        <div className="border border-gray-400 rounded-t-md overflow-hidden">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm border-r cursor-pointer border-gray-400 last:border-r-0 font-bold uppercase
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
        {activeTab === "8hr_80km" &&  <LocalCityService rental_service={"8hr_80km"} cabs={cabs} handleSelectCar={handleSelectCar}/>}
        {activeTab === "12hr_120km" && <LocalCityService rental_service={"12hr_120km"} cabs={cabs} handleSelectCar={handleSelectCar}/>}
        
      </div>
    </div>
  );
}
