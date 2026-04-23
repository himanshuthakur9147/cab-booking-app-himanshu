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
      "@type": "Service",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-ujjain#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",
      "name": "Tempo Traveller in Ujjain | Yatra Travel India",
      "description": "Book AC tempo traveller in Ujjain for Mahakaleshwar temple darshan, Mahakal Lok Corridor visits, group pilgrimage tours, local sightseeing, and outstation travel with fixed pricing and professional drivers.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
      },
      "brand": { "@type": "Brand", "name": "Yatra Travel India" },
      "areaServed": { "@type": "City", "name": "Ujjain" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "url": "https://www.yatratravelindia.com/tempo-traveller-in-ujjain", "priceCurrency": "INR", "price": "19", "availability": "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-ujjain#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How much does a 12 seater tempo traveller cost in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller in Ujjain starts from Rs 4,000 for a full day local tour, including fuel, toll, parking, and driver allowance." } },
        { "@type": "Question", "name": "What is the starting price of tempo traveller in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "The starting price is around Rs 3,000 for a 9 seater tempo traveller for local sightseeing in Ujjain." } },
        { "@type": "Question", "name": "How can I book a tempo traveller in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "You can book by calling or WhatsApp on 9044019511 and sharing your travel date, group size, and trip details." } },
        { "@type": "Question", "name": "Is tempo traveller available for Mahakaleshwar temple visit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for Mahakaleshwar temple darshan, Mahakal Lok Corridor visits, and full-day temple tours in Ujjain." } },
        { "@type": "Question", "name": "Can I book tempo traveller for outstation trips from Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book tempo travellers for outstation trips from Ujjain to Indore, Bhopal, Omkareshwar, Pachmarhi, and nearby destinations." } },
        { "@type": "Question", "name": "Is tempo traveller suitable for group pilgrimage in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are ideal for group pilgrimage as they offer comfort, space, and allow everyone to travel together." } },
        { "@type": "Question", "name": "What seating options are available in tempo traveller in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo travellers in Ujjain are available in 9, 12, 16, and 20 seater options, including luxury vehicles." } },
        { "@type": "Question", "name": "Are there any hidden charges in tempo traveller booking in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "No, pricing is fully transparent and includes fuel, toll, parking, and driver allowance with no hidden charges." } },
        { "@type": "Question", "name": "Can I book tempo traveller for Kumbh Mela in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for Kumbh Mela group travel in Ujjain, and early booking is recommended due to high demand." } },
        { "@type": "Question", "name": "Why choose Yatra Travel India for tempo traveller in Ujjain?", "acceptedAnswer": { "@type": "Answer", "text": "Yatra Travel India offers confirmed vehicles, fixed pricing, experienced drivers, and reliable service for group travel in Ujjain." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Ujjain",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹3,000 onwards" }, { label: "Outstation Rate", value: "₹16/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Temple Tours", "Small Groups", "Mahakal Darshan"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Ujjain", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹4,000 onwards" }, { label: "Outstation Rate", value: "₹21/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Most Popular", "Pilgrimage Tours", "Outstation"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Ujjain", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹5,500 onwards" }, { label: "Outstation Rate", value: "₹26/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Space", "School Trips", "Office Outings"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Ujjain", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹30/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Kumbh Mela", "Large Groups", "Wedding Parties"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Ujjain",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,000 onwards" }, { label: "Outstation Rate", value: "₹30/km onwards" }, { label: "AC", value: "Multi-Zone" }, { label: "Facility", value: "Leather Seats, LCD, Air Suspension" }], tags: ["Premium AC", "Air Suspension", "VIP Groups", "Corporate Travel"] },
];

