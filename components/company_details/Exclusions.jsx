import React from 'react'
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaTruckPickup } from "react-icons/fa";
import { SiToll } from "react-icons/si";
const Exclusions = () => {
  return (
    <div>
      <div className="p-4 text-sm text-gray-700 space-y-4">
                    <div className="flex items-center gap-2">
                     <HiOutlineCurrencyRupee className="text-dark-btn text-2xl"/>
                      <span>Pay ₹12/km after 150 km</span>
                    </div>
                    <div className="flex items-center gap-2">
                     <FaTruckPickup className="text-dark-btn text-2xl"/>
                      <span>Multiple pickups/drops</span>
                    </div>
                     <div className="flex items-center gap-2">
                   <SiToll className="text-dark-btn text-2xl"/>
                  <span>State Tax & Toll</span>
                </div>
                  
                  </div>
    </div>
  )
}

export default Exclusions
