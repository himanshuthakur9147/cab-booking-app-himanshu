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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-bhubaneshwar#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-bhubaneshwar",
      "name": "Tempo Traveller in Bhubaneswar | Yatra Travel India",
      "description": "Book tempo traveller in Bhubaneswar for group tours, temple visits, weddings, and outstation travel with AC vehicles and experienced drivers.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
      },
      "areaServed": { "@type": "City", "name": "Bhubaneswar" },
      "serviceType": "Tempo Traveller Rental",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "23",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yatratravelindia.com/tempo-traveller-bhubaneshwar",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-bhubaneshwar#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Is a tempo traveller better than booking multiple cabs in Bhubaneswar?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a tempo traveller allows the entire group to travel together and is often more convenient and economical than booking multiple cabs." } },
        { "@type": "Question", "name": "Can I hire a tempo traveller in Bhubaneswar for corporate trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for corporate travel, team outings, and group transfers." } },
        { "@type": "Question", "name": "What is the cost of tempo traveller in Bhubaneswar?", "acceptedAnswer": { "@type": "Answer", "text": "Local sightseeing starts at Rs 5,800 for a 9 seater and Rs 6,200 for a 12 seater. Outstation rate starts at Rs 23 per km. Pricing is shared at the time of booking with no hidden charges." } },
        { "@type": "Question", "name": "Is tempo traveller available for outstation trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book tempo travellers for outstation trips from Bhubaneswar to destinations like Puri, Konark, Chilika Lake, and other cities." } },
        { "@type": "Question", "name": "Do you provide tempo travellers for weddings and events?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for weddings, group events, and guest transportation." } },
        { "@type": "Question", "name": "Are drivers experienced and verified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, drivers are experienced and familiar with local and outstation routes across Odisha." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "6–9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹5,800 onwards" }, { label: "Outstation Rate", value: "₹23/km" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Temple Tours", "Small Groups", "Lingaraj Tour"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10–12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹6,200 onwards" }, { label: "Outstation Rate", value: "₹24/km" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "LED TV, Charging Points, Luggage Space" }], tags: ["Full AC", "Most Popular", "Puri & Konark", "Golden Triangle"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "13–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹26/km" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "Reclining Seats, Multi-Zone AC" }], tags: ["Full AC", "Corporate Tours", "School Trips", "Wedding Groups"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹9,500 onwards" }, { label: "Outstation Rate", value: "₹30/km" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "Large Boot, Entertainment System" }], tags: ["Full AC", "Large Groups", "Pilgrimage Tours", "Multi-Day Odisha"] },
  { badge: "24 Seater", title: "24 Seater Tempo Traveller", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "21–24 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Outstation Rate", value: "On Request" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Pushback Seats, Luggage Space" }], tags: ["Full AC", "Large Groups", "College Trips", "Corporate Events"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹11,000 onwards" }, { label: "Outstation Rate", value: "₹30/km onwards" }, { label: "Extras", value: "WiFi, Mini Fridge, LED Lighting" }, { label: "Facility", value: "Leather Seats, Multi-Zone AC" }], tags: ["WiFi", "Mini Fridge", "Leather Seats", "VIP Travel"] },
];

const LOCAL_PRICE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   seating: "6 to 9 people",   fare: "₹5,800 onwards",  hours: "8 hours", km: "80 km" },
  { vehicle: "12 Seater Tempo Traveller",  seating: "10 to 12 people", fare: "₹6,200 onwards",  hours: "8 hours", km: "80 km" },
  { vehicle: "16 Seater Tempo Traveller",  seating: "13 to 16 people", fare: "₹7,500 onwards",  hours: "8 hours", km: "80 km" },
  { vehicle: "20 Seater Tempo Traveller",  seating: "17 to 20 people", fare: "₹9,500 onwards",  hours: "8 hours", km: "80 km" },
  { vehicle: "Luxury Tempo Traveller",     seating: "9 to 16 people",  fare: "₹11,000 onwards", hours: "8 hours", km: "80 km" },
];

