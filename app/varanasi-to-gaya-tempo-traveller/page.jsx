"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import RouteLoader from "@/components/Loader/RouteLoader";
import { useBooking } from "@/context/BookingContext";
import dynamic from "next/dynamic";
import {
  FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus,
  FaCheckCircle, FaMapMarkerAlt, FaStar, FaRoad,
  FaInfoCircle, FaSnowflake, FaCouch, FaMusic,
  FaUserTie, FaTools, FaHeadset, FaClock,
} from "react-icons/fa";
import { MdDirectionsBus } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";

const BookingTabsDynamic = dynamic(() => import("@/components/BookingTabs"), { ssr: false });

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.yatratravelindia.com/varanasi-to-gaya-tempo-traveller#service",
      "url": "https://www.yatratravelindia.com/varanasi-to-gaya-tempo-traveller",
      "name": "Varanasi to Gaya Tempo Traveller | Yatra Travel India",
      "description": "Book tempo traveller from Varanasi to Gaya for Vishnupad Temple and Bodh Gaya darshan. 9 to 20 seater AC vehicles with fixed all-inclusive fares.",
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
      "@id": "https://www.yatratravelindia.com/varanasi-to-gaya-tempo-traveller#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Gaya from Varanasi by road?",
          "acceptedAnswer": { "@type": "Answer", "text": "250 km via NH19 and NH83. The Varanasi to Gaya tempo traveller drive takes 4 to 5 hours." },
        },
        {
          "@type": "Question",
          "name": "How much does a tempo traveller from Varanasi to Gaya cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller from Varanasi to Gaya starts at Rs 16,500 for a round trip. All fares include fuel, tolls on NH19 and NH83, parking and driver allowance." },
        },
        {
          "@type": "Question",
          "name": "Is Varanasi to Gaya possible as a one day trip by tempo traveller?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. A 6 AM departure from Varanasi reaches Gaya by 10:30 AM. Vishnupad Temple pitru tarpan, Bodh Gaya Mahabodhi Temple darshan, and return to Varanasi by 9 PM." },
        },
      ],
    },
  ],
};

