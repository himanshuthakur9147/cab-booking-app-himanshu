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
      "areaServed": { "@type": "Country", "name": "India" },
    },
    {
      "@type": "Service",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-manali#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-manali",
      "name": "Tempo Traveller in Manali | Yatra Travel India",
      "description": "Hire tempo traveller in Manali for local sightseeing, Rohtang Pass trips, Solang Valley tours, and multi day journeys to Leh and Spiti Valley. Choose from 9, 12, 16, and 20 seater AC and luxury tempo travellers with experienced mountain drivers and transparent pricing.",
      "provider": { "@id": "https://www.yatratravelindia.com/#business" },
      "areaServed": { "@type": "City", "name": "Manali" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "18", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-manali" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "reviewCount": "214" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-manali#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the tempo traveller price in Manali?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo traveller price in Manali starts from Rs 4000 for a 9 seater and Rs 5000 for a 12 seater for a full day local sightseeing package." } },
        { "@type": "Question", "name": "Is Rohtang Pass permit included in the fare?", "acceptedAnswer": { "@type": "Answer", "text": "No, Rohtang Pass permit is charged separately and arranged at the time of booking." } },
        { "@type": "Question", "name": "Which tempo traveller is best for Manali to Leh trip?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater is ideal for groups up to 12 people, while a 16 seater is better for larger groups for comfort on long mountain routes." } },
        { "@type": "Question", "name": "How early should I book a tempo traveller in Manali?", "acceptedAnswer": { "@type": "Answer", "text": "Book 1 to 2 weeks in advance for local trips and 3 to 4 weeks in advance for Leh or Spiti multi day tours." } },
        { "@type": "Question", "name": "Is luxury tempo traveller available in Manali?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers with reclining seats, AC, charging points, and premium interiors are available for comfortable travel." } },
        { "@type": "Question", "name": "What is the Manali to Leh tempo traveller fare?", "acceptedAnswer": { "@type": "Answer", "text": "The fare starts from around Rs 25000 for a 12 seater for a 2 to 3 day trip including fuel, toll, and driver charges." } },
        { "@type": "Question", "name": "What is the Manali to Rohtang Pass tempo traveller fare?", "acceptedAnswer": { "@type": "Answer", "text": "The fare starts from around Rs 7000 for a 12 seater, with permit charges additional." } },
        { "@type": "Question", "name": "Does the fare include toll and parking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all tempo traveller fares include fuel, toll, parking, and driver allowance with no hidden charges." } },
        { "@type": "Question", "name": "Is tempo traveller safe on Manali mountain roads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, vehicles are regularly serviced and experienced drivers are assigned for mountain routes." } },
        { "@type": "Question", "name": "Can I book a tempo traveller for Manali to Spiti Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, multi day Spiti Valley packages are available with experienced drivers and complete travel support." } },
        { "@type": "Question", "name": "How many people fit in a 20 seater tempo traveller in Manali?", "acceptedAnswer": { "@type": "Answer", "text": "A 20 seater tempo traveller can comfortably accommodate 17 to 20 passengers with luggage." } },
        { "@type": "Question", "name": "How can I book a tempo traveller in Manali?", "acceptedAnswer": { "@type": "Answer", "text": "You can book by calling or WhatsApp on 9044019511 and sharing your travel details for instant confirmation." } },
        { "@type": "Question", "name": "How to get a Rohtang Pass permit for tempo traveller?", "acceptedAnswer": { "@type": "Answer", "text": "Rohtang Pass permits are arranged during booking. Additional permits may be required for restricted areas depending on nationality and route." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",   title: "9 Seater Tempo Traveller in Manali",   img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "6–9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹4,000 onwards" }, { label: "Outstation Rate", value: "₹20/km onwards" }, { label: "Best For", value: "Solang Valley, Local Sightseeing" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Hill Roads", "Solang Valley", "Small Groups", "Local Sightseeing"] },
  { badge: "12 Seater",  title: "12 Seater Tempo Traveller in Manali",  img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10–12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹5,000 onwards" }, { label: "Outstation Rate", value: "₹23/km onwards" }, { label: "Best For", value: "Rohtang Pass, Leh, All Routes" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Most Popular", "Rohtang Pass", "Manali to Leh", "All Routes"] },
  { badge: "16 Seater",  title: "16 Seater Tempo Traveller in Manali",  img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "13–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,000 onwards" }, { label: "Outstation Rate", value: "₹28/km onwards" }, { label: "Best For", value: "Corporate Retreats, College Trips" }, { label: "Facility", value: "AC, Pushback Seat, Luggage Space" }], tags: ["Corporate Retreats", "College Trips", "Spiti Valley", "Extended Family"] },
  { badge: "20 Seater",  title: "20 Seater Tempo Traveller in Manali",  img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹9,000 onwards" }, { label: "Outstation Rate", value: "₹32/km onwards" }, { label: "Best For", value: "Weddings, Large Groups, Batch Trips" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Large Groups", "Wedding Parties", "Batch Trips", "One Vehicle"] },
  { badge: "Luxury",     title: "Luxury Tempo Traveller in Manali",     img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹8,000 onwards" }, { label: "Outstation Rate", value: "₹26–35/km" }, { label: "Suspension", value: "Air Suspension" }, { label: "Facility", value: "Leather Seats, LCD, Charging Points" }], tags: ["Air Suspension", "LCD Screens", "VIP Travel", "Manali to Leh"] },
  { badge: "26 Seater",  title: "26 Seater Mini Bus in Manali",         img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "21–26 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹12,000 onwards" }, { label: "Outstation Rate", value: "₹40/km onwards" }, { label: "Best For", value: "Large Corporate, Rohtang, Chandigarh" }, { label: "Facility", value: "AC, Comfortable Seating" }], tags: ["Large Corporate", "School Excursions", "Highway Routes", "Pilgrimage"] },
  { badge: "35 Seater",  title: "35 Seater Bus in Manali",              img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "27–35 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹15,000 onwards" }, { label: "Outstation Rate", value: "₹50/km onwards" }, { label: "Best For", value: "College Events, Community Groups" }, { label: "Facility", value: "AC, Group Seating" }], tags: ["Very Large Groups", "College Trips", "Community Events", "Highway Routes"] },
];

