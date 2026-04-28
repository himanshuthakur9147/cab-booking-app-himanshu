"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import RouteLoader from "@/components/Loader/RouteLoader";
import { useBooking } from "@/context/BookingContext";
import dynamic from "next/dynamic";
const BookingTabsDynamic = dynamic(() => import("@/components/BookingTabs"), { ssr: false });
import {
FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus,
FaCheckCircle, FaMapMarkerAlt, FaStar, FaRoad,
FaInfoCircle, FaSnowflake, FaCouch, FaMusic,
FaUserTie, FaTools, FaHeadset, FaClock,
} from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";

const SCHEMA = {
"@context": "https://schema.org",
"@graph": [
{
"@type": "Service",
"@id": "https://www.yatratravelindia.com/tempo-traveller-varanasi-to-ayodhya#service",
"url": "https://www.yatratravelindia.com/tempo-traveller-varanasi-to-ayodhya",
"name": "Varanasi to Ayodhya Tempo Traveller | Yatra Travel India",
"description": "Book tempo traveller from Varanasi to Ayodhya for Ram Janmabhoomi darshan. 9 to 20 seater AC vehicles with fixed all-inclusive fares.",
"provider": {
"@type": "LocalBusiness",
"@id": "https://www.yatratravelindia.com/#business",
"name": "Yatra Travel India",
"url": "https://www.yatratravelindia.com",
"telephone": "+91-9044019511",
},
"areaServed": { "@type": "City", "name": "Varanasi" },
"serviceType": "Tempo Traveller Rental",
},
{
"@type": "FAQPage",
"@id": "https://www.yatratravelindia.com/tempo-traveller-varanasi-to-ayodhya#faq",
"mainEntity": [
{ "@type": "Question", "name": "How much does a tempo traveller from Varanasi to Ayodhya cost?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller from Varanasi to Ayodhya starts at Rs 14,000 for a round trip. One way starts at Rs 7,500. All fares include fuel, tolls, parking and driver allowance." } },
{ "@type": "Question", "name": "How far is Varanasi to Ayodhya?", "acceptedAnswer": { "@type": "Answer", "text": "Varanasi to Ayodhya is 200 km via NH19 and NH28. Drive time is 3.5 to 4 hours." } },
{ "@type": "Question", "name": "Are phones allowed in Ram Janmabhoomi?", "acceptedAnswer": { "@type": "Answer", "text": "No. Mobile phones are strictly not permitted inside Ram Janmabhoomi complex at any security point." } },
],
},
],
};

const VEHICLES = [
{
badge: "9 Seater",
title: "9 Seater Tempo Traveller from Varanasi to Ayodhya",
img: "/images/9seater.jpg",
specs: [
{ label: "Seating Capacity", value: "6 to 9 Passengers + 1 Driver" },
{ label: "Starting Fare", value: "Rs 12,000 onwards" },
{ label: "Best For", value: "Small families, 6 to 8 people" },
{ label: "Facility", value: "AC, Pushback Seat, Music System" },
],
tags: ["Full AC", "Pushback Seats", "Small Groups", "Pilgrimage"],
},
{
badge: "12 Seater",
title: "12 Seater Tempo Traveller from Varanasi to Ayodhya",
img: "/images/12seater.jpg",
specs: [
{ label: "Seating Capacity", value: "10 to 12 Passengers + 1 Driver" },
{ label: "Starting Fare", value: "Rs 14,000 onwards" },
{ label: "Best For", value: "Most popular for family pilgrimages" },
{ label: "Facility", value: "AC, Pushback Seat, Music System" },
],
tags: ["Full AC", "Most Popular", "Family Groups", "Pilgrimage"],
},
{
badge: "16 Seater",
title: "16 Seater Tempo Traveller from Varanasi to Ayodhya",
img: "/images/16seater.jpg",
specs: [
{ label: "Seating Capacity", value: "13 to 16 Passengers + 1 Driver" },
{ label: "Starting Fare", value: "Rs 15,000 onwards" },
{ label: "Best For", value: "Extended families and religious groups" },
{ label: "Facility", value: "AC, Pushback Seat, Music System" },
],
tags: ["Full AC", "Extra Legroom", "Large Groups", "Religious Tours"],
},
{
badge: "20 Seater",
title: "20 Seater Tempo Traveller from Varanasi to Ayodhya",
img: "/images/20seater.jpg",
specs: [
{ label: "Seating Capacity", value: "17 to 20 Passengers + 1 Driver" },
{ label: "Starting Fare", value: "Rs 17,000 onwards" },
{ label: "Best For", value: "Joint families and temple trust groups" },
{ label: "Facility", value: "AC, Pushback Seat, Music System" },
],
tags: ["Full AC", "Max Capacity", "Temple Groups", "Joint Families"],
},
{
badge: "Luxury",
title: "Luxury Tempo Traveller from Varanasi to Ayodhya",
img: "/images/maharaja.jpg",
specs: [
{ label: "Seating Capacity", value: "9 to 16 Passengers + 1 Driver" },
{ label: "Starting Fare", value: "Rs 19,000 onwards" },
{ label: "Best For", value: "Elderly passengers, premium comfort" },
{ label: "Facility", value: "Reclining Seats, Air Suspension, Multi-Zone AC" },
],
tags: ["Premium AC", "Air Suspension", "Elderly Friendly", "Luxury"],
},
];

