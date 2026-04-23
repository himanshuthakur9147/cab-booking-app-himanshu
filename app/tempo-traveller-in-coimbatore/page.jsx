"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.yatratravelindia.com/#business",
      "name": "Yatra Travel India",
      "url": "https://www.yatratravelindia.com",
      "telephone": "+91-9044019511",
      "priceRange": "₹₹",
      "areaServed": { "@type": "Country", "name": "India" }
    },
    {
      "@type": "Service",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-coimbatore#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-coimbatore",
      "name": "Tempo Traveller in Coimbatore | Yatra Travel India",
      "description": "Hire tempo traveller in Coimbatore for local sightseeing, airport transfers, and outstation trips to Ooty, Munnar, Kodaikanal, Bangalore, and Chennai. Available in 9, 12, 16, and 20 seater options with experienced drivers and all inclusive pricing.",
      "provider": { "@id": "https://www.yatratravelindia.com/#business" },
      "areaServed": { "@type": "City", "name": "Coimbatore" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "16", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-coimbatore" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "231" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-coimbatore#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the tempo traveller price in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo traveller price in Coimbatore starts from Rs 3200 for a 9 seater and Rs 4200 for a 12 seater for 8 hours and 80 km local tour. All inclusive with no hidden charges." } },
        { "@type": "Question", "name": "What is the outstation tempo traveller rate from Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Outstation tempo traveller rate starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater including fuel, toll, parking, and driver allowance." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Coimbatore to Ooty?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 5500 for a 12 seater. Ooty is around 90 km and is the most popular hill station trip from Coimbatore." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Coimbatore to Munnar?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 8000 for a 12 seater. Munnar is about 150 km and is a popular weekend group travel destination." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Coimbatore to Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 17000 for a 12 seater. Chennai is around 500 km and takes 7 to 8 hours of travel." } },
        { "@type": "Question", "name": "Is luxury tempo traveller available in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers with pushback seats, AC, charging points, and premium interiors are available." } },
        { "@type": "Question", "name": "Which tempo traveller size is best for Coimbatore to Ooty trip?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater is ideal for most groups, while a 16 seater is better for groups of 13 or more for comfort on hill roads." } },
        { "@type": "Question", "name": "Is tempo traveller available from Coimbatore airport?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo traveller is available from Coimbatore airport with driver pickup and fixed fare. Advance booking is recommended." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Coimbatore to Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 13000 for a 12 seater. Distance is around 360 km and takes about 6 hours." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Coimbatore to Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 9000 for a 12 seater. Kodaikanal is around 175 km and is a popular hill station trip." } },
        { "@type": "Question", "name": "What is included in tempo traveller fare in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "Fare includes fuel, toll, parking, driver allowance, and state tax. Driver accommodation is included for multi day trips." } },
        { "@type": "Question", "name": "How can I book a tempo traveller in Coimbatore?", "acceptedAnswer": { "@type": "Answer", "text": "You can book by calling or WhatsApp on 9044019511 and sharing your travel details for quick confirmation." } }
      ]
    }
  ]
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Coimbatore",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "6 to 9 Passengers" }, { label: "Local Fare", value: "₹3,200 onwards" }, { label: "Outstation Rate", value: "₹16/km" }, { label: "Duration", value: "8 Hours / 80 Km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Small Groups", "Family Travel", "Hill Trips"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Coimbatore", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10 to 12 Passengers" }, { label: "Local Fare", value: "₹4,200 onwards" }, { label: "Outstation Rate", value: "₹21/km" }, { label: "Duration", value: "8 Hours / 80 Km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Most Popular", "Ooty Trips", "Corporate Travel"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Coimbatore", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "13 to 16 Passengers" }, { label: "Local Fare", value: "₹5,500 onwards" }, { label: "Outstation Rate", value: "₹25/km" }, { label: "Duration", value: "8 Hours / 80 Km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Office Trips", "Extended Groups"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Coimbatore", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17 to 20 Passengers" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹30/km" }, { label: "Duration", value: "8 Hours / 80 Km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Large Groups", "Wedding Parties", "Corporate Events"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Coimbatore",     img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9 to 16 Passengers" }, { label: "Local Fare", value: "₹7,000 onwards" }, { label: "Outstation Rate", value: "₹30/km" }, { label: "Features", value: "Leather Seats, Air Suspension" }, { label: "Facility", value: "Multi-Zone AC, LCD, Charging Points" }], tags: ["Premium AC", "Reclining Seats", "VIP Travel", "Long Distance"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   capacity: "9 + Driver",    ac: "AC",         ideal: "Small families and groups — local sightseeing in Coimbatore, Marudamalai Temple, short city circuits, and nearby day trips to Ooty and Valparai" },
  { vehicle: "12 Seater Tempo Traveller",  capacity: "12 + Driver",   ac: "AC",         ideal: "Medium family groups — pilgrimage tours, Coimbatore to Chennai, Ooty, Kodaikanal, and outstation travel across Tamil Nadu" },
  { vehicle: "16 Seater Tempo Traveller",  capacity: "16 + Driver",   ac: "AC",         ideal: "Large groups — corporate tours, religious groups, wedding parties, and longer routes to Bangalore, Madurai, and Tiruppur" },
  { vehicle: "20 Seater Tempo Traveller",  capacity: "20 + Driver",   ac: "AC",         ideal: "Large pilgrimage and wedding groups — spacious seating and luggage space for multi-day tours from Coimbatore across South India" },
  { vehicle: "Luxury Tempo Traveller",     capacity: "9-16 + Driver", ac: "Premium AC", ideal: "VIP guests, senior citizens, wedding functions — soft pushback seats, LED lighting, music system, and charging points for premium travel" },
  { vehicle: "Maharaja Tempo Traveller",   capacity: "9-16 + Driver", ac: "Premium AC", ideal: "Ultimate VIP travel, grand weddings, senior pilgrims — sofa seats, full recline, premium interiors, and air suspension" },
];

