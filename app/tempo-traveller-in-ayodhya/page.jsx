"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Ayodhya",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹22/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Ram Mandir Tour", "Small Groups"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Ayodhya", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹23/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Pushback Seats", "Family Pilgrimage", "Lucknow Trip"] },
  { badge: "13 Seater", title: "13 Seater Tempo Traveller in Ayodhya", img: "/images/13seater.jpg", specs: [{ label: "Seating Capacity", value: "13 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹24/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Temple Tours", "Group Travel", "Airport Transfer"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Ayodhya", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹26/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Extra Legroom", "Varanasi Trip", "Corporate Tours"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Ayodhya", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "20 Passengers + 1 Driver" }, { label: "Starting Fare", value: "₹30/km" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Max Luggage", "Wedding Groups", "Pilgrimage"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Ayodhya",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Premium AC", "LED Lighting", "Music System", "Charging Points"] },
  { badge: "Maharaja",  title: "Maharaja Tempo Traveller in Ayodhya",  img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Starting Fare", value: "On Request" }, { label: "Driving Charges", value: "₹500/day" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Sofa Seats", "Full Recline", "VIP Travel", "Grand Weddings"] },
];

const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Ayodhya",   capacity: "9 + Driver",     ac: "AC",         ideal: "Small families and groups - Ram Mandir darshan, short temple circuits, and local sightseeing in Ayodhya" },
  { vehicle: "12 Seater Tempo Traveller in Ayodhya",  capacity: "12 + Driver",    ac: "AC",         ideal: "Medium family groups - pilgrimage tours, Hanuman Garhi, Kanak Bhawan, and outstation to Lucknow and Varanasi" },
  { vehicle: "13 Seater Tempo Traveller in Ayodhya",  capacity: "13 + Driver",    ac: "AC",         ideal: "Medium groups - airport transfers, multi-temple darshan, and comfortable outstation travel from Ayodhya" },
  { vehicle: "16 Seater Tempo Traveller in Ayodhya",  capacity: "16 + Driver",    ac: "AC",         ideal: "Large groups - corporate tours, religious groups, wedding parties, and longer routes to Delhi and Prayagraj" },
  { vehicle: "20 Seater Tempo Traveller in Ayodhya",  capacity: "20 + Driver",    ac: "AC",         ideal: "Large pilgrimage and wedding groups - spacious seating and luggage space for multi-day religious tours from Ayodhya" },
  { vehicle: "Luxury Tempo Traveller in Ayodhya",     capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "VIP guests, senior citizens, wedding functions - soft pushback seats, LED lighting, music system, and charging points" },
  { vehicle: "Maharaja Tempo Traveller in Ayodhya",   capacity: "9–16 + Driver",  ac: "Premium AC", ideal: "Ultimate VIP travel, grand weddings, senior pilgrims - sofa seats, full recline, premium interiors, air suspension" },
];

const AIRPORT_TABLE = [
  { vehicle: "12 Seater Tempo Traveller", pickup: "₹2,000", drop: "₹2,000" },
  { vehicle: "13 Seater Tempo Traveller", pickup: "₹2,200", drop: "₹2,200" },
  { vehicle: "14 Seater Tempo Traveller", pickup: "₹2,200", drop: "₹2,200" },
  { vehicle: "16 Seater Tempo Traveller", pickup: "₹2,500", drop: "₹2,500" },
];

const ROUTES_TABLE = [
  { route: "Ayodhya to Varanasi",     dist: "~200 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Prayagraj",    dist: "~160 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Lucknow",      dist: "~135 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Delhi",        dist: "~640 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Gorakhpur",    dist: "~135 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Haridwar",     dist: "~660 km", vehicle: "12 or 16 Seater" },
  { route: "Ayodhya to Agra/Mathura", dist: "~480 km", vehicle: "12 or 16 Seater" },
];

const USE_TAGS = ["Ram Mandir Darshan Tour", "Hanuman Garhi Visit", "Kanak Bhawan Temple", "Saryu Ghat Aarti", "Ayodhya Local Sightseeing", "Airport Pickup & Drop", "Wedding Guest Transfers", "VIP Pilgrimage Group", "Ayodhya to Varanasi", "Ayodhya to Lucknow", "Family Pilgrimage Trip", "Corporate Group Tours", "Religious Festival Travel", "Senior Citizen Groups"];

