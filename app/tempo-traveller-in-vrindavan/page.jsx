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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan",
      "name": "Vrindavan Tempo Traveller on Rent | Yatra Travel India",
      "description": "Book a tempo traveller in Vrindavan for temple darshan, pilgrimage tours, and group travel. 9 to 20 seater AC vehicles with driver and transparent per km pricing.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
        "priceRange": "₹₹",
      },
      "areaServed": { "@type": "City", "name": "Vrindavan" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "22", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "950", "bestRating": "5", "worstRating": "1" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How can I book a tempo traveller in Vrindavan?", "acceptedAnswer": { "@type": "Answer", "text": "You can book online, call, or WhatsApp by sharing your travel date, route, and number of passengers." } },
        { "@type": "Question", "name": "Why choose Yatra Travel India for tempo traveller in Vrindavan?", "acceptedAnswer": { "@type": "Answer", "text": "We offer verified drivers, clean AC vehicles, transparent pricing, and reliable service for pilgrimage and group travel." } },
        { "@type": "Question", "name": "Is tempo traveller available for outstation trips from Vrindavan?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, bookings are available for Mathura, Agra, Delhi, Jaipur, and Haridwar routes." } },
        { "@type": "Question", "name": "Do you provide one way and airport transfers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, one way bookings and airport or railway transfers are available." } },
        { "@type": "Question", "name": "What seating options are available?", "acceptedAnswer": { "@type": "Answer", "text": "We provide 9, 12, 16, 17, and 20 seater tempo travellers along with luxury and mini bus options." } },
        { "@type": "Question", "name": "What is the cost of tempo traveller in Vrindavan?", "acceptedAnswer": { "@type": "Answer", "text": "Pricing starts from Rs 20 to Rs 25 per km depending on vehicle type and trip details." } },
        { "@type": "Question", "name": "Are drivers experienced and verified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all drivers are professional, verified, and experienced." } },
        { "@type": "Question", "name": "Can I book for weddings and corporate trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, vehicles are available for weddings, corporate travel, and group events." } },
        { "@type": "Question", "name": "How early should I book a tempo traveller?", "acceptedAnswer": { "@type": "Answer", "text": "Booking 3 to 5 days in advance is recommended during peak seasons." } },
        { "@type": "Question", "name": "Can I customize my travel route and stops?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, trips can be customized with flexible routes and stopovers." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",   title: "9 Seater Tempo Traveller in Vrindavan",   img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Family Darshan", "Small Groups", "Banke Bihari Tour"] },
  { badge: "12 Seater",  title: "12 Seater Tempo Traveller in Vrindavan",  img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23–25/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pilgrimage Tours", "Group Darshan", "Mathura Trip"] },
  { badge: "16 Seater",  title: "Urbania 16 Seater Tempo Traveller in Vrindavan", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹26–28/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Reclining Seats, Multi-Zone AC" }], tags: ["Urbania", "Medium Groups", "Corporate Tours", "ISKCON Visit"] },
  { badge: "20 Seater",  title: "20 Seater Tempo Traveller in Vrindavan",  img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹30/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment System" }], tags: ["Full AC", "Large Groups", "Bhajan Mandali", "Pilgrimage Circuit"] },
  { badge: "Maharaja",   title: "Maharaja 12 Seater Tempo Traveller Vrindavan", img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Seats", value: "Reclining Sofa Seats" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "Premium AC, LED Screens, Charging Points" }], tags: ["VIP Devotees", "Sofa Seats", "LED Screens", "Premium Darshan"] },
  { badge: "Luxury",     title: "Luxury Tempo Traveller in Vrindavan",     img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "AC", value: "Powerful Multi-Zone" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "Music, LED Screens on Request, Spacious" }], tags: ["Premium AC", "Reclining Seats", "Wedding Groups", "VIP Travel"] },
];

const VRINDAVAN_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Vrindavan",      capacity: "9 + Driver",     ac: "AC",          ideal: "Small family darshan — Banke Bihari Ji, ISKCON Vrindavan, Prem Mandir, and Mathura Krishna Janmabhoomi" },
  { vehicle: "12 Seater Tempo Traveller in Vrindavan",     capacity: "12 + Driver",    ac: "AC",          ideal: "Pilgrim groups, bhajan mandali — full Braj circuit, Govardhan Parikrama, Barsana Holi, and outstation to Agra and Delhi" },
  { vehicle: "Urbania 16 Seater in Vrindavan",             capacity: "16 + Driver",    ac: "AC",          ideal: "Medium corporate and pilgrimage groups — comfortable travel across Mathura, Vrindavan, and major North India routes" },
  { vehicle: "20 Seater Tempo Traveller in Vrindavan",     capacity: "20 + Driver",    ac: "AC",          ideal: "Large bhajan mandali groups, Janmashtami pilgrimage tours, Radhashtami events — everyone together in one vehicle" },
  { vehicle: "Maharaja 12 Seater in Vrindavan",            capacity: "12 + Driver",    ac: "Premium AC",  ideal: "VIP devotees, premium darshan tours — reclining sofa seats, individual LCD screens, premium interiors" },
  { vehicle: "Luxury Tempo Traveller in Vrindavan",        capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "Wedding groups, corporate VIP travel, Vrindavan to Delhi or Agra long drives — reclining seats, charging points" },
];

