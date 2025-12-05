"use client";
import React from "react";
import {
  FaBusAlt,
  FaUserCheck,
  FaRupeeSign,
  FaUsers,
  FaHeadset,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

function WhyChooseMumbai() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 text-gray-800">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#2482c2] text-center mb-6">
        Why Choose Yatra Travel India for Your Tempo Traveller in Mumbai?
      </h2>

      <p className="text-center leading-relaxed mb-10 md:mb-12 text-sm md:text-base">
        Choosing the right travel partner is important when planning group travel in a big and busy
        city like Mumbai. At Yatra Travel India, we provide the most reliable, comfortable, and
        affordable tempo traveller in Mumbai for families, tourists, corporates, and large groups.
        Our service is trusted across Maharashtra because we combine quality vehicles, experienced
        chauffeurs, and transparent pricing — ensuring you always enjoy a smooth, safe, and memorable
        journey.
      </p>

      <div className="space-y-8 md:space-y-10">

        {/* Modern & Well-Maintained Tempo Travellers */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaBusAlt /> Modern & Well-Maintained Tempo Travellers
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            Our fleet includes 9-seater, 12-seater, 16-seater Urbania, and 20-seater tempo travellers in
            Mumbai, each equipped with AC, pushback seats, clean interiors, and spacious legroom. Every
            vehicle is inspected regularly to guarantee the highest comfort and safety standards.
          </p>
        </div>

        {/* Professional & Verified Drivers */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaUserCheck /> Professional & Verified Drivers
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            All our drivers are professionally trained, verified, and experienced in handling long-distance
            and city routes. Whether you are traveling to Lonavala, Pune, Shirdi, or just doing a Mumbai
            Darshan, our chauffeurs ensure safe, smooth, and punctual travel.
          </p>
        </div>

        {/* Affordable & Transparent Pricing */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaRupeeSign /> Affordable & Transparent Pricing
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            We offer the most affordable tempo traveller price in Mumbai with no hidden charges. From
            per-kilometer rates to driver allowance and tolls, everything is clearly communicated
            beforehand, making your travel completely stress-free.
          </p>
        </div>

        {/* Perfect for All Group Sizes & Occasions */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaUsers /> Perfect for All Group Sizes & Occasions
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            From family outings to office tours, wedding guest movement to school excursions — we offer
            the best tempo traveller rental in Mumbai for every purpose. You can choose the exact seating
            capacity that suits your group size and budget.
          </p>
        </div>

        {/* 24×7 Hassle-Free Booking Support */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaHeadset /> 24×7 Hassle-Free Booking Support
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            Booking your tempo traveller in Mumbai is easy and instant. You can confirm your ride through
            call or WhatsApp anytime. Our support team is available 24×7 to guide you with prices,
            routes, and trip planning.
          </p>
        </div>

        {/* Best for Outstation & Local Trips */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaMapMarkedAlt /> Best for Outstation & Mumbai Local Trips
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            We specialize in both Mumbai local sightseeing and outstation tempo traveller service from
            Mumbai for popular destinations like Lonavala, Mahabaleshwar, Shirdi, Goa, Pune, Alibaug,
            and Nashik. Our vehicles are built for long-distance comfort, making your journeys memorable.
          </p>
        </div>

        {/* Trusted by Families, Corporates & Travel Agents */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3 flex items-center gap-2">
            <FaStar /> Trusted by Families, Corporates & Travel Agents
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            Thousands of customers choose Yatra Travel India because we provide:
          </p>
          <ul className="list-disc pl-5 md:pl-6 mt-2 space-y-1 text-sm md:text-base">
            <li>Safe and comfortable travel</li>
            <li>Clean, sanitized vehicles</li>
            <li>Friendly and reliable service</li>
            <li>Customizable packages</li>
          </ul>
          <p className="leading-relaxed mt-2 text-sm md:text-base">
            Whether it’s a 1-day local trip or a multiple-day outstation tour, we ensure the best tempo
            traveller hire experience in Mumbai.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseMumbai;
