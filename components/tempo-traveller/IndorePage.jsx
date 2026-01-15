"use client";

import { FaCheckCircle, FaRupeeSign, FaUsers,FaMapMarkerAlt, FaShieldAlt, FaRoad, FaSmile,
  FaBus,

  FaRoute,
  FaUserTie,
  FaPrayingHands,
  FaCouch,
  FaWhatsapp,
  FaStar, } from "react-icons/fa";
import TempoImageCards from "./TempoImageCards";
import TempoSeatConfig from "./TempoSeatConfig";

export default function IndorePage() {
    const advantages = [
    {
      icon: <FaCheckCircle />,
      title: "Reliable Tempo Traveller Service in Indore",
      content: `We operate with a well-managed fleet of tempo travellers in Indore, ensuring timely pickups, route familiarity, and smooth coordination. Whether it’s local sightseeing, temple visits, or long outstation trips, reliability is our biggest strength.`,
    },
    {
      icon: <FaBus />,
      title: "Wide Range of Tempo Travellers for Every Group Size",
      content: `We provide multiple options to suit different group requirements:
● 12 seater tempo traveller in Indore for families and pilgrimages
● 16 seater tempo traveller for corporate tours and school groups
● 20 seater tempo traveller for large group travel and events
All vehicles are clean, spacious, and ideal for both short city rides and long highway journeys.`,
    },
    {
      icon: <FaRupeeSign />,
      title: "Cost-Effective & Transparent Pricing",
      content: `Our tempo traveller fare in Indore is designed to be affordable and transparent. There are no hidden charges, and customers receive clear fare breakup in advance, including driver allowance, tolls, and parking where applicable.`,
    },
    {
      icon: <FaRoute />,
      title: "Best Choice for Outstation Trips from Indore",
      content: `We specialize in tempo traveller for outstation from Indore, covering popular routes such as:
● Indore to Ujjain
● Indore to Omkareshwar
● Indore to Mandu
● Indore to Bhopal
Our drivers are experienced with these highways, ensuring safe and comfortable long-distance travel.`,
    },
    {
      icon: <FaUserTie />,
      title: "Professional & Local Drivers",
      content: `Every tempo traveller in Indore is driven by trained, verified, and route-experienced chauffeurs. They understand local traffic conditions, peak hours, and alternate routes, which helps avoid delays and ensures a smooth journey.`,
    },
    {
      icon: <FaPrayingHands />,
      title: "Ideal for Temple Tours, Weddings & Corporate Travel",
      content: `Our tempo traveller rental service in Indore is widely used for:
● Religious trips & temple darshan
● Wedding guest transportation
● Corporate outings & conferences
● School and college tours`,
    },
    {
      icon: <FaCouch />,
      title: "Well-Maintained, Comfortable Vehicles",
      content: `All our tempo travellers come with:
● Comfortable pushback seating
● Powerful air-conditioning
● Clean interiors and ample luggage space
● Smooth suspension for highway travel`,
    },
    {
      icon: <FaWhatsapp />,
      title: "Easy Booking & Quick Support",
      content: `Booking a tempo traveller in Indore with Yatra Travel India is quick and hassle-free via call or WhatsApp. Our support team assists with vehicle selection, route planning, and pricing.`,
    },
    {
      icon: <FaStar />,
      title: "Trusted Tempo Traveller Operator in Indore",
      content: `With growing repeat customers and referrals, Yatra Travel India has built a reputation as a trusted tempo traveller service provider in Indore, known for honesty, punctuality, and quality service.`,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-14 space-y-4">

      {/* INTRO */}
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-blue-600">
          Tempo Traveller on Rent in Indore | Yatra Travel India
        </h1>

        <p className="text-gray-700 leading-relaxed">
          If you already have your dates and group size in mind, arranging a tempo
          traveller in Indore is simple with Yatra Travel India. Our team works
          directly with customers—no call centers, no confusion—just clear
          coordination and dependable service.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether it’s a family trip, office movement, temple visit, or a multi-day
          outstation journey, we ensure your group travels together comfortably and
          on schedule.
        </p>
      </div>

      {/* BOOKING INFO */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <FaUsers className="text-blue-600 text-2xl" />,
            title: "Right Vehicle Selection",
            desc: "Choose from 12, 16, and 20 seater tempo travellers in Indore based on group size and route.",
          },
          {
            icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
            title: "Complete Trip Coordination",
            desc: "Vehicle, driver, pickup point, and schedule are finalized before your journey begins.",
          },
          {
            icon: <FaRupeeSign className="text-blue-600 text-2xl" />,
            title: "Transparent Pricing",
            desc: "Clear fare calculation with no hidden charges or last-minute surprises.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* PRICING SECTION */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 space-y-4">
        <h2 className="text-3xl font-bold text-blue-700">
          Book a Tempo Traveller in Indore – From ₹23/km
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Travel hassle-free in Indore with Yatra Travel India’s reliable tempo
          traveller service starting at just ₹23 per km. Our transparent pricing
          includes fuel, tolls, and driver allowance.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From local Indore travel to outstation routes like Ujjain, Omkareshwar,
          Mandu, and Bhopal, our fares are calculated based on actual distance,
          traffic patterns, and vehicle type—so you pay only for what you use.
        </p>
      </div>

      {/* 12 SEATER SECTION */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-600">
          Low-Cost 12 Seater Tempo Traveller in Indore
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Our 12 seater tempo traveller in Indore is the most preferred choice for
          family travel, wedding guest transport, office outings, and temple visits.
          Designed for comfort and priced economically, it’s ideal for both local
          and outstation journeys.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We understand Indore’s traffic conditions around Vijay Nagar, Palasia,
          Rajwada, MR-10 Road, and AB Road, and price our rentals accordingly to
          keep them affordable and fair.
        </p>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Fully air-conditioned cabin",
            "Comfortable push-back seats",
            "Adequate luggage space",
            "Clean interiors",
            "Smooth suspension",
            "Professional route-experienced drivers",
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 border rounded-lg p-4"
            >
              <FaCheckCircle className="text-green-600" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
<TempoImageCards/>
<TempoSeatConfig city={"indore"}/>
      {/* CTA */}
      <div className="text-center bg-gray-900 text-white rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">
          Get the Best Tempo Traveller Fare in Indore
        </h3>
        <p className="text-gray-300">
          Perfect for families • Weddings • Corporate groups • Pilgrimage travel
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
          Call Now for Instant Booking
        </button>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 space-y-20">

      {/* PLACES INTRO */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-blue-600">
          Places to Visit in Indore – Top Tourist Attractions & Nearby Getaways
        </h2>

        <p className="text-gray-700">
          Indore is not just about food and business travel—it’s also a major base
          for heritage tours, temple visits, school excursions, and weekend group
          trips. With a tempo traveller in Indore, visiting these attractions
          becomes comfortable, cost-effective, and well-coordinated for families
          and large groups.
        </p>

        <p className="text-gray-700">
          Below are the most searched and frequently visited places in and around
          Indore, ideal for local sightseeing and short outstation travel.
        </p>
      </div>

      {/* PLACES LIST */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white border rounded-xl p-6 space-y-2">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            Rajwada Palace – Heritage Landmark in Indore
          </h3>
          <p className="text-gray-700">
            Located in the heart of the old city, Rajwada Palace is one of the most
            visited historical places in Indore. Group visits are common here due
            to limited parking and crowded lanes, making a tempo traveller rental
            in Indore a convenient choice.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            Lal Bagh Palace – Royal Architecture & Gardens
          </h3>
          <p className="text-gray-700">
            A favourite for family tours, school groups, and heritage walks, Lal
            Bagh Palace Indore showcases royal interiors and vast lawns. It is
            best visited in groups using a 12 seater or 16 seater tempo traveller
            in Indore for easy entry and exit.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Khajrana Ganesh Temple – Major Religious Destination
          </h3>
          <p className="text-gray-700">
            One of the most searched temples in Indore, Khajrana Ganesh Mandir
            attracts devotees throughout the year, especially during festivals.
            Hiring a tempo traveller in Indore for temple visits ensures timely
            darshan and hassle-free group movement.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Sarafa Bazaar – Night Food Street Experience
          </h3>
          <p className="text-gray-700">
            Known nationwide for Indore’s street food culture, Sarafa Bazaar
            Indore is ideal for evening group outings. A tempo traveller hire in
            Indore allows safe late-night return without splitting the group into
            multiple cars.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Chappan Dukan – Indore’s Food Hub
          </h3>
          <p className="text-gray-700">
            Perfect for short sightseeing trips, 56 Dukan Indore is a must-visit
            for tourists and corporate groups. Parking is tight here, so a single
            tempo traveller rental in Indore works better than multiple vehicles.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Patalpani Waterfall – Popular Weekend Getaway
          </h3>
          <p className="text-gray-700">
            Located around 35 km from the city, Patalpani Indore is among the most
            searched picnic spots near Indore. A tempo traveller for outstation
            from Indore is ideal for groups visiting during monsoon and winter.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Ralamandal Wildlife Sanctuary – Nature & City Views
          </h3>
          <p className="text-gray-700">
            Great for morning trips and school outings, Ralamandal Sanctuary
            Indore offers greenery and city views. Groups prefer booking tempo
            traveller hire in Indore for flexible timings and safe travel.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Omkareshwar Jyotirlinga – Sacred Pilgrimage from Indore
          </h3>
          <p className="text-gray-700">
            One of the most demanded routes, Indore to Omkareshwar tempo traveller
            booking is popular for religious groups and family tours. The journey
            is smooth and best covered in a 12 or 16 seater tempo traveller.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 space-y-2">
             <h3 className="font-semibold text-lg flex items-center gap-2">
             <FaMapMarkerAlt className="text-blue-600" />
            Ujjain Mahakaleshwar – One-Day Religious Tour
          </h3>
          <p className="text-gray-700">
            Just a short drive away, Ujjain from Indore is among the top pilgrimage
            routes. A tempo traveller from Indore to Ujjain ensures early arrival
            for Bhasma Aarti and comfortable return.
          </p>
        </div>

      </div>

      {/* ADVANTAGES INTRO */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">
          Advantages of Yatra Travel India’s Tempo Traveller Rental Service in Indore
        </h2>

        <p className="text-gray-700">
          Choosing the right tempo traveller rental in Indore can make a big
          difference in comfort, cost, and overall travel experience. At Yatra
          Travel India, we focus on real on-ground travel needs of families,
          corporates, pilgrims, and group travellers moving in and out of Indore
          every day.
        </p>

        <p className="text-gray-700">
          Here’s why customers consistently prefer our Indore tempo traveller hire
          service over others:
        </p>
      </div>

      {/* ADVANTAGES FULL CONTENT – NOT SHORTENED */}
       <section className="max-w-7xl mx-auto px-4 md:px-12 py-14">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">
        Advantages of Yatra Travel India’s Tempo Traveller Rental Service in Indore
      </h2>

      <div className="space-y-8 ">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 text-xl">{item.icon}</span>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
    </section>
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-14">
      {/* HEADING */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Precautions While Travelling in a Tempo Traveller
      </h2>

      {/* INTRO */}
      <p className="text-gray-700 mb-4">
        Travelling in a tempo traveller is comfortable and convenient for group journeys, but taking a
        few basic precautions can make your trip safer, smoother, and more enjoyable. At Yatra
        Travel India, we always recommend the following travel precautions to our customers:
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 ls-3 gap-6">
        
        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Confirm Travel Details in Advance</p>
          <p className="text-gray-700">
            Before starting your journey, reconfirm your pickup location, travel date, route, and number
            of passengers. This helps avoid last-minute confusion and ensures the tempo traveller
            booking matches your travel plan.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Carry Valid ID Proof</p>
          <p className="text-gray-700">
            All passengers should carry valid government ID, especially for outstation trips, temple
            tours, or interstate travel. This may be required at checkpoints or hotels.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Follow Seating Capacity Rules</p>
          <p className="text-gray-700">
            Avoid overcrowding the vehicle. Stick to the approved seating capacity of the tempo
            traveller (12 seater, 16 seater, or 20 seater) to ensure comfort, safety, and compliance with
            traffic regulations.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Secure Luggage Properly</p>
          <p className="text-gray-700">
            Ensure that all luggage is placed securely in the designated luggage area. Loose bags
            inside the vehicle can be uncomfortable and unsafe during sudden braking or sharp turns.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Wear Seat Belts Where Available</p>
          <p className="text-gray-700">
            For your safety, passengers seated in the front rows should wear seat belts wherever
            provided, especially during highway or long-distance travel.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Avoid Distracting the Driver</p>
          <p className="text-gray-700">
            Refrain from unnecessary distractions, loud behavior near the driver, or frequent route
            changes while driving. This helps the driver focus and ensures a safe journey for everyone.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Take Breaks on Long Journeys</p>
          <p className="text-gray-700">
            For outstation tempo traveller trips, plan short breaks every few hours. This keeps
            passengers refreshed and helps the driver stay alert, especially on long routes.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Keep Emergency Contacts Handy</p>
          <p className="text-gray-700">
            Save emergency contact numbers and the driver’s phone number before starting the trip. It’s
            also advisable to inform a family member about your travel route and expected arrival time.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Be Prepared for Weather Conditions</p>
          <p className="text-gray-700">
            Weather can affect travel plans. Carry essentials such as drinking water, light blankets in
            winter, and sun protection during summer travel to stay comfortable throughout the journey.
          </p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="font-semibold mb-2">✔ Follow Local Travel Guidelines</p>
          <p className="text-gray-700">
            Adhere to local traffic rules, safety advisories, and travel regulations during your journey.
            This ensures a hassle-free and legally compliant travel experience.
          </p>
        </div>

      </div>

      {/* CLOSING */}
      <p className="mt-8 text-gray-700">
        By following these simple precautions, you can enjoy a safe, comfortable, and stress-free
        journey with your family, friends, or colleagues.
      </p>

      <p className="mt-3 font-semibold text-gray-900">
        At Yatra Travel India, your safety and comfort are always our top priority.
      </p>
    </section>

<section className="max-w-7xl mx-auto px-4 md:px-12 py-14">
      
      {/* HEADING */}
      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        Frequently Asked Questions – Tempo Traveller Rental in Indore
      </h2>

      <div className="space-y-6">

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            1. How can I book a tempo traveller in Indore with Yatra Travel India?
          </p>
          <p className="text-gray-700">
            Booking a tempo traveller in Indore with Yatra Travel India is simple—just call or WhatsApp
            us with your Indore pickup point, travel date, destination, and group size, and we’ll arrange
            the best tempo traveller in Indore for your trip.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            2. What seating options are available for tempo travellers in Indore?
          </p>
          <p className="text-gray-700">
            In Indore, we offer multiple tempo traveller options including 12 seater tempo traveller in
            Indore, 16 seater, 20 seater, and luxury tempo travellers in Indore suitable for family trips,
            corporate groups, and wedding travel.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            3. Do you provide tempo traveller services from Indore for outstation travel?
          </p>
          <p className="text-gray-700">
            Yes, we provide reliable outstation tempo traveller services from Indore to destinations
            like Ujjain, Omkareshwar, Bhopal, Mandu, Ahmedabad, Jaipur, and other nearby cities with
            experienced Indore-based drivers.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            4. What is included in the tempo traveller rental price in Indore?
          </p>
          <p className="text-gray-700">
            The tempo traveller rental price in Indore includes vehicle charges and driver cost, while
            tolls, parking, and state taxes (if applicable) are clearly explained in advance—ensuring
            transparent tempo traveller fares in Indore.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            5. Is tempo traveller rental in Indore suitable for weddings and corporate events?
          </p>
          <p className="text-gray-700">
            Yes, tempo traveller rental in Indore is widely used for weddings, corporate meetings, factory
            visits, exhibitions, and group events, offering smooth coordination and comfortable travel
            within Indore and nearby locations.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            6. Are drivers for tempo travellers in Indore experienced and verified?
          </p>
          <p className="text-gray-700">
            All tempo traveller drivers in Indore are professionally trained, background-verified, and
            familiar with Indore city routes, highways, temple routes, and nearby tourist circuits for safe
            and punctual travel.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            7. Can I customize routes and stopovers while hiring a tempo traveller in Indore?
          </p>
          <p className="text-gray-700">
            Yes, tempo traveller bookings in Indore are fully flexible—you can customize routes,
            sightseeing stops, and travel schedules based on your Indore travel plan and group
            requirements.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            8. How early should I book a tempo traveller in Indore?
          </p>
          <p className="text-gray-700">
            For weekends, festivals, wedding seasons, or peak travel days in Indore, we recommend
            booking your tempo traveller in Indore at least 3–5 days in advance to ensure availability and
            better pricing.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            9. Do you offer airport pickup and drop by tempo traveller in Indore?
          </p>
          <p className="text-gray-700">
            Yes, we provide tempo traveller airport pickup and drop services in Indore, including
            Devi Ahilya Bai Holkar Airport, ensuring timely arrival, luggage space, and smooth group
            transfers.
          </p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <p className="font-semibold mb-2">
            10. Why choose Yatra Travel India for tempo traveller rental in Indore?
          </p>
          <p className="text-gray-700">
            Yatra Travel India is trusted for tempo traveller rental in Indore due to our clean vehicles, fair
            pricing, reliable drivers, and consistent service for families, corporates, pilgrims, and group
            travelers in Indore.
          </p>
        </div>

      </div>
    </section>

    </section>
  );
}
