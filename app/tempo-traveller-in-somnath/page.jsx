"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Darshan Tour Fare", value: "₹7,000 onwards" }, { label: "Local Tour Fare", value: "₹3,000 onwards" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Jyotirlinga Tour", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Darshan Tour Fare", value: "₹8,000 onwards" }, { label: "Local Tour Fare", value: "₹4,000 onwards" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Dwarka Tour", "Family Pilgrimage"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Darshan Tour Fare", value: "₹8,500 onwards" }, { label: "Starting Fare", value: "₹5,500 onwards" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Saurashtra Circuit", "Large Groups"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Darshan Tour Fare", value: "₹9,500 onwards" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Max Luggage", "Festival Groups", "Kartik Purnima"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹7,000 (Local Tour)" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Facility", value: "Multi-Zone AC, LCD Screen, Charging" }], tags: ["Premium AC", "LCD Screens", "Air Suspension", "Charging Points"] },
  { badge: "Maharaja",  title: "Maharaja Tempo Traveller",  img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Facility", value: "AC, Sofa Seats, Full Recline" }], tags: ["Sofa Seats", "Full Recline", "VIP Pilgrimage", "Senior Citizens"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   capacity: "9 + Driver",     ac: "AC",         ideal: "Small families and groups — Somnath Jyotirlinga darshan, Bhalka Tirth, Triveni Sangam, and local Somnath temple circuit in one day" },
  { vehicle: "12 Seater Tempo Traveller",  capacity: "12 + Driver",    ac: "AC",         ideal: "Medium pilgrim groups — full Somnath darshan tour, Somnath to Dwarka, Somnath to Sasan Gir, and outstation trips across Gujarat" },
  { vehicle: "16 Seater Tempo Traveller",  capacity: "16 + Driver",    ac: "AC",         ideal: "Large groups of 13–16 — Saurashtra pilgrimage circuit, Somnath to Ahmedabad, wedding parties, and multi-day Gujarat tours" },
  { vehicle: "20 Seater Tempo Traveller",  capacity: "20 + Driver",    ac: "AC",         ideal: "Large festival and pilgrimage groups — Kartik Purnima tours, Saurashtra circuit covering Somnath, Dwarka, Palitana, Girnar, and Porbandar" },
  { vehicle: "Luxury Tempo Traveller",     capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "VIP pilgrims, senior citizens, elderly groups — multi-zone AC, pushback reclining seats, LCD screens, charging points at every seat" },
  { vehicle: "Maharaja Tempo Traveller",   capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "Ultimate VIP pilgrimage travel — sofa seats, full recline, premium interiors, air suspension for long Gujarat highway routes" },
];

const DARSHAN_FARE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   darshan: "₹7,000 onwards", local: "₹3,000 onwards" },
  { vehicle: "12 Seater Tempo Traveller",  darshan: "₹8,000 onwards", local: "₹4,000 onwards" },
  { vehicle: "16 Seater Tempo Traveller",  darshan: "₹8,500 onwards", local: "₹5,500 onwards" },
  { vehicle: "20 Seater Tempo Traveller",  darshan: "₹9,500 onwards", local: "On Request"      },
];

const ROUTES_TABLE = [
  { route: "Somnath to Dwarka",      dist: "~230 km", fare: "₹9,000 (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Somnath to Sasan Gir",   dist: "~45 km",  fare: "₹3,500 (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Somnath to Diu",         dist: "~90 km",  fare: "₹5,000 (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Somnath to Junagadh",    dist: "~85 km",  fare: "₹4,500 (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Somnath to Ahmedabad",   dist: "~400 km", fare: "₹15,000 (12 Seater)", vehicle: "12 or 16 Seater" },
  { route: "Somnath to Porbandar",   dist: "~120 km", fare: "On Request",           vehicle: "12 or 16 Seater" },
  { route: "Somnath to Palitana",    dist: "~180 km", fare: "On Request",           vehicle: "12 or 16 Seater" },
];