const VEHICLES = [
  {
    badge: "9 Seater",
    title: "9 Seater Tempo Traveller from Varanasi to Gaya",
    img: "/images/9seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "6 to 9 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "Rs 13,500 onwards" },
      { label: "Best For", value: "Small families, 6 to 8 people" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Pushback Seats", "Small Groups", "Pilgrimage"],
  },
  {
    badge: "12 Seater",
    title: "12 Seater Tempo Traveller from Varanasi to Gaya",
    img: "/images/12seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "10 to 12 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "Rs 16,500 onwards" },
      { label: "Best For", value: "Most popular for pitru tarpan families" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Most Popular", "Family Groups", "Pilgrimage"],
  },
  {
    badge: "16 Seater",
    title: "16 Seater Tempo Traveller from Varanasi to Gaya",
    img: "/images/16seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "13 to 16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "Rs 22,000 onwards" },
      { label: "Best For", value: "Extended families and religious groups" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Extra Legroom", "Large Groups", "Religious Tours"],
  },
  {
    badge: "20 Seater",
    title: "20 Seater Tempo Traveller from Varanasi to Gaya",
    img: "/images/20seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "17 to 20 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "Rs 25,000 onwards" },
      { label: "Best For", value: "Joint families and temple trust groups" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Max Capacity", "Temple Groups", "Joint Families"],
  },
  {
    badge: "Luxury",
    title: "Luxury Tempo Traveller from Varanasi to Gaya",
    img: "/images/maharaja.jpg",
    specs: [
      { label: "Seating Capacity", value: "9 to 16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "Rs 20,000 onwards" },
      { label: "Best For", value: "Elderly passengers, premium comfort" },
      { label: "Facility", value: "Reclining Seats, Air Suspension, Multi-Zone AC" },
    ],
    tags: ["Premium AC", "Air Suspension", "Elderly Friendly", "Luxury"],
  },
];

const FARE_TABLE = [
  { type: "9 Seater Tempo Traveller from Varanasi to Gaya", capacity: "6 to 9 people", fare: "Rs 13,500 onwards" },
  { type: "12 Seater Tempo Traveller from Varanasi to Gaya", capacity: "10 to 12 people", fare: "Rs 16,500 onwards" },
  { type: "16 Seater Tempo Traveller from Varanasi to Gaya", capacity: "13 to 16 people", fare: "Rs 22,000 onwards" },
  { type: "20 Seater Tempo Traveller from Varanasi to Gaya", capacity: "17 to 20 people", fare: "Rs 25,000 onwards" },
  { type: "Luxury Tempo Traveller from Varanasi to Gaya", capacity: "9 to 16 people", fare: "Rs 20,000 onwards" },
];

const ROUTE_TABLE = [
  { detail: "Distance", info: "230 km" },
  { detail: "Drive Time", info: "4 to 5 hours (5 to 6 hrs with stops/traffic; express possible in 3.5 hrs)" },
  { detail: "Route", info: "NH19 via Sasaram, Aurangabad, Mohania; alternate via GT Road sections" },
  { detail: "Road Condition", info: "Good 4-lane national highway; smooth tarmac, moderate truck traffic, well-lit major stretches" },
  { detail: "Best Departure Time", info: "4:00 to 5:00 AM (clear pre-dawn roads, arrive Gaya by 9 AM for Mahabodhi darshan)" },
  { detail: "Best Return Time", info: "1:00 to 2:00 PM (back in Varanasi by 7 PM, avoiding night driving near Sasaram)" },
  { detail: "Tolls and Fuel Stops", info: "3 to 4 tolls (approx Rs 350 to 450 total, included); dhabas at Mohania (km 80), Sasaram (km 150)" },
  { detail: "Key Landmarks", info: "Mohania markets, Sasaram Tomb (quick stop), Vishnupad Temple entry, Bodh Gaya" },
];

const ATTRACTIONS = [
  {
    name: "Vishnupad Temple",
    subtitle: "The Primary Destination",
    desc: "The Vishnupad Temple on the Falgu River is one of the most significant sites in Hinduism for performing pitru tarpan -- the ancestral water offering rituals that most Hindu families consider a sacred obligation to their departed family members. The ghat approach from the tempo traveller parking is direct and manageable for elderly group members.",
    tip: "Carry black sesame seeds, kusha grass, barley, and white flowers for the pitru tarpan. More reliable to carry from Varanasi than to depend on Gaya market availability on busy pilgrimage days.",
  },
  {
    name: "Mahabodhi Temple, Bodh Gaya",
    subtitle: "The Most Important Buddhist Site on Earth",
    desc: "The Mahabodhi Temple complex at Bodh Gaya is where Gautama Buddha attained enlightenment under the Bodhi Tree. A UNESCO World Heritage Site and one of the four holy sites of Buddhism. Most Varanasi to Gaya groups include Bodh Gaya in the same day circuit. The drive from Gaya city to Bodh Gaya takes 15 to 20 minutes.",
    tip: "Allow a minimum of 2 hours at Bodh Gaya. The complex is large and the atmosphere demands unhurried time.",
  },
  {
    name: "Rajgir",
    subtitle: "For Groups Extending the Circuit",
    desc: "Rajgir is 80 km from Gaya. Hot springs, the Vishwa Shanti Stupa, and the hills where Buddha spent several monsoons. Most groups add Rajgir on the second day of a two-day Varanasi to Gaya trip rather than trying to cover it alongside Vishnupad and Bodh Gaya in a single day.",
    tip: "Rajgir works best as an overnight extension. The Varanasi to Gaya multi-day tempo traveller package with driver accommodation covers this cleanly.",
  },
  {
    name: "Nalanda",
    subtitle: "The Ancient University",
    desc: "Nalanda is 95 km from Gaya. The ruins of the ancient Nalanda University, a UNESCO World Heritage Site, are 20 minutes from Rajgir. Groups interested in the complete Buddhist pilgrimage circuit -- Bodh Gaya, Rajgir, Nalanda -- typically plan a three-day Varanasi to Gaya tempo traveller trip.",
    tip: "The Nalanda Museum next to the ruins has artefacts that give context to what is being seen at the excavation site. Worth an hour before the ruins walk.",
  },
];

const FEATURES = [
  { icon: <FaSnowflake />, title: "Full Air Conditioning", desc: "Fully working AC to keep you comfortable during the entire 4 to 5 hour Varanasi to Gaya journey both ways." },
  { icon: <FaCouch />, title: "Comfortable Pushback Seats", desc: "Reclining seats for maximum comfort during the long NH19 and NH83 highway journey each way." },
  { icon: <FaMusic />, title: "Music System", desc: "High-quality music system and large windows with sliding curtains for a relaxed travel experience." },
  { icon: <FaUserTie />, title: "Professional Drivers", desc: "Experienced drivers who know the Varanasi to Gaya route via NH19 and NH83 and the Vishnupad Temple approach." },
  { icon: <FaMapMarkerAlt />, title: "Flexible Stops", desc: "Stop at Vishnupad, Bodh Gaya, Rajgir, or Nalanda at your own pace without any time pressure." },
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
    desc: "6 AM departure from Varanasi. Reach Gaya by 10:30 AM. Vishnupad Temple pitru tarpan, Bodh Gaya Mahabodhi Temple darshan, return to Varanasi by 9 PM. Covers the two primary destinations cleanly with an early start.",
  },
  {
    days: "Two Days",
    color: "bg-orange-50 border-orange-200",
    headerColor: "text-orange-600",
    desc: "Day one: Varanasi to Gaya, Vishnupad Temple and Bodh Gaya. Overnight in Gaya. Day two: Rajgir hot springs and Vishwa Shanti Stupa, return to Varanasi by evening. Neither destination feels rushed.",
  },
  {
    days: "Three Days",
    color: "bg-green-50 border-green-200",
    headerColor: "text-green-600",
    desc: "The complete Buddhist and Hindu pilgrimage circuit. Day one: Gaya and Bodh Gaya. Day two: Rajgir. Day three: Nalanda and return to Varanasi. Multi-day 12 seater packages with driver accommodation available.",
  },
];

