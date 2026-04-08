"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaUserCheck,
  FaCheckCircle,
  FaRoute,
  FaBus,
  FaIdCard,
  FaFileInvoiceDollar,
  FaChevronRight,
  FaPlus,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const vehicles = [
  {
    title: "9 Seater Tempo Traveller",
    group: "6–9 People",
    localFare: "Rs 4,000",
    outstationRate: "Rs 20/km",
    badge: "Rs 4,000 Local",
    popular: "Small Groups",
    tags: ["Full AC", "Pushback Seats", "Solang Valley", "Hidimba Temple"],
    btnColor: "blue",
  },
  {
    title: "12 Seater Tempo Traveller",
    group: "10–12 People",
    localFare: "Rs 5,000",
    outstationRate: "Rs 23/km",
    badge: "Rs 5,000 Local",
    popular: "Most Booked",
    tags: ["Full AC", "Rohtang Pass", "Manali to Leh", "Spiti Valley"],
    btnColor: "blue",
  },
  {
    title: "16 Seater Tempo Traveller",
    group: "13–16 People",
    localFare: "Rs 7,000",
    outstationRate: "Rs 28/km",
    badge: "Rs 7,000 Local",
    popular: "",
    tags: ["Full AC", "More Luggage Space", "Multi-Day Routes", "School Trips"],
    btnColor: "blue",
  },
  {
    title: "20 Seater Tempo Traveller",
    group: "17–20 People",
    localFare: "Rs 9,000",
    outstationRate: "Rs 32/km",
    badge: "Rs 9,000 Local",
    popular: "Large Groups",
    tags: ["Full AC", "Max Luggage", "Wedding Groups", "College Batch"],
    btnColor: "orange",
  },
  {
    title: "Luxury Tempo Traveller",
    group: "10–15 People",
    localFare: "Rs 8,000",
    outstationRate: "Rs 35/km",
    badge: "Rs 8,000 Local",
    popular: "VIP & Multi-Day",
    tags: ["Reclining Seats", "Air Suspension", "Leh Multi-Day", "Corporate VIP"],
    btnColor: "blue",
  },
];

const allFleet = [
  { name: "9 Seater Tempo Traveller", group: "6 to 9", best: "Local sightseeing, Solang Valley, Hidimba Temple — compact for narrow hill roads", local: "Rs 4,000", rate: "Rs 20/km" },
  { name: "12 Seater Tempo Traveller", group: "10 to 12", best: "All routes including Rohtang Pass, Atal Tunnel, Leh highway — the most booked in Manali", local: "Rs 5,000", rate: "Rs 23/km" },
  { name: "16 Seater Tempo Traveller", group: "13 to 16", best: "Corporate retreats, college trips, multi-day mountain routes — extra space for trekking gear", local: "Rs 7,000", rate: "Rs 28/km" },
  { name: "20 Seater Tempo Traveller", group: "17 to 20", best: "Large groups, wedding parties, college batch trips — one vehicle, no splitting up", local: "Rs 9,000", rate: "Rs 32/km" },
  { name: "Luxury Tempo Traveller", group: "10 to 15", best: "Multi-day Manali to Leh, VIP corporate travel, destination weddings", local: "Rs 8,000", rate: "Rs 35/km" },
  { name: "26 Seater Mini Bus", group: "21 to 26", best: "Large corporate teams, school excursions, highway routes to Chandigarh and Dharamshala", local: "Rs 12,000", rate: "Rs 40/km" },
  { name: "35 Seater Bus", group: "27 to 35", best: "Very large groups, college events, community travel on local and highway routes", local: "Rs 15,000", rate: "Rs 50/km" },
];

