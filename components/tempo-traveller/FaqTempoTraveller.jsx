"use client";
import React from "react";


export default function FaqTempoTraveller({cd}) {

  console.log("FaqTempoTraveller",cd.cityname)
  const faqs = [
  {
    question: `How can I book a tempo traveller in ${cd.cityname}?`,
    answer:
      `Booking a tempo traveller in ${cd.cityname} is quick and easy. You can book online, call, or WhatsApp us. Share your trip details, pickup location, destination, travel date, and number of passengers. We’ll provide an instant quote for tempo traveller hire in ${cd.cityname} and tempo traveller booking ${cd.cityname}.`,
  },
  {
    question: `Why should I choose Yatra Travel India for tempo traveller rentals in ${cd.cityname}?`,
    answer:
      `We guarantee a safe, luxurious, and hassle-free journey. Our fleet includes 12 seater tempo traveller ${cd.cityname}, luxury tempo traveller ${cd.cityname}, Urbania 16-seaters, Maharaja 12-seaters, mini buses, and Volvo buses. Verified drivers, transparent tempo traveller price ${cd.cityname}, and 24×7 support ensure complete peace of mind.`,
  },
  {
    question: `Can I hire a tempo traveller from ${cd.cityname} for outstation trips?`,
    answer:
      `Absolutely! Our tempo traveller for outstation ${cd.cityname} service covers destinations like Varanasi, Ayodhya, Delhi, Agra, Jaipur, and Haridwar. Enjoy comfortable AC rides with spacious seating, perfect for families, corporate tours, or long-distance pilgrimages.`,
  },
  {
    question: "Do you provide one-way bookings and airport transfers?",
    answer:`Yes! We offer flexible one-way and round-trip tempo traveller booking in ${cd.cityname}, including airport pickups and drops. Our drivers ensure punctual, safe journeys for families, VIPs, and business travelers.`,
  },
  {
    question: `What seating options are available for tempo travellers in ${cd.cityname}?`,
    answer: (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>9 Seater Tempo Traveller</li>
        <li>12 Seater Tempo Traveller {cd.cityname}</li>
        <li>15, 16, 17, 20 Seater Tempo Travellers</li>
        <li>Luxury 12 Seater and Maharaja 12 Seater for VIP comfort</li>
        <li>Mini buses (25–35 seater) and Volvo buses (45+ seater)</li>
      </ul>
    ),
  },
  {
    question: `How much does it cost to rent a tempo traveller in ${cd.cityname}?`,
    answer:
      `Our tempo traveller price ${cd.cityname} is transparent and affordable. Fares start from ₹20–₹25 per km for 12 seater tempo traveller fare in ${cd.cityname}, depending on vehicle type, route, and trip duration. Fuel, tolls, and driver allowances are included — no hidden charges.`,
  },
  {
    question: "Are drivers experienced and trustworthy?",
    answer:
      `Yes! All drivers are professional, verified, and highly experienced. They are familiar with ${cd.cityname} routes and highways, ensuring your tempo traveller for outstation ${cd.cityname} or local trip is safe, smooth, and stress-free.`,
  },
  {
    question: `Can I book a tempo traveller for weddings or corporate events in ${cd.cityname}?`,
    answer:
      `Absolutely! We specialize in tempo traveller hire in ${cd.cityname} and tempo traveller for wedding in ${cd.cityname}, office outings, and group tours. We ensure the perfect vehicle, seating arrangement, and amenities for your special events.`,
  },
  {
    question: `How early should I book a tempo traveller in ${cd.cityname}?`,
    answer:
      `To secure availability, especially during weekends, festivals, and peak seasons, book your tempo traveller booking ${cd.cityname} at least 3–5 days in advance.`,
  },
  {
    question: "Can I customize my trip or stopovers?",
    answer:
      `Yes! Our flexible booking allows you to plan your own routes, stopovers, and schedule. Whether it’s a family outing, corporate trip, wedding, or pilgrimage, our tempo traveller in ${cd.cityname} service is fully customizable to your needs.`,
  },
];

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
        Frequently Asked Questions (FAQ – Tempo Traveller Rentals in {cd.cityname})
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <h3 className="text-lg font-semibold text-[#2482c2] mb-2">
              Q{index + 1}: {faq.question}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-800">A:</span>{" "}
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
