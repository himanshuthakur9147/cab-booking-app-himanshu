"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Puri",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "Rs 7,200 onwards" }, { label: "Local Package", value: "8 hrs / 80 km" }, { label: "Outstation Rate", value: "Rs 30/km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Jagannath Darshan", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Puri", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "Rs 7,900 onwards" }, { label: "Local Package", value: "8 hrs / 80 km" }, { label: "Outstation Rate", value: "Rs 30/km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Konark Tour", "Jagannath Darshan", "Family Groups"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Puri", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "Rs 9,500 onwards" }, { label: "Local Package", value: "8 hrs / 80 km" }, { label: "Outstation Rate", value: "Rs 35/km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Chilika Lake", "Corporate Tours", "Group Travel"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Puri", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "Rs 10,500 onwards" }, { label: "Local Package", value: "8 hrs / 80 km" }, { label: "Outstation Rate", value: "Rs 40/km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Rath Yatra Groups", "Large Pilgrimage", "Max Luggage"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Puri",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Local Package", value: "8 hrs / 80 km" }, { label: "Outstation Rate", value: "Rs 45/km" }, { label: "Facility", value: "Multi-Zone AC, Air Suspension, LCD" }], tags: ["Premium AC", "Air Suspension", "LCD Screens", "Elderly Pilgrims"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Puri",  capacity: "6–9 + Driver",   ac: "AC",         ideal: "Small groups — Jagannath Temple darshan, Puri Beach, Lokanath Temple, and Narendra Tank local sightseeing" },
  { vehicle: "12 Seater Tempo Traveller in Puri", capacity: "10–12 + Driver", ac: "AC",         ideal: "Medium family groups — Jagannath darshan plus Konark Sun Temple, Chilika Lake, and Raghurajpur village day trips" },
  { vehicle: "16 Seater Tempo Traveller in Puri", capacity: "13–16 + Driver", ac: "AC",         ideal: "Large groups — corporate outings, college trips, full day Puri sightseeing including Konark, Chilika, and Bhubaneswar" },
  { vehicle: "20 Seater Tempo Traveller in Puri", capacity: "17–20 + Driver", ac: "AC",         ideal: "Large pilgrimage groups — Rath Yatra travel, religious group tours, and outstation trips to Bhubaneswar and Cuttack" },
  { vehicle: "Luxury Tempo Traveller in Puri",    capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "Elderly pilgrims, VIP groups — multi zone AC, air suspension, reclining seats for comfortable Jagannath darshan tours" },
];

const DARSHAN_FARE = [
  { vehicle: "9 Seater Tempo Traveller",  seats: "6 to 9 people",   fare: "Rs 7,200 onwards" },
  { vehicle: "12 Seater Tempo Traveller", seats: "10 to 12 people", fare: "Rs 7,900 onwards" },
  { vehicle: "16 Seater Tempo Traveller", seats: "13 to 16 people", fare: "Rs 9,500 onwards" },
  { vehicle: "20 Seater Tempo Traveller", seats: "17 to 20 people", fare: "Rs 10,500 onwards" },
];

const ROUTES_TABLE = [
  { route: "Puri to Konark Sun Temple",   dist: "~35 km", vehicle: "12 or 16 Seater" },
  { route: "Puri to Chilika Lake",        dist: "~50 km", vehicle: "12 or 16 Seater" },
  { route: "Puri to Bhubaneswar",         dist: "~60 km", vehicle: "12 or 16 Seater" },
  { route: "Puri to Cuttack",             dist: "~95 km", vehicle: "12 or 16 Seater" },
  { route: "Puri to Raghurajpur Village", dist: "~14 km", vehicle: "12 Seater" },
  { route: "Puri to Dhauli Giri",         dist: "~65 km", vehicle: "12 or 16 Seater" },
];

const USE_TAGS = ["Jagannath Temple Darshan", "Puri Beach Sunrise", "Konark Sun Temple", "Chilika Lake Boat Ride", "Rath Yatra Pilgrimage", "Raghurajpur Artist Village", "Sakshigopal Temple", "Lokanath Temple Visit", "Bhubaneswar Day Trip", "Corporate Beach Outings", "College Group Tours", "Swargadwar Beach Visit"];

