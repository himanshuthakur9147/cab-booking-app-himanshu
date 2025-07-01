"use client";

import Image from "next/image";
import { FaCheckCircle, FaUsers, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdLuggage, MdAirlineSeatReclineExtra, MdTv, MdOutlineSafetyCheck } from "react-icons/md";
import tempo1 from "@/imgs/tempo1.jpg";
import tempo2 from "@/imgs/tempo2.jpg";
import tempo3 from "@/imgs/tempo3.jpeg";
import tempo4 from "@/imgs/tempo4.jpg";
import tempo5 from "@/imgs/tempo5.png";
import tempo6 from "@/imgs/tempo6.jpeg";
const images = [
  tempo1,
  tempo2,
  tempo3,
  tempo4,
  tempo5,
  tempo6
  // Add more images as needed
];

export default function TempoTravellerSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-dark-btn">Tempo Traveller Services – Yatra Travel India</h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Book 9 to 26 Seater Tempo Travellers for Local & Outstation Trips
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-all duration-300">
              <Image
                src={src}
                alt={`Tempo Traveller ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-dark-btn mb-4">Why Choose Our Tempo Travellers?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaUsers className="text-green-600 mt-1" />
                <span>Multiple seating options: 9, 12, 14, 17, 20 & 26-Seaters</span>
              </li>
              <li className="flex items-start gap-3">
                <MdAirlineSeatReclineExtra className="text-green-600 mt-1" />
                <span>Push-back seats with ample legroom</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1" />
                <span>AC & Non-AC variants</span>
              </li>
              <li className="flex items-start gap-3">
                <MdLuggage className="text-green-600 mt-1" />
                <span>Spacious luggage storage with roof carrier</span>
              </li>
              <li className="flex items-start gap-3">
                <MdTv className="text-green-600 mt-1" />
                <span>Music system & LED TV on request</span>
              </li>
              <li className="flex items-start gap-3">
                <MdOutlineSafetyCheck className="text-green-600 mt-1" />
                <span>Verified drivers, GPS-tracking & sanitized interiors</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-dark-btn mb-4">Perfect For</h3>
            <ul className="space-y-3">
              <li><FaUsers className="inline text-blue-500 mr-2" /> Families, Friends & Tourist Groups</li>
              <li><FaUsers className="inline text-blue-500 mr-2" /> Corporate Outings & Events</li>
              <li><FaUsers className="inline text-blue-500 mr-2" /> Wedding Guest Transport</li>
              <li><FaUsers className="inline text-blue-500 mr-2" /> Temple Visits & Pilgrimage Tours</li>
              <li><FaMapMarkedAlt className="inline text-blue-500 mr-2" /> Outstation Tours & Weekend Trips</li>
            </ul>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
              <p className="text-blue-800 text-lg font-medium">
                <FaPhoneAlt className="inline mr-2" /> Book via WhatsApp or Call: <strong>+91-9876543210</strong>
              </p>
              <p className="text-gray-600">24x7 Support · Transparent Pricing · Easy Booking</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-700 italic text-lg">
          “Clean rides. Trusted drivers. Peaceful journeys.”<br />
          <span className="text-blue-600 font-semibold">Yatra Travel India – Your Road Trip Companion</span>
        </p>
      </div>
    </section>
  );
}
