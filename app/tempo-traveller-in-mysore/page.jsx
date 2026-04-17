"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { FaPhoneAlt, FaWhatsapp, FaShieldAlt, FaBus } from "react-icons/fa";

/* ─── SCHEMA ─── */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.yatratravelindia.com/#business",
      "name": "Yatra Travel India",
      "url": "https://www.yatratravelindia.com",
      "telephone": "+91-9044019511",
      "priceRange": "₹₹",
      "areaServed": { "@type": "Country", "name": "India" },
    },
    {
      "@type": "Service",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-mysore#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-mysore",
      "name": "Tempo Traveller in Mysore | Yatra Travel India",
      "description":
        "Book tempo traveller in Mysore for palace tours, Dasara festival travel, temple visits, wedding transport, school trips, and outstation journeys. Choose from 12, 16, and 20 seater AC and luxury tempo travellers with experienced drivers and fixed pricing.",
      "provider": { "@id": "https://www.yatratravelindia.com/#business" },
      "areaServed": { "@type": "City", "name": "Mysore" },
      "serviceType": "Tempo Traveller Rental",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "18",
        "availability": "https://schema.org/InStock",
        "url": "https://www.yatratravelindia.com/tempo-traveller-in-mysore",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "223",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-mysore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is a tempo traveller the most affordable group transport option in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, tempo traveller in Mysore offers the best per person cost for group travel. When the fare is shared among 10 to 12 people, it becomes more affordable than multiple taxis or autos.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best tempo traveller size for Mysore Dasara festival groups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 20 seater tempo traveller is the most popular choice during Mysore Dasara for large groups. It is recommended to book 4 to 6 weeks in advance due to high demand.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Yatra Travel India provide well maintained tempo travellers in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all tempo travellers are regularly serviced and inspected with clean interiors, working AC, good tyres, and proper luggage space.",
          },
        },
        {
          "@type": "Question",
          "name": "What is required to book a tempo traveller in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book by calling 9044019511 and sharing your travel date, group size, and route. Booking is confirmed quickly with driver and vehicle details shared before the trip.",
          },
        },
        {
          "@type": "Question",
          "name": "Is early morning pickup available for tempo traveller in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, early morning pickups are available from 5 AM, ideal for temple visits and early sightseeing plans.",
          },
        },
        {
          "@type": "Question",
          "name": "Is tempo traveller comfortable for elderly passengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, luxury tempo travellers offer pushback seats, smooth suspension, strong AC, and easy entry making them suitable for elderly passengers.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I book tempo traveller for overnight trips from Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, tempo travellers are available for overnight and multi day outstation trips with driver stay included and fixed pricing.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the difference between 12 seater and 16 seater tempo traveller?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 12 seater is ideal for smaller groups while a 16 seater offers more space and comfort for larger groups or luggage heavy trips.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I hire tempo traveller for wedding transport in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, tempo travellers are widely used for wedding guest transport with fixed pricing and on time service.",
          },
        },
        {
          "@type": "Question",
          "name": "How is on time pickup ensured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Driver and vehicle details are shared in advance and drivers are briefed before the trip to ensure timely pickup.",
          },
        },
        {
          "@type": "Question",
          "name": "Is tempo traveller available for school trips in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, tempo travellers are available for school excursions and educational trips with safe vehicles and experienced drivers.",
          },
        },
        {
          "@type": "Question",
          "name": "Why choose Yatra Travel India in Mysore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yatra Travel India offers reliable service, experienced drivers, fixed pricing, and on time vehicles with no hidden charges.",
          },
        },
      ],
    },
  ],
};