const DARSHAN_SPOTS = [
  { name: "Somnath Jyotirlinga Temple", desc: "The main Jyotirlinga — seek blessings at one of India's most sacred and powerful Shiva shrines." },
  { name: "Somnath Beach & Triveni Sangam", desc: "The sacred confluence of Hiran, Kapila, and Saraswati rivers meeting the Arabian Sea." },
  { name: "Bhalka Tirth", desc: "The sacred spot where Lord Krishna was wounded — a deeply revered site for all Vaishnavites." },
  { name: "Geeta Mandir", desc: "A beautiful temple dedicated to the Bhagavad Geeta with all 18 chapters inscribed on its walls." },
  { name: "Lakshminarayan Temple", desc: "A serene temple dedicated to Lord Vishnu and Goddess Lakshmi near Somnath." },
  { name: "Suraj Mandir", desc: "An ancient sun temple near Somnath — a heritage stop on the full Somnath darshan circuit." },
];

const TIPS = [
  { title: "Early Morning Visit", desc: "Temple opens at 6 AM. Groups arriving before 7 AM avoid the longest queues. Brief the driver for early hotel pickup so your darshan is peaceful and unhurried." },
  { title: "Plan Around Aarti Timings", desc: "Three aartis daily at 7 AM, 12 PM, and 7 PM. Evening aarti with the sea backdrop is the most popular with pilgrimage groups. Plan your itinerary around your preferred aarti timing." },
  { title: "Kartik Purnima Booking", desc: "One of the busiest pilgrimage periods in Somnath. Book your tempo traveller at least 3 to 4 weeks in advance during this festival. 20 seater fills up fastest." },
  { title: "Combine with Dwarka", desc: "Most groups visiting Somnath add Dwarka Dwarkadhish darshan to the same trip. Somnath to Dwarka is 230 km. Multi-day package with driver accommodation available." },
];

