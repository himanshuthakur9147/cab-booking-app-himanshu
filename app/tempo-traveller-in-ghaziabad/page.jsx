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
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad#service",
      "url": "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad",
      "name": "Tempo Traveller in Ghaziabad | Yatra Travel India",
      "description": "Hire tempo traveller in Ghaziabad for local sightseeing, weddings, and outstation trips to Haridwar, Mathura, Agra, Jaipur, and Nainital. 9, 12, 16, and 20 seater tempo travellers with experienced drivers and all inclusive pricing.",
      "provider": { "@id": "https://www.yatratravelindia.com/#business" },
      "areaServed": { "@type": "City", "name": "Ghaziabad" },
      "serviceType": "Tempo Traveller Rental",
      "offers": { "@type": "Offer", "priceCurrency": "INR", "price": "18", "availability": "https://schema.org/InStock", "url": "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.6", "reviewCount": "268" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yatratravelindia.com/tempo-traveller-in-ghaziabad#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is the tempo traveller price in Ghaziabad for a local tour?", "acceptedAnswer": { "@type": "Answer", "text": "Tempo traveller price in Ghaziabad starts from Rs 3500 for a 9 seater and Rs 4500 for a 12 seater for 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance." } },
        { "@type": "Question", "name": "What is the outstation tempo traveller rate from Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Outstation tempo traveller rate from Ghaziabad starts at Rs 18 per km for a 9 seater and Rs 23 per km for a 12 seater including fuel, toll, parking, and driver allowance." } },
        { "@type": "Question", "name": "Which are the most popular outstation routes from Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Ghaziabad to Mathura Vrindavan and Ghaziabad to Haridwar are the most popular routes for group travel and pilgrimage trips." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Ghaziabad to Haridwar?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 6000 for a 9 seater and Rs 7000 for a 12 seater. Distance is around 200 km and travel time is about 5 hours." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Ghaziabad to Agra?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 5500 for a 9 seater and Rs 6500 for a 12 seater. Distance is around 180 km via Yamuna Expressway." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Ghaziabad to Mathura Vrindavan?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 4500 for a 9 seater and Rs 5500 for a 12 seater. Both Mathura and Vrindavan can be covered in a single day trip." } },
        { "@type": "Question", "name": "Is tempo traveller available from Ghaziabad to Nainital?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo traveller to Nainital starts from Rs 9000 for a 9 seater and Rs 11000 for a 12 seater with multi day package options." } },
        { "@type": "Question", "name": "What is the tempo traveller fare from Ghaziabad to Jaipur?", "acceptedAnswer": { "@type": "Answer", "text": "Fare starts from Rs 7500 for a 9 seater and Rs 9000 for a 12 seater. Jaipur is around 240 km via NH48." } },
        { "@type": "Question", "name": "Can I book a tempo traveller in Ghaziabad for a wedding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tempo travellers are available for wedding guest transport, venue transfers, and group travel with multiple seating options." } },
        { "@type": "Question", "name": "Which tempo traveller is best for 10 people?", "acceptedAnswer": { "@type": "Answer", "text": "A 12 seater tempo traveller is best for a group of 10 people, offering comfortable seating and space for luggage." } },
        { "@type": "Question", "name": "Is luxury tempo traveller available in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, luxury tempo travellers with reclining seats, AC, charging points, and premium interiors are available." } },
        { "@type": "Question", "name": "What is the luxury tempo traveller price in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Luxury tempo traveller starts from Rs 7500 for local tour and Rs 32 per km for outstation trips. Premium models are also available." } },
        { "@type": "Question", "name": "How early should I book a tempo traveller in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Book 3 to 5 days in advance for local trips and 1 to 2 weeks for outstation travel. During peak season, book 3 to 4 weeks early." } },
        { "@type": "Question", "name": "What is included in the tempo traveller fare in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Fare includes fuel, toll, parking, driver allowance, and state tax. Driver accommodation is included for multi day trips." } },
        { "@type": "Question", "name": "Why choose Yatra Travel India in Ghaziabad?", "acceptedAnswer": { "@type": "Answer", "text": "Yatra Travel India offers well maintained vehicles, experienced drivers, on time service, and fixed all inclusive pricing for local and outstation travel." } },
      ],
    },
  ],
};

