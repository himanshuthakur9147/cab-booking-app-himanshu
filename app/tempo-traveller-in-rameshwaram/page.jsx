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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-rameshwaram#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-rameshwaram",
      "name": "Tempo Traveller in Rameshwaram | Yatra Travel India",
      "description": "Book AC tempo traveller in Rameshwaram for temple tours, group travel, sightseeing, and outstation trips with professional drivers and comfortable vehicles.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
      },
      "areaServed": { "@type": "City", "name": "Rameshwaram" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "23", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-rameshwaram" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-rameshwaram#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How can I book a tempo traveller in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "You can book a tempo traveller in Rameshwaram by calling 9044019511 or visiting the Yatra Travel India website and sharing your travel details." } },
        { "@type": "Question", "name": "Which tempo traveller options are available in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo travellers in Rameshwaram are available in 9, 12, 16, 20, and 24 seater options including luxury variants." } },
        { "@type": "Question", "name": "Is tempo traveller good for temple tour in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are ideal for temple tours as they provide comfort, space, and allow group travel together." } },
        { "@type": "Question", "name": "Can I book tempo traveller for Rameshwaram sightseeing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book for full-day sightseeing to visit Ramanathaswamy Temple, Dhanushkodi Beach, Pamban Bridge, and other attractions." } },
        { "@type": "Question", "name": "Is airport pickup available with tempo traveller in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for airport pickup and drop services from nearby airports like Madurai." } },
        { "@type": "Question", "name": "What facilities are available in tempo traveller in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Vehicles include AC, pushback seats, music system, charging points, and sufficient luggage space." } },
        { "@type": "Question", "name": "Can I hire tempo traveller for outstation trips from Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book for outstation trips to destinations like Madurai, Kanyakumari, and other South India locations." } },
        { "@type": "Question", "name": "What is the price of tempo traveller in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "The starting price for tempo traveller in Rameshwaram is around Rs 23 per km depending on vehicle type and trip details." } },
        { "@type": "Question", "name": "Is tempo traveller suitable for family trips?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is perfect for family trips as it allows everyone to travel together comfortably with enough space." } },
        { "@type": "Question", "name": "Why choose Yatra Travel India in Rameshwaram?", "acceptedAnswer": { "@type": "Answer", "text": "Yatra Travel India provides reliable service, clean vehicles, experienced drivers, and affordable pricing for group travel." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Rameshwaram",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Temple Tours", "Small Groups", "Ramanathaswamy"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Rameshwaram", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Charging Points" }], tags: ["Full AC", "Most Popular", "Family Darshan", "Madurai Trip"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Rameshwaram", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Group Tours", "Kanyakumari", "College Trips"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Rameshwaram", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Full AC", "Large Pilgrim Groups", "Multi-Day Tours", "South India Circuit"] },
  { badge: "24 Seater", title: "24 Seater Tempo Traveller in Rameshwaram", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "24 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Luggage Space" }], tags: ["Full AC", "Large Groups", "Religious Tours", "School Excursions"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Rameshwaram",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "AC", value: "Multi-Zone" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "Reclining Seats, LCD, Charging Points" }], tags: ["Premium AC", "VIP Pilgrimage", "Senior Citizens", "Premium Tours"] },
];

const ATTRACTIONS = [
  { name: "Ramanathaswamy Temple",        desc: "The most famous landmark in Rameshwaram and one of the twelve sacred Jyotirlinga temples dedicated to Lord Shiva. Known for its magnificent corridors, beautiful pillars, and peaceful spiritual environment. Pilgrims take a holy bath in the temple's 22 sacred wells before offering prayers." },
  { name: "Dhanushkodi Beach",            desc: "A quiet and scenic place located about 20 km from Rameshwaram. Famous for its untouched beach and the remains of an old town destroyed in a cyclone. Visitors love coming here to enjoy the sea views and peaceful surroundings." },
  { name: "Pamban Bridge",                desc: "One of the most iconic attractions near Rameshwaram. It connects the island to mainland India and offers breathtaking views of the sea. Watching trains cross this historic bridge is a unique experience for travelers." },
  { name: "Dr. A.P.J. Abdul Kalam Memorial", desc: "Dedicated to India's former President Dr. A.P.J. Abdul Kalam, who was born in Rameshwaram. Displays photographs, achievements, and stories from his life — an inspiring place to visit." },
  { name: "Agni Theertham",               desc: "Located near Ramanathaswamy Temple. A sacred beach where devotees take a ritual bath before entering the temple. The calm sea and spiritual atmosphere make it a very special place for pilgrims." },
  { name: "Gandhamadhana Parvatham",      desc: "The highest point in Rameshwaram offering a panoramic view of the entire island. According to belief, it also has the footprints of Lord Rama, which attracts many devotees." },
  { name: "Hanuman Temple",               desc: "A revered temple dedicated to Lord Hanuman. An important stop on the Rameshwaram pilgrimage circuit with deep mythological significance from the Ramayana." },
  { name: "Adam's Bridge & Ram Setu View Point", desc: "The legendary chain of limestone shoals connecting Rameshwaram to Sri Lanka. A significant landmark for pilgrims and tourists with strong religious and historical importance." },
];

