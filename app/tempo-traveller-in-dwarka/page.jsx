"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Dwarka",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹16/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Temple Tour", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Dwarka", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹21/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Family Pilgrimage", "Somnath Trip"] },
  { badge: "13 Seater", title: "13 Seater Tempo Traveller in Dwarka", img: "/images/13seater.jpg", specs: [{ label: "Seating Capacity", value: "13 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Temple Tours", "Group Travel", "Railway Transfer"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Dwarka", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹24/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Jyotirlinga Tour", "Corporate Tours"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Dwarka", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹28/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Max Luggage", "School Groups", "Pilgrimage"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Dwarka",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Premium AC", "LED Lighting", "Music System", "Charging Points"] },
  { badge: "Maharaja",  title: "Maharaja Tempo Traveller in Dwarka",  img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Sofa Seats", "Full Recline", "VIP Travel", "Elderly Groups"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Dwarka",   capacity: "9 + Driver",     ac: "AC",         ideal: "Small families and groups - Dwarkadhish Temple darshan, Nageshwar Jyotirlinga, and local temple circuits in Dwarka" },
  { vehicle: "12 Seater Tempo Traveller in Dwarka",  capacity: "12 + Driver",    ac: "AC",         ideal: "Medium family groups - pilgrimage tours, Bet Dwarka, Rukmini Temple, and outstation to Somnath and Porbandar" },
  { vehicle: "13 Seater Tempo Traveller in Dwarka",  capacity: "13 + Driver",    ac: "AC",         ideal: "Medium groups - railway station transfers, multi-temple darshan, and comfortable outstation travel from Dwarka" },
  { vehicle: "16 Seater Tempo Traveller in Dwarka",  capacity: "16 + Driver",    ac: "AC",         ideal: "Large groups - Panchkroshi Yatra, religious groups, school trips, and longer routes to Rajkot and Junagadh" },
  { vehicle: "20 Seater Tempo Traveller in Dwarka",  capacity: "20 + Driver",    ac: "AC",         ideal: "Large pilgrimage and school groups - spacious seating and luggage space for multi-day Gujarat pilgrimage tours" },
  { vehicle: "Luxury Tempo Traveller in Dwarka",     capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "VIP guests, senior citizens, elderly pilgrims - soft pushback seats, LED lighting, music system, and charging points" },
  { vehicle: "Maharaja Tempo Traveller in Dwarka",   capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "Ultimate VIP travel, elderly groups, senior pilgrims - sofa seats, full recline, premium interiors, air suspension" },
];

const ROUTES_TABLE = [
  { route: "Dwarka to Somnath",     dist: "~230 km", time: "4-5 hours", fare: "₹9,000 onwards" },
  { route: "Dwarka to Nageshwar",   dist: "~16 km",  time: "25-30 mins", fare: "₹3,500 onwards" },
  { route: "Dwarka to Junagadh",    dist: "~190 km", time: "3.5 hours", fare: "₹7,500 onwards" },
  { route: "Dwarka to Rajkot",      dist: "~220 km", time: "4 hours", fare: "₹8,000 onwards" },
  { route: "Dwarka to Palitana",    dist: "~300 km", time: "5-6 hours", fare: "₹12,000 onwards" },
  { route: "Dwarka to Porbandar",   dist: "~115 km", time: "2 hours", fare: "₹5,500 onwards" },
  { route: "Dwarka to Sasan Gir",   dist: "~275 km", time: "5 hours", fare: "₹11,000 onwards" },
];

const USE_TAGS = ["Dwarkadhish Temple Darshan", "Nageshwar Jyotirlinga Visit", "Bet Dwarka Island Tour", "Rukmini Devi Temple", "Panchkroshi Yatra", "Railway Station Pickup", "Dwarka to Somnath", "Dwarka to Rajkot", "Family Pilgrimage Trip", "School Group Tours", "Religious Festival Travel", "Senior Citizen Groups", "Multi-Day Gujarat Tour", "Jyotirlinga Circuit"];

