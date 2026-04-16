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
      "@id": "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa",
      "name": "Tempo Traveller in Goa | Yatra Travel India",
      "description": "Book tempo traveller in Goa for group travel, sightseeing, beach tours, weddings, and outstation trips with AC vehicles and experienced drivers.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
      },
      "areaServed": { "@type": "City", "name": "Goa" },
      "serviceType": "Tempo Traveller Rental",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "23",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the price of a tempo traveller in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "The starting fare for a 12 seater tempo traveller in Goa is around Rs 5000 for local tours and Rs 23 per km for outstation trips." } },
        { "@type": "Question", "name": "How can I book a tempo traveller in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "You can book by calling or WhatsApp at 9044019511 or through the website by sharing your travel details." } },
        { "@type": "Question", "name": "Which tempo traveller is best for group travel in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "A 9 to 12 seater is ideal for small groups, while 16 to 20 seater vehicles are suitable for medium to large groups." } },
        { "@type": "Question", "name": "Is luxury tempo traveller available in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers with premium seats, AC, and entertainment features are available for group travel." } },
        { "@type": "Question", "name": "What is the outstation rate for tempo traveller from Goa?", "acceptedAnswer": { "@type": "Answer", "text": "Outstation rates start from around Rs 23 per km depending on the vehicle type and travel plan." } },
        { "@type": "Question", "name": "Are there any hidden charges in tempo traveller booking?", "acceptedAnswer": { "@type": "Answer", "text": "No, pricing is transparent and includes toll, parking, and driver allowance as per booking details." } },
        { "@type": "Question", "name": "How many people can travel in a tempo traveller in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo travellers are available in 9, 12, 16, and 20 seater options depending on group size." } },
        { "@type": "Question", "name": "Is tempo traveller available for outstation trips from Goa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book for trips from Goa to destinations like Mumbai, Bangalore, Kolhapur, and Gokarna." } },
        { "@type": "Question", "name": "How early should I book a tempo traveller in Goa?", "acceptedAnswer": { "@type": "Answer", "text": "It is recommended to book 2 to 3 weeks in advance during peak season for better availability." } },
        { "@type": "Question", "name": "What is the difference between 12 seater and 16 seater tempo traveller?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater is suitable for smaller groups, while a 16 seater provides more space and comfort for larger groups." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Goa",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Local Fare", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Beach Tours", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Goa", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Local Fare", value: "₹5,000 onwards" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Most Popular", "Goa Sightseeing", "Outstation"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Goa", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Local Fare", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Office Trips", "School Tours"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Goa", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Local Fare", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Max Luggage", "Wedding Groups", "Large Events"] },
  { badge: "Mercedes",  title: "Mercedes Tempo Traveller in Goa",  img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–13 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹30–35/km" }, { label: "Suspension", value: "Air Suspension" }, { label: "Facility", value: "Pushback Seats, Full AC, Premium" }], tags: ["Premium AC", "Air Suspension", "Corporate Travel", "Weddings"] },
  { badge: "Hiace",     title: "Toyota Hiace Van in Goa",           img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10–14 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹6,500 onwards" }, { label: "Outstation Rate", value: "₹27–30/km" }, { label: "Luggage", value: "Large Boot Space" }, { label: "Facility", value: "Full AC, Ergonomic Seats" }], tags: ["Full AC", "Family Trips", "Multi-Day Tours", "Corporate Groups"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Goa",     img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "12–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹10,000 onwards" }, { label: "Outstation Rate", value: "₹38–45/km" }, { label: "AC", value: "Multi-Zone Climate Control" }, { label: "Extras", value: "LCD, Mini Fridge, Charging Points" }], tags: ["Reclining Leather", "LCD Screens", "Mini Fridge", "VIP Events"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Goa",      capacity: "9 + Driver",     ac: "AC",         ideal: "Small families and friend groups — compact, easy to navigate through Goa's coastal roads, comfortable for couples trips and small family holidays" },
  { vehicle: "12 Seater Tempo Traveller in Goa",     capacity: "12 + Driver",    ac: "AC",         ideal: "Most popular choice — office groups, college friends, family reunions, local sightseeing and outstation trips from Goa" },
  { vehicle: "16 Seater Tempo Traveller in Goa",     capacity: "16 + Driver",    ac: "AC",         ideal: "Medium groups of 13 to 16 — office outings, school trips, extended family vacations with better legroom and luggage space" },
  { vehicle: "20 Seater Tempo Traveller in Goa",     capacity: "20 + Driver",    ac: "AC",         ideal: "Large corporate groups, wedding parties, religious tours — everyone travels together with maximum luggage space" },
  { vehicle: "Mercedes Tempo Traveller in Goa",      capacity: "9–13 + Driver",  ac: "Premium", ideal: "Corporate clients, senior management, wedding parties — premium interiors, air suspension, pushback airline-style seats" },
  { vehicle: "Toyota Hiace Van in Goa",              capacity: "10–14 + Driver", ac: "Full AC",    ideal: "Families with children, mid-size corporate groups, multi-day trips — noticeable upgrade without full luxury pricing" },
  { vehicle: "Luxury Tempo Traveller in Goa",        capacity: "12–20 + Driver", ac: "Multi-Zone", ideal: "Weddings, VIP tours, special occasions, long outstation drives — reclining leather, screens, mini fridge, charging at every seat" },
];

