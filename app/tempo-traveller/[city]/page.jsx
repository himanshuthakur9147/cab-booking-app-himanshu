"use client";
import Head from "next/head";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
import data from "@/components/cityData.json"
import TempoTravellerCities from "@/components/home/TempoTravellerCities";
import { TypewriterText } from "@/components/home/TypewriterText";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GoogleMapsScriptLoader from "@/components/googleComponents/GoogleMapsScriptLoader";
import SEOJsonLD from "@/components/SEOJsonLD";
import FeatureCards from "@/components/tempo-traveller/FeatureCards";
import HeaderSection from "@/components/tempo-traveller/HeaderSection";
import TempoTableSection from "@/components/tempo-traveller/TempoTableSection";
import TempoImageCards from "@/components/tempo-traveller/TempoImageCards";
import TempoSeatConfig from "@/components/tempo-traveller/TempoSeatConfig";
import WhyChooseYatra from "@/components/tempo-traveller/WhyChooseYatra";
import PopularRoutesSection from "@/components/tempo-traveller/PopularRoutesSection";
import FaqTempoTraveller from "@/components/tempo-traveller/FaqTempoTraveller";


export default function Page() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [serviceType, setServiceType] = useState("One Way");

// Dynamic content for city-wise pages
    const {city}= useParams();
    const cityname=city.replace("tempo-traveller-in-","");
    const cityData=data[cityname.toLowerCase()];

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

  console.log("cityData",cityData)
  return (
    <>
    <Head>
  <title>Tempo Traveller in {cityname.toUpperCase()} | Starting @ Rs.22/Km – Yatra Travel India</title>
  <meta name="description" content={`Book Tempo Traveller in ${cityname} for local sightseeing, outstation trips, weddings, and corporate travel. Choose 9, 12, 17, 20 and 26 seater AC tempo travellers at the best price. Clean vehicles, expert drivers, transparent fares, and 24×7 support. Rent a luxury Tempo Traveller in ${cityname} starting at affordable per-km rates.`} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yatratravelindia.com/" />

  {/* JSON-LD Structured Data */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Yatra Travel India",
      "image": "https://yatratravelindia.com/logo.jpeg",
      "url": `https://yatratravelindia.com/tempo-traveller-in-${cityname.toLowerCase()}`,
      "description": `Tempo Traveller service in ${cityname}. 9–26 seater AC tempo travellers for local & outstation.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityname,
        "addressRegion": cityname,
        "addressCountry": "IN"
      },
      "telephone": "+91-9876543210",
      "priceRange": "₹22/km onwards",
      "areaServed": cityname
    })
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

     {/* Feature Icons */}
     <FeatureCards/>
{cityData && <div key={city}>


     {/* Header Section Content */}
               
     <HeaderSection cd={cityData}/>

     {/* Tempo traveller Options Table Section */}
     <TempoTableSection cd={cityData} city={city}/>

      {/* Tempo Images Card Section */}
      <TempoImageCards cd={cityData}/>

      {/* Tempo Seat Config Section */}
      <TempoSeatConfig cd={cityData} city={city}/>

      {/* Why Choose Yatra Travel India for Tempo Traveller in Lucknow? */}
      <WhyChooseYatra cd={cityData}/>

      {/* Popular Routes Section */}
      <PopularRoutesSection cd={cityData}/>

      {/* FAQs Section */}
      <FaqTempoTraveller cd={cityData}/>
</div>

}
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
