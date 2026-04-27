"use client";
import { useState } from "react";
import {
FaClock, FaShieldAlt, FaUserCheck, FaWhatsapp,
FaBus, FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt,
FaStar, FaRoad, FaInfoCircle, FaSnowflake, FaCouch,
FaMusic, FaUserTie, FaTools, FaHeadset
} from "react-icons/fa";
import TempoImageCards from "@/components/tempo-traveller/TempoImageCards";
import TempoSeatConfig from "@/components/tempo-traveller/TempoSeatConfig";
import { HiChevronDown } from "react-icons/hi";
import { MdDirectionsBus } from "react-icons/md";

// --- DATA ---
const fareData = [
{ type: "9 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "6 to 9 people", fare: "Rs 12,000 onwards" },
{ type: "12 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "10 to 12 people", fare: "Rs 14,000 onwards" },
{ type: "16 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "13 to 16 people", fare: "Rs 15,000 onwards" },
{ type: "20 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "17 to 20 people", fare: "Rs 17,000 onwards" },
{ type: "Luxury Tempo Traveller from Varanasi to Ayodhya", capacity: "9 to 16 people", fare: "Rs 19,000 onwards" },
];

const routeDetails = [
{ detail: "Distance", info: "200 km (actual 210 to 220 km with city approaches)" },
{ detail: "Drive Time", info: "3.5 to 4 hours (4 to 5 hrs with stops/traffic)" },
{ detail: "Route", info: "NH19 east to Sultanpur, then NH330/NH28 via Faizabad (Rama Path)" },
{ detail: "Road Condition", info: "Excellent 4 to 6 lane national highways; smooth asphalt, well-lit" },
{ detail: "Best Departure Time", info: "5:00 to 5:30 AM for day trip (reach Ayodhya by 9 to 10 AM)" },
{ detail: "Best Return Time", info: "5:00 PM from Ayodhya (arrive Varanasi 9 to 10 PM)" },
{ detail: "Tolls and Fuel Stops", info: "3 to 4 tolls (approx Rs 400 to 500 total, included); dhabas at Sultanpur and Faizabad" },
{ detail: "Key Landmarks", info: "Sultanpur markets, Faizabad (Nageshwarnath Temple), Ayodhya Ram Path" },
];

const attractions = [
{
name: "Hanuman Garhi",
subtitle: "The Beginning",
desc: "Every serious Ayodhya pilgrimage begins here, not at Ram Janmabhoomi. 76 steps cut into the hillside lead to the most recognisable temple on the Ayodhya skyline. Lord Hanuman is the guardian of the city and visiting Hanuman before Ram darshan is the correct sequence that most devoted pilgrims follow instinctively. Allow a full hour.",
tip: "Palanquin carriers are available at the base for elderly group members.",
},
{
name: "Ram Janmabhoomi",
subtitle: "The Reason Most Groups Are Here",
desc: "The Ram Lalla darshan at Ram Janmabhoomi is the centrepiece of this pilgrimage. Queue time before 10 AM on weekdays runs 1 to 2 hours on a normal day. Three hours is the right allocation for the full visit including security check, queue, darshan, and exit. Phones are strictly not permitted inside the complex.",
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
desc: "The river where Lord Ram is believed to have taken his final departure. Ram ki Paidi is the most accessible ghat for groups arriving by tempo traveller. A boat ride gives a perspective on Ayodhya no road-based stop provides. The late afternoon light on the Saryu is the kind of thing most groups say they were not expecting to find as moving as they did.",
tip: "Allow 30 to 45 minutes. Do not treat it as a quick box to tick before the drive home.",
},
];

const packageOptions = [
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

const preDepartureChecklist = [
{
title: "Phones sorted",
desc: "Everyone needs to know before departure that phones stay in the tempo traveller at Ram Janmabhoomi. A five-minute group briefing the night before saves 20 minutes of confusion at the temple gate.",
},
{
title: "Clothing checked",
desc: "Traditional dress for every group member. The Ram Janmabhoomi security team turns away pilgrims in shorts and sleeveless clothing. Check clothing the evening before.",
},
{
title: "Cash in small denominations",
desc: "Palanquin at Hanuman Garhi, boat at Saryu, prasad at Kanak Bhawan, small donations at the ghats. Rs 10, Rs 20, and Rs 50 notes make every stop easier.",
},
{
title: "One person leading the group",
desc: "Through the security check, through the queue, through the exit. One designated coordinator means every stop takes half the time it would otherwise.",
},
{
title: "5 AM confirmed with the driver",
desc: "Not approximately 5. Not 5:15 if the group is ready. 5 AM. The group moving at 5 AM is in the good version of this day. The group having chai at 5:30 is already in a different itinerary.",
},
];

const vehicleGuide = [
{
size: "9 Seater",
for: "Small family of 6 to 8 people",
desc: "Comfortable on NH19 and NH28. Right size when the group is genuinely 8 people with manageable bags.",
fare: "Rs 12,000 onwards",
},
{
size: "12 Seater",
for: "Medium family groups of 10 to 12 people",
desc: "Most consistently booked size on this route. The space difference over a 9 seater is noticeable on a 4-hour highway journey. Per head cost split across 12 people makes it the most practical choice.",
fare: "Rs 14,000 onwards",
},
{
size: "16 Seater",
for: "Extended families and religious groups of 13 to 16",
desc: "The comfort level for elderly members across a full pilgrimage day is meaningfully better than trying to fit 13 people into a 12 seater.",
fare: "Rs 15,000 onwards",
},
{
size: "20 Seater",
for: "Large joint families and temple trust groups of 17 to 20",
desc: "One tempo traveller, everyone together. Coordinating across two separate cabs at Ram Janmabhoomi entry points creates problems the pilgrimage day does not need.",
fare: "Rs 17,000 onwards",
},
{
size: "Luxury Tempo Traveller",
for: "Groups with elderly or mobility-limited members",
desc: "Fully reclining seats, air suspension, multi-zone AC, charging points at every seat. For families with post-operative members or anyone with joint, cardiac, or mobility considerations.",
fare: "Rs 19,000 onwards",
},
];

const FEATURES = [
{ icon: <FaSnowflake />, title: "Full Air Conditioning", desc: "Fully working AC to keep you comfortable during the entire Varanasi to Ayodhya journey and sightseeing tours." },
{ icon: <FaCouch />, title: "Comfortable Pushback Seats", desc: "Reclining seats for maximum comfort during long temple visits and the 4-hour highway journey each way." },
{ icon: <FaMusic />, title: "Music System and Entertainment", desc: "High-quality music system and large windows with sliding curtains for a relaxed travel experience." },
{ icon: <FaUserTie />, title: "Professional Drivers", desc: "Experienced and courteous drivers who know Varanasi to Ayodhya routes and ensure safe, on-time travel." },
{ icon: <FaMapMarkerAlt />, title: "Flexible Stops", desc: "Stop at temples, ghats, and attractions at your own pace without any time pressure or rush." },
{ icon: <FaTools />, title: "Clean and Well-Maintained", desc: "All vehicles sanitised and regularly serviced for your health, safety, and comfort on every trip." },
{ icon: <FaRoad />, title: "Nominal Pricing", desc: "Affordable rates with transparent billing and no hidden charges whatsoever. Fare confirmed at booking is final." },
{ icon: <FaHeadset />, title: "24/7 Customer Support", desc: "Round-the-clock support team available to assist with any queries or concerns before and during your trip." },
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
"Driver night allowance (Rs 500 for tempo traveller, if applicable)",
"Luggage carrier charges",
];

const faqs = [
{
question: "How do I book a tempo traveller from Varanasi to Ayodhya?",
answer: "Call or WhatsApp Yatra Travel India on 9044019511. Share the group size, travel date, and preferred departure time. The booking is confirmed on the same call with vehicle details, driver name, pickup time, and fixed all-inclusive fare. No advance payment required. No cancellation fee for bookings cancelled more than 48 hours before travel date.",
},
{
question: "How much does tempo traveller hire from Varanasi to Ayodhya cost?",
answer: "Tempo traveller hire from Varanasi to Ayodhya starts at Rs 6,000 one way for a 9 seater and Rs 7,500 one way for a 12 seater. Return package for a 12 seater starts at Rs 14,000. Every fare includes fuel, toll on NH19 and NH28, parking at all Ayodhya stops, and driver allowance for the full day. Nothing is added after the trip ends.",
},
{
question: "What is the tempo traveller price for a family of 10?",
answer: "A 12 seater is the right vehicle for a family of 10. The price starts at Rs 7,500 one way and Rs 14,000 return. Split across 10 family members that is Rs 750 per person one way for a door-to-door pilgrimage transfer between two of the most sacred cities in India.",
},
{
question: "Are phones allowed inside Ram Janmabhoomi Temple?",
answer: "No. Mobile phones are strictly not permitted inside the Ram Janmabhoomi complex. This is enforced at every security point without exceptions. The tempo traveller driver parks near the designated vehicle area and phones stay in the vehicle throughout the darshan. Brief every group member about this before arrival at the temple, not at the entry gate.",
},
{
question: "Can I book a 12 seater tempo traveller from Varanasi to Ayodhya?",
answer: "Yes. The 12 seater is the most booked vehicle size on this route. Comfortably seats 10 to 12 people with pilgrimage luggage and puja items. One way fare starts at Rs 7,500 and return package starts at Rs 14,000. Call 9044019511 to check availability on the preferred date.",
},
{
question: "Is luxury tempo traveller available for hire from Varanasi to Ayodhya?",
answer: "Yes. Luxury tempo traveller is available for groups where comfort is a priority. Fully reclining seats, air suspension, multi-zone AC, and charging points at every seat. One way fare starts at Rs 11,000 and return package at Rs 20,000. Strongly recommended for groups with elderly passengers or mobility-limited family members.",
},
{
question: "What does a one day Varanasi to Ayodhya trip cover?",
answer: "A one day trip with a 5 AM departure covers the complete Ayodhya pilgrimage circuit: Hanuman Garhi morning visit, Ram Janmabhoomi darshan, Kanak Bhawan, and Saryu Ghat boat ride. Return to Varanasi by 9 PM. One way fare for a 12 seater starts at Rs 7,500. Return package starts at Rs 14,000.",
},
{
question: "How do I get the best tempo traveller rate for Varanasi to Ayodhya?",
answer: "Book directly rather than through aggregators or third party platforms. Call Yatra Travel India on 9044019511. Direct bookings get the base rate without platform markup, confirmed vehicle details before the travel date, and a driver briefed on the group requirements. Book at least 5 to 7 days in advance on regular dates and 2 to 3 weeks in advance during festival periods.",
},
{
question: "Which is the best route from Varanasi to Ayodhya by tempo traveller?",
answer: "NH19 from Varanasi to Jaunpur then NH28 via Sultanpur and Faizabad into Ayodhya. This is the most direct and best maintained route. Road condition is good throughout and most experienced drivers on this corridor use this route as standard. Total distance 200 km.",
},
{
question: "Can I book a Varanasi to Ayodhya round trip tempo traveller?",
answer: "Yes. The round trip package is the most commonly booked option. Round trip for a 12 seater starts at Rs 14,000. The round trip package includes the vehicle for the full day in Ayodhya with driver waiting at every stop, not just the two-way transfer.",
},
{
question: "How far in advance should I book?",
answer: "For regular weekday travel, 3 to 5 days advance is generally sufficient. For weekend travel, 1 to 2 weeks. For Ram Navami, Diwali, Parikrama Panchami, and other major Ayodhya festival dates, book 3 to 4 weeks in advance. Since the 2024 Ram Lalla Temple consecration demand during festival periods has increased significantly.",
},
{
question: "Is there a 9 seater tempo traveller available from Varanasi to Ayodhya?",
answer: "Yes. The 9 seater is the right option for small family pilgrimages of 6 to 8 people with moderate luggage. One way fare starts at Rs 6,000 and return package at Rs 11,000. For families of 8 or more carrying substantial pilgrimage luggage or travelling with elderly members who need extra space, the 12 seater is the better choice.",
},
{
question: "What is the best time to visit Ayodhya from Varanasi?",
answer: "October to March for the most comfortable weather across both cities. October and November have the added significance of Diwali which Ayodhya celebrates with extraordinary scale. Ram Navami in March or April is the most significant festival at Ram Janmabhoomi but also the busiest period. For a first visit without overwhelming crowds, a regular weekday between November and February is the most manageable window.",
},
{
question: "What is the difference between a tempo traveller and a cab for this route?",
answer: "A cab seats 4 to 6 people. A 12 seater tempo traveller seats 10 to 12 people. For groups of 8 or more the per head cost of the tempo traveller is consistently lower than booking multiple cabs. Beyond cost, the tempo traveller keeps the entire group in one vehicle for the full day, with no separate arrival times at Ram Janmabhoomi and no coordinating two drivers through Ayodhya.",
},
{
question: "How do I confirm my booking with Yatra Travel India?",
answer: "Call or WhatsApp 9044019511. The booking is confirmed verbally on the same call with vehicle type, seating capacity, driver name, pickup location, departure time, and the fixed all-inclusive fare. A confirmation message is sent to the WhatsApp number provided. No advance payment required on most standard dates. The driver contacts the group the evening before travel with a final confirmation.",
},
];

// FAQ Accordion Item
function FaqItem({ question, answer }) {
const [open, setOpen] = useState(false);
return (
<div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
<button
className="w-full flex justify-between items-center px-5 py-4 text-left bg-white hover:bg-[#f0f7ff] transition-colors"
onClick={() => setOpen(!open)}
>
<span className="font-semibold text-gray-800 pr-4">{question}</span>
<HiChevronDown
className={flex-shrink-0 text-[#0f6ec8] text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}}
/>
</button>
{open && (
<div className="px-5 py-4 bg-[#f9fbff] border-t border-gray-100 text-gray-700 leading-relaxed">
{answer}
</div>
)}
</div>
);
}

export default function VaranasiToAyodhyaPage() {
return (
<main>
{/* === ANNOUNCEMENT BAR === */}
<div className="bg-[#0f6ec8] py-2 px-4">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
<p className="text-white text-xs font-medium">Varanasi to Ayodhya Tempo Traveller -- Pilgrimage Group Travel Specialists</p>
<div className="flex items-center gap-4">
<a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
<a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
</div>
</div>
</div>

{/* === TRUST BAR === */}  
  <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">  
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">  
      {[  
        { title: "On-Time Pickup", sub: "Pickup from your exact location" },  
        { title: "Clean and Well Maintained", sub: "Checked before every trip" },  
        { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" },  
        { title: "Verified Drivers", sub: "Know Varanasi and Ayodhya routes" },  
      ].map((item) => (  
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
  </div>  

  {/* === INTRO SECTION === */}  
  <section className="max-w-5xl mx-auto px-5 py-12 text-gray-800">  
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">  
      Varanasi to Ayodhya Tempo Traveller -- Yatra Travel India  
    </h2>  
    <p className="text-lg leading-relaxed text-center mb-6 text-gray-700">  
      Kashi has the Ganga and one of the most powerful Jyotirlingas in India. Ayodhya has the Ram Janmabhoomi and the river where Lord Ram himself is said to have taken his final departure from this world. Putting both in the same journey is not just a logistical convenience -- for millions of pilgrims it is the natural way these two sacred cities were always meant to be visited. Together.  
    </p>  
    <p className="text-lg leading-relaxed text-center mb-6 text-gray-700">  
      200 km separates them. A good road connects them. And a Yatra Travel India tempo traveller carries the whole group from one to the other without anyone arriving separately, without meters running in three different cabs, and without the kind of coordination that takes more out of a pilgrimage day than any queue at any temple ever could.  
    </p>  
    <div className="flex justify-center mt-6">  
      <a  
        href="tel:9044019511"  
        className="flex items-center gap-3 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg"  
      >  
        <FaPhoneAlt /> Call 9044019511 to Book  
      </a>  
    </div>  
  </section>  

  {/* === VEHICLE IMAGES === */}  
  <TempoImageCards />  

  {/* === FARE TABLE === */}  
  <section className="py-14 bg-white">  
    <div className="max-w-6xl mx-auto px-6">  
      <div className="flex items-center gap-2 mb-6">  
        <FaBus className="text-[#0f6ec8] text-2xl" />  
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">  
          Varanasi to Ayodhya Tempo Traveller Fare  
        </h2>  
      </div>  
      <p className="text-gray-600 mb-6">Fixed all-inclusive fares. Fuel, tolls on NH19 and NH28, parking, and driver allowance -- all included. The number confirmed at booking is the number paid when the group returns to Varanasi.</p>  
      <div className="overflow-x-auto bg-[#f7fbff] rounded-2xl shadow-md">  
        <table className="w-full border-collapse">  
          <thead>  
            <tr className="bg-[#0f6ec8] text-white text-left">  
              <th className="py-3 px-4 font-semibold text-xs">Vehicle Type</th>  
              <th className="py-3 px-4 font-semibold text-xs">Seating Capacity</th>  
              <th className="py-3 px-4 font-semibold text-xs">Base Fare</th>  
              <th className="py-3 px-4 font-semibold text-xs">Book Now</th>  
            </tr>  
          </thead>  
          <tbody>  
            {fareData.map((row, i) => (  
              <tr key={i} className={`border-b border-gray-200 hover:bg-[#e9f4fb] transition ${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"}`}>  
                <td className="py-3 px-4 text-gray-800 font-medium text-sm">{row.type}</td>  
                <td className="py-3 px-4 text-gray-700 text-sm">{row.capacity}</td>  
                <td className="py-3 px-4 font-bold text-[#0f6ec8] text-sm">{row.fare}</td>  
                <td className="py-3 px-4">  
                  <a href="tel:9044019511" className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap min-w-[80px] text-center block">  
                    CALL US  
                  </a>  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
      <p className="text-sm text-gray-500 mt-4">*Multi day packages include driver accommodation. Call 9044019511 for exact fare based on travel date.</p>  
    </div>  
  </section>  

  {/* === ROUTE AND DISTANCE === */}  
  <section className="py-14 bg-gray-50">  
    <div className="max-w-6xl mx-auto px-6">  
      <div className="flex items-center gap-2 mb-6">  
        <FaRoad className="text-[#0f6ec8] text-2xl" />  
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Route and Distance -- Varanasi to Ayodhya</h2>  
      </div>  
      <p className="text-gray-700 mb-6">  
        Varanasi to Jaunpur to Sultanpur to Faizabad to Ayodhya. NH19 becoming NH28. 200 km. 3.5 to 4 hours on a normal day. Leave at 5 in the morning and the group is walking into Hanuman Garhi before 9 AM with the entire day still ahead.  
      </p>  
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">  
        <table className="w-full border-collapse">  
          <thead>  
            <tr className="bg-[#0f6ec8] text-white text-left">  
              <th className="py-3 px-4 font-semibold text-xs">Detail</th>  
              <th className="py-3 px-4 font-semibold text-xs">Information</th>  
            </tr>  
          </thead>  
          <tbody>  
            {routeDetails.map((row, i) => (  
              <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-[#f7fbff]" : "bg-white"}`}>  
                <td className="py-3 px-4 font-semibold text-gray-800 w-1/3 text-sm">{row.detail}</td>  
                <td className="py-3 px-4 text-gray-700 text-sm">{row.info}</td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      </div>  
    </div>  
  </section>  

  {/* === AYODHYA ATTRACTIONS === */}  
  <section className="py-14 bg-white">  
    <div className="max-w-6xl mx-auto px-6">  
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">  
        Ayodhya -- What to See and What Every Group Should Know  
      </h2>  
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">  
        An honest account of what a group spending one day in Ayodhya actually sees, does, and experiences at each stop.  
      </p>  
      <div className="grid md:grid-cols-2 gap-8">  
        {attractions.map((place, i) => (  
          <div key={i} className="bg-[#f7fbff] rounded-2xl p-6 border border-blue-100 shadow-md hover:shadow-lg hover:border-[#0f6ec8] transition-all">  
            <div className="flex items-center gap-3 mb-3">  
              <div className="w-10 h-10 bg-[#0f6ec8] rounded-xl flex items-center justify-center flex-shrink-0">  
                <FaMapMarkerAlt className="text-white text-sm" />  
              </div>  
              <div>  
                <h3 className="text-xl font-bold text-gray-900">{place.name}</h3>  
                <p className="text-[#0f6ec8] text-sm font-medium">{place.subtitle}</p>  
              </div>  
            </div>  
            <p className="text-gray-700 leading-relaxed mb-4 text-sm">{place.desc}</p>  
            <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 flex items-start gap-2">  
              <FaInfoCircle className="text-orange-400 mt-1 flex-shrink-0" />  
              <p className="text-orange-700 text-sm">{place.tip}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* === SEAT CONFIG === */}  
  <TempoSeatConfig city="varanasi-to-ayodhya" />  

  {/* === DEPARTURE TIMING === */}  
  <section className="py-14 bg-[#f8faff]">  
    <div className="max-w-5xl mx-auto px-6">  
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 pl-4 border-l-4 border-[#0f6ec8]">  
        Departure Timing -- The Decision That Changes Everything  
      </h2>  
      <p className="text-center text-gray-500 text-sm mb-8">Choose your departure time wisely. It defines your entire pilgrimage day.</p>  
      <div className="grid md:grid-cols-2 gap-6">  
        <div className="bg-green-50 border border-green-300 rounded-2xl p-6 shadow-sm">  
          <div className="flex items-center gap-3 mb-4">  
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">  
              <FaCheckCircle className="text-white text-base" />  
            </div>  
            <h3 className="text-lg font-bold text-green-700">Leave at 5:00 AM</h3>  
          </div>  
          <ul className="space-y-2 text-gray-700">  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Reach Ayodhya by 8:30 to 9:00 AM</span></li>  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Hanuman Garhi in the cool morning</span></li>  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Ram Lalla queue before the daily peak (1 to 2 hrs)</span></li>  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Kanak Bhawan in the early afternoon at its quietest</span></li>  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Saryu Ghat for the golden hour before the return</span></li>  
            <li className="flex items-start gap-2 text-sm"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" /><span>Back in Varanasi by 9:00 PM with the full day complete</span></li>  
          </ul>  
        </div>  
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">  
          <div className="flex items-center gap-3 mb-4">  
            <div className="w-10 h-10 bg-red-400 rounded-xl flex items-center justify-center flex-shrink-0">  
              <FaClock className="text-white text-base" />  
            </div>  
            <h3 className="text-lg font-bold text-red-600">Leave at 8:00 AM</h3>  
          </div>  
          <ul className="space-y-2 text-gray-700">  
            <li className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-1 flex-shrink-0 font-bold">✗</span><span>Reach Ayodhya at 11:30 AM</span></li>  
            <li className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-1 flex-shrink-0 font-bold">✗</span><span>Join the midday Ram Lalla queue (4 to 6 hrs on weekends)</span></li>  
            <li className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-1 flex-shrink-0 font-bold">✗</span><span>Complete darshan between 4:00 to 5:00 PM</span></li>  
            <li className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-1 flex-shrink-0 font-bold">✗</span><span>Drive back through the evening traffic</span></li>  
            <li className="flex items-start gap-2 text-sm"><span className="text-red-400 mt-1 flex-shrink-0 font-bold">✗</span><span>Reach Varanasi tired, having seen significantly less</span></li>  
          </ul>  
        </div>  
      </div>  
      <div className="mt-6 bg-white border border-blue-200 rounded-xl p-4 text-center">  
        <p className="text-gray-700 font-medium text-sm">The 5 AM alarm is the itinerary. Everything else organises itself around it.</p>  
      </div>  
    </div>  
  </section>  

  {/* === FEATURES SECTION === */}  
  <section className="py-14 bg-white">  
    <div className="max-w-6xl mx-auto px-6">  
      <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">  
        Features of Our Tempo Travellers for Varanasi to Ayodhya  
      </h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">  
        {FEATURES.map((f) => (  
          <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center hover:border-[#0f6ec8] hover:shadow-md transition-all">  
            <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-lg">  
              {f.icon}  
            </div>  
            <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>  
            <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* === FARE INCLUSIONS AND EXCLUSIONS === */}  
  <section className="py-14 bg-gray-50">  
    <div className="max-w-6xl mx-auto px-6">  
      <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">  
        Fare Inclusions and Exclusions  
      </h2>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">  
        <div className="border border-blue-200 rounded-xl overflow-hidden">  
          <div className="bg-[#0f6ec8] px-5 py-3">  
            <span className="text-white font-bold text-sm tracking-widest uppercase">Included</span>  
          </div>  
          <ul className="list-none m-0 p-0">  
            {INCLUDED.map((item, i) => (  
              <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#0f6ec8] border-b border-blue-100 last:border-0 flex items-center gap-2 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>  
                <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" />  
                {item}  
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
                <span className="text-red-400 font-bold flex-shrink-0">✗</span>  
                {item}  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>  
    </div>  
  </section>  

  {/* === PACKAGE OPTIONS === */}  
  <section className="py-14 bg-white">  
    <div className="max-w-6xl mx-auto px-6">  
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 pl-4 border-l-4 border-[#0f6ec8]">  
        One Day, Two Days, or Three Days -- Which One Is Right?  
      </h2>  
      <div className="grid md:grid-cols-3 gap-8">  
        {packageOptions.map((pkg, i) => (  
          <div key={i} className={`rounded-2xl p-6 border ${pkg.color} shadow-md hover:shadow-lg transition-all`}>  
            <div className="w-10 h-10 bg-[#0f6ec8] rounded-xl flex items-center justify-center mb-3">  
              <FaStar className="text-white text-base" />  
            </div>  
            <h3 className={`text-2xl font-bold mb-3 ${pkg.headerColor}`}>{pkg.days}</h3>  
            <p className="text-gray-700 leading-relaxed text-sm">{pkg.desc}</p>  
          </div>  
        ))}  
      </div>  
      <div className="mt-8 bg-[#f0f7ff] border border-[#0f6ec8]/30 rounded-2xl p-5 text-center">  
        <p className="text-gray-700 text-sm">Multi day 12 seater packages start at <strong className="text-[#0f6ec8]">Rs 25,000</strong> with driver accommodation included.</p>  
        <a href="tel:9044019511" className="inline-flex items-center gap-2 mt-3 bg-[#0f6ec8] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">  
          <FaPhoneAlt /> Call 9044019511 to Build Your Tour  
        </a>  
      </div>  
    </div>  
  </section>  

  {/* === VEHICLE GUIDE === */}  
  <section className="py-14 bg-gray-50">  
    <div className="max-w-6xl mx-auto px-6">  
      <div className="flex items-center gap-2 mb-6">  
        <MdDirectionsBus className="text-[#0f6ec8] text-3xl" />  
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Which Tempo Traveller for Which Group</h2>  
      </div>  
      <p className="text-gray-600 mb-8 text-sm">The question is not which vehicle sounds right -- it is which vehicle is right for the specific group you actually have.</p>  
      <div className="space-y-4">  
        {vehicleGuide.map((v, i) => (  
          <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:border-[#0f6ec8] transition-all flex flex-col md:flex-row md:items-start gap-4">  
            <div className="flex-shrink-0">  
              <span className="inline-block bg-[#0f6ec8] text-white font-bold px-4 py-2 rounded-xl text-sm">{v.size}</span>  
            </div>  
            <div className="flex-1">  
              <p className="font-semibold text-gray-800 mb-1 text-sm">{v.for}</p>  
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>  
            </div>  
            <div className="flex-shrink-0">  
              <p className="font-bold text-[#0f6ec8] text-sm">{v.fare}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* === PRE-DEPARTURE CHECKLIST === */}  
  <section className="py-14 bg-white">  
    <div className="max-w-5xl mx-auto px-6">  
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">  
        Before Anyone Gets in the Vehicle -- Five Things  
      </h2>  
      <div className="space-y-4">  
        {preDepartureChecklist.map((item, i) => (  
          <div key={i} className="flex items-start gap-4 bg-[#f7fbff] rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-[#0f6ec8] transition-all">  
            <div className="w-10 h-10 rounded-full bg-[#0f6ec8] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">{i + 1}</div>  
            <div>  
              <p className="font-bold text-gray-800 mb-1 text-sm">{item.title}</p>  
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  </section>  

  {/* === WHY YATRA === */}  
  <section className="py-14 bg-gray-50">  
    <div className="max-w-6xl mx-auto px-6">  
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">  
        Why Yatra Travel India for Varanasi to Ayodhya?  
      </h2>  
      <div className="grid md:grid-cols-3 gap-6">  
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
    </div>  
  </section>  

  {/* === FAQs === */}  
  <section className="max-w-4xl mx-auto my-12 px-4">  
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">  
      Frequently Asked Questions -- Varanasi to Ayodhya Tempo Traveller  
    </h2>  
    <div className="space-y-1">  
      {faqs.map((faq, i) => (  
        <FaqItem key={i} question={faq.question} answer={faq.answer} />  
      ))}  
    </div>  
  </section>  

  {/* === CTA Strip === */}  
  <section className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] py-12 px-6 text-center text-white">  
    <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Book Your Varanasi to Ayodhya Tempo Traveller?</h2>  
    <p className="text-blue-200 mb-6 max-w-2xl mx-auto text-sm">Vehicle confirmed, driver assigned, fare locked. Everything sorted before the pilgrimage begins.</p>  
    <div className="flex flex-col sm:flex-row gap-4 justify-center">  
      <a href="tel:9044019511" className="flex items-center justify-center gap-2 bg-white text-[#0f6ec8] hover:bg-orange-50 font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg">  
        <FaPhoneAlt /> Call 9044019511  
      </a>  
      <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg border border-white/40 transition-all shadow-lg">  
        <FaWhatsapp /> WhatsApp Us  
      </a>  
    </div>  
  </section>  
</main>

);
}
