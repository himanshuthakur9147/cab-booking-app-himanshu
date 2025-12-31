"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import { FaMedal,FaWhatsapp } from "react-icons/fa";
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
import GoogleMapsScriptLoader from "@/components/googleComponents/GoogleMapsScriptLoader";
import SEOJsonLD from "@/components/SEOJsonLD";

export default function Home() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [serviceType, setServiceType] = useState("One Way");

  const {
    pickupLocation,
    dropLocation,
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
      `/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(
        detectedServiceType
      )}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`
    );

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <>
    <Head>
  <title>Yatra Travel India – Cab & Taxi Booking | Online Booking at ₹20/Km</title>
  <meta name="description" content="Book cabs across India instantly. Trusted and affordable car rentals for one way, round trip, or local rides." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yatratravelindia.com/" />

  {/* JSON-LD Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Yatra Travel India",
        "url": "https://yatratravelindia.com",
        "logo": "https://yatratravelindia.com/logo.jpeg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9044019511",
          "contactType": "Customer Service"
        },
      }),
    }}
  />
</Head>
<SEOJsonLD/>
    <GoogleMapsScriptLoader
  onLoad={() => {
    console.log("🟢 Google Maps ready to use in app.");
    // Optional: Set a global flag or state if needed
  }}
/>
      <AuthInit />
      <Navbar />
      {loader && <RouteLoader />}

      {/* === Hero Section === */}
<div className="pt-2 bg-hero text-xs lg:text-base">

        <div className="text-center py-5 md:py-4">
          <h1 className="uppercase font-bold text-[18px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[55px] text-white font-sans">
            <TypewriterText />
          </h1>
        </div>

        {/* === Booking Tabs === */}
        <div className="max-w-[85%] mx-auto rounded-lg py-6  relative">
          <div className="bg-white rounded-md shadow-md p-4">
            <BookingTabs />
          </div>

          {/* Explore Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={onSubmit}
              disabled={!pickupLocation?.trim()}
              className={`px-12 md:px-28 py-3 rounded-md font-bold uppercase text-base md:text-xl transition duration-100 ${
                !pickupLocation?.trim()
                  ? "bg-dark-btn text-white cursor-not-allowed"
                  : "bg-dark-btn hover:bg-light-btn text-white cursor-pointer"
              }`}
            >
              Explore Cabs
            </button>
          </div>
        </div>

        {/* Tagline */}
        <div className="flex justify-center items-center mt-2 pb-8">
          <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/80 text-white text-sm md:text-base lg:text-xl font-semibold">
            <FaMedal />
            <span>India’s Most Trusted Cab Rental Platform</span>
            <FaMedal />
          </div>
        </div>
      </div>

      {/* === Service Sections === */}
      <RentalServices />
      <ExploreServices />
      <ExploreTempoServices />
      <TempoTravellerCities />
      <PopularRoutes />
      <WhyChooseUs />

      
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919044019511"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
>
  <FaWhatsapp size={32} color="#fff" />
</a>

      {/* === Footer === */}
      <Footer />
    </>
  );
}