const CHECKLIST = [
  { title: "Puja items from Varanasi", desc: "Black sesame seeds, kusha grass, barley, and white flowers for pitru tarpan at Vishnupad Ghat. Carry from Varanasi -- more reliable than depending on Gaya market availability on busy pilgrimage days." },
  { title: "Keep puja items accessible", desc: "Pack puja items in a small bag accessible during the journey rather than inside large checked luggage. You may want to prepare or organise items during the drive." },
  { title: "Elderly passenger comfort confirmed", desc: "For groups with elderly grandparents making this journey for pitru tarpan, the luxury tempo traveller with reclining seats and air suspension is the right choice for a 4 to 5 hour highway journey." },
  { title: "One person leading the group", desc: "At Vishnupad Ghat during busy pilgrimage periods the ghat area can be crowded. One designated coordinator keeps the family together and makes every stop take half the time it would otherwise." },
  { title: "4 to 5 AM departure confirmed with the driver", desc: "A 4 to 5 AM departure from Varanasi reaches Gaya by 9 AM with the full day available for Vishnupad darshan, Bodh Gaya, and the return. Confirm the exact time with the driver the evening before." },
];

const FAQS = [
  { q: "How far is Gaya from Varanasi by road?", a: "250 km via NH19 and NH83. The Varanasi to Gaya tempo traveller drive takes 4 to 5 hours. Leave Varanasi at 6 AM and the group reaches Vishnupad Temple by 10 to 10:30 AM with the full day available for the pilgrimage circuit." },
  { q: "Which route does the Varanasi to Gaya tempo traveller take?", a: "NH19 from Varanasi toward Mughal Sarai then NH83 through Sasaram and Dehri into Gaya. Good national highway condition throughout. Most experienced tempo traveller Varanasi to Gaya drivers use this route as standard. Total 250 km." },
  { q: "Is Varanasi to Gaya possible as a one day trip by tempo traveller?", a: "Yes comfortably. A 6 AM departure from Varanasi reaches Gaya by 10:30 AM. Vishnupad Temple pitru tarpan, Bodh Gaya Mahabodhi Temple darshan, and return to Varanasi by 9 PM. The Varanasi to Gaya one day tempo traveller trip works cleanly with an early start." },
  { q: "How many days are needed for a complete Varanasi to Gaya pilgrimage by tempo traveller?", a: "One day covers Gaya and Bodh Gaya comfortably with a 6 AM Varanasi departure. Two days adds Rajgir. Three days adds Nalanda. The Varanasi to Gaya tempo traveller multi-day package with driver accommodation is the most practical option for groups wanting the complete Buddhist and Hindu pilgrimage circuit without rushing any stop." },
  { q: "How much does a 12 seater tempo traveller from Varanasi to Gaya cost?", a: "The 12 seater tempo traveller Varanasi to Gaya starts at Rs 16,500 for a round trip. One way starts at Rs 9,000. All fares include fuel, tolls on NH19 and NH83, parking at Vishnupad Temple and the Mahabodhi Temple complex, and driver allowance for the full day." },
  { q: "Is the Varanasi to Gaya tempo traveller suitable for elderly passengers?", a: "Yes. The Varanasi to Gaya tempo traveller is the most practical option for families travelling with elderly grandparents for pitru tarpan at Gaya. Door to door pickup, no station walking, no platform stairs, no luggage coordination. For maximum comfort the luxury tempo traveller Varanasi to Gaya with reclining seats and air suspension is the right choice for elderly passengers on a 4 to 5 hour journey." },
  { q: "Can the Varanasi to Gaya tempo traveller pick up from the airport or railway station?", a: "Yes. Varanasi to Gaya tempo traveller pickup available from Lal Bahadur Shastri International Airport, Varanasi Junction, Manduadih Station, and all hotel and ghat locations across Varanasi. Driver arrives at the confirmed pickup point at the agreed time. No additional charge for airport or station pickup within the standard Varanasi to Gaya tempo traveller package fare." },
  { q: "Why is Yatra Travel India the trusted tempo traveller service for Varanasi to Gaya?", a: "Vehicle at the pickup point at the agreed time. Driver who knows NH19, NH83, Vishnupad Temple approach, and Bodh Gaya roads personally. Varanasi to Gaya tempo traveller fare confirmed at booking is fare paid at the end. No additions. No surprises. That combination is why groups come back. Call 9044019511 to experience it." },
  { q: "What puja items should the group prepare before boarding the Varanasi to Gaya tempo traveller?", a: "Black sesame seeds, kusha grass, barley, and white flowers for pitru tarpan at Vishnupad Ghat. Most of these are available at the Varanasi ghat shops before departure. Carrying them from Varanasi is more reliable than depending on Gaya market availability on busy pilgrimage days. Keep puja items in a small bag accessible during the journey rather than packed inside large luggage." },
  { q: "How do I book a tempo traveller from Varanasi to Gaya?", a: "Call or WhatsApp Yatra Travel India on 9044019511. Share group size, travel date, and Varanasi pickup location. Tempo traveller booking Varanasi to Gaya confirmed on the same call with vehicle details, driver name, and fixed all-inclusive fare. Driver contacts the group the evening before travel." },
  { q: "Is the 12 seater the best tempo traveller for Varanasi to Gaya?", a: "For most pilgrimage families of 9 to 12 people the 12 seater is the right choice. It fits everyone comfortably with pilgrimage bags, puja items, offerings for the Vishnupad ghat rituals, and the general weight of luggage a family making an ancestral rites journey actually travels with. Return package starts at Rs 16,500." },
  { q: "Can I include Bodh Gaya, Rajgir, and Nalanda in the same Varanasi to Gaya tempo traveller trip?", a: "Bodh Gaya is 15 to 20 minutes from Gaya and fits comfortably in a one-day trip alongside Vishnupad Temple. Rajgir is best added on a second day. Nalanda on a third day. The Yatra Travel India multi-day Varanasi to Gaya tempo traveller package with driver accommodation covers the full circuit without any day feeling rushed." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/varanasi-to-ayodhya-tempo-traveller", city: "Tempo Traveller Varanasi to Ayodhya", type: "Ram Janmabhoomi Darshan and Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ayodhya", city: "Tempo Traveller in Ayodhya", type: "Ram Mandir Darshan and Local Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-prayagraj", city: "Tempo Traveller in Prayagraj", type: "Sangam and Triveni Darshan" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Local Sightseeing and Kashi Darshan" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra", city: "Tempo Traveller in Agra", type: "Heritage Tours and Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mathura", city: "Tempo Traveller in Mathura", type: "Krishna Janmabhoomi Darshan" },
];

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
}

