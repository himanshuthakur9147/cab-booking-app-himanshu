"use client";
import Head from "next/head";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import { FaClock, FaMedal,FaShieldAlt,FaUserCheck,FaWhatsapp } from "react-icons/fa";
import RouteLoader from "@/components/Loader/RouteLoader";
import Footer from "@/components/footer/Footer";
import AuthInit from "@/components/login/AuthInit";
import RentalServices from "@/components/home/RentalServices";
import ExploreServices from "@/components/home/ExploreServices";
import ExploreTempoServices from "@/components/home/ExploreTempoServices";
import data from "@/components/cityData.json"
import metaData from "@/components/tempo-traveller/metaData.json"
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
import PrayagrajPage from "@/components/tempo-traveller/PrayagrajPage";
import ShimlaPage from "@/components/tempo-traveller/ShimlaPage";
import BangalorePage from "@/components/tempo-traveller/BangalorePage";
import TempoTravellerAmritsar from "@/components/tempo-traveller/AmritsarPage";
import IndorePage from "@/components/tempo-traveller/IndorePage";
import PatnaPage from "@/components/tempo-traveller/PatnaPage";
import DelhiPage from "@/components/tempo-traveller/DelhiPage";
import Script from "next/script";
import SuratPage from "./SuratPage";
import BhopalPage from "./BhopalPage";
import AgraPage from "./AgraPage";
import PunePage from "./PunePage";
import KolkataPage from "./KolkataPage";
import RanchiPage from "./RanchiPage";
import GurgaonPage from "./GurgaonPage";
import NoidaPage from "./NoidaPage";
import AhmedabadPage from "./AhmedabadPage";
import MaduraiPage from "./MaduraiPage";
import TirupatiPage from "./TirupatiPage";
import JabalpurPage from "./JabalpurPage";
import RishikeshPage from "./RishikeshPage";
import VaranasiToAyodhyaPage from "./VaranasiToAyodhyaPage";
import { HiArrowRight } from "react-icons/hi";


export default function TempoTravellerClient({cityData, cityname, city}) {
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

  console.log("cityData",cityData)
  return (
    <>

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
  {/* === HERO SECTION WITH DYNAMIC BACKGROUND === */}
      <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-20 px-4">
        {/* Optimized Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/bg.webp')`,
          }}
        >
         
        </div>
        
        {/* Headline Section */}
        <div className="text-center z-10 mb-6 mt-4">
          <h1 className="uppercase font-black text-3xl md:text-6xl text-white tracking-tighter drop-shadow-2xl">
            <TypewriterText />
          </h1>
       
        </div>

        {/* === THE BOOKING ENGINE (The Card from the image) === */}
        <div className="w-[80%] md:w-[50%] max-w-3xl z-10 ">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100  w-full pb-12">

         
           <BookingTabs />
           {/* THE IMPORTANT EXPLORE BUTTON (Restored & Enhanced) */}
          <div className="flex justify-center -mt-10 relative z-30">
            <button
              onClick={onSubmit}
              disabled={!pickupLocation?.trim()}
              className={`group flex items-center gap-4 px-12 md:px-20 py-3 md:py-4 rounded-2xl font-black uppercase text-xl md:text-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.3)] transform active:scale-95 ${
                !pickupLocation?.trim()
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-[#254997] hover:bg-orange-500 text-white hover:shadow-orange-500/40"
              }`}
            >
              Search Cabs
              <HiArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </div>
           </div>
         
        </div>

          {/* TEXT WRITTEN AFTER THE FORM (Trust Strip from reference image) */}
           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] md:w-[65%]">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Safe & Secure</h4>
                  <p className="text-gray-300 text-[10px] uppercase font-medium">Verified Drivers & Vehicles</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  <FaUserCheck />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Expert Chauffeurs</h4>
                  <p className="text-gray-300 text-[10px] uppercase font-medium">Professional & Punctual</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">24/7 Support</h4>
                  <p className="text-gray-300 text-[10px] uppercase font-medium">We are always here for you</p>
                </div>
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

{cityname==="prayagraj" && <PrayagrajPage/> }
{cityname==="shimla" && <ShimlaPage/> }
{cityname==="bangalore" && <BangalorePage/> }
{cityname==="amritsar" && <TempoTravellerAmritsar/> }
{cityname==="indore" && <IndorePage/> }
{cityname==="patna" && <PatnaPage/> }
{cityname==="delhi" && <DelhiPage/> }
{cityname==="surat" && <SuratPage/> }
{cityname==="bhopal" && <BhopalPage/> }
{cityname==="agra" && <AgraPage/> }
{cityname==="pune" && <PunePage/> }
{cityname==="kolkata" && <KolkataPage/> }
{cityname==="ranchi" && <RanchiPage/> }
{/* 21-02-2026 new pages added */}
{cityname==="gurgaon" && <GurgaonPage/> }
{cityname==="noida" && <NoidaPage/> }
{cityname==="ahmedabad" && <AhmedabadPage/> }
{cityname==="madurai" && <MaduraiPage/> }
{cityname==="tirupati" && <TirupatiPage/> }
{cityname==="jabalpur" && <JabalpurPage/> }
{cityname==="rishikesh" && <RishikeshPage/> }
{cityname === "varanasi-to-ayodhya" && <VaranasiToAyodhyaPage />}
    

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
