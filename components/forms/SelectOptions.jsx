// components/Selector.js
"use client";

import React from "react";

const Selector = ({ options, value, onChange, label }) => {
  return (
    <div className="w-full max-w-sm">
      {label && <label className="block mb-1 font-medium text-gray-700">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full  border-none rounded-md border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
