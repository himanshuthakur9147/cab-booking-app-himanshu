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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-mathura#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-mathura",
      "name": "Tempo Traveller Hire in Mathura | Yatra Travel India",
      "description": "Book a tempo traveller in Mathura for pilgrimage, Vrindavan tours, and group travel. 9 to 17 seater vehicles with driver, fixed fare, and no hidden charges.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.yatratravelindia.com/#business",
        "name": "Yatra Travel India",
        "url": "https://www.yatratravelindia.com",
        "telephone": "+91-9044019511",
        "priceRange": "₹₹",
      },
      "areaServed": { "@type": "City", "name": "Mathura" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "4000", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-mathura" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "589" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-mathura#faq",
      "mainEntity": [
        { "@type": "Question", "name": "Is a tempo traveller the best option for Mathura Vrindavan pilgrimage?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a tempo traveller is ideal for group pilgrimage as everyone travels together comfortably with one driver and fixed fare." } },
        { "@type": "Question", "name": "When should I book a tempo traveller for Janmashtami in Mathura?", "acceptedAnswer": { "@type": "Answer", "text": "You should book at least 6 to 8 weeks in advance as vehicles get fully booked during Janmashtami." } },
        { "@type": "Question", "name": "Can I hire a tempo traveller for Holi festival in Mathura?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are widely booked for Holi tours covering Mathura, Vrindavan, Barsana, and Nandgaon." } },
        { "@type": "Question", "name": "Do drivers know Mathura pilgrimage routes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, drivers are experienced and familiar with temple timings, routes, and parking locations in Mathura and nearby areas." } },
        { "@type": "Question", "name": "Is a luxury tempo traveller good for elderly passengers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers offer reclining seats, smooth suspension, and better comfort for elderly passengers." } },
        { "@type": "Question", "name": "What is the per km rate for outstation tempo traveller from Mathura?", "acceptedAnswer": { "@type": "Answer", "text": "Rates start from Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater including fuel and driver." } },
        { "@type": "Question", "name": "Can I book a tempo traveller for Govardhan Parikrama?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are commonly booked for Govardhan Parikrama with driver support throughout the journey." } },
        { "@type": "Question", "name": "How many people can travel in a 20 seater tempo traveller?", "acceptedAnswer": { "@type": "Answer", "text": "A 20 seater can comfortably accommodate 17 to 20 passengers with luggage." } },
        { "@type": "Question", "name": "Is early morning pickup available for temple visits?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, early morning pickups are available starting from 5 AM." } },
        { "@type": "Question", "name": "Can I extend my booking during the trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, booking can be extended by informing the driver or support team. Extra hours are charged at fixed rates." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",   title: "9 Seater Tempo Traveller in Mathura",   img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹3,000 onwards" }, { label: "Outstation Rate", value: "₹16/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Family Pilgrimage", "Small Groups", "Vrindavan Tour"] },
  { badge: "12 Seater",  title: "12 Seater Tempo Traveller in Mathura",  img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹4,000 onwards" }, { label: "Outstation Rate", value: "₹21/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Most Popular", "Braj Circuit", "Govardhan Tour"] },
  { badge: "16 Seater",  title: "16 Seater Tempo Traveller in Mathura",  img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹5,500 onwards" }, { label: "Outstation Rate", value: "₹26/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Reclining Seats, Luggage Space" }], tags: ["Full AC", "Group Tours", "Holi Circuit", "School Trips"] },
  { badge: "20 Seater",  title: "20 Seater Tempo Traveller in Mathura",  img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹30/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Full AC", "Janmashtami Groups", "Wedding Parties", "Large Pilgrimages"] },
  { badge: "Luxury",     title: "Luxury Tempo Traveller in Mathura",     img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,000 onwards" }, { label: "Outstation Rate", value: "₹30/km onwards" }, { label: "Suspension", value: "Air Suspension" }, { label: "Facility", value: "Reclining Seats, Multi-Zone AC, Screens" }], tags: ["Air Suspension", "Reclining Seats", "Elderly Pilgrims", "VIP Groups"] },
  { badge: "Maharaja",   title: "Maharaja Tempo Traveller in Mathura",   img: "/images/maharaja.jpg", specs: [{ label: "Seating Capacity", value: "9/12/16 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Seats", value: "Reclining Sofa Seats" }, { label: "Entertainment", value: "Individual Screens" }, { label: "Facility", value: "Premium Interiors, Full Recline, AC" }], tags: ["Sofa Seats", "Individual Screens", "Premium Travel", "VIP Darshan"] },
];

const PLACES = [
  { name: "Dwarkadhish Temple",       desc: "If you visit in Mathura is Dwarkadhish, this Temple is devoted to Lord Krishna. Build up in 1814 through Seth Gokul Das Parikh. This holy place is well-known for festivals and for its structural design including celebrations particularly during Janmashtami plus Holi. The temples have imprinted pillars; difficult job and holy atmosphere build up attraction." },
  { name: "Shri Krishna Janmasthan", desc: "It is the mainly noteworthy site in Mathura and is thought to be the place of birth of Lord Krishna. The place of worship is a live site of reverence where thousands of followers visit every day to offer prayers. The place has vast historical and religious significance, has its line from Dwapar Yuga." },
  { name: "ISKCON Temple",            desc: "The temple is also famous as Krishna Balaram Mandir. Set up in 1975 by the Worldwide Society for Krishna Realization, this temple is a big attraction for followers and sightseers. This temple is known for stunning deity worship and serene environment for people." },
  { name: "Vishram Ghat",             desc: "It is an exceptionally individual place in Mathura as it is said to be the place where Lord Krishna took a rest after killing Kansa. This ghat on the Yamuna River is an incredibly peaceful and calm place. It is often visited for its holy worthiness and evening worship aarti. The ghat is bounded by lots of small place of worship and major sites therefore it should be visited." },
  { name: "Prem Mandir",              desc: "The temple is situated in Vrindavan is a newest but very well-liked temple, and people are eager to travel. Build up by Jagadguru Kripalu, this temple is well-known for its white marble building, complicated carvings as well as evening beam show. The temple compound has striking gardens and fountains which provides visual pleasure to the people." },
  { name: "Barsana & Nandgaon",       desc: "Birthplace of Radha Rani and hometown of Lord Krishna respectively. Famous for Lathmar Holi celebrations. Complete Holi circuit covers Mathura, Vrindavan, Barsana, and Nandgaon — best covered by tempo traveller in one comfortable day." },
];

const TEMPO_TYPES = [
  {
    type: "Standard Tempo Traveller in Mathura",
    color: "blue",
    desc: "The Standard Tempo Traveller offers budget friendly services. This can come well with seating capacity of 9, 14 or 18 seater that goes up to 26 seater. It is suitable for family tours or pilgrimage. It is considered to be cheaper. It offers basic comforts to travellers on the way.",
  },
  {
    type: "Deluxe Tempo Traveller in Mathura",
    color: "indigo",
    desc: "Those who desire to have a bit more comfort and the Deluxe Tempo Traveller is the next stride. With seating capacity the same as the Standard but it is more comfortable. It has better sitting arrangement and ac facilities. This is for those people who need better comforts on a trip without expanding the budget.",
  },
  {
    type: "Luxury Tempo Traveller in Mathura",
    color: "purple",
    desc: "With seating capacity of 9, 12, 14, 18 and 20 seaters this is accurate in seating. Having ample leg room and superb air conditioning, it makes your journey good. The interior has lot of space and looks beautiful. This is ideal for the long trip and special occasions.",
  },
  {
    type: "Maharaja Tempo Traveller in Mathura",
    color: "orange",
    desc: "For the final travel experience the Maharaja is the topmost choice. With seating capacity of 9, 12 and 16 seaters and have reclining sitting arrangements, this offers relaxation. You can come across the individual entertainment monitor and premium interiors. It is for those who desire to know-how luxury on the road so each facet of the journey is cosy and pleasant.",
  },
];

const MATHURA_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Mathura",     capacity: "9 + Driver",     ac: "AC",          ideal: "Small family pilgrimages — Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat aarti, and Vrindavan darshan" },
  { vehicle: "12 Seater Tempo Traveller in Mathura",    capacity: "12 + Driver",    ac: "AC",          ideal: "Most popular — full Braj circuit, Govardhan Parikrama, Barsana and Nandgaon, Janmashtami groups, and outstation to Agra" },
  { vehicle: "16 Seater Tempo Traveller in Mathura",    capacity: "16 + Driver",    ac: "AC",          ideal: "Office groups, school excursions, extended family tours — Holi festival circuit covering Mathura, Vrindavan, Barsana, Nandgaon" },
  { vehicle: "20 Seater Tempo Traveller in Mathura",    capacity: "17–20 + Driver", ac: "AC",          ideal: "Large Janmashtami groups, Holi tour parties, wedding transfers — one vehicle for the entire Braj pilgrimage circuit" },
  { vehicle: "Luxury Tempo Traveller in Mathura",       capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "Groups with elderly passengers — reclining seats, air suspension, multi-zone AC for long pilgrimage circuits" },
  { vehicle: "Maharaja Tempo Traveller in Mathura",     capacity: "9/12/16 + Driver", ac: "Premium AC", ideal: "VIP darshan, premium wedding groups — sofa seats with full recline, individual entertainment screens, premium interiors" },
];

const USE_TAGS = [
  "Krishna Janmabhoomi Darshan", "Dwarkadhish Temple", "ISKCON Mathura", "Vishram Ghat Aarti",
  "Govardhan Parikrama", "Vrindavan Temple Tour", "Barsana Holi Tour", "Nandgaon Visit",
  "Janmashtami Group Travel", "Holi Festival Circuit", "Family Pilgrimage Trip",
  "Early Morning Banke Bihari Darshan", "Wedding Guest Transfers", "Prem Mandir Visit",
];

const WHY_CARDS = [
  { title: "On Time Pickup Every Time",         desc: "On Time Pickup Every Time Driver details shared the night before. Vehicle at your hotel or dharamshala at the confirmed time. No chasing, no waiting, no starting the pilgrimage day already stressed." },
  { title: "Experienced Mathura Route Drivers", desc: "Experienced Mathura Route Drivers Every driver at Yatra Travel India knows Mathura, Vrindavan, Govardhan, Barsana, and Nandgaon roads personally. Temple timings, parking near Banke Bihari Mandir, the quickest route to Govardhan during peak season. Local knowledge that makes the whole pilgrimage run smoother." },
  { title: "Fixed Fare, Nothing Hidden",         desc: "Fixed Fare, Nothing Hidden Fare confirmed before the trip starts. Fuel, toll, parking, and driver allowance all included. No meter running, no additions at the end of a long pilgrimage day when everyone is tired." },
  { title: "Well Maintained Fleet",              desc: "Well Maintained Fleet New vehicles, regularly serviced, full AC throughout. Clean interiors before every trip. Proper luggage space for pilgrimage groups carrying bags, prasad, and offerings." },
  { title: "All Group Sizes Covered",            desc: "All Group Sizes Covered 9 seater for small family pilgrimages. 12 seater for medium groups. 16 and 20 seater for large pilgrimage tours and wedding parties. Luxury tempo traveller for premium group travel in Mathura." },
  { title: "Direct Contact Throughout",          desc: "Direct Contact Throughout Driver number shared before departure. Team reachable during the trip. Someone always picks up the phone." },
];

const FEATURES = [
  { title: "Dirt-Free & Clean Interiors",  desc: "Every vehicle is cleaned and checked before each trip. Uncontaminated interiors make travel easy and comfortable for pilgrimage groups visiting Mathura temples." },
  { title: "Attractive & Comfortable Seats", desc: "Vehicles come with attractive interiors and comfortable seats. Reclining sofa seats available in luxury and Maharaja models for premium travel comfort." },
  { title: "Advanced Facilities",           desc: "Well-maintained vehicles equipped with advanced services — AC, entertainment system, mobile charging points, first aid kit, LED Television — to ensure a restful and bother-free journey." },
  { title: "Ample Luggage Space",           desc: "Unlike smaller vans, a Tempo Traveller has adequate room for passengers as well as luggage. Essential for pilgrimage groups carrying offerings, prasad, and personal bags." },
  { title: "Experienced Local Drivers",     desc: "Enthusiastic drivers who are aware of local roads and attractions. Temple timings, parking near Dwarkadhish, quickest routes to Govardhan — local knowledge that makes pilgrimage smoother." },
  { title: "Fully Air-Conditioned",         desc: "All tempo travellers are fully AC — essential for Mathura's hot summers and Holi season. Stay comfortable throughout your Braj pilgrimage circuit." },
  { title: "Air Suspension (Luxury)",       desc: "Luxury tempo travellers come with air suspension that handles Mathura roads smoothly. Strongly recommended for groups with elderly passengers on long pilgrimage circuits." },
  { title: "Multi-Zone AC (Luxury/Maharaja)", desc: "Luxury and Maharaja models feature powerful multi-zone AC — keeps everyone comfortable throughout a full day Braj pilgrimage circuit with multiple temple stops." },
];

const INCLUDED = ["Base fare of Tempo Traveller", "Fuel charges included", "Toll tax included", "Parking charges included", "Driver day allowance included"];
const EXCLUDED = ["Driver night allowance (₹500, if applicable)", "State entry tax (outstation, if applicable)", "Any additional km beyond agreed package", "Personal expenses of passengers", "Temple entry fees (as applicable)"];

const FAQS = [
  { q: "Is a tempo traveller the best transport option for Mathura Vrindavan pilgrimage groups?",  a: "Yes, a tempo traveller is one of the best options for Mathura Vrindavan pilgrimage if you are traveling in a group. Everyone can travel together comfortably, and the driver stays with you at each temple, so you don't have to worry about finding transport again and again. Also, when the cost is shared among 10–12 people, it becomes much more affordable compared to booking multiple cabs or autos." },
  { q: "What is the best time to book a tempo traveller in Mathura for Janmashtami?",              a: "Tempo traveller booking in Mathura for Janmashtami should be done at least 6 to 8 weeks in advance. Mathura sees its highest annual footfall during Janmashtami and every reliable vehicle gets locked in early. Waiting until 2 weeks before the festival almost always means either no availability or significantly higher rates." },
  { q: "Can I hire a tempo traveller in Mathura for Holi festival group tour?",                    a: "Yes. Tempo traveller for Holi festival in Mathura is one of the most booked seasonal services. Mathura, Vrindavan, Barsana, and Nandgaon all celebrate Holi differently and covering all four in one comfortable group vehicle is the only way to experience the full Braj Holi circuit. Book at least 4 to 5 weeks before Holi. Call 9044019511 to confirm availability." },
  { q: "Does Yatra Travel India offer tempo travellers with experienced Mathura pilgrimage route drivers?", a: "Yes. Every tempo traveller driver at Yatra Travel India in Mathura knows the full Braj pilgrimage circuit personally. Banke Bihari Mandir crowd timings, parking near Dwarkadhish Temple Mathura, the quickest route to Govardhan during peak season, and the best entry points at every major temple. Local knowledge that makes the whole pilgrimage run smoothly." },
  { q: "Is a luxury tempo traveller recommended for Mathura pilgrimage groups with elderly passengers?", a: "Yes. Luxury tempo traveller in Mathura is strongly recommended for groups with elderly passengers. Fully reclining seats allow proper rest between temple stops, air suspension handles Mathura roads smoothly, and powerful multi zone AC keeps everyone comfortable throughout a full day pilgrimage circuit. Starting fare Rs 7,000. Call 9044019511 to book." },
  { q: "What is the per km rate for outstation tempo traveller from Mathura?",                     a: "Outstation tempo traveller rate from Mathura starts at Rs 16 per km for a 9 seater and Rs 21 per km for a 12 seater tempo traveller in Mathura. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance. No additions after the trip ends." },
  { q: "Can I book a tempo traveller in Mathura for Govardhan Parikrama group tour?",              a: "Yes. Tempo traveller for Govardhan Parikrama in Mathura is one of the most spiritually significant group bookings from Mathura. Govardhan is 26 km from Mathura. The 21 km Parikrama circuit around Govardhan Hill is completed on foot while the tempo traveller follows the group and waits at key rest points. Starting fare Rs 2,500 for a 12 seater. Call 9044019511 to book." },
  { q: "How many people can travel in a 20 seater tempo traveller in Mathura?",                    a: "20 seater tempo traveller in Mathura comfortably fits 17 to 20 people with pilgrimage bags and luggage. Best for large family pilgrimages, Janmashtami groups, Holi festival tours, and wedding parties travelling together from Mathura. Starting fare Rs 7,500 for local tour. Call 9044019511 to confirm availability." },
  { q: "Is tempo traveller available in Mathura for early morning Banke Bihari Temple darshan?",   a: "Yes. Early morning tempo traveller pickup in Mathura available from 5 AM onwards. Banke Bihari Temple in Vrindavan opens early and the most peaceful darshan happens before 8 AM when crowds are manageable. Driver briefed for early hotel or dharamshala pickup. Confirm early start time at booking stage." },
  { q: "What is the difference between booking a tempo traveller and hiring local autos for Mathura Vrindavan temple tour?", a: "Tempo traveller hire in Mathura gives the whole group one vehicle, one driver, one fixed fare, and everyone together at every temple stop. Local autos split the group, charge variable rates, and create coordination problems at busy temple entrances. For a group of 10 or more the tempo traveller is always the more comfortable and cost effective choice." },
  { q: "Can I extend my tempo traveller booking in Mathura if the pilgrimage takes longer than expected?", a: "Yes. Tempo traveller booking extension in Mathura available by informing the driver directly or calling 9044019511. Extra hours charged at a fixed rate confirmed at the time of extension. Temple visits in Mathura and Vrindavan often take longer than planned especially during aarti timings and festival periods." },
  { q: "What makes Yatra Travel India the most trusted tempo traveller service in Mathura?",       a: "Groups keep coming back to Yatra Travel India for tempo traveller hire in Mathura for three reasons. Vehicle confirmed and on time at every pickup. Driver knows every temple, every route, and every parking spot in the Braj region personally. Fare agreed at booking is fare paid after the pilgrimage. No hidden charges, no last minute additions, no surprises. Call 9044019511 to book today." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan",      city: "Tempo Traveller in Vrindavan",  type: "Banke Bihari Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra", city: "Tempo Traveller in Agra",  type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi", city: "Tempo Traveller in Delhi", type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi", type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",          city: "Tempo Traveller in Ujjain",    type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-somnath",         city: "Tempo Traveller in Somnath",   type: "Jyotirlinga Darshan & Saurashtra" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-goa", city: "Tempo Traveller in Goa",   type: "Beach Tours, Weddings & Outstation" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerMathura() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Mathura to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Mathura&apos;s Trusted Tempo Traveller — Braj Pilgrimage, Janmashtami, Holi Circuit, Govardhan & Vrindavan</p>
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
          <span>Tempo Traveller in Mathura</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Mathura</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Krishna Janmabhoomi · Dwarkadhish · Vrindavan · Govardhan · Barsana · Nandgaon · Agra</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Maharaja & Luxury Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Mathura" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "On-Time Pickup", sub: "Driver details shared night before" }, { title: "Fixed Fare Always", sub: "Fuel, toll, parking all included" }, { title: "Verified Drivers", sub: "Know Braj pilgrimage routes personally" }, { title: "Early Pickups Available", sub: "From 5 AM for morning darshan" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller on rent in Mathura</strong> for Braj pilgrimage circuits, Janmashtami group travel, Holi festival tours (Mathura, Vrindavan, Barsana, Nandgaon), Govardhan Parikrama, and outstation trips. <strong>9 seater to 20 seater — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean, verified drivers, fixed fare. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Tempo Traveller in Mathura</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Mathura is a religious place and birthplace of Lord Krishna. It is the most known holy place in India. The city attracts a lot of visitors; it is famous for its cultural heritage. Mathura is a spiritual place for anyone and offers a peaceful environment. With group travel becoming popular every day, hiring a tempo traveller offers an amount of satisfaction. It has become one of the known cities in Northern India. It is a city with religious places that offers complete satisfaction to your travel plan. With a Tempo Traveller, the group can easily move from one place to another.</p>
          </div>

        {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Mathura</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Mathura — Full Comparison
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
              {MATHURA_OPTIONS_TABLE.map((row, i) => (
                <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                  <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                  <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs whitespace-nowrap">{row.capacity}</td>
                  <td className="py-3 px-4 border-r border-b border-gray-100">
                    <span className={"text-xs font-bold px-2.5 py-1 rounded-full border " +
                      (row.ac === "Premium AC" || row.ac === "Multi-Zone"
                        ? "bg-blue-50 text-orange-700 border-orange-200"
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

        
          {/* Tempo Traveller on Rent */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="font-bold text-gray-900 text-base mb-3">Tempo Traveller on Rent in Mathura</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Searching for a Tempo Traveller on Rent in Mathura That offers you awesome comfort. You can look for various types of cars such as 12-36 seaters , enough for group travel. Our vehicles are well-maintained, equipped with advanced services. It ensures a comfy journey while you go for a business trip or sightseeing. With experienced drivers and well trusted services, you can go for a long trip. It makes transportation easier while you are travelling with no hassle. Thus it makes you enjoy all facilities well. Therefore you reach on time with no problem on the way.</p>
          </div>

          {/* Benefits of Tempo Traveller Cab */}
          <h3 className="font-bold text-gray-900 text-base mb-3">Benefits of Tempo Travellers Cab</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-5">
            {[
              { title: "Dirt-Free",            desc: "Uncontaminated and clean, making travel easy and comfortable." },
              { title: "Attractive Interior",  desc: "Has an attractive interior and proffers all facilities to go on a trip." },
              { title: "Comfy Seats",           desc: "Passengers get comfortable seats when travelling." },
              { title: "Reclining Sofa Seats",  desc: "You can lie down with all comfy seats offering valuable travel." },
              { title: "Lavish Tempo Traveller", desc: "The Tempo Traveller is luxurious and offers all sorts of lavishness." },
            ].map(item => (
              <div key={item.title} className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <h4 className="font-bold text-[#0f6ec8] text-xs mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 3: Tempo Traveller Types ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Tempo Traveller Types Available in Mathura</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Here are mainly four variations obtainable for rental fee AC Tempo Traveller with different seating facilities. So you can verify our whole register of Tempo Travellers and select one that suits your ease and financial plan.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TEMPO_TYPES.map(item => (
              <div key={item.type} className={`bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors`}>
                <h3 className="font-bold text-[#0f6ec8] text-base mb-3">{item.type}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 4: Booking Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blueorange-500">Tempo Traveller Booking in Mathura</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Booking Tempo Traveller in Mathura has many benefits that make it a favourite amongst both the sightseer and nearby places. Tempo Travellers are too popular for their roomy interiors and comfy seating. When you are undergoing numerous destinations in a daylight hours, somehow it turn out to be essential to have a car filled with all the contemporary facilities like Air conditioner, amusement system, mobile charging points, first aid kit, LED Television, etc.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Unlike smaller van a Tempo Traveller has adequate room for passengers as well as luggage so that your tour is restful and bother- free. Having an enthusiastic driver who is aware of the local road and attractions put you in easiness.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-3"><strong>Tempo Traveller Cost in Mathura:</strong> It is hard to give the precise rental price of Tempo Traveller as there are several factors that can have an effect on the whole cost such as driver fees and parking charges. However while you book, you can be rest guaranteed that the ultimate price we quote comprise all these additional charges. We don't consider hidden fees at the last minute like some other facility providers do. Call us at prescribed number or message us and our client care squad will take great care of the whole.Tempo Traveller Booking in Mathura is trouble-free, just visit our website or connect with us on Whatsapp</p>
            <div className="bg-blue-600 rounded-lg p-3 text-center">
              <p className="text-white text-sm font-semibold">Tempo Traveller Booking in Mathura is trouble-free — visit our website or connect with us on WhatsApp. Call 9044019511 today.</p>
            </div>
          </div>
        </div>

        {/* ══ SECTION 5: Places of Travel ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Places of Travel in Mathura by Tempo Traveller</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Mathura and the surrounding Braj region is home to some of the most sacred sites in Hinduism. A tempo traveller makes it easy to cover all of them comfortably in one day.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLACES.map(place => (
              <div key={place.name} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{place.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ SECTION 6: Why Book Yatra Travel India ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Why Book Tempo Traveller in Mathura with Yatra Travel India</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Mathura has no shortage of transport options. Autos, cabs, e-rickshaws. But when the whole group needs to travel together to Vrindavan, Govardhan, Barsana, and Nandgaon in one comfortable vehicle with one fixed fare and one reliable driver, a tempo traveller from Yatra Travel India is the only option that actually delivers that.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CARDS.map(w => (
              <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Features */}
        <ST>Features of Our Tempo Travellers in Mathura</ST>
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

        {/* Peak Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Festival Season Advance Booking Essential:</strong> Mathura sees its highest footfall during <strong>Janmashtami and Holi.</strong> For <strong>Janmashtami</strong>, book <strong>6 to 8 weeks in advance.</strong> For <strong>Holi festival circuit</strong> (Mathura, Vrindavan, Barsana, Nandgaon), book <strong>4 to 5 weeks ahead.</strong> Every reliable vehicle gets locked in early — don&apos;t wait.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Mathura</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Mathura Braj Pilgrimage Tour Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Janmashtami, Holi circuit, Govardhan Parikrama, Vrindavan darshan, Agra — call us with your group size and travel date. Confirmed vehicle, fixed fare, experienced driver. Dial 9044019511.</p>
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
