"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import { FaMedal } from "react-icons/fa";
import RouteLoader from "@/components/Loader/RouteLoader";
import Footer from "@/components/footer/Footer";
import AuthInit from "@/components/login/AuthInit";
import RentalServices from "@/components/home/RentalServices";
import ExploreServices from "@/components/home/ExploreServices";
import ExploreTempoServices from "@/components/home/ExploreTempoServices";
import PopularRoutes from "@/components/home/PopularRoutes";
import TempoTravellerCities from "@/components/home/TempoTravellerCities";

export default function Home() {
  const {
    login,
    logout,
    user,
    isAuthenticated,
  } = useAuth();

  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [serviceType, setServiceType] = useState("One Way");

  const {
    pickupLocation,
    setPickupLocation,
    dropLocation,
    setDropLocation,
    carType,
    setCarType,
    pickupDate,
    returnDate,
    pickupTime,
  } = useBooking();

  const onSubmit = () => {
    setLoader(true);

    let detectedServiceType = "One Way";
    if (returnDate === "" && dropLocation === "") {
      detectedServiceType = "Cab Rental Service";
    } else if (returnDate !== "") {
      detectedServiceType = "Round Trip";
    }

    setServiceType(detectedServiceType);

    router.push(
      `/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(detectedServiceType)}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`
    );

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      <AuthInit />
      <Navbar />
      {loader && <RouteLoader />}

      <div className="main-section bg-[url('/bg.jpg')] w-full bg-cover bg-gray-400 bg-center bg-no-repeat h-[85vh] md:h-[70vw] text-xs lg:text-base lg:h-[60vw] xl:h-[90vh]">
        <h1 className="uppercase font-bold text-[18px]  xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[55px] text-white text-center font-sans py-4 md:pt-8 md:pb-5 xl:py-2">
          Services Across 2000+ cities
        </h1>

        <div className="tabs max-w-[85%] m-auto rounded-lg py-4 mt-0 md:mt-6 relative">
          <div className="booking-start flex justify-center rounded-md bg-white relative w-full pb-6">
            <BookingTabs />
          </div>

          <div className="explore-cab-btn absolute bottom-0 left-[15%] xxs:left-[20%] xs:left-[22%] sm:left-[20%] md:left-[25%] lg:left-[30%] xl:left-[35%]">
            <button
              onClick={onSubmit}
              disabled={!pickupLocation?.trim()}
              className={`px-12 md:px-28 py-3 rounded-md font-bold text-base md:text-xl transition duration-100
                ${!pickupLocation?.trim()
                  ? "bg-dark-btn text-white cursor-not-allowed"
                  : "bg-dark-btn hover:bg-light-btn text-white cursor-pointer"
                }`}
            >
              Explore Cabs
            </button>
          </div>
        </div>

        {/* ⭐ New Section: Top Rated Service */}
        <div className="flex justify-center items-center mt-6">
  <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/80 text-white text-sm md:text-base lg:text-xl font-semibold">
    <FaMedal/>
    <span>India’s Top Rated Car Rental Service</span>
    <FaMedal/>
  </div>
</div>

      </div>

      <RentalServices />
      <ExploreServices />
      <ExploreTempoServices />
      <TempoTravellerCities />
      <PopularRoutes />

      <Footer />
    </>
  );
}
