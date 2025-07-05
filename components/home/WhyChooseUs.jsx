import React from 'react'

const WhyChooseUs = () => {
  return (
    <div>
            {/* Why Choose Us */}
      <section className="text-center  pb-10 md::pb-16">
        <h2 className="text-3xl font-bold mb-4 uppercase text-dark-btn">Why choose YATRA TRAVEL INDIA</h2>
        <p className="text-gray-600 max-w-[90%] lg:max-w-[70%] mx-auto mb-10">
At Yatra Travel India, we combine reliability, comfort, and affordability to deliver a seamless travel experience. Whether you're planning a quick city ride or a long-distance journey, our professional service, well-maintained fleet, and transparent pricing make us your trusted travel partner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[95%] lg:max-w-[90%] mx-auto">
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
    </div>
  )
}

export default WhyChooseUs