const FEATURES = [
  { title: "Premium Pushback Seats",     desc: "Soft and wide pushback seats provide extra comfort and support for long pilgrimage journeys and temple circuits in and around Dwarka." },
  { title: "Fully Air-Conditioned",      desc: "All tempo travellers are fully AC — keeps passengers comfortable during Gujarat summers and ensures a refreshing atmosphere for long-distance travel." },
  { title: "Extra Legroom",              desc: "Wide aisles and generous legroom — senior citizens and families can travel comfortably without feeling cramped on Dwarka pilgrimage routes." },
  { title: "Stylish Interiors",          desc: "Clean, modern interiors with soft LED lighting give a comfortable and peaceful travel environment — perfect for pilgrimage and group travel in Dwarka." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for suitcases, devotional items, and offerings — perfect for multi-day pilgrimage tours and Jyotirlinga circuits in Gujarat." },
  { title: "Smooth Suspension",          desc: "Superior suspension system built for highways — smooth and comfortable ride even on long routes like Dwarka to Somnath or Dwarka to Palitana." },
  { title: "Entertainment & Charging",   desc: "Music systems, LED TVs, and mobile charging points in most tempo travellers — keeps passengers relaxed and connected during long spiritual journeys." },
  { title: "Verified & Polite Drivers",  desc: "Trained, verified Gujarati drivers who know Dwarka temple routes, Jyotirlinga circuits, and major highways — ensure safe, timely, and courteous travel." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)", "Toll and parking (as per route)"];
const EXCLUDED = ["Temple entry fees and offerings", "Food and accommodation for passengers", "Bet Dwarka ferry charges (actual)", "Driver night allowance (₹500, if applicable)", "State entry tax / permit charges (if applicable)"];

const BENEFITS = [
  { title: "Perfect for Jyotirlinga Pilgrimage",     desc: "Visit Dwarkadhish Temple, Nageshwar Jyotirlinga, and Somnath Jyotirlinga in one comfortable journey. Keep your entire pilgrimage group together without splitting across multiple vehicles." },
  { title: "Ideal for Senior Citizens",              desc: "Spacious interiors, reclining seats, air suspension, and smooth AC make our tempo travellers perfect for elderly passengers on long temple circuits and multi-day Gujarat pilgrimage tours." },
  { title: "Experienced Gujarati Drivers",           desc: "Our drivers know Dwarka city roads, temple routes, Panchkroshi circuit, and major Gujarat highways. They speak Gujarati and Hindi, ensuring smooth communication with pilgrim groups." },
  { title: "Flexible for All Travel Needs",          desc: "From Dwarkadhish Temple darshan and railway station transfers to long-distance outstation trips, our tempo travellers are versatile — ideal for short local trips and multi-day tours alike." },
  { title: "Cost Effective Group Travel",            desc: "Hiring a tempo traveller in Dwarka is far more economical than multiple cars or autos. Save on fuel, parking, and coordination while providing premium comfort to your entire group." },
  { title: "Transparent Pricing Always",             desc: "At Yatra Travel India we provide complete fare details in advance — toll, parking, and driver allowance are clearly discussed. No hidden charges, no last-minute surprises." },
];

const OUTSTATION_ROUTES = [
  { title: "Dwarka to Somnath Tempo Traveller",  meta: ["~230 km", "4–5 Hours", "Two Jyotirlinga Route"],  desc: "Dwarka and Somnath are among the twelve Jyotirlinga in India. Both are located on the Gujarat coastline and hold profound spiritual importance. Our AC tempo travellers ensure a comfortable journey with experienced drivers who know the coastal highway route well. Popular stops include Nageshwar Jyotirlinga, Porbandar, and Bhalka Tirth." },
  { title: "Dwarka to Nageshwar Tempo Traveller", meta: ["~16 km", "25–30 Minutes", "Easy Jyotirlinga Combo"], desc: "Nageshwar Jyotirlinga is just 16 km from Dwarka and one of the easiest to combine with Dwarkadhish Temple darshan. Most pilgrimage groups add Nageshwar to their morning itinerary. A tempo traveller makes this combination seamless with one vehicle and driver waiting at every stop." },
  { title: "Dwarka to Rajkot Tempo Traveller",   meta: ["~220 km", "4 Hours", "Airport & City Transfer"],    desc: "Popular outstation transfer for groups flying out of Rajkot airport after completing Dwarka pilgrimage. Our well-maintained AC tempo travellers with experienced drivers ensure timely airport arrival and comfortable highway travel for families and groups." },
  { title: "Dwarka to Palitana Tempo Traveller", meta: ["~300 km", "5–6 Hours", "Jain Pilgrimage Circuit"],  desc: "Palitana is the most sacred Jain pilgrimage destination in Gujarat. Popular multi-day package combining Dwarka and Palitana for groups covering multiple sacred sites in one Gujarat trip. Our tempo travellers provide comfort for this long journey with full AC and luggage space." },
];

const WHY_CARDS = [
  { title: "Clean and Well-Maintained Vehicles",  desc: "All tempo travellers in Dwarka are clean, well-maintained, fully air conditioned, and checked before every trip to ensure safe and comfortable pilgrimage travel." },
  { title: "Experienced Gujarati Drivers",        desc: "Drivers know Dwarka temple routes, Panchkroshi circuit, Jyotirlinga roads, and Gujarat highways. Fluent in Gujarati and Hindi for easy communication with pilgrims." },
  { title: "Fair and Transparent Pricing",        desc: "9 seater to luxury — all at fair pricing with fuel, tolls, and driver allowance included. No hidden charges. Full cost clarity before you confirm your booking." },
  { title: "Easy Booking — Call or WhatsApp",     desc: "Book by call or WhatsApp on 9044019511. Share travel date, pickup location, and group size. Instant quote and confirmation in minutes. 24x7 support available." },
  { title: "Railway Station Pickup Available",    desc: "Dedicated tempo traveller service for Dwarka railway station pickup. Punctual arrival with driver waiting, clean vehicle, and professional service for group transfers." },
  { title: "Multi-Day Gujarat Pilgrimage Tours",  desc: "Dwarka to Somnath, Palitana, Ambaji, Girnar, or a full Gujarat pilgrimage circuit — fully customized multi-day tour packages available for families and large groups." },
];

const FAQS = [
  { q: "Is a tempo traveller better than auto or cab for Dwarka pilgrimage groups?", a: "Yes. Tempo traveller in Dwarka keeps the whole pilgrimage group together in one vehicle. Autos and cabs split the group across multiple vehicles creating coordination problems at every temple stop. One tempo traveller means one pickup, one driver, everyone arrives together at Dwarkadhish Temple, Nageshwar, and Bet Dwarka without anyone getting separated." },
  { q: "Can I hire a tempo traveller in Dwarka for just half a day?", a: "Yes. Half day tempo traveller hire in Dwarka available for shorter requirements. Nageshwar Jyotirlinga and Rukmini Devi Temple can be covered comfortably in 4 hours. Half day package starts at Rs 2,000 for a 12 seater. Confirm pickup time and stops at booking. Call 9044019511 for half day fare." },
  { q: "What is the per km rate for outstation tempo traveller from Dwarka?", a: "Outstation tempo traveller rate from Dwarka starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater. Rate applies to full distance both ways. Includes fuel, toll, parking, and driver allowance. No additions after the trip ends." },
  { q: "Is tempo traveller available from Dwarka railway station for group pickup?", a: "Yes. Tempo traveller pickup from Dwarka railway station available for all group sizes. Driver waiting at station at confirmed arrival time. Vehicle confirmed in advance with registration details shared before travel date. Call 9044019511 to arrange station pickup." },
  { q: "Can I book a tempo traveller in Dwarka for a multi day Gujarat pilgrimage tour?", a: "Yes. Multi day tempo traveller from Dwarka covers complete Gujarat pilgrimage circuit including Somnath Jyotirlinga, Palitana Shatrunjaya, Ambaji, and Junagadh Girnar. Driver accommodation included for overnight stops. Full multi day fare confirmed upfront. Call 9044019511 to plan complete itinerary." },
  { q: "What is the tempo traveller fare from Dwarka to Junagadh?", a: "Tempo traveller Dwarka to Junagadh fare starts at Rs 7,500 for a 12 seater. Junagadh is 190 km from Dwarka. Popular pilgrimage destination for Girnar Hill temple circuit. Drive takes around 3.5 hours on Gujarat state highway." },
  { q: "Does Yatra Travel India provide tempo traveller for school pilgrimage trips in Dwarka?", a: "Yes. Tempo traveller for school trips in Dwarka regularly booked for educational and religious excursions. Safe well maintained vehicles, experienced drivers, fixed group fare. 16 and 20 seater most popular for larger student groups. Call 9044019511 to book." },
  { q: "What is the tempo traveller fare from Dwarka to Rajkot?", a: "Tempo traveller Dwarka to Rajkot fare starts at Rs 8,000 for a 12 seater. Rajkot is 220 km from Dwarka. Popular outstation transfer for groups flying out of Rajkot airport after completing Dwarka pilgrimage. Drive takes around 4 hours." },
  { q: "Can I get a tempo traveller in Dwarka with a driver who knows Gujarati?", a: "Yes. Every tempo traveller driver at Yatra Travel India in Dwarka is a local Gujarati driver fluent in Gujarati and Hindi. Familiar with all temple timings, local routes, and pilgrimage customs in Dwarka. Makes communication easy for groups from Gujarat and neighbouring states." },
  { q: "Is tempo traveller available in Dwarka during monsoon season?", a: "Yes. Tempo traveller hire in Dwarka during monsoon available throughout the year. Gujarat coastal roads remain accessible during monsoon. Vehicles are well maintained with good tyres for wet road conditions. Bet Dwarka ferry service may be restricted during heavy rain periods. Confirm at booking if monsoon travel is planned." },
  { q: "What is the tempo traveller fare from Dwarka to Palitana?", a: "Tempo traveller Dwarka to Palitana fare starts at Rs 12,000 for a 12 seater. Palitana is 300 km from Dwarka.Most sacred Jain pilgrimage destination in Gujarat. Popular multi day package combining Dwarka and Palitana for groups covering multiple sacred sites in one Gujarat trip." },
  { q: "Is luxury tempo traveller available in Dwarka for elderly pilgrimage groups?", a: "Yes. Luxury tempo traveller in Dwarka strongly recommended for groups with elderly passengers. Air suspension handles Gujarat roads smoothly, reclining seats allow proper rest between temple stops, and powerful multi zone AC keeps everyone comfortable throughout the full day Panchkroshi circuit. Starting fare Rs 7,000. Call 9044019511 to book." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Kumbh, Pilgrimages & City Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-ayodhya",   city: "Tempo Traveller in Ayodhya",   type: "Ram Mandir & Temple Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",      city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",                   city: "Tempo Traveller in Somnath",   type: "Jyotirlinga & Coastal Pilgrimage" },
];

const PANCHKROSHI_STOPS = [
  { title: "Dwarkadhish Temple", desc: "Main temple dedicated to Lord Krishna. Most important pilgrimage site in Dwarka. Morning darshan recommended before starting Panchkroshi circuit." },
  { title: "Nageshwar Jyotirlinga", desc: "One of the twelve Jyotirlingas. Just 16 km from Dwarka. Easy morning visit before continuing the circuit." },
  { title: "Bet Dwarka", desc: "Island temple accessible by ferry. Ancient Krishna temple on island. 30 km from main Dwarka. Ferry runs throughout the day." },
  { title: "Rukmini Devi Temple", desc: "Dedicated to Lord Krishna's consort Rukmini. Beautiful architecture. Just 2 km from Dwarkadhish Temple. Peaceful temple environment." },
  { title: "Gopi Talav", desc: "Sacred pond where Gopis performed penance. Spiritual significance in Krishna lore. Quiet meditation spot away from main temple crowds." },
];

const DWARKA_SOMNATH_STOPS = [
  { title: "Nageshwar Jyotirlinga", desc: "Just 16 km from Dwarka. Third Jyotirlinga easily added to the same trip before heading toward Somnath. Most groups starting from Dwarka cover Nageshwar darshan first thing in the morning before the long drive south." },
  { title: "Porbandar", desc: "Around halfway between Dwarka and Somnath. Birthplace of Mahatma Gandhi. Kirti Mandir is the most visited heritage site in Porbandar. Easy 30 to 45 minute stop for groups interested in combining pilgrimage with history." },
  { title: "Madhavpur Beach", desc: "Around 60 km before Somnath on the coastal highway. Clean quiet beach, mythological significance as the marriage site of Lord Krishna and Rukmini. Good rest stop for groups on the long drive." },
  { title: "Bhalka Tirth",  desc: "Just 4 km from Somnath Temple. Sacred site where Lord Krishna was wounded by an arrow before leaving his earthly form. Important stop for pilgrimage groups arriving at Somnath." },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerDwarka() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Dwarka to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Dwarka&apos;s Trusted Tempo Traveller — Dwarkadhish Temple, Jyotirlinga Tours, Somnath, Rajkot and Gujarat Circuit</p>
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
          <span>Tempo Traveller in Dwarka</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Dwarka</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Dwarkadhish Temple · Nageshwar Jyotirlinga · Bet Dwarka · Somnath · Panchkroshi Yatra · Gujarat Circuit</p>
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
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Dwarka" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "On-Time Pickup", sub: "Railway station & hotel pickup" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Fuel, toll, driver allowance included" }, { title: "Gujarati Drivers", sub: "Know Dwarka routes and Gujarat highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Dwarka</strong> for Dwarkadhish Temple darshan, Jyotirlinga tours, Panchkroshi Yatra, family trips, and outstation travel to Somnath, Nageshwar, Rajkot, and Gujarat circuit. <strong>9 seater to 20 seater available — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean, pushback seats, verified Gujarati drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* How to Book Online - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">How to Book Tempo Traveller in Dwarka Online — Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Dwarka is one of the sacred Char Dham destinations in India, and thousands of pilgrims visit every year, mostly in groups. During festivals like <strong>Janmashtami</strong> and <strong>Holi</strong>, the city gets very crowded, and finding a good vehicle at the last moment can be difficult.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">That&apos;s why it&apos;s always better to plan your transport in advance. With Yatra Travel India, booking a tempo traveller in Dwarka is simple. You can just make a quick call, share your travel details, and everything will be arranged before you even reach the city.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Your vehicle, driver, and pricing are confirmed in advance, so you don&apos;t have to worry after arriving. This makes your group journey smooth and comfortable.</p>
            <div className="bg-white border border-blue-300 rounded-lg p-4 mt-4">
              <p className="text-sm font-bold text-blue-800 mb-2">Easy Booking Process:</p>
              <ol className="space-y-2 ml-4">
                <li className="text-sm text-gray-700">1. Call or WhatsApp <strong>9044019511</strong></li>
                <li className="text-sm text-gray-700">2. Share your travel date, pickup location, destination, and group size</li>
                <li className="text-sm text-gray-700">3. Get instant quote and vehicle confirmation</li>
                <li className="text-sm text-gray-700">4. Receive driver details before your journey</li>
              </ol>
            </div>
          </div>
        </div>

        <ST id="services">Tempo Traveller Options in Dwarka</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Dwarka to Somnath Jyotirlinga - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Tempo Traveller for Dwarka to Somnath Jyotirlinga — Two Sacred Sites, One Comfortable Journey</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Dwarka and Somnath are among the twelve Jyotirlinga in India. Both are located on the Gujarat coastline. Each holds profound spiritual importance for Hindu pilgrims. And both destinations can be covered in one single group trip by a well-planned tempo traveller.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Most pilgrims visiting for Jyotirlinga darshan in Gujarat don&apos;t wish to be content with one. The most convenient and comfortable way to finish both darshans in one outstation trip without splitting the group or handling multiple bookings of transportation is through tempo traveller on Rent for Dwarka to Somnath.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-blue-900 text-base mb-4">Dwarka to Somnath by Tempo Traveller — Route Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">Distance</span>
                <span className="text-sm font-bold text-blue-700">230 km</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">Drive Time</span>
                <span className="text-sm font-bold text-blue-700">4 to 5 hours</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">Route</span>
                <span className="text-sm font-bold text-blue-700">NH951 via Porbandar</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">Road Condition</span>
                <span className="text-sm font-bold text-blue-700">Well maintained highway</span>
              </div>
              <div className="flex justify-between py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">Best For</span>
                <span className="text-sm font-bold text-blue-700">Pilgrimage groups</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-gray-700">12 Seater Fare</span>
                <span className="text-sm font-bold text-blue-700">Rs 9,000 onwards</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-4">Combine Dwarka to Somnath with These Stops</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DWARKA_SOMNATH_STOPS.map((stop, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{stop.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 mb-1">{stop.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-blue-300 rounded-xl p-5">
            <h3 className="font-bold text-blue-600 text-base mb-3">Tips Before Booking Dwarka to Somnath Tempo Traveller</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 text-xs">✓</span>
                <span className="text-sm text-gray-700"><strong>Start Early from Dwarka:</strong> Leave by 6 AM to cover Nageshwar Jyotirlinga darshan before the drive and still reach Somnath comfortably for the afternoon or evening aarti.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 text-xs">✓</span>
                <span className="text-sm text-gray-700"><strong>Book in Advance for Festival Periods:</strong> Janmashtami in Dwarka and Kartik Purnima in Somnath both draw massive crowds. If your trip falls during either festival, book the tempo traveller at least 3 to 4 weeks in advance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 text-xs">✓</span>
                <span className="text-sm text-gray-700"><strong>Confirm Driver Experience on This Route.:</strong> The Dwarka to Somnath coastal highway is straightforward but a driver who has done this route before knows the best stops, the parking situation near both temples, and the quickest routes through Porbandar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1 text-xs">✓</span>
                <span className="text-sm text-gray-700"><strong>Go One Size Up for Pilgrimage Groups:</strong> Pilgrimage groups carry more than regular travellers. Bags, offerings, prasad, extra clothing for temple visits. Always go one size up from what seems sufficient on a full day outstation drive.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nageshwar Jyotirlinga Visit - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Tempo Traveller for Nageshwar Jyotirlinga Visit from Dwarka</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Nageshwar Jyotirlinga is just 16 km from Dwarka. One of the twelve Jyotirlingas in India and one of the easiest to combine with a Dwarkadhish Temple darshan on the same day. Most pilgrimage groups visiting Dwarka add Nageshwar to the morning itinerary before heading back or continuing toward Somnath.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">A tempo traveller from Yatra Travel India makes this combination seamless. One vehicle, both darshans, driver waiting at every stop.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">Distance from Dwarka</p>
                <p className="text-lg font-bold text-blue-700">16 km</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">Drive Time</p>
                <p className="text-lg font-bold text-blue-700">25-30 mins</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border border-blue-200">
                <p className="text-xs text-gray-500 mb-1">12 Seater Fare</p>
                <p className="text-lg font-bold text-blue-700">₹3,500+</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-xs text-gray-600 mb-2"><strong>Best Combined With:</strong></p>
              <p className="text-xs text-gray-700 mb-4">Dwarkadhish Temple, Bet Dwarka, Rukmini Devi Temple</p>
              <p className="text-xs text-gray-600 mb-2"><strong>Route:</strong></p>
              <p className="text-xs text-gray-700">Dwarka to Nageshwar via coastal road</p>
            </div>
          </div>
        </div>

        {/* Panchkroshi Yatra - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-indigo-500">Tempo Traveller for Dwarka Panchkroshi Yatra Group Tour</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">One of the holiest pilgrimage circuits in Gujarat <strong>Dwarka Panchkroshi Yatra.</strong> A single sacred trip covering five holy shrines across Dwarka. Other local sights: Dwarkadhish Temple, Nageshwar Jyotirlinga, Bet Dwarka, Rukmini Devi Temple and Gopi Talav It is believed that by completing the Panchkroshi, the ring of pilgrimage, all five sacred sites bless the pilgrims at once.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Visiting all five attractions comfortably in a day, with such a large group, requires one dependable vehicle that has one knowledgeable driver who knows every route and also demands the fare be agreed on before departing.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {PANCHKROSHI_STOPS.map((stop, i) => (
              <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-bold text-sm text-indigo-900">{stop.title}</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{stop.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-base text-gray-600 leading-relaxed">Yatra Travel India provides exactly that — comfortable tempo travellers with experienced drivers for the complete Panchkroshi circuit.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Dwarka — Comfortable Group Travel for Pilgrimage and Tours</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-3">Dwarka is one of India&apos;s most sacred cities — the kingdom of Lord Krishna and home to the magnificent Dwarkadhish Temple, Nageshwar Jyotirlinga, Bet Dwarka, and many ancient temples. Millions of devotees, families, and pilgrims visit Dwarka every year for darshan, spiritual peace, and religious tours. Travelling in multiple autos or cars can be exhausting and disorganised. A tempo traveller in Dwarka keeps your entire group together, comfortable, and on time.</p>
          <p className="text-base text-gray-600 leading-relaxed">Yatra Travel India provides tempo traveller hire in Dwarka with fully air-conditioned vehicles, comfortable pushback seats, ample luggage space, and experienced local Gujarati drivers. Whether you are planning a Dwarkadhish Temple darshan, Panchkroshi Yatra, railway station transfer, or a long-distance outstation trip to Somnath, Rajkot, or Palitana — our tempo travellers make every journey smooth, safe, and affordable.</p>
        </div>

        <ST>Tempo Traveller Options in Dwarka — Full Comparison</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[600px]">
            <thead><tr className="bg-[#0f6ec8]">{["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-4 border-r border-b border-gray-100"><span className={"text-xs font-bold px-2.5 py-1 rounded-full border " + (row.ac === "Premium AC" ? "bg-orange-50 text-orange-700 border-orange-200" : "bg-blue-50 text-[#0f6ec8] border-blue-200")}>{row.ac}</span></td>
                  <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs leading-relaxed">{row.ideal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ST border="border-green-500">Tempo Traveller Hire in Dwarka — Key Outstation Routes</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
          <table className="w-full text-sm min-w-[500px]">
            <thead><tr className="bg-[#0f6ec8]">{["Route", "Distance", "Time", "Starting Fare"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {ROUTES_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.time}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-xs">{row.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        <ST>Features of Our Tempo Travellers in Dwarka</ST>
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

        <ST>Why Choose Yatra Travel India for Tempo Traveller in Dwarka</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <ST border="border-[#ff6b35]" id="attractions">Popular Outstation Routes from Dwarka</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map(r => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{r.meta.map(m => <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>)}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <ST>Why Book Tempo Traveller in Dwarka with Yatra Travel India</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Festival Season Advance Booking Essential:</strong> Dwarka receives millions of visitors during <strong>Janmashtami, Holi, and Kartik Purnima.</strong> Booking <strong>3 to 4 weeks in advance</strong> is recommended during festival seasons to secure your preferred vehicle.</p>
        </div>

        <ST>Frequently Asked Questions — Tempo Traveller in Dwarka</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Dwarka Pilgrimage Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Dwarkadhish Temple, Jyotirlinga tours, Panchkroshi Yatra, Somnath, Rajkot — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2"><FaPhoneAlt size={12} /> Call Now — +91 90440 19511</a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2"><FaWhatsapp size={14} /> WhatsApp Us</a>
          </div>
        </div>

        <ST>Our Pan-India Tempo Traveller Network</ST>
        <p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India&apos;s major pilgrimage cities with premium group travel services.</p>
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

      <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><FaWhatsapp size={26} color="#fff" /></a>
      <a href="tel:+919044019511" aria-label="Call Now" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f6ec8] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"><FaPhoneAlt size={20} color="#fff" /></a>
      {toast.show && <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl z-[9999] border-l-4 border-[#ff6b35] whitespace-nowrap">{toast.msg}</div>}
    </div>
  );
}

// ─── VEHICLE CARD — Ayodhya style (label: value, left-to-right) ──────────────
function VehicleCard({ vehicle, onSelect }) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {vehicle.img
          ? <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} />
          : <div className="w-full h-full flex items-center justify-center"><FaBus className="text-[#0f6ec8] opacity-20 text-5xl" /></div>
        }
        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">{vehicle.badge}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">
          {vehicle.specs.map(s => (
            <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed">
              <span className="font-bold">{s.label}:</span>{" "}{s.value}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map(tag => <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>)}
        </div>
        <button onClick={() => onSelect(vehicle.title)} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">
          Book {vehicle.badge} Tempo
        </button>
      </div>
    </div>
  );
}