const OUTSTATION_PRICE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   seating: "6 to 9 people",   rate: "₹23/km",         features: "Pushback seats, AC, music system" },
  { vehicle: "12 Seater Tempo Traveller",  seating: "10 to 12 people", rate: "₹24/km",         features: "LED TV, charging points, luggage space" },
  { vehicle: "16 Seater Tempo Traveller",  seating: "13 to 16 people", rate: "₹26/km",         features: "Reclining seats, multi-zone AC" },
  { vehicle: "20 Seater Tempo Traveller",  seating: "17 to 20 people", rate: "₹30/km",         features: "Large boot, entertainment system" },
  { vehicle: "Luxury Tempo Traveller",     seating: "9 to 16 people",  rate: "₹30/km onwards", features: "Leather seats, WiFi, mini fridge, LED lighting" },
];

const ROUTES_TABLE = [
  { route: "Bhubaneswar to Puri",         dist: "~60 km",   fare: "On Request",           vehicle: "12 or 16 Seater" },
  { route: "Bhubaneswar to Konark",       dist: "~65 km",   fare: "On Request",           vehicle: "12 or 16 Seater" },
  { route: "Bhubaneswar to Chilika Lake", dist: "~100 km",  fare: "On Request",           vehicle: "12 or 16 Seater" },
  { route: "Bhubaneswar to Baripada",     dist: "~240 km",  fare: "₹8,500+ (12 Seater)", vehicle: "12 or 16 Seater" },
  { route: "Bhubaneswar to Bhitarkanika", dist: "~165 km",  fare: "₹7,500+ (12 Seater)", vehicle: "12 or 16 Seater" },
  { route: "Bhubaneswar to Gopalpur",     dist: "~180 km",  fare: "₹9,000+ (12 Seater)", vehicle: "12 or 16 Seater" },
  { route: "Odisha Golden Triangle",      dist: "Full Day", fare: "₹6,500+ (12 Seater)", vehicle: "Any Size" },
];

const USE_TAGS = [
  "Lingaraj Temple Tour", "Mukteshwar Temple", "ISKCON Bhubaneswar", "Rajarani Temple",
  "Puri Jagannath Dham", "Konark Sun Temple", "Chilika Lake Trip", "Dhauli Peace Pagoda",
  "Nandankanan Zoological Park", "Udayagiri Khandagiri Caves", "Odisha Golden Triangle",
  "Wedding Guest Transfers", "Corporate Group Tours", "School Picnic Trips",
];

const ADVANTAGES = [
  { title: "One Vehicle for the Whole Group",  desc: "No splitting the group across multiple cabs. Everyone travels together from the same pickup point and arrives at the same time. No coordination stress, no waiting for stragglers." },
  { title: "Budget Friendly Fares",            desc: "Starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Split across the group and the per head cost is almost always lower than booking individual cabs across Bhubaneswar." },
  { title: "Transparent Fixed Pricing",        desc: "Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no surprise additions at the end of the day." },
  { title: "Well Maintained Fleet",            desc: "Every vehicle in the Yatra Travel India fleet is regularly serviced and checked before each trip. Clean interiors, working AC, good tyre condition. Reliable on every route from Lingaraj Temple local tours to long outstation trips to Puri and Konark." },
  { title: "Experienced Local Drivers",        desc: "Drivers who know Bhubaneswar city roads, temple routes, and all major Odisha outstation highways personally. Not first timers on unfamiliar roads." },
  { title: "Right Size for Every Group",       desc: "9 seater, 12 seater, 16 seater, 20 seater, and 24 seater available. Small pilgrim family or large corporate team, there is a vehicle that fits exactly." },
  { title: "On Time Pickup Every Time",        desc: "Driver details shared the night before. Vehicle at your door at confirmed time. No chasing, no waiting." },
];

const WEDDING_SERVICES = [
  "Guest pickup and drop between hotel and wedding venue",
  "Baraat group travel in one vehicle",
  "Reception to hotel transfers after the function",
  "Airport pickup for outstation wedding guests",
  "Multi day wedding event transfers across Bhubaneswar",
];

