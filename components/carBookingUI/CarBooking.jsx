"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { PiCertificateBold } from "react-icons/pi";
import { calculateDynamicFare } from "@/components/carBookingUI/CalculateFare";
import { useAuth } from "@/context/AuthContext";
import CityLocalUI from "../CityLocal/CityLocalUI";
import RouteLoader from "../Loader/RouteLoader";

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
              effectiveDistance: fare.netDistance,
              distance: result.distance.text,
              duration: result.duration.text,
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

  const handleSelectCar = (car, rental_type = "") => {
    if (!isAuthenticated) {
      setShowModal(true) // redirect to AuthGear login flow
      return;
    }

    setLoader(true);

    const fare = car.rental_service?.[rental_type]
      ? car.rental_service[rental_type] * 1.05
      : car.estimatedFare;

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

    router.push(`/booking/billing_form?${queryParams}`);
    setTimeout(() => setLoader(false), 2000);
  };

  return (
    <>
      {loader && <RouteLoader />}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-2">Home &gt; Select Car</div>
        <h2 className="text-xl font-semibold mb-4">
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
                  className="flex justify-between items-center border rounded-md p-4 hover:shadow-md"
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
                      <h3 className="text-lg font-bold">{car.name}</h3>
                      <p className="text-xs text-gray-500">or equivalent</p>
                      <strong>Seat Capacity : {car.seat_capacity} + 1</strong>
                      <div className="bg-orange-600 text-white font-semibold px-4 py-1 text-xs w-fit my-1 rounded-full">
                        AC
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-6 items-center text-sm text-center">
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
                    <div className="my-2 md:my-0 text-center">
                      <p className="text-green-600 text-base font-bold">
                        ₹{car.estimatedFare?.toFixed(0) ?? "Calculating..."}
                      </p>
                      <p className="text-gray-600 text-sm">
                        upto {Math.round(car.effectiveDistance || 0)} km
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectCar(car)}
                      className="bg-orange-500 font-semibold hover:bg-orange-600 cursor-pointer rounded-md text-white px-6 py-2 mt-2 md:mt-0"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <RouteLoader />
            )}
          </div>
        ) : (
          <CityLocalUI cabs={cabs} handleSelectCar={handleSelectCar} />
        )}
      </div>
    </>
  );
}
