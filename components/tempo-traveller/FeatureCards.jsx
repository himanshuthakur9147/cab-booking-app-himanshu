"use client";
import { FaTags, FaUserTie, FaCreditCard, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTags className="text-3xl" />,
    title: "Transparent Pricing",
    desc: "Clear, upfront rates with no hidden charges.",
  },
  {
    icon: <FaUserTie className="text-3xl" />,
    title: "Professional Drivers",
    desc: "Experienced, courteous, and safe drivers.",
  },
  {
    icon: <FaCreditCard className="text-3xl" />,
    title: "Online Payment",
    desc: "Pay securely using multiple payment options.",
  },
  {
    icon: <FaHeadset className="text-3xl" />,
    title: "Customer Support",
    desc: "We’re here 24/7 to assist with any queries.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-56 group"
            >
              <div className="w-20 h-20 rounded-full bg-[#2482c2] flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