const UJJAIN_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Ujjain",     capacity: "9 + Driver",     ac: "AC",          ideal: "Small groups — Mahakaleshwar darshan, Mahakal Lok Corridor, Ram Ghat aarti, and quick day trips to Indore" },
  { vehicle: "12 Seater Tempo Traveller in Ujjain",    capacity: "12 + Driver",    ac: "AC",          ideal: "Most popular — full Ujjain pilgrimage circuit, Kal Bhairav, Harsiddhi, Sandipani Ashram, and outstation to Bhopal and Omkareshwar" },
  { vehicle: "16 Seater Tempo Traveller in Ujjain",    capacity: "16 + Driver",    ac: "AC",          ideal: "Office trips, school excursions, extended family pilgrimages — better legroom and luggage space on longer routes from Ujjain" },
  { vehicle: "20 Seater Tempo Traveller in Ujjain",    capacity: "20 + Driver",    ac: "AC",          ideal: "Kumbh Mela groups, large wedding parties, college batch trips — one vehicle, one driver, everyone together during Simhastha" },
  { vehicle: "Luxury Tempo Traveller in Ujjain",       capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "Corporate executives, VIP wedding guests, families with elderly — leather seats, air suspension, LCD screens, charging points" },
];

const PRICE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",  local: "₹3,000 onwards", out: "₹19/km" },
  { vehicle: "12 Seater Tempo Traveller", local: "₹4,000 onwards", out: "₹21/km" },
  { vehicle: "16 Seater Tempo Traveller", local: "₹5,500 onwards", out: "₹26/km" },
  { vehicle: "20 Seater Tempo Traveller", local: "₹7,500 onwards", out: "₹30/km" },
  { vehicle: "Luxury Tempo Traveller",    local: "₹7,000 onwards", out: "₹30/km onwards" },
];

const ROUTES_TABLE = [
  { route: "Ujjain to Indore",      dist: "~55 km",   fare: "₹3,500+ (12 Seater)",  vehicle: "9 or 12 Seater"  },
  { route: "Ujjain to Omkareshwar", dist: "~130 km",  fare: "₹5,500+ (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Ujjain to Bhopal",      dist: "~185 km",  fare: "₹7,500+ (12 Seater)",  vehicle: "12 or 16 Seater" },
  { route: "Ujjain to Pachmarhi",   dist: "~350 km",  fare: "₹13,000+ (12 Seater)", vehicle: "12 or 16 Seater" },
  { route: "Ujjain to Mandu",       dist: "~150 km",  fare: "On Request",            vehicle: "12 or 16 Seater" },
  { route: "Ujjain to Amarkantak",  dist: "~450 km",  fare: "On Request",            vehicle: "12 or 16 Seater" },
  { route: "Ujjain Local Tour",     dist: "Full Day", fare: "₹3,000+ (9 Seater)",   vehicle: "Any Size"        },
];

const USE_TAGS = [
  "Mahakaleshwar Temple Darshan", "Mahakal Lok Corridor", "Bhasma Aarti Visit",
  "Ram Ghat Evening Aarti", "Kal Bhairav Temple", "Harsiddhi Temple",
  "Kumbh Mela Travel", "Ujjain to Omkareshwar", "Ujjain to Indore",
  "Ujjain to Bhopal", "Family Pilgrimage Trip", "Corporate Group Tours",
  "Wedding Guest Transfers", "Sandipani Ashram Visit",
];

const PILGRIMAGE_PLACES = [
  { place: "Mahakaleshwar Temple",     desc: "One of the twelve Jyotirlingas in India. Most visited religious site in Ujjain. Famous for the Bhasma Aarti held every morning before sunrise. Early morning visit recommended for groups." },
  { place: "Mahakal Lok Corridor",     desc: "Newly developed spiritual corridor connecting Mahakaleshwar Temple to the surrounding area. Stunning sculptures, walkways, and religious artwork spread across a large area. A must visit for every group coming to Ujjain." },
  { place: "Ram Ghat",                 desc: "Most important ghat on the Shipra River. Evening aarti here is one of the most peaceful and moving experiences in Ujjain. Popular with family groups and pilgrimage tours." },
  { place: "Kal Bhairav Temple",       desc: "Ancient temple dedicated to Kal Bhairav, the guardian deity of Ujjain. Unique religious significance and one of the most visited temples after Mahakaleshwar." },
  { place: "Harsiddhi Temple",         desc: "One of the Shakti Peethas in India. Important pilgrimage stop for devotees visiting Ujjain. Located close to Mahakaleshwar making it easy to cover both in one temple tour." },
  { place: "Sandipani Ashram",         desc: "Ancient ashram where Lord Krishna received his education. Deep historical and spiritual significance. Popular with family groups and religious tourists." },
  { place: "Gadkalika Temple",         desc: "Ancient temple dedicated to Goddess Kalika. One of the oldest temples in Ujjain and an important stop on any Ujjain pilgrimage tour." },
  { place: "Vedh Shala (Observatory)", desc: "Built by Maharaja Jai Singh in the 18th century. One of five astronomical observatories in India. Interesting stop for groups that want a mix of history and science alongside the pilgrimage circuit." },
];