const MANALI_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Manali",     capacity: "6–9 + Driver",   ac: "AC",          ideal: "Small groups — Manali local sightseeing, Solang Valley day trip, Hidimba Temple, Old Manali, and Vashisht Village" },
  { vehicle: "12 Seater Tempo Traveller in Manali",    capacity: "10–12 + Driver", ac: "AC",          ideal: "Most booked in Manali — all major routes including Rohtang Pass, Atal Tunnel, Manali to Leh, and Spiti Valley" },
  { vehicle: "16 Seater Tempo Traveller in Manali",    capacity: "13–16 + Driver", ac: "AC",          ideal: "Corporate retreats, college trips, extended families — better comfort across multi-day Leh or Spiti mountain drives" },
  { vehicle: "20 Seater Tempo Traveller in Manali",    capacity: "17–20 + Driver", ac: "AC",          ideal: "Large groups, wedding parties, batch trips — one vehicle with luggage and trekking gear, Manali to Chandigarh or Dharamshala" },
  { vehicle: "Luxury Tempo Traveller in Manali",       capacity: "10–15 + Driver", ac: "Multi-Zone",  ideal: "Multi-day Leh expedition, VIP corporate retreats, destination wedding groups — reclining leather, air suspension, LCD screens" },
  { vehicle: "26 Seater Mini Bus in Manali",           capacity: "21–26 + Driver", ac: "AC",          ideal: "Large corporate teams, school excursions — local sightseeing, Rohtang Pass, and highway routes to Chandigarh and Dharamshala" },
  { vehicle: "35 Seater Bus in Manali",                capacity: "27–35 + Driver", ac: "AC",          ideal: "Very large groups, college events, community travel — local Manali sightseeing and highway routes only" },
];