const ROUTES_TABLE = [
  { route: "Goa to Mumbai",      dist: "~590 km", vehicle: "12 or 16 Seater" },
  { route: "Goa to Bangalore",   dist: "~560 km", vehicle: "12 or 16 Seater" },
  { route: "Goa to Kolhapur",    dist: "~230 km", vehicle: "12 or 16 Seater" },
  { route: "Goa to Gokarna",     dist: "~60 km",  vehicle: "9 or 12 Seater" },
  { route: "Goa to Pune",        dist: "~450 km", vehicle: "12 or 16 Seater" },
  { route: "Goa to Mangalore",   dist: "~200 km", vehicle: "12 or 16 Seater" },
  { route: "Goa Local Tour",     dist: "Up to 80 km", vehicle: "Any Size" },
];

const USE_TAGS = ["Calangute Beach Tour", "Baga & Anjuna Beaches", "Old Goa Churches", "Basilica of Bom Jesus", "Mandovi River Cruise", "Mapusa Market Visit", "Wedding Guest Transfers", "Corporate Group Travel", "Goa to Mumbai", "Goa to Bangalore", "Family Vacation", "Airport Pickup & Drop", "Flea Market Tour", "Destination Wedding"];

const FEATURES = [
  { title: "Premium Pushback Seats",    desc: "Soft and wide pushback seats for long beach drives, outstation trips to Mumbai or Bangalore, and full-day Goa sightseeing tours." },
  { title: "Fully Air-Conditioned",     desc: "All tempo travellers are fully AC — essential for Goa's coastal humidity and hot summer months. Stay comfortable throughout your trip." },
  { title: "Extra Legroom",             desc: "Wide aisles and generous legroom make long drives like Goa to Mumbai comfortable for families, senior passengers, and large groups." },
  { title: "Stylish Interiors",         desc: "Clean modern interiors with LED lighting — perfect for destination weddings, corporate travel, and premium group experiences in Goa." },
  { title: "Large Luggage Space",       desc: "Ample boot space for beach gear, shopping bags, and large suitcases — ideal for multi-day Goa trips and airport transfers." },
  { title: "Smooth Suspension",         desc: "Superior suspension handles Goa's coastal roads and long highway drives smoothly — no rattling on the way to Kolhapur or Bangalore." },
  { title: "Entertainment & Charging",  desc: "Music systems, screens, and charging points in luxury vehicles — keeps everyone relaxed and connected on long outstation drives." },
  { title: "Verified Local Drivers",    desc: "Experienced drivers who know Goa's beaches, market routes, and major highways — safe, punctual, and professional on every trip." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll taxes included", "Parking charges included", "Driver day allowance included"];
const EXCLUDED = ["State entry tax / permit charges (outstation, as applicable)", "Driver night allowance (₹500, if applicable)", "Any additional km beyond agreed package", "Goa Airport parking charges (as per authority)", "Personal expenses of passengers"];

const BENEFITS = [
  { title: "Everyone Travels Together",     desc: "Instead of coordinating multiple cabs across Goa's busy coastal roads, one tempo traveller keeps the whole group together — same vehicle, same schedule, no one getting lost." },
  { title: "Cost Splits Brilliantly",       desc: "Split a 12 seater fare across 12 people in Goa and the per-head cost beats individual cabs on every single route. Group travel has never been this economical." },
  { title: "Perfect for Goa's Road Layout", desc: "Goa's beaches, markets, and attractions are spread across North and South Goa. A tempo traveller lets you cover everything on your own schedule without rush." },
  { title: "Ideal for Peak Season Travel",  desc: "November to February is packed. A booked tempo traveller means no last-minute scrambling for transport when every cab in Goa is occupied." },
  { title: "Luxury Options Available",      desc: "For weddings, corporate groups, and VIP travel — Mercedes Tempo Traveller and full luxury Urbania with reclining leather seats, screens, and mini fridge." },
  { title: "Transparent Pricing Always",    desc: "Toll, parking, state tax, driver allowance — all discussed upfront. The fare quoted before departure is exactly what you pay on return. No surprises." },
];

const OUTSTATION_ROUTES = [
  { title: "Goa to Mumbai Tempo Traveller",     meta: ["~590 km", "9–10 Hours", "Long Distance"],     desc: "Goa to Mumbai is one of the most booked long-distance routes. With reclining seats, full AC, and luggage space, our tempo travellers make the overnight or full-day drive smooth and comfortable. Experienced drivers handle the coastal and highway sections safely." },
  { title: "Goa to Bangalore Tempo Traveller",  meta: ["~560 km", "9–10 Hours", "Corporate & Family"], desc: "Book a tempo traveller from Goa to Bangalore for corporate travel, family relocations, or group outings. Our 12 and 16 seater AC tempo travellers are well-maintained with experienced drivers who know this highway route thoroughly." },
  { title: "Goa to Kolhapur Tempo Traveller",   meta: ["~230 km", "4–5 Hours", "Popular Route"],       desc: "Goa to Kolhapur is a popular mid-distance route for family visits and religious trips. Comfortable AC seating and professional drivers make the journey relaxed and on time for your group." },
  { title: "Goa to Gokarna Tempo Traveller",    meta: ["~60 km", "1.5–2 Hours", "Beach Getaway"],      desc: "A quick hop from Goa to Gokarna for groups wanting to explore Karnataka's quieter beaches. Perfect for a day trip or overnight extension on your Goa holiday with a small to medium group." },
];

const WHY_CARDS = [
  { title: "Clean Well-Maintained Vehicles",   desc: "Every tempo traveller in Goa is cleaned and checked before each trip — AC performance, tyres, and engine verified so your group always boards a fresh reliable vehicle." },
  { title: "Experienced Goa Drivers",          desc: "Drivers know Goa's beach roads, Old Goa lanes, market areas, and major highways. Navigate Goa's busy peak season traffic without stress." },
  { title: "Fair and Transparent Pricing",     desc: "Rs 5,000 for local tours. Rs 23/km for outstation. Luxury from Rs 7,500. All fares confirmed upfront with toll, parking, and driver allowance included." },
  { title: "Easy Booking — Call or WhatsApp",  desc: "Call or WhatsApp 9044019511 with your travel date, group size, and Goa itinerary. Instant quote and confirmation in minutes. 24x7 support." },
  { title: "Peak Season Availability",         desc: "Dedicated vehicle pool for Goa's November to February peak season. Book 2 to 3 weeks ahead for standard tempo travellers, longer for luxury vehicles." },
  { title: "All Group Types Welcome",          desc: "Family holidays, destination weddings, corporate outings, college trips, honeymoon groups, religious tours — we cover every kind of group travel in Goa." },
];

const FAQS = [
  { q: "What is the price of a tempo traveller in Goa?",                                    a: "The starting fare for a 12 seater tempo traveller in Goa is Rs 5,000 for a local tour covering 8 to 9 hours and up to 80 km. For outstation trips from Goa, the rate is Rs 23 per km. Luxury tempo travellers start from Rs 7,500 for local tours and Rs 30 to 45 per km for outstation travel." },
  { q: "What is the contact number for booking a tempo traveller in Goa?",                  a: "You can book your tempo traveller in Goa easily by calling Yatra Travel India at 9044019511 or visit www.yatratravelindia.com for quick online booking." },
  { q: "Which is the best tempo traveller for a group trip in Goa?",                        a: "It depends on your group size. A 9 to 12 seater tempo traveller works best for small groups, while a 16 to 20 seater tempo traveller in Goa is the right pick for medium to large groups. For premium comfort, the Mercedes Tempo Traveller or Toyota Hiace van are excellent choices." },
  { q: "Is a luxury tempo traveller worth it in Goa?",                                      a: "Yes — especially for long outstation trips, weddings, or corporate travel. A luxury tempo traveller in Goa offers pushback reclining seats, air suspension, multi-zone AC, LCD screens, and charging points at every seat. On a 6 to 8 hour drive, the comfort difference is very noticeable." },
  { q: "What is the tempo traveller outstation rate from Goa?",                             a: "For outstation trips from Goa, the rate starts at Rs 23 per km for a standard 12 seater tempo traveller. Luxury options like the Mercedes Tempo Traveller are charged at Rs 30 to 35 per km. The per km rate is calculated for both directions from Goa and back." },
  { q: "Are there any hidden charges in tempo traveller booking in Goa?",                   a: "No hidden charges. The tempo traveller fare in Goa includes toll taxes, parking charges, driver allowance, fuel, and state tax for outstation trips. The price quoted upfront is the final amount you pay — no surprise additions at the end of the trip." },
  { q: "How many people can travel in a tempo traveller in Goa?",                           a: "Tempo travellers in Goa are available in multiple sizes — 9 seater, 12 seater, 16 seater, and 20 seater. A 12 seater comfortably fits 10 to 12 people with luggage, while a 20 seater is ideal for large groups of 17 to 20 people." },
  { q: "What vehicles are available for luxury group travel in Goa?",                       a: "For premium group travel in Goa, the top options are the Mercedes Tempo Traveller, Toyota Hiace van, and full luxury tempo travellers with reclining leather seats, entertainment systems, and climate control. Ideal for corporate groups, destination weddings, and VIP tours." },
  { q: "How far in advance should I book a tempo traveller in Goa?",                        a: "During peak season November to February, book at least 2 to 3 weeks in advance. Luxury vehicles like the Mercedes Tempo Traveller get booked fast during this period. Off-season bookings can be made with shorter notice, but early booking always gets better rates and availability." },
  { q: "Can I hire a tempo traveller in Goa for an outstation trip?",                       a: "Yes. Tempo travellers on rent in Goa are available for outstation trips to popular destinations like Goa to Mumbai, Goa to Bangalore, Goa to Kolhapur, and Goa to Gokarna. The outstation rate is charged per km and includes toll, parking, and driver allowance." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",     city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru",  city: "Tempo Traveller in Bengaluru",  type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",      city: "Tempo Traveller in Delhi",      type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",   city: "Tempo Traveller in Varanasi",   type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",       city: "Tempo Traveller in Agra",       type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mysore",                     city: "Tempo Traveller in Mysore",     type: "Palace Tours & Dasara Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                     city: "Tempo Traveller in Ujjain",     type: "Mahakal Darshan & Pilgrimage" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerGoa() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Goa to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Goa&apos;s Trusted Tempo Traveller — Beach Tours, Sightseeing, Weddings, Mumbai & Bangalore</p>
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
          <span>Tempo Traveller in Goa</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Goa</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Beach Tours · Old Goa · Mandovi Cruise · Destination Weddings · Mumbai · Bangalore · Airport Transfer</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Mercedes & Luxury Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Goa" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "On-Time Pickup", sub: "Pickup from your exact location" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" }, { title: "Verified Drivers", sub: "Know Goa routes and coastal highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Goa</strong> for beach sightseeing, family vacations, destination weddings, corporate outings, and outstation travel to Mumbai, Bangalore, and Kolhapur. <strong>9 seater to 20 seater — including Mercedes Tempo Traveller, Toyota Hiace, and Luxury options.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ── INTRO SECTION ── */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Book a Tempo Traveller on Rent in Goa</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Goa offers something for everyone. Whether you want to enjoy water sports, taste amazing seafood, or simply spend peaceful time by the sea, this destination never disappoints. People visit Goa for many reasons — family vacations, honeymoons, destination weddings, friends&apos; trips, and even corporate outings. To make your journey more comfortable and enjoyable, booking a Tempo Traveller on rent in Goa is a smart choice, especially when you are traveling in a group.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Instead of managing multiple cars, you can travel together, enjoy the journey, and explore more places without any hassle. A tempo traveller is perfect for both local sightseeing in Goa and outstation trips to nearby destinations in Maharashtra and Karnataka.</p>
            <p className="text-base text-gray-700 leading-relaxed">We offer a variety of tempo traveller options so you can choose what suits your group and budget. You can book a 12 seater or 16 seater for regular travel, or go for a more premium experience with a Mercedes Tempo Traveller, Toyota Hiace, or Luxury Urbania. These vehicles are designed to provide comfort, space, and a smooth travel experience, making your Goa trip even more memorable.</p>
          </div>
        </div>

        {/* ── VEHICLE CARDS ── */}
        <ST id="services">Tempo Traveller Options in Goa</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* ── BEST PLACES ── */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Best Places to Visit in Goa</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Goa is one of those places that kind of ruins you for everywhere else — and in the best possible way. Here&apos;s what your group should cover:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {[
              { place: "Calangute, Baga & Anjuna Beaches", desc: "Each beach has its own vibe — cheap beer, fresh seafood, plastic chairs dug into the sand, and water sports. The classic Goa experience your group will always remember." },
              { place: "Old Goa — Basilica & Se Cathedral", desc: "Genuinely impressive Portuguese architecture. The Basilica of Bom Jesus and Se Cathedral make you forget for a second that you're standing in coastal India." },
              { place: "Mapusa & Anjuna Flea Markets",       desc: "Chaotic, loud, and a little overwhelming — which is exactly why you should go. Pick up handicrafts, eat something interesting, and soak it all in." },
              { place: "Mandovi River Cruise at Sunset",     desc: "Low-key one of the best things you can do in Goa. No jet skis, no loud music. Just water, sky, and that specific kind of quiet that's hard to find after dark." },
              { place: "Goa Nightlife",                      desc: "The clubs don't get going until late, the music is genuinely good, and somehow you always end up staying out way longer than planned." },
              { place: "Bebinca & Goan Food Trail",          desc: "Don't leave Goa without trying bebinca — a Goan dessert that becomes the thing you talk about weeks later. Plus the freshest seafood you'll have anywhere." },
            ].map(item => (
              <div key={item.place} className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-800 text-sm mb-2">{item.place}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">And if you&apos;re going with a group, just hire a tempo traveller. Don&apos;t overthink it — it makes everything easier.</p>
          </div>
        </div>

        {/* ── PRICE SECTION ── */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Tempo Traveller Price in Goa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-3">Local Tours in Goa</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">For local sightseeing within Goa, the starting fare for a <strong>12 seater tempo traveller is Rs 5,000</strong>. That covers 8 to 9 hours and up to 80 km — more than enough to hit all the major spots in a single day without feeling like you&apos;re racing against the clock.</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-blue-700 font-semibold">8–9 hours · Up to 80 km · All major Goa spots</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-3">Outstation from Goa</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">Planning to head outside Goa? The outstation rate is <strong>Rs 23 per km</strong>. Simple, fixed, and no confusing add-ons to figure out. The fare includes toll taxes, parking charges, and state tax for outstation trips.</p>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-blue-700 font-semibold">Rs 23/km · All charges included · No hidden costs</p>
              </div>
            </div>
          </div>

          {/* Luxury comparison table */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Luxury Tempo Traveller Options in Goa</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[500px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Capacity", "Local Fare", "Outstation Rate", "Best For"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {[
                  { v: "Mercedes Tempo Traveller", cap: "9–13 seats", local: "Rs 7,500+", out: "Rs 30–35/km",  best: "Corporate, weddings, premium tours" },
                  { v: "Toyota Hiace Van",          cap: "10–14 seats", local: "Rs 6,500+", out: "Rs 27–30/km", best: "Family trips, corporate groups, multi-day" },
                  { v: "Luxury Tempo Traveller",    cap: "12–20 seats", local: "Rs 10,000+", out: "Rs 38–45/km", best: "Weddings, VIP tours, special occasions" },
                ].map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.v}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.cap}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.local}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.out}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Standard vs Luxury comparison */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Standard vs Luxury Tempo Traveller in Goa</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[500px]">
              <thead><tr className="bg-[#0f6ec8]">{["Feature", "Standard Tempo Traveller", "Luxury Tempo Traveller"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {[
                  ["Seat Comfort", "Basic upright", "Pushback, reclining, padded"],
                  ["AC", "Standard", "Powerful multi-zone"],
                  ["Legroom", "Adequate", "Generous"],
                  ["Suspension", "Standard", "Air suspension"],
                  ["Entertainment", "None", "Screens, music system"],
                  ["Charging Points", "Rarely", "Every seat"],
                  ["Road Feel", "Bumpy on bad roads", "Smooth"],
                  ["Price Difference", "Base price", "40 to 60% higher"],
                  ["Best For", "Short local tours", "Long trips, special occasions"],
                ].map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row[0]}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ST>Tempo Traveller Options in Goa — Full Comparison</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[600px]">
            <thead><tr className="bg-[#0f6ec8]">{["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-4 border-r border-b border-gray-100"><span className={"text-xs font-bold px-2.5 py-1 rounded-full border " + (row.ac === "Multi-Zone" || row.ac === "Premium AC" ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200")}>{row.ac}</span></td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ST border="border-green-500">Tempo Traveller Hire in Goa — Key Outstation Routes</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[420px]">
            <thead><tr className="bg-[#0f6ec8]">{["Route", "Distance", "Vehicle", "Booking"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100"><a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        <ST>Features of Our Tempo Travellers in Goa</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3"><svg viewBox="0 0 24 24" fill="#fff" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg></div>
              <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

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

        <ST>Why Choose Yatra Travel India for Tempo Traveller in Goa</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <ST border="border-[#ff6b35]" id="routes">Popular Outstation Routes from Goa</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map(r => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{r.meta.map(m => <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>)}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <ST>Why Book Tempo Traveller in Goa with Yatra Travel India</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Peak Season Advance Booking Essential:</strong> Goa&apos;s peak season runs from <strong>November to February.</strong> Standard tempo travellers should be booked <strong>2 to 3 weeks in advance.</strong> Luxury vehicles like the <strong>Mercedes Tempo Traveller fill up faster</strong> — book 3 to 4 weeks ahead for peak dates and destination wedding weekends.</p>
        </div>

        <ST>Frequently Asked Questions — Tempo Traveller in Goa</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Goa Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Beach tours, sightseeing, airport transfers, Mumbai or Bangalore — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"><FaPhoneAlt size={12} /> Call Now — +91 90440 19511</a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2"><FaWhatsapp size={14} /> WhatsApp Us</a>
          </div>
        </div>

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
