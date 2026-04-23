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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-raipur#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-raipur",
      "name": "Luxury Tempo Traveller on Rent in Raipur",
      "description": "Book a tempo traveller in Raipur at affordable per km rates. Hire 9 to 17 seater tempo travellers with experienced drivers.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
        "priceRange": "₹₹",
      },
      "areaServed": { "@type": "City", "name": "Raipur" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "4500", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-raipur" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "142" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-raipur#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the price of tempo traveller in Raipur?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo traveller price in Raipur starts from Rs 4500 for a full day local tour depending on trip type and vehicle." } },
        { "@type": "Question", "name": "Is driver included?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all bookings include a professional driver." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.yatratravelindia.com" },
        { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.yatratravelindia.com/tempo-traveller" },
        { "@type": "ListItem", "position": 3, "name": "Tempo Traveller in Raipur", "item": "https://www.yatratravelindia.com/tempo-traveller-in-raipur" },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",   title: "9 Seater Tempo Traveller in Raipur",   img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Min KM/Day", value: "₹250 minimum" }, { label: "Facility", value: "AC, Music System, Pushback Seat" }], tags: ["Full AC", "Small Groups", "City Travel", "Short Outstation"] },
  { badge: "12 Seater",  title: "12 Seater Tempo Traveller in Raipur",  img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Local Tour", value: "₹4,500 onwards" }, { label: "Outstation Rate", value: "₹23/km" }, { label: "Facility", value: "AC, Music System, Pushback Seat" }], tags: ["Full AC", "Most Popular", "Office Groups", "Pilgrimage Tours"] },
  { badge: "16 Seater",  title: "16 Seater Tempo Traveller in Raipur",  img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Local Tour", value: "On Request" }, { label: "Outstation Rate", value: "₹23/km+" }, { label: "Facility", value: "AC, Pushback Seat, Luggage Space" }], tags: ["Full AC", "Office Outings", "School Trips", "Family Tours"] },
  { badge: "20 Seater",  title: "20 Seater Tempo Traveller in Raipur",  img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Local Tour", value: "On Request" }, { label: "Outstation Rate", value: "₹23/km+" }, { label: "Facility", value: "AC, Entertainment System, Large Boot" }], tags: ["Full AC", "Corporate Events", "Wedding Parties", "Religious Tours"] },
  { badge: "24 Seater",  title: "24 Seater Tempo Traveller in Raipur",  img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "24 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Local Tour", value: "On Request" }, { label: "Outstation Rate", value: "On Request" }, { label: "Facility", value: "AC, Pushback Seat" }], tags: ["Full AC", "Large Groups", "Events", "Group Travel"] },
  { badge: "Luxury",     title: "Luxury Tempo Traveller in Raipur",     img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Seats", value: "Fully Reclining" }, { label: "Suspension", value: "Air Suspension" }, { label: "Facility", value: "Leather, TV Screen, Charging Points" }], tags: ["Reclining Seats", "Air Suspension", "Wedding Groups", "Corporate VIP"] },
];

const RAIPUR_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Raipur",     capacity: "6–9 + Driver",   ac: "AC",          ideal: "Small family outings, intimate group travel — Banjari Mata Temple, Ghatarani Waterfall, and local Raipur sightseeing" },
  { vehicle: "12 Seater Tempo Traveller in Raipur",    capacity: "10–12 + Driver", ac: "AC",          ideal: "Most popular — office groups, family tours, Rajim pilgrimage, and outstation to Jagdalpur Bastar, Bilaspur, and Prayagraj" },
  { vehicle: "16 Seater Tempo Traveller in Raipur",    capacity: "13–16 + Driver", ac: "AC",          ideal: "Office trips, school excursions, extended family tours — noticeably more space for longer Chhattisgarh outstation routes" },
  { vehicle: "20 Seater Tempo Traveller in Raipur",    capacity: "17–20 + Driver", ac: "AC",          ideal: "Corporate events, wedding parties, Dantewada religious tours — everyone together for multi-destination Chhattisgarh trips" },
  { vehicle: "24 Seater Tempo Traveller in Raipur",    capacity: "21–24 + Driver", ac: "AC",          ideal: "Large group events, major school and college trips, pilgrimage circuits across Chhattisgarh and outstation travel" },
  { vehicle: "Luxury Tempo Traveller in Raipur",       capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "Destination weddings, corporate VIP travel, long Bastar trips — reclining seats, air suspension, TV screen, charging points" },
];

