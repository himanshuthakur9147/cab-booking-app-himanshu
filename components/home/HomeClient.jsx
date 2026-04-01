"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBooking } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import BookingTabs from "@/components/BookingTabs";
import { FaClock, FaMedal,FaStar,FaChevronRight, FaPlus, FaShieldAlt, FaUserCheck,FaBus, FaIdCard, FaFileInvoiceDollar, FaCheckCircle, FaRoute, FaPhoneAlt, FaWhatsapp,  FaCalendarCheck, 
  FaHeadset, 
  FaMapMarkerAlt, 
  FaQuestionCircle, 
  FaMoneyBillWave,  
  FaUserCog,FaPaperPlane ,FaEdit, FaCrown, FaUserPlus, FaBusAlt, FaCarSide   } from "react-icons/fa";

import { FcGoogle } from 'react-icons/fc';
import { HiArrowRight } from "react-icons/hi"; // Added for better CTA
import RouteLoader from "@/components/Loader/RouteLoader";
import Footer from "@/components/footer/Footer";
import AuthInit from "@/components/login/AuthInit";
import RentalServices from "@/components/home/RentalServices";
import ExploreServices from "@/components/home/ExploreServices";
import ExploreTempoServices from "@/components/home/ExploreTempoServices";
import PopularRoutes from "@/components/home/PopularRoutes";
import TempoTravellerCities from "@/components/home/TempoTravellerCities";
import { TypewriterText } from "@/components/home/TypewriterText";
//import WhyChooseUs from "@/components/home/WhyChooseUs";
import GoogleMapsScriptLoader from "@/components/googleComponents/GoogleMapsScriptLoader";
import SEOJsonLD from "@/components/SEOJsonLD";
import Script from "next/script";
import CTASection from "../CTASection";

export default function HomeClient() {
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
    }, 1000);
  };

  return (
    <>
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yatra Travel India",
            "url": "https://www.yatratravelindia.com",
            "logo": "https://www.yatratravelindia.com/logo.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9044019511",
              "contactType": "Customer Service"
            },
          }),
        }}
      />
      <SEOJsonLD />
      <GoogleMapsScriptLoader onLoad={() => console.log("🟢 Google Maps ready.")} />
      <AuthInit />
      <Navbar />
      {loader && <RouteLoader />}

     {/* === HERO SECTION WITH DYNAMIC BACKGROUND === */}
      <div className="relative min-h-screen flex flex-col items-center justify-start pt-6 md:pt-20 pb-20 px-4">
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

      {/* === Service Sections === */}
      <div className="bg-slate-50 relative -mt-10 rounded-t-[3rem] pt-10">
        <RentalServices />
        <ExploreServices />
        <ExploreTempoServices />
        <TempoTravellerCities />
        <PopularRoutes />
        <WhyChooseUs />

        <BookingProcess />
        <Testimonials />
        <AboutAgency />
        <WhyChooseUsCards/>
        <NewsletterSubscription />
       
        <BestCabService/>
        <PromoBanners/>
        <CityFaqSection/>

      </div>

      {/* WhatsApp Floating Button - Enhanced */}
      <a
        href="https://wa.me/919044019511"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all hover:-translate-y-2 active:scale-90 flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Need help? Chat with us!
        </span>
        <FaWhatsapp size={28} color="#fff" />
      </a>
<CTASection/>
      <Footer />

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

