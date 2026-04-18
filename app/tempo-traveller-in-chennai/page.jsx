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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-chennai#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-chennai",
      "name": "Tempo Traveller in Chennai | Yatra Travel India",
      "description": "Book tempo traveller in Chennai for local sightseeing, airport transfers, corporate trips, family tours, and outstation travel. Choose from 9, 12, 16, and 20 seater AC and luxury tempo travellers with professional drivers and transparent pricing.",
      "provider": { "@id": "https://www.yatratravelindia.com/#business" },
      "areaServed": { "@type": "City", "name": "Chennai" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "18", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-chennai" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.4", "reviewCount": "187" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-chennai#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the price of tempo traveller in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo traveller price in Chennai starts from ₹18–₹25 per km for outstation trips and ₹3000–₹6000 for local packages depending on seating and duration." } },
        { "@type": "Question", "name": "Which tempo traveller is best for group travel in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller is best for small groups and families, while 16 or 20 seater options are suitable for larger group travel in Chennai." } },
        { "@type": "Question", "name": "Can I book tempo traveller in Chennai for outstation trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book tempo traveller from Chennai for outstation trips to Pondicherry, Tirupati, Bangalore, and other nearby destinations." } },
        { "@type": "Question", "name": "Is luxury tempo traveller available in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers are available in Chennai with pushback seats, AC, charging points, and premium interiors for comfortable travel." } },
        { "@type": "Question", "name": "Is tempo traveller suitable for airport transfer in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo traveller is ideal for airport pickup and drop in Chennai as it provides enough seating and luggage space for group travel." } },
        { "@type": "Question", "name": "Are drivers included in tempo traveller booking in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all tempo traveller rentals in Chennai include experienced drivers for safe and smooth journeys." } },
        { "@type": "Question", "name": "How many seating options are available in Chennai tempo traveller?", "acceptedAnswer": { "@type": "Answer", "text": "You can choose from 9, 12, 14, 16, 17, and 20 seater tempo travellers based on your group size and travel needs." } },
        { "@type": "Question", "name": "Can I hire tempo traveller for local sightseeing in Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo traveller can be hired for local sightseeing in Chennai to visit beaches, temples, and tourist attractions comfortably." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "12 Seater",  title: "12 Seater Tempo Traveller in Chennai",         img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Local Package", value: "₹3,000–₹6,000" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Charging Points" }], tags: ["Full AC", "Most Popular", "Family Tours", "Tirupati Trip"] },
  { badge: "14 Seater",  title: "14 Seater Tempo Traveller in Chennai",         img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "14 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Local Package", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Weekend Tours", "Religious Trips", "Group Travel"] },
  { badge: "16 Seater",  title: "16 Seater Tempo Traveller in Chennai",         img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Local Package", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Luggage Space" }], tags: ["Full AC", "Outstation Trips", "Office Groups", "School Trips"] },
  { badge: "20 Seater",  title: "20 Seater Tempo Traveller in Chennai",         img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Local Package", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Full AC", "Large Groups", "Corporate Events", "Wedding Parties"] },
  { badge: "12 Luxury",  title: "12 Seater Luxury Tempo Traveller in Chennai",  img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Seating Layout", value: "1×1 or 2×1 Premium" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "LED TV, Charging Points, Premium AC" }], tags: ["Pushback Seats", "LED TV", "Charging Points", "Premium Comfort"] },
  { badge: "17 Seater",  title: "17 Seater Tempo Traveller in Chennai",         img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "17 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹18–25/km" }, { label: "Local Package", value: "On Request" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Budget Friendly", "Group Excursions", "Pondicherry Trip"] },
];

const CHENNAI_OPTIONS_TABLE = [
  { vehicle: "12 Seater Tempo Traveller in Chennai",        capacity: "12 + Driver",    ac: "AC",          ideal: "Families and small groups — Marina Beach, Kapaleeshwarar Temple, Fort St. George, and local Chennai sightseeing" },
  { vehicle: "14 Seater Tempo Traveller in Chennai",        capacity: "14 + Driver",    ac: "AC",          ideal: "Weekend tours and religious trips — temple visits, outstation to Mahabalipuram and Pondicherry from Chennai" },
  { vehicle: "16 Seater Tempo Traveller in Chennai",        capacity: "16 + Driver",    ac: "AC",          ideal: "Office groups, school trips, corporate outings — outstation to Tirupati, Bangalore, and Chennai neighbourhood trips" },
  { vehicle: "20 Seater Tempo Traveller in Chennai",        capacity: "20 + Driver",    ac: "AC",          ideal: "Large corporate events, wedding parties — Chennai Airport group transfers and multi-day South India tours" },
  { vehicle: "12 Seater Luxury Tempo Traveller in Chennai", capacity: "12 + Driver",    ac: "Premium AC",  ideal: "Family trips, corporate outings, Tirupati darshan, Rameshwaram tours — 1×1 or 2×1 pushback seats, LED TV, charging points" },
  { vehicle: "17 Seater Tempo Traveller in Chennai",        capacity: "17 + Driver",    ac: "AC",          ideal: "Larger budget groups — Pondicherry trips, corporate excursions, and outstation travel across Tamil Nadu" },
];

const ROUTES_TABLE = [
  { route: "Chennai to Pondicherry",   dist: "~160 km", vehicle: "12 or 16 Seater" },
  { route: "Chennai to Tirupati",      dist: "~145 km", vehicle: "12 or 16 Seater" },
  { route: "Chennai to Bangalore",     dist: "~350 km", vehicle: "12 or 16 Seater" },
  { route: "Chennai to Mahabalipuram", dist: "~60 km",  vehicle: "9 or 12 Seater"  },
  { route: "Chennai to Rameshwaram",   dist: "~570 km", vehicle: "12 or 16 Seater" },
  { route: "Chennai Local Tour",       dist: "Up to 80 km", vehicle: "Any Size" },
  { route: "Chennai Airport Transfer", dist: "As required", vehicle: "Any Size" },
];

const SIGHTSEEING_PLACES = [
  { name: "Marina Beach",           desc: "One of the longest urban beaches in the world. A must-visit landmark in Chennai for any group sightseeing tour." },
  { name: "Kapaleeshwarar Temple",  desc: "A famous ancient temple dedicated to Lord Shiva in Mylapore. Known for its stunning Dravidian architecture and vibrant religious atmosphere." },
  { name: "Fort St. George",        desc: "A historic colonial-era fort housing the Tamil Nadu Legislative Assembly and a museum. Rich in history and heritage for group tours." },
  { name: "Santhome Cathedral",     desc: "A beautiful Gothic-style basilica built over the tomb of Saint Thomas. An important landmark for both religious and cultural tours in Chennai." },
  { name: "Elliot's Beach",         desc: "A quieter and more relaxed beach compared to Marina. Popular with families and groups looking for peaceful coastal views." },
  { name: "Government Museum",      desc: "One of the oldest museums in India with fascinating collections of art, archaeology, and natural history. Ideal for educational group tours." },
];

const WHY_PEOPLE_CHOOSE = [
  { title: "Travelling Without Distress",  desc: "We manage every step which we undertake such as planning, coordination, and assistance. This offers you to travel peacefully knowing that it is taken great care of your journey." },
  { title: "Comfort You Get in Travel",    desc: "While you travel, you get complete comfort on the way. A complete relaxation offers you to get through trips without any problem." },
  { title: "Everlasting Trust",            desc: "You get everlasting trust as our experts offer you varied needs. This makes your communication effective and builds great trust. You can have reliable amenity from us." },
  { title: "Available 24 Hours",           desc: "Tempo Chennai Travellers offer 24 hours support to passengers. Get service at any time through our webpage and make best use of it." },
];

const LUXURY_12_FEATURES = [
  "Soft pushback seats so you can relax",
  "Proper air conditioning for Chennai weather",
  "Clean and well-maintained interiors",
  "Charging points for phones",
  "Music system for entertainment",
  "Good lighting and overall premium feel",
];

const RENTAL_SERVICES = [
  { capacity: "14 Seater", desc: "Chennai Travels offer 14-seater vans for rental purpose. Clients can take on our well-maintained vans for weekend tours, visit tourist attractions, religious trips, etc." },
  { capacity: "16 Seater", desc: "We at Chennai Travels offer 16-seater vans for charge in Chennai for neighbourhood and outstation trips. Our vans are highly maintained and driven by well-experienced drivers." },
  { capacity: "20 Seater", desc: "Chennai Travels provide vans for rental purpose with 20 seats at a reasonable value. Hire this van for Chennai neighbouring trips and Chennai to outstation trips at a cheaper rate." },
];

const USE_TAGS = [
  "Marina Beach Tour", "Kapaleeshwarar Temple", "Fort St. George", "Santhome Cathedral",
  "Elliot's Beach", "Chennai to Tirupati", "Chennai to Pondicherry", "Chennai to Bangalore",
  "Airport Group Transfer", "Corporate Office Outings", "Wedding Guest Travel",
  "School Excursion Trips", "Tirupati Darshan Package", "Family Weekend Tour",
];

const FEATURES = [
  { title: "Dirt-Free & Clean Cars",      desc: "Every car is dirt free, having air conditioner and serviced regularly to offer a safe experience to passengers on every Chennai tour and outstation trip." },
  { title: "Expert Drivers",              desc: "Welcoming, on time, and dutiful — our drivers bring consistency, warmness, and know-how that make every trip feel easy, relaxing, and wholly timed." },
  { title: "Flexible Rentals",            desc: "Whether it's a city task or weekend escape, we become accustomed to your time, plans, and comforting needs, assuring total freedom all mile." },
  { title: "Pushback Seats for Comfort",  desc: "Proper pushback seats ensure passengers are comfortable even on long routes like Chennai to Bangalore or Chennai to Tirupati." },
  { title: "AC for Chennai Heat",         desc: "Powerful air conditioning is essential in Chennai's weather. All vehicles maintain comfortable temperatures throughout the journey." },
  { title: "Charging Points",             desc: "Charging points for phones available in most vehicles — keeps everyone connected during long sightseeing tours and outstation trips." },
  { title: "Doorstep Pickup & Drop",      desc: "We provide pickup and drop from anywhere — your home, hotel, railway station, or airport. Very convenient especially for families and large groups." },
  { title: "No Hidden Charges",           desc: "Clear pricing without confusion. Everything clearly communicated in advance so you can plan your Chennai trip without any confusion or last-minute surprises." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual)", "Parking charges (as per actual)", "Driver night allowance (if applicable)", "State entry tax (outstation, if applicable)", "Personal expenses of passengers"];

const FAQS = [
  { q: "What is the best tempo traveller in Chennai for group travel?",                a: "The best tempo traveller in Chennai depends on your group size and comfort needs. A 12 seater tempo traveller in Chennai is the most popular choice for families, while 16 or 20 seater options are ideal for larger groups." },
  { q: "How much is the price of tempo traveller in Chennai?",                         a: "The tempo traveller price in Chennai usually starts from ₹18–₹25 per km for outstation trips and ₹3000–₹6000 for local packages. The final cost depends on seating capacity, AC type, and trip duration." },
  { q: "Which is better: 12 seater or 17 seater tempo traveller in Chennai?",         a: "A 12 seater tempo traveller in Chennai is better for comfort and space, while a 17 seater tempo traveller in Chennai is more suitable for bigger groups looking for a budget-friendly option." },
  { q: "Can I book a tempo traveller in Chennai for outstation trips?",                a: "Yes, you can easily book a tempo traveller in Chennai for outstation trips to places like Pondicherry, Tirupati, and Bangalore. It is one of the best options for long-distance group travel." },
  { q: "Is luxury tempo traveller available in Chennai?",                              a: "Yes, you can book a luxury tempo traveller in Chennai with pushback seats, LED TV, charging points, and premium interiors for a more comfortable journey." },
  { q: "Is tempo traveller in Chennai good for airport transfer?",                     a: "Yes, booking a tempo traveller in Chennai for airport transfer is very convenient. It provides enough seating and luggage space, making it ideal for group pickup and drop." },
  { q: "How many seating options are available in Chennai tempo traveller?",           a: "There are multiple options available like 9 seater, 12 seater, 14 seater, 16 seater, 17 seater, and 20 seater tempo travellers in Chennai, suitable for all types of group sizes." },
  { q: "Can I hire a tempo traveller in Chennai for local sightseeing?",               a: "Yes, you can book a tempo traveller in Chennai for local sightseeing to explore beaches, temples, and tourist attractions comfortably with your group." },
  { q: "Is driver included with tempo traveller booking in Chennai?",                  a: "Yes, when you hire a tempo traveller in Chennai, a professional driver is always included for safe and smooth travel." },
  { q: "Why should I choose tempo traveller over cars in Chennai?",                    a: "Choosing a tempo traveller rental in Chennai is better because it allows your whole group to travel together, reduces cost per person, and offers more comfort compared to multiple cars." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-rameshwaram",         city: "Tempo Traveller in Rameshwaram", type: "Temple Tours & South India Circuit" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru", city: "Tempo Traveller in Bengaluru", type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mysore",              city: "Tempo Traveller in Mysore",    type: "Palace Tours & Dasara Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",              city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerChennai() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Chennai to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Chennai&apos;s Trusted Tempo Traveller — Marina Beach, Kapaleeshwarar Temple, Tirupati, Pondicherry & Bangalore</p>
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
          <span>Tempo Traveller in Chennai</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Chennai</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Marina Beach · Kapaleeshwarar Temple · Fort St. George · Tirupati · Pondicherry · Bangalore · Airport Transfer</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["12 to 20 Seater Available", "Luxury Options", "Fully Air Conditioned", "Transparent Pricing"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Chennai" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "Travelling Without Distress", sub: "We manage planning, coordination & assistance" }, { title: "Comfort You Get", sub: "Complete relaxation on every trip" }, { title: "Everlasting Trust", sub: "Reliable amenity from our experts" }, { title: "Available 24 Hours", sub: "Get service at any time" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Chennai</strong> for local sightseeing, airport transfers, corporate trips, Tirupati darshan, and outstation travel to Pondicherry, Bangalore, and Rameshwaram. <strong>12 to 20 seater — including 12 Seater Luxury Tempo Traveller with LED TV and charging points.</strong> Fully AC, clean, professional drivers. Transparent pricing. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Travellers in Chennai Offer Best Deals</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">We welcome you to our website and offer you services to make your trip interesting. You can roam around Chennai or go outstation. If you are longing for a trip and desire to go according to your plans — then certainly look for the best amenities. Our experts offer prime requirements fulfilled without any hindrance.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">We offer facilities to the people to go through vast amenities. We endeavour to offer best comforts by Tempo Travellers Chennai. Whether it is a leisure trip, big business trip, or any other — we offer varied facilities without any negligence. With PAN India bond, you can look for several trips with no problem.</p>
            <p className="text-base text-gray-700 leading-relaxed">As one of the best travels in Chennai, you can travel from this site to another place without a delay. While you plan for a trip by branded cars, vans and buses — your trip lasts forever. As Tempo Travellers in Chennai offer unique facilities to come across wide services.</p>
          </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Chennai</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

          {/* Why people like Tempo Travellers */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Why People Like to Go for Tempo Travellers in Chennai</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            {WHY_PEOPLE_CHOOSE.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] transition-colors">
                <h4 className="font-bold text-[#0f6ec8] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 2: Chennai Travel Car Rental ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Chennai Travel Car Rental Services</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Chennai Travellers Rental offers you outstanding amenities to the people. Being a leading car rental provider in Chennai, we in the city make the trip safe and secure without any hurdles. Our drivers are too experienced in their task. We provide budget-friendly cars such as Maruti, Toyota and many others.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">You can contact us directly by sending us messages or by calling us. Get Chennai to outstation and looking to hire a car for corporate proceedings or wedding? Thus experience smooth travelling, quietness and cool interiors that makes your trip comfortable. Hire a Tempo Traveller in Chennai offering great solution for your trip.</p>
          </div>
        </div>

        {/* ══ SECTION 3: How to Explore Chennai ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">How to Explore Chennai Comfortably with a Tempo Traveller</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Chennai is a large and lively city with many famous temples, beaches, markets, and cultural landmarks. Since the attractions are spread across different areas of the city, traveling from one place to another can take time, especially when you are visiting with family or a group. That&apos;s why many travelers prefer hiring a tempo traveller in Chennai for a comfortable and convenient sightseeing experience.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">A tempo traveller for Chennai sightseeing allows everyone in your group to travel together in one vehicle. Instead of booking several taxis or worrying about public transport, a tempo traveller keeps the whole group together and makes the journey more enjoyable. These vehicles are designed for group travel and usually come with comfortable pushback seats, air conditioning, good legroom, and space for luggage.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">With a tempo traveller, you can easily visit some of the most popular places in the city such as Marina Beach, the famous Kapaleeshwarar Temple, and the historic Fort St. George. Since you have your own vehicle, you can travel at your own pace, stop for photos, explore local food spots, and spend more time at places you like.</p>
            <p className="text-base text-gray-700 leading-relaxed">Whether you are planning a family holiday, a temple tour, or a group sightseeing trip, booking a tempo traveller rental in Chennai is one of the easiest ways to explore the city comfortably. It helps you enjoy the journey without worrying about transportation, so you can focus on discovering the beauty and culture of Chennai.</p>
          </div>
        </div>


        {/* ══ SECTION 4: Rental Services ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Travellers Rental Services in Chennai</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Search van for your trip. We at Chennai Tempo Travellers offer van with 30 seats availability. We feel proud to offer amenities. The customers get a pleasant experience by providing trip at competitive cost. We offer timely amenity, efficient fleet management, accurate billing and clear talks.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {RENTAL_SERVICES.map(item => (
              <div key={item.capacity} className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-[#0f6ec8] text-base mb-2">{item.capacity} Tempo Travellers in Chennai</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Discover Everything We Offer */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Discover Everything We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Dirt-Free, Comfy Cars",  desc: "Every car is dirt free, having air conditioner and serviced regularly to offer a safe experience to patrons." },
              { title: "Expert Drivers",          desc: "Welcoming, on time, and dutiful — our drivers bring consistency, warmness, and know-how that make every trip feel easy, relaxing, and wholly timed." },
              { title: "Flexible Rentals",        desc: "Whether it's a city task or weekend escape, we become accustomed to your time, plans, and soothing needs, assuring total freedom all mile." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] transition-colors">
                <h4 className="font-bold text-[#0f6ec8] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 5: 12 Seater Luxury ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">12 Seater Luxury Tempo Traveller in Chennai</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">12 seater luxury tempo traveller in Chennai is a really smart choice. It gives you enough space to travel together, relax on the way, and enjoy the journey just as much as the destination. Whether it&apos;s a short city ride or a long outstation trip, this vehicle is perfect for families, friends, or even office groups who don&apos;t want to split into multiple cars.</p>

            <h3 className="font-bold text-gray-900 text-sm mb-3">Why This Option Works So Well</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">One of the biggest problems during group travel is comfort. Some people feel tired, some don&apos;t get enough space, and the journey becomes stressful. That&apos;s exactly where a luxury 12 seater tempo traveller makes a difference. You get:</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["Enough space to sit comfortably", "A smooth ride even on long routes", "Everyone traveling together in one vehicle", "No confusion of managing multiple cars"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">●</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 text-sm mb-3">Comfort You Will Actually Feel</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">This is not a basic tempo traveller. The luxury version is designed for better travel experience, especially for long journeys. Inside the vehicle, you get:</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {LUXURY_12_FEATURES.map(feat => (
                <div key={feat} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-xs text-gray-700">{feat}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 text-sm mb-3">Seating That Makes a Difference</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">The 12 seater is popular because it offers the right balance between space and group size. In many luxury models, you may get 1×1 seating (more space, more comfort) or 2×1 seating (slightly compact but still comfortable). If your group prefers extra comfort, the 1×1 layout is always a better experience.</p>

            <h3 className="font-bold text-gray-900 text-sm mb-3">Perfect for Many Types of Trips</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">A 12 seater luxury tempo traveller is not limited to one type of travel. You can book it for:</p>
            <div className="grid grid-cols-2 gap-2">
              {["Family trips and vacations", "Temple visits like Tirupati or Rameshwaram", "Weekend trips from Chennai", "Corporate outings", "Wedding guest travel", "Airport pickup and drop"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">●</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing explanation */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-sm mb-2">Pricing in Chennai</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Prices can change depending on distance, time, and vehicle type, but here&apos;s a general idea:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {["Per km cost for outstation trips", "Fixed price for local packages (8–10 hours)", "Driver allowance charged per day"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0"></span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-700 mt-3 font-semibold">The total cost is usually reasonable when divided among 10–12 people, which makes it budget-friendly too.</p>
          </div>

          {/* Why 12 over bigger */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-2">Why Many People Prefer This Over Bigger Vehicles</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">You might think of booking a 14 or 17 seater, but a 12 seater often feels better because:</p>
            <div className="grid grid-cols-2 gap-2">
              {["Less crowd inside", "More personal space", "Better comfort on long journeys", "Easier movement inside the vehicle"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#0f6ec8] mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 6: Chennai Airport Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Book Tempo Traveller from Chennai Airport</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Booking a tempo traveller from Chennai Airport with Yatra Travel India is a simple and comfortable way to travel with your group. Whether you are arriving at or departing from Chennai International Airport, we provide reliable and affordable tempo traveller services for a smooth journey.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">When you land in a busy city like Chennai, the last thing you want is confusion around transport. Finding multiple taxis, managing luggage, and coordinating with everyone in your group can quickly become stressful. That&apos;s why choosing a tempo traveller is a much smarter option. It allows your entire group to travel together in one vehicle, making the experience easy and organized from the very beginning.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">One of the biggest advantages of booking a tempo traveller is the luggage space. Airport travel usually means extra bags, and fitting everything into small cars can be difficult. In a tempo traveller, you get enough room for both passengers and luggage, so no one feels uncomfortable during the journey.</p>
            <p className="text-base text-gray-700 leading-relaxed">Another benefit is doorstep service. We provide pickup and drop from anywhere — your home, hotel, railway station, or airport. Booking is also very easy through our website with no hidden charges, and everything is clearly communicated in advance.</p>
          </div>
        </div>

        {/* ══ SECTION 7: Tirupati Darshan ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Contact for Booking Tempo Traveller in Chennai — Tirupati Darshan Package</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Yatra Travels India provides you Tirupathi darshan ticket booking facility for the round-trip. We continue a professional approach, simplicity towards clients and fulfilling their dream of travelling Tirumala without any bother.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Our company offers a wide range of facilities including Chennai to Tirupathi particular Darshan Packages at a reasonable price. We offer unusual aid starting from the air travel point till you return home after a religious Darshan of Tirupathi. Our client-driven from Chennai to Tirupati Darshan Package includes Pick up and Drops at spots near to your region in Chennai.</p>
            <p className="text-base text-gray-700 leading-relaxed">Booking a voucher from Chennai - Tirupathi route is an easy way to book your ticket with Chennai schedule. Travellers can avail Tirupathi Darshan Ticket Booking facility from Chennai to Tirupathi utilizing our services. Just call us on our prescribed number; we will give you all information about Tirupathi Darshan ticket booking service. You can benefit a variety of payment modes like net banking, credit card, debit card and UPI method.</p>
          </div>
        </div>

        {/* Routes Table */}
        <ST border="border-green-500">Tempo Traveller Routes from Chennai</ST>
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

        {/* Sightseeing Places */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Popular Places to Visit in Chennai by Tempo Traveller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SIGHTSEEING_PLACES.map(place => (
              <div key={place.name} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{place.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
        

          {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Chennai — Full Comparison
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
              {CHENNAI_OPTIONS_TABLE.map((row, i) => (
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


        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Chennai</ST>
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
        <ST>Frequently Asked Questions — Tempo Traveller in Chennai</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Chennai Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Marina Beach, Kapaleeshwarar Temple, Tirupati darshan, Pondicherry, Bangalore — call us with your group size and travel date. Dial 9044019511 or visit www.yatratravelindia.com.</p>
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