const VEHICLE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",  group: "6 to 9 people",   best: "Local sightseeing, Solang Valley",       local: "₹4,000" },
  { vehicle: "12 Seater Tempo Traveller", group: "10 to 12 people", best: "All routes including Leh, Rohtang",      local: "₹5,000" },
  { vehicle: "16 Seater Tempo Traveller", group: "13 to 16 people", best: "Corporate retreats, college trips",       local: "₹7,000" },
  { vehicle: "20 Seater Tempo Traveller", group: "17 to 20 people", best: "Large groups, weddings, batch trips",    local: "₹9,000" },
  { vehicle: "Luxury Tempo Traveller",    group: "10 to 15 people", best: "Multi-day trips, VIP travel",            local: "₹8,000" },
  { vehicle: "26 Seater Mini Bus",        group: "21 to 26 people", best: "Large groups, highway routes",           local: "₹12,000" },
  { vehicle: "35 Seater Bus",             group: "27 to 35 people", best: "Very large groups, college trips",       local: "₹15,000" },
];

const BOOKING_FARE_TABLE = [
  { package: "Manali Local Sightseeing",           vehicle: "12 Seater", fare: "₹5,000" },
  { package: "Manali to Rohtang Pass",             vehicle: "12 Seater", fare: "₹7,000" },
  { package: "Manali to Solang Valley",            vehicle: "12 Seater", fare: "₹4,000" },
  { package: "Manali to Sissu via Atal Tunnel",    vehicle: "12 Seater", fare: "₹6,000" },
  { package: "Manali to Leh",                      vehicle: "12 Seater", fare: "₹25,000" },
  { package: "Manali to Spiti Valley",             vehicle: "12 Seater", fare: "₹20,000" },
  { package: "Manali to Dharamshala",              vehicle: "12 Seater", fare: "₹12,000" },
  { package: "Manali to Chandigarh",               vehicle: "12 Seater", fare: "₹14,000" },
];

const LUXURY_FARE_TABLE = [
  { vehicle: "Luxury Tempo Traveller",    seating: "9 to 12 Seater",  local: "₹8,000 onwards",  out: "₹26/km" },
  { vehicle: "Luxury Tempo Traveller",    seating: "13 to 16 Seater", local: "₹11,000 onwards", out: "₹29/km" },
  { vehicle: "Mercedes Tempo Traveller",  seating: "9 to 13 Seater",  local: "₹12,000 onwards", out: "₹34/km" },
];

const LUXURY_FEATURES = [
  "Fully reclining leather seats",
  "Powerful multi zone AC",
  "Air suspension for smooth mountain road travel",
  "LCD entertainment screens",
  "Charging points at every seat",
  "Large luggage space for trekking gear and bags",
  "Experienced mountain route driver",
  "Fuel, toll, and driver allowance included in fare",
];

const PACKAGES = [
  { title: "Manali Local Sightseeing Package",              fare: "₹5,000 (12 Seater)", desc: "One day, 8 hours, up to 80 km within Manali. Covers Hidimba Temple, Solang Valley, Old Manali, Vashisht Village, Jogini Waterfall, and Mall Road. Most popular package for first time Manali visitors travelling as a group." },
  { title: "Manali to Rohtang Pass Day Trip",               fare: "₹7,000 (12 Seater)", desc: "The most booked single day outstation package from Manali. Rohtang Pass sits at 3,978 metres and the drive up is genuinely spectacular. Permit charges apply and are arranged by Yatra Travel India at the time of booking." },
  { title: "Manali to Solang Valley Day Trip",              fare: "₹4,000 (12 Seater)", desc: "14 km from Manali town. Snow activities, paragliding, and some of the best mountain views in the region. Short drive but worth booking a dedicated vehicle rather than sharing transport with strangers." },
  { title: "Manali to Sissu via Atal Tunnel",               fare: "₹6,000 (12 Seater)", desc: "One of the most scenic drives in Himachal Pradesh. The Atal Tunnel route through to Sissu in Lahaul Valley is increasingly popular with groups who want something beyond the standard Rohtang Pass trip." },
  { title: "Manali to Leh Multi Day Package",               fare: "₹25,000 (12 Seater)", desc: "The big one. 2 to 3 days depending on the itinerary, crossing some of the highest motorable passes in the world. A fully planned package including driver accommodation, route briefing, and permit assistance." },
  { title: "Manali to Spiti Valley Multi Day Package",      fare: "₹20,000 (12 Seater)", desc: "For groups that want the road less travelled. The Spiti route from Manali via Kunzum Pass is one of the most remote and visually dramatic drives in India. Requires an experienced driver and a well maintained vehicle." },
  { title: "Manali to Dharamshala Package",                 fare: "₹12,000 (12 Seater)", desc: "A popular route for groups combining two Himachal destinations in one trip. Around 250 km from Manali, the drive passes through some genuinely beautiful mountain scenery." },
  { title: "Manali to Chandigarh Package",                  fare: "₹14,000 (12 Seater)", desc: "End of trip transfer for groups heading back to the plains. Around 310 km from Manali, the drive takes 8 to 9 hours depending on stops. One of the most regularly booked one way outstation packages from Manali." },
];

