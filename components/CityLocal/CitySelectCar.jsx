import React from 'react'
import {PiCertificateBold} from "react-icons/pi";
import FareSummaryModal from "@/components/carBookingUI/FareSummaryModal"
import BookingSummaryModal from "@/components/carBookingUI/BookingSummaryModal";
import Image from 'next/image';
const CitySelectCar = ({rental_service,cabs,handleBookButton,selectedCar,setSelectedCar,onBookNow,showFS,setShowFS,pickupDate, returnDate, from, to, pickupTime,bookingModal,setBookingModal}) => {
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
                    <div
                               className="text-dark-btn text-lg font-bold hover:text-light-btn transition-all duration-100 cursor-pointer px-4 ease-in"
                               onClick={() => {
                                 setSelectedCar({
                                   car,
                                   total: Math.round(car.rental_service[rental_service]),
                                   service_type:"Cab Rental Service",
                                   rental_service
                                 });
                                 setShowFS(true);
                               }}
                             >
                               Fare Summary
                             </div>
                   
                         {/* Conditional Modal */}
                         {showFS && selectedCar && (
                           <FareSummaryModal onClose={() => setShowFS(false)}  modalData={selectedCar} />
                         )}
                    <div className="my-2 md:my-0 text-center w-full md:fit">
                      <p className="text-green-600 text-base lg:text-lg font-bold">
                        ₹{Math.round(car.rental_service[rental_service]+car.rental_service[rental_service]*0.05)}
                      </p>
                      <p className="text-gray-600 text-sm lg:text-base">upto {Math.round(rental_service==="8hr_80km"?80 : 120)} km</p>
                    </div>
                    <button
                      onClick={() => handleBookButton(car)}
                      className="bg-orange-500 font-semibold hover:bg-orange-600 w-full cursor-pointer  text-xs lg:text-base  rounded-md text-white px-6 py-2 mt-2 md:mt-0"
                    >
                      Book
                    </button>

                        {/* Booking Modal */}
                          {bookingModal && selectedCar && (
                            <BookingSummaryModal
                              onClose={() => {
                                setBookingModal(false);
                                setSelectedCar(null);
                              }}
                              bookingData={{car:selectedCar, pickupDate, returnDate, from, to, pickupTime, service_type:"Cab Rental Service",rental_service}}
                              onBookNow={onBookNow}
                            />
                          )}
                  </div>
                </div>
              ))}
            </div>
    </div>
  )
}

export default CitySelectCar
