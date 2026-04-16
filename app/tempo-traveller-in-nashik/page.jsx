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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-nashik#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-nashik",
      "name": "Tempo Traveller Rental in Nashik | Yatra Travel India",
      "description": "Hire a tempo traveller in Nashik for outstation trips, Jyotirlinga tours, wine tours, and group travel. 9 to 17 seater vehicles with driver, transparent pricing, no hidden charges.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
        "priceRange": "₹₹",
      },
      "areaServed": { "@type": "City", "name": "Nashik" },
      "serviceType": "Tempo Traveller Rental",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "4500",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yatratravelindia.com/tempo-traveller-in-nashik",
      },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "967" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-nashik#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the starting fare for a tempo traveller in Nashik?", "acceptedAnswer": { "@type": "Answer", "text": "The starting fare is Rs 3,500 for a 9 seater and Rs 4,500 for a 12 seater for an 8 hour and 80 km local trip." } },
        { "@type": "Question", "name": "Which tempo traveller size is best for a family trip in Nashik?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller is best for most families as it offers comfort, space, and better cost sharing." } },
        { "@type": "Question", "name": "Does the fare include toll and parking?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the fare includes toll taxes, parking charges, driver allowance, and fuel with no hidden charges." } },
        { "@type": "Question", "name": "Is tempo traveller available for outstation trips from Nashik?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can book tempo travellers for routes like Nashik to Shirdi, Pune, Mumbai, and Saptashrungi." } },
        { "@type": "Question", "name": "How far in advance should I book?", "acceptedAnswer": { "@type": "Answer", "text": "You should book 3 to 5 days in advance for normal trips and 3 to 4 weeks early during festivals or wedding season." } },
        { "@type": "Question", "name": "Can I book a tempo traveller for wine tours in Nashik?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are commonly booked for Sula Vineyards and wine tour group travel in Nashik." } },
        { "@type": "Question", "name": "Is a luxury tempo traveller available in Nashik?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers with reclining seats, AC, and premium features are available for special trips." } },
        { "@type": "Question", "name": "Does the tempo traveller come with a driver?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all tempo travellers come with experienced drivers and driver charges are included in the fare." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Nashik",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹3,500 onwards" }, { label: "Outstation Rate", value: "₹20/km onwards" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Trimbakeshwar", "Small Groups", "Igatpuri Trip"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Nashik", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹4,500 onwards" }, { label: "Outstation Rate", value: "₹23/km" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Most Popular", "Shirdi Tour", "Wine Tour", "Nashik to Mumbai"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Nashik", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Outstation Rate", value: "On Request" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Reclining Seats, Luggage Space" }], tags: ["Full AC", "Nashik to Pune", "Corporate Groups", "Saptashrungi Tour"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Nashik", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Outstation Rate", value: "On Request" }, { label: "Hours / KM", value: "8 hrs / 80 km" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Full AC", "Nashik to Mumbai", "Wedding Parties", "Large Groups"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Nashik",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "12–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹10,000 onwards" }, { label: "Outstation Rate", value: "₹38–45/km" }, { label: "AC", value: "Multi-Zone Climate Control" }, { label: "Extras", value: "LCD, Mini Fridge, Charging Points" }], tags: ["Full Recline", "LCD Screens", "Mini Fridge", "VIP Weddings"] },
];

