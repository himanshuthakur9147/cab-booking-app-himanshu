"use client";  
import { useState } from "react";  
import {   
  FaPhoneAlt, FaCheckCircle, FaInfoCircle,   
  FaStar, FaMapMarkerAlt   
} from "react-icons/fa";  
import { MdDirectionsBus } from "react-icons/md";  
import { HiChevronDown } from "react-icons/hi";  
import TempoImageCards from "@/components/tempo-traveller/TempoImageCards";  
import TempoSeatConfig from "@/components/tempo-traveller/TempoSeatConfig";  
  
// --- DATA ---  
const fareData = [  
  { type: "9 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "6 to 9 people", fare: "Rs 12,000 onwards" },  
  { type: "12 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "10 to 12 people", fare: "Rs 14,000 onwards" },  
  { type: "16 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "13 to 16 people", fare: "Rs 15,000 onwards" },  
  { type: "20 Seater Tempo Traveller from Varanasi to Ayodhya", capacity: "17 to 20 people", fare: "Rs 17,000 onwards" },  
  { type: "Luxury Tempo Traveller from Varanasi to Ayodhya", capacity: "9 to 16 people", fare: "Rs 19,000 onwards" },  
];  
  
const VEHICLES = [  
  { badge: "9 Seater", title: "9 Seater Tempo Traveller from Varanasi to Ayodhya", img: "/images/9seater.jpg", specs: [{ label: "Seating Capacity", value: "6 to 9 Passengers + 1 Driver" }, { label: "Base Fare", value: "Rs 12,000 onwards" }], tags: ["Full AC", "Pushback Seats", "Small Groups"] },  
  { badge: "12 Seater", title: "12 Seater Tempo Traveller from Varanasi to Ayodhya", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10 to 12 Passengers + 1 Driver" }, { label: "Base Fare", value: "Rs 14,000 onwards" }], tags: ["Full AC", "Most Popular", "Family Trips"] },  
  { badge: "16 Seater", title: "16 Seater Tempo Traveller from Varanasi to Ayodhya", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "13 to 16 Passengers + 1 Driver" }, { label: "Base Fare", value: "Rs 15,000 onwards" }], tags: ["Full AC", "Extra Legroom", "Pilgrimage Groups"] },  
  { badge: "20 Seater", title: "20 Seater Tempo Traveller from Varanasi to Ayodhya", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17 to 20 Passengers + 1 Driver" }, { label: "Base Fare", value: "Rs 17,000 onwards" }], tags: ["Full AC", "Max Luggage", "Large Events"] },  
  { badge: "Luxury", title: "Luxury Tempo Traveller from Varanasi to Ayodhya", img: "/images/luxury.jpg", specs: [{ label: "Seating Capacity", value: "9 to 16 Passengers + 1 Driver" }, { label: "Base Fare", value: "Rs 19,000 onwards" }], tags: ["Premium AC", "Air Suspension", "VIP Travel"] },  
];  
  
const FEATURES = [  
  { title: "Premium Pushback Seats", desc: "Soft and wide pushback seats for long drives, outstation trips, and full-day sightseeing tours." },  
  { title: "Fully Air-Conditioned", desc: "All tempo travellers are fully AC, essential for summer months. Stay comfortable throughout your trip." },  
  { title: "Extra Legroom", desc: "Wide aisles and generous legroom make long drives comfortable for families, senior passengers, and large groups." },  
  { title: "Stylish Interiors", desc: "Clean modern interiors with LED lighting, perfect for destination weddings, corporate travel, and premium group experiences." },  
  { title: "Large Luggage Space", desc: "Ample boot space for gear, shopping bags, and large suitcases, ideal for multi-day trips and airport transfers." },  
  { title: "Smooth Suspension", desc: "Superior suspension handles roads and long highway drives smoothly, avoiding rattling on the way." },  
  { title: "Entertainment & Charging", desc: "Music systems, screens, and charging points in luxury vehicles keep everyone relaxed and connected on long outstation drives." },  
  { title: "Verified Local Drivers", desc: "Experienced drivers who know routes and major highways, ensuring safe, punctual, and professional service on every trip." },  
];  
  
const INCLUDED = [  
  "Base fare of Tempo Traveller",  
  "Fuel charges included",  
  "Toll taxes included",  
  "Parking charges included",  
  "Driver day allowance included",  
  "Clean, well-maintained vehicle",  
  "Driver Accommodation (Multi-day trips)"  
];  
  
const EXCLUDED = [  
  "State entry tax / permit charges (outstation, as applicable)",  
  "Driver night allowance (Rs 500 for tempo traveller, if applicable)",  
  "Any additional km beyond agreed package",  
  "Luggage carrier Charges",  
  "Personal expenses of passengers"  
];  
  
const routeDetails = [  
  { detail: "Distance", info: "200 km (actual approx 210 to 220 km with city approaches)" },  
  { detail: "Drive Time", info: "3.5 to 4 hours (4 to 5 hrs with stops/traffic)" },  
  { detail: "Route", info: "NH19 east to Sultanpur, then NH330/NH28 via Faizabad (Rama Path)" },  
  { detail: "Road Condition", info: "Excellent 4 to 6 lane national highways; smooth asphalt, well-lit" },  
  { detail: "Best Departure Time", info: "5:00 to 5:30 AM for day trip (reach Ayodhya by 9 to 10 AM)" },  
  { detail: "Best Return Time", info: "5:00 PM from Ayodhya (arrive Varanasi 9 to 10 PM)" },  
  { detail: "Tolls & Fuel Stops", info: "3 to 4 tolls (approx Rs 400 to 500 total, included); dhabas at Sultanpur & Faizabad" },  
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
    tip: "Leave phones in the tempo traveller. Traditional dress required; shorts and sleeveless clothing are turned away.",  
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
    desc: "Works for groups that have already spent time in Varanasi and are adding Ayodhya as a focused pilgrimage extension. 5 AM departure covers Hanuman Garhi, Ram Janmabhoomi, Kanak Bhawan, and Saryu Ghat, back in Varanasi by 9 PM.",  
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
    answer: "Book directly rather than through aggregators or third party platforms. Call Yatra Travel India on 9044019511. Direct bookings get the base rate without platform markup, confirmed vehicle details before the travel date, and a driver briefed on the group's requirements. Book at least 5 to 7 days in advance on regular dates and 2 to 3 weeks in advance during festival periods.",  
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
    answer: "A cab seats 4 to 6 people. A 12 seater tempo traveller seats 10 to 12 people. For groups of 8 or more the per head cost of the tempo traveller is consistently lower than booking multiple cabs. Beyond cost, the tempo traveller keeps the entire group in one vehicle for the full day. No separate arrival times at Ram Janmabhoomi, no coordinating two drivers through Ayodhya.",  
  },  
  {  
    question: "How do I confirm my booking with Yatra Travel India?",  
    answer: "Call or WhatsApp 9044019511. The booking is confirmed verbally on the same call with vehicle type, seating capacity, driver name, pickup location, departure time, and the fixed all-inclusive fare. A confirmation message is sent to the WhatsApp number provided. No advance payment required on most standard dates. The driver contacts the group the evening before travel with a final confirmation.",  
  },  
];  
  
// Custom Section Title Component  
function ST({ children, border = "border-[#0f6ec8]", id }) {  
  return <h2 id={id} className={"text-xl md:text-2xl font-extrabold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;  
}  
  
// Vehicle Card Component  
function VehicleCard({ vehicle, onSelect }) {  
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });  
  return (  
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">  
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">  
        {/* eslint-disable-next-line @next/next/no-img-element */}  
        {vehicle.img ? <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover" onError={e => { e.currentTarget.style.display = "none"; }} /> : <div className="w-full h-full flex items-center justify-center"><MdDirectionsBus className="text-[#0f6ec8] opacity-20 text-5xl" /></div>}  
        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">{vehicle.badge}</span>  
      </div>  
      <div className="p-5">  
        <h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>  
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">{vehicle.specs.map(s => <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed"><span className="font-bold">{s.label}:</span> {s.value}</p>)}</div>  
        <div className="flex flex-wrap gap-1.5 mb-4">{vehicle.tags.map(tag => <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>)}</div>  
        <button onClick={scrollToBooking} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">Book {vehicle.badge} Tempo</button>  
      </div>  
    </div>  
  );  
}  
  
// FAQ Accordion Item  
function FaqItem({ question, answer }) {  
  const [open, setOpen] = useState(false);  
  return (  
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">  
      <button  
        className="w-full flex justify-between items-center px-5 py-4 text-left bg-white hover:bg-[#f8faff] transition-colors"  
        onClick={() => setOpen(!open)}  
      >  
        <span className="font-semibold text-gray-900 pr-4">{question}</span>  
        <HiChevronDown  
          className={`flex-shrink-0 text-[#0f6ec8] text-xl transition-transform duration-300 ${open ? "rotate-180" : ""}`}  
        />  
      </button>  
      {open && (  
        <div className="px-5 py-4 bg-[#f8faff] border-t border-gray-100 text-gray-700 leading-relaxed text-sm">  
          {answer}  
        </div>  
      )}  
    </div>  
  );  
}  
  
export default function VaranasiToAyodhyaPage() {  
  return (  
    <main style={{ maxWidth: "100%", overflowX: "hidden" }}>  
      {/* === INTRO SECTION === */}  
      <section className="max-w-6xl mx-auto px-5 py-12">  
        <ST border="border-[#0f6ec8]">Varanasi to Ayodhya Tempo Traveller | Yatra Travel India</ST>  
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8 text-gray-700 text-sm leading-relaxed">  
          <p className="mb-4">  
            Kashi has the Ganga and one of the most powerful Jyotirlingas in India. Ayodhya has the Ram Janmabhoomi and the river where Lord Ram himself is said to have taken his final departure from this world. Putting both in the same journey is not just a logistical convenience. For millions of pilgrims it is the natural way these two sacred cities were always meant to be visited.  
          </p>  
          <p className="mb-4">  
            200 km separates them. A good road connects them. And a Yatra Travel India tempo traveller carries the whole group from one to the other without anyone arriving separately, without meters running in three different cabs, and without the kind of coordination that takes more out of a pilgrimage day than any queue at any temple ever could.  
          </p>  
          <div className="flex flex-wrap items-center gap-3 mt-6">  
            <a href="tel:9044019511" className="inline-flex items-center gap-2 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-md">  
              <FaPhoneAlt /> Call 9044019511 to Book  
            </a>  
          </div>  
        </div>  
  
        {/* === VEHICLE CARDS === */}  
        <ST id="services">Choose your ride with Yatra Travel India</ST>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">  
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} />)}  
        </div>  
      </section>  
  
      {/* === FARE TABLE === */}  
      <section className="py-12 bg-white border-t border-gray-100">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Varanasi to Ayodhya Tempo Traveller Fare</ST>  
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">Fixed all-inclusive fares. Fuel, tolls on NH19 and NH28, parking, and driver allowance are all included. The number confirmed at booking is the number paid when the group returns to Varanasi.</p>  
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-4">  
            <table className="w-full text-sm min-w-[600px] border-collapse">  
              <thead>  
                <tr className="bg-[#0f6ec8] text-white text-left">  
                  <th className="py-3 px-4 font-bold text-xs border-r border-white/20">Vehicle Type</th>  
                  <th className="py-3 px-4 font-bold text-xs border-r border-white/20">Seating Capacity</th>  
                  <th className="py-3 px-4 font-bold text-xs border-r border-white/20">Base Fare</th>  
                  <th className="py-3 px-4 font-bold text-xs">Book Now</th>  
                </tr>  
              </thead>  
              <tbody>  
                {fareData.map((row, i) => (  
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>  
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.type}</td>  
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.capacity}</td>  
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.fare}</td>  
                    <td className="py-3 px-4 border-b border-gray-100">  
                      <a href="tel:9044019511" className="inline-flex items-center justify-center bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-[11px] font-bold px-4 py-2 rounded-md transition-colors w-full">CALL US</a>  
                    </td>  
                  </tr>  
                ))}  
              </tbody>  
            </table>  
          </div>  
          <p className="text-xs text-gray-500">*Multi day packages include driver accommodation. Call 9044019511 for exact fare based on travel date.</p>  
        </div>  
      </section>  
  
      {/* === ROUTE AND DISTANCE === */}  
      <section className="py-12 bg-gray-50">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Route &amp; Distance</ST>  
          <p className="text-gray-700 text-sm mb-6 leading-relaxed">  
            Varanasi to Jaunpur to Sultanpur to Faizabad to Ayodhya. NH19 becoming NH28. 200 km. 3.5 to 4 hours on a normal day. Leave at 5 in the morning and the group is walking into Hanuman Garhi before 9 AM with the entire day still ahead.  
          </p>  
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">  
            <table className="w-full text-sm border-collapse">  
              <thead>  
                <tr className="bg-[#0f6ec8] text-white text-left">  
                  <th className="py-3 px-4 font-bold text-xs border-r border-white/20">Detail</th>  
                  <th className="py-3 px-4 font-bold text-xs">Information</th>  
                </tr>  
              </thead>  
              <tbody>  
                {routeDetails.map((row, i) => (  
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-[#f8faff]" : "bg-white"}`}>  
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-gray-100 text-xs w-1/3">{row.detail}</td>  
                    <td className="py-3 px-4 text-gray-600 text-xs leading-relaxed">{row.info}</td>  
                  </tr>  
                ))}  
              </tbody>  
            </table>  
          </div>  
        </div>  
      </section>  
  
      <TempoImageCards cd={{ cityname: "Varanasi to Ayodhya" }} />  
  
      {/* === FEATURES SECTION === */}  
      <section className="max-w-6xl mx-auto px-5 py-12">  
        <ST>Features of Our Tempo Travellers</ST>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">  
          {FEATURES.map(f => (  
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center shadow-sm">  
              <div className="w-12 h-12 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3">  
                <FaCheckCircle className="text-white text-xl" />  
              </div>  
              <h4 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h4>  
              <p className="text-[12px] text-gray-600 leading-relaxed">{f.desc}</p>  
            </div>  
          ))}  
        </div>  
      </section>  
  
      {/* === AYODHYA ATTRACTIONS === */}  
      <section className="py-12 bg-white border-t border-gray-100">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Ayodhya - What to See &amp; What Every Group Should Know</ST>  
          <p className="text-gray-600 text-sm max-w-3xl mb-8 leading-relaxed">  
            An honest account of what a group spending one day in Ayodhya actually sees, does, and experiences at each stop, not a list of identical two-line descriptions.  
          </p>  
          <div className="grid md:grid-cols-2 gap-6">  
            {attractions.map((place, i) => (  
              <div key={i} className="bg-[#f8faff] rounded-xl p-6 border border-blue-100 shadow-sm hover:border-[#0f6ec8] transition-all">  
                <h3 className="text-lg font-bold text-gray-900 mb-1">{place.name}</h3>  
                <p className="text-[#0f6ec8] text-xs font-bold uppercase tracking-wider mb-3">{place.subtitle}</p>  
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{place.desc}</p>  
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 flex items-start gap-2">  
                  <FaInfoCircle className="text-yellow-600 mt-0.5 flex-shrink-0 text-sm" />  
                  <p className="text-yellow-800 text-xs font-medium leading-relaxed">{place.tip}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
  
      <TempoSeatConfig cd={{ cityname: "Varanasi to Ayodhya" }} city="varanasi-to-ayodhya" />  
  
      {/* === DEPARTURE TIMING === */}  
      <section className="py-12 bg-gray-50">  
        <div className="max-w-5xl mx-auto px-6">  
          <ST>Departure Timing: The Decision That Changes Everything</ST>  
          <div className="grid md:grid-cols-2 gap-6">  
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm">  
              <h3 className="text-lg font-bold text-green-800 mb-4 border-b border-green-200 pb-2">Leave at 5:00 AM</h3>  
              <ul className="space-y-3 text-sm text-gray-700">  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Reach Ayodhya by 8:30 to 9:00 AM</span></li>  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Hanuman Garhi in the cool morning</span></li>  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Ram Lalla queue before the daily peak (1 to 2 hrs)</span></li>  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Kanak Bhawan in the early afternoon at its quietest</span></li>  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Saryu Ghat for the golden hour before the return</span></li>  
                <li className="flex items-start gap-2"><FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" /><span>Back in Varanasi by 9:00 PM with the full day complete</span></li>  
              </ul>  
            </div>  
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">  
              <h3 className="text-lg font-bold text-red-700 mb-4 border-b border-red-200 pb-2">Leave at 8:00 AM</h3>  
              <ul className="space-y-3 text-sm text-gray-700">  
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0 flex-shrink-0">X</span><span>Reach Ayodhya at 11:30 AM</span></li>  
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0 flex-shrink-0">X</span><span>Join the midday Ram Lalla queue (4 to 6 hrs on weekends)</span></li>  
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0 flex-shrink-0">X</span><span>Complete darshan between 4:00 to 5:00 PM</span></li>  
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0 flex-shrink-0">X</span><span>Drive back through the evening traffic</span></li>  
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0 flex-shrink-0">X</span><span>Reach Varanasi tired, having seen significantly less</span></li>  
              </ul>  
            </div>  
          </div>  
          <p className="text-center text-gray-600 text-sm mt-6 font-medium">The 5 AM alarm is the itinerary. Everything else organises itself around it.</p>  
        </div>  
      </section>  
  
      {/* === PACKAGE OPTIONS === */}  
      <section className="py-12 bg-white">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>One Day, Two Days, or Three Days</ST>  
          <div className="grid md:grid-cols-3 gap-6 mb-8">  
            {packageOptions.map((pkg, i) => (  
              <div key={i} className={`rounded-xl p-6 border ${pkg.color} shadow-sm hover:shadow-md transition-all`}>  
                <h3 className={`text-xl font-bold mb-3 ${pkg.headerColor}`}>{pkg.days}</h3>  
                <p className="text-gray-700 text-sm leading-relaxed">{pkg.desc}</p>  
              </div>  
            ))}  
          </div>  
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">  
            <p className="text-gray-800 text-sm font-medium">Multi day 12 seater packages start at <strong className="text-[#0f6ec8]">Rs 25,000</strong> with driver accommodation included.</p>  
            <a href="tel:9044019511" className="inline-flex items-center gap-2 mt-4 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors">  
              <FaPhoneAlt size={12} /> Call 9044019511  
            </a>  
          </div>  
        </div>  
      </section>  
  
      {/* === VEHICLE GUIDE === */}  
      <section className="py-12 bg-gray-50 border-t border-gray-100">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Which Tempo Traveller for Which Group</ST>  
          <p className="text-gray-600 text-sm mb-8">The question is not which vehicle sounds right. It is which vehicle is right for the specific group you actually have.</p>  
          <div className="space-y-4">  
            {vehicleGuide.map((v, i) => (  
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:border-[#0f6ec8] transition-all flex flex-col md:flex-row md:items-center gap-4">  
                <div className="md:w-1/4">  
                  <span className="inline-block bg-[#0f6ec8] text-white font-bold px-4 py-2 rounded-lg text-xs">{v.size}</span>  
                </div>  
                <div className="flex-1">  
                  <p className="font-bold text-gray-900 text-sm mb-1">{v.for}</p>  
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>  
                </div>  
                <div className="md:w-1/5 text-left md:text-right">  
                  <p className="font-bold text-[#0f6ec8] text-sm">{v.fare}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
  
      {/* === PRE-DEPARTURE CHECKLIST === */}  
      <section className="py-12 bg-white">  
        <div className="max-w-5xl mx-auto px-6">  
          <ST>Before Anyone Gets in the Vehicle</ST>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
            {preDepartureChecklist.map((item, i) => (  
              <div key={i} className="flex items-start gap-4 bg-[#f8faff] rounded-xl p-5 border border-blue-50 shadow-sm">  
                <div className="w-8 h-8 rounded-full bg-[#0f6ec8] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>  
                <div>  
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>  
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
  
      {/* === FARE INCLUSIONS AND EXCLUSIONS === */}  
      <section className="py-12 bg-gray-50 border-t border-gray-100">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Fare Inclusions and Exclusions</ST>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">  
            <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">  
              <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Included</span></div>  
              <ul className="list-none m-0 p-0">  
                {INCLUDED.map((item, i) => (  
                  <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>  
                ))}  
              </ul>  
            </div>  
            <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm">  
              <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span></div>  
              <ul className="list-none m-0 p-0">  
                {EXCLUDED.map((item, i) => (  
                  <li key={item} className={"px-5 py-4 text-sm font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>  
                ))}  
              </ul>  
            </div>  
          </div>  
        </div>  
      </section>  
  
      {/* === WHY YATRA === */}  
      <section className="py-12 bg-white">  
        <div className="max-w-6xl mx-auto px-6">  
          <ST>Why Yatra Travel India for Varanasi to Ayodhya?</ST>  
          <div className="grid md:grid-cols-3 gap-6">  
            {[  
              { icon: <MdDirectionsBus className="text-2xl" />, title: "Vehicle at Pickup on Time", desc: "The vehicle at the pickup point at the time agreed. Not approximately, not 5 minutes late." },  
              { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Driver Who Knows Ayodhya", desc: "Familiar with the new road layout, designated pilgrimage vehicle parking, and accessible entry points." },  
              { icon: <FaStar className="text-2xl" />, title: "Fare That Does Not Change", desc: "A fare that does not change between the booking call and the return to Varanasi. That is the whole promise." },  
            ].map((item, i) => (  
              <div key={i} className="bg-[#f8faff] rounded-xl p-6 border border-blue-100 text-center shadow-sm">  
                <div className="w-12 h-12 bg-[#0f6ec8] text-white rounded-lg flex items-center justify-center mx-auto mb-4">{item.icon}</div>  
                <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>  
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
  
      {/* === FAQs === */}  
      <section className="max-w-4xl mx-auto py-12 px-6">  
        <ST>Frequently Asked Questions</ST>  
        <div className="space-y-1">  
          {faqs.map((faq, i) => (  
            <FaqItem key={i} question={faq.question} answer={faq.answer} />  
          ))}  
        </div>  
      </section>  
    </main>  
  );  
}