const FEATURES = [
  { title: "Premium Pushback Seats",     desc: "Soft and wide pushback seats for long Saurashtra highway journeys — ideal for senior pilgrims on routes like Somnath to Dwarka or Somnath to Ahmedabad." },
  { title: "Multi-Zone Air Conditioning",desc: "All tempo travellers are fully AC — essential for Gujarat's hot coastal climate. Keeps pilgrims comfortable throughout the darshan tour and outstation journeys." },
  { title: "Extra Legroom",              desc: "Wide aisles and generous legroom — senior citizens and families can travel comfortably without feeling cramped during full-day Somnath pilgrimage circuits." },
  { title: "Stylish Interiors",          desc: "Clean, modern interiors with soft LED lighting — comfortable and peaceful atmosphere for a spiritual pilgrimage to Somnath Jyotirlinga." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for bags, devotional items, and prasad — perfect for multi-day Saurashtra pilgrimage tours and long Gujarat outstation trips." },
  { title: "Smooth Suspension",          desc: "Superior suspension system built for highways — smooth and comfortable ride even on long routes like Somnath to Ahmedabad or the full Saurashtra circuit." },
  { title: "LCD Screens & Charging",     desc: "Music systems, LCD TVs, and mobile charging points in luxury tempo travellers — keeps pilgrims relaxed during long spiritual journeys across Gujarat." },
  { title: "Verified & Experienced Drivers", desc: "Trained, verified drivers who know Somnath temple routes, Gujarat highways, and Saurashtra pilgrimage circuits — ensuring safe and timely darshan for all groups." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual during the trip)", "State entry tax / permit charges (if applicable)", "Parking charges at Somnath Temple and other spots", "Driver night allowance (₹500, if applicable)", "Entry fees at wildlife sanctuaries (Sasan Gir)"];

const BENEFITS = [
  { title: "Complete Darshan in One Vehicle",   desc: "Cover Somnath Jyotirlinga, Bhalka Tirth, Triveni Sangam, Geeta Mandir, and all sacred spots comfortably in one day with one vehicle and one experienced driver who waits at every stop." },
  { title: "Ideal for Senior Pilgrims",          desc: "Spacious interiors, reclining seats, and strong AC make our tempo travellers the best choice for elderly passengers on Somnath pilgrimage tours and long Gujarat circuits." },
  { title: "Saurashtra Circuit Specialists",    desc: "Our drivers know the full Saurashtra pilgrimage circuit — Somnath, Dwarka, Palitana, Girnar, and Porbandar. Multi-day packages planned and managed completely by Yatra Travel India." },
  { title: "Flexible for All Travel Needs",     desc: "From local Somnath darshan and Sasan Gir wildlife trips to the full Saurashtra circuit, our tempo travellers are versatile — ideal for short darshan and multi-day pilgrimages alike." },
  { title: "Cost Effective Group Travel",       desc: "Hiring a tempo traveller in Somnath is far more economical than multiple taxis. Save on fuel and coordination while providing premium comfort to your entire pilgrimage group." },
  { title: "Transparent Pricing Always",        desc: "At Yatra Travel India we provide complete fare details in advance — toll, parking, and driver allowance are clearly discussed. No hidden charges, no last-minute surprises." },
];

const FAQS = [
  { q: "Is a tempo traveller the best way to travel from Somnath to Dwarka Jyotirlinga?",    a: "Yes. Tempo traveller from Somnath to Dwarka is the most practical option for pilgrimage groups. 230 km, smooth Gujarat highway, 4 hour drive. Covers both Jyotirlingas in one comfortable trip. Starting fare ₹9,000 for a 12 seater." },
  { q: "What is the tempo traveller fare for Somnath local temple tour?",                    a: "Tempo traveller fare for Somnath local temple tour starts at ₹3,000 for a 9 seater and ₹4,000 for a 12 seater. It covers Somnath Jyotirlinga, Bhalka Tirth, Triveni Sangam, Geeta Mandir, and Somnath Beach in one full day." },
  { q: "Can I book a tempo traveller in Somnath for Kartik Purnima festival?",               a: "Yes. Tempo traveller for Kartik Purnima in Somnath is in high demand during this festival period. Book at least 3 to 4 weeks in advance. 16 and 20 seater most popular for large festival pilgrimage groups." },
  { q: "What is the tempo traveller fare from Somnath to Sasan Gir?",                        a: "Tempo traveller Somnath to Sasan Gir fare starts at ₹3,500 for a 12 seater. Sasan Gir is 45 km from Somnath. Most popular wildlife day trip from Somnath — home of the Asiatic lion." },
  { q: "Is tempo traveller available for the Saurashtra pilgrimage circuit from Somnath?",   a: "Yes. Tempo traveller for Saurashtra pilgrimage circuit from Somnath covers Somnath, Dwarka, Palitana, Girnar, and Porbandar. Multi day package with driver accommodation available. Call 9044019511 to plan and book." },
  { q: "What is the tempo traveller fare from Somnath to Diu?",                              a: "Tempo traveller Somnath to Diu fare starts at ₹5,000 for a 12 seater. Diu is 90 km from Somnath. Popular coastal add-on for groups combining Jyotirlinga darshan with a beach getaway." },
  { q: "Which tempo traveller size is best for a Somnath pilgrimage group of 15 people?",   a: "16 seater tempo traveller in Somnath is the right choice for a group of 15 people. Better legroom, more luggage space, and comfortable on longer routes like Somnath to Dwarka or Somnath to Ahmedabad. Starting fare ₹5,500." },
  { q: "What is the tempo traveller fare from Somnath to Junagadh?",                         a: "Tempo traveller Somnath to Junagadh fare starts at ₹4,500 for a 12 seater. Junagadh is 85 km from Somnath. Popular for Girnar Hill pilgrimage groups and Uparkot Fort heritage visits." },
  { q: "Can I book a tempo traveller in Somnath for evening aarti and return?",              a: "Yes. Short hire tempo traveller available for evening aarti visit in Somnath. Aarti held daily at 7 PM with sea backdrop. Confirm pickup time and return drop with Yatra Travel India at booking. Call 9044019511 for short hire fare." },
  { q: "What is the tempo traveller fare from Somnath to Ahmedabad?",                        a: "Tempo traveller Somnath to Ahmedabad fare starts at ₹15,000 for a 12 seater. Ahmedabad is 400 km from Somnath. Drive takes around 6 to 7 hours. Multi day Gujarat tour package available." },
  { q: "Is luxury tempo traveller available in Somnath for VIP pilgrimage groups?",          a: "Yes. Luxury tempo traveller in Somnath available through Yatra Travel India. Pushback reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting fare ₹7,000 for local tour. Recommended for groups with elderly passengers on long pilgrimage routes." },
  { q: "How do I book a tempo traveller in Somnath Temple?",                                 a: "Call or WhatsApp Yatra Travel India on 9044019511. Share group size, travel date, and route. Tempo traveller booking in Somnath confirmed on same call with vehicle details, driver name, and fixed fare. No hidden charges." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",     city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Kumbh, Pilgrimages & City Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ayodhya",                   city: "Tempo Traveller in Ayodhya",   type: "Ram Mandir Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-kanpur",                    city: "Tempo Traveller in Kanpur",    type: "Weddings, Corporate & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-manali",                    city: "Tempo Traveller in Manali",    type: "Mountain Routes & Adventure Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerSomnath() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Somnath to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* Top Info Bar */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Somnath Jyotirlinga Darshan — Group Tours · Dwarka · Sasan Gir · Saurashtra Pilgrimage Circuit · Gujarat</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link><span>/</span>
          <Link href="/" className="text-[#0f6ec8] hover:underline">Services</Link><span>/</span>
          <span>Tempo Traveller in Somnath</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Book Tempo Traveller in Somnath Temple</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Somnath Jyotirlinga Darshan · Bhalka Tirth · Dwarka · Sasan Gir · Saurashtra Pilgrimage Circuit · Ahmedabad</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury & Maharaja Options", "Driver Waits at Every Stop", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Somnath" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "Driver Waits at Every Stop", sub: "Complete darshan without any rush" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Fuel, toll, driver allowance included" }, { title: "Verified Drivers", sub: "Know Somnath routes and Gujarat highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Intro Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller for Somnath Jyotirlinga darshan group tours</strong> — covering Somnath Temple, Bhalka Tirth, Triveni Sangam, Geeta Mandir, and all sacred spots in one full day. <strong>9 seater to 20 seater available — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean, pushback seats, verified drivers. The driver waits at every stop. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* About Somnath */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller for Somnath Jyotirlinga Darshan Group Tour</h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Somnath is one of the twelve Jyotirlingas in India. Every year thousands of devotees travel to Somnath in groups for darshan. Getting the whole group to the temple on time, managing parking near the Jyotirlinga, and covering nearby sacred spots on the same day needs one reliable vehicle and one experienced driver who knows Somnath well.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">That is exactly what Yatra Travel India provides.</p>
          </div>
        </div>

        {/* Vehicle Cards */}
        <ST id="services">Tempo Traveller Options in Somnath</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* What Darshan Tour Covers */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">What a Somnath Jyotirlinga Darshan Group Tour Covers</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">A full day darshan package by tempo traveller in Somnath covers all major sacred sites comfortably in one day. The driver waits at every stop.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {DARSHAN_SPOTS.map((spot, i) => (
              <div key={spot.name} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 flex items-start gap-3">
                <div className="w-8 h-8 bg-[#0f6ec8] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">{i + 1}</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{spot.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800 font-semibold">All 6 sacred spots covered comfortably in one full day. The driver waits patiently at every stop — no rush, no confusion.</p>
          </div>
        </div>

        {/* Darshan Fare Table */}
        <ST border="border-[#ff6b35]">Darshan Tour Fare in Somnath — Vehicle-Wise</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Option", "Full Day Darshan Tour Fare", "Local Temple Tour Fare"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DARSHAN_FARE_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.darshan}</td>
                  <td className="py-3 px-4 font-bold text-blue-600 border-b border-gray-100 text-sm">{row.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-10 pt-2">* Toll, parking, and driver allowance discussed in advance. No hidden charges. Call 9044019511 for exact quote.</p>

        {/* Full Comparison Table */}
        <ST>Tempo Traveller Options in Somnath — Full Comparison</ST>
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

        {/* Outstation Routes Table */}
        <ST border="border-green-500">Tempo Traveller Routes from Somnath — Fares &amp; Distances</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-2">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Route", "Distance", "Starting Fare", "Vehicle", "Booking"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.fare}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    <a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-10 pt-2">* Fares are starting rates for 12 seater unless specified. Call 9044019511 for exact quote based on group size and dates.</p>

        {/* Saurashtra Circuit */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Saurashtra Pilgrimage Circuit by Tempo Traveller from Somnath</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">The Saurashtra pilgrimage circuit is the most complete spiritual journey in Gujarat. Most pilgrimage groups visiting Somnath extend their trip to cover all major sacred destinations across Saurashtra in one multi-day tour.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
            {["Somnath Jyotirlinga", "Dwarka Dwarkadhish", "Palitana Jain Temples", "Girnar Jain Pilgrimage", "Porbandar Birthplace of Gandhi"].map((place, i) => (
              <div key={place} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                <div className="w-7 h-7 bg-[#0f6ec8] rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-xs">{i + 1}</div>
                <p className="text-xs font-bold text-gray-800 leading-snug">{place}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-sm text-blue-800 leading-relaxed">Multi-day Saurashtra circuit package with driver accommodation available. Call <strong>9044019511</strong> to plan a fully customized itinerary for your pilgrimage group.</p>
          </div>
        </div>

        {/* Important Tips */}
        <ST border="border-[#ff6b35]">Important Tips for Somnath Darshan Group Tour</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {TIPS.map((tip, i) => (
            <div key={tip.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#ff6b35] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[#ff6b35] font-bold text-sm">{i + 1}</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aarti Timings Card */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-300 rounded-xl p-6 mb-12">
          <h3 className="font-extrabold text-gray-900 text-base mb-4 pl-3 border-l-4 border-[#ff6b35]">Somnath Temple Aarti Timings</h3>
          <div className="grid grid-cols-3 gap-4">
            {[{ time: "7:00 AM", label: "Morning Aarti", note: "Peaceful start to the day" }, { time: "12:00 PM", label: "Afternoon Aarti", note: "Midday prayers and darshan" }, { time: "7:00 PM", label: "Evening Aarti", note: "Most popular — sea backdrop" }].map(a => (
              <div key={a.time} className="bg-white border border-orange-200 rounded-xl p-4 text-center">
                <div className="text-xl font-extrabold text-[#0f6ec8] mb-1">{a.time}</div>
                <div className="text-xs font-bold text-gray-800 mb-1">{a.label}</div>
                <div className="text-[11px] text-gray-500">{a.note}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-700 mt-4 font-semibold">Plan your tempo traveller pickup time around your preferred aarti. Share your aarti preference at the time of booking.</p>
        </div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Somnath</ST>
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
        <ST>Why Choose Yatra Travel India for Somnath Tempo Traveller</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Festival Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Kartik Purnima — Book Early:</strong> Somnath receives lakhs of pilgrims during <strong>Kartik Purnima.</strong> Book your tempo traveller at least <strong>3 to 4 weeks in advance</strong> during this festival. 16 and 20 seater vehicles fill up fastest. Call <strong>9044019511</strong> to secure your vehicle early.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Somnath</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Somnath Darshan Tour Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Somnath Jyotirlinga darshan, Dwarka, Sasan Gir, Saurashtra pilgrimage circuit — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"><FaPhoneAlt size={12} /> Call Now — +91 90440 19511</a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2"><FaWhatsapp size={14} /> WhatsApp Us</a>
          </div>
        </div>

        {/* Network */}
        <ST>Our Pan-India Tempo Traveller Network</ST>
        <p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India&apos;s major pilgrimage and travel destinations with premium group travel services.</p>
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

      {/* Floating Buttons */}
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