function VehicleCard({ vehicle }) {
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-[#0f6ec8] hover:shadow-md transition-all">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
        {vehicle.img && (
          <img src={vehicle.img} alt={vehicle.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        )}
        <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full bg-[#0f6ec8] z-10">{vehicle.badge}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-sm mb-4 leading-snug">{vehicle.title}</h3>
        <div className="bg-[#f8faff] rounded-lg p-4 mb-4 space-y-2">
          {vehicle.specs.map((s) => (
            <p key={s.label} className="text-[12.5px] text-gray-700 leading-relaxed">
              <span className="font-bold">{s.label}:</span> {s.value}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-[#0f6ec8] border-blue-200">{tag}</span>
          ))}
        </div>
        <button onClick={scrollToBooking} className="w-full py-3 text-sm font-bold text-white rounded-lg bg-[#0f6ec8] hover:bg-[#0a4a8f] transition-colors">
          Book {vehicle.badge} Tempo
        </button>
      </div>
    </div>
  );
}

export default function VaranasiToGayaPage() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { pickupLocation, dropLocation, pickupDate, returnDate, pickupTime } = useBooking();

  const onSubmit = () => {
    setLoader(true);
    let detectedServiceType = "One Way";
    if (returnDate === "" && dropLocation === "") detectedServiceType = "Cab Rental Service";
    else if (returnDate !== "") detectedServiceType = "Round Trip";
    router.push(
      `/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(detectedServiceType)}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`
    );
    setTimeout(() => setLoader(false), 2000);
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      {loader && <RouteLoader />}
      <Navbar />

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Varanasi to Gaya Tempo Traveller -- Vishnupad Temple and Bodh Gaya Pilgrimage Specialists</p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link>
          <span>/</span>
          <span>Varanasi to Gaya Tempo Traveller</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">
            Varanasi to Gaya Tempo Traveller
          </h1>
          <p className="text-blue-200 text-center text-sm mb-5">
            Vishnupad Temple · Bodh Gaya · Rajgir · Nalanda · Fixed All-Inclusive Fare
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury Options", "Fully Air Conditioned", "Fixed Fare -- No Hidden Charges"].map((b) => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>

          {/* BOOKING FORM */}
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
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[
            { title: "On-Time Pickup", sub: "Pickup from your exact location" },
            { title: "Clean and Well Maintained", sub: "Checked before every trip" },
            { title: "Transparent Pricing", sub: "Toll, parking, driver allowance included" },
            { title: "Verified Drivers", sub: "Know Varanasi to Gaya route personally" },
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

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* INTRO HIGHLIGHT */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">
            Yatra Travel India offers <strong>tempo traveller hire from Varanasi to Gaya</strong> for Vishnupad Temple pitru tarpan, Bodh Gaya Mahabodhi Temple darshan, and the complete Buddhist and Hindu pilgrimage circuit. <strong>9 seater to 20 seater AC tempo travellers including luxury options.</strong> Fixed all-inclusive fares covering fuel, tolls on NH19 and NH83, parking, and driver allowance. No hidden charges. Call <strong>9044019511</strong> to book.
          </p>
        </div>

        {/* INTRO */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
            Varanasi to Gaya Tempo Traveller -- Yatra Travel India
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Gaya is 250 km from Varanasi. On NH19 and NH83 that is 4 to 5 hours in a tempo traveller from Varanasi to Gaya. And for the groups making this particular journey, those 4 to 5 hours are not just a highway transfer between two Bihar and UP cities. They are the connection between two of the most sacred pilgrimage destinations in India, placed 250 km apart on the same road, waiting to be covered in the same trip.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Varanasi has the Kashi Vishwanath Jyotirlinga and three thousand years of unbroken life on the Ganga bank. Gaya has something entirely different. The Vishnupad Temple on the Falgu River, one of the most significant sites in Hinduism for performing pitru tarpan -- the ancestral water offering rituals that most Hindu families consider a sacred obligation to their departed family members.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              A Yatra Travel India tempo traveller Varanasi to Gaya carries the whole group from the Varanasi pickup point to the Gaya destination in one vehicle, one driver who has covered this route before, one fare confirmed before departure that does not change when the group arrives.
            </p>
          </div>
        </div>

        {/* VEHICLE CARDS */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Choose Your Ride -- Varanasi to Gaya Tempo Traveller
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {VEHICLES.map((v) => <VehicleCard key={v.badge} vehicle={v} />)}
        </div>

        {/* FARE TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-orange-500">
          Varanasi to Gaya Tempo Traveller Fare
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Type", "Seating Capacity", "Base Fare", "Book Now"].map((h) => (
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

        {/* 12 SEATER HIGHLIGHT */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
            Book 12 Seater Tempo Traveller from Varanasi to Gaya
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            The 12 seater tempo traveller from Varanasi to Gaya is the most consistently booked vehicle on this route. Most pilgrimage families travelling from Varanasi to Gaya for pitru tarpan or Bodh Gaya darshan are groups of 9 to 12 people. The 12 seater fits everyone comfortably with pilgrimage bags, puja items, offerings for the Vishnupad ghat rituals, and the general weight of luggage that a family carrying the purpose of an ancestral rites journey actually travels with.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            A family of 10 in a 12 seater tempo traveller Varanasi to Gaya at a one way fare of Rs 9,000 is paying Rs 900 per person. Door to door from the Varanasi home or hotel to the Vishnupad Temple ghat approach or the Mahabodhi Temple entrance at Bodh Gaya. 250 km. 4 to 5 hours. One vehicle, one driver, the whole family together from the moment of departure.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Return package for the 12 seater Varanasi to Gaya tempo traveller starts at Rs 16,500. Fuel for the full route, NH19 and NH83 toll, parking at Vishnupad Temple and the Mahabodhi Temple complex, and driver allowance -- all inside that fare.
          </p>
          <a href="tel:9044019511" className="inline-flex items-center gap-2 mt-4 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
            <FaPhoneAlt size={12} /> Call 9044019511 to Book
          </a>
        </div>

        {/* ROUTE TABLE */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
          Route and Distance -- Varanasi to Gaya
        </h2>
        <p className="text-sm text-gray-600 mb-5">NH19 from Varanasi toward Mughal Sarai then NH83 through Sasaram and Dehri into Gaya. 250 km. 4 to 5 hours on a normal day.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
          <table className="w-full text-sm min-w-[400px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Detail", "Information"].map((h) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">
          Gaya and Beyond -- What to See and What Every Group Should Know
        </h2>
        <p className="text-sm text-gray-500 mb-8">An honest account of what a group spending one or more days on the Varanasi to Gaya pilgrimage circuit actually sees and experiences at each stop.</p>
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

        {/* FEATURES */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Features of Our Tempo Travellers for Varanasi to Gaya
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-lg">{f.icon}</div>
              <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* FARE INCLUSIONS */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Fare Inclusions and Exclusions
        </h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-green-500">
          One Day, Two Days, or Three Days -- Which One Is Right?
        </h2>
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
          <p className="text-gray-700 text-sm">Multi day 12 seater packages with driver accommodation available. Call for exact fare based on group size and travel dates.</p>
          <a href="tel:9044019511" className="inline-flex items-center gap-2 mt-3 bg-[#0f6ec8] hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
            <FaPhoneAlt size={12} /> Call 9044019511 to Build Your Tour
          </a>
        </div>

        {/* CHECKLIST */}
        <h2 className="text-xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-[#0f6ec8]">
          Before Anyone Gets in the Vehicle -- Five Things
        </h2>
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
        <h2 className="text-xl font-bold text-gray-900 mb-8 pl-4 border-l-4 border-[#0f6ec8]">
          Why Yatra Travel India for Varanasi to Gaya?
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: <MdDirectionsBus className="text-2xl" />, title: "Vehicle at Pickup on Time", desc: "The vehicle at the pickup point at the time agreed. Not approximately, not after two reminder calls. At the time confirmed on the booking call." },
            { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Driver Who Knows the Route", desc: "NH19, NH83, the Vishnupad Temple ghat approach, Bodh Gaya Mahabodhi Temple parking, and the roads to Rajgir and Nalanda. From having driven these roads before." },
            { icon: <FaStar className="text-2xl" />, title: "Fare That Does Not Change", desc: "The Varanasi to Gaya tempo traveller fare confirmed at booking is the fare paid when the group is back in Varanasi. No toll added separately. No waiting charge for time at the Vishnupad Ghat." },
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Varanasi to Gaya Tempo Traveller</h3>
            <p className="text-blue-200 text-sm max-w-xl">Vehicle confirmed, driver assigned, fare locked. Everything sorted before the pilgrimage begins. Call 9044019511.</p>
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
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Frequently Asked Questions -- Varanasi to Gaya Tempo Traveller
        </h2>
        <div className="mb-12">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>

        {/* NETWORK */}
        <h2 className="text-xl font-bold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
          Our Pan-India Tempo Traveller Network
        </h2>
        <p className="text-sm text-gray-500 mb-6">Connecting India major pilgrimage and travel destinations with reliable group transport.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {NETWORK.map((n) => (
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

      </div>

      <Footer />

      {/* FLOATING BUTTONS */}
      <a
        href="https://wa.me/919044019511"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        <FaWhatsapp size={26} color="#fff" />
      </a>
      <a
        href="tel:+919044019511"
        aria-label="Call Now"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f6ec8] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        <FaPhoneAlt size={20} color="#fff" />
      </a>

    </div>
  );
}