const FARE_TABLE = [
{ type: "9 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "6 to 9 people", fare: "Rs 12,000 onwards" },
{ type: "12 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "10 to 12 people", fare: "Rs 14,000 onwards" },
{ type: "16 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "13 to 16 people", fare: "Rs 15,000 onwards" },
{ type: "20 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "17 to 20 people", fare: "Rs 17,000 onwards" },
{ type: "Luxury Tempo Traveller from Varanasi to Ayodhya", capacity: "9 to 16 people", fare: "Rs 19,000 onwards" },
];

const ROUTE_TABLE = [
{ detail: "Distance", info: "200 km (actual 210 to 220 km with city approaches)" },
{ detail: "Drive Time", info: "3.5 to 4 hours (4 to 5 hrs with stops/traffic)" },
{ detail: "Route", info: "NH19 east to Sultanpur, then NH330/NH28 via Faizabad (Rama Path)" },
{ detail: "Road Condition", info: "Excellent 4 to 6 lane national highways; smooth asphalt, well-lit" },
{ detail: "Best Departure Time", info: "5:00 to 5:30 AM for day trip (reach Ayodhya by 9 to 10 AM)" },
{ detail: "Best Return Time", info: "5:00 PM from Ayodhya (arrive Varanasi 9 to 10 PM)" },
{ detail: "Tolls and Fuel Stops", info: "3 to 4 tolls (approx Rs 400 to 500 total, included); dhabas at Sultanpur and Faizabad" },
{ detail: "Key Landmarks", info: "Sultanpur markets, Faizabad (Nageshwarnath Temple), Ayodhya Ram Path" },
];

const ATTRACTIONS = [
{
name: "Hanuman Garhi",
subtitle: "The Beginning",
desc: "Every serious Ayodhya pilgrimage begins here, not at Ram Janmabhoomi. 76 steps cut into the hillside lead to the most recognisable temple on the Ayodhya skyline. Visiting Hanuman before Ram darshan is the correct sequence most devoted pilgrims follow. Allow a full hour.",
tip: "Palanquin carriers are available at the base for elderly group members.",
},
{
name: "Ram Janmabhoomi",
subtitle: "The Reason Most Groups Are Here",
desc: "The Ram Lalla darshan at Ram Janmabhoomi is the centrepiece of this pilgrimage. Queue time before 10 AM on weekdays runs 1 to 2 hours on a normal day. Three hours is the right allocation for the full visit including security check, queue, darshan, and exit. Phones are strictly not permitted inside.",
tip: "Leave phones in the tempo traveller. Traditional dress required. Shorts and sleeveless clothing are turned away.",
},
{
name: "Kanak Bhawan",
subtitle: "The One That Surprises Every Group",
desc: "Five minutes from Ram Janmabhoomi on foot. The temple gifted by Queen Kaikeyi to Sita after her marriage to Lord Ram. Interiors painted gold, quieter and more intimate than the main complex. The stop most groups are glad they included when they initially considered skipping it.",
tip: "Allow 30 to 45 minutes. Go in without rushing.",
},
{
name: "Saryu Ghat",
subtitle: "Where the Day Settles",
desc: "The river where Lord Ram is believed to have taken his final departure. Ram ki Paidi is the most accessible ghat for groups arriving by tempo traveller. A boat ride gives a perspective on Ayodhya no road-based stop provides. The late afternoon light on the Saryu is deeply moving.",
tip: "Allow 30 to 45 minutes. Do not treat it as a quick box to tick before the drive home.",
},
];

const FEATURES = [
{ icon: <FaSnowflake />, title: "Full Air Conditioning", desc: "Fully working AC to keep you comfortable during the entire 4-hour Varanasi to Ayodhya journey both ways." },
{ icon: <FaCouch />, title: "Comfortable Pushback Seats", desc: "Reclining seats for maximum comfort during long temple visits and the highway journey each way." },
{ icon: <FaMusic />, title: "Music System", desc: "High-quality music system and large windows with sliding curtains for a relaxed travel experience." },
{ icon: <FaUserTie />, title: "Professional Drivers", desc: "Experienced drivers who know the Varanasi to Ayodhya route via NH19 and NH28 and ensure safe on-time travel." },
{ icon: <FaMapMarkerAlt />, title: "Flexible Stops", desc: "Stop at temples, ghats, and attractions at your own pace without any time pressure." },
{ icon: <FaTools />, title: "Clean and Well-Maintained", desc: "All vehicles sanitised and regularly serviced for your health, safety, and comfort on every trip." },
{ icon: <FaRoad />, title: "Transparent Pricing", desc: "Affordable rates with no hidden charges. Fare confirmed at booking is the fare paid on return." },
{ icon: <FaHeadset />, title: "24/7 Customer Support", desc: "Round-the-clock support team available to assist with any queries before and during your trip." },
];

const INCLUDED = [
"Base fare of Tempo Traveller",
"Fuel charges included",
"Driver day allowance included",
"Clean, well-maintained vehicle",
"Driver Accommodation (Multi-day trips)",
];

const EXCLUDED = [
"Toll tax charges (as per actual during the trip)",
"State entry tax / permit charges (if applicable)",
"Parking charges (as per actual at locations)",
"Driver night allowance (Rs 500, if applicable)",
"Luggage carrier charges",
];

const PACKAGES = [
{
days: "One Day",
color: "bg-blue-50 border-blue-200",
headerColor: "text-[#0f6ec8]",
desc: "Works for groups that have already spent time in Varanasi and are adding Ayodhya as a focused pilgrimage extension. 5 AM departure covers Hanuman Garhi, Ram Janmabhoomi, Kanak Bhawan, and Saryu Ghat. Back in Varanasi by 9 PM.",
},
{
days: "Two Days",
color: "bg-orange-50 border-orange-200",
headerColor: "text-orange-600",
desc: "Day one in Varanasi: Kashi Vishwanath darshan, morning Ganga boat ride, Dashashwamedh Ganga Aarti. Day two: tempo traveller departs 5 AM for the full Ayodhya circuit. Neither city feels squeezed in.",
},
{
days: "Three Days",
color: "bg-green-50 border-green-200",
headerColor: "text-green-600",
desc: "Two full days in Varanasi. One full day in Ayodhya. Return on day four. Most groups who do it this way say they would not change the structure. Multi day 12 seater packages start at Rs 25,000 with driver accommodation included.",
},
];

const CHECKLIST = [
{ title: "Phones sorted", desc: "Everyone needs to know that phones stay in the tempo traveller at Ram Janmabhoomi. A five-minute briefing the night before saves 20 minutes of confusion at the temple gate." },
{ title: "Clothing checked", desc: "Traditional dress for every group member. The Ram Janmabhoomi security team turns away pilgrims in shorts and sleeveless clothing." },
{ title: "Cash in small denominations", desc: "Palanquin at Hanuman Garhi, boat at Saryu, prasad at Kanak Bhawan. Rs 10, Rs 20, and Rs 50 notes make every stop easier." },
{ title: "One person leading the group", desc: "Through the security check, through the queue, through the exit. One designated coordinator means every stop takes half the time." },
{ title: "5 AM confirmed with the driver", desc: "Not approximately 5. Not 5:15. 5 AM. The group moving at 5 AM is in the good version of this day." },
];

const FAQS = [
{ q: "How do I book a tempo traveller from Varanasi to Ayodhya?", a: "Call or WhatsApp Yatra Travel India on 9044019511. Share the group size, travel date, and preferred departure time. Confirmed on the same call with vehicle details, driver name, pickup time, and fixed all-inclusive fare. No advance payment required." },
{ q: "How much does tempo traveller hire from Varanasi to Ayodhya cost?", a: "Return package for a 12 seater starts at Rs 14,000. Every fare includes fuel, toll on NH19 and NH28, parking at all Ayodhya stops, and driver allowance for the full day. Nothing is added after the trip ends." },
{ q: "What is the tempo traveller price for a family of 10?", a: "A 12 seater is the right vehicle for a family of 10. The price starts at Rs 14,000 return. Split across 10 family members that is Rs 1,400 per person for a door-to-door pilgrimage transfer between two of the most sacred cities in India." },
{ q: "Are phones allowed inside Ram Janmabhoomi Temple?", a: "No. Mobile phones are strictly not permitted inside the Ram Janmabhoomi complex. This is enforced at every security point without exceptions. The tempo traveller driver parks near the designated vehicle area and phones stay in the vehicle throughout." },
{ q: "Can I book a 12 seater tempo traveller from Varanasi to Ayodhya?", a: "Yes. The 12 seater is the most booked vehicle size on this route. Comfortably seats 10 to 12 people with pilgrimage luggage and puja items. Return package starts at Rs 14,000. Call 9044019511 to check availability." },
{ q: "Is luxury tempo traveller available for hire from Varanasi to Ayodhya?", a: "Yes. Luxury tempo traveller is available for groups where comfort is a priority. Fully reclining seats, air suspension, multi-zone AC, and charging points at every seat. Starting at Rs 19,000. Strongly recommended for groups with elderly passengers." },
{ q: "What does a one day Varanasi to Ayodhya trip cover?", a: "A one day trip with a 5 AM departure covers the complete Ayodhya pilgrimage circuit: Hanuman Garhi, Ram Janmabhoomi darshan, Kanak Bhawan, and Saryu Ghat boat ride. Return to Varanasi by 9 PM." },
{ q: "Which is the best route from Varanasi to Ayodhya by tempo traveller?", a: "NH19 from Varanasi to Jaunpur then NH28 via Sultanpur and Faizabad into Ayodhya. This is the most direct and best maintained route. Total distance 200 km." },
{ q: "Can I book a Varanasi to Ayodhya round trip tempo traveller?", a: "Yes. The round trip package is the most commonly booked option. Round trip for a 12 seater starts at Rs 14,000. This includes the vehicle for the full day in Ayodhya with driver waiting at every stop." },
{ q: "How far in advance should I book?", a: "For regular weekday travel, 3 to 5 days advance is generally sufficient. For weekend travel, 1 to 2 weeks. For Ram Navami, Diwali, and Parikrama Panchami, book 3 to 4 weeks in advance." },
{ q: "What is the best time to visit Ayodhya from Varanasi?", a: "October to March for the most comfortable weather. Ram Navami in March or April is the most significant festival at Ram Janmabhoomi but also the busiest period. A regular weekday between November and February is the most manageable window for a first visit." },
{ q: "How do I confirm my booking with Yatra Travel India?", a: "Call or WhatsApp 9044019511. Booking is confirmed verbally on the same call with vehicle type, driver name, pickup location, departure time, and fixed all-inclusive fare. A confirmation message is sent to your WhatsApp. No advance payment required on most standard dates." },
];

const NETWORK = [
{ href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Local Sightseeing and Kashi Darshan" },
{ href: "https://www.yatratravelindia.com/tempo-traveller-in-ayodhya", city: "Tempo Traveller in Ayodhya", type: "Ram Mandir Darshan and Local Tours" },
{ href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Sangam and Triveni Darshan" },
{ href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi", city: "Tempo Traveller in Delhi", type: "Family Travel and Religious Tours" },
{ href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra", city: "Tempo Traveller in Agra", type: "Heritage Tours and Group Travel" },
{ href: "https://www.yatratravelindia.com/tempo-traveller-in-mathura", city: "Tempo Traveller in Mathura", type: "Krishna Janmabhoomi Darshan" },
];

function SectionTitle({ children, border = "border-[#0f6ec8]" }) {
return <h2 className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

function FaqItem({ question, answer }) {
const [open, setOpen] = useState(false);
return (

<div className="border border-gray-200 rounded-xl overflow-hidden mb-3">  
<button  
className="w-full flex justify-between items-center px-5 py-4 text-left bg-white hover:bg-[#f0f7ff] transition-colors"  
onClick={() => setOpen(!open)}  
>  
<span className="font-semibold text-gray-800 pr-4 text-sm">{question}</span>  
<HiChevronDown className={"flex-shrink-0 text-[#0f6ec8] text-xl transition-transform duration-300 " + (open ? "rotate-180" : "")} />  
</button>  
{open && (  
<div className="px-5 py-4 bg-[#f9fbff] border-t border-gray-100 text-gray-700 leading-relaxed text-sm">  
{answer}  
</div>  
)}  
</div>  
);  
}  function VehicleCard({ vehicle }) {
const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
return (

<div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">  
<div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">  
{vehicle.img && (  
<img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} />  
)}  
<span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">{vehicle.badge}</span>  
</div>  
<div className="p-5">  
<h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>  
<div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">  
{vehicle.specs.map(s => (  
<p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed"><span className="font-bold">{s.label}:</span> {s.value}</p>  
))}  
</div>  
<div className="flex flex-wrap gap-1.5 mb-4">  
{vehicle.tags.map(tag => (  
<span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>  
))}  
</div>  
<button onClick={scrollToBooking} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">  
Book {vehicle.badge} Tempo  
</button>  
</div>  
</div>  
);  
}  export default function VaranasiToAyodhyaPage() {
const router = useRouter();
const [loader, setLoader] = useState(false);
const { pickupLocation, dropLocation, pickupDate, returnDate, pickupTime } = useBooking();

const onSubmit = () => {
setLoader(true);
let detectedServiceType = "One Way";
if (returnDate === "" && dropLocation === "") detectedServiceType = "Cab Rental Service";
else if (returnDate !== "") detectedServiceType = "Round Trip";
router.push(
/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(detectedServiceType)}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}
);
setTimeout(() => setLoader(false), 2000);
};

return (

<div style={{ maxWidth: "100%", overflowX: "hidden" }}>  
{loader && <RouteLoader />}  
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />  
<Navbar />  {/* ANNOUNCEMENT BAR */}

  <div className="bg-[#0f6ec8] py-2 px-4">    
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">    
      <p className="text-white text-xs font-medium">Varanasi to Ayodhya Tempo Traveller -- Pilgrimage Group Travel Specialists</p>    
      <div className="flex items-center gap-4">    
        <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>    
        <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>    
      </div>    
    </div>    
  </div>    {/* BREADCRUMB */}

  <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">    
    <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">    
      <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link>    
      <span>/</span>    
      <span>Varanasi to Ayodhya Tempo Traveller</span>    
    </div>    
  </div>    {/* HERO */}

  <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">    
    <div className="max-w-7xl mx-auto">    
      <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">    
        Varanasi to Ayodhya Tempo Traveller    
      </h1>    
      <p className="text-blue-200 text-center text-sm mb-5">    
        Hanuman Garhi · Ram Janmabhoomi · Kanak Bhawan · Saryu Ghat · Fixed All-Inclusive Fare    
      </p>    
      <div className="flex flex-wrap justify-center gap-2 mb-7">    
        {["9 to 20 Seater Available", "Luxury Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (    
          <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>    
        ))}    
      </div>    {/* BOOKING FORM */}    
  <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto">    
    <BookingTabsDynamic />    
    <div className="flex justify-center pb-6 -mt-4">    
      <button    
        onClick={onSubmit}    
        disabled={!pickupLocation?.trim()}    
        className={`flex items-center gap-3 px-10 py-3 rounded-2xl font-black uppercase text-lg transition-all shadow-lg ${    
          !pickupLocation?.trim()    
            ? "bg-slate-300 text-slate-500 cursor-not-allowed"    
            : "bg-[#0f6ec8] hover:bg-orange-500 text-white"    
        }`}    
      >    
        Search Cabs    
      </button>    
    </div>    
  </div>    
</div>

  </section>    {/* TRUST BAR */}

  <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">    
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">    
      {[    
        { title: "On-Time Pickup", sub: "Pickup from your exact location" },    
        { title: "Clean and Well Maintained", sub: "Checked before every trip" },    
        { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" },    
        { title: "Verified Drivers", sub: "Know Varanasi and Ayodhya routes" },    
      ].map(item => (    
        <div key={item.title} className="flex items-start gap-2 px-4 py-3">    
          <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">    
            <FaShieldAlt className="text-[#0f6ec8] text-sm" />    
          </div>    
          <div>    
            <strong className="text-xs font-bold text-gray-900 block">{item.title}</strong>    
            <span className="text-[11px] text-gray-500">{item.sub}</span>    
          </div>    
        </div>    
      ))}    
    </div>    
  </div>      <div className="max-w-7xl mx-auto px-4 py-10">    {/* INTRO PARA */}    
<div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">    
  <p className="text-sm text-blue-800 leading-relaxed">    
    Yatra Travel India offers <strong>tempo traveller hire from Varanasi to Ayodhya</strong> for Ram Janmabhoomi darshan, family pilgrimages, and group religious tours. <strong>9 seater to 20 seater AC tempo travellers including luxury options.</strong> Fixed all-inclusive fares covering fuel, tolls on NH19 and NH28, parking, and driver allowance. No hidden charges. Call <strong>9044019511</strong> to book.    
  </p>    
</div>    

{/* INTRO SECTION */}    
<div className="mb-12">    
  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">    
    Varanasi to Ayodhya Tempo Traveller -- Yatra Travel India    
  </h2>    
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">    
    <p className="text-base text-gray-700 leading-relaxed mb-4">    
      Kashi has the Ganga and one of the most powerful Jyotirlingas in India. Ayodhya has the Ram Janmabhoomi and the river where Lord Ram himself is said to have taken his final departure from this world. Putting both in the same journey is not just a logistical convenience -- for millions of pilgrims it is the natural way these two sacred cities were always meant to be visited. Together.    
    </p>    
    <p className="text-base text-gray-700 leading-relaxed mb-4">    
      200 km separates them. A good road connects them. And a Yatra Travel India tempo traveller carries the whole group from one to the other without anyone arriving separately, without meters running in three different cabs, and without the kind of coordination that takes more out of a pilgrimage day than any queue at any temple ever could.    
    </p>    
    <p className="text-base text-gray-700 leading-relaxed">    
      The fare confirmed on the booking call is the fare paid when the group returns to Varanasi. Fuel, tolls on NH19 and NH28, parking at every Ayodhya stop, driver allowance for the full day -- all included. The driver is at the pickup point at the time agreed. Everything else follows from there.    
    </p>    
  </div>    
</div>    

{/* VEHICLE CARDS */}    
<SectionTitle>Choose Your Ride -- Varanasi to Ayodhya Tempo Traveller</SectionTitle>    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">    
  {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} />)}    
</div>    

{/* FARE TABLE */}    
<SectionTitle border="border-orange-500">Varanasi to Ayodhya Tempo Traveller Fare</SectionTitle>    
<div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">    
  <table className="w-full text-sm min-w-[500px]">    
    <thead>    
      <tr className="bg-[#0f6ec8]">    
        {["Vehicle Type", "Seating Capacity", "Base Fare", "Book Now"].map(h => (    
          <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>    
        ))}    
      </tr>    
    </thead>    
    <tbody>    
      {FARE_TABLE.map((row, i) => (    
        <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>    
          <td className="py-3 px-4 font-medium text-gray-800 border-r border-b border-gray-100 text-xs">{row.type}</td>    
          <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.capacity}</td>    
          <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.fare}</td>    
          <td className="py-3 px-4 border-b border-gray-100">    
            <a href="tel:9044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors">    
              <FaPhoneAlt size={9} /> CALL US    
            </a>    
          </td>    
        </tr>    
      ))}    
    </tbody>    
  </table>    
</div>    
<p className="text-xs text-gray-500 mb-10">*Multi day packages include driver accommodation. Call 9044019511 for exact fare based on travel date.</p>    

{/* ROUTE TABLE */}    
<SectionTitle>Route and Distance -- Varanasi to Ayodhya</SectionTitle>    
<p className="text-sm text-gray-600 mb-5 -mt-3">Varanasi to Jaunpur to Sultanpur to Faizabad to Ayodhya. NH19 becoming NH28. 200 km. 3.5 to 4 hours on a normal day.</p>    
<div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">    
  <table className="w-full text-sm min-w-[400px]">    
    <thead>    
      <tr className="bg-[#0f6ec8]">    
        {["Detail", "Information"].map(h => (    
          <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>    
        ))}    
      </tr>    
    </thead>    
    <tbody>    
      {ROUTE_TABLE.map((row, i) => (    
        <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>    
          <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs w-1/3">{row.detail}</td>    
          <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row.info}</td>    
        </tr>    
      ))}    
    </tbody>    
  </table>    
</div>    

{/* ATTRACTIONS */}    
<SectionTitle border="border-orange-500">Ayodhya -- What to See and What Every Group Should Know</SectionTitle>    
<p className="text-sm text-gray-500 mb-8 -mt-3">An honest account of what a group spending one day in Ayodhya actually sees, does, and experiences at each stop.</p>    
<div className="grid md:grid-cols-2 gap-6 mb-12">    
  {ATTRACTIONS.map((place, i) => (    
    <div key={i} className="bg-[#f7fbff] rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md hover:border-[#0f6ec8] transition-all">    
      <div className="flex items-center gap-3 mb-3">    
        <div className="w-10 h-10 bg-[#0f6ec8] rounded-xl flex items-center justify-center flex-shrink-0">    
          <FaMapMarkerAlt className="text-white text-sm" />    
        </div>    
        <div>    
          <h3 className="text-base font-bold text-gray-900">{place.name}</h3>    
          <p className="text-[#0f6ec8] text-xs font-medium">{place.subtitle}</p>    
        </div>    
      </div>    
      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{place.desc}</p>    
      <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 flex items-start gap-2">    
        <FaInfoCircle className="text-orange-400 mt-1 flex-shrink-0 text-xs" />    
        <p className="text-orange-700 text-xs">{place.tip}</p>    
      </div>    
    </div>    
  ))}    
</div>    

{/* DEPARTURE TIMING */}    
<SectionTitle>Departure Timing -- The Decision That Changes Everything</SectionTitle>    
<p className="text-sm text-gray-500 mb-6 -mt-3">Choose your departure time wisely. It defines your entire pilgrimage day.</p>    
<div className="grid md:grid-cols-2 gap-6 mb-12">    
  <div className="bg-green-50 border border-green-300 rounded-2xl p-6 shadow-sm">    
    <div className="flex items-center gap-3 mb-4">    
      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">    
        <FaCheckCircle className="text-white text-base" />    
      </div>    
      <h3 className="text-base font-bold text-green-700">Leave at 5:00 AM</h3>    
    </div>    
    <ul className="space-y-2">    
      {["Reach Ayodhya by 8:30 to 9:00 AM", "Hanuman Garhi in the cool morning", "Ram Lalla queue before the daily peak (1 to 2 hrs)", "Kanak Bhawan in the early afternoon at its quietest", "Saryu Ghat for the golden hour before the return", "Back in Varanasi by 9:00 PM with the full day complete"].map((item, i) => (    
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">    
          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>{item}</span>    
        </li>    
      ))}    
    </ul>    
  </div>    
  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">    
    <div className="flex items-center gap-3 mb-4">    
      <div className="w-10 h-10 bg-red-400 rounded-xl flex items-center justify-center flex-shrink-0">    
        <FaClock className="text-white text-base" />    
      </div>    
      <h3 className="text-base font-bold text-red-600">Leave at 8:00 AM</h3>    
    </div>    
    <ul className="space-y-2">    
      {["Reach Ayodhya at 11:30 AM", "Join the midday Ram Lalla queue (4 to 6 hrs on weekends)", "Complete darshan between 4:00 to 5:00 PM", "Drive back through the evening traffic", "Reach Varanasi tired, having seen significantly less"].map((item, i) => (    
        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">    
          <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">X</span><span>{item}</span>    
        </li>    
      ))}    
    </ul>    
  </div>    
</div>    
<div className="bg-white border border-blue-200 rounded-xl p-4 text-center mb-12">    
  <p className="text-gray-700 font-medium text-sm">The 5 AM alarm is the itinerary. Everything else organises itself around it.</p>    
</div>    

{/* FEATURES */}    
<SectionTitle>Features of Our Tempo Travellers for Varanasi to Ayodhya</SectionTitle>    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">    
  {FEATURES.map(f => (    
    <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center hover:border-[#0f6ec8] hover:shadow-md transition-all">    
      <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-lg">{f.icon}</div>    
      <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>    
      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>    
    </div>    
  ))}    
</div>    

{/* FARE INCLUSIONS */}    
<SectionTitle>Fare Inclusions and Exclusions</SectionTitle>    
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">    
  <div className="border border-blue-200 rounded-xl overflow-hidden">    
    <div className="bg-[#0f6ec8] px-5 py-3">    
      <span className="text-white font-bold text-sm tracking-widest uppercase">Included</span>    
    </div>    
    <ul className="list-none m-0 p-0">    
      {INCLUDED.map((item, i) => (    
        <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#0f6ec8] border-b border-blue-100 last:border-0 flex items-center gap-2 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>    
          <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />{item}    
        </li>    
      ))}    
    </ul>    
  </div>    
  <div className="border border-blue-200 rounded-xl overflow-hidden">    
    <div className="bg-[#0f6ec8] px-5 py-3">    
      <span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span>    
    </div>    
    <ul className="list-none m-0 p-0">    
      {EXCLUDED.map((item, i) => (    
        <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#0f6ec8] border-b border-blue-100 last:border-0 flex items-center gap-2 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>    
          <span className="text-red-400 font-bold flex-shrink-0">X</span>{item}    
        </li>    
      ))}    
    </ul>    
  </div>    
</div>    

{/* PACKAGES */}    
<SectionTitle border="border-green-500">One Day, Two Days, or Three Days -- Which One Is Right?</SectionTitle>    
<div className="grid md:grid-cols-3 gap-6 mb-6">    
  {PACKAGES.map((pkg, i) => (    
    <div key={i} className={"rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all " + pkg.color}>    
      <div className="w-10 h-10 bg-[#0f6ec8] rounded-xl flex items-center justify-center mb-3">    
        <FaStar className="text-white text-base" />    
      </div>    
      <h3 className={"text-xl font-bold mb-3 " + pkg.headerColor}>{pkg.days}</h3>    
      <p className="text-gray-700 leading-relaxed text-sm">{pkg.desc}</p>    
    </div>    
  ))}    
</div>    
<div className="bg-[#f0f7ff] border border-[#0f6ec8]/30 rounded-2xl p-5 text-center mb-12">    
  <p className="text-gray-700 text-sm">Multi day 12 seater packages start at <strong className="text-[#0f6ec8]">Rs 25,000</strong> with driver accommodation included.</p>    
  <a href="tel:9044019511" className="inline-flex items-center gap-2 mt-3 bg-[#0f6ec8] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">    
    <FaPhoneAlt size={12} /> Call 9044019511 to Build Your Tour    
  </a>    
</div>    

{/* PRE-DEPARTURE CHECKLIST */}    
<SectionTitle>Before Anyone Gets in the Vehicle -- Five Things</SectionTitle>    
<div className="space-y-4 mb-12">    
  {CHECKLIST.map((item, i) => (    
    <div key={i} className="flex items-start gap-4 bg-[#f7fbff] rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#0f6ec8] transition-all">    
      <div className="w-10 h-10 rounded-full bg-[#0f6ec8] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</div>    
      <div>    
        <p className="font-bold text-gray-800 mb-1 text-sm">{item.title}</p>    
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>    
      </div>    
    </div>    
  ))}    
</div>    

{/* WHY YATRA */}    
<SectionTitle>Why Yatra Travel India for Varanasi to Ayodhya?</SectionTitle>    
<div className="grid md:grid-cols-3 gap-5 mb-12">    
  {[    
    { icon: <MdDirectionsBus className="text-2xl" />, title: "Vehicle at Pickup on Time", desc: "The vehicle at the pickup point at the time agreed. Not approximately, not 5 minutes late." },    
    { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Driver Who Knows Ayodhya", desc: "Familiar with the new road layout, designated pilgrimage vehicle parking, and accessible entry points for elderly passengers." },    
    { icon: <FaStar className="text-2xl" />, title: "Fare That Does Not Change", desc: "A fare that does not change between the booking call and the return to Varanasi. That is the whole promise." },    
  ].map((item, i) => (    
    <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-[#0f6ec8] text-center transition-all">    
      <div className="w-16 h-16 bg-[#0f6ec8] text-white rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>    
      <h3 className="font-bold text-gray-800 mb-2 text-sm">{item.title}</h3>    
      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>    
    </div>    
  ))}    
</div>    

{/* CTA BANNER */}    
<div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">    
  <div>    
    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Varanasi to Ayodhya Tempo Traveller</h3>    
    <p className="text-blue-200 text-sm max-w-xl">Vehicle confirmed, driver assigned, fare locked. Everything sorted before the pilgrimage begins. Dial 9044019511.</p>    
  </div>    
  <div className="flex gap-3 flex-wrap flex-shrink-0">    
    <a href="tel:+919044019511" className="bg-white text-[#0f6ec8] hover:bg-orange-50 font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2">    
      <FaPhoneAlt size={12} /> Call Now -- +91 90440 19511    
    </a>    
    <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2">    
      <FaWhatsapp size={14} /> WhatsApp Us    
    </a>    
  </div>    
</div>    

{/* FAQS */}    
<SectionTitle>Frequently Asked Questions -- Varanasi to Ayodhya Tempo Traveller</SectionTitle>    
<div className="mb-12">    
  {FAQS.map((faq, i) => (    
    <FaqItem key={i} question={faq.q} answer={faq.a} />    
  ))}    
</div>    

{/* NETWORK */}    
<SectionTitle>Our Pan-India Tempo Traveller Network</SectionTitle>    
<p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India's major pilgrimage and travel destinations with reliable group transport.</p>    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">    
  {NETWORK.map(n => (    
    <a key={n.href} href={n.href} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] hover:shadow-sm transition-all group">    
      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">    
        <FaBus className="text-[#0f6ec8] text-sm" />    
      </div>    
      <div>    
        <div className="text-sm font-bold text-gray-900 group-hover:text-[#0f6ec8] transition-colors">{n.city}</div>    
        <div className="text-xs text-gray-500 mt-0.5">{n.type}</div>    
      </div>    
    </a>    
  ))}    
</div>

  </div>      <Footer />    {/* FLOATING BUTTONS */}
<a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
<FaWhatsapp size={26} color="#fff" />
</a>
<a href="tel:+919044019511" aria-label="Call Now" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f6ec8] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
<FaPhoneAlt size={20} color="#fff" />
</a>

</div>  );
}