/* ─── VEHICLES ─── */
const VEHICLES = [
  {
    badge: "9 Seater",
    title: "9 Seater Tempo Traveller in Mysore",
    img: "/images/9seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "9 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹18/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Pushback Seats", "Palace Tour", "Small Groups"],
  },
  {
    badge: "12 Seater",
    title: "12 Seater Tempo Traveller in Mysore",
    img: "/images/12seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "12 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹20/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Pushback Seats", "Family Trips", "Coorg & Ooty"],
  },
  {
    badge: "13 Seater",
    title: "13 Seater Tempo Traveller in Mysore",
    img: "/images/13seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "13 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹21/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Temple Tours", "Group Travel", "Airport Transfer"],
  },
  {
    badge: "16 Seater",
    title: "16 Seater Tempo Traveller in Mysore",
    img: "/images/16seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹24/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Extra Legroom", "Wayanad Trip", "Corporate Tours"],
  },
  {
    badge: "20 Seater",
    title: "20 Seater Tempo Traveller in Mysore",
    img: "/images/20seater.jpg",
    specs: [
      { label: "Seating Capacity", value: "20 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "₹28/km" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Full AC", "Max Luggage", "Dasara Groups", "Pilgrimage"],
  },
  {
    badge: "Luxury",
    title: "Luxury Tempo Traveller in Mysore",
    img: "/images/luxury.jpg",
    specs: [
      { label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "On Request" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Premium AC", "LED Lighting", "Music System", "Charging Points"],
  },
  {
    badge: "Maharaja",
    title: "Maharaja Tempo Traveller in Mysore",
    img: "/images/maharaja.jpg",
    specs: [
      { label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" },
      { label: "Starting Fare", value: "On Request" },
      { label: "Driving Charges", value: "₹500/day" },
      { label: "Minimum Km/Day", value: "250 km/day" },
      { label: "Facility", value: "AC, Pushback Seat, Music System" },
    ],
    tags: ["Sofa Seats", "Full Recline", "VIP Travel", "Grand Weddings"],
  },
];

/* ─── TABLES ─── */
const OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Mysore",      capacity: "9 + Driver",    ac: "AC",         ideal: "Small families and friend groups — local sightseeing at Mysore Palace, Chamundi Hills, Brindavan Gardens, and nearby temples" },
  { vehicle: "12 Seater Tempo Traveller in Mysore",     capacity: "12 + Driver",   ac: "AC",         ideal: "Medium family groups — trips to Coorg, Ooty, Wayanad, Bandipur, and full-day city sightseeing tours in Mysore" },
  { vehicle: "13 Seater Tempo Traveller in Mysore",     capacity: "13 + Driver",   ac: "AC",         ideal: "Medium groups — airport transfers, temple visits, and comfortable outstation travel from Mysore" },
  { vehicle: "16 Seater Tempo Traveller in Mysore",     capacity: "16 + Driver",   ac: "AC",         ideal: "Large groups — corporate tours, school excursions, wedding parties, and longer routes to Bangalore and Ooty" },
  { vehicle: "20 Seater Tempo Traveller in Mysore",     capacity: "20 + Driver",   ac: "AC",         ideal: "Large Dasara festival and wedding groups — spacious seating and luggage space for multi-day tours from Mysore" },
  { vehicle: "Luxury Tempo Traveller in Mysore",        capacity: "9–16 + Driver", ac: "Premium AC", ideal: "VIP guests, senior citizens, wedding functions — soft pushback seats, LED lighting, music system, and charging points" },
  { vehicle: "Maharaja Tempo Traveller in Mysore",      capacity: "9–16 + Driver", ac: "Premium AC", ideal: "Ultimate VIP travel, grand weddings, senior travellers — sofa seats, full recline, premium interiors, air suspension" },
];

const AIRPORT_TABLE = [
  { vehicle: "12 Seater Tempo Traveller", pickup: "₹1,800", drop: "₹1,800" },
  { vehicle: "13 Seater Tempo Traveller", pickup: "₹2,000", drop: "₹2,000" },
  { vehicle: "14 Seater Tempo Traveller", pickup: "₹2,000", drop: "₹2,000" },
  { vehicle: "16 Seater Tempo Traveller", pickup: "₹2,200", drop: "₹2,200" },
];

const ROUTES_TABLE = [
  { route: "Mysore to Coorg",              dist: "~120 km", vehicle: "12 or 16 Seater" },
  { route: "Mysore to Ooty",               dist: "~90 km",  vehicle: "12 or 16 Seater" },
  { route: "Mysore to Bangalore",          dist: "~145 km", vehicle: "12 or 16 Seater" },
  { route: "Mysore to Wayanad",            dist: "~100 km", vehicle: "12 or 16 Seater" },
  { route: "Mysore to Bandipur",           dist: "~80 km",  vehicle: "12 or 16 Seater" },
  { route: "Mysore to Kabini",             dist: "~95 km",  vehicle: "12 or 16 Seater" },
  { route: "Mysore to Hassan / Belur",     dist: "~120 km", vehicle: "12 or 16 Seater" },
];

const USE_TAGS = [
  "Mysore Palace Tour", "Chamundi Hills Visit", "Brindavan Gardens", "Dasara Festival Travel",
  "Mysore Local Sightseeing", "Airport Pickup & Drop", "Wedding Guest Transfers",
  "VIP & Corporate Groups", "Mysore to Coorg", "Mysore to Ooty", "Family Outstation Trip",
  "School Excursion Tours", "Religious & Temple Travel", "Senior Citizen Groups",
];

const FEATURES = [
  { title: "Premium Pushback Seats",     desc: "Soft and wide pushback seats provide extra comfort and support for long sightseeing tours, temple visits, and outstation journeys in and around Mysore." },
  { title: "Fully Air-Conditioned",      desc: "All tempo travellers are fully AC — keeps passengers comfortable during hot summers and ensures a refreshing atmosphere for ghat roads and long-distance travel." },
  { title: "Extra Legroom",              desc: "Wide aisles and generous legroom — senior citizens and families can travel comfortably without feeling cramped on Mysore sightseeing and outstation routes." },
  { title: "Stylish Interiors",          desc: "Clean, modern interiors with soft LED lighting give a comfortable travel environment — perfect for palace tours, wedding groups, and corporate travel in Mysore." },
  { title: "Large Luggage Space",        desc: "Ample luggage space for suitcases, shopping bags, and equipment — perfect for multi-day outstation tours and airport transfers from Mysore." },
  { title: "Smooth Suspension",          desc: "Superior suspension system built for highways and ghat roads — smooth and comfortable ride even on winding routes like Mysore to Coorg or Ooty." },
  { title: "Entertainment & Charging",   desc: "Music systems, LED TVs, and mobile charging points in most tempo travellers — keeps passengers relaxed and connected during long Mysore outstation journeys." },
  { title: "Verified & Polite Drivers",  desc: "Trained, verified drivers who know Mysore city roads, ghat routes, and Karnataka highways — ensure safe, timely, and courteous travel for all groups." },
];

const INCLUDED = [
  "Base fare of Tempo Traveller",
  "Fuel charges included",
  "Driver day allowance included",
  "Clean, well-maintained vehicle",
  "Driver accommodation (Multi-day trips)",
];
const EXCLUDED = [
  "Toll tax charges (as per actual during the trip)",
  "State entry tax / permit charges (if applicable)",
  "Parking charges (as per actual at locations)",
  "Driver night allowance (₹500 for Tempo Traveller, if applicable)",
  "Mysore Airport parking charges (as per authority rules)",
];

const BENEFITS = [
  { title: "Comfortable Travel for All Groups",     desc: "Tempo travellers seat 9 to 20 people comfortably. Families and groups travel together in one vehicle, reducing confusion and ensuring everyone arrives at Mysore Palace, Chamundi Hills, and every destination together." },
  { title: "Perfect for Senior Citizens",           desc: "Spacious interiors, reclining seats, and smooth AC make our tempo travellers ideal for elderly passengers on sightseeing tours, temple visits, and multi-day outstation journeys from Mysore." },
  { title: "Verified and Knowledgeable Drivers",    desc: "Our drivers know Mysore city roads, ghat routes to Coorg and Ooty, and major Karnataka highways. They ensure on-time pickup, smooth travel, and safe return for every group." },
  { title: "Flexible for All Travel Needs",         desc: "From Mysore Palace tours and airport transfers to long-distance outstation trips, our tempo travellers are versatile — ideal for short local trips and multi-day tours alike." },
  { title: "Cost Effective Group Travel",           desc: "Hiring a tempo traveller in Mysore is far more economical than multiple taxis or autos. Split among 12 people, a full day of sightseeing costs just ₹375 per person — unbeatable value." },
  { title: "Transparent Pricing Always",            desc: "At Yatra Travel India we provide complete fare details in advance — toll, parking, and driver allowance are clearly discussed. No hidden charges, no last-minute surprises." },
];

const OUTSTATION_ROUTES = [
  { title: "Mysore to Coorg Tempo Traveller",           meta: ["~120 km", "2–3 Hours", "Popular Nature Route"],       desc: "Mysore to Coorg is one of the most scenic drives in Karnataka. Whether you are combining Mysore Palace darshan with Coorg coffee estates, or travelling with a family group, our AC tempo travellers ensure a comfortable and smooth journey on this ghat route. Experienced drivers handle mountain roads safely." },
  { title: "Mysore to Ooty Tempo Traveller",            meta: ["~90 km", "2–3 Hours", "Hill Station & Nature"],        desc: "Book a tempo traveller from Mysore to Ooty for a refreshing hill station getaway. Fully AC, spacious vehicles with reclining seats make the journey comfortable for families and large groups. The driver navigates the ghat sections safely so your group can enjoy the stunning views throughout." },
  { title: "Mysore to Bangalore Tempo Traveller",       meta: ["~145 km", "2.5–3 Hours", "Business & Family"],         desc: "Mysore to Bangalore is a popular route for airport transfers, business travel, and family outings. Our 12 seater and 16 seater tempo travellers are well-maintained and AC-equipped. Book for one-way or round trips with experienced drivers who know this highway route well and ensure timely arrivals." },
  { title: "Mysore to Wayanad / Bandipur Tempo Traveller", meta: ["~100 km", "2–3 Hours", "Wildlife & Adventure"],      desc: "For wildlife and nature enthusiasts, our tempo travellers offer the best combination of comfort and value for Wayanad or Bandipur trips. Reclining seats, full AC, and luggage space make the journey smooth and relaxing. Perfect for family groups and nature tours heading from Mysore." },
];

const WHY_CARDS = [
  { title: "Clean and Well-Maintained Vehicles",  desc: "All tempo travellers in Mysore are clean, well-maintained, fully air conditioned, and checked before every trip to ensure safe and comfortable travel on city and ghat routes." },
  { title: "Experienced and Verified Drivers",    desc: "Drivers know Mysore city roads, Chamundi Hills routes, ghat sections to Coorg and Ooty, and major Karnataka highways. Travel without worry about navigation or traffic." },
  { title: "Fair and Transparent Pricing",        desc: "9 seater to luxury — all at fair pricing with fuel, tolls, and driver allowance included. No hidden charges. Full cost clarity before you confirm your booking." },
  { title: "Easy Booking — Call or WhatsApp",     desc: "Book by call or WhatsApp on 9044019511. Share travel date, pickup location, and group size. Instant quote and confirmation in minutes. 24x7 support available." },
  { title: "Airport Pickup & Drop Available",     desc: "Dedicated tempo traveller service for Mysore Airport and Bangalore Airport pickup and drop. Punctual arrival, clean vehicle, and professional driver for group transfers." },
  { title: "Multi-Day & Multi-City Tours",        desc: "Mysore to Coorg, Ooty, Wayanad, or a full Karnataka heritage tour — fully customized multi-day tour packages available for families and large groups." },
];

const FAQS = [
  { q: "Is a tempo traveller the most affordable group transport option in Mysore?",              a: "Yes. Tempo traveller in Mysore gives the best per head cost for group travel. Split a 12 seater fare across 12 people and each person pays around Rs 375 for a full day of comfortable sightseeing. That beats individual cabs, autos, and shared transport on every route in and around Mysore." },
  { q: "What is the best tempo traveller size for a Mysore Dasara festival group?",               a: "20 seater tempo traveller in Mysore is the most popular choice during Dasara. Large family groups, corporate teams, and college groups all book the 20 seater to keep everyone together during the festive period. Book at least 4 to 6 weeks in advance. Vehicles fill up fast during Dasara season." },
  { q: "Does Yatra Travel India offer new and well maintained tempo travellers in Mysore?",       a: "Yes. Every tempo traveller at Yatra Travel India in Mysore is regularly serviced and checked before each trip. New vehicles added to the fleet regularly. Clean interiors, working AC, good tyre condition, and proper luggage space guaranteed on every booking." },
  { q: "What documents are needed to book a tempo traveller in Mysore?",                          a: "No documents required from the group. Simply call 9044019511 with group size, travel date, and route. Tempo traveller booking in Mysore confirmed on the same call. Vehicle registration details and driver name shared before the trip starts." },
  { q: "Is tempo traveller available in Mysore for early morning pickups?",                       a: "Yes. Early morning tempo traveller pickup in Mysore available from 5 AM onwards. Popular for groups wanting to reach Chamundeshwari Temple before sunrise or catch the morning light at Mysore Palace. Confirm early pickup time at booking stage." },
  { q: "Can elderly passengers travel comfortably in a tempo traveller in Mysore?",              a: "Yes. Luxury tempo traveller in Mysore is strongly recommended for groups with elderly passengers. Pushback reclining seats, air suspension for smooth rides, powerful multi zone AC, and step entry that is easier to manage. Driver assists elderly passengers at every sightseeing stop." },
  { q: "Is tempo traveller available in Mysore for overnight outstation trips?",                  a: "Yes. Overnight outstation tempo traveller from Mysore available for multi day trips. Driver accommodation included for overnight stops. Full trip fare confirmed upfront with nothing added after the journey ends. Call 9044019511 to plan and book multi day package." },
  { q: "What is the difference between 12 seater and 16 seater tempo traveller in Mysore?",      a: "12 seater tempo traveller in Mysore fits 10 to 12 people starting at Rs 4,500. 16 seater tempo traveller in Mysore fits 13 to 16 people starting at Rs 6,000. Go with 16 seater if group size is close to 12 and carrying heavy luggage. Extra space makes a real difference on longer drives." },
  { q: "Can I book a tempo traveller in Mysore for a wedding guest transfer?",                    a: "Yes. Tempo traveller for wedding in Mysore is regularly booked for guest transfers between venues, hotels, and reception halls. 12 seater for small wedding parties. 16 and 20 seater for larger groups. Clean vehicle, on time pickup, fixed fare. Call 9044019511 to confirm availability on your wedding date." },
  { q: "How does Yatra Travel India ensure on time pickup for tempo traveller in Mysore?",       a: "Driver details shared the night before every trip. Vehicle confirmed at booking with registration number. Driver briefed on pickup location and time in advance. At Yatra Travel India Mysore on time pickup is not just a promise. It is the standard on every single booking." },
  { q: "Is tempo traveller available in Mysore for school annual excursion trips?",               a: "Yes. Tempo traveller for school trips in Mysore available for educational tours, annual excursions, and nature camps. Safe well maintained vehicles, experienced drivers, fixed group fare. 16 and 20 seater most popular for larger student groups. Call 9044019511 to book school trip tempo traveller in Mysore." },
  { q: "What makes Yatra Travel India the best tempo traveller service in Mysore?",               a: "Three things. Vehicle shows up on time. Driver knows every Mysore and Karnataka route personally. Fare is exactly what was agreed at booking with nothing added after. Best tempo traveller service in Mysore means no surprises, no hidden charges, no last minute changes. Just reliable comfortable group travel every time." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",    type: "Weddings, VIP Travel & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",    city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi", city: "Tempo Traveller in Varanasi",  type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-bengaluru",city: "Tempo Traveller in Bengaluru", type: "Corporate Travel, Weddings & Outstation" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",     city: "Tempo Traveller in Agra",     type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-manali",                   city: "Tempo Traveller in Manali",   type: "Mountain Routes & Adventure Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-ayodhya",  city: "Tempo Traveller in Ayodhya",  type: "Ram Mandir Pilgrimage & Temple Tours" },
];

/* ─── SECTION HEADING ─── */
function ST({ children, border = "border-[#0f6ec8]", id }) {
  return (
    <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>
      {children}
    </h2>
  );
}

/* ─── PAGE ─── */
export default function TempoTravellerMysore() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity] = useState("");
  const [vtype, setVtype] = useState("Select Vehicle");
  const [toast, setToast] = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 3000);
  }, []);
  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => {
    setVtype(title);
    scrollToBooking();
    showToast(title + " selected. Enter destination to continue.");
  };
  const handleSearch = () => {
    if (!toCity.trim()) { showToast("Please enter your destination."); return; }
    showToast("Searching tempo travellers from Mysore to " + toCity + "...");
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      {/* ── Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      <Navbar />

      {/* ── Top Bar ── */}
      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">
            Mysore&apos;s Trusted Tempo Traveller — Palace Tours, Dasara Travel, Coorg, Ooty, Wayanad & Bangalore
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">WhatsApp Us</a>
            <a href="tel:+919044019511" className="text-yellow-300 font-semibold text-xs hover:underline">+91 90440 19511</a>
          </div>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="text-[#0f6ec8] hover:underline">Home</Link><span>/</span>
          <Link href="/" className="text-[#0f6ec8] hover:underline">Services</Link><span>/</span>
          <span>Tempo Traveller in Mysore</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">
            Tempo Traveller on Rent in Mysore
          </h1>
          <p className="text-blue-200 text-center text-sm mb-5">
            Mysore Palace · Chamundi Hills · Brindavan Gardens · Dasara Tours · Coorg · Ooty · Bangalore · Airport Transfer
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury & Maharaja Options", "Fully Air Conditioned", "Fixed Fare · No Hidden Charges"].map((b) => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label>
                <input readOnly value="Mysore" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">To</label>
                <input value={toCity} onChange={(e) => setToCity(e.target.value)} placeholder="Destination"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Vehicle Type</label>
                <select value={vtype} onChange={(e) => setVtype(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#0f6ec8]">
                  <option>Select Vehicle</option>
                  {VEHICLES.map((v) => <option key={v.badge}>{v.title}</option>)}
                </select>
              </div>
              <button onClick={handleSearch} className="bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div className="bg-[#f8faff] border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[
            { title: "On-Time Pickup",            sub: "Pickup from your exact location" },
            { title: "Clean and Well Maintained", sub: "Checked before every trip" },
            { title: "Transparent Pricing",       sub: "Fuel, toll, driver allowance included" },
            { title: "Verified Drivers",          sub: "Know Mysore routes and Karnataka highways" },
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

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">
            Yatra Travel India offers <strong>tempo traveller on rent in Mysore</strong> for palace tours, Dasara festival travel,
            Chamundi Hills visits, family trips, wedding guest transfers, and outstation travel to Coorg, Ooty, Wayanad, and Bangalore.{" "}
            <strong>9 seater to 20 seater available — including Luxury and Maharaja Tempo Traveller.</strong> Fully AC, clean,
            pushback seats, verified drivers. Transparent pricing — no hidden charges. Call <strong>9044019511</strong> to book.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 1: Tempo Traveller for rent in Mysore  (from PDF p.1)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
            Tempo Traveller for Rent in Mysore
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Intercity travel, as we all are aware of the challenges associated with it, but Mysore is made simple and
              comfortable when you book a Tempo Traveller in Mysore. For a family outing, temple visit, school trip, or
              corporate tour, group travel in Mysore requires enough space, good planning, and on-time movement — with the
              assistance of the best tempo traveller rental service in Mysore. As local travel operators that manage daily
              tours in the Mysore city and surrounding areas, we know how the traffic moves, what road is in what condition,
              and what group travellers really need.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              From a day trip on an early morning to Chamundi Hills to a full-day sightseeing tour covering Mysore Palace,
              Brindavan Gardens, and Srirangapatna — a Tempo Traveller gives you the flexibility that booking multiple cars
              would not. Many visitors in Mysore prefer to travel in one large vehicle so that everyone is together, parking
              is easier, and time management is better — especially on weekends, during festivals, and peak tourist seasons.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Tempo Traveller in Mysore for outstation is also very popular. Routes from Mysore to Coorg, Ooty, Wayanad,
              Bangalore, and Kabini are best covered in the comfort of a group vehicle. With wide corridors and generous
              luggage room, knowledgeable professional drivers who have navigated ghat roads and fast highways, it is a
              smooth, hassle-free ride.
            </p>

            {/* What makes it different & Amenities grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl border border-blue-100 p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">What Makes Us Different</h3>
                <ul className="space-y-2">
                  {["Neat & Clean Vehicles", "Transparent Billing", "Skilled Chauffeurs", "Several Cities Covered"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-blue-100 p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">Our Amenities</h3>
                <ul className="space-y-2">
                  {["Round Trip", "One Way", "Local Rentals", "Airport Transport"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl border border-blue-100 p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-3">What We Offer</h3>
                <ul className="space-y-2">
                  {["Expert Drivers", "Safety Certified", "Several Stops", "Cheapest Fares", "Inclusive Costs", "Courteous Chauffeurs"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0f6ec8] flex-shrink-0"></span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            VEHICLE CARDS — placed right after the intro section
        ══════════════════════════════════════════════════════════════ */}
        <ST id="services">Tempo Traveller Options in Mysore</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map((v) => (
            <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 2: Explore India more (from PDF p.2)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">
            Explore India More — Road Trips from Mysore
          </h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              A road trip is really exciting for every traveller. You can visit the whole of India with memorable facilities at a time.
              Road trips are more thrilling and offer superb chances to discover something new at every turn. There is something
              to look at and something to explore. To make your travel effective, hire a 12 seater tempo traveller in Mysore.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Just make your trip splendid by coming in contact with us. We are striving to provide you the best services
              within a short time. We offer you more travel by roadside — it is an effective way of going through any road trip.
              Travel with our chauffeurs. You can breathe fresh air and know more about various cultures. Just pack your luggage
              well and go on a trip. You can enjoy street food or dine at a restaurant along the way. Instead of driving yourself,
              choose chauffeur-driven cabs without any further delay.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Once you book the tempo traveller, you get superb facilities to make your trip enjoyable. So just contact our
              team of experts who can answer all your queries once you connect with them. If you are seeking a large group trip,
              you can avail our <strong>20 seater tempo traveller on rent in Mysore</strong>.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 3: Why Choose (from PDF p.2)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
            Why Choose a Tempo Traveller in Mysore for Your Group Trip
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            One of the biggest reasons travelers prefer tempo traveller hire in Mysore is the spacious seating and ample
            luggage space. With options like 12-seater and 17-seater tempo travellers, you can comfortably accommodate your
            entire group without feeling cramped. This is especially helpful for long journeys to nearby destinations like
            Coorg, Ooty, Wayanad, or Bandipur, where comfort really matters.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Another advantage is cost-effectiveness. Booking a tempo traveller on rent in Mysore often turns out to be
            more economical than hiring multiple taxis. Fuel, tolls, and driver costs are included, making budgeting simple
            and transparent. Many operators also offer fixed pricing for tempo traveller outstation trips, so there are no
            surprises later.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Safety and convenience are also key benefits. Most tempo traveller rental services provide experienced,
            route-friendly drivers who know Mysore and nearby tourist places well. This allows you to relax and enjoy the
            journey while the driver handles traffic and navigation. Air-conditioned interiors, push-back seats, charging
            points, and music systems further enhance the travel experience.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            For group sightseeing in Mysore — such as Mysore Palace, Chamundi Hills, Brindavan Gardens, and nearby temples —
            a tempo traveller rental in Mysore offers unmatched flexibility. You can plan your own schedule, take stops as
            needed, and travel at your own pace. Choosing a tempo traveller in Mysore ensures a safe, comfortable, and
            hassle-free journey, making it the ideal travel option for group tours and outstation trips.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 4: Smart Way to Travel (from PDF p.3)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-green-500">
            The Smart Way to Travel Together in and Around Mysore
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Traveling around Mysore is always better when everyone stays together. That is why choosing a Tempo Traveller
              in Mysore is a simple and smart option for families, friends, and groups. Instead of booking multiple cars and
              managing different pickup times, one comfortable vehicle keeps the entire group together from start to finish.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              If you are visiting popular places like Mysore Palace, Chamundi Hills, or Brindavan Gardens, or planning a
              trip to nearby destinations such as Coorg, Ooty, or Bandipur, a tempo traveller makes the journey easy and
              relaxed. There is enough space for everyone to sit comfortably, stretch their legs, and carry luggage without
              feeling cramped. Even long drives feel smooth with air-conditioning and comfortable seating.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              Hiring a tempo traveller on rent in Mysore also means you do not have to worry about driving or directions.
              An experienced local driver handles the traffic and routes, so you can enjoy the views, chat with your group,
              and focus on making memories. This is especially helpful when traveling with elders or children.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Another big plus is affordability. When you travel as a group, a tempo traveller hire in Mysore often costs
              less than booking several taxis. You get clear pricing and better value for money without compromising on
              comfort. If you want a relaxed, convenient, and stress-free way to explore Mysore and nearby places together,
              a tempo traveller is the perfect choice.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 5: Options for Every Group Size (from PDF p.3–4)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">
            Tempo Traveller Options Available for Every Group Size in Mysore
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">
            When you are traveling in a group, choosing the right vehicle can make the whole trip smoother and more
            enjoyable. At Yatra Travel India, we make group travel in Mysore simple by offering tempo travellers in
            different sizes, so you never feel cramped or forced to book a bigger vehicle than you need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[
              { size: "9 Seater", color: "blue", desc: "For small families or friend groups, our 9-seater tempo traveller in Mysore is a great choice. It is comfortable, easy to move around the city, and perfect for local sightseeing to places like Mysore Palace, Chamundi Hills, Brindavan Gardens, and nearby attractions. It works well for senior citizens too, as seating is comfortable and the ride is smooth." },
              { size: "12 Seater", color: "blue", desc: "If you are traveling with a medium-sized group, the 12-seater tempo traveller hire in Mysore is one of the most popular options. It is ideal for trips from Mysore to Coorg, Ooty, Wayanad, or Bandipur. You get enough legroom, good luggage space, and a relaxed travel experience even on longer journeys. Both AC and non-AC options are available based on your comfort and budget." },
              { size: "16 Seater", color: "blue", desc: "For bigger groups, such as wedding guests, school trips, or office outings, the 16-seater tempo traveller in Mysore is a smart option. These vehicles are spacious, stable on highways, and driven by experienced drivers who know Karnataka routes well. Long-distance travel feels easy and stress-free." },
              { size: "20 Seater", color: "blue", desc: "Traveling with an even larger group? Our 20-seater tempo traveller rental in Mysore keeps everyone together in one vehicle. This is especially useful for temple tours, religious trips, factory visits, Dasara festival travel, and large sightseeing groups." },
            ].map((item) => (
              <div key={item.size} className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 text-base mb-2">{item.size} Tempo Traveller in Mysore</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 text-sm mb-2">Luxury & Maharaja Tempo Traveller in Mysore</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We also offer luxury tempo travellers in Mysore for customers who want extra comfort for weddings, corporate
              guests, or VIP travel. These come with premium seating and better interiors for a more relaxed journey. No matter
              your group size, Yatra Travel India helps you choose the right tempo traveller in Mysore with clear pricing,
              reliable vehicles, and friendly drivers — making every group trip easy, comfortable, and well-planned.
            </p>
          </div>
        </div>

        {/* ── Options Comparison Table ── */}
        <ST>Tempo Traveller Options in Mysore — Full Comparison</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map((h) => (
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

        {/* ── Airport Table ── */}
        <ST border="border-green-500">Tempo Traveller Airport Pickup & Drop — Mysore Airport</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-3">
          <table className="w-full text-sm min-w-[380px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Vehicle Option", "Airport Pickup Price", "Airport Drop Price"].map((h) => (
                  <th key={h} className="text-left text-white font-bold text-xs py-4 px-4 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
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
        <p className="text-xs text-gray-400 mb-4 pt-2">* Mysore Airport parking charges payable as per airport authority rules. Fares are one-way.</p>

        {/* ── Price List ── */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">
            Tempo Traveller Rent in Mysore — Affordable Price List
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Yatra Travel India offers budget-friendly and transparent tempo traveller rent in Mysore for local trips,
            outstation travel, and sightseeing tours. If you are searching for tempo traveller hire in Mysore, tempo
            traveller booking Mysore, or tempo traveller on rent in Mysore, we provide the best options at competitive rates.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-gray-900 text-base mb-3">Our starting tempo traveller price in Mysore:</h3>
            <div className="space-y-2">
              {[
                { label: "9 Seater Tempo Traveller in Mysore",        fare: "₹18 per km" },
                { label: "12 Seater Tempo Traveller Fare in Mysore",  fare: "₹20 to ₹22 per km" },
                { label: "16 Seater Tempo Traveller Mysore",          fare: "₹24 to ₹26 per km" },
                { label: "20 Seater Tempo Traveller Hire in Mysore",  fare: "₹28 per km" },
              ].map((item, i, arr) => (
                <div key={item.label} className={"flex justify-between items-center py-2 " + (i < arr.length - 1 ? "border-b border-blue-200" : "")}>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  <span className="text-sm font-bold text-blue-600">{item.fare}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            Toll tax, parking charges, and driver allowance are clearly discussed in advance. No hidden charges.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We also provide customized Mysore sightseeing tour packages, Dasara festival travel plans, and group tour
            packages for families, corporate groups, and travel agents.
          </p>
        </div>

        {/* ── Routes Table ── */}
        <ST border="border-green-500">Tempo Traveller Hire in Mysore — Key Outstation Routes</ST>
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-[#0f6ec8]">
                {["Route", "Distance", "Vehicle", "Booking"].map((h) => (
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
                    <a href="tel:+919044019511" className="inline-flex items-center gap-1 bg-[#0f6ec8] hover:bg-[#0a4a8f] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors">
                      <FaPhoneAlt size={9} /> Call Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            SECTION 6: Places to Visit in Mysore (from PDF p.4)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">
            Places to Visit in Mysore
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">
            Mysore offers a wonderful mix of royal heritage, natural beauty, and cultural richness. The best time to visit is
            October to March or June to September.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {[
              { place: "Mysore Maharaja's Palace",  desc: "Offers a magnificent view of royal architecture. The ten-day Dasara festive season generates a royal pageant that draws visitors from across the world." },
              { place: "Vrindavan Gardens",          desc: "See melodic musical fountains and beautiful landscaped gardens. A must-visit attraction for families and groups." },
              { place: "Chamundi Hills",             desc: "Famous temple atop the hill with stunning views of Mysore city. Popular for early morning visits and sunrise darshan." },
              { place: "Karanji Lake",               desc: "Provides bird watching and a butterfly park — a nature lover's paradise and ideal for group outings." },
              { place: "Srirangapatna",              desc: "Historical island fortress with Tipu Sultan's legacy, temples, and scenic riverside views close to Mysore city." },
              { place: "Lalitha Mahal Palace",       desc: "A stunning heritage hotel that doubles as a landmark. Perfect for a regal and memorable Mysore experience." },
            ].map((item) => (
              <div key={item.place} className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{item.place}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Best time to visit Mysore:</strong> October to March for pleasant weather and Dasara celebration, or
              June to September for lush greenery and fewer crowds. Book your tempo traveller in Mysore in advance for
              festival seasons.
            </p>
          </div>
        </div>

        {/* ── Perfect For Tags ── */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">
          {USE_TAGS.map((tag) => (
            <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>

        {/* ── Mysore Palace Tour Section ── */}
        <ST>Tempo Traveller for Mysore Palace & Sightseeing Tours</ST>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Planning to visit Mysore Palace with your family or group? Travel comfortably with our tempo traveller for Mysore
            sightseeing tours. Whether you are visiting for the first time or returning for Dasara celebrations, our clean AC
            tempo travellers ensure you arrive fresh, relaxed, and on time for every attraction.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Our trained and local drivers know the routes around Mysore Palace, Chamundi Hills, Brindavan Gardens, Karanji
            Lake, Srirangapatna, and all major sightseeing spots in Mysore. They ensure on-time pickup, smooth drop, and safe
            travel, so you can focus entirely on enjoying your trip without worrying about traffic or parking.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            We provide different vehicle options like 9 seater, 12 seater, 16 seater, and luxury tempo traveller in Mysore,
            making it easy to choose the right vehicle based on your group size and comfort preference. Book by call or
            WhatsApp on 9044019511 for instant confirmation.
          </p>
        </div>

        {/* ── Features ── */}
        <ST>Features of Our Tempo Travellers in Mysore</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 text-center">
              <div className="w-11 h-11 bg-[#0f6ec8] rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg viewBox="0 0 24 24" fill="#fff" width="20" height="20"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-1.5">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Inclusions / Exclusions ── */}
        <ST>Fare Inclusions and Exclusions</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Included</span></div>
            <ul className="list-none m-0 p-0">
              {INCLUDED.map((item, i) => (
                <li key={item} className={"px-5 py-4 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border border-blue-200 rounded-xl overflow-hidden">
            <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span></div>
            <ul className="list-none m-0 p-0">
              {EXCLUDED.map((item, i) => (
                <li key={item} className={"px-5 py-4 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Benefits ── */}
        <ST>Why Choose Yatra Travel India for Tempo Traveller in Mysore</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {BENEFITS.map((b) => (
            <div key={b.title} className="bg-[#f8faff] border border-blue-100 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-[#0f6ec8] text-sm mb-2">{b.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Outstation Routes ── */}
        <ST border="border-[#ff6b35]" id="attractions">Popular Outstation Routes from Mysore</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {OUTSTATION_ROUTES.map((r) => (
            <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] hover:shadow-md transition-all">
              <h4 className="font-bold text-gray-900 text-sm mb-3">{r.title}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{r.meta.map((m) => <span key={m} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{m}</span>)}</div>
              <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Most Booked Routes ── */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">
            Most Booked Tempo Traveller Routes from Mysore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Mysore to Coorg",              desc: "A favorite route for nature and coffee estate visits. Perfect for families and groups who want a relaxed scenic drive through Karnataka's lush Western Ghats." },
              { title: "Mysore to Ooty",               desc: "Ideal for hill station getaways and weekend trips. Reliable AC travel with experienced drivers who navigate ghat sections safely." },
              { title: "Mysore to Bangalore",          desc: "Best for airport transfers, corporate travel, and business trips. Spacious seating and comfortable AC travel on the NH275 highway." },
              { title: "Mysore to Wayanad",            desc: "Suitable for wildlife and nature tours. 12 seater tempo traveller and bigger vehicles available for all group sizes." },
              { title: "Mysore to Bandipur",           desc: "Popular for wildlife safari groups. Safe and convenient travel with experienced drivers who know forest entry routes." },
              { title: "Mysore to Hassan / Belur",     desc: "Great for heritage and temple sightseeing — Belur, Halebidu, and Shravanabelagola. Premium group experiences available." },
              { title: "Mysore to Kabini",             desc: "Perfect for nature retreats and resort group transfers. Smooth journey from Mysore to Kabini with scenic views throughout." },
              { title: "Mysore Airport Pickup/Drop",   desc: "Group transport to or from the airport and onward to Bangalore. Punctual pickups and smooth rides for all transfers." },
            ].map((route, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-blue-800 text-sm mb-2">{route.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why Book ── */}
        <ST>Why Book Tempo Traveller in Mysore with Yatra Travel India</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {WHY_CARDS.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{w.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dasara Alert ── */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed">
            <strong>Peak Season Advance Booking Essential:</strong> Mysore receives millions of visitors during{" "}
            <strong>Dasara, Diwali, and summer holidays.</strong> Booking <strong>3 to 5 days in advance</strong> is
            recommended during normal season. During <strong>Dasara</strong>, book <strong>4 to 6 weeks ahead</strong> to
            secure your preferred vehicle.
          </p>
        </div>

        {/* ── FAQs ── */}
        <ST>Frequently Asked Questions — Tempo Traveller in Mysore</ST>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <strong className="text-sm font-bold text-[#0f6ec8] block mb-2">Q{i + 1}. {faq.q}</strong>
              <p className="text-xs text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="bg-gradient-to-r from-[#0f6ec8] to-[#082e5c] rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Mysore Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">
              Mysore Palace, Dasara tours, Coorg, Ooty, Bangalore transfers — call us with your group size and travel date.
              We handle everything else. Dial 9044019511.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap flex-shrink-0">
            <a href="tel:+919044019511" className="bg-[#ff6b35] hover:bg-[#e55a24] text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <FaPhoneAlt size={12} /> Call Now — +91 90440 19511
            </a>
            <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3 rounded-lg border border-white/40 transition-colors flex items-center gap-2">
              <FaWhatsapp size={14} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Network ── */}s
        <ST>Our Pan-India Tempo Traveller Network</ST>
        <p className="text-sm text-gray-500 mb-6 -mt-3">Connecting India&apos;s major cities with premium group travel services.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {NETWORK.map((n) => (
            <a key={n.href} href={n.href}
              className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0f6ec8] hover:shadow-sm transition-all group">
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

      {/* ── Floating Buttons ── */}
      <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <FaWhatsapp size={26} color="#fff" />
      </a>
      <a href="tel:+919044019511" aria-label="Call Now"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f6ec8] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <FaPhoneAlt size={20} color="#fff" />
      </a>

      {toast.show && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl z-[9999] border-l-4 border-[#ff6b35] whitespace-nowrap">
          {toast.msg}
        </div>
      )}
    </div>
  );
}

/* ─── VEHICLE CARD ─── */
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
              <span className="font-bold">{s.label}:</span> {s.value}
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
