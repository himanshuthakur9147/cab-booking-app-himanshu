import { FaBusAlt, FaMapMarkedAlt, FaUsers, FaCheckCircle,
  FaBus,
  FaRoad, } from "react-icons/fa";
import TempoImageCards from "./TempoImageCards";
import TempoSeatConfig from "./TempoSeatConfig";
import Image from "next/image";
import am1 from "@/imgs/am1.jpg";
import am2 from "@/imgs/am2.jpg";
import am3 from "@/imgs/am3.jpg";
import am4 from "@/imgs/am4.jpg";
import am5 from "@/imgs/am5.jpg";

export default function TempoTravellerAmritsar() {
      const images = [
        { src: am1, alt: "Shimla Hill View" },
        { src: am2, alt: "Snowfall in Shimla" },
        { src: am3, alt: "Mall Road Shimla" },
        { src: am4, alt: "Kufri Near Shimla" },
        { src: am5, alt: "Jakhoo Temple Shimla" },
      ];
    
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-12 space-y-14">

      {/* HERO INTRO */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Tempo Traveller in Amritsar | Yatra Travel India
        </h1>

        <p className="text-lg text-gray-700">
          Travel in Amritsar demands comfort, reliability, and convenience.
          Our tempo travellers are designed to cater to groups ranging from
          small families to large wedding parties. Traveling in a
          well-maintained AC tempo traveller avoids the hassle of multiple cars,
          helps coordinate large groups efficiently, and offers a
          cost-effective solution compared to hiring multiple taxis or private cars.
        </p>

        <p className="text-gray-700">
          Our vehicles are spacious, equipped with reclining seats, overhead
          luggage racks, and professional drivers who know local routes,
          including Amritsar–Chandigarh Highway, Majitha Road, GT Road, and
          routes toward Wagah Border.
        </p>
      </div>
 <section className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-xl"
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
      {/* LUXURY EXPERIENCE */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5">
          <h2 className="text-blue-600 text-3xl font-bold">
            Explore Amritsar Comfortably with Our Luxury Tempo Travellers
          </h2>

          <p className="text-gray-700">
            Amritsar is a city that demands comfortable and reliable group
            travel—whether visiting the Golden Temple, attending weddings, or
            managing corporate events. Busy markets like Hall Bazaar and Katra
            Jaimal Singh, narrow lanes, and heavy traffic make group travel
            challenging without the right vehicle.
          </p>

          <p className="text-gray-700">
            Our 9, 12, 16, and 20-seater AC tempo travellers ensure families,
            tourists, and corporate teams travel together comfortably—from
            airport pickups at Sri Guru Ram Dass Jee International Airport to
            smooth rides across GT Road, Ranjit Avenue, and Wagah Border routes.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 space-y-4 shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaUsers /> Perfect for Every Group
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><FaCheckCircle className="text-green-600" /> Families & tourists</li>
            <li className="flex gap-2"><FaCheckCircle className="text-green-600" /> Wedding guests</li>
            <li className="flex gap-2"><FaCheckCircle className="text-green-600" /> Corporate teams</li>
            <li className="flex gap-2"><FaCheckCircle className="text-green-600" /> Pilgrimage groups</li>
          </ul>
        </div>
      </div>
<TempoImageCards/>
        <TempoSeatConfig city={"amritsar"}/>
      {/* TRUST SECTION */}
      <div className="space-y-6">
        <h2 className="text-blue-600 text-3xl font-bold">
          Why Yatra Travel India is Trusted for Amritsar Group Travel
        </h2>

        <p className="text-gray-700">
          Yatra Travel India understands Amritsar’s real travel challenges—
          congestion near Golden Temple, narrow lanes of Old Amritsar,
          peak-hour traffic on GT Road, and busy Wagah Border routes. Our
          experienced drivers navigate these areas efficiently while keeping
          passengers comfortable and stress-free.
        </p>

        <p className="text-gray-700">
          We offer luxury and standard tempo travellers in Amritsar ranging
          from 12-seaters for families to 20-seaters for corporate and religious
          tours. Every vehicle is fully air-conditioned, well maintained, and
          designed for long journeys to Jalandhar, Ludhiana, and Tarn Taran.
        </p>
      </div>

      {/* SIGHTSEEING */}
      <div className="space-y-8">
        <h2 className="text-blue-600 text-3xl font-bold">
          Amritsar Sightseeing Trips with Spacious AC Tempo Travellers
        </h2>

        <p className="text-gray-700">
          Discover Amritsar comfortably with Yatra Travel India’s AC tempo
          travellers—ideal for family outings, corporate visits, and religious
          tours. Starting at just <strong>₹23/km</strong>, enjoy transparent
          pricing, luxury seating, and hassle-free travel.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Golden Temple (Harmandir Sahib)",
            "Jallianwala Bagh",
            "Wagah Border Ceremony",
            "Partition Museum",
            "Durgiana Temple",
            "Gobindgarh Fort",
            "Maharaja Ranjit Singh Museum",
          ].map((place, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 bg-white shadow-sm flex gap-3"
            >
              <FaMapMarkedAlt className="text-primary text-xl mt-1" />
              <p className="text-gray-700">{place}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-bold">
          Features of Our Amritsar Tempo Travellers
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="space-y-3">
            <li>✔ Fully air-conditioned interiors</li>
            <li>✔ Reclining seats with ample legroom</li>
            <li>✔ Large luggage storage</li>
            <li>✔ Clean, sanitized vehicles</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Verified & professional drivers</li>
            <li>✔ Familiar with Ring Road & shortcuts</li>
            <li>✔ Custom sightseeing itineraries</li>
            <li>✔ On-time pickups & drops</li>
          </ul>
        </div>
      </div>

      {/* CLOSING */}
      <div className="text-center space-y-4">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Booking a tempo traveller in Amritsar with Yatra Travel India
          guarantees safe, comfortable, and seamless group travel—letting you
          explore the city’s culture, heritage, and spirituality without
          worrying about traffic, parking, or coordination.
        </p>
      </div>

<section className="max-w-7xl mx-auto px-4 py-14 space-y-16">

      {/* SECTION 1 */}
      <div className="space-y-6">
        <h2 className="text-blue-600 text-4xl font-bold ">
          Discover the Benefits of Hiring a Tempo Traveller in Amritsar
        </h2>

        <p className="text-gray-700 text-lg">
          Traveling in Amritsar with a large group can be challenging due to
          narrow city lanes, heavy traffic on GT Road, Ranjit Avenue, and
          congestion near Golden Temple and Hall Bazaar. Hiring a tempo traveller
          in Amritsar with Yatra Travel India ensures convenience, safety, and
          comfort for families, corporate teams, wedding guests, and tourist
          groups.
        </p>
      </div>

      {/* BENEFITS GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {[
          {
            title: "Spacious & Comfortable Tempo Travellers in Amritsar",
            content:
              "Our fleet includes 9-seater, 12-seater, 16-seater, and 20-seater tempo travellers in Amritsar, perfect for group travel, sightseeing, and outstation trips. Enjoy reclining seats, wide aisles, and ample luggage space for a relaxed journey.",
          },
          {
            title: "Experienced Drivers for Amritsar City & Outstation Trips",
            content:
              "Our professional drivers are well-versed with city traffic patterns, Wagah Border routes, Lawrence Road, and GT Road shortcuts. Whether it’s local sightseeing or an Amritsar to Dharamshala tempo traveller, your trip is punctual, safe, and smooth.",
          },
          {
            title: "Fully Air-Conditioned Vehicles for All Seasons",
            content:
              "Beat the summer heat and winter fog with our AC tempo travellers in Amritsar, ideal for visiting Golden Temple, Gobindgarh Fort, Partition Museum, and Jallianwala Bagh.",
          },
          {
            title: "Flexible & Customized Booking Options",
            content:
              "Whether it’s a wedding tempo traveller in Amritsar, a corporate outing, a school trip, or religious tours, Yatra Travel India provides customizable tempo traveller hire to fit your itinerary.",
          },
          {
            title: "Affordable & Transparent Pricing for Group Travel",
            content:
              "Our tempo traveller rental in Amritsar offers budget-friendly per km fares with fuel, tolls, and driver allowances included—making it more cost-effective than multiple car rentals.",
          },
          {
            title: "Reliable Airport & Railway Station Transfers",
            content:
              "Reach Sri Guru Ram Dass Jee International Airport or Amritsar Railway Station comfortably with punctual pickups, verified drivers, and spacious seating.",
          },
          {
            title: "Ideal for Religious & Cultural Tours in Amritsar",
            content:
              "Attend Gurpurab celebrations, Wagah Border ceremony, or explore Gobindgarh Fort with organized, stress-free group sightseeing tours.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow-sm space-y-3"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              {item.title}
            </h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      {/* WAGAH BORDER SECTION */}
      <div className="space-y-8">
        <h2 className="text-blue-600 text-3xl font-bold">
          Amritsar to Wagah Border Tempo Traveller – Group Travel Made Easy
        </h2>

        <p className="text-gray-700">
          Experience the iconic Wagah Border ceremony without traffic or parking
          hassles by hiring a tempo traveller in Amritsar from Yatra Travel
          India. Perfect for families, school trips, corporate groups, and
          tourists, our service ensures a comfortable, safe, and punctual
          journey.
        </p>
      </div>

      {/* WAGAH BENEFITS */}
      <div className="grid md:grid-cols-2 gap-8">

        {[
          {
            title: "Spacious & Comfortable Seating",
            content:
              "Our 12-seater, 16-seater, and 20-seater tempo travellers in Amritsar are ideal for group travel to Wagah Border with reclining seats and ample luggage space.",
          },
          {
            title: "Experienced Drivers Familiar with Amritsar Traffic",
            content:
              "Our drivers know GT Road, Ranjit Avenue, and Hall Bazaar traffic patterns, ensuring timely arrival at the border ceremony.",
          },
          {
            title: "Flexible Pickup & Drop Options",
            content:
              "Pickup from Golden Temple, Gobindgarh Fort, or your hotel in Ranjit Avenue, with direct drop at Wagah Border parking and smooth return.",
          },
          {
            title: "Fully AC Vehicles for Comfort in All Seasons",
            content:
              "Air-conditioned tempo travellers ensure comfort during summer heat and winter fog.",
          },
          {
            title: "Affordable & Transparent Pricing",
            content:
              "Cost-effective Wagah Border tempo traveller fares with fuel, tolls, and driver allowances included.",
          },
          {
            title: "Ideal for Group Tours & Photography",
            content:
              "Plenty of space for bags, refreshments, and photography gear—perfect for families and friends.",
          },
          {
            title: "Perfect for Cultural & Educational Trips",
            content:
              "Frequently booked by schools, colleges, and corporate groups for educational and heritage tours.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-xl p-6 space-y-3"
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaBus className="text-primary" />
              {item.title}
            </h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      {/* HIGHLIGHTS */}
      <div className="bg-primary/5 rounded-2xl p-8 space-y-4">
        <h3 className="text-2xl font-bold">
          Top Highlights of Traveling to Wagah Border with Yatra Travel India
        </h3>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex gap-2"><FaRoad /> On-time pickups anywhere in Amritsar</li>
          <li className="flex gap-2"><FaUsers /> Professional Wagah Border drivers</li>
          <li className="flex gap-2"><FaBus /> 12, 16 & 20-seater tempo travellers</li>
          <li className="flex gap-2"><FaCheckCircle /> Fully AC vehicles</li>
          <li className="flex gap-2"><FaMapMarkedAlt /> Transparent pricing</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Book your <strong>Amritsar Wagah Border tempo traveller</strong> with
          Yatra Travel India and enjoy a stress-free, group-friendly, and
          comfortable ride to witness one of India’s most patriotic and visually
          stunning ceremonies.
        </p>
      </div>

    </section>
<section className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* INTRO */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Amritsar to Wagah Border Route – Comfortable Tempo Traveller Travel
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Traveling from Amritsar to Wagah Border is easier and more comfortable
          with Yatra Travel India’s tempo traveller service. Covering a distance
          of approximately 28 km, this route takes around 45–60 minutes depending
          on traffic. Our experienced drivers know the best paths through GT Road,
          Attari Road, and Hall Bazaar areas, avoiding peak-hour congestion
          whenever possible.
        </p>
      </div>

      {/* ROUTE HIGHLIGHTS */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h3 className="text-blue-600 text-2xl font-semibold">Route Highlights</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Start from Golden Temple, Ranjit Avenue, and Gobindgarh Fort</li>
            <li>Pass through Amritsar city bypasses</li>
            <li>Cross Attari Road towards Wagah Border</li>
            <li>Reach Wagah Border parking zone on time</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-blue-600 text-2xl font-semibold">Why Choose a Tempo Traveller</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Group-friendly travel for families, schools, and corporates</li>
            <li>12, 16, and 20 seater AC tempo travellers</li>
            <li>Experienced local drivers</li>
            <li>Flexible pickup & drop locations</li>
            <li>Transparent & affordable pricing</li>
          </ul>
        </div>
      </div>

      {/* TRAVEL TIPS */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        <h2 className="text-blue-600 text-2xl font-semibold">Travel Tips</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Leave early to avoid city traffic</li>
          <li>Carry light refreshments</li>
          <li>Reach Wagah Border before ceremony time</li>
          <li>Storage available for bags and camera equipment</li>
        </ul>
      </div>

      {/* FAQ GRID */}
      <div className="space-y-8">
        <h2 className="text-blue-600 text-3xl font-bold">
          FAQs for Amritsar Tempo Traveller Hire
        </h2>

        <div className="space-y-4 md:space-y-6">

          {[
            {
              q: "Can I hire a tempo traveller in Amritsar for a wedding or family event?",
              a: "Yes! We provide 12, 16, and 20 seater tempo travellers in Amritsar for weddings and family events with AC comfort and ample luggage space."
            },
            {
              q: "Are hourly rental options available for sightseeing?",
              a: "Yes, we offer flexible hourly packages for Amritsar sightseeing including Golden Temple, Jallianwala Bagh, and local markets."
            },
            {
              q: "Do you provide tempo travellers for corporate outings?",
              a: "Absolutely. Our tempo travellers are ideal for corporate outings, conferences, and team events across Amritsar."
            },
            {
              q: "Is tempo traveller suitable for religious tours?",
              a: "Yes. Our tempo travellers are perfect for Golden Temple, Durgiana Temple, and pilgrimage tours."
            },
            {
              q: "Are outstation trips available from Amritsar?",
              a: "Yes, we cover Wagah Border, Pathankot, Dharamshala, Dalhousie, and nearby cities."
            },
            {
              q: "Can I book multiple tempo travellers?",
              a: "Yes, we provide fleet coordination for large groups including schools, weddings, and corporate travel."
            },
            {
              q: "Are vehicles suitable for winter fog and summer heat?",
              a: "Yes. All tempo travellers are fully AC and maintained for year-round Amritsar weather."
            },
            {
              q: "Is one-way tempo traveller booking available?",
              a: "Yes, we offer one-way bookings for airport transfers and Wagah Border trips."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 bg-white shadow-sm space-y-2"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                Q{index + 1}. {item.q}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
    </section>
  );
}