const LOCAL_PRICE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",  seating: "6 to 9 people",   fare: "Rs 3,200 onwards" },
  { vehicle: "12 Seater Tempo Traveller", seating: "10 to 12 people", fare: "Rs 4,200 onwards" },
  { vehicle: "16 Seater Tempo Traveller", seating: "13 to 16 people", fare: "Rs 5,500 onwards" },
  { vehicle: "20 Seater Tempo Traveller", seating: "17 to 20 people", fare: "Rs 7,500 onwards" },
  { vehicle: "Luxury Tempo Traveller",    seating: "9 to 16 people",  fare: "Rs 7,000 onwards" },
];

const OUTSTATION_ROUTES = [
  { route: "Coimbatore to Ooty",       dist: "~90 km",  time: "2.5-3 Hours", fare: "₹5,500+",  vehicle: "12 or 16 Seater" },
  { route: "Coimbatore to Munnar",     dist: "~150 km", time: "4-5 Hours",   fare: "₹8,000+",  vehicle: "12 or 16 Seater" },
  { route: "Coimbatore to Kodaikanal", dist: "~175 km", time: "4-5 Hours",   fare: "₹9,000+",  vehicle: "12 or 16 Seater" },
  { route: "Coimbatore to Bangalore",  dist: "~360 km", time: "6 Hours",     fare: "₹13,000+", vehicle: "12 or 16 Seater" },
  { route: "Coimbatore to Chennai",    dist: "~500 km", time: "7-8 Hours",   fare: "₹17,000+", vehicle: "12 or 16 Seater" },
  { route: "Coimbatore to Tirupati",   dist: "~550 km", time: "8-9 Hours",   fare: "₹18,000+", vehicle: "12 or 16 Seater" },
  { route: "Coimbatore Local Tour",    dist: "80 km",   time: "8 Hours",     fare: "₹3,200+",  vehicle: "Any Size" },
];

const LOCAL_PLACES = [
  { place: "Marudamalai Temple",            desc: "One of the most visited temples in Coimbatore. Situated on a hillock on the outskirts of the city. Best visited early morning before crowds build up." },
  { place: "Dhyanalinga Isha Yoga Centre",  desc: "A powerful spiritual destination just 30 km from Coimbatore city. Popular with family groups and corporate teams looking for a meaningful half day visit." },
  { place: "Siruvani Waterfalls",           desc: "Around 37 km from Coimbatore. One of the most scenic natural spots in the region. Best visited between June and November when water flow is at its peak." },
  { place: "VOC Park and Zoo",              desc: "Great for family groups travelling with children. Centrally located and easy to cover in 2 to 3 hours." },
  { place: "Gedee Car Museum",              desc: "Unique attraction in Coimbatore. Houses a rare collection of vintage cars and motorcycles. Worth including for groups with an interest in history and automobiles." },
  { place: "Black Thunder Theme Park",      desc: "Popular with college groups and families. Around 40 km from Coimbatore city. Best booked as a full day outing." },
  { place: "Anamalai Tiger Reserve",        desc: "Around 85 km from Coimbatore. Perfect for wildlife and nature loving groups. Safari bookings recommended in advance." },
  { place: "Velliangiri Mountains",         desc: "Known as the Kailash of the South. Popular pilgrimage and trekking destination around 40 km from Coimbatore." },
];

