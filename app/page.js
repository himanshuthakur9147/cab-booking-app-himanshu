"use client";

import { useState, useEffect, Suspense } from "react";
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
import { TypewriterText } from "@/components/home/TypewriterText";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const { login, logout, user, isAuthenticated } = useAuth();
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
      <Head>
        <title>Yatra Travel India | Online Cab Booking</title>
        <meta name="description" content="Book one-way, round trip, local or airport cab rental with Yatra Travel India. Safe & affordable taxi service across 2000+ cities in India." />
        <link rel="preload" as="image" href="/bg.jpg" fetchpriority="high" />
      </Head>

      <AuthInit />
      <Navbar />
      {loader && <RouteLoader />}

      <div className="relative w-full h-[85vh] md:h-[70vw] lg:h-[60vw] xl:h-[90vh] overflow-hidden">
        {/* Optimized Image instead of CSS bg */}
        <Image
          src="/bg.jpg"
          alt="Cab Background"
          layout="fill"
          objectFit="cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-start items-center text-center pt-6 md:pt-12">
          <h1 className="uppercase font-bold text-white font-sans text-[18px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[55px]">
            <Suspense fallback={"Book Cab Services Across India"}>
              <TypewriterText />
            </Suspense>
          </h1>

          <div className="tabs w-[90%] max-w-5xl m-auto mt-6 relative z-10">
            <div className="booking-start flex justify-center rounded-md bg-white w-full pb-6">
              <BookingTabs />
            </div>

            <div className="explore-cab-btn mt-2 text-center">
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

          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/80 text-white text-sm md:text-base lg:text-xl font-semibold">
              <FaMedal />
              <span>India’s Top Rated Car Rental Service</span>
              <FaMedal />
            </div>
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <RentalServices />
      <ExploreServices />
      <ExploreTempoServices />
      <TempoTravellerCities />
      <PopularRoutes />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
