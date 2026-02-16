import React from 'react';
import { 
  FaTaxi, 
  FaBusAlt, 
  FaMoneyBillWave, 
  FaCheckCircle, 

  FaSuitcaseRolling, 

  FaGlassCheers, 
  FaBuilding, 
  FaMoneyCheckAlt, 
  FaWhatsapp, 
  FaPhoneAlt, 
 
  FaMapMarkedAlt,
  FaAward, 
  FaUserShield, 
  FaGem, 

  FaHeadset, 
  FaUsers, 
FaLink,
  FaChevronRight,
  FaRoute, 
  FaQuestionCircle, 
  FaGlobeAmericas, 
  FaMapMarkerAlt, 
  FaPlaneDeparture, 
  FaBus, 
  FaChevronDown
} from 'react-icons/fa';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';
import Link from 'next/link';

const KolkataPage = () => {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* SECTION 1: HERO & INTRODUCTION */}
      <header className="py-12 px-6 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Tempo Traveller & Cab Rental Services in Kolkata – Comfortable Travel Made Easy
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Kolkata, the City of Joy, is a vibrant blend of rich heritage, culture, history, and 
              modern lifestyle. From iconic landmarks like Victoria Memorial, Howrah Bridge, 
              Dakshineswar Kali Temple, and Indian Museum to bustling markets and cultural 
              hubs, Kolkata offers countless experiences for travelers. Whether you are visiting for 
              tourism, pilgrimage, corporate travel, weddings, family trips, or group outings, 
              reliable transportation plays a key role in a smooth journey.
            </p>
            <p>
              At Yatra Travel India, we provide trusted cab and <span className="text-blue-600 underline">Tempo Traveller rental services in Kolkata</span> to meet all your travel needs. Choose from a wide range of vehicles 
              including 9-seater, 12-seater, 16-seater, and 20-seater Tempo Travellers, along with 
              comfortable sedans and SUVs. All our vehicles are well-maintained, air-conditioned, 
              and driven by experienced drivers to ensure a safe and comfortable ride.
            </p>
            <p>
              Whether you need a <span className="text-blue-600 underline">Tempo Traveller in Kolkata</span> for local sightseeing, an <span className="text-blue-600 underline">outstation trip from Kolkata</span>, or a corporate or wedding transport solution, we offer affordable 
              pricing, flexible packages, and easy online booking. Our goal is to make group travel 
              in and around Kolkata hassle-free, comfortable, and enjoyable.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 2: AFFORDABLE HIRE & OPTIONS */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
                <FaMoneyBillWave className="mr-3" /> Affordable Tempo Traveller Hire in Kolkata
              </h2>
              <p className="mb-6 font-semibold text-gray-700">
                Yatra Travel India offers budget-friendly <span className="text-blue-600 underline">tempo traveller hire Kolkata</span> packages starting at just ₹22/km. 
                We follow a complete transparent pricing policy — no hidden charges.
              </p>
              
              <h3 className="font-bold text-lg mb-4 text-gray-800 border-b-2 border-blue-100 pb-2">Available Options:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaBusAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="font-bold">9 Seater Tempo Traveller in Kolkata</span>
                    <p className="text-sm text-gray-600">Ideal for small families & airport transfers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBusAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="font-bold">12 Seater Tempo Traveller in Kolkata</span>
                    <p className="text-sm text-gray-600">Best for weddings, corporate trips & outstation tours</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBusAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="font-bold">16 Seater Tempo Traveller (Urbania) in Kolkata</span>
                    <p className="text-sm text-gray-600">Premium comfort for medium-sized groups</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBusAlt className="text-blue-600 mt-1 mr-3" />
                  <div>
                    <span className="font-bold">20 Seater Tempo Traveller in Kolkata</span>
                    <p className="text-sm text-gray-600">Perfect for large groups, tours & events</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg self-start">
              <h3 className="text-xl font-bold mb-6 flex items-center"><FaCheckCircle className="mr-2 text-blue-200" /> Key Features Included</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm"><FaCheckCircle className="mr-3 text-blue-300" /> Pushback reclining seats</li>
                <li className="flex items-center text-sm"><FaCheckCircle className="mr-3 text-blue-300" /> Fully AC interiors</li>
                <li className="flex items-center text-sm"><FaCheckCircle className="mr-3 text-blue-300" /> Music system + LED TV (on request)</li>
                <li className="flex items-center text-sm"><FaCheckCircle className="mr-3 text-blue-300" /> Large luggage compartment</li>
                <li className="flex items-center text-sm"><FaCheckCircle className="mr-3 text-blue-300" /> Clean, hygienic, and spacious interiors</li>
              </ul>
              <p className="text-xs italic opacity-80 border-t border-blue-500 pt-4">
                Ideal for: Local sightseeing Kolkata | Outstation tours | Business travel | Pilgrimage trips | School excursions | Weekend getaways
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PREMIUM & URBANIA MODELS */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaGem className="mr-3" /> Best 12 Seater & 16 Seater Tempo Traveller in Kolkata
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Searching for a premium <span className="text-blue-600 underline">12 seater tempo traveller in Kolkata</span> or a spacious <span className="text-blue-600 underline">16 seater Urbania in Kolkata</span>? 
            We offer luxury Maharaja tempo travellers and premium Urbania models designed for long-distance comfort and superior travel experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
              <h4 className="font-bold text-blue-600 mb-4 flex items-center"><FaUsers className="mr-2" /> Suitable For:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p>• Family tours</p>
                <p>• Corporate meetings</p>
                <p>• Religious trips</p>
                <p>• School/college trips</p>
                <p>• Wedding guest transportation</p>
                <p>• Holiday tours</p>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
              <h4 className="font-bold text-blue-600 mb-4 flex items-center"><FaGem className="mr-2" /> Luxury Features</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <p>• Soft leather reclining seats</p>
                <p>• Ambient interior lighting</p>
                <p>• Mobile charging ports</p>
                <p>• Extra legroom</p>
                <p>• Smooth premium suspension</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <p className="text-gray-700 italic">
              Our chauffeurs are professional, trained, and route-expert, ensuring an on-time, safe, 
              and enjoyable journey every time. For those needing premium comfort, we provide the <span className="text-blue-600 underline">best tempo traveller in Kolkata</span> for all 
              travel needs.
            </p>
          </div>
        </section>