const packages = [
  { title: "Manali Local Sightseeing", meta: ["8 Hours", "Up to 80 km", "Most Popular"], desc: "One day, 8 hours, up to 80 km within Manali. Covers Hidimba Temple, Solang Valley, Old Manali, Vashisht Village, Jogini Waterfall, and Mall Road. Most popular package for first-time Manali visitors travelling as a group.", fare: "Rs 5,000 onwards" },
  { title: "Manali to Rohtang Pass Day Trip", meta: ["3,978 metres altitude", "Permit Required", "Most Booked Day Trip"], desc: "The most booked single-day outstation package from Manali. Rohtang Pass sits at 3,978 metres and the drive up is genuinely spectacular. Permit charges apply and are arranged by Yatra Travel India at the time of booking.", fare: "Rs 7,000 onwards" },
  { title: "Manali to Solang Valley Day Trip", meta: ["14 km from Manali", "Snow Activities", "Paragliding"], desc: "14 km from Manali town. Snow activities, paragliding, and some of the best mountain views in the region. Short drive but worth booking a dedicated vehicle rather than sharing transport with strangers.", fare: "Rs 4,000 onwards" },
  { title: "Manali to Sissu via Atal Tunnel", meta: ["Atal Tunnel Route", "Lahaul Valley", "Scenic Drive"], desc: "One of the most scenic drives in Himachal Pradesh. The Atal Tunnel route through to Sissu in Lahaul Valley is increasingly popular with groups who want something beyond the standard Rohtang Pass trip.", fare: "Rs 6,000 onwards" },
  { title: "Manali to Leh Multi-Day Package", meta: ["2–3 Days", "Highest Motorable Passes", "Driver Accommodation Included"], desc: "The big one. 2 to 3 days crossing some of the highest motorable passes in the world. A fully planned package including driver accommodation, route briefing, and permit assistance for all required zones.", fare: "Rs 25,000 onwards" },
  { title: "Manali to Spiti Valley Multi-Day Package", meta: ["Via Kunzum Pass", "Remote Route", "Experienced Driver Required"], desc: "For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Requires an experienced driver and a well-maintained vehicle.", fare: "Rs 20,000 onwards" },
  { title: "Manali to Dharamshala Package", meta: ["~250 km", "Himachal Combo Trip", "Scenic Mountain Drive"], desc: "A popular route for groups combining two Himachal destinations in one trip. Around 250 km from Manali, the drive passes through some genuinely beautiful mountain scenery along the way.", fare: "Rs 12,000 onwards" },
  { title: "Manali to Chandigarh Package", meta: ["~310 km", "8–9 Hours", "End of Trip Transfer"], desc: "End of trip transfer for groups heading back to the plains. Around 310 km from Manali, the drive takes 8 to 9 hours depending on stops. One of the most regularly booked one-way outstation packages from Manali.", fare: "Rs 14,000 onwards" },
];

const steps = [
  { num: "1", title: "Call or WhatsApp 9044019511", desc: "Tell the team your group size, travel dates, and the routes you are planning — local sightseeing, Rohtang Pass, Solang Valley, Manali to Leh, or Spiti Valley" },
  { num: "2", title: "Get a Clear Complete Quote", desc: "Receive a complete fare breakdown — vehicle size, base fare, outstation rate, permit charges for Rohtang Pass, and what is included. No hidden numbers" },
  { num: "3", title: "Confirm the Booking", desc: "Once the quote is agreed the booking is confirmed. Vehicle details and driver name shared in advance — not on the morning of the trip" },
  { num: "4", title: "Travel", desc: "Vehicle arrives at your location at the confirmed time. Driver briefed on route. Fare settled as agreed. No surprises on the day" },
];

const features = [
  { title: "Serviced Before Every Trip", desc: "Tyre condition, brake performance, engine health checked before each mountain trip — non-negotiable on Himalayan roads" },
  { title: "Mountain Route Drivers", desc: "Drivers assigned based on specific mountain route experience — Rohtang, Leh highway, Spiti road. Not first-timers on unfamiliar terrain" },
  { title: "Powerful AC Throughout", desc: "Full cabin AC on all vehicles — adjusts well as temperatures drop significantly on mountain routes toward Rohtang and Leh" },
  { title: "Large Luggage Space", desc: "Manali trips mean trekking gear, winter clothing, and full bags. The luggage area matches the group size — no Tetris at every stop" },
  { title: "All Inclusive Fixed Fare", desc: "Fuel, toll, parking, driver allowance all included. Rohtang Pass permit arranged separately and confirmed at booking — no surprises" },
  { title: "Entertainment & Charging", desc: "LCD screens and charging points at every seat on luxury vehicles — especially important on 8 to 10 hour daily Manali to Leh drives" },
  { title: "Air Suspension on Luxury Models", desc: "Air suspension handles mountain roads without rattling the group — especially valuable on the rough stretches of the Leh and Spiti highway" },
  { title: "Driver Accommodation Included", desc: "For multi-day trips to Leh and Spiti, driver accommodation is arranged by Yatra Travel India — no separate charges added at the end" },
];

