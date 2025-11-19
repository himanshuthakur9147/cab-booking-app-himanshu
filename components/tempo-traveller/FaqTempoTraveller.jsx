"use client";
import React from "react";
import FAQs from "./FAQs";


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
const varanasi_faqs = [
  {
    question: `What is the cost of Tempo Traveller hire in ${cd.cityname}?`,
    answer: `The cost of Tempo Traveller hire in ${cd.cityname} depends on the model (12 seater, 16 seater, 20 seater), trip duration, and total kilometers. Local sightseeing packages in ${cd.cityname} start from ₹20/km to ₹25/km, while outstation travel begins at ₹18/km. Contact us for the best and most affordable ${cd.cityname} Tempo Traveller prices.`,
  },
  {
    question: `Which Tempo Traveller models are available in ${cd.cityname}?`,
    answer: (
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li>12 Seater Tempo Traveller</li>
        <li>14 Seater Tempo Traveller</li>
        <li>17 Seater Tempo Traveller</li>
        <li>20 Seater Tempo Traveller</li>
        <li>Force Luxury Tempo Traveller</li>
      </ul>
    ),
  },
  {
    question: `Is a Tempo Traveller suitable for ${cd.cityname} local sightseeing?`,
    answer: `Yes! Hiring a Tempo Traveller in ${cd.cityname} is ideal for city tours like Kashi Vishwanath Temple, Sarnath, Assi Ghat, Dashashwamedh Ghat, and Kaal Bhairav Temple. It offers comfortable travel, especially for groups navigating the narrow lanes of ${cd.cityname}.`,
  },
  {
    question: `Can I book a Tempo Traveller for ${cd.cityname} to Prayagraj or Bodh Gaya trips?`,
    answer: `Absolutely! We offer outstation Tempo Traveller hire from ${cd.cityname} to Prayagraj, Ayodhya, Bodh Gaya, Vindhyachal, Lucknow, and even Nepal border trips. All routes are managed by experienced drivers for a safe journey.`,
  },
  {
    question: `How do I book a Tempo Traveller in ${cd.cityname}?`,
    answer: `Booking a Tempo Traveller in ${cd.cityname} is simple—call us, WhatsApp us, or fill out our online booking form. Our team will confirm availability and provide instant fare details.`,
  },
  {
    question: `Are Tempo Travellers comfortable for senior citizens in ${cd.cityname}?`,
    answer: `Yes. Our luxury Tempo Travellers in ${cd.cityname} include pushback seats, AC, charging ports, smooth suspension, and spacious interiors—perfect for elderly passengers.`,
  },
  {
    question: `Do you provide Tempo Traveller service for pilgrimage tours in ${cd.cityname}?`,
    answer: `Yes, we specialize in pilgrimage tour services in ${cd.cityname}, including Kashi Darshan, Sarnath, Vindhyachal, Kaal Bhairav Darshan, Triveni Sangam, and Ayodhya Ram Janmabhoomi trips.`,
  },
  {
    question: `Is AC available in all Tempo Travellers in ${cd.cityname}?`,
    answer: `Yes, all our Tempo Traveller rentals in ${cd.cityname} come with AC. Choose from Standard AC, Luxury AC, and Premium Maharaja Tempo Travellers.`,
  },
  {
    question: `Do you provide airport pickup and drop in ${cd.cityname}?`,
    answer: `Yes! We provide airport pickup and drop service from Lal Bahadur Shastri Airport with Tempo Travellers suitable for families, corporate groups, and tourists.`,
  },
  {
    question: `What are the charges for Tempo Traveller parking and tolls in ${cd.cityname}?`,
    answer: `Parking, toll, and interstate taxes are usually extra and depend on the travel route. Our billing is fully transparent with no hidden charges.`,
  },
  {
    question: `Can I hire a Tempo Traveller for weddings in ${cd.cityname}?`,
    answer: `Yes! We provide Tempo Travellers in ${cd.cityname} for wedding guest transportation, pick-up/drop, baraat movement, and group travel.`,
  },
  {
    question: `Do you provide experienced drivers familiar with ${cd.cityname} routes?`,
    answer: `Absolutely. All our drivers are trained, experienced, and well-versed with ${cd.cityname} routes as well as nearby pilgrimage destinations.`,
  },
  {
    question: `How early should I book a Tempo Traveller in ${cd.cityname} during peak season?`,
    answer: `During festivals like Mahashivratri, Dev Deepawali, and Kartik Purnima, booking your Tempo Traveller in ${cd.cityname} at least 7–10 days in advance is recommended.`,
  },
  {
    question: `Is there a minimum km limit for Tempo Traveller rentals in ${cd.cityname}?`,
    answer: `Yes, most services have a 250 km per day limit for outstation trips. Local sightseeing usually includes an 8-hour / 80 km package.`,
  },
  {
    question: `Are Tempo Travellers safe for night travel from ${cd.cityname}?`,
    answer: `Yes. Our vehicles are GPS-enabled, well-maintained, and driven by trained drivers—making night travel safe for family and group tours from ${cd.cityname}.`,
  },
];


  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#2482c2] mb-8">
        Frequently Asked Questions (FAQ – Tempo Traveller Rentals in {cd.cityname})
      </h2>

     <FAQs faqs={cd.cityname==="varanasi"?varanasi_faqs:faqs}/>
    </section>
  );
}