const NASHIK_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Nashik",     capacity: "9 + Driver",     ac: "AC",          ideal: "Small families — Trimbakeshwar pilgrimage, Igatpuri trekking weekend, Pandavleni Caves, and Nashik local sightseeing" },
  { vehicle: "12 Seater Tempo Traveller in Nashik",    capacity: "12 + Driver",    ac: "AC",          ideal: "Most popular — Shirdi day trips, Sula wine tours, Nashik to Pune and Mumbai, Saptashrungi, and family sightseeing" },
  { vehicle: "16 Seater Tempo Traveller in Nashik",    capacity: "16 + Driver",    ac: "AC",          ideal: "Corporate groups, college trips — Nashik to Pune expressway, Nashik to Mumbai wedding parties and larger family outings" },
  { vehicle: "20 Seater Tempo Traveller in Nashik",    capacity: "17–20 + Driver", ac: "AC",          ideal: "Large wedding parties, Kumbh Mela pilgrim groups, Ganesh Chaturthi tours — one vehicle for the whole group" },
  { vehicle: "Luxury Tempo Traveller in Nashik",       capacity: "12–20 + Driver", ac: "Multi-Zone",  ideal: "Destination weddings, VIP corporate travel, special occasions — reclining leather, LCD screens, mini fridge, charging points" },
];

const OUTSTATION_ROUTES = [
  { title: "Nashik to Shirdi by Tempo Traveller",        dist: "~85 km",  desc: "One of the most booked routes in Maharashtra for group travel. The Shirdi trip is regularly done as a day trip or overnight pilgrimage by families, religious groups, and office teams. A 12 seater tempo traveller from Nashik to Shirdi is the most popular choice for this route. Comfortable, affordable when split across the group, and easy to book in advance.", fare: "₹5,500+ (12 Seater)" },
  { title: "Nashik to Trimbakeshwar by Tempo Traveller", dist: "~28 km",  desc: "Just 28 km from Nashik city but one of the most visited pilgrimage spots in the region. Quick half day trip, easy route, works well with a 9 seater tempo traveller for smaller family groups. During festival periods — especially Shravan month — book well in advance. Demand spikes significantly and vehicles fill up fast.", fare: "On Request (9 Seater)" },
  { title: "Nashik to Pune by Tempo Traveller",          dist: "~210 km", desc: "A popular route for corporate groups, college trips, and weekend travellers. The expressway makes it a smooth enough drive. A 16 seater tempo traveller from Nashik to Pune handles medium sized groups comfortably and gets everyone there without the coordination headache of multiple cabs.", fare: "On Request (16 Seater)" },
  { title: "Nashik to Mumbai by Tempo Traveller",        dist: "~170 km", desc: "Wedding parties, corporate transfers, family trips. The Nashik to Mumbai route by tempo traveller is one of the most consistently booked outstation runs from the city. A 12 or 16 seater tempo traveller handles this route well. For larger groups heading to Mumbai for events or functions, the 20 seater is the practical choice.", fare: "On Request (12/20 Seater)" },
  { title: "Nashik to Igatpuri by Tempo Traveller",      dist: "~60 km",  desc: "Weekend getaway favourite. Igatpuri sits in the Sahyadris and the drive from Nashik is genuinely scenic. Popular with trekking groups, nature lovers, and anyone looking for a short break from the city. A 9 or 12 seater tempo traveller works well for this route and the round trip can comfortably be done in a day.", fare: "On Request (9/12 Seater)" },
  { title: "Nashik to Saptashrungi by Tempo Traveller",  dist: "~65 km",  desc: "Increasingly popular pilgrimage route. Saptashrungi Devi temple is around 65 km from Nashik and the route involves some hill terrain. A reliable driver who knows the road makes a real difference here. Larger family groups tend to book the 16 or 20 seater for this trip so everyone travels together without splitting across vehicles.", fare: "On Request (16/20 Seater)" },
];