const BENEFITS = [
  { title: "Everyone Travels Together",    desc: "No splitting the group across multiple cabs. One vehicle, one driver, one pickup. Everyone arrives at the same time without any coordination stress." },
  { title: "Cost Effective for Groups",    desc: "Split the tempo traveller fare across 10 or 12 people and the per head cost is almost always lower than booking individual cabs. Especially on longer outstation routes like Coimbatore to Ooty or Coimbatore to Chennai." },
  { title: "Fixed Fare, No Surprises",     desc: "Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no last minute additions at the end of the day." },
  { title: "Right Size for Every Group",   desc: "9 seater, 12 seater, 16 seater, and 20 seater available. Small family or large corporate team, there is a tempo traveller in Coimbatore that fits exactly." },
  { title: "Comfortable for Long Drives",  desc: "Coimbatore connects to hill stations, temple towns, and major cities. A well maintained tempo traveller with proper AC and luggage space makes these long drives genuinely comfortable." },
  { title: "Experienced Local Drivers",    desc: "Drivers who know Coimbatore roads, hill routes to Ooty and Kodaikanal, and all major outstation highways personally." },
];

const FEATURES = [
  { title: "Pushback Seats",       desc: "Every seat reclines to a comfortable angle so passengers can actually rest during long drives. Whether the group is heading to Ooty, Chennai, or Tirupati, pushback seats make hours on the road significantly more bearable." },
  { title: "Extra Legroom",        desc: "Generous space between rows means no one is sitting with their knees pressed against the seat in front. Especially important on longer outstation drives from Coimbatore where the group spends 4 to 7 hours in the vehicle." },
  { title: "Powerful AC",          desc: "Full air conditioning throughout the cabin. Keeps everyone cool on Coimbatore's warm plains and adjusts well as the temperature drops on hill routes toward Ooty and Kodaikanal." },
  { title: "Large Luggage Space",  desc: "Dedicated luggage area handles full group bags without anyone holding anything on their lap. Families, pilgrimage groups, and corporate teams all travel with different amounts of luggage and the space accommodates all of it." },
  { title: "Experienced Driver",   desc: "Professional driver familiar with all major Coimbatore local and outstation routes. On time, reliable, and knows the roads personally." },
  { title: "Clean Well Maintained", desc: "Every tempo traveller is cleaned and checked before each trip. AC performance, tyres, and engine verified so your group always boards a fresh reliable vehicle." },
];

