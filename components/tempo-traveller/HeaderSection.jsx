"use client";
import React from "react";
import TempoTableSection from "@/components/tempo-traveller/TempoTableSection";

export default function HeaderSection({cd}) {
  return (
    <section className="max-w-5xl mx-auto px-5 py-12 text-gray-800">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2482c2] mb-6">
        {cd.title}
      </h1>

      {/* Intro */}
      {cd.metaDescription.map((para,i)=>(

        <p key={i} className="text-lg leading-relaxed text-center mb-10">
       {para}
        </p>
      ))}
   

     

      {/* Affordable Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Affordable Tempo Traveller Hire in {cd.cityname}
        </h2>
        <p>
          Yatra Travel India is known for offering affordable tempo traveller hire in {cd.cityname} with
          transparent pricing and top-notch service. Our pricing starts from just{" "}
          <span className="font-semibold">₹22/km</span>, with no hidden charges. You’ll receive
          complete details upfront for tolls, parking, and driver allowances.
        </p>

        <p className="font-medium mt-2">Choose from our range of vehicles:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {cd.affordable.map((l,i)=>(
            <li key={i}>{l}</li>
          ))}
        
        </ul>
        <p>
          Each tempo traveller is maintained to the highest standards, offering a clean interior,
          pushback seats, LED lighting, and ample luggage space.
        </p>
      </div>

      {/* Best Seaters Section */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Best 12 Seater & 16 Seater Tempo Traveller in {cd.cityname}
        </h2>
        <p>
          If you’re searching for the best 12 seater tempo traveller in {cd.cityname},{" "}
          <span className="font-semibold">Yatra Travel India</span> is your perfect travel partner.
          Our luxury tempo traveller hire in {cd.cityname} options include the Urbania, Maharaja, and
          premium AC models — ideal for corporate travel, wedding guests, or family vacations.
        </p>

        <p>All our tempo travellers come with:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Pushback & reclining seats</li>
          <li>Chilled air-conditioning</li>
          <li>Sound system & LED screens (on request)</li>
          <li>Neat interiors and large luggage space</li>
          <li>Professional, verified drivers</li>
        </ul>
        <p>
          Whether you’re booking for local sightseeing or long-distance tours, we ensure your journey
          is safe, comfortable, and unforgettable.
        </p>
      </div>

      <TempoTableSection />

      {/* Outstation Section */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Tempo Traveller for Outstation Trips from {cd.cityname}
        </h2>
         {cd.outstationPara.map((para,i)=>(
            <p key={i}>
         {para}
        </p>
          ))}
        

        <p className="font-medium mt-2">Top Outstation Routes:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {cd.outstationRoutes.map((route,i)=>(

          <li key={i}>
            {route}
          </li>
          ))}
          
        </ul>
        <p>
         {cd.outstationLast}
        </p>
      </div>

      {/* Weddings / Corporate Section */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Tempo Traveller for Weddings, Corporate Trips & Events
        </h2>
        <p>
          Need a tempo traveller for wedding in {cd.cityname} or corporate event transport? We specialize
          in luxury fleet rentals for VIP transfers, wedding guests, corporate meetings, and group
          tours.
        </p>

        <p className="font-medium">Why customers choose us:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Luxury and Maharaja models for weddings</li>
          <li>On-time arrival with uniformed drivers</li>
          <li>Flexible hourly or daily rental packages</li>
          <li>Smooth coordination for multiple vehicles</li>
        </ul>
        <p>
          Your special day or event deserves the best — and our luxury tempo traveller in {cd.cityname}
          ensures your guests travel in style and comfort.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="space-y-6 mt-10">
        <h2 className="text-2xl font-semibold text-[#2482c2]">
          Transparent Tempo Traveller Price in {cd.cityname}
        </h2>
        <p>
          Our tempo traveller price in {cd.cityname} is simple, transparent, and affordable. We charge
          based on vehicle type, trip distance, and duration — no hidden fees.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg mt-3">
            <thead className="bg-[#2482c2] text-white">
              <tr>
                <th className="px-4 py-2 text-left">Vehicle Type</th>
                <th className="px-4 py-2 text-left">Rate (₹/km)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="px-4 py-2">9-seater</td>
                <td className="px-4 py-2">₹22/km</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">12-seater tempo traveller</td>
                <td className="px-4 py-2">₹23–₹25/km</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">16-seater (Urbania)</td>
                <td className="px-4 py-2">₹26–₹28/km</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">20-seater</td>
                <td className="px-4 py-2">₹30/km</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Toll, driver allowance, and parking are shared in advance. We provide affordable tempo
          traveller rental in {cd.cityname} for families, schools, corporates, and travel agents.
        </p>
      </div>
    </section>
  );
}
