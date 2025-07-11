"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { PiCertificateBold } from "react-icons/pi";
import { calculateDynamicFare } from "@/components/carBookingUI/CalculateFare";
import { useAuth } from "@/context/AuthContext";
import CityLocalUI from "../CityLocal/CityLocalUI";
import RouteLoader from "../Loader/RouteLoader";
import FareSummaryModal from "@/components/carBookingUI/FareSummaryModal"
import BookingSummaryModal from "@/components/carBookingUI/BookingSummaryModal";


export default function CarBooking({ cabs, setCabs }) {

  

  const searchParams = useSearchParams();

  const from = searchParams.get("pickup_location");
  const to = searchParams.get("drop_location");
  const pickupDate = new Date(searchParams.get("pickup_date")).toDateString();
  const returnDate = new Date(searchParams.get("return_date")).toDateString();
  const pickupTime = searchParams.get("pickup_time");
  const service_type = searchParams.get("service_type");
  const { isAuthenticated, setShowModal,user } = useAuth();
  console.log("User in car booking", user);
  console.log("The service type in car booking", service_type);
  const [city, setCity] = useState(false);
  const [distanceText, setDistanceText] = useState("");
  const [durationText, setDurationText] = useState("");
  const [cabsWithFare, setCabsWithFare] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
   const [showFS, setShowFS] = useState(false);
     const [bookingModal, setBookingModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

useEffect(() => {
  if (service_type === "Cab Rental Service") {
    setCity(true);
  } else {
    setCity(false);
  }
}, [service_type]);


useEffect(() => {
  const runFareCalculation = async () => {
    if (service_type === "Cab Rental Service") return; // skip if city local
    if (!from || !to || !window?.google || cabs.length === 0) return;

    setLoader(true);

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [from],
        destinations: [to],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status === "OK") {
          const result = response.rows[0].elements[0];
          const distanceInKm = result.distance.value / 1000;

          setDistanceText(result.distance.text);
          setDurationText(result.duration.text);

          const updatedCabs = cabs.map((car) => {
            const fare = calculateDynamicFare(
              car.km_limit,
              car.per_km_fare,
              distanceInKm,
              pickupDate,
              returnDate,
              car.tada,
              car.night_charges
            );

            return {
              ...car,
              estimatedFare: fare.total_fare,
              total_amount: fare.total_amount,
              tada: fare.tada,
              dayCount: fare.dayCount,
              effectiveDistance: fare.netDistance,
              distance: result.distance.text,
              duration: result.duration.text,
              gst: fare.gst,
            };
          });

          setCabsWithFare(updatedCabs);
        } else {
          console.error("Distance Matrix Error:", status);
        }

        setLoader(false);
      }
    );
  };

  runFareCalculation();
}, [from, to, cabs, service_type]); // include service_type here


