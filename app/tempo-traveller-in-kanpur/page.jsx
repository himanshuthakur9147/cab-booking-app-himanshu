"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Local Sightseeing", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Family Trip", "Lucknow Tour"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹26/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Varanasi Trip", "Corporate Tours"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹30/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Max Luggage", "Wedding Groups", "Pilgrimage"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Premium AC", "LED Lighting", "Music System", "Charging Points"] },
  { badge: "Maharaja",  title: "Maharaja Tempo Traveller",  img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Sofa Seats", "Full Recline", "VIP Travel", "Grand Weddings"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",   capacity: "9 + Driver",     ac: "AC",         ideal: "Small families and groups — local sightseeing in Kanpur, short city circuits, and nearby day trips" },
  { vehicle: "12 Seater Tempo Traveller",  capacity: "12 + Driver",    ac: "AC",         ideal: "Medium family groups — pilgrimage tours, Kanpur to Lucknow, Prayagraj, and outstation travel" },
  { vehicle: "16 Seater Tempo Traveller",  capacity: "16 + Driver",    ac: "AC",         ideal: "Large groups — corporate tours, religious groups, wedding parties, and longer routes to Delhi and Varanasi" },
  { vehicle: "20 Seater Tempo Traveller",  capacity: "20 + Driver",    ac: "AC",         ideal: "Large pilgrimage and wedding groups — spacious seating and luggage space for multi-day tours from Kanpur" },
  { vehicle: "Luxury Tempo Traveller",     capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "VIP guests, senior citizens, wedding functions — soft pushback seats, LED lighting, music system, charging points" },
  { vehicle: "Maharaja Tempo Traveller",   capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "Ultimate VIP travel, grand weddings — sofa seats, full recline, premium interiors, air suspension" },
];