const attractions = [
  { title: "Rohtang Pass", desc: "Sits at 3,978 metres and the drive up is genuinely spectacular. Snow, views of the Kullu and Lahaul valleys, and an experience that no flatland destination can replicate. The most booked single-day outstation package from Manali. Permit required — arranged at the time of booking by Yatra Travel India. Starting fare Rs 7,000 for a 12 seater." },
  { title: "Solang Valley", desc: "14 km from Manali town. Popular for snow activities, paragliding, zorbing, and some of the best mountain views in the region. A short drive but worth booking a dedicated vehicle. The Atal Tunnel has made Solang Valley accessible year-round even when Rohtang is closed. Starting fare Rs 4,000 for a 12 seater." },
  { title: "Hidimba Devi Temple and Old Manali", desc: "The ancient cedar wood temple dedicated to Hidimba Devi is one of Manali's most visited landmarks. Old Manali nearby has cafes, guesthouses, and a relaxed pace very different from the main market. Both are standard stops on any Manali local sightseeing tour — covered as part of the 8 hour local sightseeing package." },
  { title: "Atal Tunnel and Sissu, Lahaul Valley", desc: "The world's longest highway tunnel at 9.02 km connects Manali to Sissu in Lahaul Valley. One of the most scenic drives in Himachal Pradesh and increasingly popular with groups who want something beyond the standard Rohtang Pass trip. Starting fare Rs 6,000 for a 12 seater." },
  { title: "Vashisht Village and Jogini Waterfall", desc: "Vashisht is 3 km from Manali town — known for its hot springs and ancient temple. Jogini Waterfall is a short trek from Vashisht through apple orchards and pine forests. Popular with groups who want a local nature walk as part of their Manali sightseeing day. Covered as part of the local sightseeing package." },
  { title: "Manali to Spiti Valley", desc: "For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Ancient monasteries, high-altitude desert landscapes, and roads that see very little traffic. Starting fare Rs 20,000 for a 12 seater multi-day package." },
  { title: "Manali to Leh Highway", desc: "2 to 3 days crossing some of the highest motorable passes in the world — Rohtang, Baralacha La, Nakee La, Lachulung La, and Tanglang La. A fully planned package including driver accommodation, route briefing, and permit assistance. Starting fare Rs 25,000 for a 12 seater." },
  { title: "Kullu and Naggar Castle", desc: "Kullu is 40 km from Manali on the National Highway. Famous for the Kullu Dussehra festival, river rafting on the Beas, and the ancient Naggar Castle perched above the valley. A popular half-day stop to combine with the return journey from Manali on the local sightseeing circuit." },
];

const whyUs = [
  { title: "Vehicle Condition That Matters", desc: "Every vehicle is serviced and checked before each mountain trip. Tyre condition, brake performance, engine health — these are not optional checks on Himalayan roads. They are non-negotiable." },
  { title: "Right Fleet for Every Route", desc: "9 seater for Solang Valley. 12 seater for Rohtang Pass. 20 seater for large groups. Luxury tempo for Manali to Leh. The vehicle matches the route, not just the head count." },
  { title: "Clear Fare Before You Confirm", desc: "Complete fare breakdown at quote stage — base fare, permit charges, outstation rate, all inclusions clearly stated. A clear figure you can share with your group and plan around." },
  { title: "Vehicle and Driver Confirmed in Advance", desc: "No waiting until the morning of the trip to find out who your driver is. Vehicle details and driver name shared in advance. Confirmed, not just promised." },
  { title: "Permit Assistance Included", desc: "Rohtang Pass permit arranged at booking. For Spiti and high-altitude zones, guidance on all permit requirements before departure so nothing delays the trip." },
  { title: "Multi-Day Package Planning", desc: "Manali to Leh and Spiti packages include route briefing, overnight stops, driver accommodation, and a driver who knows every stretch of the route from personal experience." },
];