const VEHICLES = [
  { badge: "9 Seater",  title: "9 Seater Tempo Traveller in Ghaziabad",  img: "/images/9seater.jpg",  specs: [{ label: "Seating Capacity", value: "6–9 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹3,500 onwards" }, { label: "Outstation Rate", value: "₹18/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Small Groups", "Pilgrimage Tours", "Haridwar Trip"] },
  { badge: "12 Seater", title: "12 Seater Tempo Traveller in Ghaziabad", img: "/images/12seater.jpg", specs: [{ label: "Seating Capacity", value: "10–12 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹4,500 onwards" }, { label: "Outstation Rate", value: "₹23/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Music System" }], tags: ["Full AC", "Most Popular", "Outstation NCR", "Wedding Groups"] },
  { badge: "16 Seater", title: "16 Seater Tempo Traveller in Ghaziabad", img: "/images/16seater.jpg", specs: [{ label: "Seating Capacity", value: "13–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Outstation Rate", value: "₹28/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Reclining Seats, Luggage Space" }], tags: ["Full AC", "Office Outings", "School Trips", "Family Holidays"] },
  { badge: "20 Seater", title: "20 Seater Tempo Traveller in Ghaziabad", img: "/images/20seater.jpg", specs: [{ label: "Seating Capacity", value: "17–20 Passengers + 1 Driver" }, { label: "Local Fare", value: "On Request" }, { label: "Outstation Rate", value: "₹32/km" }, { label: "Minimum Km/Day", value: "250 km/day" }, { label: "Facility", value: "AC, Pushback Seat, Entertainment" }], tags: ["Full AC", "Large Groups", "Varanasi Pilgrimage", "Kumbh Groups"] },
  { badge: "Luxury",    title: "Luxury Tempo Traveller in Ghaziabad",    img: "/images/luxury.jpg",   specs: [{ label: "Seating Capacity", value: "9–16 Passengers + 1 Driver" }, { label: "Local Fare", value: "₹7,500 onwards" }, { label: "Outstation Rate", value: "₹32/km onwards" }, { label: "Suspension", value: "Air Suspension" }, { label: "Facility", value: "Leather Seats, LCD, Charging Points" }], tags: ["Air Suspension", "LCD Screens", "Corporate VIP", "Wedding Premium"] },
];

const OUTSTATION_RATE_TABLE = [
  { vehicle: "9 Seater Tempo Traveller",  rate: "₹18/km",         included: "Fuel, toll, parking, driver allowance" },
  { vehicle: "12 Seater Tempo Traveller", rate: "₹23/km",         included: "Fuel, toll, parking, driver allowance" },
  { vehicle: "16 Seater Tempo Traveller", rate: "₹28/km",         included: "Fuel, toll, parking, driver allowance" },
  { vehicle: "20 Seater Tempo Traveller", rate: "₹32/km",         included: "Fuel, toll, parking, driver allowance" },
  { vehicle: "Luxury Tempo Traveller",    rate: "₹32/km onwards", included: "Fuel, toll, parking, driver allowance" },
];

const COMPLETE_FARE_TABLE = [
  { route: "Ghaziabad to Mathura Vrindavan", dist: "140 km",  s9: "₹4,500",  s12: "₹5,500",  s16: "₹7,000",  s20: "₹9,000"  },
  { route: "Ghaziabad to Haridwar",          dist: "200 km",  s9: "₹6,000",  s12: "₹7,000",  s16: "₹9,000",  s20: "₹11,000" },
  { route: "Ghaziabad to Agra",              dist: "180 km",  s9: "₹5,500",  s12: "₹6,500",  s16: "₹8,000",  s20: "₹10,000" },
  { route: "Ghaziabad to Rishikesh",         dist: "230 km",  s9: "₹7,000",  s12: "₹8,000",  s16: "₹10,000", s20: "₹13,000" },
  { route: "Ghaziabad to Nainital",          dist: "300 km",  s9: "₹9,000",  s12: "₹11,000", s16: "₹13,000", s20: "₹16,000" },
  { route: "Ghaziabad to Dehradun",          dist: "280 km",  s9: "₹8,500",  s12: "₹10,000", s16: "₹12,000", s20: "₹15,000" },
  { route: "Ghaziabad to Jaipur",            dist: "240 km",  s9: "₹7,500",  s12: "₹9,000",  s16: "₹11,000", s20: "₹14,000" },
  { route: "Ghaziabad to Shimla",            dist: "370 km",  s9: "₹11,000", s12: "₹14,000", s16: "₹16,000", s20: "₹20,000" },
  { route: "Ghaziabad to Varanasi",          dist: "780 km",  s9: "₹15,000", s12: "₹18,000", s16: "₹22,000", s20: "₹27,000" },
  { route: "Ghaziabad to Mussoorie",         dist: "290 km",  s9: "₹9,000",  s12: "₹11,000", s16: "₹13,000", s20: "₹16,000" },
  { route: "Ghaziabad to Prayagraj",         dist: "600 km",  s9: "₹13,000", s12: "₹16,000", s16: "₹20,000", s20: "₹24,000" },
  { route: "Ghaziabad to Delhi",             dist: "25 km",   s9: "₹2,500",  s12: "₹3,000",  s16: "₹4,000",  s20: "₹5,000"  },
];

const MULTIDAY_TABLE = [
  { dest: "Shimla",     days: "2 to 3 days", fare: "₹14,000 onwards" },
  { dest: "Nainital",   days: "2 days",       fare: "₹11,000 onwards" },
  { dest: "Varanasi",   days: "2 to 3 days", fare: "₹18,000 onwards" },
  { dest: "Prayagraj",  days: "2 days",       fare: "₹16,000 onwards" },
  { dest: "Mussoorie",  days: "2 days",       fare: "₹11,000 onwards" },
  { dest: "Jaipur",     days: "2 days",       fare: "₹9,000 onwards"  },
];

const OUTSTATION_ROUTES_DETAIL = [
  { title: "Ghaziabad to Haridwar by Tempo Traveller",          dist: "200 km", time: "5 hours approx", route: "NH58 highway", best: "Pilgrimage groups, Ganga aarti trips, weekend getaways", fare: "12 Seater: ₹7,000 onwards", desc: "Haridwar is one of the most booked outstation destinations from Ghaziabad. Pilgrimage groups, family religious tours, and weekend travellers regularly make this trip. NH58 is a smooth highway drive and the route is well known to every Yatra Travel India driver. Day trip or overnight package available." },
  { title: "Ghaziabad to Mathura Vrindavan by Tempo Traveller", dist: "140 km", time: "3 hours approx", route: "Yamuna Expressway or NH19", best: "Pilgrimage day trips, religious group tours, family visits", fare: "12 Seater: ₹5,500 onwards", desc: "Most booked outstation day trip from Ghaziabad. Mathura and Vrindavan together make a full day pilgrimage itinerary. Smooth highway drive, easy to cover both destinations in one day trip. 9 seater and 12 seater most popular for this route." },
  { title: "Ghaziabad to Agra by Tempo Traveller",              dist: "180 km", time: "3 to 4 hours", route: "Yamuna Expressway", best: "Taj Mahal group visits, school excursions, family trips", fare: "12 Seater: ₹6,500 onwards", desc: "Yamuna Expressway makes Ghaziabad to Agra one of the smoothest outstation drives from NCR. Taj Mahal group visits, school excursions, and family trips are regularly booked on this route. Day trip easily done in 8 to 10 hours including sightseeing time." },
  { title: "Ghaziabad to Rishikesh by Tempo Traveller",         dist: "230 km", time: "5 to 6 hours", route: "NH58 via Haridwar", best: "Adventure groups, yoga retreats, pilgrimage tours, rafting", fare: "12 Seater: ₹8,000 onwards", desc: "Rishikesh is increasingly popular with adventure groups, yoga retreat travellers, and pilgrimage tours from Ghaziabad. The route passes through Haridwar making a combined Haridwar and Rishikesh trip easily manageable in one outstation package. 12 and 16 seater most popular for this route." },
  { title: "Ghaziabad to Nainital by Tempo Traveller",          dist: "300 km", time: "6 to 7 hours", route: "NH9 via Moradabad", best: "Weekend hill station trips, family holidays, school excursions", fare: "12 Seater: ₹11,000 onwards", desc: "Nainital is one of the most popular weekend hill station destinations from NCR. Scenic Kumaon hills, lake views, cool weather. 12 seater most popular for family groups. 16 seater for larger groups wanting more comfort on the 6 to 7 hour drive up." },
  { title: "Ghaziabad to Dehradun by Tempo Traveller",          dist: "280 km", time: "5 to 6 hours", route: "NH58 via Haridwar or NH334", best: "Weekend getaways, corporate retreats, family trips, Mussoorie", fare: "12 Seater: ₹10,000 onwards", desc: "Dehradun is a popular weekend base from Ghaziabad. Easy highway drive, good road condition, and connects to Mussoorie for groups wanting a quick hill station add on. Corporate retreats and family trips regularly booked on this route." },
  { title: "Ghaziabad to Jaipur by Tempo Traveller",            dist: "240 km", time: "5 hours approx", route: "NH48 via Delhi", best: "Rajasthan group tours, corporate offsites, family holidays", fare: "12 Seater: ₹9,000 onwards", desc: "Jaipur is the most booked Rajasthan destination from Ghaziabad. Heritage sites, forts, markets. Corporate offsites, family holidays, and group tours all regularly booked on this route. NH48 is a smooth well maintained highway. Day trip or overnight package available." },
  { title: "Ghaziabad to Shimla by Tempo Traveller",            dist: "370 km", time: "7 to 8 hours", route: "NH44 via Chandigarh", best: "Himachal hill station trips, family holidays, school tours", fare: "12 Seater: ₹14,000 onwards", desc: "Shimla is one of the most popular multi day outstation packages from Ghaziabad. 7 to 8 hour drive via Chandigarh. Most groups plan a 2 to 3 day Shimla trip. Multi day package with driver accommodation available. 12 and 16 seater most booked for this route." },
  { title: "Ghaziabad to Varanasi by Tempo Traveller",          dist: "780 km", time: "10 to 12 hours", route: "NH19 via Allahabad", best: "Pilgrimage tours, religious group travel, Ganga aarti trips", fare: "12 Seater: ₹18,000 onwards", desc: "Varanasi is one of the most important pilgrimage destinations in India and a regularly booked long distance outstation route from Ghaziabad. Most groups plan a 2 to 3 day trip. Multi day package with driver accommodation included. 20 seater popular for large pilgrimage groups travelling together." },
  { title: "Ghaziabad to Mussoorie by Tempo Traveller",         dist: "290 km", time: "6 hours approx", route: "NH58 via Dehradun", best: "Weekend hill station trips, family holidays, honeymoon groups", fare: "12 Seater: ₹11,000 onwards", desc: "Mussoorie is a favourite weekend hill station for NCR groups. Scenic mountain roads, pleasant weather, and easy access from Ghaziabad via Dehradun. Day trip or overnight package available. The 12 seater most popular for family and friend groups on this route." },
  { title: "Ghaziabad to Prayagraj by Tempo Traveller",         dist: "600 km", time: "8 to 9 hours", route: "NH19", best: "Pilgrimage tours, Kumbh Mela groups, religious group travel", fare: "12 Seater: ₹16,000 onwards", desc: "Prayagraj is one of the most important pilgrimage cities in India. Kumbh Mela, Triveni Sangam, and religious tours regularly bring large groups from Ghaziabad to Prayagraj. 20 seater most popular for large pilgrimage groups. Multi day package available." },
  { title: "Ghaziabad to Delhi by Tempo Traveller",             dist: "25 km",  time: "45 min to 1 hr", route: "NH9 or NH24", best: "Airport transfers, city tours, wedding guest transfers", fare: "12 Seater: ₹3,000 onwards", desc: "Most booked local NCR transfer from Ghaziabad. Airport pickups and drops, Delhi city tours for outstation groups, wedding guest transfers between Ghaziabad and Delhi. 9 and 12 seater most popular for this short NCR transfer route." },
];

const GHAZIABAD_OPTIONS_TABLE = [
  { vehicle: "9 Seater Tempo Traveller in Ghaziabad",   capacity: "6–9 + Driver",   ac: "AC",          ideal: "Small groups — Mathura Vrindavan day trips, Haridwar pilgrimage, Agra family visit, and local NCR sightseeing" },
  { vehicle: "12 Seater Tempo Traveller in Ghaziabad",  capacity: "10–12 + Driver", ac: "AC",          ideal: "Most booked in NCR — all outstation routes, pilgrimage tours, wedding transfers, and office outings from Ghaziabad" },
  { vehicle: "16 Seater Tempo Traveller in Ghaziabad",  capacity: "13–16 + Driver", ac: "AC",          ideal: "Office outings, wedding parties, school trips — better legroom and luggage space for longer routes to Nainital and Shimla" },
  { vehicle: "20 Seater Tempo Traveller in Ghaziabad",  capacity: "17–20 + Driver", ac: "AC",          ideal: "Large Varanasi pilgrimages, Prayagraj Kumbh Mela groups, corporate events — everyone together, maximum luggage capacity" },
  { vehicle: "Luxury Tempo Traveller in Ghaziabad",     capacity: "9–16 + Driver",  ac: "Multi-Zone",  ideal: "Corporate VIP transfers, destination weddings, long outstation drives to Shimla or Varanasi — reclining leather, LCD, charging" },
];

const USE_TAGS = [
  "Haridwar Pilgrimage Tour", "Mathura Vrindavan Day Trip", "Agra Taj Mahal Visit",
  "Rishikesh Adventure Trip", "Nainital Hill Station", "Dehradun Weekend Getaway",
  "Jaipur Heritage Tour", "Shimla Family Holiday", "Varanasi Pilgrimage",
  "Wedding Guest Transfers", "Corporate Office Outings", "Airport Transfers Delhi NCR",
  "Mussoorie Weekend Trip", "Prayagraj Kumbh Mela",
];

const LUXURY_FEATURES = [
  "Fully reclining leather seats",
  "Powerful multi zone AC",
  "Air suspension for smooth ride on all roads",
  "LCD entertainment screens",
  "Charging points at every seat",
  "Premium interiors and clean well maintained cabin",
  "Large luggage space",
  "Experienced professional driver",
  "Fuel, toll, parking, driver allowance included in fare",
];

const INCLUDED = ["Fuel charges", "Driver allowance", "Toll taxes on full route both ways", "Parking charges at all stops", "Driver accommodation for multi day trips"];
const EXCLUDED = ["Driver food on multi day trips (standard industry practice, confirmed at booking)"];

const FAQS = [
  { q: "What is the tempo traveller price in Ghaziabad for a local tour?",                  a: "Tempo traveller price in Ghaziabad starts at Rs 3,500 for a 9 seater and Rs 4,500 for a 12 seater tempo traveller in Ghaziabad. Covers 8 hours and 80 km. Fare includes fuel, toll, parking, and driver allowance. No hidden charges. Call 9044019511 to confirm fare and availability." },
  { q: "What is the outstation tempo traveller rate from Ghaziabad?",                       a: "Outstation tempo traveller rate from Ghaziabad starts at Rs 18 per km for a 9 seater and Rs 23 per km for a 12 seater tempo traveller. Rate covers full distance both ways. Includes fuel, toll, parking, and driver allowance." },
  { q: "Which is the most popular outstation route from Ghaziabad by tempo traveller?",     a: "Tempo traveller Ghaziabad to Mathura Vrindavan and tempo traveller Ghaziabad to Haridwar are the two most booked outstation routes. Both are pilgrimage destinations with high group travel demand throughout the year." },
  { q: "What is the tempo traveller fare from Ghaziabad to Haridwar?",                      a: "Tempo traveller fare Ghaziabad to Haridwar starts at Rs 6,000 for a 9 seater and Rs 7,000 for a 12 seater. Haridwar is 200 km from Ghaziabad. Driving takes around 5 hours on NH58." },
  { q: "What is the tempo traveller fare from Ghaziabad to Agra?",                          a: "Tempo traveller Ghaziabad to Agra fare starts at Rs 5,500 for a 9 seater and Rs 6,500 for a 12 seater. Agra is 180 km via Yamuna Expressway. Drive takes 3 to 4 hours." },
  { q: "What is the tempo traveller fare from Ghaziabad to Mathura Vrindavan?",             a: "Tempo traveller Ghaziabad to Mathura Vrindavan fare starts at Rs 4,500 for a 9 seater and Rs 5,500 for a 12 seater. Mathura is 140 km from Ghaziabad. Both Mathura and Vrindavan covered comfortably in a single day trip." },
  { q: "Is tempo traveller available from Ghaziabad to Nainital?",                          a: "Yes. Tempo traveller Ghaziabad to Nainital starts at Rs 9,000 for a 9 seater and Rs 11,000 for a 12 seater. Nainital is 300 km from Ghaziabad. Multi day outstation tempo traveller package from Ghaziabad with driver accommodation available." },
  { q: "What is the tempo traveller fare from Ghaziabad to Jaipur?",                        a: "Tempo traveller Ghaziabad to Jaipur fare starts at Rs 7,500 for a 9 seater and Rs 9,000 for a 12 seater. Jaipur is 240 km via NH48. Day trip or overnight outstation tempo traveller package available." },
  { q: "Can I book a tempo traveller in Ghaziabad for a wedding?",                          a: "Yes. Tempo traveller for wedding in Ghaziabad is available for guest transfers, venue to venue trips, and hotel pickup and drop. 12 seater tempo traveller for small wedding parties. 16 and 20 seater for larger groups. Fixed fare, clean vehicle, on time pickup." },
  { q: "Which tempo traveller size is best for a group of 10 people in Ghaziabad?",         a: "12 seater tempo traveller in Ghaziabad is the right choice for a group of 10 people. Fits 10 to 12 people comfortably with luggage. Best per head cost when tempo traveller fare in Ghaziabad is split across the group. Starting fare Rs 4,500 for local tour." },
  { q: "Is luxury tempo traveller available in Ghaziabad?",                                 a: "Yes. Luxury tempo traveller in Ghaziabad available through Yatra Travel India. Reclining leather seats, multi zone AC, air suspension, LCD screens, charging points at every seat. Luxury tempo traveller fare in Ghaziabad starts at Rs 7,500 for local tour and Rs 32 per km for outstation trips." },
  { q: "What is the luxury tempo traveller price in Ghaziabad?",                            a: "Luxury tempo traveller price in Ghaziabad starts at Rs 7,500 for a 9 to 12 seater for a local tour of 8 hours and 80 km. Outstation rate starts at Rs 32 per km. Mercedes tempo traveller starts at Rs 12,000 for local tour. Call 9044019511 to confirm fare and availability." },
  { q: "How far in advance should I book a tempo traveller in Ghaziabad?",                  a: "Tempo traveller booking in Ghaziabad should be done 3 to 5 days in advance for local tours and 1 to 2 weeks for outstation tempo traveller from Ghaziabad. During peak season, wedding months, and festival periods book 3 to 4 weeks early." },
  { q: "What is included in the tempo traveller fare in Ghaziabad?",                        a: "Every tempo traveller fare in Ghaziabad with Yatra Travel India includes fuel, toll, parking, driver allowance, and state tax for outstation trips. Driver accommodation included for multi day outstation tempo traveller packages from Ghaziabad. No hidden charges." },
  { q: "Why book tempo traveller in Ghaziabad with Yatra Travel India?",                    a: "Best tempo traveller service in Ghaziabad means vehicle on time, driver knows the route, fare exactly as agreed. Yatra Travel India offers well maintained fleet, experienced drivers on all NCR and outstation routes, fixed all inclusive fare. 9 seater, 12 seater, 16 seater, 20 seater, and luxury tempo traveller in Ghaziabad all available for local and outstation travel." },
];

const NETWORK = [
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-delhi",     city: "Tempo Traveller in Delhi",     type: "Family Travel & Religious Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-varanasi",  city: "Tempo Traveller in Varanasi",   type: "Pilgrimage Groups & Cultural Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-mathura",                   city: "Tempo Traveller in Mathura",    type: "Pilgrimage, Janmashtami & Holi Tours" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-vrindavan",                 city: "Tempo Traveller in Vrindavan",  type: "Banke Bihari Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-agra",      city: "Tempo Traveller in Agra",       type: "Heritage Tours & Group Travel" },
  { href: "https://www.yatratravelindia.com/tempo-traveller-in-ujjain",                    city: "Tempo Traveller in Ujjain",     type: "Mahakal Darshan & Pilgrimage" },
  { href: "https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-mumbai",    city: "Tempo Traveller in Mumbai",     type: "Weddings, VIP Travel & Outstation" },
];