const ALL_SEATING = ["9 Seater", "10 Seater", "12 Seater", "14 Seater", "15 Seater", "16 Seater", "17 Seater", "18 Seater", "20 Seater", "21 Seater", "24 Seater", "26 Seater"];

const TEMPO_FEATURES = [
  "Enough Luggage Space",
  "Multi Seating Options",
  "TV Screen",
  "Large Window Panes",
  "Mobile Charging Points",
  "GPS Enabled",
  "Night Moon Lighting",
  "Strong AC",
];

const WHY_HIRE = [
  { title: "One Way Solution",     desc: "Have a quick journey to your destination and look out for best comforts. Have an immediate trip without hamper. Our drivers are too experienced and thus help you to reach the site on time." },
  { title: "Outstation Cabs",      desc: "We offer useful cabs that aid you well with their trip services. Explore well and experience the fleet of cars which are spacious and comfy." },
  { title: "Airport Transport",    desc: "We provide airport transfer without any delay. Whether it is morning or evening time, our drivers work on time." },
];

const COMPANY_FEATURES = [
  { title: "Easy Online Booking",     desc: "The easy online booking aids our client with best services to go through. Book your trip with no pause." },
  { title: "Proficient Drivers",      desc: "The professional drivers of cab offer you ideal services. They drive well and offer you security." },
  { title: "Types of Vehicles",       desc: "All types of cars, buses and vans are available. You can go for SUV, Toyota and many others for your trip." },
  { title: "Online Payment is Safer", desc: "Do online payment once you hire a taxi or car transportation facility. With payment online makes easier for you with booking services." },
  { title: "24/7 Services",           desc: "With 24/7 services, you can get our service at any time without any hurdle. We are always there to assist you with our amenities." },
];

const WHY_RENT_RAIPUR = [
  { title: "Fixed Fare",                desc: "There is a fixed fare for clients willing to go on a travel. No surprises at the end of the trip." },
  { title: "Assured Tempo Traveller",   desc: "The Tempo Traveller is assured to all clients at a nominal rate. Confirmed vehicle before the trip starts." },
  { title: "24/7 Customer Assistance", desc: "As a client, you get 24 hours support with no trouble on the way. Always available to help." },
  { title: "No Cancellation Charges",  desc: "If you want to cancel your trip then there is no cancellation charge. Book with confidence." },
];

const TOURIST_PLACES = [
  { name: "Banjari Mata Temple",     desc: "One of the well-known temples in Raipur, Chhattisgarh. A divine temple dedicated to Goddess Bangla Mukhi with deep religious significance." },
  { name: "Ghatarani Waterfall",     desc: "A place for bathing in the region of the forest due to Hindu Temples, extraordinary food stalls and many things for viewing purpose. Popular family outing destination." },
  { name: "Regional Science Centre", desc: "Chhattisgarh's Regional Science Centre. Open every day except Monday. Excellent educational destination for school groups and families." },
  { name: "Rajim Pilgrimage",        desc: "One of the most popular pilgrimage routes from Raipur. Important religious site in Chhattisgarh, known as the Prayagraj of Chhattisgarh." },
  { name: "Dantewada Temple",        desc: "A major pilgrimage destination in Bastar, Chhattisgarh. The route from Raipur to Jagdalpur through Bastar passes through dense forest roads and tribal villages." },
  { name: "Chitrakote & Tirathgarh Waterfalls", desc: "Some of the most scenic group travel experiences in Chhattisgarh. Route passes through dense forest roads and natural waterfalls." },
];

const USE_TAGS = [
  "Banjari Mata Temple", "Ghatarani Waterfall", "Regional Science Centre",
  "Raipur to Rajim Pilgrimage", "Raipur to Dantewada", "Raipur to Jagdalpur Bastar",
  "Office Group Outing", "Wedding Guest Transfer", "Corporate Event Travel",
  "Raipur to Prayagraj", "School Excursion Trip", "Airport Transfer Raipur",
  "Chhattisgarh Temple Circuit", "Raipur to Bilaspur",
];

