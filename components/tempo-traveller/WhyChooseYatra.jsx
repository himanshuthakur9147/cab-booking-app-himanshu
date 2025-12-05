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
import WhyChooseVaranasi from "./WhyChooseVaranasi";
import WhyChooseChandigarh from "./WhyChooseChandigarh";
import WhyChooseMumbai from "./WhyChooseMumbai";

export default function WhyChooseYatra({cd}) {
 
  const points = [
  {
    num: 1,
    icon: <FaUsers />,
    title: "Expert in Tempo Traveller Services",
    content:
      `We specialize in tempo traveller rent in ${cd.cityname} for families, corporates, wedding groups, and tourists alike.`
  },
  {
    num: 2,
    icon: <FaShieldAlt />,
    title: "Comfort, Safety & Affordability Guaranteed",
    content:
      `Looking for a tempo traveller in ${cd.cityname} that guarantees comfort, safety, and affordability? We are your trusted choice for tempo traveller hire, tempo traveller rent, and hassle-free tempo traveller booking in ${cd.cityname}.`
  },
  {
    num: 3,
    icon: <FaBusAlt />,
    title: "Wide Range of Vehicles",
    content:
      `Choose from 9, 12, 15, 17, and 20-seater AC Tempo Travellers to luxury tempo travellers and 12-seater options. Perfect for family trips, corporate tours, and wedding transportation.`
  },
  {
    num: 4,
    icon: <FaCheckCircle />,
    title: "Reliable Outstation Service",
    content:
      `Planning a long-distance journey? Our outstation service covers popular routes like ${cd.cityname} to Varanasi and ${cd.cityname} to Ayodhya, ensuring safe, comfortable, and on-time travel.`
  },
  {
    num: 5,
    icon: <FaCaretSquareUp />,
    title: "Transparent Pricing",
    content:
      `We offer clear, competitive tempo traveller prices in ${cd.cityname} with no hidden costs. All fares, including 12-seater tempo traveller fare, are disclosed upfront for easy budgeting.`
  },
  {
    num: 6,
    icon: <FaHeadset />,
    title: "Easy Booking & Instant Support",
    content:
      `Book through call, WhatsApp, or online in seconds. Our support team is available 24×7 to answer queries and provide instant assistance.`
  },
  {
    num: 7,
    icon: <FaStar />,
    title: "Customer Satisfaction Guaranteed",
    content:
      `From clean AC tempo travellers to punctual pickups and responsive support, we ensure a comfortable, safe, and memorable journey for every traveller.`
  },
  {
    num: 8,
    icon: <FaBusAlt />,
    title: "Perfect Vehicle for Every Trip",
    content:
      `Whether you need a 12-seater, luxury tempo traveller, 17-seater, or a 45+ seater Volvo bus, we offer ideal vehicles for every occasion.`
  },
  {
    num: 9,
    icon: <FaUserCheck />,
    title: "Professional & Verified Drivers",
    content:
      `Travel with experienced, polite, and trustworthy drivers who know ${cd.cityname} and major highways well. Perfect for local sightseeing and outstation trips.`
  },
  {
    num: 10,
    icon: <FaCheckCircle />,
    title: "Ultimate Comfort & Luxury",
    content:
      `Fully air-conditioned vehicles with spacious interiors, reclining seats, and premium features make long routes like ${cd.cityname} to Varanasi and Ayodhya comfortable and smooth.`
  },
  {
    num: 11,
    icon: <FaHeadset />,
    title: "Flexible & Hassle-Free Booking",
    content:
      `Get instant quotes and book instantly via call or WhatsApp—ideal for outstation trips, airport pickups, weddings, or local sightseeing.`
  },
  {
    num: 12,
    icon: <SiTrustpilot />,
    title: "Trusted by Hundreds of Happy Customers",
    content:
      `Families, corporates, wedding groups, and tour organizers across ${cd.cityname} trust us for safe, punctual, and reliable tempo traveller services.`
  },
  {
    num: 13,
    icon: <MdContactSupport />,
    title: "24×7 Support & Assistance",
    content:
      `Our team is available round-the-clock to assist with travel plans, provide guidance, and manage last-minute changes — giving you complete peace of mind.`
  }
];

  return (
    <>
  
    {cd.cityname.toLowerCase()==="lucknow" &&
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
     
      }
    {cd.cityname.toLowerCase()==="hyderabad" &&
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
     
      }
      {cd.cityname.toLowerCase()==="varanasi" && <WhyChooseVaranasi/>}
      {cd.cityname.toLowerCase()==="chandigarh" && <WhyChooseChandigarh/>}
      {cd.cityname.toLowerCase()==="mumbai" && <WhyChooseMumbai/>}

        </>
  );
}
