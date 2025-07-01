"use client";
import { FaTimes } from "react-icons/fa";

export default function FareSummaryContent({ onClose,modalData }) {
    const {car,total,service_type,rental_service}=modalData
    console.log(car,total)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10">
      <div className="bg-white text-gray-800 w-[90%] max-w-md rounded-xl shadow-lg  relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-800 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="mb-4 py-3 bg-dark-btn">
          <h2 className="text-lg text-white font-bold">{car.name}</h2>
         {service_type==="Cab Rental Service"? <p className="text-xl font-bold text-white">₹{total+total*0.05}</p>: <p className="text-xl font-bold text-white">₹{total}</p>}
        </div>
<div className="px-6 pb-6 ">


        {/* Table */}
        <div className="grid grid-cols-2 gap-y-3 text-sm border-t font-semibold border-white/20 pt-4">
          <div className="uppercase font-bold border-b-2 border-gray-800 pb-2">inclusions</div>
         <div className="uppercase font-bold border-b-2 border-gray-800 pb-2">Charges</div>
        
          <div className="font-semibold">Estimated Fare</div>
         {service_type==="Cab Rental Service"?<div>₹{Math.round(total)}</div>: <div>₹{Math.round(total-car.gst)}</div>}

       {service_type==="Cab Rental Service"?<> <div className="font-semibold">Rental Service</div>
          <div>{rental_service==="8hr_80km"?"8HR 80KM":"12HR 120KM"}</div></> :
       <>
       <div className="font-semibold">Included KM</div>
       <div>

        
          <div className="font-semibold">{Math.round(car.effectiveDistance)} KM</div>
       </div>
          
       </>
          }

          <div className="font-semibold">Driver Allowance</div>

        {service_type==="Cab Rental Service"?<div>
           {rental_service==="8hr_80km"?"80 KM":"120 KM"}
           
          </div> : <div className="font-semibold">
           
          ₹ {car.tada}
          <div>({car.dayCount>1?`${car.dayCount} Days`:"1 Day"})</div>
          </div>}


          <div className="font-semibold text-red-800">Toll Tax</div>
          <div className="text-red-800">Excluded</div>

          <div className="font-semibold text-red-800">State Tax</div>
          <div className="text-red-800">Excluded</div>
          <div className="font-semibold text-red-800">Parking Charges</div>
          <div className="text-red-800">Excluded</div>

          <div className="font-semibold">GST (5%)</div>
        {service_type==="Cab Rental Service"? <div>₹{total*0.05} </div>: <div>₹{Math.round(car.gst)} </div>}
        </div>

        {/* Extra Charges */}
        <div className="mt-6 bg-orange-500/30 p-3 text-gray-800 rounded-md text-sm">
          <p className=" font-bold mb-1 text-orange-900">
            Extra Charges, if applicable
          </p>
          <div className="flex justify-between font-semibold">
            <span>Extra per km</span>
         {service_type==="Cab Rental Service"?<span>₹{car.extra_charge_per_km} after  {rental_service==="8hr_80km"?"80 KM":"120 KM"} Km</span>:   <span>₹{car.extra_charge_per_km} after {car.effectiveDistance} Km</span>}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
