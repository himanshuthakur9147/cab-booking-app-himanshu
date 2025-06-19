"use client";
// what if I send the car id in the router and then fetch the details of the car from the databse using the car id
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { PiCertificateBold } from "react-icons/pi";
import { calculateDynamicFare } from "@/components/carBookingUI/CalculateFare";
import {useRouter} from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import CityLocalUI from "../CityLocal/CityLocalUI";

const cabs = [
  {
    name: "Wagon R",
    id:"wagon_r123",
    km_limit: 210,
    per_km_fare: 12,
    tada:800,
    night_charges:300,
    seat_capacity: 4,
    rental_service:{
      "8hr_80km":2105,
      "12hr_120km":2500,
    },
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  },
  {
    name: "Toyota Etios",
     id:"Toyota_r123",
    km_limit: 230,
    per_km_fare: 18,
    tada:700,
    night_charges:320,
     seat_capacity: 7,
    rental_service:{
      "8hr_80km":3020,
      "12hr_120km":4012,
    },
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/139585/harrier-ev-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
  },
  {
    name: "Ertiga",
    id:"ertiga_r123",
    km_limit: 180,
    per_km_fare: 8,
    tada:720,
    night_charges:300,
     seat_capacity: 4,
    rental_service:{
      "8hr_80km":3100,
      "12hr_120km":2500,
    },
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/131825/be-6e-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
  },
  {
    name: "Toyota Innova",
    id:"toyota_innova_r123",
    km_limit: 220,
    per_km_fare: 14,
    tada:1200,
    night_charges:400,
     seat_capacity: 4,
    rental_service:{
      "8hr_80km":1800,
      "12hr_120km":2400,
    },
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
  },
  {
    name: "Toyota Innova Crysta",
    id:"toyota_innova_crysta_r123",
    km_limit: 150,
    per_km_fare: 15,
    tada:900,
    night_charges:300,
     seat_capacity: 7,
    rental_service:{
      "8hr_80km":4500,
      "12hr_120km":6000,
    },
    image:
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/195199/clavis-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  },
];

export default function CarBooking() {
  const searchParams = useSearchParams();
  const from = searchParams.get("pickup_location");
  const to = searchParams.get("drop_location");
  const pickupDate = new Date(searchParams.get("pickup_date")).toDateString();
  const returnDate = new Date(searchParams.get("return_date")).toDateString();
   const pickupTime = searchParams.get("pickup_time")

  const {isAuthenticated,setShowModal}=useAuth()
  const [city,setCity]=useState(false)
  const [distanceText, setDistanceText] = useState("");
  const [durationText, setDurationText] = useState("");
  const [cabsWithFare, setcabsWithFare] = useState([]);
  
  console.log("Inital city",city)
  const router = useRouter();


  useEffect(() => {
    if (!from || !window.google) return;
    if(to===""){

      setCity(true);
      console.log(city)
      return;
    }
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

          const updatedcabs = cabs.map((car) => {
            const fare = calculateDynamicFare(
              car.km_limit,
              car.per_km_fare,
              distanceInKm,
              pickupDate,
              returnDate,
              car.tada,
              car.night_charges,
            );
            return {
              ...car,
              estimatedFare: fare.total_fare,
              distance: result.distance.text,
              duration: result.duration.text,
              effectiveDistance: fare.netDistance, // Assuming calculateDynamicFare returns an object with netDistance
            };
          });

          setcabsWithFare(updatedcabs);
        } else {
          console.error("Distance Matrix Error:", status);
        }
      }
    );
  }, [from, to]);

  const handleSelectCar=(car,rental_type="")=>{
    console.log("the details gathered are",{
        from,
        to, 
        pickupDate,
        returnDate,
        pickupTime,
        car,
        distanceText,
        durationText,

    })

    if(!isAuthenticated){
      setShowModal(true); // show login modal
      return; // stop further execution
    }


    const fare=car.rental_service[rental_type]*0.05+car.rental_service[rental_type];
  const queryParams = new URLSearchParams({
    from,
    to,
    pickup_date: pickupDate,
    pickup_time: pickupTime,
    return_date: returnDate,
    carId: car.id,
    carName: car.name,
    estimatedFare: city===false?car.estimatedFare.toFixed(0) : fare,
    distance: city===false? distanceText : "",
    duration: city===false? durationText : "",
    rental_type:city==false?"":rental_type,
    effectiveDistance: Math.round(car.effectiveDistance) // Assuming you want to send this as well
  }).toString();

    router.push(`/booking/billing_form?${queryParams }`);

  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-2">Home &gt; Select Car</div>
      {city===false ?<h2 className="text-xl font-semibold mb-4">
        {from} &gt; {to} {returnDate==="Invalid Date" ? "(One way)" : "(Round trip)"}
      </h2>
    :
      <h2 className="text-xl font-semibold mb-4">
        {from} 
      </h2>
    }

      <div className="flex flex-wrap gap-6 justify-between items-center bg-gray-100 p-4 rounded-md mb-6">
        <div>
          <p className="text-sm font-medium">Pick up</p>
          <p className="text-gray-700">{pickupDate}</p>
        </div>
        {
            returnDate!=="Invalid Date" && (
                <div>
                <p className="text-sm font-medium">Return</p>
                <p className="text-gray-700">{returnDate}</p>
                </div>
            )
        }
       
        <div>
          <p className="text-sm font-medium">Time</p>
          <p className="text-gray-700">{pickupTime}</p>
        </div>
        {city===false && 
        <>
        <div>
          <p className="text-sm font-medium">Distance</p>
          <p className="text-gray-700">{distanceText || "Calculating..."}</p>
        </div>
       {returnDate==="Invalid Date"? <div>
          <p className="text-sm font-medium">Duration</p>
          <p className="text-gray-700">{durationText || "Calculating..."}</p>
        </div>:""}
        </>
        
        }


      </div>

      {city===false?<div className="space-y-4">
        {cabsWithFare.map((car, idx) => (
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
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-xs text-gray-500">or equivalent</p>
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
                  ₹{ car.estimatedFare}
                </p>
                <p className="text-gray-600 text-sm">upto {Math.round(car.effectiveDistance)} km</p>
              </div>
              <button onClick={()=>handleSelectCar(car)} className="bg-orange-500 font-semibold hover:bg-orange-600 cursor-pointer rounded-md text-white px-6 py-2 mt-2 md:mt-0">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    :
<CityLocalUI cabs={cabs} handleSelectCar={handleSelectCar}/>
    }
    </div>
  );
}