const SIGHTSEEING_PLACES = [
  { name: "Trimbakeshwar Temple",       desc: "One of the twelve Jyotirlingas in India and one of the most visited religious sites in Maharashtra. Just 28 km from Nashik city. A must visit for any group doing a local sightseeing trip in Nashik. Best visited early morning before the crowds build up." },
  { name: "Panchavati",                 desc: "The heart of religious Nashik. Ram Kund, Sita Gumpha, Kalaram Temple. This area carries deep historical and spiritual significance and is one of the most photographed parts of the city. Easy to cover on foot once the tempo traveller drops the group here." },
  { name: "Sula Vineyards",             desc: "Something completely different and genuinely worth including in the itinerary. Nashik is India's wine capital and Sula is the most well known vineyard in the region. Tours, tastings, stunning views of the grape fields. A great afternoon stop especially for corporate groups and mixed age family trips." },
  { name: "Pandavleni Caves",           desc: "Ancient Buddhist rock cut caves dating back over 2000 years. Situated on a hill just outside the city with good views of Nashik from the top. A short climb but worth it. Usually quiet enough for groups to explore at their own pace." },
  { name: "Ramshej Fort",               desc: "For groups that enjoy a bit of trekking and history mixed in. The fort sits above Nashik and offers a proper elevated view of the surrounding landscape. Not a very long trek but enough to make it feel like a proper outing." },
  { name: "Dugarwadi Waterfall",        desc: "A popular stop especially during and after monsoon season. Around 35 km from Nashik city. Great for groups that want a mix of nature and sightseeing in the same day trip." },
  { name: "Coin Museum & Nashik City Tour", desc: "For groups that want to understand the city itself. The Nashik Coin Museum, the old city lanes, the local markets. A slower paced but genuinely interesting few hours for curious travellers." },
];

const LUXURY_DETAILS = [
  { label: "Seating Capacity", value: "12 to 20 seats" },
  { label: "AC",               value: "Multi-zone climate control" },
  { label: "Seats",            value: "Full recline, premium leather" },
  { label: "Entertainment",    value: "LCD screens, music system" },
  { label: "Extras",           value: "Charging points, mini fridge, curtains" },
  { label: "Best For",         value: "Weddings, VIP tours, special occasions" },
  { label: "Local Fare",       value: "Rs 10,000 onwards" },
  { label: "Outstation Rate",  value: "Rs 38 to 45 per km" },
];

const WHAT_SEPARATES = [
  { title: "On Time Pickup",                   desc: "A tempo traveller that shows up 45 minutes late ruins the start of every trip. At Yatra Travel India, the booking is confirmed the night before, driver details are sent in advance, and the vehicle is at your door at the time agreed. Not approximately. Not after three phone calls. On time, every time." },
  { title: "Clean and Well Maintained Vehicles", desc: "Every tempo traveller in the Yatra Travel India fleet is regularly serviced and well looked after. AC that works properly, seats that are clean, luggage space that is actually usable. A poorly maintained vehicle is not just uncomfortable — on a long outstation trip from Nashik it becomes a genuine problem." },
  { title: "Fixed Fare with No Hidden Charges", desc: "The price quoted before the trip is the price paid after it. Toll taxes, parking, state tax for outstation trips, driver allowance. All of it is included upfront at Yatra Travel India. No surprise charges at the end of a long day when everyone is tired and just wants to get home." },
  { title: "Experienced Drivers Who Know Every Route", desc: "Nashik connects to some genuinely varied terrain. City roads, expressways, Balaghat range routes toward Igatpuri, the Trimbakeshwar road, the Shirdi highway. Every driver at Yatra Travel India knows these routes well. The journey is smoother, safer, and faster because of it." },
  { title: "Responsive Customer Support",      desc: "Before the trip, during the booking, and if something changes last minute — the Yatra Travel India team picks up the phone and gives straight answers. That sounds basic but it is rarer than it should be. With us, you always know exactly where things stand." },
];