const PLACES = [
  { title: "Jagannath Temple",           desc: "One of the four sacred Dhams in India. Most visited religious site in Puri. Non-Hindus are not permitted inside but the outer structure and Singhadwara gate are worth visiting. Early morning darshan recommended for groups to avoid long queues." },
  { title: "Puri Beach",                 desc: "One of the most popular beaches in eastern India. Clean, wide, and easy to access. Great for family groups, college trips, and corporate outings. Sunrise at Puri Beach is a genuinely special experience for groups visiting early morning." },
  { title: "Konark Sun Temple",          desc: "35 km from Puri. UNESCO World Heritage Site. One of the most magnificent examples of ancient Indian architecture. Almost every group visiting Puri adds Konark to the itinerary. Half day trip easily managed as an afternoon add-on after morning Jagannath darshan." },
  { title: "Chilika Lake",               desc: "Around 50 km from Puri. Largest coastal lagoon in India. Irrawaddy dolphins, migratory birds, and boat rides across the lake. Popular with nature-loving groups, college trips, and corporate outings. Best visited between November and February." },
  { title: "Raghurajpur Artist Village", desc: "Around 14 km from Puri. Traditional Odishan heritage village known for Pattachitra painting, Gotipua dance, and local handicrafts. Unique cultural stop for groups interested in Odisha art, tradition, and crafts." },
  { title: "Sakshigopal Temple",         desc: "Around 20 km from Puri. Important Vaishnava pilgrimage site dedicated to Lord Krishna. Popular stop for religious groups combining Jagannath darshan with nearby temple visits on the same full day circuit." },
  { title: "Lokanath Temple",            desc: "One of the oldest Shiva temples in Puri. Located close to Jagannath Temple. Easy to include as part of a full day Puri pilgrimage tour by tempo traveller. No additional distance needed from the main temple circuit." },
  { title: "Swargadwar Beach",           desc: "Considered one of the most sacred cremation sites in India. Spiritually significant for Hindu pilgrimage groups visiting Puri. Located close to the main beach and easy to include in the full Puri darshan circuit." },
  { title: "Narendra Tank",              desc: "Large sacred tank in the heart of Puri city. Famous for the Chandana Yatra festival where the deities are taken for a boat ride. Peaceful spot for groups looking for a quieter spiritual experience away from the main Jagannath Temple crowds." },
  { title: "Dhauli Giri",               desc: "Around 60 km from Puri via Bhubaneswar. Ancient site where Emperor Ashoka converted to Buddhism after the Kalinga War. White Peace Pagoda and rock edicts. Popular heritage stop for groups combining Puri with a Bhubaneswar day trip." },
];

