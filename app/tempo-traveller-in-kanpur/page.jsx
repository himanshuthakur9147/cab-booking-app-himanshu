"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaBus,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const VEHICLES = [
  {
    badge: "12 Seater",
    title: "12 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "12 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹23/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Pushback Seats", "Lucknow Trip", "Family Tours"],
    color: "blue",
  },
  {
    badge: "14 Seater",
    title: "14 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "14 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹24/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Pushback Seats", "Corporate Tours", "Family Trips"],
    color: "blue",
  },
  {
    badge: "16 Seater",
    title: "16 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹26/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Extra Legroom", "Varanasi Trip", "Office Outings"],
    color: "blue",
  },
  {
    badge: "18 Seater",
    title: "18 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "18 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹28/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "More Legroom", "Delhi Trip", "Group Tours"],
    color: "blue",
  },
  {
    badge: "20 Seater",
    title: "20 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "20 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹30/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Max Luggage", "Wedding Baraat", "Pilgrimage"],
    color: "orange",
  },
  {
    badge: "24 Seater",
    title: "24 Seater Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "24 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹35/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Large Groups", "Corporate Events", "Pilgrimage"],
    color: "orange",
  },
  {
    badge: "Luxury",
    title: "Luxury Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "On Request" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Premium AC", "LED Lighting", "Music System", "Charging Points"],
    color: "blue",
  },
  {
    badge: "Maharaja",
    title: "Maharaja Tempo Traveller in Kanpur",
    specs: [
      { label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "On Request" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Sofa Seats", "Full Recline", "VIP Travel", "Grand Weddings"],
    color: "orange",
  },
];

const OPTIONS_TABLE = [
  { vehicle: "12 Seater Tempo Traveller in Kanpur", capacity: "12 + Driver", ac: "AC", ideal: "Small and medium family groups - local sightseeing in Kanpur, day trips, and outstation routes to Lucknow and Prayagraj" },
  { vehicle: "14 Seater Tempo Traveller in Kanpur", capacity: "14 + Driver", ac: "AC", ideal: "Medium family groups and office teams - ideal for corporate outings, school trips, and comfortable outstation travel from Kanpur" },
  { vehicle: "16 Seater Tempo Traveller in Kanpur", capacity: "16 + Driver", ac: "AC", ideal: "Medium to large groups - corporate tours, school excursions, wedding parties, and longer outstation routes to Varanasi and Delhi" },
  { vehicle: "18 Seater Tempo Traveller in Kanpur", capacity: "18 + Driver", ac: "AC", ideal: "Large family gatherings and pilgrimage groups - comfortable seating with good luggage space for trips to Delhi, Agra, and Ayodhya" },
  { vehicle: "20 Seater Tempo Traveller in Kanpur", capacity: "20 + Driver", ac: "AC", ideal: "Large groups - baraat transport, religious pilgrimage groups, and large family gatherings travelling together from Kanpur" },
  { vehicle: "24 Seater Tempo Traveller in Kanpur", capacity: "24 + Driver", ac: "AC", ideal: "Very large groups - big corporate events, college excursions, and multi-city pilgrimage tours from Kanpur across North India" },
  { vehicle: "Luxury Tempo Traveller in Kanpur", capacity: "9–16 + Driver", ac: "Premium AC", ideal: "VIP guests, wedding functions, corporate travel - soft pushback seats, LED lighting, music system, and charging points included" },
  { vehicle: "Maharaja Tempo Traveller in Kanpur", capacity: "9–16 + Driver", ac: "Premium AC", ideal: "Ultimate VIP travel, grand weddings, senior citizens - pushback sofa seats, full recline, premium interiors, air suspension" },
];

const ROUTES_TABLE = [
  { route: "Kanpur to Lucknow", dist: "~80 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Prayagraj", dist: "~190 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Varanasi", dist: "~330 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to New Delhi", dist: "~450 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Agra", dist: "~300 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Ayodhya", dist: "~165 km", vehicle: "12 or 16 Seater" },
];

const USE_TAGS = [
  "Kanpur Local Sightseeing", "Wedding Guest Transfers", "Baraat Transport Kanpur",
  "VIP Guest Movement", "Kanpur to Lucknow Group Travel", "Kanpur to Varanasi Pilgrimage",
  "Kanpur to Prayagraj Kumbh", "Kanpur to Delhi Outstation", "Corporate Office Outings",
  "Family Multi-Day Trips", "Religious Pilgrimage Groups", "Airport Group Transfers",
];

const FEATURES = [
  { title: "Premium Pushback Seats", desc: "Soft and wide pushback seats provide extra comfort and support for long journeys — ideal for wedding hire and VIP travel in Kanpur." },
  { title: "Fully Air-Conditioned", desc: "All luxury tempo travellers are fully AC — keeps passengers comfortable during long outstation trips and local Kanpur city sightseeing in any weather." },
  { title: "Extra Legroom", desc: "Wide aisles and generous legroom — passengers can relax without feeling cramped on long routes from Kanpur to Varanasi or Delhi." },
  { title: "Stylish Interiors & Ambient Lighting", desc: "Premium flooring, roof lights, and soft LED lighting give a VIP travel experience that makes an impression at every wedding and corporate event." },
  { title: "Large Luggage Space", desc: "Ample luggage space for suitcases, shopping bags, and gifts — perfect for outstation trips, airport transfers, and wedding travel from Kanpur." },
  { title: "Smooth Suspension", desc: "Superior suspension system built for highways — smooth and comfortable ride even on long routes like Kanpur to Lucknow or Kanpur to Varanasi." },
  { title: "Entertainment & Charging Points", desc: "Music systems, LED TVs, and mobile charging points in most luxury tempo travellers — makes the journey fun and connected for every passenger." },
  { title: "Professional & Polite Drivers", desc: "Trained, polite drivers who know local Kanpur routes, highways, and sightseeing spots — ensure safe and timely travel for weddings and corporate groups." },
];

const INCLUDED = [
  "Base fare of Tempo Traveller",
  "Fuel charges included",
  "Driver day allowance included",
  "Clean, well-maintained vehicle",
  "Driver accommodation (Multi-day trips)",
];

const EXCLUDED = [
  "Toll tax charges (as per actual during the trip)",
  "State entry tax / permit charges (if applicable)",
  "Parking charges (as per actual at locations)",
  "Driver night allowance (₹500 for Tempo Traveller, if applicable)",
  "Luggage carrier charges",
];

const BENEFITS = [
  { title: "Comfortable Travel for Large Groups", desc: "Luxury tempo travellers seat 12, 16, or 20 people comfortably. Families and wedding guests travel together in one vehicle instead of splitting into multiple cars — reducing confusion, saving time, and ensuring everyone arrives together and on time." },
  { title: "Premium Interiors and Amenities", desc: "Fully air-conditioned interiors, reclining seats, LED lighting, music systems, and ample legroom. For weddings, guests enjoy a smooth and stylish ride between the wedding venue, airport, and hotel." },
  { title: "Professional and Polite Drivers", desc: "Experienced and polite drivers who know local Kanpur routes, handle city traffic efficiently, and ensure timely arrivals for events. Wedding travel stays safe and stress-free especially for senior citizens and VIP guests." },
  { title: "Flexible for All Wedding Travel Needs", desc: "From baraat transport and VIP guest pickup to shuttle services between venues, luxury tempo travellers are versatile — ideal for short local trips or long-distance travel to nearby cities and temples." },
  { title: "Cost Effective and Convenient", desc: "Hiring a single luxury tempo traveller in Kanpur is more economical than multiple cars. Save on fuel, parking, and traffic hassle while providing premium comfort and style to your guests." },
  { title: "On-Time and Organised", desc: "At Yatra Travel India we focus on quality service, on-time pickup, and transparent pricing. Our luxury tempo travellers are well-maintained and regularly checked for safety and comfort before every trip." },
];

const OUTSTATION_ROUTES = [
  {
    title: "Kanpur to Lucknow Tempo Traveller",
    meta: ["~80 km", "1–2 Hours", "Most Booked Route"],
    desc: "The most popular outstation route from Kanpur. Whether it is a family outing, corporate tour, wedding travel, or a pilgrimage trip, a Kanpur to Lucknow tempo traveller ensures everyone can travel together in one vehicle. Our experienced drivers know the Kanpur to Lucknow route well, ensuring timely pickup and drop and smooth highway travel. Both standard and luxury tempo traveller options available for this route.",
  },
  {
    title: "Kanpur to Prayagraj Tempo Traveller",
    meta: ["~190 km", "3–4 Hours", "Pilgrimage and Family"],
    desc: "Make your group travel from Kanpur to Prayagraj simple and comfortable by hiring a tempo traveller. Perfect for families, friends, corporate teams, wedding guests, or pilgrims. Our 12 seater and 16 seater tempo travellers in Kanpur are fully air-conditioned, spacious, and feature reclining seats with enough room for all luggage. The driver handles all traffic and directions so your group can relax for the full journey.",
  },
  {
    title: "Kanpur to Varanasi Tempo Traveller",
    meta: ["~330 km", "5–6 Hours", "Kashi Pilgrimage"],
    desc: "Travelling from Kanpur to Varanasi with a group is easy and stress-free when you hire a tempo traveller. Whether it is a family trip, office tour, wedding party, or a pilgrimage journey to Kashi, a Kanpur to Varanasi tempo traveller keeps everyone together. Long distance travel is comfortable with reclining seats, full AC, and plenty of luggage space. The driver knows the route well and ensures timely pickups and drop-offs.",
  },
  {
    title: "Kanpur to New Delhi Tempo Traveller",
    meta: ["~450 km", "6–7 Hours", "Family and Corporate"],
    desc: "Skip the hassle of multiple cars and long drives by hiring a tempo traveller from Kanpur to New Delhi. Perfect for family trips, office tours, wedding parties, or pilgrimage journeys. Our 12 seater and 16 seater tempo travellers are fully air conditioned and have reclining seats with enough room for luggage, making the long-distance journey smooth and relaxing. The driver knows the route well and ensures timely arrival.",
  },
];

const WHY_CARDS = [
  { title: "Clean and Well-Maintained Vehicles", desc: "All tempo travellers in Kanpur are clean, well-maintained, fully air conditioned, and designed for comfort with reclining seats, enough legroom, and ample luggage space." },
  { title: "Experienced and Polite Drivers", desc: "Drivers know all Kanpur city roads and highways well. You can enjoy the journey without worrying about traffic or navigation — especially for long routes to Varanasi and Delhi." },
  { title: "Fair and Transparent Pricing", desc: "Wide range — 12 seater, 16 seater, and luxury — at fair pricing with fuel, tolls, and driver allowance included and no hidden costs." },
  { title: "Easy Online Booking and 24x7 Support", desc: "Easy online booking, 24x7 support, and vehicles kept in top condition for every trip. Call 9044019511 or WhatsApp anytime — someone always picks up." },
  { title: "Doorstep Pickup Anywhere in Kanpur", desc: "Whether near the railway station, a hotel, or any residential area in Kanpur, pickup can be arranged right to your doorstep. Just share the correct location while booking." },
  { title: "Multi-Day and Multi-City Trips", desc: "Kanpur to Varanasi, Ayodhya, Lucknow, or a longer North India pilgrimage — the plan can be fully customised for your group's needs and travel dates." },
];

const FAQS = [
  { q: "How early should I book a tempo traveller in Kanpur?", a: "If your travel dates are fixed, do not wait till the last moment. In Kanpur, vehicles get booked quickly during wedding season and long weekends. Booking 4 to 7 days in advance is usually a safe choice if you want a good vehicle at a reasonable price." },
  { q: "Will the tempo traveller come to my exact pickup location in Kanpur?", a: "Yes, in most cases the vehicle will come right to your doorstep. Whether you are near the railway station, a hotel, or any residential area in Kanpur, pickup can be arranged easily. Just share the correct location while booking." },
  { q: "Are there any hidden charges in tempo traveller rental in Kanpur?", a: "This depends on the service provider. A good rental company will clearly explain everything — like toll tax, parking, and driver allowance. At Yatra Travel India it is always better to ask once before confirming so there are no surprises later." },
  { q: "Can I plan a multi-day or multi-city trip from Kanpur?", a: "Yes, and honestly this is where a tempo traveller makes the most sense. Whether you are planning Kanpur to Varanasi, Ayodhya, Lucknow, or even a longer North India trip, the plan can be customized based on your group's needs." },
  { q: "Is there any difference between a normal and a luxury tempo traveller?", a: "Yes, there is a noticeable difference. A normal tempo traveller is simple and budget-friendly. A luxury tempo traveller comes with better seats, more leg space, charging points, and sometimes even extra features like TV or lighting. If comfort matters, go for the luxury option." },
  { q: "Is a tempo traveller a good option for family trips?", a: "Honestly, yes. Instead of managing multiple cars and coordinating with everyone, a tempo traveller keeps the whole family together. It makes the journey more relaxed and enjoyable, especially on long routes." },
  { q: "Can I book a tempo traveller in Kanpur just for one day?", a: "Yes, you can. Many people book it for one-day trips like local sightseeing or nearby places. It is simple, convenient, and saves you from the hassle of arranging multiple vehicles." },
  { q: "Do drivers know the routes well for outstation travel?", a: "Most drivers are experienced and regularly travel on routes like Kanpur to Lucknow, Prayagraj, Varanasi, and Delhi. They know the roads, stops, and timing well, which makes your journey smoother." },
  { q: "Why do people prefer tempo travellers over cars for group travel?", a: "The biggest reason is convenience. Everyone travels together, there is enough space for luggage, and the cost per person becomes much lower compared to booking multiple cars. It just makes the whole trip easier." },
  { q: "Is AC available in tempo travellers in Kanpur?", a: "Yes, AC tempo travellers are easily available and are actually the most preferred option, especially in summer. They make a big difference in comfort during long journeys." },
];

const NETWORK_LINKS = [
  { href: "/tempo-traveller-in-delhi", city: "Tempo Traveller in Delhi", type: "Corporate Travel, Weddings & Outstation" },
  { href: "/tempo-traveller-in-lucknow", city: "Tempo Traveller in Lucknow", type: "Family Travel & Religious Tours" },
  { href: "/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Pilgrimage Groups & Cultural Tours" },
  { href: "/tempo-traveller-in-jaipur", city: "Tempo Traveller in Jaipur", type: "Weddings, Tourism & Destination Events" },
  { href: "/tempo-traveller-in-agra", city: "Tempo Traveller in Agra", type: "Heritage Tours & Group Travel" },
  { href: "/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Kumbh, Pilgrimages & City Tours" },
  { href: "/tempo-traveller-in-ayodhya", city: "Tempo Traveller in Ayodhya", type: "Pilgrimage & Darshan Tours" },
];

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function TempoTravellerKanpur() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });

  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectVehicle = (title) => {
    setVtype(title);
    scrollToBooking();
    showToast(`${title} selected. Enter destination to continue.`);
  };

  const handleSearch = () => {
    if (!toCity.trim()) { showToast("Please enter your destination."); return; }
    showToast(`Searching tempo travellers from Kanpur to ${toCity}...`);
  };

  return (
    <>
      <Navbar />

      {/* TOP BAR */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">
            Kanpur&apos;s Trusted Tempo Traveller — Weddings, VIP Travel, Lucknow, Varanasi, Prayagraj and Delhi
          </p>
          <div className="flex items-center gap-5">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link>
          <span className="text-gray-300">/</span>
          <Link href="/" className="text-[#0f6ec8] hover:underline">Services</Link>
          <span className="text-gray-300">/</span>
          <span>Tempo Traveller in Kanpur</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">
            Tempo Traveller on Rent in Kanpur
          </h1>
          <p className="text-blue-200 text-center text-sm mb-5">
            Weddings and VIP Travel · Lucknow · Varanasi · Prayagraj · Delhi · Agra · Local Sightseeing
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["12 and 16 Seater Available", "Luxury Tempo Traveller", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map((b) => (
              <span key={b} className="bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>

          {/* BOOKING CARD */}
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-6 md:p-8">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[70px] py-2 px-3 text-xs font-semibold rounded-md transition-all ${
                    activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">From</label>
                <input readOnly value="Kanpur" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-700 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">To</label>
                <input
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  placeholder="Destination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8] focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Vehicle Type</label>
                <select
                  value={vtype}
                  onChange={(e) => setVtype(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"
                >
                  <option>Select Vehicle</option>
                  {VEHICLES.map((v) => <option key={v.badge}>{v.title}</option>)}
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-3 px-6 rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-[#f8faff] border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { title: "On-Time Pickup", sub: "Pickup from your exact location" },
            { title: "Clean and Well Maintained", sub: "Regularly serviced before every trip" },
            { title: "Transparent Pricing", sub: "Fuel, toll, driver allowance included" },
            { title: "Professional Drivers", sub: "Know all Kanpur routes and highways" },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i < 3 ? "border-r border-gray-200" : ""}`}>
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-[#0f6ec8] text-sm" />
              </div>
              <div>
                <strong className="text-xs font-bold text-gray-900 block mb-0.5">{item.title}</strong>
                <span className="text-xs text-gray-500">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* INFO BOX */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">
            Yatra Travel India offers <strong>tempo traveller on rent in Kanpur</strong> for local sightseeing, wedding guest transfers,
            VIP movement, and outstation trips to Lucknow, Varanasi, Prayagraj, Delhi, and Agra.{" "}
            <strong>12 seater, 16 seater, and Luxury Tempo Traveller available.</strong> Fully AC, clean, pushback seats, experienced drivers.
            Transparent pricing — fuel, tolls, and driver allowance all included. Call <strong>9044019511</strong> to book.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 pl-4 border-l-4 border-[#ff6b35]">
            Tempo Traveller on Rent in Kanpur — Comfortable Group Travel for Every Occasion
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            Kanpur is a busy city, and travelling in multiple cars can be tiring and costly. With a tempo traveller rental in Kanpur,
            your whole group can sit in one vehicle and enjoy the journey together. Our tempo travellers are fully air conditioned,
            clean, and well maintained, making them perfect for all age groups including senior citizens and children.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            We offer 12 seater, 16 seater, and luxury tempo travellers for premium travel. These vehicles come with comfortable pushback
            seats, good legroom, and proper luggage space. Whether you are going for local sightseeing in Kanpur or planning an outstation
            trip to Lucknow, Varanasi, Prayagraj, or Delhi, a tempo traveller with a driver in Kanpur makes travel smooth and relaxed.
          </p>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]" id="services">
          Tempo Traveller Options in Kanpur
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map((v) => (
            <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />
          ))}
        </div>

        {/* OPTIONS TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Kanpur — Full Comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map((h) => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-5 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"} hover:bg-blue-50 transition-colors`}>
                  <td className="py-3 px-5 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-5 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-5 border-r border-b border-gray-100">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${row.ac === "Premium AC" ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200"}`}>
                      {row.ac}
                    </span>
                  </td>
                  <td className="py-3 px-5 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ROUTES TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 mt-10 pl-4 border-l-4 border-green-500">
          Tempo Traveller Hire in Kanpur — Key Routes
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Route", "Distance", "Vehicle", "Booking"].map((h) => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-5 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"} hover:bg-blue-50`}>
                  <td className="py-3 px-5 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-5 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-5 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-5 border-b border-gray-100">
                    <a href="tel:+919044019511" className="inline-flex items-center gap-1.5 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors">
                      <FaPhoneAlt size={10} /> Call Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-12">* Fares depend on vehicle size and trip duration. Call 9044019511 for an exact quote.</p>

        {/* USE TAGS */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Perfect For</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {USE_TAGS.map((tag) => (
            <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>

        {/* LUXURY SECTION */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Luxury Tempo Traveller in Kanpur</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 mb-6">
          {[
            "If you want comfort with a premium touch, booking a luxury tempo traveller in Kanpur is the perfect choice. It is ideal for wedding guests, corporate travel, VIP movement, family tours, and long outstation trips. A luxury tempo traveller gives you more space, better seating, and a smooth travel experience compared to regular vehicles.",
            "Our luxury tempo traveller on rent in Kanpur comes with fully air-conditioned interiors, soft pushback seats, extra legroom, and stylish lighting. The interiors are clean, modern, and designed to make long journeys relaxing. There is enough luggage space, making it suitable for airport transfers and multi-day trips.",
            "We offer 12 seater and 16 seater luxury tempo travellers in Kanpur, driven by professional and polite drivers who know city roads and highways well. Whether you are planning a wedding function, business trip, religious tour, or an outstation journey to Lucknow, Varanasi, Delhi, or Agra, a luxury tempo traveller with driver in Kanpur ensures a smooth and stress-free ride.",
          ].map((p, i) => (
            <p key={i} className="text-[15px] text-gray-600 leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Features of Luxury Tempo Traveller in Kanpur</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaCheckCircle className="text-white text-lg" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

          {/* ── INCLUSIONS / EXCLUSIONS ── */}
          <h2 className="section-title">Fare Inclusions and Exclusions</h2>
          <div className="ei-split">
            <div className="ei-box">
              <div className="ei-box-header">
                <span>INCLUDED</span>
              </div>
              <ul>
                {INCLUDED.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="ei-box">
              <div className="ei-box-header excl">
                <span>EXCLUDED</span>
              </div>
              <ul>
                {EXCLUDED.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

        {/* WEDDING SECTION */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Luxury Tempo Traveller in Kanpur for Weddings and VIP Guests</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 mb-6">
          {[
            "Kanpur has a strong VIP and grand wedding culture. From big family weddings to high-profile business events, people in Kanpur prefer classy, well-managed, and comfortable travel. Whether it is a large wedding at a banquet hall, a destination wedding, or a VIP guest arrival, travel arrangements play a big role in making the event smooth and impressive.",
            "A luxury tempo traveller in Kanpur is a perfect choice for wedding guests and VIP movement. These vehicles are designed for premium travel, offering stylish interiors, soft pushback seats, extra legroom, and full air conditioning. Guests can travel together comfortably, without the rush and confusion of multiple cars.",
            "For weddings, a luxury tempo traveller on rent in Kanpur is commonly used to move baraat members, close relatives, and outstation guests between hotels, wedding venues, and function locations. For VIP guests, it ensures privacy, comfort, and a professional travel experience. Our drivers understand event timing and VIP travel needs and always ensure on-time pickup and smooth driving.",
          ].map((p, i) => (
            <p key={i} className="text-[15px] text-gray-600 leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>

        {/* BENEFITS GRID */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Why Luxury Tempo Travellers Are Popular for Weddings in Kanpur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* OUTSTATION ROUTES */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#ff6b35]" id="attractions">
          Popular Outstation Routes from Kanpur
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map((r) => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {r.meta.map((m) => (
                  <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Why Book a Tempo Traveller with Yatra Travel India in Kanpur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:border-[#0f6ec8] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FaCheckCircle className="text-[#0f6ec8] text-sm" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">{w.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NOTE BOX */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed">
            <strong>Advance Booking Recommended:</strong> Kanpur tempo travellers get booked quickly during{" "}
            <strong>wedding season and long weekends.</strong> Booking <strong>4 to 7 days in advance</strong> is usually a safe choice.
            For luxury tempo travellers during peak wedding season, book <strong>1 to 2 weeks ahead.</strong> Multi-day outstation trips
            to Varanasi and Delhi should be confirmed early to secure vehicle and driver availability.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Frequently Asked Questions — Tempo Traveller in Kanpur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Book Your Kanpur Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Enjoy stylish, comfortable group travel without any hassle. Weddings, VIP movement, Lucknow, Varanasi, Prayagraj, Delhi —
              call us with your group size and travel date. We handle everything else.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-7 py-3 rounded-lg transition-colors flex items-center gap-2">
              <FaPhoneAlt size={12} /> Call Now — +91 90440 19511
            </a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/15 hover:bg-white/25 text-white font-bold text-sm px-7 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2">
              <FaWhatsapp size={14} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* NETWORK */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Our Pan-India Tempo Traveller Network</h2>
        <p className="text-sm text-gray-500 mb-5">Connecting India&apos;s major cities with premium group travel services.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {NETWORK_LINKS.map((n) => (
            <Link key={n.href} href={n.href} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] hover:shadow-sm transition-all group">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaBus className="text-[#0f6ec8] text-sm" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 group-hover:text-[#0f6ec8] transition-colors">{n.city}</div>
                <div className="text-xs text-gray-500 mt-0.5">{n.type}</div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/919044019511"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-2xl shadow-lg hover:scale-110 transition-all"
      >
        <FaWhatsapp size={26} color="#fff" />
      </a>

      {/* Call Float */}
      <a
        href="tel:+919044019511"
        className="fixed bottom-8 left-8 z-50 bg-[#0f6ec8] p-4 rounded-2xl shadow-lg hover:scale-110 transition-all"
      >
        <FaPhoneAlt size={22} color="#fff" />
      </a>

      {/* Toast */}
      {toast.show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl z-[9999] border-l-4 border-[#ff6b35] whitespace-nowrap">
          {toast.msg}
        </div>
      )}

      <Footer />
    </>
  );
}

/* ═══════════════════════════════════════════
   VEHICLE CARD SUB-COMPONENT
═══════════════════════════════════════════ */
function VehicleCard({ vehicle, onSelect }) {
  const isOrange = vehicle.color === "orange";
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      <div className="h-36 bg-gradient-to-br from-blue-50 to-blue-100 relative flex flex-col items-center justify-center gap-2">
        <FaBus className="text-[#0f6ec8] opacity-25 text-5xl" />
        <span className="text-[10px] font-semibold text-gray-400">{vehicle.title}</span>
        <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${isOrange ? "bg-[#ff6b35]" : "bg-[#0f6ec8]"}`}>
          {vehicle.badge}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-xs mb-3 leading-snug">{vehicle.title}</h3>
        <div className="bg-[#f8faff] rounded-lg p-3 mb-3 space-y-1">
          {vehicle.specs.map((s) => (
            <div key={s.label} className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500">{s.label}</span>
              <span className="font-bold text-gray-900">{s.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {vehicle.tags.map((tag) => (
            <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${isOrange ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200"}`}>
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onSelect(vehicle.title)}
          className={`w-full py-2.5 text-xs font-bold text-white rounded-lg transition-colors ${isOrange ? "bg-[#ff6b35] hover:bg-[#e55a24]" : "bg-[#0f6ec8] hover:bg-[#0a4a8f]"}`}
        >
          Book {vehicle.badge} Tempo
        </button>
      </div>
    </div>
  );
}
