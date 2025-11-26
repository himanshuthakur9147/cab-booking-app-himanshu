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

export default function WhyChooseYatra({cd}) {
 
  return (
    <>
  
    {cd.cityname.toLowerCase()==="lucknow" || cd.cityname.toLowerCase()==="hyderabad" &&
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

        </>
  );
}