const FEATURES = [
  { title: "Full Multi-Zone AC",         desc: "Every tempo traveller in Puri has full air conditioning throughout the entire cabin — essential for Puri's warm coastal humidity. Keeps every passenger comfortable on full day darshan circuits and long outstation drives." },
  { title: "Premium Pushback Seats",     desc: "Soft pushback reclining seats provide extra comfort for pilgrimage groups, elderly passengers, and long drives to Bhubaneswar, Konark, and Chilika Lake." },
  { title: "Air Suspension",             desc: "Luxury tempo travellers in Puri come with air suspension — handles coastal roads smoothly. Especially recommended for groups with elderly passengers on all-day Jagannath darshan tours." },
  { title: "LCD Screens & Charging",     desc: "LCD entertainment screens and charging points at every seat in luxury vehicles — keeps groups relaxed and connected during long outstation drives." },
  { title: "Driver Waits at Every Stop", desc: "Driver waits at Jagannath Temple, Konark, Chilika Lake, and every stop throughout the day. No rebooking, no coordination issues — one vehicle, one driver, full day service." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for pilgrimage essentials, beach gear, shopping bags, and group items across full day Puri sightseeing tours." },
  { title: "Fixed All-Inclusive Fare",   desc: "Fuel, toll, parking, and driver allowance all included in the confirmed fare. Nothing added after the trip ends. Transparent pricing — exactly what was agreed." },
  { title: "Advance Booking Available",  desc: "Book weeks in advance for Rath Yatra and peak pilgrimage seasons. Vehicle confirmed, driver briefed, fare agreed before your group arrives in Puri." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Toll and parking charges included", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Entry fees at Jagannath Temple and other sites", "Boat charges at Chilika Lake", "State entry tax / permit charges (if applicable)", "Driver night allowance (₹500 if applicable)", "Luggage carrier charges"];

const BENEFITS = [
  { title: "One Reliable Vehicle for the Group",  desc: "One tempo traveller means one pickup, one driver, everyone arrives together at Jagannath Temple, Konark, Chilika Lake — no splitting the group across multiple vehicles or coordination stress." },
  { title: "Ideal for Senior Pilgrims",            desc: "Spacious interiors, reclining seats, and strong AC make our tempo travellers the best choice for elderly passengers on Jagannath darshan tours and long Puri pilgrimage circuits." },
  { title: "Knows Temple Timings & Parking",       desc: "Experienced drivers know Jagannath Temple timings, the best entry points, parking near the temple, and the quickest routes through Puri city for elderly passengers and large groups." },
  { title: "Flexible for All Travel Needs",        desc: "From Jagannath darshan and Puri Beach to Konark Sun Temple, Chilika Lake, and outstation trips to Bhubaneswar — our tempo travellers cover everything your group needs in Puri." },
  { title: "Cost Effective Group Travel",          desc: "One tempo traveller splits across the group at a per-head cost that beats multiple cabs on every route in and around Puri. Save on fuel, parking, and coordination every trip." },
  { title: "Transparent Pricing Always",           desc: "Fare is confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. Nothing added after the trip ends. No surprise charges." },
];

const WHY_CARDS = [
  { title: "Keeps Pilgrimage Group Together", desc: "One tempo traveller means one pickup, one driver, everyone arrives together at Jagannath Temple, Konark, Chilika Lake — no splitting the group across multiple vehicles." },
  { title: "Knows Temple Timings & Parking",  desc: "Experienced drivers know Jagannath Temple timings, the best entry points, parking near the temple, and the quickest routes through Puri city for elderly passengers." },
  { title: "Full AC — Essential in Puri",     desc: "Puri is warm and humid for most of the year. Full cabin AC throughout the journey — from temple darshan to beach stops to long outstation drives." },
  { title: "Fair and Transparent Pricing",    desc: "Local package starts at Rs 7,200 for 8 hours and 80 km. Outstation rate starts at Rs 30 per km. Fixed fare confirmed at booking. No hidden charges." },
  { title: "Advance Booking for Rath Yatra",  desc: "During Rath Yatra, Puri sees massive crowds. Book 2 to 3 weeks in advance during Rath Yatra and major festival periods. 20 seater most popular for large pilgrimage groups." },
  { title: "Modify or Cancel Easily",         desc: "Changes to travel date, pickup time, or route — call 9044019511. Cancellations made at least 24 hours before scheduled pickup processed without any penalty." },
];

const FAQS = [
  { q: "What is the tempo traveller price in Puri?",                              a: "Tempo traveller in Puri starts at Rs 7,000 for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 30 per km. Fixed fare confirmed at booking, no hidden charges. Call 9044019511 for an exact quote." },
  { q: "How many people can travel in a tempo traveller in Puri?",                a: "Tempo travellers in Puri are available in 9 seater, 12 seater, 16 seater, and 20 seater options. Choose based on your group size. Call 9044019511 to confirm the right size for your group." },
  { q: "What features does a tempo traveller in Puri have?",                      a: "Every tempo traveller in Puri includes pushback reclining seats, powerful multi zone AC, air suspension, LCD entertainment screens, charging points at every seat, reading lights, and large luggage space." },
  { q: "Is the tempo traveller in Puri fully air conditioned?",                   a: "Yes. Full multi zone AC throughout the entire cabin. Keeps every passenger comfortable on Puri's warm coastal climate and on longer outstation drives to Bhubaneswar, Konark, and Chilika Lake." },
  { q: "Is tempo traveller the best option for Jagannath Temple darshan group?",  a: "Yes. Pushback seats, smooth air suspension, and powerful AC make the tempo traveller the best choice for Jagannath Temple darshan group tours in Puri. Especially recommended for groups travelling with elderly passengers." },
  { q: "How do I book a tempo traveller in Puri?",                               a: "Call or WhatsApp Yatra Travel India on 9044019511. Share group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare." },
  { q: "Can I extend my tempo traveller booking in Puri?",                       a: "Yes. If the group needs extra hours beyond the booked package, inform the driver or call 9044019511 directly. Extra hours charged at a fixed rate confirmed at the time of extension." },
  { q: "Can I modify my tempo traveller booking in Puri?",                       a: "Yes. Call 9044019511 as early as possible to make any changes to travel date, pickup time, or route. Subject to vehicle availability on the revised date." },
  { q: "Can I cancel my tempo traveller booking in Puri?",                       a: "Yes. Cancellations made at least 24 hours before the scheduled pickup are processed without any penalty. For cancellations within 24 hours of pickup a nominal charge may apply." },
  { q: "Are there any discounts on tempo traveller booking in Puri?",            a: "Special rates available for advance bookings, multi day packages, and repeat group bookings. Call 9044019511 to ask about current offers before confirming your booking." },
  { q: "When is the best time to book tempo traveller in Puri?",                 a: "Book 3 to 5 days in advance for regular local sightseeing and short outstation trips. Book 2 to 3 weeks in advance during Rath Yatra, Snana Yatra, and other major festival periods. Luxury tempo traveller bookings should always be confirmed at least a week early." },
  { q: "Can I book tempo traveller in Puri for Konark and Chilika in one day?",  a: "Yes. Konark Sun Temple (35 km) and Chilika Lake (50 km) can be covered in one full day outstation trip from Puri with a 12 or 16 seater tempo traveller. Confirm the itinerary at booking to ensure enough time at each stop." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-dwarka",    city: "Tempo Traveller in Dwarka",    type: "Dwarkadhish Darshan & Gujarat Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ayodhya",  city: "Tempo Traveller in Ayodhya",   type: "Pilgrimage & Darshan Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-kanpur",   city: "Tempo Traveller in Kanpur",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-delhi",    city: "Tempo Traveller in Delhi",     type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-agra",     city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-manali",   city: "Tempo Traveller in Manali",    type: "Mountain Routes & Adventure Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerPuri() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Puri to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Puri&apos;s Trusted Tempo Traveller — Jagannath Darshan, Konark, Chilika Lake, Rath Yatra and Bhubaneswar</p>
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
          <span>Tempo Traveller in Puri</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Puri</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Jagannath Temple Darshan · Puri Beach · Konark Sun Temple · Chilika Lake · Rath Yatra · Bhubaneswar</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury Tempo Traveller", "Full Multi-Zone AC", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Puri" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "On-Time Pickup", sub: "Hotel & railway station pickup" }, { title: "Full Multi-Zone AC", sub: "Cool in Puri's coastal humidity" }, { title: "Fixed All-Inclusive Fare", sub: "Fuel, toll, parking included" }, { title: "Driver Waits at Every Stop", sub: "No rebooking between temples" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Puri</strong> for Jagannath Temple darshan, Puri Beach, Konark Sun Temple, Chilika Lake, Rath Yatra pilgrimages, and outstation trips to Bhubaneswar and Cuttack. <strong>9 seater to 20 seater available — including Luxury Tempo Traveller.</strong> Full AC, confirmed driver, fixed all-inclusive fares. No hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* Intro */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Rent Tempo Traveller in Puri — 9 to 20 Seater Available for Every Group Size</h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Puri is one of the four sacred Dhams in India. Jagannath Temple, Puri Beach, Konark Sun Temple, Chilika Lake — every year millions of pilgrims, tourists, and devotees visit Puri and almost all of them travel in groups. Getting a large group around Puri and nearby destinations needs one reliable vehicle that keeps everyone together, runs on time, and charges what was agreed. Not three different cabs going three different ways.</p>
            <p className="text-base text-gray-700 leading-relaxed">Yatra Travel India offers 9 to 20 seater tempo travellers in Puri for local temple tours, Jagannath darshan trips, Rath Yatra pilgrimages, beach outings, outstation trips to Bhubaneswar, Konark, and Chilika Lake, and all other group travel requirements. Every booking comes with a confirmed vehicle, experienced driver, and fixed all-inclusive fare. No hidden charges.</p>
          </div>
        </div>

        {/* Vehicle Cards */}
        <ST id="services">Tempo Traveller Options in Puri</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Full Comparison Table */}
        <ST>Tempo Traveller Options in Puri — Full Comparison</ST>
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

        {/* Darshan Fare Table */}
        <ST border="border-green-500">Jagannath Temple Darshan — Tempo Traveller Fare in Puri</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle", "Seating", "Full Day Fare (8 hrs / 80 km)"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DARSHAN_FARE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.seats}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Outstation Routes Table */}
        <ST border="border-green-500">Outstation Routes from Puri</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-2">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Route", "Distance", "Vehicle", "Booking"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    <a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">
          {USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}
        </div>

        {/* Jagannath Darshan Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller for Jagannath Temple Darshan in Puri</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Visiting Jagannath Temple with a group requires proper planning. Early morning queues, parking near the temple, managing elderly passengers, covering nearby temples on the same day. A tempo traveller from Yatra Travel India handles all of it so the group focuses on the darshan, not the logistics. Experienced drivers know the temple timings, the best entry points, and the quietest time to arrive for a smoother darshan experience.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Full Day Jagannath Darshan Package Covers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Jagannath Temple Darshan", "Lokanath Temple", "Narendra Tank", "Swargadwar Beach", "Puri Beach", "Sakshigopal Temple (if required)"].map((spot, i) => (
                <div key={spot} className="flex items-center gap-2 bg-white border border-blue-100 rounded-lg px-3 py-2">
                  <div className="w-5 h-5 bg-[#0f6ec8] rounded-full flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">{i + 1}</div>
                  <span className="text-xs font-semibold text-gray-700">{spot}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Arrive Early", desc: "Temple opens for darshan from early morning. Groups that arrive before 7 AM avoid the longest queues. Driver can be briefed to reach hotel pickup by 5:30 AM for an early start." },
              { title: "Non-Hindu Entry", desc: "Non-Hindu visitors are not permitted inside Jagannath Temple. The outer structure, Singhadwara gate, and surrounding area can be visited. Driver knows exactly where to stop for the best view." },
              { title: "Combine with Konark", desc: "Most groups add Konark Sun Temple to the same day itinerary. Konark is 35 km from Puri. Easily managed as an afternoon add-on after morning Jagannath darshan." },
              { title: "Rath Yatra Period", desc: "During Rath Yatra, Puri sees massive crowds. Book tempo traveller at least 3 to 4 weeks in advance during this period. 20 seater most popular for large pilgrimage groups." },
            ].map(tip => (
              <div key={tip.title} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 hover:border-[#ff6b35] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0"><span className="text-[#ff6b35] font-bold text-sm">✓</span></div>
                <div><h4 className="text-sm font-bold text-gray-900 mb-1">{tip.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Book */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">How to Book Tempo Traveller in Puri — Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-4">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Booking with Yatra Travel India takes less than 5 minutes. No forms, no app downloads, no waiting for confirmation emails. Just one call and everything is sorted before you arrive in Puri.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Share your group size, travel date, pickup location in Puri, and where you are heading. Jagannath Temple darshan, Puri Beach, Konark Sun Temple, Chilika Lake, outstation trip to Bhubaneswar or Cuttack. Whatever the plan, share it on the call.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Fare is confirmed immediately. Vehicle details and driver number shared before the trip starts. Driver arrives at your hotel or pickup point at the confirmed time. Fare settled as agreed at the end. Nothing more, nothing less.</p>
            <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
              <p className="text-white text-sm font-bold">Call 9044019511 — Booking confirmed on the same call.</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4">
            <p className="text-sm text-yellow-800 leading-relaxed"><strong>Why Book Tempo Traveller in Puri Online in Advance:</strong> Puri is one of the busiest pilgrimage cities in India. During Rath Yatra, Diwali, Durga Puja, and peak tourist season between October and February, tempo travellers fill up weeks in advance. Walking around Puri looking for a vehicle after you arrive is a gamble that rarely works out during busy periods.</p>
            <p className="text-sm text-yellow-800 leading-relaxed">Booking online in advance means vehicle locked in, driver briefed, fare agreed, and everything ready before your group reaches Puri. No stress, no last minute scramble.</p>
          </div>
        </div>

        {/* Places to Visit */}
        <ST>Places to Visit in Puri by Tempo Traveller</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {PLACES.map(p => (
            <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2 pb-2 border-b border-gray-100">{p.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* AC Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Book AC Tempo Traveller in Puri with Yatra Travel India</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Puri is warm and humid for most of the year. Travelling between Jagannath Temple, Puri Beach, Konark, and Chilika Lake in a vehicle without proper AC is uncomfortable, especially for elderly passengers and young children.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Every tempo traveller at Yatra Travel India in Puri comes with full air conditioning throughout the cabin. Not just the front seats — the entire vehicle stays cool from the moment the group gets in to the moment everyone reaches the destination.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">For local sightseeing around Puri, the AC keeps the group fresh across a full day of temple visits and beach stops. For longer outstation drives to Bhubaneswar, Cuttack, or Chilika Lake the difference becomes even more noticeable. Nobody arrives tired and overheated after a 2 or 3 hour drive.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Luxury tempo travellers in Puri come with multi zone AC that handles the full cabin evenly regardless of how many people are seated. Powerful enough for Puri's coastal humidity and adjustable for different preferences within the same vehicle.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">9 seater, 12 seater, 16 seater, and 20 seater AC tempo travellers all available in Puri at fixed transparent fares.</p>
          </div>
        </div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Puri</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
            <ul className="list-none m-0 p-0">{INCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
          </div>
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span></div>
            <ul className="list-none m-0 p-0">{EXCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
          </div>
        </div>

        {/* Benefits */}
        <ST>Why Choose Yatra Travel India for Tempo Traveller in Puri</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Cards */}
        <ST>Why Book Tempo Traveller in Puri with Yatra Travel India</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
            </div>
          ))}
        </div>

        {/* Advance Booking Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Best Time to Book Tempo Traveller in Puri:</strong> Book <strong>3 to 5 days in advance</strong> for regular local sightseeing and short outstation trips. Book <strong>2 to 3 weeks in advance</strong> during Rath Yatra, Snana Yatra, and other major festival periods when Puri sees its highest footfall. Luxury tempo traveller bookings should always be confirmed at least a week early regardless of season.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Puri</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Puri Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Jagannath Temple darshan, Konark Sun Temple, Chilika Lake, Puri Beach, Rath Yatra — call us with your group size and travel date. Vehicle confirmed, fare fixed, driver briefed before you arrive. Dial 9044019511.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"><FaPhoneAlt size={12} /> Call Now — +91 90440 19511</a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2"><FaWhatsapp size={14} /> WhatsApp Us</a>
          </div>
        </div>

        {/* Network */}
        <ST>Our Pan-India Tempo Traveller Network</ST>
        <p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India&apos;s major pilgrimage cities with premium group travel services.</p>
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

// ─── VEHICLE CARD — Goa Style ────────────────────────────────────────────────
function VehicleCard({ vehicle, onSelect }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {vehicle.img ? (
          <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FaBus className="text-[#0f6ec8] opacity-20 text-5xl" />
          </div>
        )}
        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">
          {vehicle.badge}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">
          {vehicle.specs.map((s) => (
            <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed">
              <span className="font-bold">{s.label}:</span>{" "}{s.value}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>
          ))}
        </div>
        <button onClick={() => onSelect(vehicle.title)}
          className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">
          Book {vehicle.badge} Tempo
        </button>
      </div>
    </div>
  );
}