const PRICE_TABLE = [
  { vehicle: "9 Seater",                    fare: "₹22/km" },
  { vehicle: "12 Seater Tempo Traveller",   fare: "₹23–₹25/km" },
  { vehicle: "16 Seater (Urbania)",         fare: "₹26–₹28/km" },
  { vehicle: "20 Seater",                   fare: "₹30/km" },
];

const OUTSTATION_ROUTES = [
  { route: "Vrindavan to Mathura",           dist: "~12 km",   desc: "Krishna Janmabhoomi & temple visits. Perfect for short pilgrimages, family trips, and group sightseeing. Smooth, safe, and comfortable ride for all passengers." },
  { route: "Vrindavan to Agra",              dist: "~70 km",   desc: "Taj Mahal & sightseeing tours. Ideal for heritage tours, weekend getaways, and sightseeing. Book your tempo traveller hire in Vrindavan for a convenient and enjoyable trip to Agra." },
  { route: "Vrindavan to Delhi",             dist: "~160 km",  desc: "Airport, corporate & family travel. Popular for corporate travel, long-distance family trips, and weekend excursions. Spacious seating, AC comfort, and premium amenities." },
  { route: "Vrindavan to Jaipur",            dist: "~270 km",  desc: "Heritage & weekend tours. Perfect for long-distance journeys, group tours, and heritage trips. Choose from our luxury tempo traveller fleet for a safe and relaxing ride." },
  { route: "Vrindavan to Lucknow",           dist: "~380 km",  desc: "Outstation family travel, corporate tours, and group excursions. Our tempo traveller from Vrindavan to Lucknow ensures on-time, hassle-free travel." },
  { route: "Vrindavan to Haridwar / Rishikesh", dist: "~230 km", desc: "Best for spiritual journeys, pilgrimages, and group travel. Our tempo traveller from Vrindavan to Haridwar guarantees a comfortable, fully AC ride with experienced drivers." },
  { route: "Airport / Railway Transfers",    dist: "As per route", desc: "Quick, reliable, and convenient transfers to nearby airports and railway stations. Perfect for VIP guests, families, and corporate travelers." },
];

const USE_TAGS = [
  "Banke Bihari Ji Darshan", "ISKCON Vrindavan", "Prem Mandir Visit", "Mathura Temple Tour",
  "Govardhan Parikrama", "Barsana Holi Tour", "Nandgaon Visit", "Wedding Guest Transfers",
  "Vrindavan to Agra", "Vrindavan to Delhi", "Corporate Group Travel", "Bhajan Mandali Groups",
  "Family Pilgrimage Trip", "VIP Devotee Tours",
];