{/* SECTION 1: OUTSTATION ROUTES */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaRoute className="mr-3" /> Tempo Traveller for Outstation Trips from Kolkata
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Yatra Travel India specializes in <span className="text-blue-600 underline">tempo traveller for outstation in Kolkata</span> with round-trip & 
            one-way packages. Our drivers are familiar with all major highways, ensuring smooth, safe, and hassle-free 
            group travel across the eastern region of India.
          </p>

          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
              <FaMapMarkedAlt className="mr-2 text-blue-600" /> Most Popular Tempo Traveller Routes from Kolkata
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Kolkata to Digha", reason: "Beach vacations" },
                { name: "Kolkata to Mandarmani", reason: "Weekend trips" },
                { name: "Kolkata to Puri", reason: "Jagannath Temple & beaches" },
                { name: "Kolkata to Darjeeling", reason: "Hill station & sightseeing" },
                { name: "Kolkata to Gangtok", reason: "Sikkim family tours" },
                { name: "Kolkata to Siliguri", reason: "Major Transit Hub" },
                { name: "Kolkata to Shantiniketan", reason: "Tagore heritage visit" },
                { name: "Kolkata to Mayapur", reason: "ISKCON pilgrimage" },
                { name: "Kolkata to Sunderban", reason: "Wildlife & adventure" }
              ].map((route, i) => (
                <div key={i} className="flex items-center space-x-2 text-sm bg-white p-3 rounded-lg border border-blue-100 shadow-sm">
                  <span className="font-bold text-blue-600">{route.name}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-600">{route.reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: WEDDINGS & CORPORATE */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
              <FaGlassCheers className="mr-3" /> Weddings & Corporate Travel
            </h2>
            <p className="text-gray-700 mb-6">
              Yatra Travel India provides <span className="text-blue-600 underline">luxury tempo traveller hire in Kolkata</span> for diverse group movement needs.
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm font-medium">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Wedding Guests</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Corporate Offsites</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Airport Pickup/Drop</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> School Excursions</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Event Movements</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Business Tours</li>
            </ul>
            <div className="flex gap-4 mt-8">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-green-700 transition-colors">
                <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-blue-700 transition-colors">
                <FaPhoneAlt className="mr-2" /> Call Now
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center"><FaBuilding className="mr-2 text-blue-600" /> Why Customers Prefer Us</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <p>✔ Modern AC tempo travellers with premium pushback seats.</p>
              <p>✔ Experienced verified drivers with excellent route knowledge.</p>
              <p>✔ Punctual service with flexible rental options (hourly/daily).</p>
              <p>✔ Clean, comfortable & well-maintained vehicles for every ride.</p>
              <p className="mt-4 italic font-semibold text-blue-700">Our tempo traveller booking in Kolkata is available 24×7 for your convenience.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PRICING CHART */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Tempo Traveller Rate in Kolkata</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-4 italic">High Transparency | Lowest Rates Guaranteed</p>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider text-sm">Vehicle Seating</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-sm">Base Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  { type: "9 Seater Tempo Traveller Kolkata", price: "₹22/km" },
                  { type: "12 Seater Tempo Traveller Kolkata", price: "₹24–₹26/km" },
                  { type: "16 Seater Urbania Tempo Traveller Kolkata", price: "₹27–₹30/km" },
                  { type: "20 Seater Tempo Traveller Kolkata", price: "₹30–₹32/km" }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-4 text-sm font-semibold text-gray-800">{item.type}</td>
                    <td className="p-4 text-sm text-blue-600 font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-600 space-y-2">
            <p>Tolls, parking, and driver allowance are shared upfront — no extra hidden charges.</p>
            <p>We offer customized <span className="text-blue-600 underline">tempo traveller packages for Kolkata</span> for families, corporates, and travel agents.</p>
            <p className="font-bold text-gray-800">For long trips, avail discounted <span className="text-blue-600 underline">tempo traveller rental Kolkata</span> packages.</p>
          </div>
        </section>

        <TempoImageCards/>
        <TempoSeatConfig city={"kolkata"}/>

{/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Why Choose Yatra Travel India for Your Tempo Traveller in Kolkata?
          </h2>
          <div className="h-1.5 w-32 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Looking for the <span className="text-blue-600 underline">best tempo traveller in Kolkata</span> for group travel, family tours, or outstation trips? 
            Yatra Travel India is trusted by thousands for offering affordable, safe, and <span className="text-blue-600 underline">premium tempo traveller hire in Kolkata</span>.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Wide Range */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaUsers className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">1. Wide Range of Vehicles</h3>
            <p className="text-sm text-gray-600 mb-4">We offer the largest fleet in Kolkata to match any group size:</p>
            <ul className="text-xs space-y-2 text-gray-700 font-medium">
              <li className="flex items-center"><FaChevronRight className="text-blue-600 mr-2" /> 9, 12, 16, 20 Seater Options</li>
              <li className="flex items-center"><FaChevronRight className="text-blue-600 mr-2" /> 16 Seater Urbania Traveller</li>
              <li className="flex items-center"><FaChevronRight className="text-blue-600 mr-2" /> Luxury Maharaja Tempo Traveller</li>
            </ul>
          </div>

          {/* 2. Affordability */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaAward className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">2. Affordable & Transparent</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We offer the most competitive <span className="text-blue-600 underline">tempo traveller price in Kolkata</span>. 
              No hidden charges — you pay only for what you travel. Perfect for short trips and long-distance weekend getaways.
            </p>
          </div>

          {/* 3. Drivers */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaUserShield className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">3. Professional Verified Drivers</h3>
            <p className="text-sm text-gray-600 mb-2">Your safety matters. All our drivers are:</p>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Government verified & polite</li>
              <li>• Experienced in outstation routes</li>
              <li>• Experts for Digha, Puri, Darjeeling & more</li>
            </ul>
          </div>

          {/* 4. Luxury Amenities */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaGem className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">4. Luxury & Fully AC Fleet</h3>
            <p className="text-sm text-gray-600">Premium comfort features included:</p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] uppercase font-bold text-blue-700">
              <span className="bg-blue-50 p-1 rounded">Pushback Seats</span>
              <span className="bg-blue-50 p-1 rounded">LED TV/Music</span>
              <span className="bg-blue-50 p-1 rounded">Charging Points</span>
              <span className="bg-blue-50 p-1 rounded">Ample Luggage</span>
            </div>
          </div>

          {/* 5. Outstation Experts */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaRoute className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">5. Top Choice for Outstation</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Known for the <span className="text-blue-600 underline">best tempo traveller for outstation in Kolkata</span>. 
              We ensure smooth suspension and expert driving for long hill journeys and beach trips.
            </p>
          </div>

          {/* 6. Support */}
          <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <FaHeadset className="text-blue-600 text-3xl mb-4" />
            <h3 className="font-bold text-lg mb-3">6. 24×7 Booking Support</h3>
            <p className="text-sm text-gray-600 mb-4">Book your tempo traveller in Kolkata anytime instantly.</p>
            <div className="text-xs font-bold text-gray-800 space-y-1">
              <p>📞 Call: 9044019511</p>
              <p>💬 WhatsApp Support Available</p>
            </div>
          </div>
        </div>

        {/* POPULAR ROUTES MINI-SECTION */}
        <section className="mb-16 bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <FaRoute className="mr-3 text-blue-200" /> Popular Outstation Destinations
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Kolkata to Digha", "Kolkata to Puri", "Kolkata to Darjeeling", "Kolkata to Gangasagar", "Kolkata to Siliguri", "Kolkata to Sundarbans", "Kolkata to Mandarmani"].map((city, idx) => (
              <span key={idx} className="bg-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-500 hover:bg-white hover:text-blue-600 transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm opacity-90 italic">
            Whether it's a short beach trip or a long hill journey, we ensure a smooth and enjoyable ride.
          </p>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Trusted by Families, Corporates & Tour Operators</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="flex items-center font-bold text-gray-500"><FaCheckCircle className="text-green-500 mr-2" /> Family Vacations</span>
            <span className="flex items-center font-bold text-gray-500"><FaCheckCircle className="text-green-500 mr-2" /> Religious Tours</span>
            <span className="flex items-center font-bold text-gray-500"><FaCheckCircle className="text-green-500 mr-2" /> Corporate Travel</span>
            <span className="flex items-center font-bold text-gray-500"><FaCheckCircle className="text-green-500 mr-2" /> Wedding Logistics</span>
          </div>
          <p className="mt-8 text-blue-600 font-semibold">
            We provide on-time service, clean vehicles, and reliable drivers every time.
          </p>
        </section>

{/* SECTION 1: DETAILED POPULAR ROUTES */}
        <section className="mb-20 pt-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex justify-center items-center">
              <FaRoute className="mr-3" /> Popular Tempo Traveller Routes from Kolkata
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Yatra Travel India offers the <span className="text-blue-600 underline">best tempo traveller hire in Kolkata</span> for local 
              sightseeing and outstation tours across West Bengal, Odisha, Jharkhand, Bihar, and the North-East.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { route: "Kolkata to Delhi", desc: "For family tours, office trips, student groups, and long-distance travel. Urbania & Luxury options available." },
              { route: "Kolkata to Patna", desc: "Ideal for festivals, family visits, corporate travel, and group tours with doorstep pickup." },
              { route: "Kolkata to Ranchi", desc: "Travel comfortably for business trips, pilgrimages, and leisure. Choose from 12-26 seaters." },
              { route: "Kolkata to Dhanbad", desc: "Budget-friendly transport for family functions, mining industry travel, or corporate needs." },
              { route: "Kolkata to Varanasi", desc: "Perfect for Kashi Yatra and pilgrimage tours to India’s spiritual capital." },
              { route: "Kolkata to Digha", desc: "Our most in-demand route for weekend beach groups and family vacations." },
              { route: "Kolkata to Puri", desc: "A very popular temple and beach destination for large groups." },
              { route: "Kolkata to Gangasagar", desc: "Heavy demand during Makar Sankranti and winter pilgrimage seasons." },
              { route: "Kolkata to Darjeeling", desc: "Top route for hill travel with excellent comfort and long-distance safety." },
              { route: "Kolkata to Siliguri", desc: "Great for connecting trips to Sikkim, Bhutan, and North Bengal." },
              { route: "Kolkata to Mayapur", desc: "The most demanded religious route, especially for ISKCON devotees." },
              { route: "Kolkata to Shantiniketan", desc: "Perfect for heritage, cultural, and educational group tours." },
              { route: "Kolkata to Deoghar", desc: "Popular Baidyanath Dham pilgrimage route for families and large groups." }
            ].map((item, idx) => (
              <div key={idx} className="p-5 border border-gray-100 bg-white rounded-xl shadow-sm hover:border-blue-300 transition-all">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-2 text-sm" /> 
                  <span className="text-blue-600 underline cursor-pointer">{item.route} Tempo Traveller</span>
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-blue-600 text-white p-6 rounded-2xl flex items-center shadow-lg">
             <FaPlaneDeparture className="text-3xl mr-6 hidden md:block" />
             <div>
               <h4 className="font-bold text-lg underline">Kolkata Airport Pick & Drop Tempo Traveller</h4>
               <p className="text-sm opacity-90">Reliable <span className="underline">Tempo Traveller from Kolkata Airport (CCU)</span> for group arrivals, business teams, and family transfers.</p>
             </div>
          </div>
        </section>

        {/* SECTION 2: COMPREHENSIVE FAQ (ALL 10 INCLUDED) */}
        <section className="mb-20 bg-gray-50 p-8 rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" /> FAQ – Tempo Traveller in Kolkata
          </h2>
          
          <div className="space-y-8">
            {[
              { q: "What is the cost of hiring a Tempo Traveller in Kolkata?", a: "Rental prices start from ₹18/km to ₹26/km depending on capacity and type (AC, Non-AC, Luxury). Rates vary based on distance and route." },
              { q: "Which seat options are available in Kolkata?", a: "We offer 12, 14, 17, 20, and 26 Seater Tempo Travellers. Luxury models with pushback seats and LED screens are available." },
              { q: "Can I book for outstation trips?", a: "Yes. Outstation booking is available for Delhi, Patna, Ranchi, Dhanbad, Varanasi, Puri, and Darjeeling." },
              { q: "How can I book a Tempo Traveller?", a: "You can book via call, WhatsApp, or our online form. We provide instant confirmation and 24/7 support." },
              { q: "Are they safe for long-distance travel?", a: "Absolutely. All vehicles are regularly serviced, sanitized, and driven by verified, experienced highway experts." },
              { q: "Do you provide vehicles for corporate travel?", a: "Yes, we offer corporate rental for office tours, airport transfers, meetings, and large-scale events." },
              { q: "Can I hire for weddings and family events?", a: "Yes, our wedding event service is ideal for guest logistics, marriage functions, and family group travel." },
              { q: "Do you offer religious trip packages?", a: "We specialize in Puri Darshan, Varanasi Yatra, Ayodhya Yatra, Gangasagar, and Tarapith trips." },
              { q: "What documents are required for booking?", a: "Only basic details like your name, travel date, pickup point, and passenger count. No heavy documentation needed." },
              { q: "Do you provide Airport pickups?", a: "Yes, we provide dedicated pickup from Kolkata Airport (CCU) for business teams and family groups." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-800 text-base mb-2">{idx + 1}. {faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PAN-INDIA STRUCTURED FOOTER LINKS */}
        <footer className="bg-gray-900 text-white p-10 rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold flex justify-center items-center">
                <FaGlobeAmericas className="mr-3 text-blue-400" /> Our Pan-India Tempo Traveller Network
              </h3>
              <p className="text-gray-400 text-sm mt-2">Connecting India’s major cities with premium group travel services.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto">
              <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-new-delhi</p>
                  <p className="text-[10px] text-gray-500 uppercase">Corporate Travel, Weddings & Outstation</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-ranchi" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-ranchi</p>
                  <p className="text-[10px] text-gray-500 uppercase">City Tours, IT Movement & Transfers</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-jaipur" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-jaipur</p>
                  <p className="text-[10px] text-gray-500 uppercase">Weddings, Tourism & Destination Events</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-lucknow" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-lucknow</p>
                  <p className="text-[10px] text-gray-500 uppercase">Family Travel & Religious Tours</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-indore" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-indore</p>
                  <p className="text-[10px] text-gray-500 uppercase">Business Travel & Regional Movement</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-patna" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-patna</p>
                  <p className="text-[10px] text-gray-500 uppercase">School Trips, Weddings & Outstation</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-varanasi" className="flex items-start group">
                <FaLink className="text-blue-500 mt-1 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-varanasi</p>
                  <p className="text-[10px] text-gray-500 uppercase">Pilgrimage Groups & Cultural Tours</p>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center border-t border-gray-800 pt-8">
               <p className="text-xs text-gray-500 flex items-center justify-center">
                 <FaBus className="mr-2" /> © 2026 Yatra Travel India. All rights reserved. Your Safe Travel Partner.
               </p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        </footer>

      </main>
    </div>
  );
};

export default KolkataPage;