const faqs = [
  { q: "What is the tempo traveller price in Manali?", a: "Starts at Rs 4,000 for a 9 seater and Rs 5,000 for a 12 seater for a full day local tour of 8 hours and 80 km." },
  { q: "Is Rohtang Pass permit included in the fare?", a: "No. Permit is charged separately and arranged by Yatra Travel India at the time of booking. Permit charges vary based on vehicle type and travel date — confirmed clearly at booking so there are no surprises." },
  { q: "Which size is best for Manali to Leh?", a: "12 seater for groups up to 12 people. 16 seater for groups of 13 or more for better comfort across a 2 to 3 day drive. On a 10 hour daily mountain drive the extra space of the 16 seater makes a real difference." },
  { q: "How early should I book a tempo traveller in Manali?", a: "1 to 2 weeks for local trips during peak season. 3 to 4 weeks in advance for Leh and Spiti multi-day packages. Peak season runs May to September and vehicles fill up fast." },
  { q: "Is a luxury tempo traveller available in Manali?", a: "Yes. Reclining seats, multi-zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs 8,000 for local sightseeing. Call 9044019511 to check availability." },
  { q: "What is the Manali to Leh tempo traveller fare?", a: "Starts at Rs 25,000 for a 12 seater. 2 to 3 day package. Fuel, toll, driver allowance, and driver accommodation all included." },
  { q: "What is the Manali to Rohtang Pass tempo traveller fare?", a: "Starts at Rs 7,000 for a 12 seater. Permit arranged separately at the booking stage by Yatra Travel India." },
  { q: "Does the fare include toll and parking?", a: "Yes. Every tempo traveller fare at Yatra Travel India includes fuel, toll, parking, and driver allowance. No hidden charges." },
  { q: "Is a tempo traveller safe on Manali mountain roads?", a: "Yes. Every vehicle is serviced before each trip — tyres, brakes, engine health. Drivers are assigned based on specific mountain route experience. Not first-timers on unfamiliar terrain." },
  { q: "Can I book a tempo traveller for Manali to Spiti Valley?", a: "Yes. Multi-day Spiti package starts at Rs 20,000 for a 12 seater. Experienced Spiti route driver assigned. One of the most remote and visually dramatic drives in India." },
  { q: "How many people fit in a 20 seater tempo traveller in Manali?", a: "Comfortably fits 17 to 20 people with luggage, winter gear, and trekking equipment. Best for large groups, wedding parties, and college batch trips. Starting fare Rs 9,000 for local sightseeing." },
  { q: "How do I book a tempo traveller in Manali?", a: "Call or WhatsApp Yatra Travel India on 9044019511. Share your group size, travel date, and route. Booking confirmed on the same call with vehicle details, driver name, and fixed fare." },
];

const popularRoutes = [
  "Manali Local Sightseeing Tour", "Manali to Rohtang Pass Day Trip", "Manali to Solang Valley Trip", "Manali to Sissu Atal Tunnel",
  "Manali to Leh Multi-Day Package", "Manali to Spiti Valley Package", "Manali to Dharamshala Tempo Traveller", "Manali to Chandigarh Tempo Traveller",
  "Hidimba Temple and Old Manali Tour", "Vashisht Village Jogini Waterfall", "Manali Corporate Retreat Vehicle", "Destination Wedding Manali Transfer",
  "College Batch Trip Manali", "Manali to Kasol Kheerganga", "Manali to Kullu Naggar Castle", "Manali to Lahaul Valley Tour",
  "12 Seater Tempo Traveller Manali", "20 Seater Tempo Traveller Manali", "Luxury Tempo Traveller Manali", "Mercedes Tempo Traveller Manali",
];

const useTags = [
  "Manali Local Sightseeing", "Rohtang Pass Day Trip", "Solang Valley Snow Trip", "Manali to Leh Multi-Day",
  "Spiti Valley Expedition", "Atal Tunnel Sissu Drive", "Corporate Retreats Manali", "Destination Wedding Group",
  "College Batch Trip Manali", "Manali to Dharamshala", "Manali to Chandigarh Transfer", "Trekking Group Vehicle",
];