const USE_TAGS = [
  "Hidimba Temple Visit", "Solang Valley Day Trip", "Rohtang Pass Tour",
  "Atal Tunnel & Sissu", "Old Manali Sightseeing", "Jogini Waterfall",
  "Manali to Leh Expedition", "Manali to Spiti Valley", "Manali to Dharamshala",
  "Manali to Chandigarh", "Corporate Retreats Manali", "Wedding Parties",
  "College Batch Trips", "Adventure Group Tours",
];

const INCLUDED = ["Fuel charges", "Driver allowance", "Toll taxes on full route both ways", "Parking charges at all stops", "Driver accommodation for multi day trips"];
const EXCLUDED = ["Rohtang Pass permit charges (arranged separately at booking)", "Permits for restricted/border areas if applicable", "Driver food on multi day trips", "Personal expenses of passengers"];

const FAQS = [
  { q: "What is the tempo traveller price in Manali?",                              a: "Starts at Rs 4,000 for a 9 seater and Rs 5,000 for a 12 seater for a full day local tour of 8 hours and 80 km. Rohtang Pass, Solang Valley, and outstation packages have separate fixed fares — see the fare table above." },
  { q: "Is Rohtang Pass permit included in the fare?",                              a: "No. Permit is charged separately and arranged by Yatra Travel India at the time of booking. This is confirmed clearly upfront so there are no surprises on the day of travel." },
  { q: "Which size is best for Manali to Leh?",                                     a: "12 seater for groups up to 12 people. 16 seater for groups of 13 or more for better comfort across a 2 to 3 day drive. On a multi day mountain route the extra space of the 16 seater is genuinely appreciated by day two." },
  { q: "How early should I book a tempo traveller in Manali?",                      a: "1 to 2 weeks for local trips during peak season. 3 to 4 weeks in advance for Leh and Spiti multi day packages. Peak season in Manali runs May to September and vehicles book up fast, especially the 12 seater." },
  { q: "Is a luxury tempo traveller available in Manali?",                          a: "Yes. Reclining seats, multi zone AC, air suspension, LCD screens, charging points at every seat. Starting at Rs 8,000 for local sightseeing. Mercedes Tempo Traveller starts at Rs 12,000 for local tour." },
  { q: "What is the Manali to Leh tempo traveller fare?",                           a: "Starts at Rs 25,000 for a 12 seater. 2 to 3 day package. Fuel, toll, driver allowance, and driver accommodation all included. Permit assistance also arranged by Yatra Travel India." },
  { q: "What is the Manali to Rohtang Pass tempo traveller fare?",                  a: "Starts at Rs 7,000 for a 12 seater. Permit arranged separately at booking stage. Rohtang Pass permit availability depends on the travel date and current government regulations." },
  { q: "Does the fare include toll and parking?",                                   a: "Yes. Every tempo traveller fare at Yatra Travel India includes fuel, toll, parking, and driver allowance. No hidden charges. The fare quoted before departure is the fare paid at the end of the trip." },
  { q: "Is a tempo traveller safe on Manali mountain roads?",                       a: "Yes. Every vehicle is serviced before each trip — tyre condition, brake performance, engine health are checked. Drivers are assigned based on specific mountain route experience. These are non-negotiable checks on mountain roads." },
  { q: "Can I book a tempo traveller for Manali to Spiti Valley?",                  a: "Yes. Multi day Spiti package starts at Rs 20,000 for a 12 seater. Experienced Spiti route driver assigned. The Spiti route via Kunzum Pass requires a driver who knows the route personally." },
  { q: "How many people fit in a 20 seater tempo traveller in Manali?",             a: "Comfortably fits 17 to 20 people with luggage. Best for large groups, wedding parties, and college batch trips. The luggage capacity matches the group size — 20 people on a Manali trip carry a lot of winter gear and trekking equipment." },
  { q: "How do I book a tempo traveller in Manali?",                                a: "Call or WhatsApp Yatra Travel India on 9044019511. Share your group size, travel date, and route. Booking confirmed on the same call with vehicle details and driver name shared in advance." },
  { q: "How to get a Rohtang Pass permit for tempo traveller in Manali?",           a: "For Rohtang Pass trips, the vehicle permit is arranged by Yatra Travel India at the time of booking. For routes entering Spiti or areas near the Indo Tibetan border, certain zone permits may be required for foreign nationals. Indian nationals travelling to Spiti do not need any additional permits beyond that." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad",                 city: "Tempo Traveller in Ghaziabad", type: "NCR Outstation & Pilgrimage Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mysore",                    city: "Tempo Traveller in Mysore",    type: "Palace Tours & Dasara Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                    city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",      city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerManali() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Manali to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Manali&apos;s Trusted Tempo Traveller — Rohtang Pass, Solang Valley, Leh Expedition, Spiti Valley & Chandigarh</p>
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
          <span>Tempo Traveller in Manali</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller in Manali — One Vehicle for the Whole Group</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Rohtang Pass · Solang Valley · Sissu · Manali to Leh · Spiti Valley · Dharamshala · Chandigarh</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury & Mercedes Options", "Mountain Route Drivers", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Manali" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Rohtang, Leh, Spiti..." className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label>
                <select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]">
                  <option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}
                </select>
              </div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "Mountain Route Drivers", sub: "Know every road, pass & permit" }, { title: "Vehicle Checked Before Trip", sub: "Tyres, brakes, engine — non-negotiable" }, { title: "Fixed Fare Always", sub: "Fuel, toll, parking all included" }, { title: "Driver Accommodation", sub: "Included for multi-day trips" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Manali</strong> for local sightseeing, Rohtang Pass day trips, Solang Valley tours, Atal Tunnel drives, and multi-day expeditions to Leh and Spiti Valley. <strong>9 to 35 seater — including Luxury and Mercedes Tempo Traveller.</strong> Experienced mountain drivers, vehicles checked before every trip, Rohtang Pass permit arranged at booking. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Manali with Driver — What to Check Before You Book</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Manali is not like other destinations. The roads are different. The weather changes fast. A route that was clear in the morning can look completely different by afternoon. And when you are travelling with a group of 10 or 15 people through the Himalayas, the driver sitting behind the wheel matters more than almost anything else about the trip.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">A tempo traveller with an experienced driver in Manali is not just a convenience. On certain routes it is genuinely the difference between a smooth trip and a dangerous one.</p>
            <p className="text-base text-gray-700 leading-relaxed">Manali is not a one size fits all destination. A couple heading to Solang Valley for a day needs something completely different from a 20 person corporate group driving to Leh. A family pilgrimage to Rohtang Pass has different requirements from a trekking group heading deep into Spiti Valley. That is why having the right fleet matters more in Manali than almost anywhere else in India.</p>
          </div>
        </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Fleet Available on Rent in Manali — Vehicles for Every Group Size</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* ══ SECTION 2: Each Vehicle Described ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller on Rent in Manali — Every Size Explained</h2>

          {/* 9 Seater */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">9 Seater Tempo Traveller on Rent in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹4,000 · Outstation ₹20/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">Best for small groups of 6 to 9 people. Compact enough for Manali&apos;s narrower hill roads, comfortable enough for a full day of sightseeing, and easy on the budget when the group is small. Popular with small families, friend groups doing a quick Manali weekend, and couples travelling together with a couple of other pairs.</p>
            <p className="text-sm text-gray-600 leading-relaxed">Works well for Manali local sightseeing, Solang Valley day trips, Hidimba Temple visits, and shorter routes within the valley. <strong>Not recommended for the Manali to Leh or Spiti routes</strong> where a larger vehicle gives the group significantly more comfort across multiple days.</p>
          </div>

          {/* 12 Seater */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">12 Seater Tempo Traveller on Rent in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹5,000 · Outstation ₹23/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">The most booked vehicle in the entire Manali fleet. Fits 10 to 12 people with luggage comfortably, handles all major routes including Rohtang Pass, Atal Tunnel, and the Leh highway, and gives the best per head cost when the fare is split across the group.</p>
            <p className="text-sm text-gray-600 leading-relaxed">If your group is between 8 and 12 people and you are still deciding between a 9 seater and a 12 seater, <strong>always go with the 12 seater in Manali</strong>. The extra space for bags, trekking gear, and winter clothing on mountain routes makes a real difference. Nobody wants to spend a 10 hour drive to Leh with their backpack on their lap.</p>
          </div>

          {/* 16 Seater */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">16 Seater Tempo Traveller on Rent in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹7,000 · Outstation ₹28/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">For medium sized groups of 13 to 16 people. Noticeably more space than the 12 seater, better luggage capacity, and a significantly more comfortable experience on long mountain drives.</p>
            <p className="text-sm text-gray-600 leading-relaxed">Corporate retreat groups, school and college trips to Manali, and extended family holidays where the headcount crept past 12 all tend to go for this size. On a multi day route like Manali to Leh or Manali to Spiti, the extra comfort of the 16 seater over 8 or 9 hours of mountain driving is something the group will genuinely appreciate by day two.</p>
          </div>

          {/* 20 Seater */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">20 Seater Tempo Traveller on Rent in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹9,000 · Outstation ₹32/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">Built for large groups of 17 to 20 people. One vehicle, everyone together, no splitting the group across two smaller tempos and spending the whole trip coordinating on a group chat.</p>
            <p className="text-sm text-gray-600 leading-relaxed">Wedding parties doing a Manali trip, large corporate teams, college batch trips, and big family gatherings all book the 20 seater. The luggage capacity matches the group size too. 20 people on a Manali trip carry a lot of bags, winter gear, and trekking equipment. The 20 seater handles all of it without anyone playing Tetris with the luggage at every stop.</p>
          </div>

          {/* Luxury */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-blue-800 text-base">Luxury Tempo Traveller on Rent in Manali</h3>
              <span className="text-xs bg-blue-100 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹8,000+ · Outstation ₹26–35/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">Sometimes the standard version is not what the trip calls for. A multi day Manali to Leh drive, a corporate VIP group, a destination wedding party. These occasions call for something better.</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">A luxury tempo traveller in Manali is a completely different experience from the standard version. Fully reclining leather seats, powerful multi zone AC, air suspension that handles mountain roads without rattling the group around, LCD entertainment screens, charging points at every seat, and an interior that actually feels premium rather than just functional.</p>
            <p className="text-sm text-gray-600 leading-relaxed">On a route like Manali to Leh where the group spends 8 to 10 hours a day in the vehicle across two consecutive days, the comfort difference is not a luxury. It is practical. Arriving at each overnight stop feeling rested rather than exhausted makes the whole trip better. Popular for corporate retreats in Manali, destination wedding groups, and high end leisure travel through Himachal Pradesh.</p>
          </div>

          {/* Mini Bus */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">26 Seater Mini Bus in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹12,000 · Outstation ₹40/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Fits groups of 21 to 26 people comfortably. Large corporate teams, school excursions, and pilgrimage groups that have outgrown even the largest tempo traveller. Good luggage space, comfortable seating, AC throughout. <strong>Not recommended</strong> for the more challenging mountain routes like Spiti or the higher sections of the Leh highway where narrower roads make a smaller vehicle more practical. Works well for Manali local sightseeing, Rohtang Pass, Solang Valley, and highway routes toward Chandigarh and Dharamshala.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#0f6ec8] text-base">35 Seater Bus on Rent in Manali</h3>
              <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-3 py-1 rounded-full font-semibold">Local ₹15,000 · Outstation ₹50/km</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">For very large groups of 27 to 35 people. College trips, large corporate events, community group travel. The 35 seater handles highway routes and local Manali sightseeing well. For mountain passes and high altitude routes the tempo traveller or SUV options are more practical due to road width restrictions.</p>
          </div>
        </div>

        {/* ══ Vehicle Summary Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Which Vehicle Is Right for Your Group in Manali</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[520px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Group Size", "Best For", "Local Fare"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {VEHICLE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.group}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.best}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Manali — Full Comparison
        </h2>
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
              {MANALI_OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-4 border-r border-b border-gray-100">
                    <span className={"text-xs font-bold px-2.5 py-1 rounded-full border " +
                      (row.ac === "Premium AC" || row.ac === "Multi-Zone"
                        ? "bg-orange-50 text-orange-700 border-orange-200"
                        : "bg-blue-50 text-[#0f6ec8] border-blue-200")}>
                      {row.ac}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ What Is Included ══ */}
        <ST>Fare Inclusions and Exclusions</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Inclusions</span></div>
            <ul className="list-none m-0 p-0">{INCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-base font-semibold text-blue-700 border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
          </div>
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Exclusions</span></div>
            <ul className="list-none m-0 p-0">{EXCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-sm font-semibold text-blue-700 border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-blue-50" : "bg-white")}>{item}</li>)}</ul>
          </div>
        </div>

        {/* ══ How to Book ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Online Tempo Traveller Booking in Manali — Simple, Fast and Confirmed Before You Arrive</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Most people planning a Manali group trip spend days sorting out accommodation, flights, and activities. Transport usually gets left to the last minute. And then the scramble starts — calling random numbers, getting vague quotes, finding out the vehicle you wanted is already taken. Online tempo traveller booking in Manali fixes all of that. Confirm your vehicle in advance, know the exact fare before the trip starts, and arrive in Manali with one less thing to worry about.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { step: "1", title: "Call or WhatsApp 9044019511", desc: "Tell the team your group size, travel dates, and the routes you are planning. Local sightseeing, Rohtang Pass, Solang Valley, Manali to Leh, Spiti Valley — share it all at this stage so the right vehicle and driver can be matched." },
              { step: "2", title: "Get a Clear Quote",           desc: "Within a short time you will receive a complete fare breakdown. Vehicle size, base fare, outstation rate, permit charges for Rohtang Pass, and what is included. No hidden numbers. No vague estimates." },
              { step: "3", title: "Confirm the Booking",         desc: "Once the quote is agreed, the booking is confirmed. You receive the vehicle details, driver name, and contact number in advance. No waiting until the morning of the trip to find out who your driver is." },
              { step: "4", title: "Travel",                      desc: "The vehicle arrives at your location at the confirmed time. Driver is briefed on the route. Fare is settled as agreed. No surprises." },
            ].map(item => (
              <div key={item.step} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#0f6ec8] rounded-full flex items-center justify-center mb-2"><span className="text-white font-bold text-sm">{item.step}</span></div>
                <h4 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
            <p className="text-white text-sm font-semibold">Call 9044019511 and tell us your group size, your route, and your travel dates. The right vehicle will be ready and waiting when your group arrives in Manali.</p>
          </div>
        </div>

        {/* ══ Booking Fare Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Online Booking Fare Table — Tempo Traveller in Manali</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[400px]">
              <thead><tr className="bg-[#0f6ec8]">{["Package", "Vehicle", "Starting Fare"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {BOOKING_FARE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.package}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">* All fares for 12 seater tempo traveller. Other vehicle sizes priced proportionally. Rohtang Pass permit additional. Leh and Spiti packages include driver accommodation.</p>
        </div>

        {/* ══ Most Booked Packages ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Most Booked Online Tempo Traveller Packages in Manali</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">These are the routes and packages that groups book most frequently through Yatra Travel India online:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PACKAGES.map(pkg => (
              <div key={pkg.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#0f6ec8] text-sm">{pkg.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{pkg.fare}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Luxury Fare Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Luxury Tempo Traveller Booking in Manali — Fare Table</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Premium group travel in Manali starts with the right vehicle. Book a luxury tempo traveller in Manali with Yatra Travel India and travel in comfort across every route, from local sightseeing to Manali to Leh.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-5">
            <table className="w-full text-sm min-w-[400px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Seating", "Local Fare", "Outstation Rate"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {LUXURY_FARE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.seating}</td>
                    <td className="py-3 px-4 font-bold text-blue-700 border-r border-b border-gray-100 text-sm">{row.local}</td>
                    <td className="py-3 px-4 font-bold text-blue-700 border-b border-gray-100 text-sm">{row.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-bold text-gray-900 text-sm mb-3">Features Included in Every Luxury Tempo Traveller in Manali</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4">
            {LUXURY_FEATURES.map(feat => (
              <div key={feat} className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5 text-xs font-bold">●</span>
                <span className="text-xs text-gray-700">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Important Things to Know ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Important Things to Know Before Renting a Vehicle in Manali</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Mountain routes require advance booking", desc: "Peak season in Manali runs from May to September and vehicles book up fast, especially the 12 seater tempo traveller. Book at least 1 to 2 weeks in advance during this period. For Leh and Spiti multi day trips, 3 to 4 weeks in advance is strongly recommended.", color: "blue" },
              { title: "Vehicle condition matters more in Manali", desc: "At Yatra Travel India every vehicle is serviced and checked before each trip. Tyre condition, brake performance, engine health. These are not optional checks on mountain roads. They are non-negotiable.", color: "blue" },
              { title: "Always confirm the full route before the trip", desc: "The driver should know every stop, the overnight locations for multi day trips, and any permit requirements for restricted routes like Rohtang Pass. This is confirmed at the booking stage — not on the morning of travel.", color: "blue" },
            ].map(item => (
              <div key={item.title} className={`bg-white border rounded-xl p-5 ${item.color === "blue" ? "border-blue-200" : item.color === "blue" ? "border-blue-200" : "border-blue-200"}`}>
                <h3 className={`font-bold text-sm mb-2 ${item.color === "blue" ? "text-blue-700" : item.color === "blue" ? "text-blue-700" : "text-[#0f6ec8]"}`}>{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Peak Season Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>What Is Included in Every Vehicle Rental in Manali:</strong> Fuel charges, driver allowance, toll taxes, parking charges, and state tax for outstation trips outside Himachal Pradesh.</p>
          <p className="text-sm text-yellow-800 leading-relaxed"> For multi day trips, driver accommodation is arranged by Yatra Travel India. No separate charges are added for this at the end of the trip.</p>
          <p className="text-sm text-yellow-800 leading-relaxed"> Rohtang Pass permit charges are additional and vary based on vehicle type and travel date. These are confirmed and explained clearly at the time of booking so there are no surprises.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Manali</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Manali Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Rohtang Pass, Solang Valley, Leh expedition, Spiti, Dharamshala, Chandigarh — tell us your group size, route, and travel dates. The right vehicle will be ready. Dial 9044019511.</p>
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
              <div><div className="text-sm font-bold text-gray-900 group-hover:text-[#0f6ec8] transition-colors">{n.city}</div><div className="text-xs text-gray-500 mt-0.5">{n.type}</div></div>
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
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">{vehicle.specs.map(s => <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed"><span className="font-bold">{s.label}:</span> {s.value}</p>)}</div>
        <div className="flex flex-wrap gap-1.5 mb-4">{vehicle.tags.map(tag => <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>)}</div>
        <button onClick={() => onSelect(vehicle.title)} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">Book {vehicle.badge} Tempo</button>
      </div>
    </div>
  );
}