const WHY_CHOOSE = [
  { num: "1", title: "Expertise in Tempo Traveller Services",  desc: "We specialize in tempo traveller rent in Vrindavan for families, corporate groups, weddings, and tourists alike." },
  { num: "2", title: "Comfort, Safety & Affordability Guaranteed", desc: "Looking for a tempo traveller in Vrindavan that ensures comfort, safety, and budget-friendly travel? Yatra Travel India is your trusted choice for tempo traveller hire in Vrindavan, tempo traveller rent in Vrindavan, and hassle-free tempo traveller booking Vrindavan." },
  { num: "3", title: "Wide Range of Vehicles",                  desc: "From 9, 12, 15, 17, and 20-seater AC tempo travellers to premium luxury tempo traveller Vrindavan and 12-seater tempo traveller Vrindavan, we have the perfect vehicle for every journey — whether it's a family outing, corporate tour, wedding, or group excursion." },
  { num: "4", title: "Reliable Outstation Service",             desc: "Planning a long-distance trip? Our tempo traveller for outstation Vrindavan service covers popular routes like Vrindavan to Mathura, Vrindavan to Agra, Vrindavan to Delhi, and Vrindavan to Lucknow, ensuring safe, comfortable, and punctual travel." },
  { num: "5", title: "Transparent Pricing",                     desc: "We provide clear and competitive tempo traveller price Vrindavan with no hidden charges. Our 12-seater tempo traveller fare in Vrindavan and other rates are shared upfront, making it easy for you to plan your budget." },
  { num: "6", title: "Easy Booking & Instant Support",          desc: "Booking a tempo traveller in Vrindavan is simple through our online portal, call, or WhatsApp. Our friendly support team is available 24×7 to assist you and answer all your queries, ensuring a seamless travel experience." },
  { num: "7", title: "Customer Satisfaction Guaranteed",        desc: "We prioritize your comfort, safety, and convenience. From well-maintained AC tempo travellers to punctual pickups and responsive customer support, we go the extra mile to make your journey memorable." },
];