const WHY_TEMPO = [
  { title: "Space and Comfort for Everyone",    desc: "Instead of booking two or three cars, the whole group can travel together in one vehicle. Tempo travellers have comfortable pushback seats, good legroom, air conditioning, and enough space for bags — making long road journeys much more relaxed." },
  { title: "Flexible Travel for Pilgrims",      desc: "Pilgrims often spend time at temples for darshan and rituals. With your own vehicle, you can stop anywhere and travel at your own pace. This is very helpful when visiting the famous Ramanathaswamy Temple and its 22 sacred wells." },
  { title: "Budget-Friendly for Groups",        desc: "When the travel cost is shared among many passengers, it becomes cheaper than hiring several taxis. That is why it is popular for family tours, pilgrimage groups, and temple visits across Rameshwaram." },
  { title: "Safety and Convenience",            desc: "Most tempo traveller services provide experienced drivers who know the Rameshwaram routes well. Vehicles are maintained properly so passengers can enjoy a smooth and safe journey." },
  { title: "Flexible Stops on Your Schedule",   desc: "You can spend more time at temples, stop for photos at scenic locations, and explore the peaceful beaches without worrying about transportation — all at your own pace." },
  { title: "Easy for Children and Elderly",     desc: "The comfortable mode of travel ensures easy access for children and elderly passengers. Back seat offers fine rest while you get relaxation. Large windows and sliding curtains make views possible during the journey." },
];

const SERVICES_PROVIDED = [
  { title: "Various Types of Vehicles",    desc: "We offer solutions as per your desires and provide unique vehicles for travelling. The travel supports you with diverse cars, vans and many more — from 9 seater to 24 seater." },
  { title: "24/7 Support",                 desc: "Get good opportunity as the services are available and you get hassle-free service. Contact at anytime without any hamper and get the best service for your trip." },
  { title: "Nominal Pricing",              desc: "You get vehicles at nominal price and this makes people satisfied. You can easily afford this service and make your trip extraordinary without a fuss." },
  { title: "Well-Maintained Fleet",        desc: "You get well-maintained task force and comfortable services make you glad. Every vehicle is checked and cleaned before each trip." },
  { title: "Tempos for Group Travel",      desc: "Good for group travel having extra space — 9 to 24 seater options available for all types of pilgrim groups, families, and tour parties." },
  { title: "Mini Buses Available",         desc: "Ideal for small groups or families for an outing. Mini buses available for larger groups alongside tempo traveller options." },
];

const RAMESWARAM_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Rameshwaram",   capacity: "9 + Driver",     ac: "AC",          ideal: "Small families — Ramanathaswamy Temple, Agni Theertham, Dhanushkodi Beach, and Pamban Bridge in one comfortable day" },
  { vehicle: "12 Seater Tempo Traveller in Rameshwaram",  capacity: "12 + Driver",    ac: "AC",          ideal: "Pilgrim groups — full-day temple circuit with Ramanathaswamy, Gandhamadhana Parvatham, Hanuman Temple, and APJ Kalam Memorial" },
  { vehicle: "16 Seater Tempo Traveller in Rameshwaram",  capacity: "16 + Driver",    ac: "AC",          ideal: "Medium pilgrimage groups, college trips — multi-day South India tours covering Rameshwaram, Madurai, and Kanyakumari" },
  { vehicle: "20 Seater Tempo Traveller in Rameshwaram",  capacity: "20 + Driver",    ac: "AC",          ideal: "Large pilgrim groups, school excursions — full South India circuit with flexible stops at every sacred site" },
  { vehicle: "24 Seater Tempo Traveller in Rameshwaram",  capacity: "21–24 + Driver", ac: "AC",          ideal: "Very large pilgrimage groups, community tours — airport transfers from Madurai and multi-day South India packages" },
  { vehicle: "Luxury Tempo Traveller in Rameshwaram",     capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "VIP pilgrimage groups, senior devotees, premium tours — reclining seats, charging points, smooth suspension on long routes" },
];