const handleBookButton=(car)=>{
  setSelectedCar(car)
  setBookingModal(true);
}

  const handleBookNow = (car, rental_type = "") => {
    if (!isAuthenticated) {
      setShowModal(true) // redirect to AuthGear login flow
      return;
    }
    
    setLoader(true);
    console.log("Selected Car in handleBookNow:", car);
    const fare = car.rental_service?.[rental_type]
      ? car.rental_service[rental_type] * 1.05
      : car.estimatedFare;
    console.log("Fare in handleBookNow:", fare);
    const queryParams = new URLSearchParams({
      from,
      to,
      pickup_date: pickupDate,
      pickup_time: pickupTime,
      return_date: returnDate,
      carId: car._id,
      carName: car.name,
      seatCapacity: car.seat_capacity,
      car_extra_fare: car.extra_charge_per_km,
      km_limit: car.km_limit,
      estimatedFare: city ? fare.toFixed(0) : car.estimatedFare?.toFixed(0),
      distance: city ? "" : distanceText,
      duration: city ? "" : durationText,
      rental_type: city ? rental_type : "",
      service_type,
      effectiveDistance: Math.round(car.effectiveDistance || 0),
    }).toString();
    console.log("Query Params in handleBookNow:", queryParams);
    router.push(`/booking/billing_form?${queryParams}`);
    setTimeout(() => setLoader(false), 2000);
  };

  return (
    <>
      {loader && <RouteLoader />}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-2">Home &gt; Select Car</div>
        <h2 className="text-base lg:text-lg xl:text-xl font-semibold mb-4">
          {from} {city ? "" : `> ${to}`} ({service_type})
        </h2>

        <div className="flex flex-wrap gap-6 justify-between items-center bg-gray-100 p-4 rounded-md mb-6">
          <div>
            <p className="text-sm font-medium">Pick up</p>
            <p className="text-gray-700">{pickupDate}</p>
          </div>

          {returnDate !== "Invalid Date" && (
            <div>
              <p className="text-sm font-medium">Return</p>
              <p className="text-gray-700">{returnDate}</p>
            </div>
          )}

          <div>
            <p className="text-sm font-medium">Time</p>
            <p className="text-gray-700">{pickupTime}</p>
          </div>

          {city===false ? (
            <>
              <div>
                <p className="text-sm font-medium">Distance</p>
                <p className="text-gray-700">{distanceText || "Calculating..."}</p>
              </div>

              {returnDate === "Invalid Date" && (
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-gray-700">{durationText || "Calculating..."}</p>
                </div>
              )}
            </>
          ):""}
        </div>
          
        {city===false ? (
          <div className="space-y-4">

            {cabsWithFare.length > 0 ? (
              cabsWithFare.map((car, idx) => (
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
                    <div className="">
                      <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                      <p className="text-xs text-gray-500">or equivalent</p>
                      <p className="text-xs font-semibold py-1.5  md:text-sm">Seat Capacity : {car.seat_capacity} + 1</p>
                      <div className="bg-orange-600 text-white font-semibold px-4 py-1 text-xs w-fit my-1 rounded-full">
                        AC
                      </div>
                    </div>
                  </div>

                  <div className="flex py-4 flex-row justify-between gap-2 xs:gap-4 md:gap-6  items-center text-sm text-center">
                    
                    <div className="my-2 md:my-0 flex flex-col items-center">
                      
                        <p className="text-gray-600 text-sm lg:text-base font-bold">
                        {Math.round(car.effectiveDistance || 0)} KM
                      </p>
                        <p className="text-gray-600 text-xs px-2 lg:px-8 font-semibold ">
                       INCLUDED KMs
                      </p>
                    </div>
                    
                      <div
            className="text-dark-btn  text-sm sm:text-base lg:text-lg font-bold hover:text-light-btn transition-all duration-100 cursor-pointer px-0 lg:px-4 ease-in"
            onClick={() => {
              setSelectedCar({
                car,
                total: car.estimatedFare?.toFixed(0),
                service_type,
                rental_service:""
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
                      <p className="text-green-600 text-lg sm:text-base lg:text-lg font-bold">
                        ₹{car.total_amount.toFixed(0) ?? "Calculating..."}
                      </p>
                    
                    </div>
                  </div>
                    <div className=" w-full md:w-fit">

                    <button
                      onClick={() => handleBookButton(car)}
                      className="bg-orange-500 font-semibold hover:bg-orange-600 w-full cursor-pointer  text-xs lg:text-base  rounded-md text-white px-6 py-2 mt-2 md:mt-0"
                    >
                      Book
                    </button>
                    </div>
                     {/* Booking Modal */}
      {bookingModal && selectedCar && (
        <BookingSummaryModal
          onClose={() => {
            setBookingModal(false);
            setSelectedCar(null);
          }}
          bookingData={{car:selectedCar, pickupDate, returnDate, from, to, pickupTime,service_type}}
          onBookNow={handleBookNow}
        />
      )}
                </div>
              ))
            ) : (
              <RouteLoader />
            )}
          </div>
        ) : (
          <CityLocalUI cabs={cabs} handleBookButton={handleBookButton} showFS={showFS} bookingModal={bookingModal} setBookingModal={setBookingModal} pickupDate={pickupDate} returnDate={returnDate} from={from} to={to} pickupTime={pickupTime} setShowFS={setShowFS}  selectedCar={selectedCar} setSelectedCar={setSelectedCar} onBookNow={handleBookNow} />
        )}
      </div>
    </>
  );
}
