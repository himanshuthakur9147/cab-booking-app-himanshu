import Image from "next/image";
import team from "@/imgs/team.jpg"
import OurStorySection from "./OurStory";
import Link from "next/link";
export default function AboutUs() {
  return (
    <div className="w-full px-4 md:px-20 py-10 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">About us</h1>
        <p className="text-gray-500">Home / About us</p>
      </section>

      {/* About Description */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src={team}
            alt="Team Working"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-gray-600">
           Yatra Travel India is a premier cab service committed to seamless, safe, and comfortable transportation across India. From bustling metro cities to quiet countryside routes, we ensure a smooth journey—beginning to end.
          </p>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to revolutionize ground travel with customer-centric services, reliable fleets, and transparent pricing, making every ride a pleasant and memorable experience.
          </p>
          <Link href={"/contact"}><button className="px-4 py-2 border border-blue-600 cursor-pointer text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            Get in touch
          </button></Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why choose us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
At Yatra Travel India, we combine reliability, comfort, and affordability to deliver a seamless travel experience. Whether you're planning a quick city ride or a long-distance journey, our professional service, well-maintained fleet, and transparent pricing make us your trusted travel partner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          { [
  {
    title: "Reliability & Safety",
    desc: "Every ride is backed by timely pickups, professional drivers, and regular vehicle maintenance.",
    icon: (
      <svg className="w-10 h-10 text-yellow-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8 2 4 4 4 4v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V4s-4-2-8-2zM9 11.5l1.5 1.5L15 8.5l1 1-6.5 6.5L8 13l1-1.5z" />
      </svg>
    )
  },
  {
    title: "Wide Reach & Flexibility",
    desc: "Available across major cities, airports, and tourist destinations with a variety of vehicle options to suit solo travelers, families, and corporate clients.",
    icon: (
      <svg className="w-10 h-10 text-green-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 00-7 17.32L4 22l2.68-1A10 10 0 1012 2zm-1 14h2v2h-2v-2zm1-12a8 8 0 017.74 6H13V3.26z" />
      </svg>
    )
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Fares and surcharges are clearly outlined before booking, with convenient payment options including digital wallets, UPI, and cash.",
    icon: (
      <svg className="w-10 h-10 text-blue-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.25 3.8 10.75 9 12 5.2-1.25 9-6.75 9-12V5l-9-4zm0 17a5 5 0 01-5-5h2a3 3 0 006 0c0-1.5-2-2-3-2s-1-.5-1-1a1 1 0 012 0h2a3 3 0 00-6 0c0 1.5 2 2 3 2s1 .5 1 1a1 1 0 01-2 0h-2a3 3 0 006 0 5 5 0 01-5 5z" />
      </svg>
    )
  },
  {
    title: "Customer-Centric Support",
    desc: "Round‑the‑clock customer service to assist with bookings, route adjustments, emergencies, and special requests.",
    icon: (
      <svg className="w-10 h-10 text-pink-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1a10 10 0 00-10 10v1a4 4 0 004 4v2a2 2 0 002 2h4a2 2 0 002-2v-2a4 4 0 004-4v-1A10 10 0 0012 1zm-1 16v2h2v-2h-2zm1-13a8 8 0 017 7v1a2 2 0 01-2 2h-1v2h-8v-2H8a2 2 0 01-2-2v-1a7 7 0 017-7z" />
      </svg>
    )
  },
  {
    title: "Comfort-Driven Fleet",
    desc: "From cozy hatchbacks and sedans to spacious SUVs and premium cars, all vehicles are cleaned and equipped for a comfortable journey.",
    icon: (
      <svg className="w-10 h-10 text-purple-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16a3 3 0 100 6 3 3 0 000-6zm14 0a3 3 0 100 6 3 3 0 000-6zM5 14V9l2-5h10l2 5v5H5zm12-5l-1.5-3.5h-7L7 9h10z" />
      </svg>
    )
  }
].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded shadow">
                <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Values */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
     Driven by integrity, safety, and innovation, we are committed to offering exceptional service while making responsible and customer-centric choices every mile of the way.


        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
  {
    title: "Integrity",
    desc: "Clear fares, honest services, zero hidden fees.",
    icon: (
      <svg className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.25 3.8 10.75 9 12 5.2-1.25 9-6.75 9-12V5l-9-4zm0 14a5 5 0 01-5-5h2a3 3 0 006 0c0-1.5-2-2-3-2s-1-.5-1-1a1 1 0 012 0h2a3 3 0 00-6 0c0 1.5 2 2 3 2s1 .5 1 1a1 1 0 01-2 0h-2a3 3 0 006 0 5 5 0 01-5 5z" />
      </svg>
    )
  },
  {
    title: "Safety",
    desc: "Stringent driver vetting, regular vehicle inspections, real-time monitoring.",
    icon: (
      <svg className="w-10 h-10 text-red-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8 2 4 4 4 4v6c0 5.5 4 10.7 8 12 4-1.3 8-6.5 8-12V4s-4-2-8-2zm0 16a5 5 0 01-5-5h2a3 3 0 006 0h2a5 5 0 01-5 5zm0-10a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    )
  },
  {
    title: "Service Excellence",
    desc: "Focused on friendly interactions and professional conduct.",
    icon: (
      <svg className="w-10 h-10 text-yellow-500 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 00-10 10v3a4 4 0 004 4v1a2 2 0 002 2h4a2 2 0 002-2v-1a4 4 0 004-4v-3a10 10 0 00-10-10zm0 6a2 2 0 012 2 2 2 0 01-4 0 2 2 0 012-2zm2 10h-4v-1a2 2 0 014 0v1z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    desc: "Integrating app-based booking, live tracking, and AI-driven route optimization.",
    icon: (
      <svg className="w-10 h-10 text-purple-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2h4v2h-4V2zm-3 3h10v2H7V5zm11 3H6a1 1 0 00-1 1v9a4 4 0 004 4h6a4 4 0 004-4v-9a1 1 0 00-1-1zm-7 3h2v5h-2v-5zm0 7h2v2h-2v-2z" />
      </svg>
    )
  },
  {
    title: "Responsibility",
    desc: "Promoting eco-conscious choices and contributing to the communities we serve.",
    icon: (
      <svg className="w-10 h-10 text-green-600 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.5 2.95 8.32 7 9.54v-4.09c-1.38-.43-2.4-1.68-2.4-3.17h2.4V9.5H7.6c0-.83.67-1.5 1.5-1.5H12v4.78c0 1.5 1.02 2.75 2.4 3.17v4.09c4.05-1.22 7-5.04 7-9.54 0-5.52-4.48-10-10-10z" />
      </svg>
    )
  }
].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded shadow">
                <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
          <OurStorySection/>
      {/* Call to Action */}
      <section className="text-center py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">That’s all about us</h2>
        <p className="text-gray-600 mb-6">Get in Touch</p>
        <p className="text-gray-500 max-w-xl text-xl mx-auto mb-6">
         Book via our app or website – and enjoy your journey!
        </p>
        <Link href={"/"}><button className="px-6 py-3 border cursor-pointer font-bold border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
          Book Now
        </button></Link>
      </section>
    </div>
  );
}