const USE_TAGS = [
  "Trimbakeshwar Jyotirlinga", "Panchavati & Ram Kund", "Sula Vineyards Wine Tour",
  "Pandavleni Caves", "Ramshej Fort Trek", "Dugarwadi Waterfall",
  "Nashik to Shirdi Pilgrimage", "Nashik to Mumbai", "Nashik to Pune Corporate",
  "Nashik to Igatpuri Trekking", "Nashik to Saptashrungi", "Kumbh Mela Group Travel",
  "Ganesh Chaturthi Tours", "Wedding Guest Transfers",
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll tax included", "Parking charges included", "Driver day allowance included"];
const EXCLUDED = ["State tax for outstation trips outside Maharashtra (if applicable)", "Driver night allowance (₹500, if applicable)", "Any additional km beyond agreed package", "Personal expenses of passengers"];

const FAQS = [
  { q: "What is the starting fare for a tempo traveller in Nashik?",                    a: "Rs 3,500 for a 9 seater and Rs 4,500 for a 12 seater for a full day local tour covering 8 hours and 80 km." },
  { q: "Which tempo traveller size is best for a family trip in Nashik?",               a: "12 seater works best for most families. Comfortable, good luggage space, and easy on the budget when the fare is split." },
  { q: "Does the tempo traveller fare in Nashik include toll and parking?",             a: "Yes. At Yatra Travel India the fare includes toll taxes, parking charges, driver allowance, and fuel. No hidden charges." },
  { q: "How far in advance should I book a tempo traveller in Nashik?",                 a: "At least 3 to 5 days for regular trips. During Kumbh Mela, wedding season, and festival periods book 3 to 4 weeks early." },
  { q: "Is a tempo traveller available in Nashik for outstation trips?",                a: "Yes. Popular outstation routes include Nashik to Shirdi, Nashik to Pune, Nashik to Mumbai, and Nashik to Saptashrungi." },
  { q: "What is the tempo traveller fare from Nashik to Shirdi?",                       a: "Starts at Rs 5,500 for a 12 seater. Fare includes toll, fuel, and driver allowance. No extra charges after the trip." },
  { q: "Can I book a tempo traveller in Nashik for a wine tour?",                       a: "Yes. A 12 seater is the most popular choice for Sula Vineyards and Nashik wine trail group tours." },
  { q: "Is a luxury tempo traveller available in Nashik?",                              a: "Yes. Yatra Travel India offers luxury tempo travellers with reclining seats, multi zone AC, LCD screens, and charging points at every seat." },
  { q: "How many people can travel in a 20 seater tempo traveller in Nashik?",          a: "Comfortably fits 17 to 20 people with luggage. Best for large family groups, wedding parties, and corporate teams." },
  { q: "Does the tempo traveller come with a driver in Nashik?",                        a: "Yes. All tempo travellers at Yatra Travel India come with an experienced driver. Driver allowance is included in the fare." },
  { q: "What is the per km rate for an outstation tempo traveller from Nashik?",        a: "Starts at Rs 23 per km for a 12 seater. Rate covers both directions and includes toll, parking, and state tax." },
  { q: "Can I book a tempo traveller in Nashik for a Trimbakeshwar pilgrimage?",        a: "Yes. Trimbakeshwar is just 28 km from Nashik. A 9 or 12 seater works well for this short pilgrimage trip." },
  { q: "What is the best tempo traveller for a corporate outing in Nashik?",            a: "12 or 16 seater depending on team size. Both are regularly booked for corporate outings and office trips from Nashik." },
  { q: "How do I book a tempo traveller in Nashik with Yatra Travel India?",            a: "Simple. Call 9044019511, tell us your group size, travel date, and route. We will confirm the vehicle and fare on the same call." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa",       city: "Tempo Traveller in Goa",       type: "Beach Tours, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                    city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",                   city: "Tempo Traveller in Somnath",   type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-raipur",                    city: "Tempo Traveller in Raipur",    type: "Local Tours & Chhattisgarh Outstation" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerNashik() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Nashik to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Nashik&apos;s Trusted Tempo Traveller — Trimbakeshwar, Shirdi, Sula Vineyards, Pune, Mumbai & Saptashrungi</p>
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
          <span>Tempo Traveller in Nashik</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller in Nashik — One Vehicle for the Whole Group</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Trimbakeshwar · Shirdi · Sula Vineyards · Saptashrungi · Pune · Mumbai · Igatpuri</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury Options", "Fixed Fare · No Hidden Charges", "On Time Every Time"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Nashik" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Shirdi, Pune, Mumbai..." className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
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
          {[{ title: "On-Time Pickup", sub: "Driver details sent night before" }, { title: "Clean & Well Maintained", sub: "Serviced before every trip" }, { title: "Fixed Fare Always", sub: "Toll, parking, driver all included" }, { title: "Drivers Know Every Route", sub: "Nashik roads, Shirdi, Trimbakeshwar" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Nashik</strong> for Trimbakeshwar pilgrimage, Shirdi day trips, Sula Vineyards wine tours, local sightseeing, and outstation travel to Pune, Mumbai, and Saptashrungi. <strong>9 seater to 20 seater — including Luxury Tempo Traveller with LCD screens and mini fridge.</strong> Fixed fare, clean vehicles, experienced drivers. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Nashik</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Nashik is a city that loves group travel. Kumbh Mela, Ganesh Chaturthi, grape harvest season, Sula Fest — there is always something happening here and people always go together. Family trips, office outings, pilgrimages, weekend getaways — Nashik is that kind of city.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">And when you are travelling with a big group, you need one vehicle that fits everyone. No splitting up. No waiting for different cabs. No confusion about who goes where.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-[#0f6ec8]">That is exactly what a tempo traveller does. Everyone gets in together, travels together, and arrives together. Simple as that.</p>
          </div>
        </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Nashik</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Comparison Table */}
          <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
            Tempo Traveller Options in Nashik — Full Comparison
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
                {NASHIK_OPTIONS_TABLE.map((row, i) => (
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

        {/* ══ SECTION 2: What Makes Yatra Travel India Best ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">What Makes Yatra Travel India the Best Tempo Traveller Service in Nashik</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Not all tempo traveller operators in Nashik are the same. Some are great. Some look great until the day of the trip. Here is what actually separates Yatra Travel India from the rest:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {WHAT_SEPARATES.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="bg-[#0f6ec8] rounded-lg p-4 text-center">
            <p className="text-white text-sm font-semibold">Ready to book? Call Yatra Travel India on 9044019511 and tell us your group size, your route, and your travel date. We will handle everything else.</p>
          </div>
        </div>

        {/* ══ SECTION 3: Best Routes from Nashik ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Best Tempo Traveller Routes from Nashik</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">The best tempo traveller service in Nashik is only as good as its knowledge of the routes your group actually needs. Here are the most popular ones:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {OUTSTATION_ROUTES.map(r => (
              <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#0f6ec8] text-sm">{r.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{r.dist}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{r.desc}</p>
                <p className="text-xs text-[#0f6ec8] font-semibold">{r.fare}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 4: Luxury Tempo Traveller ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Luxury Tempo Traveller Service in Nashik</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Sometimes the standard version is not what the trip calls for. Wedding parties, VIP corporate travel, special occasions. A luxury tempo traveller in Nashik gives the group a completely different experience. Reclining padded seats, powerful multi zone AC, air suspension, LCD screens, charging points at every seat.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">The difference shows up most on longer drives. A 4 or 5 hour outstation trip in a luxury tempo traveller feels genuinely different from the same journey in a standard vehicle. And when you split the upgrade cost across 12 or 15 people, the per head difference is smaller than most groups expect.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-blue-800">For destination weddings in Nashik especially, a luxury tempo traveller arriving on time with the whole wedding party inside sets the right tone before the event even starts.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-blue-200">
            <table className="w-full text-sm min-w-[380px]">
              <thead><tr className="bg-blue-700">{["Feature", "Details"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {LUXURY_DETAILS.map((row, i) => (
                  <tr key={row.label} className={(i % 2 === 0 ? "bg-blue-50" : "bg-white") + " hover:bg-blue-100"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-blue-100 text-xs">{row.label}</td>
                    <td className="py-3 px-4 text-gray-700 border-b border-blue-100 text-xs">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ══ SECTION 5: Local Sightseeing ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Rent Tempo Traveller in Nashik for Local Sightseeing</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Nashik is one of those cities where one day of proper sightseeing is never really enough. Temples, vineyards, hill viewpoints, ghats, markets. There is a lot packed into this city and the surrounding areas. And when you are exploring all of it with a group, renting a tempo traveller in Nashik for a local sightseeing trip is honestly the smartest decision you can make.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">No cab switching. No waiting at pickup points. No arguing about which route to take. Everyone gets in together at the start of the day and the whole trip runs exactly as planned.</p>

            <h3 className="font-bold text-gray-900 text-sm mb-2">What a Local Sightseeing Trip by Tempo Traveller in Nashik Looks Like</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">A standard local sightseeing package with Yatra Travel India covers <strong>8 hours and up to 80 km</strong> within Nashik. That is more than enough time to cover the major attractions comfortably without feeling rushed.</p>
            <p className="text-sm text-gray-600 leading-relaxed">Your group decides the itinerary. The driver handles the rest. Pickup from your hotel or home, first stop, second stop, lunch break, afternoon spots, drop back. Clean and simple. And because you have one dedicated vehicle for the full day, there is no stress about finding transport between stops. The tempo traveller waits while your group explores, then moves when you are ready.</p>
          </div>

          <h3 className="font-bold text-gray-900 text-base mb-4">Best Local Sightseeing Places in Nashik by Tempo Traveller</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">Nashik has enough to fill a full day easily. Some of the best spots your group can cover in one local sightseeing trip include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {SIGHTSEEING_PLACES.map(place => (
              <div key={place.name} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{place.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Yatra Travel India for Local Sightseeing */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Why Yatra Travel India for Local Sightseeing in Nashik</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">There are plenty of tempo traveller options in Nashik. Here is what makes Yatra Travel India the one most groups come back to:</p>
            <div className="space-y-2">
              {[
                "The vehicle shows up on time. Every time.",
                "The driver knows Nashik properly — not just the main roads but the temple timings, the parking spots near Panchavati, the best time to hit Sula before the afternoon crowds. Small things that make a full day sightseeing trip run smoothly instead of getting stuck.",
                "The fare is fixed and clear before the trip starts. Toll, parking, driver allowance. All included. No awkward conversation at the end of the day.",
                "If anything needs sorting before or during the booking, the team picks up the phone and gives a straight answer.",
              ].map(point => (
                <div key={point} className="flex items-start gap-2">
                  <span className="text-[#0f6ec8] mt-0.5 text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-xs text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-[#0f6ec8] rounded-lg p-3 text-center">
              <p className="text-white text-sm font-semibold">Call Yatra Travel India on 9044019511 to book your local sightseeing tempo traveller in Nashik. Tell us your group size and preferred date — we will have everything ready for you.</p>
            </div>
          </div>
        </div>

        {/* ══ SECTION 6: Why Groups Keep Coming Back ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Why Groups Keep Coming Back to the Same Tempo Traveller Service in Nashik</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">It is not complicated. A good service shows up on time. The vehicle is clean and well maintained. The fare is what was agreed. The driver knows the route. And if something needs sorting before or during the trip, someone picks up the phone and handles it.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-[#0f6ec8]">That is the whole thing. It sounds simple because it is. The groups that find a reliable tempo traveller service in Nashik and have one good experience tend to book with the same operator every single time after that.</p>
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

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
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Advance Booking Essential:</strong> Book at least <strong>3 to 5 days</strong> in advance for regular local trips. During <strong>Kumbh Mela, Ganesh Chaturthi, Shravan month, wedding season, and Sula Fest</strong> — book <strong>3 to 4 weeks early.</strong> Nashik sees extremely high group travel demand during these periods and vehicles fill up fast.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Nashik</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Nashik Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Trimbakeshwar pilgrimage, Shirdi day trip, Sula wine tour, Pune, Mumbai — tell us your group size, route, and travel date. We will take care of the rest. Dial 9044019511.</p>
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