const FEATURES = [
  { title: "Clean AC Vehicles for Darshan",  desc: "All tempo travellers are fully air-conditioned — keeps devotees comfortable during hot Mathura–Vrindavan summers and humid months on pilgrimage circuits." },
  { title: "Pushback & Reclining Seats",     desc: "Soft and wide pushback seats with reclining options — perfect for long-distance spiritual journeys like Vrindavan to Haridwar or Vrindavan to Lucknow." },
  { title: "LED Screens & Music System",     desc: "LED screens and music system available on request — keeps the group engaged on longer outstation drives with kirtan or devotional music." },
  { title: "Spacious with Large Luggage Space", desc: "Ample space for devotional items, prasad, bags, and gifts — ideal for bhajan mandali groups, family pilgrimages, and multi-day spiritual tours." },
  { title: "Verified Professional Drivers",  desc: "All drivers are professional, verified, and experienced. They know Vrindavan and nearby routes like Mathura, Agra, and Delhi well — ensuring safe and stress-free travel." },
  { title: "On-Time Pickups Always",         desc: "Courteous drivers with on-time pickups for temple darshan, early morning Banke Bihari visits, and outstation departures. No waiting, no delays." },
  { title: "24×7 Support & Assistance",      desc: "Our dedicated team is always ready to answer queries, handle last-minute changes, and give you complete peace of mind throughout your journey." },
  { title: "Flexible Booking Options",       desc: "Hourly, daily, and multi-day rental packages available. Customizable routes and stopovers for pilgrimage groups, wedding functions, and corporate tours." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual)", "Parking charges (as per actual)", "Driver night allowance (₹500, if applicable)", "State entry tax (outstation, if applicable)", "Personal expenses of passengers"];

const FAQS = [
  { q: "How can I book a tempo traveller in Vrindavan?",                       a: "Booking a tempo traveller in Vrindavan is fast and simple. You can book online, call, or WhatsApp us. Share your pickup location, destination, travel date, and number of passengers. We'll provide an instant quote for tempo traveller hire in Vrindavan and tempo traveller booking Vrindavan." },
  { q: "Why should I choose Yatra Travel India for tempo traveller rentals in Vrindavan?", a: "We guarantee a safe, comfortable, and hassle-free journey. Our fleet includes 12-seater tempo traveller Vrindavan, luxury tempo traveller Vrindavan, Urbania 16-seaters, Maharaja 12-seaters, mini buses, and Volvo buses. Verified drivers, transparent tempo traveller price Vrindavan, and 24×7 support ensure peace of mind." },
  { q: "Can I hire a tempo traveller from Vrindavan for outstation trips?",    a: "Absolutely. Our tempo traveller for outstation Vrindavan service covers popular destinations like Mathura, Agra, Delhi, Jaipur, and Haridwar. Enjoy comfortable AC rides with spacious seating, perfect for families, corporate tours, or religious trips." },
  { q: "Do you provide one-way bookings and airport/railway transfers?",       a: "Yes. We offer flexible one-way and round-trip bookings in Vrindavan, including airport and railway station pickups. Our drivers ensure punctual, safe journeys for families, VIP guests, and corporate travelers." },
  { q: "What seating options are available for tempo travellers in Vrindavan?", a: "We have vehicles for every group size: 9 Seater, 12 Seater, 15/16/17/20 Seater Tempo Travellers, Luxury 12 Seater and Maharaja 12 Seater for VIP comfort, Mini buses (25–35 seater) and Volvo buses (45+ seater)." },
  { q: "How much does it cost to rent a tempo traveller in Vrindavan?",        a: "Our tempo traveller price Vrindavan is transparent and affordable. Fares start from Rs 20 to Rs 25 per km for a 12-seater, depending on vehicle type, route, and trip duration. Fuel, tolls, and driver allowances are included — no hidden charges." },
  { q: "Are drivers experienced and trustworthy?",                             a: "Yes. All drivers are professional, verified, and highly experienced. They know Vrindavan and nearby routes like Mathura, Agra, and Delhi well, ensuring your tempo traveller for outstation Vrindavan or local trip is safe and stress-free." },
  { q: "Can I book a tempo traveller for weddings, events, or corporate trips in Vrindavan?", a: "Absolutely. We specialize in tempo traveller hire in Vrindavan for weddings, office outings, and group tours. We ensure the perfect vehicle, seating arrangement, and amenities for your special occasions." },
  { q: "How early should I book a tempo traveller in Vrindavan?",              a: "To secure availability, especially during weekends, festivals, and peak seasons, book your tempo traveller booking Vrindavan at least 3 to 5 days in advance." },
  { q: "Can I customize my trip or stopovers?",                                a: "Yes. Our flexible booking allows you to plan your own routes, stopovers, and schedule. Whether it's a family outing, corporate trip, wedding, or pilgrimage, our tempo traveller in Vrindavan service is fully customizable to your needs." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mathura",        city: "Tempo Traveller in Mathura",   type: "Pilgrimage, Janmashtami & Holi Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra", city: "Tempo Traveller in Agra", type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi", city: "Tempo Traveller in Delhi", type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",         city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",        city: "Tempo Traveller in Somnath",   type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai", city: "Tempo Traveller in Mumbai", type: "Weddings, VIP Travel & Outstation" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerVrindavan() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Vrindavan to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Vrindavan&apos;s Trusted Tempo Traveller — Banke Bihari Darshan, ISKCON, Mathura, Agra & Delhi</p>
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
          <span>Tempo Traveller in Vrindavan</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Vrindavan</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Banke Bihari Darshan · ISKCON Vrindavan · Prem Mandir · Mathura · Agra · Delhi · Haridwar</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Maharaja & Luxury Options", "Fully Air Conditioned", "Transparent Pricing · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Vrindavan" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "On-Time Pickups", sub: "Courteous drivers for early darshan" }, { title: "Clean AC Vehicles", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" }, { title: "Verified Drivers", sub: "Know Vrindavan & all major highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Vrindavan</strong> for Banke Bihari Ji darshan, ISKCON visits, Mathura–Vrindavan pilgrimage tours, weddings, corporate travel, and outstation trips to Agra, Delhi, Jaipur, and Haridwar. <strong>9 seater to 20 seater — including Maharaja and Luxury Tempo Traveller for VIP devotees.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Vrindavan | Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Vrindavan is a deeply spiritual destination, welcoming pilgrims and tourists seeking divine experiences and temple darshan. Whether you are planning a Banke Bihari Ji darshan, a Mathura–Vrindavan religious tour, or an outstation journey to Agra, Govardhan, or Barsana, our luxury tempo travellers in Vrindavan ensure calm, comfortable, and well-coordinated travel for groups and families.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Yatra Travel India offers the best tempo traveller hire in Vrindavan for temple visits, local sightseeing, outstation trips, weddings, corporate travel, and pilgrimage tours. Whether you&apos;re planning Banke Bihari Ji darshan, ISKCON Vrindavan visit, or a family spiritual journey, our luxury tempo traveller in Vrindavan ensures a peaceful, safe, and comfortable travel experience.</p>
            <p className="text-base text-gray-700 leading-relaxed">With a modern fleet of 9, 12, 16, and 20 seater tempo travellers, we cater to families, bhajan mandali groups, tour operators, and devotees. All vehicles are fully air-conditioned, spacious, and driven by professional drivers familiar with Vrindavan, Mathura, Agra, and major North Indian highways.</p>
          </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Vrindavan</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

          {/* Affordable Hire Section */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Affordable Tempo Traveller Hire in Vrindavan</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Yatra Travel India is trusted for providing affordable tempo traveller hire in Vrindavan with transparent pricing and dependable service. Our fares start from <strong>₹22/km</strong>, with no hidden charges. Toll, parking, and driver allowances are clearly informed in advance.</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Choose from our tempo traveller options:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {[
                "9-seater tempo traveller – Ideal for small family darshan trips",
                "12 seater tempo traveller in Vrindavan – Perfect for pilgrimages and group tours",
                "Urbania 16-seater tempo traveller – Comfortable for medium-sized groups",
                "Maharaja 12-seater tempo traveller – Premium option for VIP devotees",
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5 text-xs font-bold">●</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-orange-700 font-semibold">Each vehicle offers clean interiors, pushback seats, smooth suspension, LED lighting, and ample luggage space for long spiritual journeys.</p>
          </div>
        </div>

{/* Comparison Table */}
<h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
  Tempo Traveller Options in Vrindavan — Full Comparison
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
      {VRINDAVAN_OPTIONS_TABLE.map((row, i) => (
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


        {/* ══ SECTION 2: Best 12 & 16 Seater ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Best 12 Seater & 16 Seater Tempo Traveller in Vrindavan</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-base text-gray-600 leading-relaxed mb-4">If you are searching for the best 12 seater tempo traveller in Vrindavan, Yatra Travel India is your trusted travel partner. Our luxury tempo traveller hire in Vrindavan includes Maharaja, Urbania, and premium AC models — ideal for temple darshan, family trips, wedding guests, and corporate tours.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Vehicle features include:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {["Pushback & reclining seats", "Powerful air-conditioning", "Music system & LED screens (on request)", "Spacious interiors with large luggage space", "Professional, verified drivers"].map(feat => (
                <div key={feat} className="flex items-start gap-2">
                  <span className="text-[#0f6ec8] mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-xs text-gray-700">{feat}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Whether it&apos;s local temple hopping or long-distance travel, we guarantee a calm and comfortable journey.</p>
          </div>
        </div>

        {/* ══ SECTION 3: Price Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Transparent Tempo Traveller Price in Vrindavan</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Our tempo traveller price in Vrindavan is clear, fair, and affordable. Charges depend on vehicle type, trip distance, and duration — with no last-minute surprises.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[350px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle Type", "Rate Per KM"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {PRICE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">Toll, parking, and driver allowance are shared upfront. We also offer <strong>customized pilgrimage tour packages</strong> for families, temple groups, and travel agents.</p>
          </div>
        </div>

        {/* ══ SECTION 4: Outstation Routes ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Popular Tempo Traveller Routes from Vrindavan</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Travel comfortably, safely, and hassle-free with Yatra Travel India on these popular tempo traveller routes from Vrindavan. Whether it’s a family outing, corporate trip, wedding, or pilgrimage, we provide reliable, spacious, and fully AC tempo travellers in Vrindavan for a stress-free journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {OUTSTATION_ROUTES.map(r => (
              <div key={r.route} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#0f6ec8] text-sm">{r.route}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{r.dist}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-bold text-gray-900 text-sm mb-2">Why Customers Love These Routes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Fully AC, spacious, and comfortable tempo travellers", "Experienced and verified drivers for safe travel", "Hassle-free booking with instant quotes via call or WhatsApp", "Transparent and affordable pricing with no hidden charges", "Perfect for families, groups, weddings, corporate tours, and pilgrims"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0 mt-1.5"></span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ SECTION 5: Temple Darshan & Weddings ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Tempo Traveller for Temple Darshan, Weddings & Events</h2>
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Need a tempo traveller for Banke Bihari Ji darshan or group transport for weddings and religious events in Vrindavan? We specialize in pilgrimage and group transportation, offering calm, punctual, and comfortable travel for devotees of all age groups.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Why devotees choose us:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {["Clean AC vehicles for spiritual journeys", "On-time pickups with courteous drivers", "Flexible hourly, daily, and multi-day rental packages", "Easy coordination for multiple tempo travellers"].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-blue-700 font-semibold">Our luxury tempo traveller in Vrindavan ensures a peaceful and memorable darshan experience.</p>
          </div>
        </div>

        {/* ══ SECTION 6: Book Today ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Book Your Tempo Traveller in Vrindavan Today</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Travel with Yatra Travel India for a smooth, spiritual, and comfortable journey. Whether it&apos;s Banke Bihari Ji darshan, ISKCON Vrindavan visit, a wedding function, or an outstation tour, we make your trip stress-free and memorable.</p>
            <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
              <p className="text-white text-sm font-semibold">Call / WhatsApp now on 9044019511 for instant booking & best price</p>
            </div>
          </div>
        </div>

        {/* ══ SECTION 7: Why Choose Yatra Travel India ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Why Choose Yatra Travel India for Your Tempo Traveller in Vrindavan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {WHY_CHOOSE.map(item => (
              <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0f6ec8] rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">{item.num}</span></div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Perfect Vehicle, Professional Drivers, Ultimate Comfort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Perfect Vehicle for Every Trip",      desc: "Whether you need a 12-seater tempo traveller Vrindavan, a luxury tempo traveller Vrindavan, or a larger 17, 20, or 45+ seater Volvo bus, we have the ideal vehicle for every occasion — from family trips and group tours to corporate travel and VIP transfers." },
              { title: "Professional & Verified Drivers",     desc: "Travel with experienced, friendly, and trustworthy drivers who know Vrindavan and major highway routes inside out. Whether it's a tempo traveller for outstation Vrindavan or a local sightseeing tour, our drivers ensure a safe, smooth, and punctual journey every time." },
              { title: "Ultimate Comfort & Luxury",           desc: "All our vehicles are fully air-conditioned with spacious interiors, reclining seats, and premium features. Enjoy long-distance travel — Vrindavan to Mathura, Vrindavan to Agra, or Vrindavan to Delhi — in complete comfort and style." },
              { title: "Flexible and Easy Booking",           desc: "Whether it’s an outstation adventure, local sightseeing, airport pickup, or tempo traveller booking Vrindavan, we provide instant quotes and easy booking via call or WhatsApp, saving you time and effort." },
              { title: "Trusted by Hundreds of Happy Customers",           desc: "With a proven track record of safe, punctual, and reliable service, we are the go-to choice for families, corporates, wedding groups, and large tours in Vrindavan." },
              { title: "24×7 Support & Assistance",           desc: "Our dedicated team is always ready to answer queries, provide assistance, or handle last-minute changes, giving you complete peace of mind throughout your journey." },
            ].map(item => (
              <div key={item.title} className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-bold text-orange-800 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Vrindavan</ST>
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

        {/* Peak Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Peak Season Booking:</strong> Vrindavan receives its highest footfall during <strong>Janmashtami, Holi, Radhashtami, and Kartik month.</strong> Book your tempo traveller at least <strong>3 to 5 days in advance</strong> during normal season. During <strong>Janmashtami and Holi</strong>, book <strong>4 to 6 weeks ahead</strong> to secure your preferred vehicle.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Vrindavan</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Vrindavan Spiritual Journey Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Banke Bihari darshan, ISKCON, Mathura tour, Agra trip, Haridwar — call us with your group size and travel date. We make your journey stress-free and memorable. Dial 9044019511.</p>
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
