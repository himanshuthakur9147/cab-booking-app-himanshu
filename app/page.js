export const metadata = {
  title: "Yatra Travel India – Online Cab, Taxi & Car Rental Services",
  description:
    "Book cabs instantly across 2000+ cities with Yatra Travel India. One way, round trip, local rental & airport transfer services at affordable prices.",
  keywords: [
    "Cab Booking India",
    "Online Taxi Service",
    "Yatra Travel",
    "Round Trip Cabs",
    "One Way Taxi",
    "Local Car Rental",
    "Airport Transfer",
    "Affordable Cab Booking",
    "Taxi Booking App",
    "Outstation Cabs India",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/`,
  },
  openGraph: {
    title: "Yatra Travel India – Book Online Cabs Across India",
    description:
      "Trusted cab booking across 2000+ Indian cities. Safe, affordable & reliable travel with 24/7 customer support.",
    url: `${process.env.DOMAIN_NAME}`,
    siteName: "Yatra Travel India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${process.env.DOMAIN_NAME}/logo.jpeg`, // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Yatra Travel India – Cab Booking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatra Travel India – Online Cab Booking",
    description: "Book cabs anywhere in India with Yatra Travel – one way, round trip & rental rides.",
    site: "@YatraTravelIndia",
    images: `${process.env.DOMAIN_NAME}/logo.jpeg`, // Replace with your image
  },
  robots: {
    index: true,
    follow: true,
  },
};


"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import BookingTabForm from "@/components/BookingTabForm";
import RouteLoader from "@/components/Loader/RouteLoader";
import Footer from "@/components/footer/Footer";
import AuthInit from "@/components/login/AuthInit";
import RentalServices from "@/components/home/RentalServices";
import ExploreServices from "@/components/home/ExploreServices";

export default function Home() {
  const {
    login,
    logout,
    user,
    isAuthenticated,
    authgearReady,
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

  setServiceType(detectedServiceType); // Optional: for global tracking

  router.push(
    `/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(detectedServiceType)}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`
  );

  setTimeout(() => {
    setLoader(false);
  }, 2000);
};

  return (
    <>
    <AuthInit/>
      <Navbar />
      {loader && <RouteLoader />}

      <div className="main-section bg-[url('/bg.webp')] w-full bg-cover bg-center bg-no-repeat h-[85vh] md:h-[70vw] text-xs lg:text-base lg:h-[60vw] xl:h-[85vh]">
        <h1 className="uppercase font-bold text-[18px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[55px] text-white text-center font-sans py-4 md:pt-8 md:pb-5">
          Services across 2000+ cities
        </h1>

        <div className="tabs max-w-[85%] m-auto rounded-lg py-4 mt-0 md:mt-6 relative">
          <div className="booking-start flex justify-center rounded-md bg-white relative w-full pb-6">
            <BookingTabs />
          </div>

          <div className="explore-cab-btn absolute bottom-0 left-[15%] xxs:left-[20%] xs:left-[22%] sm:left-[20%] md:left-[25%] lg:left-[30%] xl:left-[35%]">
            <button
              onClick={onSubmit}
              className="bg-dark-btn hover:bg-light-btn text-white px-12 md:px-28  cursor-pointer py-3 rounded-md font-bold text-base md:text-xl transition duration-100"
            >
              Explore Cabs
            </button>
          </div>
        </div>
      </div>

<RentalServices/>
<ExploreServices/>
      <Footer />
    </>
  );
}
