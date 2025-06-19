"use client";

import { useState } from "react";

import Exclusions from "./Exclusions";
import Inclusions from "./Inclusions";
import TermsAndConditions from "./TermsAndConditions";


export default function GSTDetailsTabs() {
  const [activeTab, setActiveTab] = useState("inclusions");

  const tabs = [
    { key: "inclusions", label: "Inclusions" },
    { key: "exclusions", label: "Exclusions" },
    { key: "tc", label: "T&C" }

  ];

  return (
    <div className="w-full    rounded-md">
      {/* Tabs */}
      <div className="flex justify-center border-gray-400 overflow-hidden">
        <div className="border border-gray-400 overflow-hidden">
        {tabs.map((tab, idx) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-xs border-r cursor-pointer border-gray-400 last:border-r-0 font-bold uppercase
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
        {activeTab === "inclusions" &&  <Inclusions />}
        {activeTab === "exclusions" && <Exclusions />}
        {activeTab === "tc" && <TermsAndConditions />}
       
      </div>
    </div>
  );
}
