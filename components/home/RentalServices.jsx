// app/page.tsx or app/about/page.tsx
import React from "react";

export default function RentalServices() {
  return (
    <div className="bg-white  pt-16 px-4 sm:px-10 md:px-20 lg:px-40 text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-dark-btn">
        Yatra Travel India – Local & Outstation Cab Service
      </h1>

      <div className="space-y-6 text-justify text-[16px] leading-relaxed">
        <p>
          Yatra Travel India is a fast-growing and trusted car rental and cab service industry, offering safe, reliable,
          and cost-effective transportation solutions across India. With a customer-first approach and a commitment to
          quality, we provide seamless travel experiences in all major cities of India.
        </p>

        <p>
          At Yatra Travel India, we provide customized car rental solutions for every type of traveler — from solo
          commuters to large families and corporate clients. Whether it’s a one-day city tour, an outstation trip, or an
          airport transfer, our car rental service is available to give you maximum convenience, flexibility, and value
          for money.
        </p>

        <p>
          We offer both chauffeur-driven car rentals and custom rental packages tailored to your travel needs.
        </p>

        <p className="font-semibold">
          Looking for a reliable cab for city travel or a long-distance trip?<br />
          <span className="font-normal">
            Yatra Travel India offers affordable, on-time, and comfortable cabs for both local rides and outstation
            travel across India.
          </span>
        </p>
      </div>
    </div>
  );
}