const ROUTES_TABLE = [
  { route: "Kanpur to Lucknow",       dist: "~80 km",  vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Prayagraj",     dist: "~190 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Varanasi",      dist: "~330 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to New Delhi",     dist: "~430 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Agra",          dist: "~240 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Ayodhya",       dist: "~200 km", vehicle: "12 or 16 Seater" },
  { route: "Kanpur to Haridwar",      dist: "~580 km", vehicle: "12 or 16 Seater" },
];

const USE_TAGS = ["Local Sightseeing Kanpur", "Wedding Guest Transfers", "VIP & Corporate Travel", "Kanpur to Lucknow Trip", "Kanpur to Varanasi Tour", "Kanpur to Prayagraj", "Kanpur to Delhi Route", "Family Pilgrimage Trip", "Senior Citizen Groups", "Religious Festival Travel", "Airport Pickup & Drop", "Baraat Transport", "Multi-Day Group Tours", "Corporate Group Tours"];

const FEATURES = [
  { title: "Premium Pushback Seats",     desc: "Soft and wide pushback seats provide extra comfort and support for long journeys and outstation trips from Kanpur — ideal for families, senior citizens, and wedding guests." },
  { title: "Fully Air-Conditioned",      desc: "All tempo travellers are fully AC — keeps passengers comfortable during hot summers and ensures a refreshing atmosphere for long-distance travel from Kanpur." },
  { title: "Extra Legroom",              desc: "Wide aisles and generous legroom — senior citizens and families can travel comfortably without feeling cramped on outstation routes from Kanpur." },
  { title: "Stylish Interiors",          desc: "Clean, modern interiors with soft LED lighting give a comfortable and peaceful travel environment — perfect for weddings, VIP travel, and group tours in Kanpur." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for suitcases, gifts, and travel bags — perfect for multi-day outstation tours, airport transfers, and wedding travel from Kanpur." },
  { title: "Smooth Suspension",          desc: "Superior suspension system built for highways — smooth and comfortable ride even on long routes like Kanpur to Varanasi or Kanpur to Delhi." },
  { title: "Entertainment & Charging",   desc: "Music systems, LED TVs, and mobile charging points in most tempo travellers — keeps passengers relaxed and connected during long journeys from Kanpur." },
  { title: "Verified & Polite Drivers",  desc: "Trained, verified drivers who know Kanpur city roads, highways, and outstation routes — ensure safe, timely, and courteous travel for all groups." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual during the trip)", "State entry tax / permit charges (if applicable)", "Parking charges (as per actual at locations)", "Driver night allowance (₹500 for Tempo Traveller, if applicable)", "Airport parking charges (as per authority rules)"];

const BENEFITS = [
  { title: "Comfortable Travel for All Groups",     desc: "Tempo travellers seat 9 to 20 people comfortably. Families, wedding guests, and corporate teams travel together in one vehicle, reducing confusion and ensuring everyone arrives on time." },
  { title: "Perfect for Weddings in Kanpur",        desc: "Kanpur is known for grand weddings. Our luxury tempo travellers are ideal for baraat transport, VIP guest pickups, and shuttle services between hotels, venues, and temples." },
  { title: "Verified and Knowledgeable Drivers",    desc: "Our drivers know Kanpur city roads, major highways, and outstation routes like Kanpur to Lucknow and Kanpur to Varanasi. They ensure on-time pickup and safe travel." },
  { title: "Flexible for All Travel Needs",         desc: "From local sightseeing and airport transfers to long-distance outstation trips, our tempo travellers are versatile — ideal for short city tours and multi-day group journeys alike." },
  { title: "Cost Effective Group Travel",           desc: "Hiring a tempo traveller in Kanpur is far more economical than multiple cars. Save on fuel, parking, and coordination while providing premium comfort to your entire group." },
  { title: "Transparent Pricing Always",            desc: "At Yatra Travel India we provide complete fare details in advance — toll, parking, and driver allowance are clearly discussed. No hidden charges, no last-minute surprises." },
];

const OUTSTATION_ROUTES = [
  { title: "Kanpur to Lucknow Tempo Traveller",      meta: ["~80 km", "1.5–2 Hours", "Business & Family"],        desc: "Traveling from Kanpur to Lucknow with a group? The best way to enjoy a comfortable and hassle-free journey is by booking a tempo traveller from Kanpur to Lucknow. Whether it’s a family outing, corporate tour, wedding travel, or a pilgrimage trip, a Kanpur to Lucknow tempo traveller ensures everyone can travel together in one vehicle, avoiding the stress of multiple cars and traffic hassles.Choosing a tempo traveller hire in Kanpur gives you the perfect mix of comfort, safety, and convenience. Our 12 seater tempo traveller Kanpur or 16 seater tempo traveller Kanpur options are ideal for small and medium-sized groups, while luxury options like luxury tempo traveller Kanpur to Lucknow provide extra space, reclining seats, full air-conditioning, and premium amenities for VIP travel or wedding guests." },
  { title: "Kanpur to Prayagraj Tempo Traveller",    meta: ["~190 km", "3–4 Hours", "Pilgrimage & Cultural"],      desc: "Make your group travel from Kanpur to Prayagraj simple and comfortable by hiring a tempo traveller from Kanpur to Prayagraj. Perfect for families, friends, corporate teams, wedding guests, or pilgrims, a Kanpur to Prayagraj tempo traveller keeps your group together while providing full comfort. Our 12 seater and 16 seater tempo travellers in Kanpur are fully air-conditioned, spacious, and feature reclining seats and enough room for all luggage. With a professional tempo traveller with a driver in Kanpur, you don’t have to worry about traffic or directions; the driver handles everything, ensuring a smooth trip along the Kanpur to Prayagraj route. Choose our tempo traveller hire in Kanpur for safe, affordable, and stress-free group travel and make your journey enjoyable from start to finish" },
  { title: "Kanpur to Varanasi Tempo Traveller",     meta: ["~330 km", "5–6 Hours", "Religious & Spiritual"],      desc: "Traveling from Kanpur to Varanasi with a group is easy and stress-free when you hire a tempo traveller from Kanpur to Varanasi. Whether it’s a family trip, office tour, wedding party, or a pilgrimage journey to Kashi, a Kanpur to Varanasi tempo traveller keeps everyone together in one vehicle. Our 12 seater and 16 seater tempo travellers in Kanpur are fully air-conditioned, spacious, and equipped with reclining seats and plenty of luggage space, making long distance travel comfortable. With a professional tempo traveller with a driver in Kanpur, you don’t have to worry about driving, directions, or traffic. The driver knows the Kanpur to Varanasi route well and ensures timely pickups and drop-offs. Perfect for families, friends, corporate teams, and pilgrims, our tempo traveller hire in Kanpur offers safe, convenient, and affordable travel. Book your Kanpur to Varanasi tempo traveller today and enjoy a smooth, comfortable, and hassle-free journey." },
  { title: "Kanpur to New Delhi Tempo Traveller",    meta: ["~430 km", "6–8 Hours", "Long Distance Corporate"],    desc: "Traveling from Kanpur to New Delhi with a group? Skip the hassle of multiple cars and long drives by hiring a tempo traveller from Kanpur to New Delhi. Perfect for family trips, office tours, wedding parties, or pilgrimage journeys, a Kanpur to New Delhi tempo traveller keeps everyone together comfortably. Our 12 seater and 16 seater tempo travellers in Kanpur are fully air conditioned, spacious, and have reclining seats with enough room for luggage, making the long distance journey smooth and relaxing. With a professional tempo traveller with a driver in Kanpur, you don’t have to worry about driving, traffic, or getting lost. The driver knows the Kanpur to New Delhi route well and ensures timely arrival at your destination. Whether it’s for families, friends, corporate teams, or VIP travel, our tempo traveller hire in Kanpur offers safe, reliable, and stress-free travel. Book your Kanpur to New Delhi tempo traveller now for a comfortable and convenient trip." },
];

const WHY_CARDS = [
  { title: "Clean and Well-Maintained Vehicles",  desc: "All tempo travellers in Kanpur are clean, well-maintained, fully air conditioned, and checked before every trip to ensure safe and comfortable group travel." },
  { title: "Experienced and Verified Drivers",    desc: "Drivers know Kanpur city roads, major highways, and outstation routes. Travel without worry about navigation or traffic — especially for senior citizens and wedding guests." },
  { title: "Fair and Transparent Pricing",        desc: "12 seater to luxury — all at fair pricing with fuel, tolls, and driver allowance included. No hidden charges. Full cost clarity before you confirm your booking." },
  { title: "Easy Booking — Call or WhatsApp",     desc: "Book by call or WhatsApp on 9044019511. Share travel date, pickup location, and group size. Instant quote and confirmation in minutes. 24x7 support available." },
  { title: "Ideal for Kanpur Weddings",           desc: "Grand weddings, baraat transport, VIP guest movement, venue-to-hotel shuttles — our luxury and standard tempo travellers handle all wedding travel needs in Kanpur." },
  { title: "Multi-Day & Multi-City Tours",        desc: "Kanpur to Varanasi, Prayagraj, Lucknow, Delhi, or a full North India tour — fully customized multi-day packages available for families, corporates, and large groups." },
];

const FAQS = [
  { q: "How early should I book a tempo traveller in Kanpur?",                         a: "If your travel dates are fixed, don’t wait till the last moment. In Kanpur, vehicles get booked quickly during wedding season and long weekends. Booking 4–7 days in advance is usually a safe choice if you want a good vehicle at a reasonable price." },
  { q: "Will the tempo traveller come to my exact pickup location in Kanpur?",          a: "Yes, in most cases the vehicle will come right to your doorstep. Whether you’re near the railway station, a hotel, or any residential area in Kanpur, pickup can be arranged easily. Just share the correct location while booking." },
  { q: "Are there any hidden charges in tempo traveller rental in Kanpur?",             a: "This depends on the service provider. A good rental company will clearly explain everything — like toll tax, parking, and driver allowance. It’s always better to ask once before confirming so there are no surprises later." },
  { q: "Can I plan a multi-day or multi-city trip from Kanpur?",                       a: "Yes, and honestly, this is where a tempo traveller makes the most sense. Whether you are planning Kanpur to Varanasi, Ayodhya, Lucknow, or even a longer North India trip, the plan can be customized based on your group’s needs." },
  { q: "Is there any difference between a normal and a luxury tempo traveller?",        a: "Yes, there is a noticeable difference. A normal tempo traveller is simple and budget-friendly. A luxury tempo traveller comes with better seats, more leg space, charging points, and sometimes even extra features like TV or lighting. If comfort matters, go for the luxury option." },
  { q: "Is a tempo traveller a good option for family trips from Kanpur?",             a: "Honestly, yes. Instead of managing multiple cars and coordinating with everyone, a tempo traveller keeps the whole family together. It makes the journey more relaxed and enjoyable, especially on long routes." },
  { q: "Can I book a tempo traveller in Kanpur just for one day?",                     a: "Yes, you can. Many people book it for one-day trips like local sightseeing or nearby places. It’s simple, convenient, and saves you from the hassle of arranging multiple vehicles" },
  { q: "Do drivers know the routes well for outstation travel from Kanpur?",           a: "Most drivers are experienced and regularly travel on routes like Kanpur to Lucknow, Prayagraj, Varanasi, and Delhi. They know the roads, stops, and timing well, which makes your journey smoother." },
  { q: "Why do people prefer tempo travellers over cars for group travel in Kanpur?",  a: "The biggest reason is convenience. Everyone travels together, there’s enough space for luggage, and the cost per person becomes much lower compared to booking multiple cars. It just makes the whole trip easier." },
  { q: "Is AC available in tempo travellers in Kanpur?",                               a: "Yes, AC tempo travellers are easily available and are actually the most preferred option, especially in summer. They make a big difference in comfort during long journeys." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",    city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj",city: "Tempo Traveller in Prayagraj", type: "Kumbh, Pilgrimages & City Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ayodhya",                  city: "Tempo Traveller in Ayodhya",   type: "Ram Mandir Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",     city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-manali",                   city: "Tempo Traveller in Manali",    type: "Mountain Routes & Adventure Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerKanpur() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Kanpur to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Navbar />

      {/* Top Info Bar */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Kanpur's Trusted Tempo Traveller — Local Sightseeing, Weddings, Lucknow, Varanasi, Prayagraj and Delhi</p>
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
          <span>Tempo Traveller in Kanpur</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Kanpur</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Local Sightseeing · Weddings & VIP Travel · Lucknow · Varanasi · Prayagraj · Delhi · Corporate Tours</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury & Maharaja Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Kanpur" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "On-Time Pickup", sub: "Pickup from your exact location" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Fuel, toll, driver allowance included" }, { title: "Verified Drivers", sub: "Know Kanpur routes and highways" }].map(item => (
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
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Kanpur</strong> for local sightseeing, weddings, corporate travel, pilgrimage tours, and outstation trips to Lucknow, Varanasi, Prayagraj, and Delhi. <strong>9 seater to 20 seater available — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* About Kanpur Travel */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller on Rent in Kanpur — Comfortable Group Travel for All Occasions</h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Kanpur is a busy city, and travelling in multiple cars can be tiring and costly. With a tempo traveller rental in Kanpur, your whole group can sit in one vehicle and enjoy the journey together. Our tempo travellers are fully air conditioned, clean, and well maintained, making them perfect for all age groups, including senior citizens and children.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">We offer different options like 12 seater tempo traveller Kanpur, 16 seater tempo traveller Kanpur, and luxury tempo travellers for premium travel. These vehicles come with comfortable pushback seats, good legroom, and proper luggage space. Whether you are going for local sightseeing in Kanpur or planning an outstation trip to Lucknow, Varanasi, Prayagraj, or Delhi, a tempo traveller with a driver in Kanpur makes travel smooth and relaxed.</p>
            <p className="text-base text-gray-700 leading-relaxed">With better roads and improved connectivity, Kanpur is well-positioned for group travel across Uttar Pradesh and beyond. Yatra Travel India is your trusted partner for tempo traveller hire in Kanpur — covering local trips, weddings, corporate events, and long-distance outstation journeys.</p>
          </div>
        </div>

        {/* Vehicle Cards */}
        <ST id="services">Tempo Traveller Options in Kanpur</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Rental Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Kanpur Tempo Traveller Rental | 12 Seater, 16 Seater & Luxury Vehicle</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Looking for a reliable tempo traveller rental in Kanpur for pilgrimage, family trips, wedding groups, or corporate travel? Yatra Travel India provides safe, comfortable, and affordable tempo traveller hire in Kanpur with multiple seating options to suit every group size. From 12 seater tempo traveller Kanpur and 16 seater tempo traveller Kanpur to luxury and Maharaja tempo traveller models, we have the perfect vehicle for your journey.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Whether you are organizing a family trip, planning a pilgrimage tour, managing wedding guest transport, or traveling outstation from Kanpur, our well-maintained AC tempo travellers ensure a smooth, relaxed, and hassle-free ride. Each vehicle is designed with comfortable pushback seats, ample legroom, clean interiors, powerful air conditioning, and enough luggage space for long and short trips alike.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Our tempo traveller hire service in Kanpur is ideal for:</h3>
            <ul className="space-y-2">
              {["Local sightseeing and day trips in Kanpur", "Wedding guest transportation and baraat travel", "Pilgrimage and religious tours", "Family outings and weekend trips", "Corporate travel and group tours", "Outstation journeys to Lucknow, Varanasi, Prayagraj, and Delhi"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-sm text-gray-700">{i + 1}. {item}</span></li>
              ))}
            </ul>
          </div>
          <p className="text-base text-gray-600 leading-relaxed mb-4">We believe in transparent and fair pricing. Our tempo traveller price in Kanpur is competitive, with no hidden charges. You receive complete cost details in advance, helping you plan your travel budget with confidence.</p>
          <p className="text-base text-gray-600 leading-relaxed">Booking a tempo traveller in Kanpur with us is quick and easy. Simply call, WhatsApp, or book online by sharing your travel date, pickup location, destination, and number of passengers. Our team will provide an instant quote and confirmation. With experienced and verified drivers, well-serviced vehicles, and 24×7 customer support, Yatra Travel India is your trusted partner for tempo traveller rental in Kanpur.</p>
        </div>

        {/* Comfortable & Well-Maintained */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Comfortable and Well-Maintained Tempo Travellers in Kanpur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">At Yatra Travel India, we take pride in offering a fleet of modern and fully air conditioned tempo travellers in Kanpur. Our tempo travellers are clean, well kept, and perfect for both city travel and long outstation journeys. Whether you are planning a local trip, a family outing, a wedding event, or traveling outstation, our vehicles are designed to make your journey pleasant and relaxed.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Each tempo traveller comes with comfortable pushback seats, good legroom, strong air-conditioning, and neat interiors. There is enough space for luggage, so you don&apos;t have to compromise on comfort, even on longer trips. We make sure every vehicle is checked and cleaned before each trip, so you always step into a fresh and well-maintained vehicle.</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Vehicle Options Available:</h3>
            <ul className="space-y-2">
              {[["12 Seater Tempo Traveller in Kanpur", "Best for families and small groups"], ["16 Seater Tempo Traveller in Kanpur", "Suitable for medium-sized groups"], ["Luxury & Maharaja Tempo Traveller", "Ideal for weddings and premium travel"], ["20 Seater Tempo Traveller", "Perfect for large pilgrimage and wedding groups"]].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-2"><span className="text-[#0f6ec8] mt-1">•</span><span className="text-sm text-gray-700"><strong>{title}</strong> – {desc}</span></li>
              ))}
            </ul>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">All our tempo travellers are driven by experienced and verified drivers who understand local roads and major routes well. With Yatra Travel India, you can travel with confidence, knowing your comfort and safety are always our priority.</p>
        </div>

        {/* Full Comparison Table */}
        <ST>Tempo Traveller Options in Kanpur — Full Comparison</ST>
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

        {/* Luxury Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Luxury Tempo Traveller in Kanpur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">If you want comfort with a premium touch, booking a luxury tempo traveller in Kanpur is the perfect choice. It is ideal for wedding guests, corporate travel, VIP movement, family tours, and long outstation trips. A luxury tempo traveller gives you more space, better seating, and a smooth travel experience compared to regular vehicles.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Our luxury tempo traveller on rent in Kanpur comes with fully air-conditioned interiors, soft pushback seats, extra legroom, and stylish lighting. The interiors are clean, modern, and designed to make long journeys relaxing. There is enough luggage space, making it suitable for airport transfers and multi-day trips.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">We offer 12 seater and 16 seater luxury tempo traveller in Kanpur, driven by professional and polite drivers who know city roads and highways well. Whether you are planning a wedding function, business trip, religious tour, or an outstation journey to Lucknow, Varanasi, Delhi, or Agra, a luxury tempo traveller with driver in Kanpur ensures a smooth and stress-free ride.</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Luxury Tempo Traveller in Kanpur for Weddings &amp; VIP Guests</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Kanpur has a strong VIP and grand wedding culture. From big family weddings to high-profile business events, people in Kanpur prefer classy, well managed, and comfortable travel. Whether it is a large wedding at a banquet hall, a destination wedding, or a VIP guest arrival, travel arrangements play a big role in making the event smooth and impressive.</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">A luxury tempo traveller in Kanpur is a perfect choice for wedding guests and VIP movement. These vehicles are designed for premium travel, offering stylish interiors, soft pushback seats, extra legroom, and full air conditioning. Guests can travel together comfortably, without the rush and confusion of multiple cars.</p>
            <p className="text-sm text-gray-700 leading-relaxed">For weddings, a luxury tempo traveller on rent in Kanpur is commonly used to move baraat members, close relatives, and outstation guests between hotels, wedding venues, and function locations. For VIP guests, it ensures privacy, comfort, and a professional travel experience.</p>
          </div>
        </div>

        {/* Outstation Routes */}
        <ST border="border-green-500">Hire Tempo Traveller From Kanpur to Outstation</ST>
        <p className="text-base text-gray-600 leading-relaxed mb-6">Traveling from Kanpur to Lucknow with a group? The best way to enjoy a comfortable and hassle-free journey is by booking a tempo traveller from Kanpur to Lucknow. Whether it’s a family outing, corporate tour, wedding travel, or a pilgrimage trip, a Kanpur to Lucknow tempo traveller ensures everyone can travel together in one vehicle, avoiding the stress of multiple cars and traffic hassles.
Choosing a tempo traveller hire in Kanpur gives you the perfect mix of comfort, safety, and convenience. Our 12 seater tempo traveller Kanpur or 16 seater tempo traveller Kanpur options are ideal for small and medium-sized groups, while luxury options like luxury tempo traveller Kanpur to Lucknow provide extra space, reclining seats, full air-conditioning, and premium amenities for VIP travel or wedding guests.
With a tempo traveller with driver in Kanpur, you don’t have to worry about navigation, parking, or traffic. Our experienced drivers know the Kanpur to Lucknow route well, ensuring timely pickup and drop, smooth highway travel, and a safe ride for senior citizens, children, and all passengers.
Whether it’s a quick day trip, an overnight journey, or a multi-day pilgrimage, booking a tempo traveller from Kanpur to Lucknow is cost-effective, comfortable, and convenient. It allows your group to enjoy the journey together, with plenty of space for luggage, snacks, and relaxation.</p>

        {/* Routes Table */}
        <ST border="border-green-500">Tempo Traveller Hire in Kanpur — Key Outstation Routes</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Route", "Distance", "Vehicle", "Booking"].map(h => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 border-b border-gray-100">
                    <a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"><FaPhoneAlt size={9} /> Call Now</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Price List */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Luxury Tempo Traveller in Kanpur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">If you want comfort with a premium touch, booking a luxury tempo traveller in Kanpur is the perfect choice. It is ideal for wedding guests, corporate travel, VIP movement, family tours, and long outstation trips. A luxury tempo traveller gives you more space, better seating, and a smooth travel experience compared to regular vehicles.
Our luxury tempo traveller on rent in Kanpur comes with fully air-conditioned interiors, soft pushback seats, extra legroom, and stylish lighting. The interiors are clean, modern, and designed to make long journeys relaxing. There is enough luggage space, making it suitable for airport transfers and multi-day trips.
We offer 12 seater and 16 seater luxury tempo traveller in Kanpur, driven by professional and polite drivers who know city roads and highways well. Whether you are planning a wedding function, business trip, religious tour, or an outstation journey to Lucknow, Varanasi, Delhi, or Agra, a luxury tempo traveller with driver in Kanpur ensures a smooth and stress-free ride.
At Yatra Travel India, we focus on quality service, on-time pickup, and transparent pricing. Our luxury tempo travellers are well-maintained and regularly checked for safety and comfort. Book your luxury tempo traveller hire in Kanpur today and enjoy stylish, comfortable group travel without any hassle.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Our starting tempo traveller price in Kanpur:</h3>
            <div className="space-y-2">
              {[["9 Seater Tempo Traveller in Kanpur", "₹22 per km"], ["12 Seater Tempo Traveller Fare in Kanpur", "₹23 to ₹25 per km"], ["16 Seater Tempo Traveller Kanpur", "₹26 to ₹28 per km"], ["20 Seater Tempo Traveller Hire in Kanpur", "₹30 per km"]].map(([label, price], i, arr) => (
                <div key={label} className={"flex justify-between items-center py-2 " + (i < arr.length - 1 ? "border-b border-blue-200" : "")}>
                  <span className="text-sm font-semibold text-gray-700">{label}</span>
                  <span className="text-sm font-bold text-blue-600">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Luxury for Weddings */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Why Luxury Tempo Travellers Are Popular for Weddings in Kanpur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Kanpur is known for its grand weddings and big family celebrations. With large guest lists, multiple events, and long travel distances between hotels, banquet halls, and temples, managing transport can be a challenge. This is where a luxury tempo traveller in Kanpur becomes the perfect solution.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Comfortable Travel for Large Groups", desc: "Luxury tempo travellers are designed to seat 12, 16, or even 20 people comfortably. Families and wedding guests can travel together in one vehicle instead of splitting into multiple cars. This reduces confusion, saves time, and ensures everyone arrives together, on time, and in comfort." },
              { title: "Premium Interiors & Amenities", desc: "Luxury tempo travellers offer fully air-conditioned interiors, reclining seats, LED lighting, music systems, and ample legroom. For weddings, this means guests enjoy a smooth and stylish ride, whether they are traveling to the wedding venue, airport, or hotel." },
              { title: "Professional & Polite Drivers", desc: "Every luxury tempo traveller with a driver in Kanpur comes with an experienced and polite driver. Drivers know local routes, handle city traffic efficiently, and ensure timely arrivals for events. This makes wedding travel safe and stress-free, especially for senior citizens and VIP guests." },
              { title: "Flexible for All Wedding Travel Needs", desc: "From baraat transport, VIP guest pickup, to shuttle services between venues, luxury tempo travellers are versatile. They are ideal for short local trips or long-distance travel to nearby cities, temples, or hotels." },
              { title: "Cost Effective & Convenient", desc: "Hiring a single luxury tempo traveller in Kanpur is more economical than multiple cars. You save on fuel, parking, and traffic hassle while providing premium comfort and style to your guests." },
              { title: "Perfect Choice for Kanpur Weddings", desc: "With all these benefits, it’s no surprise that luxury tempo travellers are a top choice for weddings in Kanpur. They combine comfort, style, safety, and convenience, ensuring that your wedding guests travel happily and arrive on time." },
            ].map(b => (
              <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-blue-700 text-sm mb-2">{b.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For Tags */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">
          {USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}
        </div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Kanpur</ST>
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

        {/* Fare Inclusions */}
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
        <ST>Why Choose Yatra Travel India for Tempo Traveller in Kanpur</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Outstation Route Details */}
        <ST border="border-[#ff6b35]" id="attractions">Hire Tempo Traveller From Kanpur to Lucknow</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map(r => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{r.meta.map(m => <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>)}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Most Booked Routes */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Most Booked Tempo Traveller Routes from Kanpur</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Kanpur to Lucknow", desc: "Ideal for business meetings, airport transfers, and family trips. Reliable service with comfortable AC travel on this popular 80 km route." },
              { title: "Kanpur to Varanasi", desc: "A favourite for temple visits and spiritual journeys. Perfect for families and pilgrimage groups who want a relaxed and smooth ride." },
              { title: "Kanpur to Prayagraj", desc: "Popular for Sangam visits, Kumbh Mela travel, and cultural tours. Safe and convenient AC travel for all group sizes." },
              { title: "Kanpur to New Delhi", desc: "Best for long distance group tours, corporate travel, and pilgrimage trips. Spacious seating and full AC for the long journey." },
              { title: "Kanpur to Agra & Mathura", desc: "Great for heritage sightseeing and religious tours. Premium comfort with luxury tempo traveller options available." },
              { title: "Kanpur to Ayodhya", desc: "Perfect for Ram Mandir darshan and spiritual trips. Experienced drivers ensure smooth and timely travel on this popular route." },
              { title: "Kanpur to Haridwar & Rishikesh", desc: "Ideal for spiritual tours and group pilgrimages. Comfortable multi-day journey with full AC vehicles available." },
              { title: "Kanpur Local Sightseeing", desc: "Explore Kanpur city in comfort — IIT Kanpur, Kanpur Zoo, Jainpur, Allen Forest Zoo, and more with a dedicated AC tempo traveller." },
            ].map((route, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-5 hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{route.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Book */}
        <ST>Why Book a Tempo Traveller with Yatra Travel India in Kanpur?</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
            </div>
          ))}
        </div>

        {/* Advance Booking Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Peak Season Advance Booking Essential:</strong> Kanpur receives high demand for tempo travellers during <strong>wedding season and long weekends.</strong> Booking <strong>4 to 7 days in advance</strong> is recommended during normal season. During peak wedding and festival periods, book <strong>1 to 2 weeks ahead</strong> to secure your preferred vehicle.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Kanpur</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Kanpur Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Weddings, local sightseeing, corporate tours, or outstation travel to Lucknow, Varanasi, Prayagraj, Delhi — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
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