function ST({ children, border = "border-[#0f6ec8]", id }) {
  return <h2 id={id} className={"text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 " + border}>{children}</h2>;
}

export default function TempoTravellerGhaziabad() {
  const [activeTab, setActiveTab] = useState("One Way");
  const [toCity, setToCity]       = useState("");
  const [vtype, setVtype]         = useState("Select Vehicle");
  const [toast, setToast]         = useState({ show: false, msg: "" });
  const tabs = ["One Way", "Round Trip", "Local", "Outstation"];

  const showToast = useCallback((msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: "" }), 3000); }, []);
  const scrollToBooking     = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const handleSelectVehicle = (title) => { setVtype(title); scrollToBooking(); showToast(title + " selected. Enter destination to continue."); };
  const handleSearch        = () => { if (!toCity.trim()) { showToast("Please enter your destination."); return; } showToast("Searching tempo travellers from Ghaziabad to " + toCity + "..."); };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <div className="bg-[#0f6ec8] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="text-white text-xs font-medium">Ghaziabad&apos;s Trusted Tempo Traveller — Haridwar, Mathura, Agra, Nainital, Jaipur, Shimla & Varanasi</p>
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
          <span>Tempo Traveller in Ghaziabad</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f6ec8] via-[#0a4a8f] to-[#082e5c] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-center font-extrabold text-2xl md:text-4xl mb-2">Tempo Traveller on Rent in Ghaziabad</h1>
          <p className="text-blue-200 text-center text-sm mb-5">Haridwar · Mathura Vrindavan · Agra · Rishikesh · Nainital · Jaipur · Shimla · Varanasi</p>
          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {["9 to 20 Seater Available", "Luxury Options", "Fixed Fare · No Hidden Charges", "Confirmed Vehicle Always"].map(b => (
              <span key={b} className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">{b}</span>
            ))}
          </div>
          <div id="booking" className="bg-white rounded-xl shadow-2xl max-w-4xl mx-auto p-5 md:p-7">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-lg p-1 mb-5">
              {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={"flex-1 min-w-[60px] py-2 px-2 text-xs font-semibold rounded-md transition-all " + (activeTab === tab ? "bg-white text-[#0f6ec8] shadow" : "text-gray-500")}>{tab}</button>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <div><label className="block text-xs font-semibold text-gray-500 uppercase mb-1">From</label><input readOnly value="Ghaziabad" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 outline-none" /></div>
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
          {[{ title: "Confirmed Vehicle", sub: "Registration shared before trip" }, { title: "Fixed Fare Always", sub: "Fuel, toll, parking all included" }, { title: "On-Time Pickup", sub: "Driver details shared night before" }, { title: "Experienced NCR Drivers", sub: "Know all routes from Ghaziabad" }].map(item => (
            <div key={item.title} className="flex items-start gap-2 px-4 py-3">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0"><FaShieldAlt className="text-[#0f6ec8] text-sm" /></div>
              <div><strong className="text-xs font-bold text-gray-900 block">{item.title}</strong><span className="text-[11px] text-gray-500">{item.sub}</span></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-blue-800 leading-relaxed">Yatra Travel India offers <strong>tempo traveller hire in Ghaziabad</strong> for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. <strong>9 to 20 seaters available — including Luxury Tempo Traveller.</strong> Vehicle confirmed at booking, experienced driver assigned, fare fixed upfront. No hidden charges. Call <strong>9044019511</strong> to book.</p>
        </div>

        {/* ══ SECTION 1: Main Intro ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Book Tempo Traveller in Ghaziabad - Comfortable Group Travel at the Best Price</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-5">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ghaziabad is one of NCR's busiest cities and group travel here means one thing you need a reliable vehicle that shows up on time and gets everyone where they need to go without any drama. Yatra Travel India offers tempo traveller hire in Ghaziabad for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. 9 to 20 seaters available. Fixed fare. No hidden charges. Call 9044019511 to book.</p>
          </div>

          {/* ══ VEHICLE CARDS ══ */}
        <ST id="services">Tempo Traveller Options in Ghaziabad</ST>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {VEHICLES.map(v => <VehicleCard key={v.badge} vehicle={v} onSelect={handleSelectVehicle} />)}
        </div>

        {/* ══ 2 Seater Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Book Tempo Traveller in Ghaziabad - Confirmed Vehicle, Experienced Driver, Fixed Fare</h2>
          <div>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Yatra Travel India offers 9 to 20 seater tempo travellers for local tours, outstation trips, weddings, corporate travel, and pilgrimage tours. Vehicle confirmed at booking, experienced driver assigned, fare fixed upfront. No hidden charges.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ghaziabad is one of NCR's fastest growing cities and group travel demand here is high. Whether your group is heading to Haridwar for a pilgrimage, Agra for a Taj Mahal visit, Mathura Vrindavan for a religious tour, or simply covering a local function across the city, getting everyone there together in one vehicle is always the smarter call.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Booking multiple cabs sounds fine until someone gets delayed, someone takes the wrong route, and half the group is waiting at the venue while the other half is stuck in Ghaziabad traffic. A tempo traveller from Yatra Travel India removes all of that. One pickup point, one vehicle, one driver, one fare. Everyone travels together and everyone arrives together.</p>
            <p className="text-base text-gray-700 leading-relaxed">And the cost works out better too. Split a tempo traveller fare across 10 or 12 people in Ghaziabad and the per head amount is almost always lower than booking individual cabs. Especially on longer outstation routes where cab meters keep running.</p>
          </div>
        </div>

          {/* What every booking includes */}
          <h3 className="font-bold text-gray-900 text-base mb-3">What Every Yatra Travel India Tempo Traveller Booking in Ghaziabad Includes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Confirmed vehicle at booking",    desc: "Not a verbal promise. A confirmed vehicle with registration details shared before the trip." },
              { title: "Experienced driver assigned",     desc: "Every driver knows the major NCR roads and outstation routes from Ghaziabad. Haridwar, Agra, Mathura, Nainital, Jaipur, Dehradun. No first timers on unfamiliar routes." },
              { title: "Fixed fare agreed upfront",       desc: "Fuel, toll, parking, driver allowance. All included in the quoted fare. Nothing added after the trip ends. What is agreed before departure is what is paid on return." },
              { title: "On time pickup",                  desc: "Driver details shared the night before. Vehicle at your door at the confirmed time. Not approximately. On time." },
              { title: "Direct contact throughout",       desc: "Driver number shared before the trip. Team reachable if anything needs sorting. No chasing, no waiting for callbacks." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 hover:border-[#0f6ec8] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0f6ec8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div><h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 9 Seater Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#ff6b35]">Book 9 Seater Tempo Traveller in Ghaziabad — Yatra Travel India</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">The 9 seater tempo traveller is the smartest choice for small groups of 6 to 9 people travelling in and around Ghaziabad. Compact enough to move through NCR traffic without any trouble, comfortable enough for a full day of sightseeing or a long outstation drive, and easy on the budget when the group is small. No paying for empty seats in a larger vehicle. No squeezing into cabs that were never built for group travel.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Ghaziabad connects directly to some of the most travelled group trip routes in North India. Mathura Vrindavan for a pilgrimage day trip. Haridwar for a Ganga aarti group tour. Agra for a Taj Mahal family visit. Nainital and Dehradun for a weekend hill station getaway. Rishikesh for an adventure or yoga group retreat. Every one of these routes is regularly covered by Yatra Travel India 9 seater tempo travellers from Ghaziabad with experienced drivers who know the roads personally.</p>
            <p className="text-base text-gray-700 leading-relaxed mb-4">Every booking with Yatra Travel India comes with a confirmed vehicle, not just a promise. Driver details shared before the trip. Fare agreed upfront with fuel, toll, parking, and driver allowance all included. Nothing added after the trip ends. What is quoted before departure is exactly what is paid on return.</p>
            <p className="text-base text-gray-700 leading-relaxed">For small wedding transfers, corporate team outings, school excursions, family picnics, or religious group tours from Ghaziabad, the 9 seater tempo traveller from Yatra Travel India covers every requirement without overcharging for space the group does not need.</p>
          </div>
        </div>

        {/* ══ 12 Seater Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">Book 12 Seater Tempo Traveller in Ghaziabad — Yatra Travel India</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-3">Looking to book a 12 seater tempo traveller in Ghaziabad? Yatra Travel India offers the most popular group travel vehicle in NCR for local tours, outstation trips, pilgrimage tours, wedding transfers, and corporate travel. Fixed fare, confirmed vehicle, experienced driver on all routes.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-[#0f6ec8]">12 seater tempo traveller is the most booked group vehicle in Ghaziabad. Fits 10 to 12 people comfortably with luggage. Best per head cost when fare is split across the group. Works for every route, every occasion, every group type.</p>
          </div>
        </div>

        {/* ══ 16 Seater Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Book 16 Seater Tempo Traveller in Ghaziabad — Yatra Travel India</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-3">Looking to book a 16 seater tempo traveller in Ghaziabad? Yatra Travel India offers well maintained 16 seater tempo travellers for medium sized groups travelling locally or outstation. Fixed fare, confirmed vehicle, experienced driver on all routes.</p>
            <p className="text-base text-gray-700 leading-relaxed font-semibold text-blue-800">16 seater tempo traveller is the right choice for groups of 13 to 16 people. Better legroom, more luggage space, and noticeably more comfortable than squeezing 13 or 14 people into a 12 seater. Works for office outings, wedding transfers, pilgrimage tours, school trips, and family holidays from Ghaziabad.</p>
          </div>
        </div>

        {/* ══ Luxury Section ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Luxury Tempo Traveller in Ghaziabad — Yatra Travel India</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <p className="text-base text-gray-700 leading-relaxed mb-4">Looking for a luxury tempo traveller in Ghaziabad? Yatra Travel India offers premium group travel vehicles for corporate trips, wedding parties, outstation tours, and special occasions. Reclining seats, multi zone AC, air suspension, LCD screens, charging points at every seat. Fixed fare, confirmed vehicle, experienced driver.</p>
            <h3 className="font-bold text-gray-900 text-sm mb-3">Luxury Tempo Traveller Features in Ghaziabad</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {LUXURY_FEATURES.map(feat => (
                <div key={feat} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5 text-xs font-bold">●</span>
                  <span className="text-xs text-gray-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>  

        {/* ══ How to Book — 4 Steps ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-[#0f6ec8]">How to Book Tempo Traveller in Ghaziabad with Yatra Travel India</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Booking a tempo traveller in Ghaziabad with Yatra Travel India is simple. No complicated process, no long waiting time, no back and forth for days. One call and everything is sorted. Vehicle confirmed, driver assigned, fare fixed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {[
              { step: "1", title: "Call or WhatsApp 9044019511", desc: "Share your group size, travel date, pickup location, and route. Local sightseeing, outstation trip, pilgrimage tour, wedding transfer, corporate outing. No forms to fill. No waiting for an email response. Direct conversation, straight answers." },
              { step: "2", title: "Get a Clear Fare Quote",       desc: "Fare confirmed on the same call. Vehicle size, base fare, outstation rate if applicable. Fuel, toll, parking, and driver allowance all included in one number. Nothing hidden, nothing vague. The number given on the call is the number paid at the end of the trip." },
              { step: "3", title: "Confirm the Booking",          desc: "Once the fare is agreed, the booking is confirmed immediately. Vehicle registration details and driver name shared before the trip starts. Advance booking strongly recommended during peak season, long weekends, wedding months, and festival periods." },
              { step: "4", title: "Travel",                       desc: "Driver arrives at the confirmed pickup location at the agreed time. Not approximately. On time. Fare settled as confirmed at booking. Nothing added after the trip ends." },
            ].map(item => (
              <div key={item.step} className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#0f6ec8] rounded-full flex items-center justify-center mb-2"><span className="text-white font-bold text-sm">{item.step}</span></div>
                <h4 className="font-bold text-gray-900 text-xs mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0f6ec8] rounded-lg p-3 text-center">
            <p className="text-white text-sm font-semibold">Call 9044019511 to complete the booking process right now.</p>
          </div>
        </div>

        {/* Comparison Table */}
        <h2 className="text-xl font-bold text-gray-900 mb-6 pl-4 border-l-4 border-[#0f6ec8]">
          Tempo Traveller Options in Ghaziabad — Full Comparison
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
              {GHAZIABAD_OPTIONS_TABLE.map((row, i) => (
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

        {/* ══ Outstation Fare Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Outstation Tempo Traveller Fare from Ghaziabad</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-5">Yatra Travel India offers 9 to 20 seater tempo travellers for all major outstation routes from Ghaziabad. Fixed per km fare, confirmed vehicle, experienced driver on every route. No hidden charges.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[500px]">
              <thead><tr className="bg-[#0f6ec8]">{["Vehicle", "Per KM Rate", "What Is Included"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {OUTSTATION_RATE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.vehicle}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-sm">{row.rate}</td>
                    <td className="py-3 px-4 text-gray-600 border-b border-gray-100 text-xs">{row.included}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">* Per km rate applies to full distance both ways. Fare confirmed at booking is fare paid at end of trip. Call 9044019511 for exact quote on your route.</p>
        </div>

        {/* ══ Popular Outstation Routes Detail ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Popular Outstation Routes from Ghaziabad by Tempo Traveller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {OUTSTATION_ROUTES_DETAIL.map(r => (
              <div key={r.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0f6ec8] transition-colors">
                <h3 className="font-bold text-[#0f6ec8] text-sm mb-2">{r.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{r.dist}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{r.time}</span>
                  <span className="text-xs text-[#0f6ec8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">{r.fare}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{r.desc}</p>
                <p className="text-[10px] text-gray-400"><span className="font-semibold">Via:</span> {r.route} &nbsp;|&nbsp; <span className="font-semibold">Best for:</span> {r.best}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Complete Fare Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-orange-500">Complete Outstation Fare Table — Tempo Traveller from Ghaziabad</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
            <table className="w-full text-sm min-w-[600px]">
              <thead><tr className="bg-[#0f6ec8]">{["Route", "Distance", "9 Seater", "12 Seater", "16 Seater", "20 Seater"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-3 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {COMPLETE_FARE_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-3 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.route}</td>
                    <td className="py-3 px-3 text-gray-500 border-r border-b border-gray-100 text-xs">{row.dist}</td>
                    <td className="py-3 px-3 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.s9}</td>
                    <td className="py-3 px-3 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.s12}</td>
                    <td className="py-3 px-3 font-bold text-[#0f6ec8] border-r border-b border-gray-100 text-xs">{row.s16}</td>
                    <td className="py-3 px-3 font-bold text-[#0f6ec8] border-b border-gray-100 text-xs">{row.s20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">* All fares include fuel, toll, parking, and driver allowance. No hidden charges. Fares are approximate and confirmed at booking based on exact route and travel date.</p>

          {/* What is Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
            <div className="border border-blue-200 rounded-xl overflow-hidden">
              <div className="bg-[#1e40af] px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">What Is Included</span></div>
              <ul className="list-none m-0 p-0">{INCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f0f5ff]" : "bg-white")}>{item}</li>)}</ul>
            </div>
            <div className="border border-blue-200 rounded-xl overflow-hidden">
              <div className="bg-blue-700 px-5 py-3"><span className="text-white font-bold text-sm tracking-widest uppercase">Not Included</span></div>
              <ul className="list-none m-0 p-0">{EXCLUDED.map((item, i) => <li key={item} className={"px-5 py-4 text-base font-semibold text-blue-700 border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-blue-50" : "bg-white")}>{item}</li>)}</ul>
            </div>
          </div>
        </div>

        {/* ══ Multi Day Table ══ */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4 pl-4 border-l-4 border-blue-500">Multi Day Outstation Tempo Traveller from Ghaziabad</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">For trips over one day, Yatra Travel India offers complete multi day outstation packages from Ghaziabad. Shimla, Nainital, Varanasi, Prayagraj, and other longer distance destinations are regularly booked as 2 to 3 day packages. Driver accommodation arranged for all overnight stops. Full itinerary confirmed at booking. Fare fixed for complete trip duration.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm min-w-[400px]">
              <thead><tr className="bg-[#0f6ec8]">{["Destination", "Recommended Days", "12 Seater Fare"].map(h => <th key={h} className="text-left text-white font-bold text-xs py-3 px-4 border-r border-white/20 last:border-0">{h}</th>)}</tr></thead>
              <tbody>
                {MULTIDAY_TABLE.map((row, i) => (
                  <tr key={i} className={(i % 2 === 0 ? "bg-[#f8faff]" : "bg-white") + " hover:bg-blue-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900 border-r border-b border-gray-100 text-xs">{row.dest}</td>
                    <td className="py-3 px-4 text-gray-600 border-r border-b border-gray-100 text-xs">{row.days}</td>
                    <td className="py-3 px-4 font-bold text-[#0f6ec8] border-b border-gray-100 text-sm">{row.fare}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Perfect For */}
        <ST border="border-[#ff6b35]">Perfect For</ST>
        <div className="flex flex-wrap gap-2 mb-12">{USE_TAGS.map(tag => <span key={tag} className="bg-blue-50 border border-blue-200 text-[#0f6ec8] text-xs font-semibold px-4 py-2 rounded-full">{tag}</span>)}</div>

        {/* Peak Alert */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-12">
          <p className="text-sm text-yellow-800 leading-relaxed"><strong>Advance Booking Recommended:</strong> Book <strong>3 to 5 days in advance</strong> for local tours and <strong>1 to 2 weeks</strong> for outstation travel from Ghaziabad. During <strong>peak season, wedding months, and festival periods</strong> — book <strong>3 to 4 weeks early.</strong> Vehicles fill up fast in Ghaziabad during these times.</p>
        </div>

        {/* FAQs */}
        <ST>Frequently Asked Questions — Tempo Traveller in Ghaziabad</ST>
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
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Book Your Ghaziabad Group Trip Today</h3>
            <p className="text-blue-200 text-sm max-w-xl">Haridwar, Mathura, Agra, Nainital, Shimla, Varanasi — confirmed vehicle, fixed fare, experienced driver. Call 9044019511 now.</p>
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