const FEATURES = [
  { title: "Premium Pushback Seats",   desc: "Soft and wide pushback seats for Mahakaleshwar darshan tours, Kumbh Mela travel, and long routes like Ujjain to Pachmarhi and Amarkantak." },
  { title: "Fully Air-Conditioned",    desc: "All tempo travellers are fully AC — essential for Madhya Pradesh's hot climate. Stay comfortable throughout your Ujjain pilgrimage and outstation journeys." },
  { title: "Extra Legroom",            desc: "Wide aisles and generous legroom for comfortable travel on long routes — Ujjain to Bhopal, Pachmarhi, and multi-day Madhya Pradesh pilgrimage tours." },
  { title: "Confirmed Vehicle Always", desc: "Vehicle registration and driver name shared before every trip. No last-minute changes. What is booked is what shows up — on time, every time." },
  { title: "Large Luggage Space",      desc: "Ample boot space for pilgrimage essentials, clothing, and offerings — ideal for multi-day Kumbh Mela travel and outstation journeys from Ujjain." },
  { title: "Fixed Fare — No Extras",   desc: "Fuel, toll, parking, and driver allowance confirmed at booking. The fare quoted before departure is exactly what is paid after the trip. Zero surprises." },
  { title: "Entertainment & Charging", desc: "Music systems and charging points in luxury vehicles — perfect for long drives like Ujjain to Pachmarhi or Amarkantak with your pilgrimage group." },
  { title: "Verified Local Drivers",   desc: "Experienced drivers who know Ujjain temple routes, Mahakal Lok Corridor timings, and Madhya Pradesh highways — safe and punctual on every booking." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll tax included", "Parking charges included", "Driver day allowance included"];
const EXCLUDED = ["State entry tax / permit charges (if applicable)", "Driver night allowance (₹500, if applicable)", "Any additional km beyond agreed package", "Personal expenses of passengers", "Special entry / darshan ticket charges at temples"];

const BENEFITS = [
  { title: "Group Stays Together for Darshan", desc: "From Mahakaleshwar to Kal Bhairav, Ram Ghat to Harsiddhi — one tempo traveller keeps your entire group together through every stop on the Ujjain pilgrimage circuit." },
  { title: "Best Value for Pilgrimage Groups", desc: "Split Rs 4,000 for a 12 seater across 12 people — each person pays just Rs 333 for a full day of comfortable Ujjain pilgrimage. Significantly cheaper than individual cabs." },
  { title: "Kumbh Mela Group Specialists",     desc: "Ujjain's Simhastha Kumbh Mela draws millions. Our 16 and 20 seater tempo travellers are the most practical way to keep large pilgrimage groups together during this festival." },
  { title: "Expert in Madhya Pradesh Routes",  desc: "Drivers know Ujjain to Indore, Bhopal, Omkareshwar, and Pachmarhi routes thoroughly. Safe highway travel and timely arrivals on every outstation booking." },
  { title: "Corporate & Wedding Travel Ready", desc: "Luxury tempo travellers with leather seats, screens, and multi-zone AC for Ujjain corporate outings and wedding guest transfers between venues." },
  { title: "Transparent Pricing Always",       desc: "Fare, toll, parking, and driver allowance confirmed at booking. The price quoted before the trip is exactly what you pay at the end. No additions, no surprises." },
];

const FAQS = [
  { q: "How much does a 12 seater tempo traveller cost in Ujjain for a full day?",           a: "12 seater tempo traveller in Ujjain starts at Rs 4,000 for a full day local tour covering 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance. Transparent pricing confirmed at booking. Nothing added after the trip." },
  { q: "Which is the most affordable tempo traveller option in Ujjain for a small group?",   a: "Tempo traveller price in Ujjain starts at Rs 3,000 for a 9 seater. Most budget friendly option for groups of 6 to 9 people. Split across the group and per head cost is significantly lower than booking individual cabs." },
  { q: "How do I confirm a tempo traveller booking in Ujjain in advance?",                   a: "Tempo traveller booking in Ujjain with Yatra Travel India is confirmed in one call. Call 9044019511, share travel date, group size, and route. Vehicle registration and driver details shared immediately after confirmation. No follow up needed." },
  { q: "What makes Yatra Travel India the right choice for tempo traveller hire in Ujjain?", a: "Yatra Travel India Ujjain operates a well maintained fleet with transparent fixed pricing. Fare confirmed before trip starts, experienced drivers on all local and outstation routes, on time pickup guaranteed, and no hidden charges added after the journey ends." },
  { q: "Is tempo traveller available in Ujjain for Kumbh Mela group travel?",                a: "Yes. Tempo traveller for Kumbh Mela Ujjain is available in all sizes from 9 to 20 seater. Large pilgrimage groups book 16 and 20 seater to keep everyone together during Simhastha. Demand rises significantly during Kumbh Mela period so booking 4 to 6 weeks early is strongly recommended." },
  { q: "What is the best way to arrange tempo traveller fare in Ujjain without hidden charges?", a: "Book directly with Yatra Travel India on 9044019511. Tempo traveller fare in Ujjain is confirmed upfront including fuel, toll, parking, and driver allowance. What is quoted before departure is exactly what is paid after the trip. No additions, no surprises." },
  { q: "How far is Ujjain to Indore by tempo traveller and what does it cost?",              a: "Tempo traveller Ujjain to Indore covers 55 km via NH52. The drive takes around 1 hour. Starting fare Rs 3,500 for a 12 seater. Most booked short outstation route from Ujjain. Popular for airport transfers, corporate meetings, and family day trips." },
  { q: "What is the group travel experience like on tempo traveller Ujjain to Omkareshwar?", a: "Tempo traveller Ujjain to Omkareshwar is 130 km and takes around 2.5 hours. Route passes through scenic Madhya Pradesh countryside. Omkareshwar Jyotirlinga darshan combined with Ujjain makes a powerful 2 Jyotirlinga pilgrimage circuit easily managed in one day. Fare starts at Rs 5,500 for a 12 seater." },
  { q: "Is tempo traveller Ujjain to Bhopal suitable for a corporate group outing?",         a: "Yes. Tempo traveller Ujjain to Bhopal is one of the most regularly booked corporate outstation routes from Ujjain. 185 km via NH52, smooth 3 hour drive. 12 seater most popular for corporate teams. Luxury tempo traveller available for VIP corporate groups. Fare starts at Rs 7,500 for a 12 seater." },
  { q: "What is the tempo traveller fare for Ujjain to Pachmarhi multi day trip?",           a: "Tempo traveller Ujjain to Pachmarhi fare starts at Rs 13,000 for a 12 seater. Pachmarhi is 350 km from Ujjain. Most groups plan a 2 day trip. Driver accommodation included in multi day package. Full itinerary confirmed at booking with no additions after the trip." },
  { q: "Can I book a luxury tempo traveller in Ujjain for a wedding function?",              a: "Yes. Luxury tempo traveller in Ujjain available through Yatra Travel India. Pushback reclining seats, multi zone AC, air suspension, LCD screens. Perfect for moving wedding guests between venues and hotels across Ujjain. Fare starts at Rs 7,000 for local tour. Call 9044019511 to confirm wedding date availability." },
  { q: "What is the per km rate for outstation tempo travellers from Ujjain?",               a: "Outstation tempo traveller from Ujjain is charged at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater tempo traveller in Ujjain. Rate covers full distance both ways and includes fuel, toll, parking, and driver allowance. Confirmed at booking with no changes after the trip." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa",      city: "Tempo Traveller in Goa",      type: "Beach Tours, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",   city: "Tempo Traveller in Mumbai",   type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",                  city: "Tempo Traveller in Somnath",  type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mysore",                   city: "Tempo Traveller in Mysore",   type: "Palace Tours & Dasara Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",     city: "Tempo Traveller in Agra",     type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",    city: "Tempo Traveller in Delhi",    type: "Family Travel & Religious Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerUjjain() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking    = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch       = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Ujjain to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Ujjain&apos;s Trusted Tempo Traveller — Mahakal Darshan, Kumbh Mela, Omkareshwar & Indore</p>
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
          <span>Tempo Traveller in Ujjain</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Ujjain</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Mahakaleshwar · Mahakal Lok · Bhasma Aarti · Kumbh Mela · Omkareshwar · Indore · Bhopal</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury & VIP Options", "Fully Air Conditioned", "Fixed Fare · Confirmed Vehicle"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Ujjain" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
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
          {[{ title: "Confirmed Vehicle Always", sub: "Registration & driver shared before trip" }, { title: "Fixed Fare — No Extras", sub: "Fuel, toll, parking all included" }, { title: "On-Time Pickup", sub: "Driver briefed for early Bhasma Aarti visits" }, { title: "Verified Drivers", sub: "Know Ujjain temple routes & MP highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Ujjain</strong> for Mahakaleshwar darshan, Mahakal Lok Corridor visits, Kumbh Mela group travel, and outstation trips to Indore, Bhopal, Omkareshwar, and Pachmarhi. <strong>9 seater to 20 seater — including Luxury Tempo Traveller for corporate and VIP groups.</strong> Fixed fare, confirmed vehicle, experienced drivers. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Intro — Hire AC Tempo Traveller in Ujjain ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 pl-4 border-l-4 border-[#0f6ec8]">Hire AC Tempo Traveller in Ujjain</h2>
          <h3 className="text-lg font-bold text-gray-600 mb-4 pl-4">Fixed Fare, Confirmed Vehicle, On Time Every Time</h3>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ujjain is one of India&apos;s most sacred cities. Home to the Mahakaleshwar Jyotirlinga, the newly built Mahakal Lok Corridor, and one of the four Kumbh Mela sites in the country. Pilgrims, tourists, and devotees travel to Ujjain in large numbers throughout the year. And almost always in groups.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Getting a large group around Ujjain and to nearby pilgrimage destinations like Omkareshwar, Amarkantak, and Omkareshwar needs more than a few cabs. It needs one reliable vehicle that keeps everyone together, runs on time, and charges what was agreed upfront.</p>
            <p className="text-base text-gray-700 leading-relaxed">That is exactly what Yatra Travel India offers. Tempo travellers in Ujjain from 9 seater to 20 seater, available for local temple tours, Mahakal Lok Corridor visits, outstation pilgrimage trips, wedding transfers, and corporate travel. Every booking comes with a confirmed vehicle, experienced driver, and fixed all-inclusive fare.</p>
          </div>

                  {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Ujjain</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

          {/* Best Service highlights */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Best Tempo Traveller Service in Ujjain</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Budget Friendly Pricing",          desc: "Affordable tempo traveller fare in Ujjain for every group size. 9 seater starts at Rs 3,000 and 12 seater starts at Rs 4,000 for a full day local tour. Split across the group and the per head cost beats individual cabs on every route." },
              { title: "Transparent Pricing",              desc: "Fare confirmed at booking includes fuel, toll, parking, and driver allowance. No surprise additions at the end of the trip. What is quoted before departure is exactly what is paid on return. No hidden charges, no last minute extras." },
              { title: "Available for Local Sightseeing",  desc: "Mahakaleshwar Temple, Mahakal Lok Corridor, Ram Ghat, Kal Bhairav Temple, Harsiddhi Temple, Vedh Shala. Full day local sightseeing package covering all major Ujjain attractions." },
              { title: "Available for Outstation Trips",   desc: "Ujjain to Omkareshwar, Ujjain to Indore, Ujjain to Bhopal, Ujjain to Pachmarhi, Ujjain to Mandu. All major outstation routes from Ujjain covered with experienced drivers." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] transition-colors">
                <h4 className="font-bold text-[#0f6ec8] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 4-step online booking */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Online Tempo Traveller Booking in Ujjain — 4 Simple Steps</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { step: "1", title: "Call or WhatsApp 9044019511", desc: "Share group size, travel date, pickup location, and route." },
              { step: "2", title: "Get Clear Fare Quote",         desc: "Fare confirmed immediately. Fuel, toll, parking, driver allowance all included. One number, nothing hidden." },
              { step: "3", title: "Confirm Booking",              desc: "Vehicle registration and driver name shared in advance. Booking confirmed on same call." },
              { step: "4", title: "Travel",                       desc: "Driver at pickup location on time. Fare settled as agreed. Nothing added after the trip." },
            ].map(item => (
              <div key={item.step} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#0f6ec8] rounded-full flex items-center justify-center mb-2"><span className="text-white font-bold text-sm">{item.step}</span></div>
                <h4 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
            <p className="text-white text-sm font-semibold">Call 9044019511 to book your tempo traveller for Ujjain pilgrimage tour today.</p>
          </div>
        </div>

        {/* ══ SECTION 3: Price Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Online Booking Fare — Tempo Traveller Prices in Ujjain</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[400px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Local Fare", "Outstation Rate"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {PRICE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.local}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">* Local fare covers 8 hours and 80 km. Outstation rate per km (both ways). Fuel, toll, parking, driver allowance all included. Nothing added after the trip.</p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 text-sm mb-2">Why Book Online with Yatra Travel India in Ujjain</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Vehicle confirmed before trip starts", "Fixed fare agreed upfront", "Driver details shared in advance", "On time pickup guaranteed", "Direct contact throughout the trip"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0"></span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 4: Top Pilgrimage Places ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-teal-500">Top Pilgrimage Places to Visit in Ujjain by Tempo Traveller</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Ujjain is one of the seven sacred cities in India. Every spot listed below is covered on a local sightseeing tour by Yatra Travel India tempo traveller.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PILGRIMAGE_PLACES.map(item => (
              <div key={item.place} className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 text-sm mb-2">{item.place}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

{/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Ujjain — Full Comparison
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
              {UJJAIN_OPTIONS_TABLE.map((row, i) => (
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

        {/* ══ SECTION 5: Types of Tempo Travellers Available ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Types of Tempo Travellers Available in Ujjain — Yatra Travel India</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">Travelling in a group around Ujjain is easy when you have the right vehicle. Yatra Travel India runs a modern, well serviced fleet of tempo travellers in Ujjain covering everything from quick local temple visits to long multi day outstation journeys across Madhya Pradesh. Budget friendly rates, fully transparent pricing, and no hidden charges at the end of the trip.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* 9 Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0f6ec8] text-base">9 Seater Tempo Traveller in Ujjain</h3>
                <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-2 py-0.5 rounded-full font-semibold">From ₹3,000</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">The smart pick for smaller groups heading to Mahakaleshwar, Ram Ghat, or a quick day trip to Indore. Seats 6 to 9 people without feeling cramped, handles Ujjain city roads easily, and keeps the cost low for groups that do not need a larger vehicle.</p>
              <p className="text-xs text-gray-500"><span className="font-semibold">Local Tour:</span> Rs 3,000 onwards &nbsp;|&nbsp; <span className="font-semibold">Outstation:</span> Rs 16 per km</p>
            </div>

            {/* 12 Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0f6ec8] text-base">12 Seater Tempo Traveller in Ujjain</h3>
                <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-2 py-0.5 rounded-full font-semibold">From ₹4,000</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">Ask any group traveller in Ujjain which tempo traveller they booked and nine times out of ten it is the 12 seater. Seats 10 to 12 people with bags, works for every route from Mahakal Lok Corridor visits to Bhopal and Pachmarhi outstation trips, and gives the lowest per head cost when fare is divided across the group.</p>
              <p className="text-xs text-gray-500"><span className="font-semibold">Local Tour:</span> Rs 4,000 onwards &nbsp;|&nbsp; <span className="font-semibold">Outstation:</span> Rs 21 per km</p>
            </div>

            {/* 16 Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0f6ec8] text-base">16 Seater Tempo Traveller in Ujjain</h3>
                <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-2 py-0.5 rounded-full font-semibold">From ₹5,500</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">When the group crosses 12 people the 16 seater is the only sensible call. Wider seats, more room between rows, and a luggage area that actually fits everyone&apos;s bags without anyone sitting awkwardly for three hours. Popular with office trip groups, school excursions, and extended families travelling together on pilgrimage.</p>
              <p className="text-xs text-gray-500"><span className="font-semibold">Local Tour:</span> Rs 5,500 onwards &nbsp;|&nbsp; <span className="font-semibold">Outstation:</span> Rs 26 per km</p>
            </div>

            {/* 20 Seater */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-[#0f6ec8] text-base">20 Seater Tempo Traveller in Ujjain</h3>
                <span className="text-xs bg-blue-50 text-[#0f6ec8] border border-blue-200 px-2 py-0.5 rounded-full font-semibold">From ₹7,500</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">Kumbh Mela groups, large wedding parties, college batch trips. When the headcount hits 17 or more this is the vehicle that makes the trip work. One driver, one fare, one pickup. Nobody gets left behind, nobody arrives separately, and the whole group experiences the journey together.</p>
              <p className="text-xs text-gray-500"><span className="font-semibold">Local Tour:</span> Rs 7,500 onwards &nbsp;|&nbsp; <span className="font-semibold">Outstation:</span> Rs 30 per km</p>
            </div>

            {/* Luxury — full width */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 md:col-span-2 hover:border-blue-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-blue-800 text-base">Luxury Tempo Traveller in Ujjain</h3>
                <span className="text-xs bg-blue-100 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">From ₹7,000 · Rs 30/km</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Not every trip needs luxury but some trips genuinely deserve it. Corporate executives, VIP wedding guests, families travelling with elderly passengers on long outstation routes. Leather pushback seats that fully recline, air suspension that irons out every bump on Madhya Pradesh roads, multi zone AC, screens at every row, and a charging point for every phone in the vehicle.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {["Pushback leather seats — full recline", "Air suspension for smooth MP roads", "Multi-zone AC", "LCD screens + charging at every seat"].map(feat => (
                  <div key={feat} className="bg-white rounded-lg p-2 border border-blue-100">
                    <p className="text-xs text-blue-700 font-medium">{feat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Routes Table */}
        <ST border="border-green-500">Tempo Traveller Routes from Ujjain — Fares & Distances</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[520px]">
            <thead><tr className="bg-[#0f6ec8]">{["Route", "Distance", "Starting Fare", "Vehicle", "Booking"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.fare}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100"><a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Ujjain</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="#fff" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
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
        <ST>Why Choose Yatra Travel India for Tempo Traveller in Ujjain</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Peak Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Kumbh Mela & Festival Season Booking:</strong> Ujjain&apos;s Simhastha Kumbh Mela draws millions of pilgrims. During Kumbh Mela, book <strong>4 to 6 weeks in advance.</strong> For Mahashivratri, Navratri, and Shravan month bookings, reserve at least <strong>2 to 3 weeks ahead.</strong> 16 and 20 seater vehicles fill up fastest during these periods.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Ujjain</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Ujjain Pilgrimage Tour Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Mahakal darshan, Kumbh Mela, Omkareshwar, Indore, Bhopal — call us with your group size and travel date. Confirmed vehicle, fixed fare, on-time driver. Dial 9044019511.</p>
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