const USE_TAGS = [
  "Ramanathaswamy Temple Darshan", "Dhanushkodi Beach", "Pamban Bridge", "Agni Theertham",
  "Gandhamadhana Parvatham", "APJ Abdul Kalam Memorial", "Adam's Bridge View", "Hanuman Temple",
  "Rameshwaram to Madurai", "Rameshwaram to Kanyakumari", "Family Pilgrimage Trip",
  "Airport Transfer Madurai", "College Excursion Tour", "Full-Day Sightseeing Package",
];

const FEATURES = [
  { title: "Comfortable Pushback Seats",  desc: "Tempo travellers come with comfortable pushback seats that offer good legroom. Back seat offers fine nap while you get relaxation between temple stops." },
  { title: "Fully Air-Conditioned",       desc: "AC is essential in Rameshwaram's coastal humidity. All vehicles are fully air-conditioned, keeping pilgrims and tourists comfortable throughout the day." },
  { title: "Large Windows & Curtains",    desc: "Large windows and sliding curtains make your view possible throughout the journey — enjoy the scenic coastal beauty of Rameshwaram from inside the vehicle." },
  { title: "Music System",                desc: "Enjoy with your group a high-quality music system during the journey — perfect for devotional music during pilgrimage circuits." },
  { title: "Charging Points",             desc: "Charging points available in most vehicles so passengers can keep phones charged throughout long temple visits and sightseeing tours." },
  { title: "Large Luggage Space",         desc: "Ample space for pilgrimage bags, offerings, and personal luggage — ideal for multi-day pilgrim groups and families visiting from other states." },
  { title: "Experienced Local Drivers",   desc: "Drivers know Rameshwaram temple routes, Dhanushkodi beach roads, and all major South India outstation highways for safe and smooth travel." },
  { title: "Flexible Stops",              desc: "Enjoy flexible stops while you travel. You can spend more time at temples, stop for photos at scenic locations, and explore beaches at your own pace." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual)", "Parking charges (as per actual)", "Driver night allowance (₹500, if applicable)", "State entry tax (if applicable)", "Personal expenses of passengers"];

const FAQS = [
  { q: "How can I book a tempo traveller in Rameshwaram for group travel?",                     a: "You can easily book a tempo traveller in Rameshwaram by visiting www.yatratravelindia.com or calling 9044019511. Just choose your travel date, group size, and trip details to confirm your booking quickly." },
  { q: "Which tempo traveller options are available in Rameshwaram?",                           a: "Most travel companies offer different vehicle options such as 9, 12, 16, 20, and 24 seater tempo travellers in Rameshwaram. Some operators also provide luxury tempo travellers with better seating and extra comfort for long journeys." },
  { q: "Is a tempo traveller good for Rameshwaram family trips?",                               a: "Yes, hiring a tempo traveller on rent in Rameshwaram is perfect for family trips because everyone can travel together in one spacious vehicle with comfortable seats and enough luggage space." },
  { q: "Can I book a tempo traveller in Rameshwaram for airport pickup?",                       a: "Yes, many operators provide tempo traveller rental in Rameshwaram for airport transfers, especially from nearby airports like Madurai Airport, making group travel convenient." },
  { q: "What facilities are available in a tempo traveller in Rameshwaram?",                    a: "Most tempo travellers in Rameshwaram come with air conditioning, comfortable pushback seats, music system, charging points, and large luggage space to make group travel easy and relaxing." },
  { q: "Can tempo travellers be used for multi-day tours from Rameshwaram?",                    a: "Yes, you can hire a tempo traveller rental in Rameshwaram for multi-day tours to nearby destinations like Madurai or Kanyakumari, making it ideal for extended South India travel." },
  { q: "When is the best time to visit Rameshwaram for sightseeing?",                           a: "The best time to visit Rameshwaram is between October and March, when the weather is pleasant and suitable for temple visits and local sightseeing tours." },
  { q: "Is a tempo traveller comfortable for long-distance travel to Rameshwaram?",             a: "Yes, a tempo traveller for Rameshwaram trips is designed for long journeys and offers comfortable seating, air conditioning, and smooth suspension for a relaxed travel experience." },
  { q: "Can a tempo traveller cover all major attractions in Rameshwaram?",                     a: "Yes, a tempo traveller for Rameshwaram sightseeing can easily cover top places like Ramanathaswamy Temple, Dhanushkodi Beach, and Pamban Bridge in one comfortable full-day tour." },
  { q: "Why choose a tempo traveller rental in Rameshwaram for group travel?",                  a: "A tempo traveller rental in Rameshwaram is one of the best choices for group travel because it offers comfort, affordability, and flexibility, allowing families and pilgrims to explore the city together without worrying about transportation." },
  { q: "Can I book a tempo traveller for full-day sightseeing in Rameshwaram?",                 a: "Yes, you can book a full-day tempo traveller sightseeing package in Rameshwaram through www.yatratravelindia.com to explore temples, beaches, and other attractions." },
  { q: "Why choose Yatra Travel India for tempo traveller booking in Rameshwaram?",             a: "Yatra Travel India is trusted for affordable tempo traveller booking in Rameshwaram, offering clean vehicles, professional drivers, easy online booking, and reliable customer support." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-chennai",        city: "Tempo Traveller in Chennai",   type: "City Tours, Airport & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru", city: "Tempo Traveller in Bengaluru", type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",          city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",         city: "Tempo Traveller in Somnath",   type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerRameshwaram() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Rameshwaram to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Rameshwaram&apos;s Trusted Tempo Traveller — Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge & South India Tours</p>
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
          <span>Tempo Traveller in Rameshwaram</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Book AC Tempo Traveller on Rent in Rameshwaram</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Ramanathaswamy Temple · Dhanushkodi Beach · Pamban Bridge · Madurai · Kanyakumari · South India Tours</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 24 Seater Available", "Luxury Options", "Fully Air Conditioned", "Affordable Group Travel"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Rameshwaram" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "On-Time Pickup", sub: "Flexible stops as per your plan" }, { title: "Clean AC Vehicles", sub: "Checked before every trip" }, { title: "Nominal Pricing", sub: "Budget-friendly for groups" }, { title: "24/7 Support", sub: "Contact anytime, instant reply" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>AC tempo traveller on rent in Rameshwaram</strong> for Ramanathaswamy Temple darshan, local sightseeing, Dhanushkodi Beach, Pamban Bridge visits, airport transfers, and outstation trips to Madurai and Kanyakumari. <strong>9 seater to 24 seater — including Luxury Tempo Traveller.</strong> Call <strong>9044019511</strong> or visit www.yatratravelindia.com to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Book AC Tempo Traveller on Rent in Rameshwaram</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Rameshwaram is one of the most important spiritual destinations in India and attracts thousands of pilgrims and tourists every year. Located on a peaceful island in the state of Tamil Nadu, the city is surrounded by the blue waters of the Bay of Bengal and the Gulf of Mannar. Rameshwaram is widely known for its religious significance, calm atmosphere, and beautiful coastal scenery, making it a special place for both spiritual journeys and relaxing travel.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">The main attraction of the city is the famous Ramanathaswamy Temple, one of the twelve sacred Jyotirlinga temples dedicated to Lord Shiva. Devotees from all parts of India visit this temple to perform prayers and rituals. The temple is also known for its long corridors, ancient architecture, and sacred wells where pilgrims take a holy bath before entering the temple. According to the Hindu epic Ramayana, Lord Rama worshipped Lord Shiva here after his victory over Ravana, which makes this place extremely important for Hindu pilgrims.</p>
            <p className="text-base text-gray-700 leading-relaxed">Tempo Traveller in Rameshwaram offers grand facilities to the people. You can get a whole money refundable plan up to 24 hours and book your trip plan in an easy manner. Expect a comfortable travel within a range of 3 to 4 hours by car to nearby destinations. The city offers immense sightseeing and travel to Rameshwaram without any hassle.</p>
          </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Rameshwaram</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Comparison Table */}
<h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
  Tempo Traveller Options in Rameshwaram — Full Comparison
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
      {RAMESWARAM_OPTIONS_TABLE.map((row, i) => (
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

          {/* Tempo Travellers for Rent section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Tempo Travellers for Rent in Rameshwaram</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Rameshwaram is regarded for temples and sightseeing. It is well known for its culture and tradition. If you are interested to explore Rameshwaram with your buddies, family group, or visitors who are eager to roam around — then hire an AC Tempo Traveller. One can have a good experience of travelling.</p>
            <p className="text-sm text-gray-700 leading-relaxed">By renting a Tempo you can easily tour the city. The city offers unique sightseeing regions amalgamated with recent developments. Just enjoy the flexible stops while you travel. The mode is easy and you can travel freely with children and family. The good facility is ensured while you travel comfortably without any hassle. Back seat offers fine nap while you get relaxation. Enjoy with your buddies the high-quality music system. Large windows and sliding curtains make your view possible.</p>
          </div>

          {/* Book Options */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Book Tempo Traveller in Rameshwaram</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Book your needs and go for online services. By hiring a Tempo one can make his travelling easy. You can look for several seats such as 12 seats or 16 seats available. Or you can look for 18 seats or 26 seats to get on the way.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["If you are seeking college trip, you can book 15 to 20 seats tempo traveller.", "If you need small outing service, you can book 9 to 18 seats for your trip.", "Book instantly what you prefer and look for speedy services on the way.", "Cover your tours with grand fun and great travel facilities."].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-[#0f6ec8] mt-0.5 text-xs font-bold">✓</span>
                  <span className="text-xs text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ Local Sightseeing Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller for Rameshwaram Local Sightseeing</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">When you visit Rameshwaram, there are many beautiful and religious places to explore around the town. For families and groups travelling together, hiring a tempo traveller is one of the most comfortable and practical options for local sightseeing.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Rameshwaram is famous for its spiritual atmosphere and historic temples. Many visitors come here to visit the sacred Ramanathaswamy Temple. Apart from the temple, there are several other attractions nearby such as Dhanushkodi Beach, Agni Theertham, and the famous Pamban Bridge. These places are located at different points in the town, so having a comfortable vehicle makes the trip much easier.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">A tempo traveller allows the whole group to travel together without the need to book multiple cars. The vehicle usually comes with comfortable pushback seats, air-conditioning, and enough space for luggage. This makes it ideal for long temple visits and full-day sightseeing tours around Rameshwaram.</p>
            <p className="text-base text-gray-700 leading-relaxed">Another benefit is flexibility. When you book a tempo traveller for local sightseeing, you can visit different places at your own pace — spend more time at temples, stop for photos at scenic locations, and explore the peaceful beaches without worrying about transportation.</p>
          </div>
        </div>

        {/* ══ Top Attractions ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Top Attractions in Rameshwaram</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">You can view top attractions in the city such as Arulmigo Ramanatha Temple, Hanuman Temple, Adam&apos;s Bridge, and Ram Setu View Point. With a 12 seater tempo traveller in Rameshwaram, your trip is memorable and you travel safely with all amenities on the way.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ATTRACTIONS.map(place => (
              <div key={place.name} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{place.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Why Tempo for Group Tours ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Why Tempo Traveller is Perfect for Rameshwaram Group Tours</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">A trip to Rameshwaram is very special for many people who come for prayer and spiritual travel. Most visitors travel with family members, friends, or in religious groups. Because of this, a tempo traveller is one of the best vehicles for the journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {WHY_TEMPO.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <h3 className="font-bold text-[#0f6ec8] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800 font-semibold">Overall, choosing a tempo traveller for Rameshwaram pilgrimage tours makes the trip comfortable, affordable, and easy. It allows your group to travel together and enjoy a peaceful spiritual journey without any travel worries.</p>
          </div>
        </div>

        {/* ══ What We Provide ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">What We Provide in Rameshwaram</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">We provide exceptional facilities to our clients and make their travel outstanding. You come across several facilities such as:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {SERVICES_PROVIDED.map(item => (
              <div key={item.title} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-5">
            <h3 className="font-bold text-white text-sm mb-2">Approach Our Squad</h3>
            <p className="text-xs text-blue-100 leading-relaxed">Our strong team assures every client enjoys a hassle free service. The team works with an ardent manner and attempts to offer grand facilities. Once you contact us for amenities you get immediate facilities at your doorstep.</p>
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Rameshwaram</ST>
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

        {/* Best Time */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Best Time to Visit Rameshwaram:</strong> Between <strong>October and March</strong>, when the weather is pleasant and suitable for temple visits and local sightseeing tours. Book your tempo traveller in advance during festival seasons and Tamil Nadu holidays for assured availability.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Rameshwaram</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Rameshwaram Group Tour Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Ramanathaswamy darshan, Dhanushkodi, Pamban Bridge, Madurai, Kanyakumari — call us with your group size and travel date. Dial 9044019511 or visit www.yatratravelindia.com.</p>
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
