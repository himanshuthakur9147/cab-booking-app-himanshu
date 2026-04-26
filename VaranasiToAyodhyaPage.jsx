// ============================================================
// HOW TO USE THIS TEMPLATE
// ============================================================
// 1. Copy this file and rename it to VaranasiToAyodhyaPage.jsx
// 2. In app/tempo-traveller/[city]/page.jsx, add 2 lines:
//       import VaranasiToAyodhyaPage from "@/components/tempo-traveller/VaranasiToAyodhyaPage";
//       {cityname === "varanasi-to-ayodhya" && <VaranasiToAyodhyaPage />}
// That's it. One file. Done.
// ============================================================

"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import BookingTabs from "@/components/BookingTabs";
import AuthInit from "@/components/login/AuthInit";
import RouteLoader from "@/components/Loader/RouteLoader";
import GoogleMapsScriptLoader from "@/components/googleComponents/GoogleMapsScriptLoader";
import { useBooking } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";
import {
  FaShieldAlt, FaUserCheck, FaClock, FaTags, FaUserTie,
  FaCreditCard, FaHeadset, FaBus, FaBusAlt, FaCheckCircle,
  FaUsers, FaStar, FaCaretSquareUp, FaWhatsapp,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import Image from "next/image";
import s9 from "@/imgs/9s.jpg";
import s12 from "@/imgs/12s.jpg";
import s15 from "@/imgs/15s.jpg";
import s16 from "@/imgs/16s.jpg";
import s18 from "@/imgs/18s.jpg";
import s20 from "@/imgs/20s.jpg";

// ============================================================
// ✏️  DATA SECTION — Edit everything below for your city
// ============================================================

const CITY = "Varanasi to Ayodhya";     // ← Proper case city name
const CITY_LC = "varanasi-to-ayodhya";  // ← Lowercase (must match the key in page.jsx)

const DATA = {
  // --- Page heading & intro paragraphs ---
  title: `Tempo Traveller ${CITY} | Yatra Travel India`,
  metaDescription: [
    `Planning a pilgrimage from Varanasi to Ayodhya? Yatra Travel India offers the most reliable tempo traveller ${CITY} service — covering 200 km via NH19 and NH28 in 3.5 to 4 hours, with the entire group in one vehicle, one fare, and zero coordination stress. Kashi has the Ganga and one of the most powerful Jyotirlingas in India. Ayodhya has the Ram Janmabhoomi and the sacred Saryu river. Putting both in the same journey is not just a logistical convenience — for millions of pilgrims it is the natural way these two cities were always meant to be visited, together.`,
    `Choose from 9, 12, 16, and 20 seater tempo travellers — all fully air-conditioned, driven by experienced professionals who know the Varanasi–Ayodhya corridor, and priced with an all-inclusive fixed fare that covers fuel both ways, NH19 and NH28 tolls, parking at Ram Janmabhoomi and every stop in Ayodhya, driver allowance, and driver waiting time at each temple. The number confirmed at booking is the number paid on return.`,
  ],

  // --- "Affordable Hire" section bullet points ---
  affordable: [
    `9-seater tempo traveller — starts at Rs 12,000 for groups of 6 to 9 people`,
    `12-seater tempo traveller — starts at Rs 14,000 for groups of 10 to 12 people; the most-booked size on this route`,
    `16-seater Urbania — starts at Rs 15,000 for groups of 13 to 16 people`,
    `20-seater tempo traveller — starts at Rs 17,000 for groups of 17 to 20 people`,
    `Luxury tempo traveller — starts at Rs 19,000; reclining seats, air suspension, multi-zone AC, and charging points at every seat`,
  ],
  affordableLastPara: `Every fare includes fuel both ways, NH19 and NH28 toll, parking near Ram Janmabhoomi and at every other stop in Ayodhya, driver allowance for the full day, and driver waiting time at each temple and ghat. Multi-day packages include driver accommodation. Nothing is added after the trip ends — the fare locked at booking is the fare paid on return.`,

  // --- "Best 12/16 Seater" section ---
  bestSeaterLine1: `If you are looking for the best 12 seater tempo traveller from Varanasi to Ayodhya, Yatra Travel India is your most trusted partner on this pilgrimage corridor. The 12-seater is the most consistently booked vehicle for this route — spacious across the 4-hour NH19 and NH28 drive, practical for medium family groups of 10 to 12, and economical when the fare is split per head. Our luxury Varanasi to Ayodhya tempo traveller — with fully reclining seats, air suspension, and multi-zone AC — is strongly recommended for families travelling with elderly grandparents, post-operative members, or anyone for whom the standard vehicle would be genuinely uncomfortable across a 4-hour each-way journey.`,
  bestSeaterPointsHeading: `All our Varanasi to Ayodhya tempo travellers come with`,
  bestSeaterPoints: [
    "Pushback and reclining seats for a comfortable 4-hour highway drive each way",
    "Chilled air-conditioning throughout the cabin",
    "Ample luggage space for puja items, prasad, and multi-day baggage",
    "Clean, well-maintained interiors — inspected before every departure",
    "Professional, verified drivers experienced on the Varanasi–Jaunpur–Sultanpur–Faizabad–Ayodhya corridor",
  ],

  // --- Outstation section ---
  outstationPara: [
    `The Varanasi to Ayodhya tempo traveller journey is 200 km via NH19 east to Jaunpur and Sultanpur, then NH28 through Faizabad (Rama Path) into Ayodhya. Road condition is excellent — 4 to 6 lane national highway, smooth asphalt, well-lit throughout, with only minor construction near Faizabad. Drive time is 3.5 to 4 hours on a normal day, 4 to 5 hours with stops or traffic.`,
    `The ideal departure is 5:00–5:30 AM from Varanasi. This avoids the city morning rush, puts the group at Hanuman Garhi in the cool morning air, and joins the Ram Janmabhoomi queue before the daily peak. Groups that leave at 8 AM reach Ayodhya at 11:30, join the midday queue, and see significantly less of the city than groups that left three hours earlier. The 5 AM alarm is the itinerary — everything else organises itself around it.`,
  ],
  outstationRoutes: [
    `Varanasi to Hanuman Garhi, Ayodhya — 76 steps, the city's most recognisable temple, the correct first stop for any serious Ayodhya pilgrimage`,
    `Varanasi to Ram Janmabhoomi — the Ram Lalla darshan; phones strictly not permitted inside the complex; allow 3 hours including queue, security, and exit`,
    `Varanasi to Kanak Bhawan — 5 minutes from Ram Janmabhoomi on foot; the temple gifted by Queen Kaikeyi to Sita; quieter, gold-painted interiors; allow 30–45 minutes`,
    `Varanasi to Saryu Ghat (Ram ki Paidi) — boat ride on the sacred Saryu river, golden-hour views of Ayodhya from the water; allow 30–45 minutes`,
    `Varanasi to Nageshwarnath Temple, Faizabad — optional stop at km 170 on the route for groups doing the extended circuit`,
  ],
  outstationLast: `Book your Varanasi to Ayodhya tempo traveller directly by calling or WhatsApp on 9044019511. Direct bookings get the base rate without any platform markup, confirmed vehicle details before travel, and a driver briefed specifically on your group's requirements and accessibility needs. Book 3–5 days in advance for regular weekday travel, 1–2 weeks for weekends, and 3–4 weeks for Ram Navami, Diwali, and Parikrama Panchami.`,

  // --- Pricing table (4 values: 9-seat, 12-seat, 16-seat, 20-seat) ---
  rates: ["22", "23-25", "26-28", "30"],

  // --- Popular Routes section ---
  routesLine: `Travel comfortably, safely, and on schedule with Yatra Travel India on the Varanasi to Ayodhya tempo traveller — and extend your pilgrimage with these popular connecting routes.`,
  routes: [
    {
      from: `Varanasi → Ayodhya (One Day)`,
      description: `The classic pilgrimage circuit. Depart at 5 AM, reach Ayodhya by 9 AM, cover Hanuman Garhi, Ram Janmabhoomi, Kanak Bhawan, and Saryu Ghat, return to Varanasi by 9 PM. 200 km via NH19 and NH28. 12-seater return package starts at Rs 14,000.`,
    },
    {
      from: `Varanasi → Ayodhya (Two Days)`,
      description: `Day 1 in Varanasi — Kashi Vishwanath darshan, morning Ganga boat ride, and Dashashwamedh Ganga Aarti. Day 2 departs at 5 AM for the full Ayodhya circuit and returns by evening. Neither city feels rushed. Multi-day 12-seater packages start at Rs 25,000.`,
    },
    {
      from: `Varanasi → Ayodhya → Lucknow`,
      description: `Extend the pilgrimage into a three-city circuit. Varanasi to Ayodhya on Day 1, Ayodhya to Lucknow on Day 2 for Bara Imambara and city sightseeing. Ideal for corporate spiritual retreats and extended family tours.`,
    },
    {
      from: `Varanasi → Prayagraj → Ayodhya`,
      description: `A two-destination pilgrimage covering Triveni Sangam in Prayagraj and Ram Janmabhoomi in Ayodhya. Popular with Kumbh Mela pilgrims and families combining multiple sacred dips and darshans in one trip.`,
    },
    {
      from: `Varanasi → Ayodhya (Group / Corporate)`,
      description: `Office spiritual day or temple trust monthly pilgrimage? Our 16-seater and 20-seater options keep the entire group in one vehicle with one driver and one fare — no split cabs, no separate arrivals at the Ram Janmabhoomi security gate.`,
    },
    {
      from: `Varanasi → Ayodhya (Luxury)`,
      description: `For families with elderly passengers or anyone with mobility, joint, or cardiac considerations. Fully reclining seats, air suspension, multi-zone AC, and charging points at every seat. One-way fare starts at Rs 11,000. Return package at Rs 20,000.`,
    },
  ],

  // --- FAQ Section ---
  faqs: [
    {
      question: `How do I book a tempo traveller from Varanasi to Ayodhya?`,
      answer: `Call or WhatsApp Yatra Travel India on 9044019511. Share your group size, travel date, and preferred departure time. The booking is confirmed on the same call with vehicle details, driver name, pickup time, and fixed all-inclusive fare. No advance payment is required to confirm. No cancellation fee for bookings cancelled more than 48 hours before the travel date. A confirmation message with all trip details is sent to your WhatsApp number.`,
    },
    {
      question: `What is the tempo traveller fare from Varanasi to Ayodhya?`,
      answer: `Fares start at Rs 12,000 for a 9-seater (6–9 people), Rs 14,000 for a 12-seater (10–12 people), Rs 15,000 for a 16-seater (13–16 people), and Rs 17,000 for a 20-seater (17–20 people). The luxury tempo traveller starts at Rs 19,000 for groups of 9–16. Every fare is all-inclusive — fuel both ways, NH19 and NH28 tolls, parking at Ram Janmabhoomi and every Ayodhya stop, driver allowance, and waiting time at each temple. Call 9044019511 for the exact fare on your travel date.`,
    },
    {
      question: `How long does the Varanasi to Ayodhya drive take?`,
      answer: `The distance is 200 km (approximately 210–220 km with city approaches). Drive time is 3.5 to 4 hours on a normal day and 4 to 5 hours with stops or traffic. The route follows NH19 east from Varanasi to Jaunpur and Sultanpur, then NH28 via Faizabad (Rama Path) into Ayodhya. Road condition is excellent — 4 to 6 lane national highway, smooth asphalt, well-lit, with minor construction near Faizabad.`,
    },
    {
      question: `What is the best departure time from Varanasi for an Ayodhya day trip?`,
      answer: `5:00–5:30 AM. A 5 AM departure avoids Varanasi's morning rush and gets your group to Ayodhya by 8:30–9:00 AM — Hanuman Garhi in the cool morning, Ram Janmabhoomi queue before the daily peak, Kanak Bhawan in the early afternoon, and Saryu Ghat at golden hour. Groups that leave at 8 AM arrive at 11:30, join the midday queue, and see significantly less of the city. The 5 AM alarm is the entire itinerary.`,
    },
    {
      question: `Are mobile phones allowed inside Ram Janmabhoomi Temple?`,
      answer: `No. Mobile phones are strictly not permitted inside the Ram Janmabhoomi complex — not in bags, not in pockets. This is enforced at every security point without exception. The Yatra Travel India driver parks at the designated pilgrimage vehicle area near the complex and stays with the vehicle. Phones stay in the vehicle throughout the darshan. Brief every group member the evening before departure — not at the entry gate when someone has already joined the queue with a phone in their pocket.`,
    },
    {
      question: `What are the main temples and stops covered on the Varanasi to Ayodhya trip?`,
      answer: `A 5 AM departure covers four key stops in one day: (1) Hanuman Garhi — 76 steps, the devotional starting point for any Ayodhya pilgrimage; allow 1 hour; palanquin available for elderly visitors from the base. (2) Ram Janmabhoomi — the Ram Lalla darshan; allow 3 hours for security, queue, darshan, and exit; weekday queue before 10 AM is 1–2 hours. (3) Kanak Bhawan — 5 minutes on foot from Ram Janmabhoomi; gold interiors, intimate atmosphere; allow 30–45 minutes. (4) Saryu Ghat (Ram ki Paidi) — boat ride on the sacred Saryu; allow 30–45 minutes.`,
    },
    {
      question: `What should our group know before the Varanasi to Ayodhya journey?`,
      answer: `Five things to sort before departure: (1) Phones stay in the vehicle at Ram Janmabhoomi — brief everyone the night before, not at the gate. (2) Wear traditional dress — the security team turns away pilgrims in shorts or sleeveless clothing. (3) Carry small-denomination cash (Rs 10, 20, 50) for the palanquin at Hanuman Garhi, boat at the Saryu, prasad at Kanak Bhawan, and ghat donations. (4) Designate one person to lead the group through security and queues. (5) Confirm 5 AM departure with the driver — exactly 5 AM, not 5:15. The group moving at 5 AM is in the smooth version of this pilgrimage day.`,
    },
    {
      question: `Which tempo traveller size should I choose for Varanasi to Ayodhya?`,
      answer: `The 12-seater is the most consistently booked size on this route — comfortable for 10–12 people with pilgrimage luggage, practical on the 4-hour highway drive, and cost-effective per head. For groups of 6–9 with moderate luggage, the 9-seater works well. For 13–16 people, the 16-seater offers meaningfully better legroom and luggage capacity. For groups of 17–20, the 20-seater keeps everyone in one vehicle — critical at the Ram Janmabhoomi entry where a split group creates unnecessary coordination problems. For elderly or mobility-limited passengers, the luxury tempo traveller is strongly recommended.`,
    },
    {
      question: `How busy is Ram Janmabhoomi and when is the queue shortest?`,
      answer: `Queue time before 10 AM on weekdays runs between 1 and 2 hours on a normal day. On weekends and during Ram Navami or Diwali, queue times extend to 4–6 hours — and that is not an exaggeration. A group that leaves Varanasi at 5 AM and joins the queue by 9:30 AM is in the manageable version of this day. Groups with elderly or mobility-limited members should inform the security team at the entry gate about accessibility requirements at the start, not mid-queue.`,
    },
    {
      question: `Is a one-day trip from Varanasi to Ayodhya enough?`,
      answer: `Yes — with a 5 AM departure. A single day comfortably covers Hanuman Garhi, Ram Janmabhoomi, Kanak Bhawan, and Saryu Ghat with no stop feeling rushed, and gets the group back in Varanasi by 9 PM. Groups that want to give both cities genuine time without either feeling secondary can opt for a two-day package — Day 1 in Varanasi for Kashi Vishwanath and the Ganga Aarti, Day 2 for the full Ayodhya circuit. Multi-day 12-seater packages start at Rs 25,000 with driver accommodation included.`,
    },
    {
      question: `Is a luxury tempo traveller available from Varanasi to Ayodhya?`,
      answer: `Yes. The luxury Varanasi to Ayodhya tempo traveller seats 9 to 16 people and is designed for groups where comfort is a priority — especially families with elderly grandparents, post-operative members, or anyone with joint, cardiac, or mobility considerations. Features include fully reclining seats, air suspension for a smoother ride on NH19 and NH28, multi-zone AC throughout the cabin, and charging points at every seat. One-way fare starts at Rs 11,000 and the return package at Rs 20,000. Call 9044019511 to confirm availability.`,
    },
    {
      question: `How far in advance should I book a tempo traveller for Varanasi to Ayodhya?`,
      answer: `For regular weekday travel outside festival periods, 3–5 days in advance is sufficient. For weekend travel, 1–2 weeks ahead. For Ram Navami, Diwali, Parikrama Panchami, and other major Ayodhya festival dates, book 3–4 weeks in advance. Since the 2024 Ram Lalla Temple consecration, demand on the Varanasi–Ayodhya corridor during festival periods has increased significantly and last-minute availability is extremely limited. Call 9044019511 as early as possible for festival bookings.`,
    },
  ],
};

// ============================================================
// 🎨  DESIGN SECTION — Do NOT edit below unless asked
//     This is a 1:1 replica of the Lucknow page design
// ============================================================

// Vehicle image cards data (hardcoded like original)
const VEHICLES = [
  { title: "9 Seater Tempo Traveller",  img: s9,  seat: "9 Passengers + 1 Driver",  fare: "₹22 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
  { title: "12 Seater Tempo Traveller", img: s12, seat: "12 Passengers + 1 Driver", fare: "₹23 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
  { title: "15 Seater Tempo Traveller", img: s15, seat: "15 Passengers + 1 Driver", fare: "₹24 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
  { title: "16 Seater Tempo Traveller", img: s16, seat: "16 Passengers + 1 Driver", fare: "₹25 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
  { title: "18 Seater Tempo Traveller", img: s18, seat: "18 Passengers + 1 Driver", fare: "₹26 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
  { title: "20 Seater Tempo Traveller", img: s20, seat: "20 Passengers + 1 Driver", fare: "₹28 /km", drivingCharges: "₹500 /day", minKm: "250 km/day", facility: "AC, Pushback Seat, Music system" },
];

// Seat config table (hardcoded like original)
const SEAT_CONFIG = [
  { type: "9 Seater Tempo Traveller",           capacity: "9 + Driver",  ac: "AC",                   ideal: "Perfect for small families, couples, airport pickups, city sightseeing, and short local trips" },
  { type: "12 Seater Luxury Tempo Traveller",   capacity: "12 + Driver", ac: "AC",                   ideal: "Ideal for luxury family trips, VIP transfers, weddings, team travels, and outstation travel" },
  { type: "12 Seater Maharaja Tempo Traveller", capacity: "12 + Driver", ac: "AC with climate control", ideal: "Perfect for VIP group travel, luxury family outings, small corporate tours, and special occasions" },
  { type: "16 Seater Urbania Tempo Traveller",  capacity: "16 + Driver", ac: "AC",                   ideal: "Excellent for corporate group tours, family trips, weekend excursions, and group sightseeing" },
  { type: "15 Seater Tempo Traveller",          capacity: "15 + Driver", ac: "AC",                   ideal: "Great for school excursions, office outings, and family day trips" },
  { type: "17 Seater Tempo Traveller",          capacity: "17 + Driver", ac: "AC",                   ideal: "Suitable for group tours, pilgrimages, long-distance trips, and weekend getaways" },
  { type: "25 Seater Mini Bus",                 capacity: "25 + Driver", ac: "AC",                   ideal: "Perfect for wedding transfers, corporate events, pilgrimage group travel, and school outings" },
  { type: "28 Seater Mini Bus",                 capacity: "28 + Driver", ac: "AC",                   ideal: "Suitable for corporate events, large group tours, and long-distance travel" },
  { type: "30 Seater Mini Bus",                 capacity: "30 + Driver", ac: "AC",                   ideal: "Ideal for school or college trips, pilgrimage tours, large family vacations" },
];

// Feature icon cards (hardcoded like original)
const FEATURE_CARDS = [
  { icon: <FaTags className="text-3xl" />,    title: "Transparent Pricing",   desc: "Clear, upfront rates with no hidden charges." },
  { icon: <FaUserTie className="text-3xl" />, title: "Professional Drivers",  desc: "Experienced, courteous, and safe drivers." },
  { icon: <FaCreditCard className="text-3xl" />, title: "Online Payment",     desc: "Pay securely using multiple payment options." },
  { icon: <FaHeadset className="text-3xl" />, title: "Customer Support",      desc: "We're here 24/7 to assist with any queries." },
];

// Why Choose Yatra points
const WHY_POINTS = [
  { num: 1,  icon: <FaUsers />,         title: "Expert in Tempo Traveller Services",          content: `We specialize in tempo traveller rent in ${CITY} for families, corporates, wedding groups, and tourists alike.` },
  { num: 2,  icon: <FaShieldAlt />,     title: "Comfort, Safety & Affordability Guaranteed",  content: `Looking for a tempo traveller in ${CITY} that guarantees comfort, safety, and affordability? We are your trusted choice for tempo traveller hire, tempo traveller rent, and hassle-free booking in ${CITY}.` },
  { num: 3,  icon: <FaBusAlt />,        title: "Wide Range of Vehicles",                      content: `Choose from 9, 12, 15, 17, and 20-seater AC Tempo Travellers to luxury tempo travellers. Perfect for family trips, corporate tours, and wedding transportation.` },
  { num: 4,  icon: <FaCheckCircle />,   title: "Reliable Outstation Service",                 content: `Planning a long-distance journey? Our outstation service covers all major routes from ${CITY}, ensuring safe, comfortable, and on-time travel.` },
  { num: 5,  icon: <FaCaretSquareUp />, title: "Transparent Pricing",                         content: `We offer clear, competitive tempo traveller prices in ${CITY} with no hidden costs. All fares are disclosed upfront for easy budgeting.` },
  { num: 6,  icon: <FaHeadset />,       title: "Easy Booking & Instant Support",              content: `Book through call, WhatsApp, or online in seconds. Our support team is available 24×7 to answer queries and provide instant assistance.` },
  { num: 7,  icon: <FaStar />,          title: "Customer Satisfaction Guaranteed",            content: `From clean AC tempo travellers to punctual pickups and responsive support, we ensure a comfortable, safe, and memorable journey for every traveller.` },
  { num: 8,  icon: <FaBusAlt />,        title: "Perfect Vehicle for Every Trip",              content: `Whether you need a 12-seater, luxury tempo traveller, 17-seater, or a 45+ seater Volvo bus, we offer ideal vehicles for every occasion.` },
  { num: 9,  icon: <FaUserCheck />,     title: "Professional & Verified Drivers",             content: `Travel with experienced, polite, and trustworthy drivers who know ${CITY} and major highways well.` },
  { num: 10, icon: <FaCheckCircle />,   title: "Ultimate Comfort & Luxury",                  content: `Fully air-conditioned vehicles with spacious interiors, reclining seats, and premium features make every route comfortable and smooth.` },
  { num: 11, icon: <FaHeadset />,       title: "Flexible & Hassle-Free Booking",             content: `Get instant quotes and book instantly via call or WhatsApp — ideal for outstation trips, airport pickups, weddings, or local sightseeing.` },
  { num: 12, icon: <SiTrustpilot />,    title: "Trusted by Hundreds of Happy Customers",     content: `Families, corporates, wedding groups, and tour organizers across ${CITY} trust us for safe, punctual, and reliable tempo traveller services.` },
  { num: 13, icon: <MdContactSupport />, title: "24×7 Support & Assistance",                 content: `Our team is available round-the-clock to assist with travel plans, provide guidance, and manage last-minute changes.` },
];

const POPULAR_HIGHLIGHTS = [
  "Fully AC, spacious, and comfortable tempo travellers",
  "Experienced and verified drivers for a safe journey",
  "Hassle-free booking with instant quotes via call or WhatsApp",
  "Transparent and affordable pricing with no hidden charges",
  "Ideal for families, groups, weddings, corporates, and pilgrims",
];

const TEMPO_TABLE_ROWS = [
  { type: "9 Seater Tempo Traveller",          capacity: "9 + Driver",  rate: "₹22 / km", ideal: "Family Trips / Airport Pickup" },
  { type: "12 Seater Tempo Traveller",         capacity: "12 + Driver", rate: "₹24 / km", ideal: "Small Groups & Friends" },
  { type: "15 Seater Tempo Traveller",         capacity: "15 + Driver", rate: "₹25 / km", ideal: "Office or School Trips" },
  { type: "17 Seater Tempo Traveller",         capacity: "17 + Driver", rate: "₹26 / km", ideal: "Group Tours / Pilgrimages" },
  { type: "20 Seater Luxury Tempo Traveller",  capacity: "20 + Driver", rate: "₹28 / km", ideal: "Corporate or Wedding Events" },
];

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function VaranasiToAyodhyaPage() {   // ← rename this function to match your city
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const { pickupLocation, dropLocation, pickupDate, returnDate, pickupTime } = useBooking();

  const onSubmit = () => {
    setLoader(true);
    let serviceType = "One Way";
    if (returnDate === "" && dropLocation === "") serviceType = "Cab Rental Service";
    else if (returnDate !== "") serviceType = "Round Trip";
    router.push(
      `/booking/select_car?pickup_location=${pickupLocation}&service_type=${encodeURIComponent(serviceType)}&drop_location=${dropLocation}&pickup_date=${pickupDate}&pickup_time=${pickupTime}&return_date=${returnDate}`
    );
    setTimeout(() => setLoader(false), 2000);
  };

  return (
    <>
      <GoogleMapsScriptLoader onLoad={() => {}} />
      <AuthInit />
      <Navbar />
      {loader && <RouteLoader />}

      {/* ── HERO ── */}
      <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 pb-20 px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/bg.webp')` }} />

        <div className="text-center z-10 mb-6 mt-4">
          <h1 className="uppercase font-black text-3xl md:text-6xl text-white tracking-tighter drop-shadow-2xl">
            Tempo Traveller in {CITY}
          </h1>
        </div>

        <div className="w-[80%] md:w-[50%] max-w-3xl z-10">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 w-full pb-12">
            <BookingTabs />
            <div className="flex justify-center -mt-10 relative z-30">
              <button
                onClick={onSubmit}
                disabled={!pickupLocation?.trim()}
                className={`group flex items-center gap-4 px-12 md:px-20 py-3 md:py-4 rounded-2xl font-black uppercase text-xl md:text-3xl transition-all duration-300 shadow-[0_20px_50px_rgba(37,99,235,0.3)] transform active:scale-95 ${
                  !pickupLocation?.trim()
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                    : "bg-[#254997] hover:bg-orange-500 text-white hover:shadow-orange-500/40"
                }`}
              >
                Search Cabs
                <HiArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%] md:w-[65%]">
          {[
            { icon: <FaShieldAlt />, color: "bg-orange-500", title: "Safe & Secure",      sub: "Verified Drivers & Vehicles" },
            { icon: <FaUserCheck />, color: "bg-blue-500",   title: "Expert Chauffeurs",  sub: "Professional & Punctual" },
            { icon: <FaClock />,     color: "bg-green-500",  title: "24/7 Support",       sub: "We are always here for you" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/20 transition-all">
              <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>{item.icon}</div>
              <div>
                <h4 className="text-white font-bold text-sm">{item.title}</h4>
                <p className="text-gray-300 text-[10px] uppercase font-medium">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURE ICON CARDS ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
            {FEATURE_CARDS.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center w-56 group">
                <div className="w-20 h-20 rounded-full bg-[#2482c2] flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HEADER / CONTENT SECTION ── */}
      <section className="max-w-5xl mx-auto px-5 py-12 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2482c2] mb-6">{DATA.title}</h1>
        {DATA.metaDescription.map((para, i) => (
          <p key={i} className="text-lg leading-relaxed text-center mb-10">{para}</p>
        ))}

        {/* Affordable */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#2482c2]">Affordable Tempo Traveller Hire in {CITY}</h2>
          <p>Yatra Travel India is known for offering affordable tempo traveller hire in {CITY} with transparent pricing and top-notch service. Our pricing starts from just <span className="font-semibold">₹20-22/km</span>, with no hidden charges.</p>
          <p className="font-medium mt-2">Choose from our range of vehicles:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">{DATA.affordable.map((l, i) => <li key={i}>{l}</li>)}</ul>
          <p>{DATA.affordableLastPara}</p>
        </div>

        {/* Best seaters */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#2482c2]">Best 12 Seater & 16 Seater Tempo Traveller in {CITY}</h2>
          <p>{DATA.bestSeaterLine1}</p>
          <p>{DATA.bestSeaterPointsHeading}:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">{DATA.bestSeaterPoints.map((l, i) => <li key={i}>{l}</li>)}</ul>
        </div>

        {/* Outstation */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#2482c2]">Tempo Traveller for Outstation Trips from {CITY}</h2>
          {DATA.outstationPara.map((para, i) => <p key={i}>{para}</p>)}
          <p className="font-medium mt-2">Top Outstation Routes:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">{DATA.outstationRoutes.map((r, i) => <li key={i}>{r}</li>)}</ul>
          <p>{DATA.outstationLast}</p>
        </div>

        {/* Weddings / Corporate */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#2482c2]">Tempo Traveller for Weddings, Corporate Trips & Events in {CITY}</h2>
          <p>Need a tempo traveller for wedding in {CITY} or corporate event transport? We specialize in luxury fleet rentals for VIP transfers, wedding guests, corporate meetings, and group tours.</p>
          <p className="font-medium">Why customers choose us:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Luxury and Maharaja models for weddings</li>
            <li>On-time arrival with uniformed drivers</li>
            <li>Flexible hourly or daily rental packages</li>
            <li>Smooth coordination for multiple vehicles</li>
          </ul>
          <p>Your special day or event deserves the best — and our luxury tempo traveller in {CITY} ensures your guests travel in style and comfort.</p>
        </div>

        {/* Pricing table */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#2482c2]">Transparent Tempo Traveller Price in {CITY}</h2>
          <p>Our tempo traveller price in {CITY} is simple, transparent, and affordable. We charge based on vehicle type, trip distance, and duration — no hidden fees.</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg mt-3">
              <thead className="bg-[#2482c2] text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Vehicle Type</th>
                  <th className="px-4 py-2 text-left">Rate (₹/km)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["9-seater", DATA.rates[0]],
                  ["12-seater tempo traveller", DATA.rates[1]],
                  ["16-seater (Urbania)", DATA.rates[2]],
                  ["20-seater", DATA.rates[3]],
                ].map(([label, rate], i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{label}</td>
                    <td className="px-4 py-2">₹{rate}/km</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Toll, driver allowance, and parking are shared in advance. We provide affordable tempo traveller rental in {CITY} for families, schools, corporates, and travel agents.</p>
        </div>
      </section>

      {/* ── TEMPO OPTIONS TABLE ── */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6">
            <FaBus className="text-[#2482c2] text-2xl" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2482c2]">Our Tempo Traveller Options {CITY}</h2>
          </div>
          <p className="text-gray-600 mb-6">Choose the right vehicle for your group size:</p>
          <div className="overflow-x-auto bg-[#f7fbff] rounded-2xl shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2482c2] text-white text-left">
                  {["Type", "Seating Capacity", "Starting Rate", "Ideal For"].map((h, i) => (
                    <th key={i} className="py-3 px-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TEMPO_TABLE_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-[#e9f4fb] transition">
                    <td className="py-3 px-4 text-gray-800 font-medium">{row.type}</td>
                    <td className="py-3 px-4 text-gray-700">{row.capacity}</td>
                    <td className="py-3 px-4 font-semibold text-[#2482c2]">{row.rate}</td>
                    <td className="py-3 px-4 text-gray-700">{row.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── VEHICLE IMAGE CARDS ── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Choose your ride with <span className="text-blue-600">Yatra Travel India</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map((v, i) => (
              <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <Image src={v.img.src} alt={v.title} height={600} width={800} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-700 mb-1"><strong>Seat:</strong> {v.seat}</p>
                  <p className="text-sm text-gray-700 mb-1"><strong>Starting Fare:</strong> {v.fare}</p>
                  <p className="text-sm text-gray-700 mb-1"><strong>Driving Charges:</strong> {v.drivingCharges}</p>
                  <p className="text-sm text-gray-700 mb-1"><strong>Minimum Km/Day:</strong> {v.minKm}</p>
                  <p className="text-sm text-gray-700"><strong>Facility:</strong> {v.facility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEAT CONFIG TABLE ── */}
      <section className="py-12 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
            Tempo Traveller & Mini Bus Options in {CITY.toUpperCase()}
          </h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-xl">
            <table className="w-full border-collapse">
              <thead className="bg-[#2482c2] text-white">
                <tr>
                  {["Vehicle Type", "Seating Capacity", "Air Conditioning", "Ideal For"].map((h, i) => (
                    <th key={i} className="py-4 px-4 text-left text-sm md:text-base font-semibold border-b border-[#1e6ea4]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                {SEAT_CONFIG.map((v, i) => (
                  <tr key={i} className="hover:bg-blue-50 transition-colors">
                    <td className="py-4 px-4">{v.type}</td>
                    <td className="py-4 px-4">{v.capacity}</td>
                    <td className="py-4 px-4">{v.ac}</td>
                    <td className="py-4 px-4">{v.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE YATRA ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2482c2] mb-4">
            Why Choose Yatra Travel India for Your Tempo Traveller in {CITY}?
          </h2>
          <div className="w-24 h-1 bg-[#2482c2] mx-auto rounded-full" />
        </div>
        <div className="space-y-10">
          {WHY_POINTS.map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-start gap-4 p-8 rounded-3xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl ${i % 2 === 0 ? "bg-gradient-to-r from-[#f8fbff] to-white" : "bg-gradient-to-r from-white to-[#f2faff]"}`}>
              <div className="absolute -top-3 -left-3 bg-[#2482c2] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">{item.num}</div>
              <div className="text-[#2482c2] text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#2482c2] mb-2">{item.title}</h3>
                <p className="text-lg leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
          <div className="bg-[#e8f7ff] border border-[#bee4f8] rounded-3xl p-10 text-center shadow-md hover:shadow-lg transition-all">
            <p className="text-lg font-medium leading-relaxed">
              Travel with <span className="font-semibold text-[#2482c2]">Yatra Travel India</span> and experience a luxurious, safe, and comfortable journey every time.
            </p>
            <button className="mt-6 bg-[#2482c2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b6da6] transition-all shadow-md">
              Book Your Tempo Traveller Now
            </button>
          </div>
        </div>
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="bg-gray-50 py-16 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2482c2] mb-4">Popular Tempo Traveller Routes from {CITY}</h2>
            <p className="max-w-3xl mx-auto text-gray-700">{DATA.routesLine}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {DATA.routes.map((route, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 hover:border-[#2482c2]/40">
                <div className="flex items-center gap-3 mb-3">
                  <FaBusAlt className="text-[#2482c2] w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">{route.from}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{route.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-[#2482c2] mb-4 text-center">Why Customers Love These Routes</h3>
            <ul className="grid md:grid-cols-2 gap-3 mt-4">
              {POPULAR_HIGHLIGHTS.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <FaCheckCircle className="text-[#2482c2] mt-1 w-4 h-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
          Frequently Asked Questions (FAQ – Tempo Traveller Rentals in {CITY})
        </h2>
        <div className="space-y-5">
          {DATA.faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <h3 className="text-lg font-semibold text-[#2482c2] mb-2">Q{i + 1}: {faq.question}</h3>
              <div className="text-gray-700 leading-relaxed">
                <span className="font-medium text-gray-800">A:</span> {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp Button */}
      <a href="https://wa.me/919044019511" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp size={32} color="#fff" />
      </a>

      <Footer />
    </>
  );
}