const LUXURY_FEATURES = [
  { feature: "Fully Reclining Leather Seats",   desc: "Genuinely comfortable seats that let passengers rest on long drives" },
  { feature: "Powerful Multi Zone AC",           desc: "Keeps the whole cabin cool even on Ooty hill climbs where temperatures shift" },
  { feature: "Air Suspension",                   desc: "Handles Nilgiri hill roads and Tamil Nadu highways without rattling the group" },
  { feature: "LCD Entertainment Screens",        desc: "Keep passengers engaged on long journeys to Chennai, Bangalore, or Tirupati" },
  { feature: "Charging Points at Every Seat",    desc: "Nobody arrives with a dead phone after 6-7 hour drives" },
  { feature: "Premium Clean Interiors",          desc: "Well maintained luxury vehicles that look and feel premium throughout the journey" },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll taxes included", "Parking charges included", "Driver day allowance included", "State tax for outstation trips", "Driver accommodation for multi-day trips"];
const EXCLUDED = ["Driver night allowance (₹500, if applicable)", "Any additional km beyond agreed package", "Coimbatore Airport parking charges (as per authority)", "Personal expenses of passengers", "Entry fees at tourist attractions"];

const FAQS = [
  { q: "What is the tempo traveller price in Coimbatore?",                    a: "Tempo traveller price in Coimbatore starts at Rs 3,200 for a 9 seater and Rs 4,200 for a 12 seater tempo traveller in Coimbatore for 8 hours and 80 km local tour. All inclusive, no hidden charges." },
  { q: "What is the outstation tempo traveller rate from Coimbatore?",        a: "Outstation tempo traveller rate from Coimbatore starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater tempo traveller. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance." },
  { q: "What is the tempo traveller fare from Coimbatore to Ooty?",           a: "Tempo traveller fare Coimbatore to Ooty starts at Rs 5,500 for a 12 seater. Ooty is 90 km from Coimbatore. Most booked hill station day trip from Coimbatore by tempo traveller." },
  { q: "What is the tempo traveller fare from Coimbatore to Munnar?",         a: "Tempo traveller Coimbatore to Munnar fare starts at Rs 8,000 for a 12 seater. Munnar is 150 km from Coimbatore via Kerala border. Popular weekend group trip and corporate retreat destination." },
  { q: "What is the tempo traveller fare from Coimbatore to Chennai?",        a: "Tempo traveller Coimbatore to Chennai fare starts at Rs 17,000 for a 12 seater. Chennai is 500 km from Coimbatore. Drive takes 7 to 8 hours. Luxury tempo traveller recommended for this long distance group trip." },
  { q: "Is luxury tempo traveller available in Coimbatore?",                  a: "Yes. Luxury tempo traveller in Coimbatore available through Yatra Travel India. Pushback reclining seats, multi zone AC, air suspension, LCD screens, charging points at every seat. Starting fare Rs 7,000 for local tour and Rs 30 per km for outstation trips." },
  { q: "Which tempo traveller size is best for Coimbatore to Ooty trip?",     a: "12 seater tempo traveller is most popular for Coimbatore to Ooty trip. For groups of 13 or more the 16 seater gives better comfort on Nilgiri hill roads. Call 9044019511 to confirm the right size." },
  { q: "Is tempo traveller available from Coimbatore airport?",               a: "Yes. Tempo traveller from Coimbatore airport available for all group sizes. Driver waiting at arrival, vehicle confirmed in advance, fixed fare. Book at least 24 hours in advance. Call 9044019511 to book." },
  { q: "What is the tempo traveller fare from Coimbatore to Bangalore?",      a: "Tempo traveller Coimbatore to Bangalore fare starts at Rs 13,000 for a 12 seater. Bangalore is 360 km from Coimbatore. Drive takes around 6 hours. Popular for corporate group travel and family trips." },
  { q: "What is the tempo traveller fare from Coimbatore to Kodaikanal?",     a: "Tempo traveller Coimbatore to Kodaikanal fare starts at Rs 9,000 for a 12 seater. Kodaikanal is 175 km from Coimbatore. Most popular weekend hill station group package from Coimbatore." },
  { q: "What is included in tempo traveller fare in Coimbatore?",             a: "Every tempo traveller fare in Coimbatore with Yatra Travel India includes fuel, toll, parking, driver allowance, and state tax for outstation trips outside Tamil Nadu. Driver accommodation included for multi day trips. No hidden charges." },
  { q: "How do I book a tempo traveller in Coimbatore?",                      a: "Call or WhatsApp Yatra Travel India on 9044019511. Share group size, travel date, and route. Tempo traveller booking in Coimbatore confirmed on same call with vehicle details and fare." }
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru", city: "Tempo Traveller in Bengaluru",  type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",      type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-chennai",   city: "Tempo Traveller in Chennai",    type: "Business Travel & Temple Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bangalore", city: "Tempo Traveller in Bangalore",  type: "IT Companies & Weekend Getaways" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ooty",                      city: "Tempo Traveller in Ooty",       type: "Hill Station Tours & Honeymoons" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerCoimbatore() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Coimbatore to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Coimbatore&apos;s Trusted Tempo Traveller — Ooty, Munnar, Kodaikanal, Chennai, Bangalore & Airport Transfers</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link><span>/</span>
          <Link href="/" className="text-[#0f6ec8] hover:underline">Services</Link><span>/</span>
          <span>Tempo Traveller in Coimbatore</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller in Coimbatore for Local Tours and Outstation Trips</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Ooty · Munnar · Kodaikanal · Bangalore · Chennai · Airport Transfer · Temple Tours · Corporate Travel</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury Options Available", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Coimbatore" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "On-Time Pickup", sub: "Pickup from your exact location" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" }, { title: "Verified Drivers", sub: "Know Coimbatore routes and hill highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller in Coimbatore</strong> for local sightseeing, hill station trips, airport transfers, and outstation travel to Ooty, Munnar, Kodaikanal, Bangalore, and Chennai. <strong>9 seater to 20 seater — including Luxury options with air suspension and reclining seats.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Coimbatore for Local Tours and Outstation Trips</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Need a tempo traveller in Coimbatore for a local tour or outstation trip? Yatra Travel India offers 9 to 20 seater tempo travellers for all group sizes. Local sightseeing, hill station trips to Ooty and Kodaikanal, outstation routes to Chennai, Bangalore, and Tirupati. Fixed fare, confirmed vehicle, experienced driver on every route. No hidden charges.</p>
          </div>
        </div>

        {/* Vehicle Cards */}
        <ST id="services">Tempo Traveller Options in Coimbatore</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Benefits */}
        <ST>Benefits of Booking Tempo Traveller in Coimbatore</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Local Tour Section */}
        <ST border="border-orange-500">Local Tour by Tempo Traveller in Coimbatore</ST>
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 mb-5">
          <p className="text-base text-gray-700 leading-relaxed mb-4">A local sightseeing package covers 8 hours and 80 km within Coimbatore. Driver waits at every stop while the group explores. Best spots to cover on a local tour in Coimbatore include Marudamalai Temple, VOC Park, Gedee Car Museum, Black Thunder Theme Park, Siruvani Waterfalls, and Dhyanalinga Isha Yoga Centre.</p>
        </div>

        {/* ── LOCAL PRICE TABLE ── */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle", "Seating", "Local Fare"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LOCAL_PRICE_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.seating}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-10 pt-2">* Local package covers 8 hours and 80 km. Driver waits at every stop. Call 9044019511 for exact quote.</p>

        {/* Places to Visit */}
        <ST border="border-blue-500">Places to Visit in Coimbatore by Tempo Traveller</ST>
        <p className="text-base text-gray-600 leading-relaxed mb-5">Coimbatore has more to offer than most people expect. Here are the best places to cover in one comfortable day by tempo traveller.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {LOCAL_PLACES.map(item => (
            <div key={item.place} className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 text-sm mb-2">{item.place}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Outstation Routes */}
        <ST border="border-[#ff6b35]" id="routes">Rent Tempo Traveller in Coimbatore for Outstation Trips</ST>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
          <p className="text-base text-gray-700 leading-relaxed">Yatra Travel India offers 9 to 20 seater tempo travellers for all major outstation routes from Coimbatore. Fixed per km fare, confirmed vehicle, experienced driver on every route. Outstation tempo traveller rate from Coimbatore starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater. Rate applies to full distance both ways and includes fuel, toll, parking, and driver allowance. Every outstation fare includes fuel, toll, parking, driver allowance, and state tax for trips outside Tamil Nadu. Driver accommodation included for multi day outstation trips.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
          <table className="w-full text-sm min-w-[600px]">
            <thead><tr className="bg-[#0f6ec8]">{["Route", "Distance", "Time", "Fare", "Vehicle", "Booking"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {OUTSTATION_ROUTES.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.time}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.fare}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100"><a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Luxury Section */}
        <ST>Why Book Luxury Tempo Traveller in Coimbatore</ST>
        <div className="bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-200 rounded-xl p-6 mb-5">
          <p className="text-base text-gray-700 leading-relaxed mb-4">Looking for a luxury tempo traveller in Coimbatore? Yatra Travel India offers premium group travel vehicles for corporate VIP travel, destination weddings, special occasions, and long outstation trips where comfort genuinely matters. Fixed fare, confirmed vehicle, professional driver on all routes.</p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">A standard tempo traveller gets the job done. But there is a version of group travel that actually feels good from the moment everyone gets in. That is what a luxury tempo traveller in Coimbatore delivers.</p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">Fully reclining leather seats that let passengers actually rest on long drives. Powerful multi zone AC that keeps the whole cabin cool even on the Coimbatore to Ooty climb where temperatures shift significantly. Air suspension that handles Nilgiri hill roads and long Tamil Nadu highway drives without rattling the group around. LCD entertainment screens for long journeys. Charging points at every seat so nobody arrives with a dead phone.</p>
          <p className="text-base text-gray-700 leading-relaxed">The difference from a standard tempo traveller is obvious within the first hour of driving. On a 6 or 7 hour drive to Chennai, Tirupati, or Bangalore that difference adds up to a completely different arrival experience. Group arrives comfortable, rested, and ready. Not exhausted from hours in a basic vehicle.</p>
        </div>
        <h3 className="font-bold text-gray-900 text-base mb-4">Luxury Tempo Traveller Features in Coimbatore</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {LUXURY_FEATURES.map(f => (
            <div key={f.feature} className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-bold text-blue-700 text-sm mb-2">{f.feature}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Airport Transfer */}
        <ST border="border-blue-500">Hire Tempo Traveller from Coimbatore Airport</ST>
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-xl p-6 mb-12">
          <p className="text-base text-gray-700 leading-relaxed mb-4">Landing in Coimbatore with a large group? Skip the cab scramble. Yatra Travel India offers tempo traveller pickup directly from Coimbatore International Airport for all group sizes. 9 to 20 seater available. Driver waiting at arrival, vehicle confirmed in advance, fixed fare with no hidden charges.</p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">No waiting around after a long flight trying to arrange multiple cabs. One vehicle, whole group, straight to the destination. Hotel, wedding venue, corporate location, or anywhere across Coimbatore and beyond.</p>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h4 className="font-bold text-blue-800 text-sm mb-3">Airport Transfer Routes from Coimbatore</h4>
            <p className="text-xs text-gray-700 mb-4">Coimbatore Airport to city centre, Coimbatore Airport to Ooty, Coimbatore Airport to Munnar, Coimbatore Airport to Kodaikanal, and all major outstation destinations covered.</p>
            <h4 className="font-bold text-blue-800 text-sm mb-3">Why Book Airport Tempo Traveller in Coimbatore</h4>
            <ul className="space-y-2">
              {["Driver waiting at arrival with name board", "Vehicle confirmed before flight lands", "Fixed fare agreed in advance", "Luggage space for full group bags", "9 to 20 seater available for every group size", "No hidden charges, no meter running"].map(item => (
                <li key={item} className="text-xs text-gray-700">✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Comparison Table */}
        <ST>Tempo Traveller Options in Coimbatore — Full Comparison</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-4 border-r border-b border-gray-100">
                    <span className={"text-xs font-bold px-2.5 py-1 rounded-full border " + (row.ac === "Premium AC" ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200")}>{row.ac}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Features */}
        <ST>Features of Tempo Traveller in Coimbatore</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Inclusions */}
        <ST>Fare Inclusions and Exclusions</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Included</span></div>
            <ul className="list-none m-0 p-0">{INCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
          </div>
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span></div>
            <ul className="list-none m-0 p-0">{EXCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
          </div>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Coimbatore</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Coimbatore Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Local tours, Ooty trips, Munnar getaways, airport transfers, Chennai or Bangalore — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"><FaPhoneAlt size={12} /> Call Now — +91 90440 19511</a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2"><FaWhatsapp size={14} /> WhatsApp Us</a>
          </div>
        </div>

        {/* Network */}
        <ST>Our Pan-India Tempo Traveller Network</ST>
        <p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India&apos;s major cities with premium group travel services.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {NETWORK.map(n => (
            <a key={n.href} href={n.href} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] hover:shadow-sm transition-all group">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"><FaBus className="text-[#0f6ec8] text-sm" /></div>
              <div>
                <div className="text-sm font-bold text-gray-900 group-hover:text-[#0f6ec8] transition-colors">{n.city}</div>
                <div className="text-xs text-gray-500 mt-0.5">{n.type}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
      <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><FaWhatsapp size={26} color="#fff" /></a>
      <a href="tel:+919044019511" aria-label="Call Now" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f6ec8] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><FaPhoneAlt size={20} color="#fff" /></a>
      {toast.show && <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl z-[9999] border-l-4 border-[#ff6b35] whitespace-nowrap">{toast.msg}</div>}
    </div>
  );
}

function VehicleCard({ vehicle, onSelect }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {vehicle.img ? <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} /> : <div className="w-full h-full flex items-center justify-center"><FaBus className="text-[#0f6ec8] opacity-20 text-5xl" /></div>}
        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">{vehicle.badge}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">
          {vehicle.specs.map(s => <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed"><span className="font-bold">{s.label}:</span> {s.value}</p>)}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map(tag => <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>)}
        </div>
        <button onClick={() => onSelect(vehicle.title)} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">
          Book {vehicle.badge} Tempo
        </button>
      </div>
    </div>
  );
}