const BookingProcess = () => {
  const steps = [
    {
      title: "Choose your vehicle",
      description: "Select the seating capacity and category (Standard, Luxury, or Maharaja Seats).",
      icon: <FaBus className="text-2xl text-[#001D3D]" />,
    },
    {
      title: "Share your trip details",
      description: "Pickup location (hotel/home/Airport/railway station), date, destination, and any request for trip planning.",
      icon: <FaIdCard className="text-2xl text-[#001D3D]" />,
    },
    {
      title: "Get a quote instantly",
      description: "We will send you pricing and availability within minimum time to let you take decision.",
      icon: <FaFileInvoiceDollar className="text-2xl text-[#001D3D]" />,
    },
    {
      title: "Confirm your booking",
      description: "Lock it in with a small advance payment.",
      icon: <FaCheckCircle className="text-2xl text-[#001D3D]" />,
    },
    {
      title: "Travel on the Day of Journey",
      description: "Sit back and enjoy your journey with a professional driver and a clean, well-maintained vehicle.",
      icon: <FaRoute className="text-2xl text-[#001D3D]" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          How to Book Tempo Traveller in Delhi - <span className="text-blue-600">Simple Process</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          In the digital era, tempo traveller booking is very convenient and can get done without visiting travel agent's office. 
          There are several ways to rent our services while sitting at your home or any location. 
          Follow these simple steps to get your vehicle at your location.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-[#001D3D] mb-3 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text & Buttons */}
        <div className="space-y-6">
          <p className="text-gray-700 text-sm italic">
            Fill the Enquiry form with 4 simple fields and get a call back or answer to your query over email. For quick query and response
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#0056b3] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#004494] transition-colors">
              <FaPhoneAlt size={14} /> Call Now
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition-colors">
              <FaWhatsapp size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const reviews = [
    {
      name: "Rohit Kumar",
      date: "2 years ago",
      rating: 5,
      text: "Very good service. Keep it up",
      color: "bg-blue-600"
    },
    {
      name: "Radhika Bhatti",
      date: "2 years ago",
      rating: 5,
      text: "Mr. Shyopal did a great job showing us around the city. He is very experienced and professional. Highly recommend for Jaipur sightseeing.",
      color: "bg-pink-600"
    },
    {
      name: "Naresh Nama",
      date: "2 years ago",
      rating: 5,
      text: "Nice 👍 very punctual and clean car.",
      color: "bg-orange-600"
    },
    {
      name: "Surbhi Kumar",
      date: "2 years ago",
      rating: 5,
      text: "Great experience with MG Taxi.. Professional staff, clean and tidy cars.. flawless services.. I will definitely recommend it to my family.",
      color: "bg-purple-600"
    },
    {
      name: "Mukesh Gupta",
      date: "2 years ago",
      rating: 5,
      text: "Suresh has done excellent service and shown us all the places we wanted to see. He is very polite and sincere.",
      color: "bg-emerald-600"
    },
    {
      name: "Abhishek Verma",
      date: "2 years ago",
      rating: 5,
      text: "Excellent service and well maintained cars with fair pricing. Best outstation taxi service in Agra.",
      color: "bg-indigo-600"
    },
    {
      name: "Rizwan Borah",
      date: "2 years ago",
      rating: 5,
      text: "Our 3 day trip to Jaipur was made successful by Mr.Suresh. he was very patient and guided us thoroughly during these 3 days.",
      color: "bg-red-600"
    },
    {
      name: "Mohit Chauhan",
      date: "2 years ago",
      rating: 5,
      text: "Suresh gurjar is a very nice and efficient driver. Very safe for long journeys.",
      color: "bg-teal-600"
    },
    {
      name: "Shaila Ankolekar",
      date: "2 years ago",
      rating: 5,
      text: "If I could give more stars, I would. The team at MG Taxi are punctual, kind, and helpful. Thank you for the hospitality!",
      color: "bg-rose-600"
    },
    {
      name: "Kanhaiya Gurjar",
      date: "2 years ago",
      rating: 5,
      text: "Reliable and safe experience, highly recommended for outstation trips and airport drops.",
      color: "bg-yellow-600"
    }
  ];

  return (
    <section className="py-12 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Google Header */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="uppercase tracking-widest text-sm text-gray-500">Excellent</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span className="text-gray-800">51 reviews</span>
            <span className="flex items-center gap-1 font-normal text-gray-500">
              <FcGoogle className="text-2xl" /> Google
            </span>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="break-inside-avoid bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  {/* Letter Avatar instead of Img */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-gray-900 leading-tight">{review.name}</h4>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
                <FcGoogle className="text-xl shrink-0" />
              </div>

              <div className="flex text-yellow-400 text-sm mb-2">
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
              </div>

              <p className="text-[13px] text-gray-700 leading-relaxed font-medium">
                {review.text}
              </p>
              
              {review.text.length > 80 && (
                <button className="text-[12px] text-gray-400 font-bold mt-2 hover:underline">
                  Read more
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const CityFaqSection = () => {
  const cities = [
    "Jaipur", "Haridwar", "Dehradun", "Ahmedabad", "Mumbai",
    "Chandigarh", "Varanasi", "Manali", "Ayodhya", "Amritsar",
    "Ujjain", "Chennai", "Jodhpur", "Agra", "Mathura"
  ];

  const faqs = [
    {
      question: "Is the Tempo Traveller easily available for booking anytime?",
      answer: "Yes, our services are available 24/7. We recommend booking at least 24-48 hours in advance during peak seasons to ensure your preferred vehicle category is reserved."
    },
    {
      question: "What is the cost of hiring a tempo traveller in Delhi?",
      answer: "The cost depends on the seating capacity (9, 12, 16, or 26 seater) and the luxury category. Generally, prices start from ₹20 - ₹30 per kilometer for outstation trips."
    },
    {
      question: "What is the tempo traveller rental cost for Delhi City tour?",
      answer: "For a local Delhi city tour, we offer fixed 8-hour/80-km or 12-hour/120-km packages. This typically includes fuel and driver charges, excluding parking and toll fees."
    }
  ];

  return (
    <section className="py-12 px-4 bg-white max-w-7xl mx-auto font-sans">
      
      {/* OTHER CITIES SECTION */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Looking for Tempo Traveller Services in <span className="text-blue-600">Other Cities</span>
        </h2>
        <p className="text-blue-600 font-medium mb-8 text-sm italic">
          Choose Your City for Tempo Traveller Hire
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link 
              key={city}
              href={`/tempo-traveller-in-${city.toLowerCase()}`}
              className="flex items-center justify-between px-4 py-2.5 border border-gray-300 rounded-full hover:border-[#0056b3] hover:bg-blue-50 transition-all group"
            >
              <span className="text-[13px] font-semibold text-gray-700 group-hover:text-[#0056b3]">
                {city} Tempo Traveller
              </span>
              <div className="bg-blue-600 rounded-full p-1.5 flex items-center justify-center">
                <FaChevronRight className="text-white text-[8px]" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link 
            href="/"
            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold text-sm uppercase shadow-md hover:bg-blue-700 transition-colors"
          >
            Explore All Cities <FaChevronRight size={10} className="bg-white text-blue-600 rounded-full p-0.5" />
          </Link>
        </div>
      </div>

      {/* FAQ SECTION - THEME BLUE */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          FAQ for <span className="text-blue-600">Tempo Traveller Service</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              {/* Question Header */}
              <div className="bg-[#F8FAFC] px-5 py-4 flex items-center justify-between border-b border-gray-100">
                <h3 className="text-[15px] font-bold text-[#001D3D]">
                  {faq.question}
                </h3>
                <FaPlus className="text-blue-600 text-sm shrink-0" />
              </div>
              {/* Answer Content - Always Visible */}
              <div className="px-5 py-4 bg-white border-l-4 border-blue-600">
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};


const WhyChooseUs = () => {
  const features = [
    { title: "Flexible Booking", icon: <FaCalendarCheck /> },
    { title: "Transparent Pricing", icon: <FaMoneyBillWave /> },
    { title: "24/7 Support", icon: <FaHeadset /> },
    { title: "Fleet Variety", icon: <FaBus /> },
    { title: "Anywhere, Anytime", icon: <FaMapMarkerAlt /> },
    { title: "Genuine Rates Always", icon: <FaShieldAlt /> },
    { title: "Ask your query", icon: <FaQuestionCircle /> },
    { title: "Choose as per Needs", icon: <FaUserCog /> },
  ];

  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content & Features */}
        <div className="w-full lg:w-1/2">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D3D] leading-tight">
              Why Choose Our Tempo Traveller <br />
              <span className="text-blue-600">Rental Services in Delhi?</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg shadow-md group-hover:bg-[#001D3D] transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Modern Blue Banner Wrapper */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-[#001D3D] p-8 md:p-12 shadow-2xl h-[400px] flex items-center justify-center">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center lg:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                Tempo <br /> Traveller
              </h3>
              <p className="inline-block bg-yellow-400 text-[#001D3D] px-4 py-1 rounded font-black text-xl md:text-2xl uppercase mt-2">
                Rental Service
              </p>
              
              {/* Image Placeholder - Use your transparent Tempo Traveller PNG here */}
             
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const AboutAgency = () => {
  return (
    <section className="py-16 px-6 bg-white max-w-7xl mx-auto font-sans leading-relaxed">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#001D3D] mb-8">
        Best Tour and <span className="text-[#0056b3]">Travel Agency</span> in Delhi
      </h2>

      <div className="space-y-6 text-gray-700 text-[15px] md:text-base">
        <p>
         Yatra Travel India is a 
          <span className="font-bold text-[#001D3D]"> leading tour and travel agency in Delhi </span> 
          specialized in offering custom and well-designed 
          <span className="font-bold text-[#0056b3]"> North India Tour Packages </span> 
          which covers best tourist destinations with diverse attractions. Providing our best services 
          in tour and transport services since 2000, we have achieved a position as one of the best 
          inbound tour operators of India.
        </p>

        <p>
          Looking for the ultimate travel experience? Look no further! Our travel agency in India is 
          your gateway to exciting adventures and unforgettable journeys. With a team of expert travel 
          enthusiasts and local guides, we curate exceptional itineraries that cater to all interests 
          and budgets. From exploring the historical marvels of Delhi to embarking on thrilling escapades 
          in exotic destinations, we have got it all covered. Enjoy hassle-free bookings, comfortable 
          accommodations, and seamless transportation as we take care of every detail. Experience 
          personalized service, genuine hospitality, and a commitment to excellence with 
          <span className="font-bold text-[#0056b3]"> Car Rental in Delhi with driver.</span>
        </p>

        <p>
          India is best destination for various tour segments as Luxury tour, Group tour, corporate tour, 
          Leisure tour, Heritage tour, trekking tour, and 
          <span className="font-bold text-[#0056b3]"> adventure tour. </span> 
          We facilitate our best services to travellers visiting India from the corners of the world. 
          Our customer centric, innovative packages, brief of destination, personalized service, 
          operational excellence, and value-oriented pricing keep us apart in this competitive sector 
          and make us stand as 
          <span className="font-bold text-[#001D3D]"> best tour operator in India. </span> 
          We take care of your tour with best quality of services and customization of travel packages. 
          Our budget tour packages in India will let you explore India with unlimited fun and fewer 
          burdens on your travel budget.
        </p>

        <p>
          Our transport rental services and well-designed tour packages for local Delhi Tour and 
          outstation trips from Delhi is very popular among tourists.
        </p>

        <p>
          Come to India and explore heritage and experience the excellence with our personalized services. 
          The Best part about our company is we believe in quality of service and guest feedback that 
          helps as moral enhancer and improvement factors. Our team works round the clock to make each 
          tour successful. We do not believe in earning, they rather we believe in winning customer trust 
          and heart, that guest can recommend our company to their near and dear one.
        </p>
      </div>
    </section>
  );
};


const NewsletterSubscription = () => {
  return (
    <div className="w-full bg-[#001D3D] py-10 md:py-16 px-4 md:px-12 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Content & Icon */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          {/* Animated Email Icon - Visible from md up */}
          <div className="relative shrink-0 hidden md:block">
            <div className="w-16 h-16 bg-[#0056b3] rounded-full flex items-center justify-center text-white text-2xl animate-pulse z-10 relative">
              <FaPaperPlane />
            </div>
            {/* Pulsing rings */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-[#0056b3] rounded-full animate-ping opacity-25"></div>
          </div>
          
          <div className="max-w-md">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Your Travel Journey Starts Here
            </h3>
            <p className="text-gray-300 mt-2 text-sm md:text-lg font-medium opacity-90">
              Sign up and we’ll send the best deals to you
            </p>
          </div>
        </div>

        {/* Right Side: Input and Button */}
        {/* Fix: removed 'rounded-full' from the container on mobile to prevent distortion */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-transparent sm:bg-white/10 sm:p-1.5 sm:rounded-full sm:backdrop-blur-md border border-white/10 sm:border-none p-4 rounded-2xl">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full sm:w-[300px] md:w-[350px] px-6 py-4 rounded-full sm:rounded-l-full sm:rounded-r-none border-none bg-white/10 sm:bg-transparent text-white placeholder:text-gray-400 outline-none focus:ring-0 transition-all font-semibold"
          />
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0056b3] text-white rounded-full font-bold text-base md:text-lg hover:bg-[#004494] transition-all shadow-lg active:scale-95 whitespace-nowrap">
            Subscribe Now
          </button>
        </div>

      </div>
    </div>
  );
};

const WhyChooseUsCards = () => {
  const features = [
    {
      title: "Easy & Fast Booking",
      description: "Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality.",
      icon: <FaEdit className="text-3xl text-white" />,
    },
    {
      title: "Many Pickup Location",
      description: "Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective.",
      icon: <FaCrown className="text-3xl text-white" />,
    },
    {
      title: "Customer Satisfaction",
      description: "Globally user centric method interactive. Seamlessly revolutionize unique portals corporate collaboration.",
      icon: <FaUserCheck className="text-3xl text-white" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-[#001D3D] mb-2">
            Why Choose Us
          </h2>
          <div className="flex justify-center mb-4">
             {/* The double curved line from the design in blue */}
             <div className="flex flex-col gap-1">
                <div className="w-12 h-1 bg-blue-400 rounded-full opacity-50"></div>
                <div className="w-12 h-1 bg-blue-600 rounded-full ml-2"></div>
             </div>
          </div>
          <p className="text-gray-500 font-medium italic">
            We are innovative and passionate about the work we do.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon Container - Now using Blue Theme */}
              <div className="bg-[#001D3D] w-full h-32 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#0056b3] transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-[#001D3D] mb-4 group-hover:text-[#0056b3] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const BestCabService = () => {
const destinations = [
    {
      title: "Delhi To Agra",
      taxis: "100+ Taxis",
      // Taj Mahal, Agra
  img: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaGl8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Gurgaon Taxi Service",
      taxis: "100+ Taxis",
      // Gurgaon Cityscape
      img: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Delhi To Nainital",
      taxis: "100+ Taxis",
      // Nainital Lake/Mountains
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Noida To Agra",
      taxis: "100+ Taxis",
      // Alternate Agra View
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyYXxlbnwwfHwwfHx8MA%3D%3D",
    }
  ];

  return (
    <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-[#001D3D] mb-4">
          Best Cab Service In <span className="text-[#0056b3]">Gurgaon, Delhi And Noida</span>
        </h2>
        <p className="text-gray-600 text-lg font-medium">
          Yatra Travel India offers city taxis, inter-city cabs, and local cabs at hourly packages.
        </p>
        <div className="w-24 h-1.5 bg-[#0056b3] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, index) => (
          <div 
            key={index} 
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={dest.img} 
              alt={dest.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3D] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white text-2xl font-black mb-2 tracking-wide">
                {dest.title}
              </h3>
              <div className="inline-block bg-[#0056b3] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                {dest.taxis}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-4 border-[#0056b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none m-2"></div>
          </div>
        ))}
      </div>

      {/* Trust Footer */}
      <div className="mt-16 py-8 border-t border-gray-100 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
         <span className="text-[#001D3D] font-bold text-xl uppercase tracking-widest">Safe Journey</span>
         <span className="text-[#001D3D] font-bold text-xl uppercase tracking-widest">Verified Drivers</span>
         <span className="text-[#001D3D] font-bold text-xl uppercase tracking-widest">Best Pricing</span>
      </div>
    </section>
  );
};


const PromoBanners = () => {
  const bannerData = [
    {
      title: "SAFE",
      subtitle: "RELIABLE",
      caption: "AFFORDABLE",
      // Clean white van/traveler image
      img: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "REFER",
      subtitle: "RIDE",
      caption: "REWARD",
      extra: "Earn Upto ₹ 2000/- Daily",
      // Happy group of friends/travelers
      img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Make Memories",
      subtitle: "Not Miles!",
      // Scenic tour bus
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Banner 1 */}
        <div className="relative overflow-hidden rounded-2xl bg-[#001D3D] p-6 shadow-xl h-64 flex items-center group cursor-pointer transition-all hover:-translate-y-1">
          <img 
            src={bannerData[0].img} 
            alt="Safety" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
          />
          <div className="relative z-10 text-right w-full">
            <h3 className="text-4xl font-black text-white leading-none tracking-tighter uppercase mb-1">
              {bannerData[0].title}
            </h3>
            <p className="text-2xl font-bold text-gray-200 uppercase leading-tight">
              {bannerData[0].subtitle}
            </p>
            <p className="inline-block bg-yellow-400 text-[#001D3D] px-3 py-1 rounded font-extrabold text-sm uppercase mt-2 shadow-lg">
              {bannerData[0].caption}
            </p>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0056b3] p-6 shadow-xl h-64 flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1">
          <img 
            src={bannerData[1].img} 
            alt="Referral" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
          />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">
              {bannerData[1].title}
            </h3>
            <p className="text-xl font-bold text-gray-200 uppercase leading-tight">
              {bannerData[1].subtitle}
            </p>
            <p className="inline-block bg-yellow-400 text-[#001D3D] px-3 py-1 rounded font-extrabold text-sm uppercase mt-1 shadow-lg">
              {bannerData[1].caption}
            </p>
          </div>
          <p className="relative z-10 text-center text-sm font-semibold text-white bg-white/10 px-4 py-2 rounded-full border border-white/20 mt-4 backdrop-blur-sm">
            {bannerData[1].extra}
          </p>
        </div>

        {/* Banner 3 */}
        <div className="relative overflow-hidden rounded-2xl bg-[#001D3D] p-6 shadow-xl h-64 flex items-center justify-end group cursor-pointer transition-all hover:-translate-y-1">
          <img 
            src={bannerData[2].img} 
            alt="Memories" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
          />
          <div className="relative z-10 text-center w-full">
            <h3 className="text-3xl font-black text-white leading-tight">
              {bannerData[2].title}
            </h3>
            <p className="text-xl font-bold text-gray-200">
              {bannerData[2].subtitle}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

