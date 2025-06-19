import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { MdDriveEta } from "react-icons/md";

import { FaMoneyCheckAlt } from "react-icons/fa";

const Inclusions = () => {
  return (
    <div>
  <div className="p-4 text-sm text-gray-700 space-y-4">
                <div className="flex items-center gap-2">
                 <BsFuelPump className="text-dark-btn text-2xl"/>
                  <span>Base Fare and Fuel Charges</span>
                </div>
                <div className="flex items-center gap-2">
                 <MdDriveEta className="text-dark-btn text-2xl"/>
                  <span>Driver Allowance</span>
                </div>
               
                <div className="flex items-center gap-2">
                <FaMoneyCheckAlt className="text-dark-btn text-2xl"/>
                  <span>GST (5%)</span>
                </div>
              </div>
    </div>
  )
}

export default Inclusions