const FEATURES = [
  { title: "Fully Air-Conditioned",     desc: "All tempo travellers are fully AC — essential for Odisha's humid coastal climate. Stay comfortable on temple tours, beach trips, and long outstation journeys." },
  { title: "Premium Pushback Seats",    desc: "Soft and wide pushback seats provide extra comfort on long routes like Bhubaneswar to Baripada or Puri pilgrimage circuits." },
  { title: "LED TV & Charging Points",  desc: "12 seater onwards comes with LED TV and mobile charging points — keeps passengers relaxed and connected on long Odisha outstation routes." },
  { title: "Large Luggage Space",       desc: "Ample boot space for pilgrimage bags, shopping, and equipment — ideal for multi-day Odisha temple circuit tours." },
  { title: "Verified Local Drivers",    desc: "Drivers know Bhubaneswar city roads, Lingaraj Temple timings, all Odisha temple routes, and major outstation highways personally." },
  { title: "WiFi & Mini Fridge (Luxury)", desc: "Luxury tempo travellers come with WiFi, mini fridge, and LED lighting — the most comfortable way to travel in and around Bhubaneswar." },
  { title: "Odisha Pilgrimage Expert",  desc: "Drivers know Jagannath Puri, Konark, Lingaraj, Taratarini, and Maa Samaleswari Temple routes — local knowledge that makes a real difference on pilgrimage tours." },
  { title: "On Time Every Trip",        desc: "Vehicle details shared the night before every booking. Driver arrives at confirmed time. No delays on your Bhubaneswar sightseeing or temple tour day." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll tax included", "Parking charges included", "Driver day allowance included"];
const EXCLUDED = ["State entry tax / permit charges (if applicable)", "Driver night allowance (₹500, if applicable)", "Any additional km beyond agreed package", "Personal expenses of passengers", "Special temple entry fees (as applicable)"];

const FAQS = [
  { q: "Is a tempo traveller better than booking multiple cabs in Bhubaneswar?",              a: "Yes. A tempo traveller in Bhubaneswar keeps the whole group in one vehicle. No splitting up, no coordination across multiple cabs, no one arriving late. And when the fare is split across 10 or 12 people the per head cost beats individual cabs on almost every route from Bhubaneswar." },
  { q: "Can I hire a tempo traveller in Bhubaneswar for a corporate offsite?",                 a: "Yes. Corporate tempo traveller hire in Bhubaneswar is one of the most regularly booked services. Office outings, team retreats, client transfers across Odisha. 12 and 16 seater most popular for corporate groups. Professional driver, confirmed vehicle, fixed fare agreed upfront. Call 9044019511 to book." },
  { q: "What is the best tempo traveller route for a Golden Triangle Odisha trip?",            a: "The most popular Golden Triangle Odisha route by tempo traveller from Bhubaneswar covers Bhubaneswar, Puri, and Konark in one full day. Starting fare Rs 6,500 for a 12 seater covering all three destinations. Temples, beaches, and heritage sites all in one comfortable group trip." },
  { q: "How much does a 20 seater tempo traveller cost in Bhubaneswar?",                      a: "20 seater tempo traveller in Bhubaneswar starts at Rs 9,500 for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 30 per km. Best for large pilgrimage groups, wedding parties, and college batch trips from Bhubaneswar. Call 9044019511 to confirm availability." },
  { q: "Is tempo traveller available for school picnic trips from Bhubaneswar?",               a: "Yes. Tempo traveller for school trips from Bhubaneswar is regularly booked for educational tours, picnics, and excursions. Nandankanan Zoological Park, Udayagiri Khandagiri Caves, Dhauli Peace Pagoda. Safe well maintained vehicles, experienced drivers, fixed group fare. Call 9044019511 to book." },
  { q: "What is the tempo traveller fare for Bhubaneswar Odisha temple circuit?",             a: "Tempo traveller for Odisha temple circuit from Bhubaneswar covers Lingaraj Temple, Mukteshwar Temple, Rajarani Temple, Ananta Vasudeva Temple, and ISKCON Temple. Full day local package starts at Rs 4,200 for a 12 seater. All major Bhubaneswar temples covered comfortably in one day." },
  { q: "Can I book a tempo traveller in Bhubaneswar for a multi day Odisha tour?",             a: "Yes. Multi day tempo traveller package from Bhubaneswar is available covering major Odisha destinations. Bhubaneswar, Puri, Konark, Chilika Lake, Simlipal, and Baripada in one extended group tour. Driver accommodation included for overnight stops. Fare confirmed upfront for full trip duration. Call 9044019511 to plan and book." },
  { q: "Is tempo traveller available from Bhubaneswar to Baripada?",                           a: "Yes. Tempo traveller Bhubaneswar to Baripada starts at Rs 8,500 for a 12 seater. Baripada is 240 km from Bhubaneswar and is the gateway to Simlipal National Park. Popular with wildlife and nature loving groups from Bhubaneswar. Drive takes around 4 to 5 hours." },
  { q: "What is the tempo traveller fare from Bhubaneswar to Gopalpur Beach?",                 a: "Tempo traveller Bhubaneswar to Gopalpur Beach fare starts at Rs 9,000 for a 12 seater. Gopalpur is 180 km from Bhubaneswar. Popular weekend beach getaway for groups. Smooth highway drive, easy day trip or overnight package available. Call 9044019511 to book." },
  { q: "Can I get a tempo traveller in Bhubaneswar with a driver who knows Odisha pilgrimage routes?", a: "Yes. Every tempo traveller driver at Yatra Travel India in Bhubaneswar is familiar with all major Odisha pilgrimage routes. Jagannath Puri, Konark, Lingaraj Temple, Taratarini Temple, Maa Samaleswari Temple. Local route knowledge makes a real difference on pilgrimage group tours." },
  { q: "What is the tempo traveller fare from Bhubaneswar to Bhitarkanika?",                   a: "Tempo traveller Bhubaneswar to Bhitarkanika fare starts at Rs 7,500 for a 12 seater. Bhitarkanika National Park is 165 km from Bhubaneswar. Popular eco tourism and wildlife group destination. Mangrove forests, saltwater crocodiles, and migratory birds. Multi day package available. Call 9044019511 to book." },
  { q: "What makes Yatra Travel India the best tempo traveller service in Bhubaneswar?",       a: "Best tempo traveller service in Bhubaneswar means vehicle on time, driver knows every Odisha route, fare exactly as agreed. Yatra Travel India offers well maintained fleet, new vehicles, transparent pricing, experienced drivers on all local and outstation routes across Odisha. 9 seater to luxury tempo traveller all available. Call 9044019511 to book today." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",     city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",      city: "Tempo Traveller in Delhi",      type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",   city: "Tempo Traveller in Varanasi",   type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa",        city: "Tempo Traveller in Goa",        type: "Beach Tours, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                     city: "Tempo Traveller in Ujjain",     type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",                    city: "Tempo Traveller in Somnath",    type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mysore",                     city: "Tempo Traveller in Mysore",     type: "Palace Tours & Dasara Travel" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerBhubaneswar() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Bhubaneswar to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Bhubaneswar&apos;s Trusted Tempo Traveller — Lingaraj Temple, Puri, Konark, Chilika Lake & Odisha Tours</p>
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
          <span>Tempo Traveller in Bhubaneswar</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Bhubaneswar</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Lingaraj Temple · Puri Jagannath · Konark Sun Temple · Chilika Lake · Golden Triangle Odisha · Wedding Transfers</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 24 Seater Available", "Luxury Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Bhubaneswar" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "On-Time Pickup", sub: "Driver details shared night before" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Fuel, toll, parking all included" }, { title: "Verified Drivers", sub: "Know all Odisha pilgrimage routes" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Intro Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Bhubaneswar</strong> for Lingaraj Temple tours, Puri Jagannath Dham, Konark Sun Temple, Chilika Lake, wedding transfers, and corporate outings. <strong>9 seater to 24 seater — including Luxury Tempo Traveller with WiFi and mini fridge.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Budget Friendly Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Best Tempo Traveller Service in Bhubaneswar — Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Book Budget Friendly Tempo Travellers in Bhubaneswar</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Travelling with a group in Bhubaneswar does not have to be expensive. Yatra Travel India offers budget friendly tempo travellers in Bhubaneswar for every group size starting at Rs 3,000 for a 9 seater and Rs 4,200 for a 12 seater. Transparent pricing, no hidden charges, and fare confirmed before the trip starts.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Whether your group is heading to Lingaraj Temple, Puri Jagannath Dham, Konark Sun Temple, or anywhere across Odisha, Yatra Travel India has the right vehicle at the right price. Split the fare across 10 or 12 people and the per head cost beats individual cabs on every route.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Every booking includes fuel, toll, parking, and driver allowance. No surprise additions after the trip. Budget friendly does not mean compromising on comfort or reliability. Every tempo traveller in the Yatra Travel India fleet is well maintained, regularly serviced, and driven by an experienced driver who knows Bhubaneswar and all major Odisha routes personally.</p>
            <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
              <p className="text-white text-sm font-semibold">Call 9044019511 to book your budget friendly tempo traveller in Bhubaneswar today.</p>
            </div>
          </div>

          {/* Vehicle Options Available */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Vehicle Options Available in Bhubaneswar — Yatra Travel India</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">Yatra Travel India offers a complete range of well maintained vehicles in Bhubaneswar for every group size and every trip type. Local sightseeing, outstation trips, pilgrimage tours, wedding transfers, and corporate travel. All at transparent fixed pricing with no hidden charges.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-2">
            {["9 Seater Tempo Traveller", "12 Seater Tempo Traveller", "16 Seater Tempo Traveller", "20 Seater Tempo Traveller", "24 Seater Tempo Traveller", "Luxury Tempo Traveller"].map(v => (
              <div key={v} className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <FaBus className="text-[#0f6ec8] text-xl mx-auto mb-1" />
                <p className="text-xs font-semibold text-gray-700">{v}</p>
                <p className="text-[10px] text-gray-500">Bhubaneswar</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Bhubaneswar</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* ══ SECTION 2: Advantages ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Advantages of Booking a Tempo Traveller for Rent in Bhubaneswar with Yatra Travel India</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADVANTAGES.map(a => (
              <div key={a.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <h3 className="font-bold text-[#0f6ec8] text-sm mb-2">{a.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 3: Pricing Tables ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Affordable Tempo Traveller Pricing in Bhubaneswar — Yatra Travel India</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Getting a group around Bhubaneswar does not have to cost a fortune. Yatra Travel India offers some of the most affordable tempo traveller rates in Bhubaneswar with fully transparent pricing. Fare confirmed at booking, everything included, nothing added after the trip.</p>

          <h3 className="font-bold text-gray-900 text-base mb-3">Tempo Traveller Pricing For Local Sightseeing</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm min-w-[500px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Seating", "Local Fare", "Hours", "KM Limit"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {LOCAL_PRICE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.seating}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.fare}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.hours}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row.km}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-gray-900 text-base mb-3">Tempo Traveller Pricing For Outstation Trips</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[500px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Seating Capacity", "Per KM Rate", "Key Features"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {OUTSTATION_PRICE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.seating}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.rate}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ══ Routes Table ══ */}
        <ST border="border-green-500">Tempo Traveller Routes from Bhubaneswar — Key Destinations</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[500px]">
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

        {/* ══ SECTION 4: Wedding Transport ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Tempo Traveller for Wedding Groups in Bhubaneswar — Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Wedding transport in Bhubaneswar needs to work perfectly. No delays, no confusion, no guests stranded at the wrong venue. A tempo traveller from Yatra Travel India keeps the whole wedding party together, on time, and comfortable throughout the day.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Why Wedding Groups in Bhubaneswar Book a Tempo Traveller</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Moving guests between mandap, hotel, and reception across Bhubaneswar in multiple cabs always creates problems. Someone gets delayed, someone takes a wrong turn, and the bride&apos;s family is waiting while half the guests are still on the way. One tempo traveller removes all of that. One pickup, one vehicle, everyone arrives together.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Wedding Tempo Traveller Services in Bhubaneswar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {WEDDING_SERVICES.map(service => (
                <div key={service} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-600 rounded-lg p-3 text-center">
              <p className="text-white text-sm font-semibold">Call 9044019511 to book wedding tempo traveller in Bhubaneswar today.</p>
            </div>
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Bhubaneswar</ST>
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

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Bhubaneswar</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Bhubaneswar Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Lingaraj Temple, Puri, Konark, Chilika Lake, wedding transfers, corporate outings — call us with your group size and travel date. Dial 9044019511.</p>
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
