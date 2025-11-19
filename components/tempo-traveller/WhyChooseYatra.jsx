"use client";
import React from "react";
import {
  FaUsers,
  FaBusAlt,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaCheckCircle,
  FaCaretSquareUp,
  FaUserCheck,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";

export default function WhyChooseYatra({cd}) {
  const points = [
    {
      num: "1",
      title: "Expert in Tempo Traveller Services",
      content:
        `We specialize in tempo traveller rent in ${cd.cityname} for families, corporates, wedding groups, and tourists alike`,
      icon: <FaUsers />,
    },
    {
      num: "2",
      title: "Comfort, Safety & Affordability Guaranteed",
      content:
        `Looking for a tempo traveller in ${cd.cityname} that guarantees comfort, safety, and affordability? Yatra Travel India is your trusted choice for tempo traveller hire in ${cd.cityname}, tempo traveller rent in ${cd.cityname}, and hassle-free tempo traveller booking ${cd.cityname}. Here’s why travelers across ${cd.cityname} choose us:`,
      icon: <FaBusAlt />,
    },
    {
      num: "3",
      title: "Wide Range of Vehicles",
      content:
        `From 9, 12, 15, 17, and 20-seater AC tempo travellers to premium luxury tempo traveller ${cd.cityname} and 12 seater tempo traveller ${cd.cityname}, we have the perfect vehicle for every trip — whether it’s a family outing, corporate tour, or a wedding.`,
      icon: <FaBusAlt />,
    },
    {
      num: "4",
      title: "Reliable Outstation Service",
      content:
        `Planning a long-distance journey? Our tempo traveller for outstation ${cd.cityname} service covers routes like tempo traveller from ${cd.cityname} to Varanasi and tempo traveller from ${cd.cityname} to Ayodhya, ensuring safe, comfortable, and on-time travel.`,
      icon: <FaCheckCircle />,
    },
    {
      num: "5",
      title: "Transparent Pricing",
      content:
        `We provide clear and competitive tempo traveller price ${cd.cityname} with no hidden charges. Our 12 seater tempo traveller fare in ${cd.cityname} and other fares are upfront, making it easy for you to plan your budget.`,
      icon: <FaShieldAlt />,
    },
    {
      num: "6",
      title: "Easy Booking & Instant Support",
      content:
        `Booking a tempo traveller booking ${cd.cityname} is simple through our online portal, call, or WhatsApp. Our friendly support team is available 24×7 to assist you and answer all your queries, ensuring a seamless travel experience.`,
      icon: <FaHeadset />,
    },
    {
      num: "7",
      title: "Customer Satisfaction Guaranteed",
      content:
        `We prioritize your comfort, safety, and convenience. From well-maintained AC tempo travellers to punctual pickups and responsive customer support, we go the extra mile to make your journey memorable.`,
      icon: <FaStar />,
    },
    {
      num: "8",
      title: "Perfect Vehicle for Every Trip",
      content:
        `Whether you need a 12 seater tempo traveller ${cd.cityname}, a luxury tempo traveller ${cd.cityname}, or a larger 17, 20, or 45+ seater Volvo bus, we have the ideal vehicle for every occasion. From family outings and group tours to corporate trips, tempo traveller for wedding in ${cd.cityname}, and VIP transfers, we ensure the perfect ride for your needs.`,
      icon: <FaBusAlt />,
    },
    {
      num: "9",
      title: "Professional & Verified Drivers",
      content:
        `Travel with experienced, friendly, and trustworthy drivers who know ${cd.cityname} and highway routes inside out. Whether it’s a tempo traveller for outstation ${cd.cityname} or a local sightseeing trip, our drivers ensure a safe, smooth, and punctual journey every time.`,
      icon: <FaUserCheck />,
    },
    {
      num: "10",
      title: "Ultimate Comfort & Luxury",
      content:
        `All our vehicles are fully air-conditioned with spacious interiors, reclining seats, and premium features. Enjoy long-distance travel, including tempo traveller from ${cd.cityname} to Varanasi or tempo traveller from ${cd.cityname} to Ayodhya, in complete comfort and style.`,
      icon: <FaCheckCircle />,
    },
    {
      num: "11",
      title: "Flexible & Hassle-Free Booking",
      content:
        `Whether it’s an outstation adventure, local sightseeing, airport pickup, or tempo traveller booking ${cd.cityname}, we provide instant quotes and easy booking via call or WhatsApp, saving you time and effort.`,
      icon: <FaCaretSquareUp />,
    },
    {
      num: "12",
      title: "Trusted by Hundreds of Happy Customers",
      content:
        `With a proven track record of safe, punctual, and reliable service, we are the go-to choice for families, corporates, wedding groups, and large tours in ${cd.cityname}.`,
      icon: <SiTrustpilot />,
    },
    {
      num: "13",
      title: "24×7 Support & Assistance",
      content:
        `Our dedicated team is always ready to answer queries, provide assistance, or handle last-minute changes, giving you complete peace of mind throughout your journey.`,
      icon: <MdContactSupport />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2482c2] mb-4">
          Why Choose Yatra Travel India for Your Tempo Traveller in {cd.cityname}?
        </h2>
        <div className="w-24 h-1 bg-[#2482c2] mx-auto rounded-full"></div>
      </div>

      {/* Points */}
      <div className="space-y-10">
        {points.map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-start gap-4 p-8 rounded-3xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl ${
              i % 2 === 0
                ? "bg-gradient-to-r from-[#f8fbff] to-white"
                : "bg-gradient-to-r from-white to-[#f2faff]"
            }`}
          >
            {/* Number badge */}
            <div className="absolute -top-3 -left-3 bg-[#2482c2] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
              {item.num}
            </div>

            {/* Icon */}
            <div className="text-[#2482c2] text-3xl">{item.icon}</div>

            {/* Content */}
            <div>
              {item.title && (
                <h3 className="text-2xl font-semibold text-[#2482c2] mb-2">
               {item.title}
                </h3>
              )}
              {!item.title && (
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.num}.
                </h3>
              )}
              <p className="text-lg leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}

        {/* Final paragraph */}
        <div className="bg-[#e8f7ff] border border-[#bee4f8] rounded-3xl p-10 text-center shadow-md hover:shadow-lg transition-all">
          <p className="text-lg font-medium leading-relaxed">
            Travel with{" "}
            <span className="font-semibold text-[#2482c2]">
              Yatra Travel India
            </span>{" "}
            and experience a luxurious, safe, and comfortable journey every
            time. Whether it’s a family outing, corporate tour, wedding
            transport, or pilgrimage trip, we make your travel memorable and
            worry-free.
          </p>
          <button className="mt-6 bg-[#2482c2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1b6da6] transition-all shadow-md">
            Book Your Tempo Traveller Now
          </button>
        </div>
      </div>
    </section>
  );
}