/* ─────────────────────────────────────────────
   MAIN PAGE COMPONENT
───────────────────────────────────────────── */
export default function TempoTravellerManali() {
  const [activeTab, setActiveTab] = useState("Local Sightseeing");
  const [fromCity] = useState("Manali");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");

  const tabs = ["Local Sightseeing", "Rohtang / Solang", "Manali to Leh", "Spiti / Outstation"];

  const handleSearch = () => {
    if (!toCity.trim()) return alert("Please enter your destination.");
    alert(`Searching vehicles from ${fromCity} to ${toCity}...`);
  };

  return (
    <>
      {/* ── SEO Meta (Next.js metadata API preferred, but inline for component use) ── */}

      <Navbar />

      {/* TOP BAR */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="text-white font-medium text-xs">
            Manali&apos;s Trusted Tempo Traveller — Rohtang Pass, Manali to Leh, Spiti Valley, Solang Valley and Local Tours
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
          <span>Tempo Traveller in Manali</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">
            Tempo Traveller in Manali — One Vehicle for the Whole Group
          </h1>
          <p className="text-blue-200 text-center text-sm mb-4">
            Rohtang Pass · Solang Valley · Manali to Leh · Spiti Valley · Atal Tunnel · Dharamshala · Chandigarh
          </p>

          {/* Hero Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["9 to 35 Seater Available", "Luxury and Mercedes Options", "Starting Rs 4,000 Local", "Mountain Route Experienced Drivers"].map((b) => (
              <span key={b} className="bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>

          {/* BOOKING CARD */}
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-5xl mx-auto p-6 md:p-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[80px] py-2 px-3 text-xs font-semibold rounded-md transition-all ${
                    activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">From</label>
                <input value={fromCity} readOnly className="w-full px-4 py-3 border-1.5 border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-700 outline-none" />
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
                  <option>9 Seater Tempo Traveller</option>
                  <option>12 Seater Tempo Traveller</option>
                  <option>16 Seater Tempo Traveller</option>
                  <option>20 Seater Tempo Traveller</option>
                  <option>Luxury Tempo Traveller</option>
                  <option>Mercedes Tempo Traveller</option>
                  <option>26 Seater Mini Bus</option>
                  <option>35 Seater Bus</option>
                </select>
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-3 px-8 rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-[#f8faff] border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { title: "Mountain Route Drivers", sub: "Rohtang, Leh, Spiti experience" },
            { title: "On-Time Pickup", sub: "Vehicle confirmed in advance" },
            { title: "Fixed Fare — No Surprises", sub: "All inclusive, nothing added after" },
            { title: "Serviced Before Every Trip", sub: "Tyres, brakes, engine checked" },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-3 px-4 md:px-6 py-3 ${i < 3 ? "border-r border-gray-200" : ""} border-b md:border-b-0`}>
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
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
            Yatra Travel India offers <strong>tempo traveller on rent in Manali</strong> for local sightseeing, Rohtang Pass day trips,
            Solang Valley, Atal Tunnel, and multi-day packages to Leh, Spiti Valley, Dharamshala, and Chandigarh.{" "}
            <strong>9 seater to 35 seater available — including Luxury and Mercedes Tempo Traveller.</strong> Every vehicle is serviced
            and checked before each mountain trip. Experienced mountain route drivers on every booking. Call <strong>9044019511</strong> to book.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 pl-4 border-l-4 border-[#ff6b35]">
            Tempo Traveller on Rent in Manali — What to Know Before You Book
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            Manali is not like other destinations. The roads are different. The weather changes fast. A route that was clear in the morning
            can look completely different by afternoon. And when you are travelling with a group of 10 or 15 people through the Himalayas,
            the driver sitting behind the wheel matters more than almost anything else about the trip.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Manali is not a one-size-fits-all destination. A couple heading to Solang Valley for a day needs something completely different
            from a 20-person corporate group driving to Leh. A family pilgrimage to Rohtang Pass has different requirements from a trekking
            group heading deep into Spiti Valley. That is why having the right fleet matters more in Manali than almost anywhere else in India.
          </p>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Fleet Available on Rent in Manali</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicles.map((v) => (
            <VehicleCard key={v.title} vehicle={v} />
          ))}
        </div>

        {/* FLEET TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Which Vehicle Is Right for Your Group in Manali?</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle", "Group Size", "Best For", "Local Fare", "Outstation Rate"].map((h) => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-5 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFleet.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"} hover:bg-blue-50 transition-colors`}>
                  <td className="py-3 px-5 font-semibold text-gray-900 border-r border-gray-200 border-b border-gray-100">{row.name}</td>
                  <td className="py-3 px-5 text-gray-600 border-r border-gray-200 border-b border-gray-100">{row.group} people</td>
                  <td className="py-3 px-5 text-gray-600 border-r border-gray-200 border-b border-gray-100 text-xs leading-relaxed">{row.best}</td>
                  <td className="py-3 px-5 font-bold text-[#0f6ec8] border-r border-gray-200 border-b border-gray-100">{row.local}</td>
                  <td className="py-3 px-5 text-gray-600 border-b border-gray-100">{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-10 py-2">
          * All fares include fuel, toll, parking, driver allowance, and state tax for trips outside Himachal Pradesh. Rohtang Pass permit charged separately — arranged by Yatra Travel India at booking. Driver accommodation included for multi-day Leh and Spiti trips.
        </p>

        {/* USE TAGS */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Perfect For</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {useTags.map((tag) => (
            <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>

        {/* PACKAGES */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Most Booked Tempo Traveller Packages from Manali</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{pkg.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {pkg.meta.map((m) => (
                  <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{pkg.desc}</p>
              <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-2">
                <span className="text-xs text-gray-500">12 Seater starting fare</span>
                <strong className="text-sm font-extrabold text-[#0f6ec8]">{pkg.fare}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* LUXURY SECTION */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Luxury Tempo Traveller in Manali — When Standard Is Not Enough</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 mb-6">
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            Sometimes the standard version is not what the trip calls for. A multi-day Manali to Leh drive, a corporate VIP group, a destination wedding party.
            These occasions call for something better. A luxury tempo traveller in Manali is a completely different experience — fully reclining leather seats,
            powerful multi-zone AC, air suspension that handles mountain roads without rattling the group around, LCD entertainment screens, charging points at every seat.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            On a route like Manali to Leh where the group spends 8 to 10 hours a day in the vehicle across two consecutive days, the comfort difference is not a luxury.
            It is practical. Arriving at each overnight stop feeling rested rather than exhausted makes the whole trip better.
          </p>
        </div>

        {/* LUXURY FARE TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Luxury Tempo Traveller Fare in Manali</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle", "Seating", "Local Fare", "Outstation Rate"].map((h) => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-5 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Luxury Tempo Traveller", "9 to 12 Seater", "Rs 8,000 onwards", "Rs 26/km"],
                ["Luxury Tempo Traveller", "13 to 16 Seater", "Rs 11,000 onwards", "Rs 29/km"],
                ["Mercedes Tempo Traveller", "9 to 13 Seater", "Rs 12,000 onwards", "Rs 34/km"],
              ].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"} hover:bg-blue-50`}>
                  {row.map((cell, j) => (
                    <td key={j} className={`py-3 px-5 border-b border-gray-100 border-r border-gray-200 last:border-r-0 ${j === 2 ? "font-bold text-[#0f6ec8]" : "text-gray-700"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-10 py-2">
          * Every luxury tempo traveller includes: fully reclining leather seats, powerful multi-zone AC, air suspension, LCD entertainment screens, charging points at every seat, large luggage space for trekking gear.
        </p>

        {/* INCLUSIONS / EXCLUSIONS TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">What Is Included in Every Vehicle Rental in Manali</h2>
        <div className="overflow-x-auto rounded-xl border border-blue-200 mb-12">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                <th className="text-center text-white font-bold py-4 px-6 border-r border-white/25">Exclusion</th>
                <th className="text-center text-white font-bold py-4 px-6">Inclusion</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rohtang Pass permit charges (arranged by Yatra Travel India at booking)", "Fuel Charges"],
                ["State Tax for trips outside Himachal Pradesh", "Driver Allowance"],
                ["Zone permits for restricted areas near Indo-Tibetan border (foreign nationals only)", "Toll Taxes"],
                ["Parking Charges as per actual at certain sites", "Parking (most locations)"],
                ["Driver Night Charge for extended stays (Tempo Traveller – ₹500)", "Driver Accommodation (Multi-day trips)"],
              ].map(([excl, incl], i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"} hover:bg-blue-50`}>
                  <td className="py-3 px-6 text-center text-gray-600 text-xs leading-relaxed border-r border-blue-100 border-b border-blue-50">{excl}</td>
                  <td className="py-3 px-6 text-center text-gray-700 font-semibold text-xs border-b border-blue-50">{incl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* HOW TO BOOK */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">How to Book a Tempo Traveller in Manali</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step) => (
            <div key={step.num} className="bg-[#f8faff] border border-blue-100 rounded-xl p-6 text-center">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-extrabold text-lg">{step.num}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Features Included in All Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((f) => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3">
                <FaCheckCircle className="text-white text-lg" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ATTRACTIONS */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#ff6b35]">Places to Visit in and Around Manali by Tempo Traveller</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {attractions.map((a) => (
            <div key={a.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-3 pb-2 border-b border-gray-100">{a.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Why Book a Tempo Traveller in Manali with Yatra Travel India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-[#0f6ec8] text-base" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1.5">{w.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* WARNING BOX */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed">
            <strong>Peak Season Advance Booking Essential:</strong> Peak season in Manali runs from <strong>May to September.</strong> The 12 seater tempo traveller books up especially fast during this period. Book at least <strong>1 to 2 weeks in advance</strong> for local and Rohtang trips. For <strong>Manali to Leh and Spiti multi-day packages, 3 to 4 weeks in advance is strongly recommended.</strong>
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">Frequently Asked Questions — Tempo Traveller in Manali</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Book Your Manali Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Whether your group needs a 9 seater for a quick Solang Valley day trip or a 20 seater for a full Manali to Leh expedition,
              Yatra Travel India has the vehicle, the driver, and the local knowledge to make it happen properly. Call 9044019511.
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

        {/* POPULAR ROUTES GRID */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Popular Tempo Traveller Routes from Manali</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">
          {popularRoutes.map((route, i) => (
            <div key={route} className={`px-4 py-3 border-r border-b border-gray-200 ${(i + 1) % 4 === 0 ? "border-r-0" : ""} ${i >= popularRoutes.length - 4 ? "border-b-0" : ""} ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
              <Link href="#" className="text-xs text-gray-700 hover:text-[#0f6ec8] transition-colors block leading-snug">{route}</Link>
            </div>
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

      <Footer />
    </>
  );
}

/* ─────────────────────────────────────────────
   VEHICLE CARD SUB-COMPONENT
───────────────────────────────────────────── */
function VehicleCard({ vehicle }) {
  const isOrange = vehicle.btnColor === "orange";
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-blue-50 to-blue-100 relative flex flex-col items-center justify-center gap-2">
        <FaBus className="text-[#0f6ec8] opacity-30 text-6xl" />
        <span className="text-xs font-semibold text-gray-400">{vehicle.title}</span>
        <span className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full ${isOrange ? "bg-[#ff6b35]" : "bg-[#0f6ec8]"}`}>
          {vehicle.badge}
        </span>
        {vehicle.popular && (
          <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full border border-yellow-300">
            {vehicle.popular}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-sm mb-3">{vehicle.title}</h3>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 bg-[#f8faff] rounded-lg p-3 mb-3">
          <div className="text-xs text-gray-500"><strong className="block text-xs font-bold text-gray-900">{vehicle.group}</strong>Group Size</div>
          <div className="text-xs text-gray-500"><strong className="block text-xs font-bold text-gray-900">{vehicle.localFare}</strong>Local 8 hrs/80 km</div>
          <div className="text-xs text-gray-500"><strong className="block text-xs font-bold text-gray-900">{vehicle.outstationRate}</strong>Outstation Rate</div>
          <div className="text-xs text-gray-500"><strong className="block text-xs font-bold text-[#16a34a] bg-green-50 px-2 py-0.5 rounded-full text-center">Available Now</strong></div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map((tag) => (
            <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${isOrange ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200"}`}>
              {tag}
            </span>
          ))}
        </div>

        <button
          className={`w-full py-3 text-sm font-bold text-white rounded-lg transition-colors ${isOrange ? "bg-[#ff6b35] hover:bg-[#e55a24]" : "bg-[#0f6ec8] hover:bg-[#0a4a8f]"}`}
          onClick={() => {
            const el = document.getElementById("booking");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book {vehicle.title.split(" ").slice(0, 3).join(" ")}
        </button>
      </div>
    </div>
  );
}
