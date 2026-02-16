import React from 'react';
import { 
  FaBus, 
  FaCity, 
  FaMountain, 
  FaCheckCircle, 
  FaSuitcaseRolling, 
  FaRoad, 
  FaInfoCircle,

  FaCloudSun, 
  FaPray, 
  FaBuilding, 
  FaMapMarkedAlt, 
  FaMoneyBillWave, 
  FaArrowRight, 
  FaClock, 
    FaTable, 
  FaStar, 
  FaMousePointer, 
  FaQuestionCircle, 
} from 'react-icons/fa';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';
import Link from 'next/link';

const PunePage = () => {

    const rates = [
    { type: "9 Seater Standard", local: "₹7,500 – ₹8,500", out: "₹18 – ₹20 / km" },
    { type: "12 Seater Standard", local: "₹8,500 – ₹9,500", out: "₹19 – ₹21 / km" },
    { type: "14 Seater Standard", local: "₹9,500 – ₹10,500", out: "₹20 – ₹22 / km" },
    { type: "17 Seater Standard", local: "₹10,500 – ₹11,500", out: "₹21 – ₹23 / km" },
    { type: "12 Seater Luxury", local: "₹11,000 – ₹12,500", out: "₹23 – ₹26 / km" },
    { type: "16 Seater Luxury", local: "₹12,500 – ₹14,000", out: "₹24 – ₹28 / km" },
  ];

  const faqs = [
    { q: "What is the process for booking a tempo traveller in Pune?", a: "Booking a tempo traveller in Pune with Yatra Travel India is quick and hassle-free. Choose your vehicle, share your travel dates and group size, get a transparent quote, and confirm your booking." },
    { q: "Is Yatra Travel Reliable and Safe for Group Travel in Pune?", a: "Absolutely! Yatra Travel India has been making group travel in Pune effortless for years. Our tempo traveller rental Pune service is known for on-time pickups and professional drivers." },
    { q: "What types of vehicles are available for tempo traveller rental Pune?", a: "We offer 9, 12, 14, and 17-seater models. For premium travel, you can choose our luxury tempo traveller Pune options for added comfort." },
    { q: "Can I hire a tempo traveller in Pune for a group tour?", a: "Yes! Our group tour vehicle Pune options are perfect for families, friends, corporate trips, school tours, and events." },
    { q: "How do I get a quote for tempo traveller booking Pune?", a: "Simply share your trip details — pickup location, destination, dates, and group size for an instant, transparent quote." },
    { q: "Are the vehicles safe and well-maintained?", a: "Absolutely. All our tempo traveller in Pune vehicles are regularly serviced, cleaned, and sanitized. Safety is our top priority." },
    { q: "Can I hire a tempo traveller for outstation trips?", a: "Yes. Whether it’s Lonavala, Mahabaleshwar, Shirdi, or Goa, our tempo traveller on rent in Pune is perfect for long-distance journeys." },
    { q: "How far in advance should I book a tempo traveller in Pune?", a: "We recommend booking early, especially for weekends or peak travel seasons, to ensure availability." },
    { q: "Is there an option for hourly local trips in Pune?", a: "Yes! Our tempo traveller rental Pune service is flexible for hourly local sightseeing, day trips, or full-day city tours." }
  ];

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* SECTION 1: HERO & INTRODUCTION */}
      <header className="py-12 px-6 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Book Luxury and Budget Tempo Traveller Hire in Pune
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Pune, often called the Oxford of the East, is one of Maharashtra’s most vibrant and culturally rich cities. Known for its 
              blend of historical landmarks, modern IT hubs, educational institutions, and pleasant climate, Pune attracts travelers 
              for leisure, business, and spiritual journeys alike. From heritage sites like Shaniwar Wada and Aga Khan Palace to 
              scenic hill destinations such as Lonavala, Khandala, and Lavasa, Pune serves as a perfect base for short trips and 
              weekend getaways.
            </p>
            <p>
              With growing corporate activity, universities, and tourism, group travel in Pune has increased significantly. That’s why 
              many families, corporate teams, and tourists prefer hiring a Tempo Traveller in Pune for comfortable and convenient 
              transportation. Whether you’re planning local sightseeing, an outstation tour, or corporate movement, Pune offers 
              excellent road connectivity and diverse travel experiences for every kind of traveler.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 2: TEMPO TRAVELLER ON RENT */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaBus className="mr-3" /> Tempo Traveller on Rent in Pune
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Planning a group trip from Pune and need a comfortable vehicle? At Yatra Travel India, we provide dependable 
              <span className="text-blue-600 underline"> tempo traveller on rent in Pune</span> for families, friends, corporate teams, and travelers who want a smooth and stress-free 
              journey. Whether it’s a short city ride or a long outstation tour, our tempo traveller in Pune service is designed to 
              make your travel easy and comfortable.
            </p>
            <p>
              From standard models to <span className="text-blue-600 underline">luxury tempo traveller Pune</span> options, you can choose a vehicle that suits your group size 
              and budget. Booking is quick, support is always available, and our drivers are experienced with Pune routes and 
              nearby destinations. If you’re looking for a spacious and reliable group tour vehicle Pune, you can count on us for 
              quality service at honest prices.
            </p>
            <p className="font-semibold text-blue-600 italic">
              Travel with confidence book your tempo traveller booking Pune with Yatra Travel India and enjoy a pleasant journey 
              from start to finish.
            </p>
          </div>
        </section>

        {/* SECTION 3: OUTSTATION TRIPS */}
        <section className="mb-16 bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaRoad className="mr-3" /> Pune Tempo Traveller for Outstation Trips
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yatra Travel India provides reliable Pune tempo traveller for outstation trips for families, friends, corporate groups, 
              and tour organizers. Our comfortable and well-maintained tempo traveller in Pune is ideal for long-distance journeys 
              where space, safety, and convenience matter the most. With experienced drivers and flexible packages, we make your 
              outstation travel smooth and stress-free.
            </p>
            <p>
              Whether you need a standard or <span className="text-blue-600 underline">luxury tempo traveller Pune</span>, we offer the right vehicle for your group size and travel 
              plan, along with easy <span className="text-blue-600 underline">tempo traveller booking Pune</span> and transparent pricing.
            </p>
          </div>
        </section>
        <TempoImageCards/>
        <TempoSeatConfig city={"pune"}/>

        {/* SECTION 4: PUNE TO LONAVALA SPECIAL */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaMountain className="mr-3" /> Pune to Lonavala Tempo Traveller
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Planning a refreshing getaway from Pune to the beautiful hill station of Lonavala? Yatra Travel India offers comfortable 
                and reliable Pune to Lonavala Tempo Traveller services for families, friends, corporate teams, and group travelers. 
                Our well-maintained tempo traveller in Pune ensures a smooth and relaxed journey through scenic mountain roads.
              </p>
              <p>
                With our <span className="text-blue-600 underline">tempo traveller on rent in Pune</span>, you can enjoy spacious seating, air-conditioned comfort, and experienced 
                drivers who know the Pune–Lonavala route well. Whether it’s a weekend trip, corporate outing, or one-day picnic, we 
                provide flexible packages to suit your travel plan.
              </p>
              <p>
                Choose from standard or <span className="text-blue-600 underline">luxury tempo traveller Pune</span> models and enjoy easy <span className="text-blue-600 underline">tempo traveller booking Pune</span> with 
                transparent pricing. For a safe and enjoyable Pune to Lonavala tempo traveller experience, trust Yatra Travel India 
                for your next trip.
              </p>
            </div>
            
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <h4 className="font-bold text-blue-600 mb-4 flex items-center">
                <FaInfoCircle className="mr-2" /> Why choose us for Pune Trips?
              </h4>
              <ul className="space-y-3">
                {[
                  "Experienced Drivers for Ghat Roads",
                  "Standard & Luxury Fleet Options",
                  "Punctual Pickups from Home/Office",
                  "Transparent & Affordable Pricing",
                  "Well-Maintained AC Vehicles"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

{/* SECTION: LONAVALA DETAILS */}
        <section className="mb-16 border-l-4 border-blue-600 pl-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaRoad className="mr-2 text-blue-600" /> Pune to Lonavala Road Details
          </h3>
          <p className="text-gray-700 mb-4">
            The distance from Pune to Lonavala is approximately 65 km, and the travel time is around 1.5 to 2 hours, depending 
            on traffic. The most commonly used route is:
          </p>
          <div className="bg-gray-50 p-3 rounded font-semibold text-blue-700 mb-6 inline-block">
            Pune → Mumbai–Pune Expressway → Lonavala
          </div>
          <p className="text-gray-700 mb-6">
            This route offers excellent road conditions, beautiful Western Ghats scenery, and smooth highway driving, making it 
            ideal for group travel by <span className="text-blue-600 underline">tempo traveller rental Pune</span>.
          </p>
          
          <h4 className="font-bold mb-3 flex items-center"><FaCloudSun className="mr-2 text-orange-400" /> Best Time to Visit Lonavala</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><span className="font-bold text-gray-800">• October to March:</span> Best season for sightseeing and pleasant weather</li>
            <li><span className="font-bold text-gray-800">• April to June:</span> Good summer escape with moderate temperatures</li>
            <li><span className="font-bold text-gray-800">• July to September:</span> Monsoon season with lush greenery, waterfalls, and misty views</li>
          </ul>
        </section>

        {/* SECTION: MAHABALESHWAR */}
        <section className="mb-16 bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Pune to Mahabaleshwar Tempo Traveller</h2>
          <p className="text-gray-700 mb-6">
            Planning a refreshing hill-station trip from Pune to Mahabaleshwar? Yatra Travel India offers comfortable and 
            dependable Pune to Mahabaleshwar Tempo Traveller services for families, friends, corporate groups, and tour 
            organizers. Our well-maintained tempo traveller in Pune ensures a smooth and relaxed journey through scenic 
            mountain roads and winding ghats.
          </p>
          <p className="text-gray-700 mb-8">
            With our <span className="text-blue-600 underline">tempo traveller on rent in Pune</span>, you get spacious seating, air-conditioned comfort, and experienced drivers 
            who are familiar with the Pune–Mahabaleshwar route. Whether it’s a weekend getaway, family vacation, or group tour, 
            we provide flexible packages to match your travel plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-sm">
            <div>
              <h4 className="font-bold text-blue-600 mb-3 flex items-center"><FaClock className="mr-2" /> Road Details</h4>
              <p className="text-sm text-gray-600 mb-2">Distance: ~120 km | Time: 4 to 5 hours</p>
              <p className="text-sm font-bold text-gray-800 mb-2">Route: Pune → Satara → Wai → Mahabaleshwar</p>
              <p className="text-sm text-gray-600 italic">Traveling by tempo traveller rental Pune on this route is comfortable and safe, especially for groups.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-600 mb-3 flex items-center"><FaCloudSun className="mr-2" /> Best Time to Visit</h4>
              <ul className="text-xs space-y-1 text-gray-600">
                <li><strong>Oct-Mar:</strong> Best for sightseeing & outdoor activities</li>
                <li><strong>Apr-Jun:</strong> Popular summer escape; slightly crowded</li>
                <li><strong>Jul-Sep:</strong> Lush greenery (roads may be slippery)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: SHIRDI */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaPray className="mr-3" /> Pune to Shirdi Tempo Traveller
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
            <p>
              Planning a spiritual journey from Pune to Shirdi with your family or group? Yatra Travel India offers safe and comfortable Pune to 
              Shirdi Tempo Traveller services for pilgrims, families, and tour groups. Our well-maintained tempo traveller in Pune is ideal for 
              long-distance devotional travel, ensuring a peaceful and hassle-free journey.
            </p>
            <p>
              With our <span className="text-blue-600 underline">tempo traveller on rent in Pune</span>, you enjoy spacious seating, air-conditioned comfort, and experienced drivers who are 
              familiar with the Pune–Shirdi route. Whether it’s a one-day darshan trip or an overnight pilgrimage, we provide flexible packages to 
              match your travel needs.
            </p>
          </div>

          <div className="border border-gray-100 p-6 rounded-xl bg-gray-50">
            <h4 className="font-bold text-gray-800 mb-2 underline underline-offset-4">Pune to Shirdi Road Details</h4>
            <p className="text-sm text-gray-600 mb-4">
              Distance: ~185 km | Time: 5 to 6 hours. <br />
              <strong>Route: Pune → Nagar (Ahmednagar) → Shirdi</strong>
            </p>
            <p className="text-sm text-gray-600 mb-4 italic">
              This route has good highway connectivity and multiple food/rest stops, making it comfortable for group travel by tempo traveller 
              rental Pune.
            </p>
            <h4 className="font-bold text-gray-800 mb-2">Best Time to Visit Shirdi</h4>
            <p className="text-sm text-gray-600">October to March is the best season with pleasant weather for temple visits. Shirdi is a year-round destination, but winter months are most comfortable.</p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Corporate */}
          <div className="p-8 border border-gray-200 rounded-2xl hover:border-blue-300 transition-colors">
            <FaBuilding className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Tempo Traveller Hire in Pune for Corporate & Events</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Yatra Travel India offers professional tempo traveller hire in Pune for corporate & events, ensuring smooth and 
              punctual transportation for meetings, conferences, team outings, exhibitions, and company tours. If you’re searching 
              for a reliable tempo traveller in Pune for employee travel or event logistics, we provide well-maintained vehicles. 
              Our <span className="text-blue-600 underline">tempo traveller on rent in Pune</span> is also ideal for weddings and large gatherings.
            </p>
          </div>

          {/* Local Sightseeing */}
          <div className="p-8 border border-gray-200 rounded-2xl hover:border-blue-300 transition-colors">
            <FaMapMarkedAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Pune Local Sightseeing by Tempo Traveller</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, and Dagdusheth Halwai Ganpati 
              Temple with ease. Our <span className="text-blue-600 underline">tempo traveller on rent in Pune</span> is perfect for families and tourists who want to cover 
              multiple places in a single day. With experienced drivers who know city routes well, your sightseeing 
              experience becomes smooth and time-saving.
            </p>
          </div>
        </div>

        {/* PRICING SECTION */}
        <section className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <FaMoneyBillWave className="text-5xl text-blue-200" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Affordable Tempo Traveller Rental Price in Pune</h2>
              <p className="opacity-90 leading-relaxed text-sm">
                At Yatra Travel India, we offer affordable tempo traveller rental price in Pune without compromising on comfort. 
                Whether you need a vehicle for local sightseeing, outstation travel, or corporate tours, we provide the best value 
                <span className="font-bold"> tempo traveller in Pune</span> with transparent pricing and no hidden charges.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="bg-blue-700 px-3 py-1 rounded-full text-xs flex items-center"><FaCheckCircle className="mr-1" /> No Hidden Charges</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-xs flex items-center"><FaCheckCircle className="mr-1" /> Flexible Packages</span>
                <span className="bg-blue-700 px-3 py-1 rounded-full text-xs flex items-center"><FaCheckCircle className="mr-1" /> Quick Booking</span>
              </div>
            </div>
          </div>
        </section>


{/* SECTION 1: RATE CHART */}
        <section className="mb-16 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 flex items-center">
            <FaTable className="mr-3" /> Tempo Traveller Rental Price in Pune (Rate Chart)
          </h2>
          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 font-bold text-sm">Vehicle Type & Seating</th>
                  <th className="p-4 font-bold text-sm">Local Trip (8 Hrs / 80 Km)</th>
                  <th className="p-4 font-bold text-sm">Outstation Price (Per Km)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rates.map((rate, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-sm font-semibold">{rate.type}</td>
                    <td className="p-4 text-sm text-gray-700">{rate.local}</td>
                    <td className="p-4 text-sm text-blue-600 font-bold">{rate.out}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 space-y-1">
            <p>● Prices may vary during peak season, weekends, and holidays.</p>
            <p>● Toll, parking, state tax, and driver allowance are extra (as applicable).</p>
            <p>● Minimum daily running for outstation trips usually applies.</p>
          </div>
        </section>

        {/* SECTION 2: WHY WE STAND OUT */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-blue-50 p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
              <FaStar className="mr-3" /> Why Our Tempo Travellers Stand Out
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Traveling in a group has never been this comfortable! At Yatra Travel India, our tempo traveller in Pune is built to 
              make every trip smooth, safe, and stress-free.
            </p>
            <ul className="grid grid-cols-1 gap-3 text-sm font-medium">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Spotless & Well-Maintained</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Super Comfortable Seats</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Skilled & Route-Savvy Drivers</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Transparent Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-600 italic border-l-4 border-blue-600 pl-4">
              Whether it’s a short city tour, a weekend getaway to Lonavala, or a pilgrimage to Shirdi, our tempo traveller 
              rental Pune ensures a comfortable ride every time.
            </p>
          </div>
        </section>

        {/* SECTION 3: BOOKING STEPS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
            <FaMousePointer className="mr-3" /> How to Book in Pune
          </h2>
          <div className="space-y-4">
            {[
              "Visit www.yatratravelindia.com",
              "Share Your Travel Details (Location, Time, Date, Destination)",
              "Select Available Vehicle as per Requirement and Group Size",
              "Confirm your Booking directly or contact Helpline for assistance",
              "Receive Vehicle details along with Driver Name and Number"
            ].map((step, i) => (
              <div key={i} className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 shrink-0">{i+1}</span>
                <p className="text-sm text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" /> Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="pb-4 border-b border-gray-100">
                <h4 className="font-bold text-gray-800 text-sm mb-2">{i+1}. {faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: PAN-INDIA FOOTER */}
        <section className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaCity className="mr-3 text-blue-200" /> Across Major Indian Cities
          </h2>
          <p className="mb-8 opacity-90 text-sm max-w-3xl leading-relaxed">
            Yatra Travel India is not limited to Pune alone. We provide professionally managed rentals 
            across multiple cities, ensuring the same quality and transparent pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 text-xs">
            {[
              { anchor: "tempo traveller in mumbai", desc: "for corporate travel and weddings", url: "/tempo-traveller/tempo-traveller-in-mumbai" },
              { anchor: "tempo traveller in hyderabad", desc: "for city tours and IT movement", url: "/tempo-traveller/tempo-traveller-in-hyderabad" },
              { anchor: "tempo traveller in jaipur", desc: "for weddings and tourism", url: "/tempo-traveller/tempo-traveller-in-jaipur" },
              { anchor: "tempo traveller in lucknow", desc: "for family and religious tours", url: "/tempo-traveller/tempo-traveller-in-lucknow" },
              { anchor: "tempo traveller in chandigarh", desc: "for corporate and Himachal routes", url: "/tempo-traveller/tempo-traveller-in-chandigarh" }
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <FaArrowRight className="mt-1 mr-2 text-blue-300 flex-shrink-0" />
                <p>
                  <Link href={item.url} className="font-bold hover:underline underline-offset-4 decoration-white">
                    {item.anchor}
                  </Link>
                  <span className="text-blue-100"> {item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default PunePage;