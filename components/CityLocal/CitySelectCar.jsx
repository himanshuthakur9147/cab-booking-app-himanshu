import React from 'react'
import {PiCertificateBold} from "react-icons/pi";
import Image from 'next/image';
const CitySelectCar = ({rental_service,cabs,handleSelectCar}) => {
  return (
    <div>
      <div className="space-y-4">
              {cabs.map((car, idx) => (
                <div
                  key={idx}
                  className="flex justify-between flex-col md:flex-row items-center border rounded-md p-4 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={120}
                      height={60}
                      className="object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{car.name}</h3>
                    <p className="text-xs text-gray-500">or equivalent</p>
                      <p className="md:text-sm">Seat Capacity : {car.seat_capacity} + 1</p>
                      <div className="bg-orange-600 text-white font-semibold px-4 py-1 text-xs w-fit my-1 rounded-full">
                        AC
                      </div>
                    </div>
                  </div>
      
                  <div className="flex py-4 flex-row justify-between gap-2 xs:gap-4 md:gap-6  items-center text-sm text-center">
                    <div className="my-2 md:my-0 flex flex-col items-center">
                      <PiCertificateBold className="text-4xl text-dark-btn" />
                      <p className="text-gray-600 text-xs">Top Rated Cabs & Chauffeurs</p>
                    </div>
                    <div className="my-2 md:my-0 flex flex-col items-center">
                      <Image
                        src="/tax-svgrepo-com.png"
                        alt="taxi"
                        width={30}
                        height={30}
                        className="mb-2"
                      />
                      <p className="text-gray-600 text-xs">Includes GST</p>
                    </div>
                    <div className="my-2 md:my-0 text-center w-full md:fit">
                      <p className="text-green-600 text-base font-bold">
                        ₹{Math.round(car.rental_service[rental_service]+car.rental_service[rental_service]*0.05)}
                      </p>
                      <p className="text-gray-600 text-sm">upto {Math.round(rental_service==="8hr_80km"?80 : 120)} km</p>
                    </div>
                    <button onClick={()=>handleSelectCar(car,rental_service)} className="bg-orange-500 font-semibold hover:bg-orange-600 w-full cursor-pointer  text-xs lg:text-base  rounded-md text-white px-6 py-2 mt-2 md:mt-0">
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default CitySelectCar
