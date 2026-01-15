"use client";

import {
  FaSnowflake,
  FaQuestionCircle ,
  FaRoad,

  FaCheckCircle, FaMoneyBillWave, FaBinoculars, FaUserTie, FaRoute, FaCalendarCheck, FaShieldAlt, FaClock,FaBus, FaChair, FaMountain,   FaPlane, FaTrain
} from "react-icons/fa";
import TempoImageCards from "./TempoImageCards";
import TempoSeatConfig from "./TempoSeatConfig";
import sh1 from "@/imgs/sh1.jpg";
import sh2 from "@/imgs/sh2.jpg";
import sh3 from "@/imgs/sh3.jpg";
import sh4 from "@/imgs/sh4.jpg";
import sh5 from "@/imgs/sh5.jpg";
import Image from "next/image";

export default function ShimlaFullContent() {
     const advantages = [
    {
      icon: <FaChair className="text-white text-2xl" />,
      title: "Spacious and Comfortable Seating",
      desc: `Our tempo traveller hire in Shimla offers ample seating space for 9, 12, 16, or 20 passengers, making it perfect for family trips, school excursions, or corporate tours. Wide, reclining seats ensure comfort even on hilly routes and narrow Shimla roads.`,
      color: "bg-blue-600",
    },
    {
      icon: <FaMountain className="text-white text-2xl" />,
      title: "Perfect for Hill Travel",
      desc: `Traveling in Shimla requires vehicles that can handle steep slopes and curvy roads. Our Shimla tempo traveller rental service provides well-maintained, reliable vehicles suitable for navigating Mall Road, The Ridge, and the hilly outskirts safely.`,
      color: "bg-green-600",
    },
    {
      icon: <FaMoneyBillWave className="text-white text-2xl" />,
      title: "Cost-Effective Group Travel",
      desc: `Booking a tempo traveller on rent in Shimla is far more economical than hiring multiple cars or taxis for a large group. The per-km fare is transparent, making tempo traveller hire in Shimla an affordable option for weddings, local sightseeing, and outstation trips.`,
      color: "bg-yellow-600",
    },
    {
      icon: <FaBinoculars className="text-white text-2xl" />,
      title: "Ideal for Sightseeing and Weekend Trips",
      desc: `Whether you plan to visit Jakhoo Temple, Kufri, Naldehra, or Chail, our tempo traveller in Shimla is ideal for weekend getaways. Group travel becomes easier and more coordinated, reducing travel stress and maximizing sightseeing time.`,
      color: "bg-purple-600",
    },
    {
      icon: <FaUserTie className="text-white text-2xl" />,
      title: "Experienced Local Drivers",
      desc: `All our tempo travellers in Shimla come with professional drivers who know the city, local traffic patterns, and scenic hill routes. This ensures a safe journey and on-time arrivals at popular destinations like Mall Road, Summer Hill, and Christ Church.`,
      color: "bg-red-600",
    },
    {
      icon: <FaRoute className="text-white text-2xl" />,
      title: "Flexible and Customized Itineraries",
      desc: `With Yatra Travel India’s tempo traveller hire in Shimla, you can plan a fully customizable trip. From short local sightseeing trips to long outstation excursions to Manali, Dharamshala, or Kufri, our service adapts to your schedule.`,
      color: "bg-indigo-600",
    },
    {
      icon: <FaCalendarCheck className="text-white text-2xl" />,
      title: "Suitable for All Occasions",
      desc: `Whether it’s a wedding, corporate offsite, pilgrimage, or family vacation, renting a tempo traveller in Shimla ensures that all passengers travel together, making coordination easier and travel more enjoyable.`,
      color: "bg-pink-600",
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "Safety and Hygiene Guaranteed",
      desc: `Every tempo traveller in Shimla is regularly serviced, sanitized, and maintained to the highest standards. Passengers can enjoy a clean and safe ride with functioning AC, ample luggage space, and modern amenities.`,
      color: "bg-teal-600",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "Reliable and Punctual Service",
      desc: `Yatra Travel India guarantees timely pick-ups and drop-offs for tempo traveller rental in Shimla, whether it’s an early morning airport transfer at Shimla Airport (Jubbarhatti) or a late evening return from Kufri.`,
      color: "bg-orange-600",
    },
    {
      icon: <FaBus className="text-white text-2xl" />,
      title: "Convenient for Outstation Travel",
      desc: `For journeys beyond Shimla, including Manali, Dharamshala, Kullu, or Chandigarh, our Shimla tempo traveller service provides a reliable and comfortable travel solution, eliminating the need to switch vehicles or split groups.`,
      color: "bg-gray-700",
    },
  ];
   const features = [
    {
      icon: <FaChair className="text-white text-2xl" />,
      title: "Spacious and Comfortable Buses",
      desc: `Our Shimla bus rental service offers a variety of seating options: 20-seater, 35-seater, 45-seater, and even 50+ seater buses. Each bus is designed for comfortable hill travel, with wide seats, ample legroom, and luggage storage, ensuring your group travels together safely.`,
      color: "bg-blue-600",
    },
    {
      icon: <FaMountain className="text-white text-2xl" />,
      title: "Ideal for Hill Routes and Local Traffic",
      desc: `Driving in Shimla requires skill and a reliable vehicle. Our Shimla bus hire service is perfect for navigating hilly roads, sharp turns, and steep slopes while visiting Kufri, Naldehra, Jakhoo Temple, and surrounding attractions.`,
      color: "bg-green-600",
    },
    {
      icon: <FaMoneyBillWave className="text-white text-2xl" />,
      title: "Cost-Effective Group Travel",
      desc: `Hiring a bus in Shimla is more economical than renting multiple cabs or tempo travellers. Yatra Travel India offers transparent bus rental fares in Shimla, so you know exactly what you pay per km or per day with no hidden charges.`,
      color: "bg-yellow-600",
    },
    {
      icon: <FaUserTie className="text-white text-2xl" />,
      title: "Experienced Local Drivers",
      desc: `Every bus in our Shimla bus rental fleet comes with a trained, verified driver who understands local traffic patterns, peak-hour congestion on the NH5 route, and seasonal challenges like winter fog or monsoon rain.`,
      color: "bg-red-600",
    },
    {
      icon: <FaRoute className="text-white text-2xl" />,
      title: "Customizable Itineraries",
      desc: `Our bus hire in Shimla allows flexible scheduling. Whether you plan a short city tour, a full-day sightseeing trip, or an outstation journey to Manali, Kullu, or Dharamshala, we can tailor the itinerary to match your needs.`,
      color: "bg-indigo-600",
    },
    {
      icon: <FaCalendarCheck className="text-white text-2xl" />,
      title: "Perfect for All Occasions",
      desc: `Yatra Travel India’s Shimla bus rental caters to weddings, school excursions, college trips, corporate events, and religious tours. Large groups can travel together, ensuring convenience, safety, and punctuality.`,
      color: "bg-pink-600",
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: "Safety and Hygiene First",
      desc: `Every bus in Shimla is fully sanitized, regularly maintained, and equipped with functional AC or heater depending on season. This ensures a safe, clean, and comfortable environment for all passengers.`,
      color: "bg-teal-600",
    },
    {
      icon: <FaPlane className="text-white text-2xl" />,
      title: "Airport & Railway Connectivity",
      desc: `Our bus hire in Shimla is ideal for airport transfers from Shimla Airport (Jubbarhatti) or railway station pickups. Large groups can reach their destinations without splitting up, saving time and hassle.`,
      color: "bg-orange-600",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "Reliable and On-Time Service",
      desc: `Yatra Travel India guarantees punctual service for all Shimla bus rentals, whether it’s early morning sightseeing or evening returns from Kufri, Chail, or Naldehra.`,
      color: "bg-gray-700",
    },
    {
      icon: <FaBus className="text-white text-2xl" />,
      title: "Perfect for Outstation Journeys",
      desc: `Planning an outstation trip from Shimla? Our bus hire in Shimla services extend to Manali, Dharamshala, Kullu, and Chandigarh. Travel comfortably without worrying about vehicle capacity or road safety.`,
      color: "bg-blue-800",
    },
  ];
   const faqs = [
    {
      q: "How can I book a bus or tempo traveller in Shimla with Yatra Travel India?",
      a: `Booking a bus hire in Shimla or tempo traveller rental in Shimla is quick and easy with Yatra Travel India. You can book online, call, or WhatsApp us. Provide your pickup location, number of passengers, travel dates, and destinations. Our team will provide instant quotes for your Shimla group travel.`,
    },
    {
      q: "What types of vehicles are available for group travel in Shimla?",
      a: `Yatra Travel India offers a wide range of group travel vehicles in Shimla, including:
• 12-seater tempo travellers for small groups
• 20, 35, and 45+ seater buses for large groups
• Luxury AC buses for weddings, corporate events, and hill tours
All vehicles are well-maintained and equipped for Shimla hill roads and local sightseeing.`,
    },
    {
      q: "Can I hire a bus for outstation trips from Shimla?",
      a: `Absolutely! Our outstation bus rental in Shimla covers destinations like Manali, Dharamshala, Kullu, Chail, and Naldehra. Yatra Travel India ensures a safe and comfortable journey on hilly roads and highways around Shimla.`,
    },
    {
      q: "Are Shimla bus rentals available for airport and railway station transfers?",
      a: `Yes. Our Shimla airport bus service is available for pickups and drops at Shimla Airport (Jubbarhatti) and major railway stations. Large groups can travel together without splitting vehicles, ensuring convenience and cost savings.`,
    },
    {
      q: "How much does a bus hire in Shimla cost per km or per day?",
      a: `The Shimla bus rental price depends on vehicle size, travel distance, and duration. Typical fares start from ₹25–₹30/km for 12-seater tempo travellers and ₹40–₹50/km for luxury buses. All costs are transparent, with no hidden charges for tolls, driver allowance, or fuel.`,
    },
    {
      q: "Are the drivers experienced for Shimla hill travel?",
      a: `Yes. All our drivers are trained and verified for Shimla hill roads, steep turns, and traffic zones. They know the best routes to Mall Road, The Ridge, Summer Hill, and Kufri, ensuring safe, punctual, and smooth travel.`,
    },
    {
      q: "Can I customize my Shimla group travel itinerary?",
      a: `Absolutely! Yatra Travel India allows flexible Shimla bus and tempo traveller bookings. You can include multiple stops, sightseeing spots like Jakhoo Temple or Naldehra Golf Course, and weekend hill destinations.`,
    },
    {
      q: "Is bus and tempo traveller rental in Shimla safe during winter and monsoon?",
      a: `Yes. Our vehicles are equipped for Shimla’s seasonal challenges. During winter fog or monsoon rains, Yatra Travel India ensures safe, well-maintained buses with professional drivers who are familiar with local conditions.`,
    },
    {
      q: "Can I hire a bus in Shimla for weddings, corporate events, or school trips?",
      a: `Yes. Our Shimla bus rental service caters to weddings, corporate outings, school and college excursions, and religious tours. Large groups travel together comfortably in AC or non-AC buses with enough space for luggage and equipment.`,
    },
  ];
  const images = [
    { src: sh1, alt: "Shimla Hill View" },
    { src: sh2, alt: "Snowfall in Shimla" },
    { src: sh3, alt: "Mall Road Shimla" },
    { src: sh4, alt: "Kufri Near Shimla" },
    { src: sh5, alt: "Jakhoo Temple Shimla" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 space-y-12 text-gray-800">

      {/* WHY SHIMLA */}
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">
          Why Shimla Attract Tourists
        </h2>

        <p>
          Shimla attracts tourists because of its pleasant climate, snowfall in
          winter, scenic mountain views, colonial heritage, and easy road
          connectivity from Delhi and Chandigarh. Popular spots like Mall Road,
          Kufri, Jakhoo Temple, and The Ridge make sightseeing easy. Shimla is
          ideal for family holidays, honeymoon trips, weekend getaways, and
          group tours, offering safety, good hotels, local shopping, and
          year-round tourism appeal.
        </p>

        <p>
          Many tourists visit Shimla specifically to see and enjoy snowfall,
          especially between December and February. Snow activities, winter
          photography, and a white landscape attract families, honeymooners,
          and first-time hill travellers.
        </p>

        <p>
          Nearby areas like Kufri and Narkanda offer activities such as horse
          riding, trekking, skiing (seasonal), and nature walks, adding
          adventure to leisure trips.
        </p>

        <p>
          Shimla is well-connected by road from Delhi, Chandigarh, and Punjab,
          making it ideal for weekend trips, group tours, and family holidays.
          Many tourists prefer road journeys for scenic views.
        </p>
      </div>
  <section className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
      {/* VEHICLE OPTIONS */}
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">
          Vehicle Options Available – Tempo Traveller Rental Service
        </h2>

        <p>
          Yatra Travel India offers a wide range of tempo traveller and group
          travel vehicles to match different travel needs, budgets, and group
          sizes. Whether you need a tempo traveller for local travel,
          outstation trips, weddings, or corporate group movement, we have the
          right vehicle option available.
        </p>
      </div>

      {/* PRICING */}
      <div className="bg-gray-50 border rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold">
          Pricing Logic for Shimla Tempo Travellers
        </h2>

        <ul className="list-disc list-inside space-y-1">
          <li>9-Seater – Starting at ₹25/km</li>
          <li>12-Seater – Starting at ₹27–₹30/km</li>
          <li>16-Seater & 20-Seater – Starting at ₹32–₹35/km</li>
        </ul>

        <p>
          Charges include fuel, tolls, and driver allowance, ensuring no hidden
          costs. Pricing varies based on season, peak tourist traffic, and
          hilly terrain.
        </p>
      </div>

      {/* MOST BOOKED */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          Tempo Traveller on Rent (Most Booked Options)
        </h2>

        <div className="space-y-4">
          <Card title="9 Seater Tempo Traveller on Rent">
            Ideal for small family trips, airport transfers, and short
            outstation journeys. This option is best for customers searching
            for a budget tempo traveller rental.
          </Card>

          <Card title="12 Seater Tempo Traveller on Rent">
            One of the most popular choices for tempo traveller booking,
            suitable for weddings, corporate outings, religious tours, and
            weekend trips. Offers a perfect balance of comfort and cost.
          </Card>

          <Card title="16 Seater Tempo Traveller on Rent">
            Designed for group travel, school tours, pilgrimage trips, and
            long-distance routes. Extra legroom and luggage space make it ideal
            for extended journeys.
          </Card>

          <Card title="20 Seater Tempo Traveller on Rent">
            Best for large groups, destination weddings, political events, and
            corporate transport. Frequently booked for outstation tempo
            traveller service.
          </Card>
        </div>
      </div>

      {/* LUXURY */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">
          Luxury Tempo Traveller Options
        </h2>

        <ul className="list-disc list-inside space-y-1">
          <li>
            Luxury 12 Seater Tempo Traveller – Pushback seats, premium interiors,
            and enhanced comfort
          </li>
          <li>
            Luxury 16 Seater Tempo Traveller – Ideal for VIP travel, executive
            teams, and long highway routes
          </li>
        </ul>

        <p>
          These are highly searched under luxury tempo traveller rental near me
          and premium tempo traveller service.
        </p>
      </div>
    <TempoImageCards/>
    <TempoSeatConfig  city={"shimla"}/>
      {/* OTHER VEHICLES */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">
          Other Group Travel Vehicles Available for Hire
        </h2>

        <p>
          Along with tempo traveller rental services, Yatra Travel India
          provides a complete range of group travel vehicle options for
          customers looking for comfortable, reliable, and affordable
          transport for local, outstation, and long-distance journeys.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            SUV & Premium Car Rental for Small Groups
          </h3>

          <p>
            For customers searching for car rental for group travel, we offer
            well-maintained SUVs and sedans ideal for city travel, airport
            transfers, and short outstation trips.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Innova Crysta Car Rental – Best for corporate travel, VIP movement, and family tours</li>
            <li>Innova & Ertiga Rental – Popular for wedding guests and intercity trips</li>
            <li>Swift Dzire & Sedan Taxi – Suitable for airport pickup, local meetings, and business travel</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            Mini Bus Rental Service for Medium Groups
          </h3>

          <ul className="list-disc list-inside space-y-1">
            <li>25 Seater Mini Bus on Rent – School tours, factory visits, office transport</li>
            <li>30 Seater Mini Bus Rental – Corporate events, religious trips, exhibitions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            Bus Rental Service for Large Group Travel
          </h3>

          <ul className="list-disc list-inside space-y-1">
            <li>40 Seater Bus on Rent – Pilgrimage tours, political events, large weddings</li>
            <li>45+ Seater Bus Rental – Conferences, school and college trips, mass transport</li>
          </ul>
        </div>
      </div>

      {/* ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h2 className="text-4xl font-bold text-center mb-10">
        Advantages of Hiring a Tempo Traveller on Rent in Shimla
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
        Hiring a tempo traveller in Shimla comes with multiple advantages for families, corporate groups, and tourists seeking comfort and convenience during hill trips. Yatra Travel India ensures a smooth journey with our luxury tempo traveller rental in Shimla, tailored for both local sightseeing and outstation travel.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {advantages.map((adv, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className={`flex-shrink-0 p-4 rounded-full ${adv.color}`}>
              {adv.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
              <p className="text-gray-700">{adv.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg font-medium text-center mt-8">
        In short, hiring a tempo traveller in Shimla with Yatra Travel India is the perfect combination of comfort, safety, convenience, and affordability for hill travel, sightseeing, weddings, and corporate trips.
      </p>
    </section>

 <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
      <h2 className="text-4xl font-bold text-center mb-6">
        Bus Hire in Shimla – Travel Comfortably with Yatra Travel India
      </h2>

      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
        Planning group travel in Shimla? Whether it’s a corporate outing, school trip, wedding group, or pilgrimage, Yatra Travel India provides reliable and affordable bus hire in Shimla to make your journey seamless. Our fleet of luxury and standard buses in Shimla is designed to handle hilly roads, busy traffic zones, and narrow lanes around Mall Road, The Ridge, and Summer Hill.
      </p>

      <h3 className="text-2xl font-semibold text-center mt-6 mb-6">Why Choose Bus Hire in Shimla with Yatra Travel India</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className={`flex-shrink-0 p-4 rounded-full ${item.color}`}>
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg font-medium text-center mt-8">
        In short, choosing bus hire in Shimla with Yatra Travel India ensures large groups travel together safely, comfortably, and cost-effectively. Our luxury buses in Shimla are perfect for hill travel, local sightseeing, weddings, school trips, and corporate tours.
      </p>
    </section>
    {/* {FAQs} */}
 <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <h2 className="text-4xl font-bold text-center">
        FAQ – Bus & Tempo Traveller Hire in Shimla
      </h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-3 mb-3">
              <FaQuestionCircle className="text-blue-600 text-xl mt-1" />
              <h3 className="text-xl font-semibold">
                Q{index + 1}: {faq.q}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              <strong>A:</strong> {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

/* Card Component */
const Card = ({ title, children }) => (
  <div className="border rounded-xl p-5 bg-white shadow-sm">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p>{children}</p>
  </div>
);