const BOOK_STEPS = [
  { step: "1", title: "Visit Website", desc: "Just visit the site to know about travel plans and available vehicles." },
  { step: "2", title: "Choose Tempo Traveller", desc: "Go through several websites of Tempo Traveller and choose the best option for your group size and route." },
  { step: "3", title: "Fill Information", desc: "Fill all the details of your trip and number of people who will go on a trip." },
  { step: "4", title: "Payment", desc: "The payment can be done online for booking purpose and there is no hassle." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Toll taxes included", "Parking charges included"];
const EXCLUDED = ["Driver night allowance (₹500, if applicable)", "State entry tax for trips outside Chhattisgarh", "Personal expenses of passengers", "Driver food on multi-day trips"];

const FAQS = [
  { q: "Is a tempo traveller the cheapest way to travel as a group in Raipur?",             a: "Honestly, yes in most cases. When you split the tempo traveller fare across 10 or 12 people, the per head cost almost always works out cheaper than booking individual cabs or even train tickets for the same group. The tempo traveller price in Raipur for a full day local tour starts at Rs 4,500 for a 12 seater — divide that by 12 people and you're looking at Rs 375 per person for a full day of comfortable group travel. That's hard to beat." },
  { q: "Can I book a tempo traveller in Raipur for just a few hours?",                      a: "Yes. Most tempo traveller hire services in Raipur offer flexible booking options. A standard local package covers 8 hours and 80 km, which is more than enough for a full day of sightseeing or a short outstation run. If your requirement is shorter, discuss it upfront while booking — we will adjust the fare accordingly rather than charge you for hours you won't use. Call 9044019511 to book." },
  { q: "What is the best tempo traveller route from Raipur for a group pilgrimage?",         a: "Raipur connects to some seriously important pilgrimage destinations in Chhattisgarh. The most popular pilgrimage routes by tempo traveller from Raipur include Raipur to Rajim, Raipur to Dantewada, Raipur to Champaran, and Raipur to Sirpur. For longer religious tours, the 20 seater tempo traveller works best — everyone travels together with room for offerings and luggage." },
  { q: "How early should I book a tempo traveller in Raipur during wedding season?",         a: "Wedding season in Chhattisgarh — roughly November through February — is the busiest period for tempo traveller booking in Raipur. Vehicles, especially the larger 16 and 20 seater options, get locked in weeks in advance. Book at least 3 to 4 weeks early during this period. Waiting until the last week almost always means either paying a higher rate or settling for a vehicle that wasn't your first choice." },
  { q: "Can a tempo traveller in Raipur handle long outstation trips comfortably?",          a: "Absolutely. Roads connecting Raipur to destinations like Jagdalpur, Bilaspur, Ambikapur, and Prayagraj are well travelled by outstation tempo travellers from Raipur regularly. A well maintained 12 or 16 seater with a reliable driver handles these routes without any trouble. For trips over 5 hours, consider upgrading to a luxury tempo traveller in Raipur — the air suspension and reclining seats make a genuine difference on longer drives." },
  { q: "Is there a tempo traveller available in Raipur for corporate office outings?",       a: "Yes and it is one of the most popular use cases. Corporate tempo traveller hire in Raipur works especially well for office team outings, company picnics, and employee transfers between locations. The 12 and 16 seater are the most commonly booked sizes for office groups. Many loyal customers in Raipur book on a regular basis." },
  { q: "What is the per km rate for an outstation tempo traveller from Raipur?",             a: "The standard outstation tempo traveller rate from Raipur starts at Rs 23 per km for a 12 seater. The per km charge applies to the full distance both ways, from Raipur to the destination and back. This rate includes fuel, driver allowance, toll taxes, and state tax for trips outside Chhattisgarh. No extra charges are added after the trip." },
  { q: "Can I hire a tempo traveller in Raipur for a Bastar jungle trip?",                   a: "Yes and it is one of the most scenic group travel experiences in Chhattisgarh. The route from Raipur to Jagdalpur through Bastar passes through dense forest roads, tribal villages, and natural waterfalls like Chitrakote and Tirathgarh. A 16 or 20 seater tempo traveller is the practical choice — the roads vary in quality and a well maintained vehicle with a driver who knows the route makes a real difference." },
  { q: "Do tempo travellers in Raipur come with a driver or is self drive available?",       a: "All tempo traveller rentals in Raipur come with a driver included in the fare. Self drive tempo travellers are not available — and for a group trip it makes far more sense to have a professional driver handle the route while everyone else actually enjoys the journey. Driver allowance is included in the quoted fare so there are no separate charges to worry about." },
  { q: "Is a 20 seater tempo traveller available in Raipur for school trips?",               a: "Yes. The 20 seater tempo traveller in Raipur is regularly booked for school excursions, college trips, and educational tours around Chhattisgarh. It fits the full group in one vehicle, which makes supervision easier and keeps logistics simple. For school bookings, confirm seat belts, vehicle condition, and driver experience before finalising." },
  { q: "What is the difference between a tempo traveller and a minibus in Raipur?",         a: "A tempo traveller in Raipur typically seats 9 to 20 people and is built for comfortable group travel with better seating, AC, and luggage space than a standard minibus. A minibus tends to be more basic — bench seating, limited AC, less luggage room. For group trips where comfort matters, a tempo traveller is the better choice every time. For very large groups of 25 or more, a minibus or full size bus starts making more sense." },
  { q: "Can I book a one way tempo traveller from Raipur to another city?",                  a: "Yes. One way tempo traveller booking from Raipur is available for outstation trips. However, most operators charge the return distance in the per km rate regardless of whether the vehicle physically returns — this is standard practice across the industry and worth knowing before comparing quotes. Always ask specifically whether the quoted rate is one way or both ways." },
  { q: "Are luxury tempo travellers available in Raipur for destination weddings?",          a: "Yes. Luxury tempo traveller hire in Raipur for weddings is increasingly popular — especially for ferrying guests between venues, hotels, and mandap locations across the city. The Mercedes Tempo Traveller and premium luxury options are available for wedding bookings in Raipur. A well presented luxury tempo traveller arriving on time sets the right tone before the event even begins." },
  { q: "What happens if the tempo traveller breaks down during an outstation trip?",          a: "A reliable tempo traveller service in Raipur will have a backup arrangement in place — either a replacement vehicle dispatched or roadside support organised quickly. Before booking any outstation trip, ask the operator directly about their breakdown policy. A company that has a clear answer is generally more trustworthy than one that dismisses the question. Breakdowns are rare with well maintained vehicles." },
  { q: "Is it cheaper to book a tempo traveller in Raipur directly or through an app?",     a: "Booking directly with a tempo traveller operator in Raipur is almost always cheaper than going through an aggregator app. Apps add a platform fee on top of the base fare, and the vehicle you get is not always the one pictured. Direct booking also gives you more room to negotiate on longer trips, confirm vehicle details upfront, and build a relationship with a reliable operator for repeat bookings." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                    city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-bhubaneshwar",              city: "Tempo Traveller in Bhubaneswar", type: "Odisha Temple Tours & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",      city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad",                 city: "Tempo Traveller in Ghaziabad", type: "NCR Outstation & Pilgrimage Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerRaipur() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Raipur to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Raipur&apos;s Trusted Tempo Traveller — Local Tours, Bastar, Rajim, Jagdalpur & Outstation Chhattisgarh</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link><span>/</span>
          <Link href="/" className="text-[#0f6ec8] hover:underline">Tempo Traveller</Link><span>/</span>
          <span>Tempo Traveller in Raipur</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Raipur</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Local Tours · Pilgrimage Circuits · Bastar · Jagdalpur · Wedding Transfers · Corporate Outings</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 26 Seater Available", "Luxury Options", "Fixed Fare · No Hidden Charges", "24/7 Support"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Raipur" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "Fixed Fare Always", sub: "No surprise additions at trip end" }, { title: "Assured Tempo Traveller", sub: "Confirmed vehicle at nominal rate" }, { title: "Proficient Drivers", sub: "Experienced, on-time, secure" }, { title: "24/7 Customer Assistance", sub: "Get service anytime without hurdle" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Raipur</strong> for local sightseeing, outstation trips to Bastar and Rajim, wedding guest transfers, corporate outings, and pilgrimage tours across Chhattisgarh. <strong>9 seater to 26 seater — including Luxury Tempo Traveller with reclining seats and air suspension.</strong> Fixed fare, proficient drivers, 24/7 support. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Raipur</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Yatra Travel India offers reliable sound solutions to the people. You can travel in Raipur without any sort of problem. We offer diverse services to fulfil your needs. You can travel with Tempo Travellers without any fuss. You can look for the finest facilities provided at a cheaper cost.</p>
          </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Raipur</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

{/* Comparison Table */}
<h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
  Tempo Traveller Options in Raipur — Full Comparison
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
      {RAIPUR_OPTIONS_TABLE.map((row, i) => (
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


          {/* Why Hire */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Why Hire Tempo Traveller Raipur?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {WHY_HIRE.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] transition-colors">
                <h4 className="font-bold text-[#0f6ec8] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Cab Service section */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-2">Cab Service — Wonderful</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">We are trying to make good experience of service to our customers. Whether you are planning for a trip or want to move with friends or you are hoping to organize a business trip — this all offers everlasting effect to your journey. Simply tell us about your needs and we will offer you the way-out. We will assure your best deals. You can book your trip with no pause.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-2">One of the Known Companies</h3>
            <p className="text-sm text-gray-700 leading-relaxed">Yatra Travel India — one of the finest companies in India providing Tempo Travellers on rent in Raipur — offers great facility to its customers. Cab booking is easy and you go through various websites to find the best.</p>
          </div>

          {/* Company Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {COMPANY_FEATURES.map(item => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-3 flex items-start gap-2">
                <span className="text-[#0f6ec8] mt-0.5 text-xs font-bold flex-shrink-0">✓</span>
                <div><p className="text-xs font-bold text-gray-900">{item.title}</p><p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 2: ook Tempo Traveller on Rent in Raipur ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#3835ff]">Book Tempo Traveller on Rent in Raipur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">The tempo traveller offers fine services as you find them suitable for daily tour. It is beneficial for your tour in the city and outstations. You will get several tour services. You can hire a Tempo Traveller on Rent in Raipur for Local sightseeing for local purposes. The drivers are more skilled in offering you services without any hassle. The tempo driver can be hired at any time without any complication. So you get stress- free services from our drivers. The services are open for seven days a week. You can get to know our experienced drivers well.</p>
        </div>

        {/* ══ SECTION 4: Which Size to Book ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Which Tempo Traveller Size Should Your Group Book in Raipur?</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">This is the question most people ask before confirming a booking — and it&apos;s worth thinking through properly rather than just guessing.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              { size: "9 Seater",  desc: "It works well for small groups of 6 to 9 people. Compact enough for city roads, comfortable enough for short outstation trips. Good choice for small family outings or intimate group travel where no one wants to feel like they're on a bus." },
              { size: "12 Seater", desc: "The most booked size, and for good reason. Fits 10 to 12 people comfortably with luggage, handles both local and outstation routes without any trouble, and gives you the best per-head cost when you split the fare across the group." },
              { size: "16 Seater", desc: "The go-to for medium groups of 13 to 16 people. Noticeably more space than a 12 seater, better luggage capacity, and a much more relaxed journey on longer routes. Popular with office groups, school trips, and extended family tours." },
              { size: "20 Seater", desc: "Built for large groups of 17 to 20 people. Everyone travels together in one vehicle, which makes logistics a lot simpler. Ideal for corporate events, wedding parties, and religious tours where keeping the group together actually matters." },
            ].map(item => (
              <div key={item.size} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <h3 className="font-bold text-[#0f6ec8] text-base mb-2">{item.size} Tempo Traveller in Raipur</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* All Seating Options */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Diverse Tempo Travellers for Trip — Multiple Seating Options</h3>
            <p className="text-sm text-gray-600 mb-3">The Tempo Travellers offers clients a great relaxation. Starting fare is 22 km / hour. The driving cost is Rupees 500 per day. The minimum charges per day are Rupees 250. Besides, you can look for well maintained interior with all facilities in car such as music system ac and more.</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {ALL_SEATING.map(seat => (
                <div key={seat} className="bg-white border border-blue-200 rounded-lg p-2 text-center">
                  <p className="text-xs font-bold text-[#0f6ec8]">{seat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Individual seating descriptions */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed">The <strong>9 Seater</strong> Tempo Traveller in Raipur offers best comforting rides for a small group of people. The 10 Seater offers you comforts to your trip. It is nice for small groups with some space. The<strong>12 Seater</strong> offers you well in comforts and suitable for a small band of people.<strong></strong>14 Seater Tempo Travellers offer best for medium group of people. <strong>15 Seater</strong>is of little bit higher in prices. This vehicle can provide relaxation while you are on ride. The <strong>16 Seater </strong>increases the space for sitting. It is suitable for
                  commercial trips or family tours.<strong>17 Seater</strong> is best for travels and can offer you a smooth journey. 18 Seater offers luxurious facilities like music system and wide space to keep your luggage. It is good. <strong>20 Seater</strong> offers fine comforts. Its rental price is little bit higher but it is worthy. <strong></strong>21 Seater has a seating capacity of 21 plus one which augments the leg space. The vehicle is in use and it can make your drive suitable. <strong>The 24 Seater </strong>is the second prime in Raipur having top score facilities. It can make your journey extraordinary. <strong>26 Seater</strong> offers you complete travel and it is hired for every purpose whether you going on a business trip or family trip.</p>
          </div>
        </div>

        {/* ══ SECTION 3: Luxury Tempo Traveller ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Luxury Tempo Traveller in Raipur — When You Want Something Better</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">A standard tempo traveller is fine. It fits everyone, handles the bags, and gets the job done. But sometimes you want the trip itself to feel good — not just get it over with. That&apos;s when a luxury tempo traveller makes sense.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Think about a wedding. You&apos;ve spent weeks planning every little detail. The last thing you want is your guests sitting in a hot, bumpy vehicle trying to straighten their clothes before they walk in. A luxury tempo traveller changes that completely. Everyone arrives comfortable, relaxed, and actually looking forward to the event.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Corporate trips are the same story. A 7 or 8 hour drive is a long time. And if the seats are stiff, the AC is weak, and the road is rough — those hours feel even longer. A luxury tempo traveller just makes it easier. The seats recline properly. The AC is strong and consistent. The ride is smooth even on bad stretches of road. Everyone has a charging point. You actually arrive feeling okay instead of exhausted.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-blue-800">The best part? When you split the cost across 10 or 12 people, the price difference is smaller than most people expect. And once a group travels in a luxury tempo traveller, going back to a standard one feels like a step down — especially for trips that actually matter.</p>
          </div>
        </div>

        {/* ══ SECTION 4: Tempo Features ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Tempo Features in Raipur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Several features offered by Tempo Travellers in Raipur:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TEMPO_FEATURES.map(feat => (
              <div key={feat} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <p className="text-sm font-bold text-blue-800">{feat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 5: How to Book ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">How to Book Tempo Traveller for Rent in Raipur</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {BOOK_STEPS.map(item => (
              <div key={item.step} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#0f6ec8] rounded-full flex items-center justify-center mb-2"><span className="text-white font-bold text-sm">{item.step}</span></div>
                <h4 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 6: Hire Spacious Budget Friendly ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Hire Tempo Traveller in Raipur — Spacious, Budget-Friendly and Always Punctual</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Getting a group of 10 or 12 people from one place to another in Raipur — it&apos;s more of a headache than it sounds. Here&apos;s the thing: booking multiple cabs sounds fine on paper until half your group is stuck in traffic in a different vehicle, someone&apos;s running late, and nobody can agree on which route to take. A tempo traveller just fixes all of that in one booking.</p>
            <p className="text-base text-gray-700 leading-relaxed">Whether it&apos;s a family function, an office outing, a wedding party, or a pilgrimage tour — hiring a tempo traveller in Raipur keeps everyone together, keeps the cost reasonable, and keeps the trip moving without unnecessary drama.</p>
          </div>

          {/* Why Rent Raipur */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Why Tempo Traveller for Rent in Raipur?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {WHY_RENT_RAIPUR.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] transition-colors">
                <h4 className="font-bold text-[#0f6ec8] text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 7: Must Travel Tourist Spots ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Must Travel — Most Popular Tourist Spots in & Around Raipur</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">If you are thinking about a trip and you are short in budget then you can contact Tempo Travellers. There are places you explore at an affordable rate. Hire a Tempo Traveller Booking in Raipur for Outstation Rides.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOURIST_PLACES.map(place => (
              <div key={place.name} className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 text-sm mb-2">{place.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{place.desc}</p>
              </div>
            ))}
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

        {/* Wedding Season Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Wedding Season Advance Booking:</strong> Wedding season in Chhattisgarh runs roughly <strong>November through February.</strong> Vehicles — especially the larger 16 and 20 seater options — get locked in weeks in advance. Book at least <strong>3 to 4 weeks early</strong> during this period. Waiting until the last week almost always means either paying a higher rate or settling for a vehicle that wasn&apos;t your first choice.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Raipur</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Raipur Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Local tours, Bastar jungle, pilgrimage circuits, wedding transfers, corporate outings — tell us your group size and where you&apos;re headed. We&apos;ll sort the rest. Call 9044019511.</p>
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