const FEATURES = [
  { title: "Premium Pushback Seats",     desc: "Soft and wide pushback seats provide extra comfort and support for long pilgrimage journeys and temple circuits in and around Ayodhya." },
  { title: "Fully Air-Conditioned",      desc: "All tempo travellers are fully AC — keeps passengers comfortable during hot summers and ensures a refreshing atmosphere for long-distance travel." },
  { title: "Extra Legroom",              desc: "Wide aisles and generous legroom — senior citizens and families can travel comfortably without feeling cramped on Ayodhya pilgrimage routes." },
  { title: "Stylish Interiors",          desc: "Clean, modern interiors with soft LED lighting give a comfortable and peaceful travel environment — perfect for pilgrimage and group travel in Ayodhya." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for suitcases, devotional items, and gifts — perfect for multi-day pilgrimage tours and airport transfers in Ayodhya." },
  { title: "Smooth Suspension",          desc: "Superior suspension system built for highways — smooth and comfortable ride even on long routes like Ayodhya to Varanasi or Ayodhya to Delhi." },
  { title: "Entertainment & Charging",   desc: "Music systems, LED TVs, and mobile charging points in most tempo travellers — keeps passengers relaxed and connected during long spiritual journeys." },
  { title: "Verified & Polite Drivers",  desc: "Trained, verified drivers who know Ayodhya city roads, temple routes, and major highways — ensure safe, timely, and courteous travel for all groups." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Driver day allowance included", "Clean, well-maintained vehicle", "Driver accommodation (Multi-day trips)"];
const EXCLUDED = ["Toll tax charges (as per actual during the trip)", "State entry tax / permit charges (if applicable)", "Parking charges (as per actual at locations)", "Driver night allowance (₹500 for Tempo Traveller, if applicable)", "Ayodhya Airport parking charges (as per authority rules)"];

const BENEFITS = [
  { title: "Comfortable Travel for Pilgrims",     desc: "Tempo travellers seat 9 to 20 people comfortably. Families and pilgrim groups travel together in one vehicle, reducing confusion and ensuring everyone arrives at Ram Mandir and temples together." },
  { title: "Perfect for Senior Citizens",          desc: "Spacious interiors, reclining seats, and smooth AC make our tempo travellers ideal for elderly passengers on pilgrimage tours, Saryu Ghat aarti, and multi-temple darshan in Ayodhya." },
  { title: "Verified and Knowledgeable Drivers",  desc: "Our drivers know Ayodhya city roads, temple routes, Ram Mandir access points, and major highways well. They ensure on-time pickup, smooth travel, and safe return for every group." },
  { title: "Flexible for All Travel Needs",       desc: "From Ram Mandir darshan and airport transfers to long-distance outstation trips, our tempo travellers are versatile — ideal for short local trips and multi-day pilgrimage tours alike." },
  { title: "Cost Effective Group Travel",         desc: "Hiring a tempo traveller in Ayodhya is far more economical than multiple cars or autos. Save on fuel, parking, and coordination while providing premium comfort to your entire group." },
  { title: "Transparent Pricing Always",          desc: "At Yatra Travel India we provide complete fare details in advance — toll, parking, and driver allowance are clearly discussed. No hidden charges, no last-minute surprises." },
];

const OUTSTATION_ROUTES = [
  { title: "Ayodhya to Varanasi Tempo Traveller",  meta: ["~200 km", "3–4 Hours", "Popular Religious Route"],  desc: "Ayodhya to Varanasi is one of the most popular spiritual routes in North India. Whether you are combining Ram Mandir darshan with Kashi Vishwanath, or travelling with a pilgrimage group, our AC tempo travellers ensure a comfortable and smooth journey. Experienced drivers handle the Ayodhya to Varanasi route regularly." },
  { title: "Ayodhya to Prayagraj Tempo Traveller", meta: ["~160 km", "2–3 Hours", "Pilgrimage & Cultural"],    desc: "Book a tempo traveller from Ayodhya to Prayagraj for Sangam visits, Kumbh Mela travel, and pilgrimage tours. Fully AC, spacious vehicles with reclining seats make the journey comfortable for families and large groups. The driver handles all navigation so your group can relax and pray throughout the journey." },
  { title: "Ayodhya to Lucknow Tempo Traveller",   meta: ["~135 km", "2–3 Hours", "Business & Family"],       desc: "Ayodhya to Lucknow is a popular route for airport transfers, business travel, and family outings. Our 12 seater and 16 seater tempo travellers are well-maintained and AC-equipped. Book for one-way or round trips with experienced drivers who know this highway route well and ensure timely arrivals." },
  { title: "Ayodhya to Delhi Tempo Traveller",     meta: ["~640 km", "9–10 Hours", "Long Distance Corporate"], desc: "For long-distance group travel from Ayodhya to Delhi, our tempo travellers offer the best combination of comfort and value. Reclining seats, full AC, and luggage space make the overnight or long-day journey smooth and relaxing. Perfect for corporate groups, pilgrim tours, and families heading to Delhi." },
];

const WHY_CARDS = [
  { title: "Clean and Well-Maintained Vehicles",  desc: "All tempo travellers in Ayodhya are clean, well-maintained, fully air conditioned, and checked before every trip to ensure safe and comfortable pilgrimage travel." },
  { title: "Experienced and Verified Drivers",    desc: "Drivers know Ayodhya city roads, Ram Mandir access routes, and major highways. Travel without worry about navigation or traffic — especially for senior citizens." },
  { title: "Fair and Transparent Pricing",        desc: "9 seater to luxury — all at fair pricing with fuel, tolls, and driver allowance included. No hidden charges. Full cost clarity before you confirm your booking." },
  { title: "Easy Booking — Call or WhatsApp",     desc: "Book by call or WhatsApp on 9044019511. Share travel date, pickup location, and group size. Instant quote and confirmation in minutes. 24x7 support available." },
  { title: "Airport Pickup & Drop Available",     desc: "Dedicated tempo traveller service for Ayodhya Airport pickup and drop. Punctual arrival, clean vehicle, and professional driver for group airport transfers." },
  { title: "Multi-Day & Multi-City Tours",        desc: "Ayodhya to Varanasi, Prayagraj, Haridwar, or a full North India pilgrimage — fully customized multi-day tour packages available for families and large groups." },
];

const FAQS = [
  { q: "Which tempo traveller is best for Ayodhya group pilgrimage?",           a: "A 12 seater or 16 seater tempo traveller in Ayodhya is ideal for small and medium groups visiting Ram Mandir, Hanuman Garhi, Kanak Bhawan, and nearby temples." },
  { q: "Can I hire tempo traveller in Ayodhya for same-day return trips?",      a: "Yes, we provide same-day tempo traveller hire in Ayodhya for nearby cities like Varanasi, Prayagraj, Lucknow, and Gorakhpur. Book in advance to ensure availability." },
  { q: "Do you provide luxury tempo traveller for Ram Mandir darshan?",         a: "Yes, we offer luxury tempo traveller in Ayodhya with pushback seats and full AC for comfortable Ram Mandir pilgrimage travel and VIP group tours." },
  { q: "Is night halt allowed with tempo traveller booking in Ayodhya?",        a: "Yes, multi-day and night halt tempo traveller bookings in Ayodhya are available. Driver accommodation is included for multi-day trips at no extra charge." },
  { q: "Can I book tempo traveller in Ayodhya for senior citizens?",            a: "Absolutely. Our AC tempo travellers in Ayodhya are spacious, comfortable, and ideal for elderly passengers on pilgrimage tours and temple darshan circuits." },
  { q: "Do tempo travellers in Ayodhya have charging points?",                  a: "Yes, most of our tempo travellers in Ayodhya come with mobile charging points and reading lights — especially useful on long outstation pilgrimage routes." },
  { q: "Is tempo traveller available in Ayodhya during Ram Navami and Diwali?", a: "Yes, but advance booking is strongly recommended during Ram Navami, Diwali, and Makar Sankranti. Vehicles fill up fast during festival season in Ayodhya." },
  { q: "Can I hire tempo traveller from Ayodhya to multiple cities?",           a: "Yes, we offer fully customized multi-city tempo traveller tours from Ayodhya — Varanasi, Prayagraj, Lucknow, Delhi, Haridwar, and more as per your itinerary." },
  { q: "What is the tempo traveller fare for Ayodhya Airport pickup?",          a: "Airport pickup and drop fares start from ₹2,000 for a 12 seater tempo traveller. Fares vary by vehicle size. Call 9044019511 for an exact quote." },
  { q: "Are tempo travellers in Ayodhya suitable for long-distance travel?",    a: "Yes, our vehicles are ideal for long-distance journeys from Ayodhya with comfortable reclining seats, full AC, and large luggage space for multi-day trips." },
  { q: "Do you offer last-minute tempo traveller booking in Ayodhya?",          a: "Yes, last-minute tempo traveller hire in Ayodhya is possible subject to vehicle availability. We recommend booking at least 3–5 days in advance during peak festival season." },
  { q: "Is tempo traveller available for school or college tours in Ayodhya?",  a: "Yes, we provide tempo traveller hire in Ayodhya for educational tours, student pilgrimage trips, and cultural visits to Ram Mandir and Ayodhya heritage sites." },
  { q: "Can I pre-book tempo traveller in Ayodhya for future dates?", a: "Yes, advance reservations are accepted for future tempo traveller bookings in Ayodhya." },
  { q: "Is luggage space sufficient in tempo traveller Ayodhya?", a: "Yes, our tempo travellers have large luggage carriers suitable for pilgrimage and tour travel." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",   city: "Tempo Traveller in Delhi",   type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Kumbh, Pilgrimages & City Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru",     city: "Tempo Traveller in Bengaluru",     type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",      city: "Tempo Traveller in Agra",      type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-manali",    city: "Tempo Traveller in Manali",    type: "Mountain Routes & Adventure Tours" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerAyodhya() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Ayodhya to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Ayodhya&apos;s Trusted Tempo Traveller — Ram Mandir Darshan, Pilgrimage Tours, Lucknow, Varanasi and Delhi</p>
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
          <span>Tempo Traveller in Ayodhya</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Ayodhya</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Ram Mandir Darshan · Hanuman Garhi · Pilgrimage Tours · Varanasi · Lucknow · Delhi · Airport Transfer</p>
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
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Ayodhya" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label><input value={toCity} onChange={e => setToCity(e.target.value)} placeholder="Destination" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label><select value={vtype} onChange={e => setVtype(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]"><option>Select Vehicle</option>{VEHICLES.map(v => <option key={v.badge}>{v.title}</option>)}</select></div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">Search</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[{ title: "On-Time Pickup", sub: "Pickup from your exact location" }, { title: "Clean and Well Maintained", sub: "Checked before every trip" }, { title: "Transparent Pricing", sub: "Fuel, toll, driver allowance included" }, { title: "Verified Drivers", sub: "Know Ayodhya routes and highways" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Ayodhya</strong> for Ram Mandir darshan, pilgrimage tours, family trips, wedding guest transfers, and outstation travel to Varanasi, Prayagraj, Lucknow, and Delhi. <strong>9 seater to 20 seater available — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean, pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* Why Millions Visit Ayodhya - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Why Millions of Tourists and Pilgrims Visit Ayodhya Every Year</h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ayodhya is popular among visitors because it holds a deep spiritual, cultural, and historical significance that touches the hearts of millions of people across India and the world. Known as the birthplace of Lord Shri Ram, Ayodhya is one of the most important pilgrimage destinations in Hinduism.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">One of the biggest reasons people visit Ayodhya is the <strong>Shri Ram Janmabhoomi (Ram Mandir)</strong>. Devotees come here to seek blessings, offer prayers, and experience the peaceful and devotional atmosphere. The temple has become a symbol of faith and devotion, attracting pilgrims throughout the year.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ayodhya is also home to many other sacred temples such as Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple, and Dashrath Mahal, making it a perfect place for a complete spiritual journey. Visitors often spend days exploring these holy sites and participating in religious rituals.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Apart from its religious importance, Ayodhya has a rich mythological and historical background. The city is closely linked to the Ramayana, which makes it special for those interested in Indian culture, traditions, and ancient stories. Walking through the ghats, temples, and old streets gives visitors a glimpse into India&apos;s timeless heritage.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Another reason Ayodhya is popular is its calm and spiritual environment. Many people visit not just for worship, but also to find peace, meditate, and take a break from busy city life. The evening aarti on the Sarayu River is a beautiful experience that leaves a lasting impression on visitors.</p>
            <p className="text-base text-gray-700 leading-relaxed">With better roads, railway connectivity, and improved tourism facilities, Ayodhya has become easier to reach, making it a preferred destination for families, senior citizens, and group travelers. In simple words, Ayodhya is popular because it offers a unique mix of faith, history, culture, and inner peace, making every visit meaningful and memorable.</p>
          </div>
        </div>

        <ST id="services">Tempo Traveller Options in Ayodhya</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Ayodhya Tempo Traveller Rental - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Ayodhya Tempo Traveller Rental | 12 Seater, 16 Seater & Luxury Vehicle</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Looking for a reliable tempo traveller rental in Ayodhya for pilgrimage, family trips, or group travel? Yatra Travel India provides safe, comfortable, and affordable tempo traveller hire in Ayodhya with multiple seating options to suit every group size. From 12 seater tempo traveller Ayodhya and 16 seater tempo traveller Ayodhya to luxury and Maharaja tempo traveller models, we have the perfect vehicle for your journey.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Whether you are visiting the sacred Ram Mandir, planning a multi temple pilgrimage, organizing a family vacation, or traveling outstation from Ayodhya, our well-maintained AC tempo travellers ensure a smooth, relaxed, and hassle free ride. Each vehicle is designed with comfortable pushback seats, ample legroom, clean interiors, powerful air conditioning, and enough luggage space for long and short trips alike.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Our tempo traveller hire service in Ayodhya is ideal for:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">1. Ram Mandir darshan and temple visits</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">2. Pilgrimage and religious tours</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">3. Family outings and weekend trips</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">4. Wedding guest transportation</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">5. Corporate travel and group tours</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <span className="text-[#0f6ec8] mt-1">✓</span> */}
                <span className="text-sm text-gray-700">6. Local sightseeing and outstation journeys</span>
              </li>
            </ul>
          </div>
          
          <p className="text-base text-gray-600 leading-relaxed mb-4">We believe in transparent and fair pricing. Our tempo traveller price in Ayodhya is competitive, with no hidden charges. You receive complete cost details in advance, helping you plan your travel budget with confidence.</p>
          <p className="text-base text-gray-600 leading-relaxed">Booking a tempo traveller in Ayodhya with us is quick and easy. Simply call, WhatsApp, or book online by sharing your travel date, pickup location, destination, and number of passengers. Our team will provide an instant quote and confirmation. With experienced and verified drivers, well-serviced vehicles, and 24×7 customer support, Yatra Travel India is your trusted partner for tempo traveller rental in Ayodhya.</p>
        </div>

        {/* Comfortable and Well-Maintained - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">Comfortable and Well-Maintained Tempo Travellers in Ayodhya</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">At Yatra Travel India, we take pride in offering a fleet of modern and fully air conditioned tempo travellers in Ayodhya. Our tempo travellers in Ayodhya are clean, well kept, and perfect for both city travel and long outstation journeys. Whether you are visiting Ram Mandir, planning a family trip, or traveling with a group, our vehicles are designed to make your journey pleasant and relaxed.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Each tempo traveller comes with comfortable pushback seats, good legroom, strong air-conditioning, and neat interiors. There is enough space for luggage, so you don&apos;t have to compromise on comfort, even on longer trips. We make sure every vehicle is checked and cleaned before each trip, so you always step into a fresh and well-maintained vehicle.</p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Vehicle Options Available:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#0f6ec8] mt-1">•</span>
                <span className="text-sm text-gray-700"><strong>12 Seater Tempo Traveller in Ayodhya</strong> – Best for families and small groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f6ec8] mt-1">•</span>
                <span className="text-sm text-gray-700"><strong>16 Seater Tempo Traveller in Ayodhya</strong> – Suitable for medium-sized groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f6ec8] mt-1">•</span>
                <span className="text-sm text-gray-700"><strong>Luxury & Maharaja Tempo Traveller</strong> – Ideal for weddings and premium travel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0f6ec8] mt-1">•</span>
                <span className="text-sm text-gray-700">Bigger vehicles available for large groups on request</span>
              </li>
            </ul>
          </div>
          
          <p className="text-base text-gray-600 leading-relaxed">All our tempo travellers are driven by experienced and verified drivers who understand local roads and major routes well. With Yatra Travel India, you can travel with confidence, knowing your comfort and safety are always our priority.</p>
        </div>

        {/* Hire for Outstation - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Hire Tempo Traveller in Ayodhya for Outstation Travel</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Looking to hire tempo traveller in Ayodhya for outstation trips? Yatra Travel India provides trusted and affordable tempo traveller rental in Ayodhya for long-distance travel, pilgrimage tours, family outings, and group journeys.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">We offer clean and fully AC tempo traveller on rent in Ayodhya for one-way and round trips to popular destinations like Varanasi, Prayagraj, Lucknow, Delhi, Gorakhpur, and other nearby cities. Our service is ideal for people searching for tempo traveller booking Ayodhya, tempo traveller hire near me, and luxury tempo traveller Ayodhya.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Why choose our Tempo Traveller Service in Ayodhya:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                {/* <span className="text-blue-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Affordable tempo traveller price in Ayodhya</span>
              </div>
              <div className="flex items-start gap-2">
                {/* <span className="text-purple-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Fully AC and comfortable vehicles</span>
              </div>
              <div className="flex items-start gap-2">
                {/* <span className="text-purple-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Experienced and verified drivers</span>
              </div>
              <div className="flex items-start gap-2">
                {/* <span className="text-purple-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Easy booking by call or WhatsApp</span>
              </div>
              <div className="flex items-start gap-2">
                {/* <span className="text-purple-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Best for family trips and corporate travel</span>
              </div>
              <div className="flex items-start gap-2">
                {/* <span className="text-purple-600 mt-1">✓</span> */}
                <span className="text-sm text-gray-700">Perfect for pilgrimage tours</span>
              </div>
            </div>
          </div>
          
          <p className="text-base text-gray-600 leading-relaxed">Book your tempo traveller from Ayodhya for outstation travel today with Yatra Travel India and enjoy a safe, smooth, and comfortable journey. Our experienced drivers ensure safe highway travel and timely arrivals.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller in Ayodhya — Comfortable Group Travel for Pilgrimage and Tours</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-3">Ayodhya is one of India&apos;s most sacred cities — the birthplace of Lord Shri Ram and home to the magnificent Ram Mandir, Hanuman Garhi, Kanak Bhawan, and dozens of ancient temples. Millions of devotees, families, and pilgrims visit Ayodhya every year for darshan, spiritual peace, and religious tours. Travelling in multiple autos or cars can be exhausting and disorganised. A tempo traveller in Ayodhya keeps your entire group together, comfortable, and on time.</p>
          <p className="text-base text-gray-600 leading-relaxed">Yatra Travel India provides tempo traveller hire in Ayodhya with fully air-conditioned vehicles, comfortable pushback seats, ample luggage space, and experienced local drivers. Whether you are planning a short Ram Mandir darshan circuit, a multi-temple pilgrimage, an airport transfer, or a long-distance outstation trip to Varanasi, Lucknow, or Delhi — our tempo travellers make every journey smooth, safe, and affordable.</p>
        </div>

        <ST>Tempo Traveller Options in Ayodhya — Full Comparison</ST>
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

        <ST border="border-green-500">Tempo Traveller Airport Pickup & Drop — Ayodhya Airport</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead><tr className="bg-[#0f6ec8]">{["Vehicle Option", "Airport Pickup Price", "Airport Drop Price"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
            <tbody>
              {AIRPORT_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.pickup}</td>
                  <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.drop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-4 pt-2">* Ayodhya Airport parking charges payable as per airport authority rules. Fares are one-way.</p>

        {/* Tempo Traveller Rent Price List - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Tempo Traveller Rent in Ayodhya – Affordable Price List</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Yatra Travel India offers budget-friendly and transparent tempo traveller rent in Ayodhya for local trips, outstation travel, and pilgrimage tours. If you are searching for tempo traveller hire in Ayodhya, tempo traveller booking Ayodhya, or tempo traveller on rent in Ayodhya, we provide the best options at competitive rates.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Our starting tempo traveller price in Ayodhya:</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">9 Seater Tempo Traveller in Ayodhya</span>
                <span className="text-sm font-bold text-blue-600">₹22 per km</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">12 Seater Tempo Traveller Fare in Ayodhya</span>
                <span className="text-sm font-bold text-blue-600">₹23 to ₹25 per km</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="text-sm font-semibold text-gray-700">16 Seater Urbania Tempo Traveller Ayodhya</span>
                <span className="text-sm font-bold text-blue-600">₹26 to ₹28 per km</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-semibold text-gray-700">20 Seater Tempo Traveller Hire in Ayodhya</span>
                <span className="text-sm font-bold text-blue-600">₹30 per km</span>
              </div>
            </div>
          </div>
          
          <p className="text-base text-gray-600 leading-relaxed mb-3">Toll tax, parking charges, and driver allowance are clearly discussed in advance. No hidden charges.</p>
          <p className="text-base text-gray-600 leading-relaxed">We also provide customized Ayodhya pilgrimage tour packages, Ram Mandir darshan travel plans, and group tour packages for families, corporate groups, and travel agents.</p>
        </div>

        <ST border="border-green-500">Tempo Traveller Hire in Ayodhya — Key Outstation Routes</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-2">
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


        {/* Best Time to Visit Ayodhya - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-teal-500">Best Time to Visit Ayodhya with Family – Plan Your Trip</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Ayodhya is one of the most sacred cities in India and a popular destination for family trips, Ram Mandir darshan, and pilgrimage tours. If you are planning to visit Ayodhya with family, choosing the right season makes your journey more comfortable, safe, and enjoyable.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 text-base mb-3">October to March</h3>
              <p className="text-sm font-semibold text-gray-700 mb-2">Perfect Season for Family Visit</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Pleasant and cool weather, ideal for sightseeing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Comfortable for Ram Mandir darshan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Great for senior citizens and children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Peak season for pilgrimage tours</span>
                </li>
              </ul>
              <p className="text-xs text-blue-700 mt-3 font-medium">Tip: Book your tempo traveller early to avoid last-minute hassle</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 text-base mb-3">April to June</h3>
              <p className="text-sm font-semibold text-gray-700 mb-2">Summer Travel in Ayodhya</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Summers are hot but manageable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Best to travel in morning or evening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">AC tempo traveller ensures cool ride</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Ideal for short trips and overnight stays</span>
                </li>
              </ul>
              <p className="text-xs text-blue-700 mt-3 font-medium">Avoid afternoon travel during hottest months</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 text-base mb-3">July to September</h3>
              <p className="text-sm font-semibold text-gray-700 mb-2">Monsoon Visits</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Monsoon brings freshness to Ayodhya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Less crowded than peak season</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Greenery around temples is pleasant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-xs">✓</span>
                  <span className="text-xs text-gray-600">Experienced drivers ensure safe travel</span>
                </li>
              </ul>
              <p className="text-xs text-blue-700 mt-3 font-medium">Smooth and safe travel even in rainy conditions</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-800 text-base mb-3">Festival Season – Experience Ayodhya at Its Best</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">Ayodhya is magical during festivals like Ram Navami, Diwali, and Makar Sankranti with special prayers, cultural events, and decorations.</p>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
              <p className="text-xs text-yellow-800 font-semibold">High demand for hotels and transport. Early booking of tempo traveller in Ayodhya is recommended for stress-free travel.</p>
            </div>
          </div>
        </div>

        {/* Things to Know Before Booking - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-indigo-500">Things to Know Before Booking Tempo Traveller in Ayodhya</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Planning a trip to Ayodhya? Whether it&apos;s for Ram Mandir darshan, family travel, pilgrimage tours, wedding groups, or outstation trips, hiring a tempo traveller in Ayodhya is the most comfortable and convenient option. Here&apos;s everything you should know before booking your tempo traveller hire in Ayodhya.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">1</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Choose the Right Tempo Traveller Size</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• 12 Seater – Small families and group tours</li>
                <li className="text-xs text-gray-600">• 16 Seater – Medium-sized groups</li>
                <li className="text-xs text-gray-600">• Luxury/Maharaja – VIP travel or special occasions</li>
                <li className="text-xs text-gray-600">• 20 Seater/Volvo – Large pilgrimage groups</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">2</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Check Vehicle Features for Comfort</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• Fully air-conditioned (AC) interiors</li>
                <li className="text-xs text-gray-600">• Pushback and reclining seats</li>
                <li className="text-xs text-gray-600">• Spacious luggage area</li>
                <li className="text-xs text-gray-600">• LED lights, music system</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">3</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Transparent Pricing</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• Confirm fare before booking</li>
                <li className="text-xs text-gray-600">• Check if toll and parking included</li>
                <li className="text-xs text-gray-600">• Verify driver allowance details</li>
                <li className="text-xs text-gray-600">• Avoid hidden costs</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">4</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Plan Your Route</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• Ayodhya → Varanasi</li>
                <li className="text-xs text-gray-600">• Ayodhya → Lucknow</li>
                <li className="text-xs text-gray-600">• Ayodhya → Delhi</li>
                <li className="text-xs text-gray-600">• Ayodhya → Prayagraj / Haridwar</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">5</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Professional and Verified Drivers</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• Verified and trained drivers</li>
                <li className="text-xs text-gray-600">• Know local roads and highways</li>
                <li className="text-xs text-gray-600">• Ensure safe and punctual journey</li>
                <li className="text-xs text-gray-600">• Polite and professional service</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-indigo-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold">6</span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Easy Booking Options</h3>
              </div>
              <ul className="space-y-2 ml-11">
                <li className="text-xs text-gray-600">• Book via call or WhatsApp</li>
                <li className="text-xs text-gray-600">• Share pickup, destination, date</li>
                <li className="text-xs text-gray-600">• Instant quote and confirmation</li>
                <li className="text-xs text-gray-600">• Customized pilgrimage packages</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black-600 font-bold">7</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">Plan Ahead During Festivals and Peak Seasons</h3>
                <p className="text-xs text-gray-700 leading-relaxed">Festivals like Ram Navami, Diwali, and Makar Sankranti attract large crowds. Book tempo traveller in Ayodhya at least 3–5 days in advance. Luxury or Maharaja tempo traveller Ayodhya is recommended for VIPs or senior citizens.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Most Booked Routes - NEW SECTION FROM PDF */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Most Booked Tempo Traveller Routes from Ayodhya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Ayodhya to Varanasi", desc: "A favorite route for temple visits and spiritual journeys. Perfect for families and groups who want a relaxed and smooth ride." },
              { title: "Ayodhya to Lucknow", desc: "Ideal for business meetings, shopping trips, and weekend travel. Reliable service for comfortable AC travel." },
              { title: "Ayodhya to Delhi", desc: "Best for long distance journeys, group tours, and pilgrimage travel. Spacious seating and comfortable AC travel." },
              { title: "Ayodhya to Gorakhpur", desc: "Suitable for short outstation trips and family visits. 12 seater tempo traveller and bigger vehicles available." },
              { title: "Ayodhya to Prayagraj", desc: "Popular for cultural tours and student groups. Safe and convenient travel for all group sizes." },
              { title: "Ayodhya to Haridwar & Rishikesh", desc: "Perfect for spiritual tours and group pilgrimages. Comfortable journey throughout the route." },
              { title: "Ayodhya to Agra, Mathura & Vrindavan", desc: "Great for sightseeing and heritage trips. Premium group experiences with luxury options." },
              { title: "Ayodhya Airport Pickup/Drop", desc: "Group transport to or from the airport. Punctual pickups and smooth rides for airport transfers." },
            ].map((route, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-5 hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{route.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        <ST>Tempo Traveller for Ram Mandir Darshan in Ayodhya</ST>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-base text-gray-600 leading-relaxed mb-4">Planning to visit Shri Ram Mandir in Ayodhya with your family or group? Travel comfortably with our tempo traveller for Ram Mandir darshan in Ayodhya. Whether you are visiting for the first time or returning for a spiritual retreat, our clean AC tempo travellers ensure you arrive fresh, relaxed, and on time for your prayers.</p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">Our trained and local drivers know the routes around Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat, and all major temples in Ayodhya. They ensure on-time pickup, smooth drop, and safe travel, so you can focus entirely on your darshan and spiritual experience without worrying about traffic or parking.</p>
          <p className="text-base text-gray-600 leading-relaxed">We provide different vehicle options like 9 seater, 12 seater, 16 seater, and luxury tempo traveller in Ayodhya, making it easy to choose the right vehicle based on your group size and comfort preference. Book by call or WhatsApp on 9044019511 for instant confirmation.</p>
        </div>

        <ST>Features of Our Tempo Travellers in Ayodhya</ST>
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

        <ST>Why Choose Yatra Travel India for Tempo Traveller in Ayodhya</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map(b => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <ST border="border-[#ff6b35]" id="attractions">Popular Outstation Routes from Ayodhya</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map(r => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{r.meta.map(m => <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>)}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <ST>Why Book Tempo Traveller in Ayodhya with Yatra Travel India</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map(w => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Peak Season Advance Booking Essential:</strong> Ayodhya receives millions of visitors during <strong>Ram Navami, Diwali, and Makar Sankranti.</strong> Booking <strong>3 to 5 days in advance</strong> is recommended during normal season. During peak festivals, book <strong>1 to 2 weeks ahead</strong> to secure your preferred vehicle.</p>
        </div>

        <ST>Frequently Asked Questions — Tempo Traveller in Ayodhya</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Ayodhya Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Ram Mandir darshan, pilgrimage tours, airport transfers, Varanasi, Lucknow, Delhi — call us with your group size and travel date. We handle everything else. Dial 9044019511.</p>
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
