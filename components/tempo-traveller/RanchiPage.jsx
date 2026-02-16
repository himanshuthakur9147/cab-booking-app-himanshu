import Link from 'next/link';
import React from 'react';
import { 
  FaWater, 
  FaBus, 
  FaGem, 
  FaMapMarkedAlt, 
  FaBuilding, 
  FaGraduationCap, 
  FaCheckCircle, 
  FaChevronRight,
  FaLightbulb, 
  FaSuitcase, 
  FaUsers, 
  FaWallet, 
  FaTable, 
  FaInfoCircle,
  FaAward, 
  FaShieldAlt, 
  FaCouch, 
  FaTasks, 
  FaClock, 
  FaQuestionCircle, 
  FaChevronDown, 
  FaGlobe, 
  FaLink 
  
} from 'react-icons/fa';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';

const RanchiPage = () => {

    const pricingData = [
    { type: "Standard TT", seats: "12 Seater", hourly: "1,200", day: "4,500", km: "19", features: "AC, Comfortable Seats, Experienced Driver" },
    { type: "Standard TT", seats: "16 Seater", hourly: "1,400", day: "5,500", km: "20", features: "AC, Spacious, Clean Interiors" },
    { type: "Standard TT", seats: "20 Seater", hourly: "1,600", day: "6,500", km: "22", features: "AC, Ample Luggage Space" },
    { type: "Standard TT", seats: "24 Seater", hourly: "1,800", day: "7,500", km: "24", features: "AC, Comfortable for Large Groups" },
    { type: "Standard Bus", seats: "33 Seater", hourly: "2,200", day: "9,500", km: "28", features: "AC, Large Groups, Extended Travel" },
    { type: "Luxury TT", seats: "12–20 Seater", hourly: "2,500", day: "10,000", km: "35", features: "Reclining Seats, Premium Interiors, Entertainment" },
    { type: "Maharaja TT", seats: "16–24 Seater", hourly: "3,000", day: "12,000", km: "40", features: "Plush Interiors, VIP Comfort, Privacy Partitions" }
  ];


  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* SECTION 1: HERO & INTRODUCTION */}
      <header className="py-12 px-6 border-b border-gray-100 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Book Luxury Tempo Traveller in Ranchi
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Ranchi, the capital of Jharkhand, is a vibrant city known for its scenic beauty, waterfalls, and lush green 
              landscapes. Often called the <span className="font-bold text-green-700">“City of Waterfalls”</span>, Ranchi is surrounded by natural attractions like Hundru 
              Falls, Jonha Falls, Dassam Falls, and Patratu Valley, making it a popular destination for weekend 
              getaways and group trips.
            </p>
            <p>
              Besides its natural charm, Ranchi is also a hub for education, corporate offices, and cultural experiences, 
              attracting families, tourists, and business travelers alike. With growing road connectivity and proximity to hill 
              stations, Ranchi is perfect for exploring both city sights and nearby destinations.
            </p>
            <p>
              Hiring a <span className="text-blue-600 underline">tempo traveller in Ranchi</span> makes group travel simple, comfortable, and stress-free. Whether it’s a 
              family outing, corporate trip, school excursion, or weekend adventure, Yatra Travel India ensures a smooth 
              and safe journey for every passenger.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 2: CHOOSE THE BEST TT */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaBus className="mr-3" /> Choose the Best Tempo Traveller in Ranchi for Your Trip
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Planning a group trip from Ranchi? Whether it’s a family outing, friends’ weekend getaway, corporate travel, 
            or a school excursion, choosing the right <span className="text-blue-600 underline">tempo traveller in Ranchi</span> can make all the difference between a 
            comfortable, stress-free journey and a cramped, tiring ride. At Yatra Travel India, we provide a wide range of 
            <span className="text-blue-600 underline">tempo traveller on rent in Ranchi</span> to suit every group size, travel plan, and budget, ensuring your journey 
            is smooth, safe, and enjoyable.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-blue-600 pl-4">Vehicles for Every Group Size</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "12-Seater Tempo Traveller", desc: "Ideal for small families or groups of friends traveling locally or on short trips." },
              { title: "16-Seater Tempo Traveller", desc: "Perfect for slightly larger groups or corporate day outings." },
              { title: "20-Seater Tempo Traveller", desc: "Great for medium-sized school or college trips and team outings." },
              { title: "24-Seater Tempo Traveller", desc: "Comfortable option for large families, extended friend groups, or corporate events." },
              { title: "33-Seater Bus", desc: "Best for very large groups, weddings, or long outstation tours requiring maximum comfort and space." }
            ].map((v, i) => (
              <div key={i} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-600 mb-2 flex items-center"><FaChevronRight className="mr-2 text-sm" /> {v.title}</h4>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
            <div className="p-5 bg-blue-600 text-white rounded-xl shadow-lg md:col-span-2 lg:col-span-1">
              <h4 className="font-bold mb-2 flex items-center"><FaGem className="mr-2" /> Luxury & Maharaja TT</h4>
              <p className="text-sm opacity-90 mb-2"><strong>Luxury:</strong> Reclining seats, AC, entertainment, and extra legroom.</p>
              <p className="text-sm opacity-90"><strong>Maharaja:</strong> Premium interiors, plush seating, and privacy partitions for a truly royal journey.</p>
            </div>
          </div>
        </section>
<TempoImageCards/>
<TempoSeatConfig city={"ranchi"}/>

        {/* SECTION 3: SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Local Sightseeing */}
          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
            <FaWater className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Local Sightseeing in Ranchi</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Explore Rock Garden, Tagore Hill, Pahari Mandir, Dassam Falls, and Hundru Falls without worrying about 
              parking. Our well-maintained <span className="text-blue-600 underline">tempo traveller rental Ranchi</span> ensures your group travels 
              comfortably with air-conditioning and professional drivers.
            </p>
          </div>

          {/* Outstation */}
          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
            <FaMapMarkedAlt className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Outstation Trips from Ranchi</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Our <span className="text-blue-600 underline">tempo traveller booking Ranchi</span> service is 
              perfect for journeys to Netarhat, Jamshedpur, or Patratu Valley. From 12-seaters to <span className="text-blue-600 underline">Maharaja tempo traveller Ranchi</span> models, enjoy a smooth ride.
            </p>
          </div>

          {/* Corporate */}
          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
            <FaBuilding className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">Corporate & Event Travel</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Choose our <span className="text-blue-600 underline">group tour vehicle Ranchi</span> options for team-building trips, seminars, or 
              wedding guest transport. We provide reliable service and well-maintained 
              vehicles to leave a lasting impression.
            </p>
          </div>

          {/* School Trips */}
          <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
            <FaGraduationCap className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">School & College Trips</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Safety and reliability are our priorities. Your <span className="text-blue-600 underline">tempo traveller hire Ranchi</span> ensures a fun, 
              stress-free journey with clean, spacious vehicles and experienced drivers for students.
            </p>
          </div>
        </div>

        {/* FLEXIBLE OPTIONS SUMMARY */}
        <section className="bg-blue-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Flexible Options for Every Trip</h2>
          <p className="opacity-90 max-w-3xl mx-auto text-sm leading-relaxed">
            With our <span className="underline">tempo traveller hire Ranchi</span>, you can select the perfect vehicle to match your group size, trip 
            type, and comfort needs. Whether you’re planning a short city tour or a long outstation journey, we have the right <span className="underline">tempo traveller in Ranchi</span> to make your travel smooth and enjoyable.
          </p>
        </section>

{/* SECTION 1: HOW TO PICK THE PERFECT TT */}
        <section className="mb-20 pt-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center">
            <FaLightbulb className="mr-3 text-yellow-500" /> How to Pick the Perfect Tempo Traveller in Ranchi
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Choosing the right <span className="text-blue-600 underline">tempo traveller in Ranchi</span> is essential for a smooth, comfortable, and stress-free group 
            journey. At Yatra Travel India, we make it easy to select the best vehicle for your trip based on your group 
            size, travel type, luggage needs, and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <FaUsers className="text-blue-600 text-3xl mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Group Size Matters</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The first step in <span className="text-blue-600 underline">tempo traveller booking Ranchi</span> is understanding your group size. From our 9-seater for small families to 16-seaters for medium groups, or 33-seater buses for corporate teams, picking the right size ensures everyone travels without feeling cramped.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <FaSuitcase className="text-blue-600 text-3xl mt-1 mr-4 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Trip Type & Luggage Space</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For local sightseeing, a standard <span className="text-blue-600 underline">tempo traveller rental Ranchi</span> works perfectly. For outstation trips, our <span className="text-blue-600 underline">luxury tempo traveller Ranchi</span> or Maharaja options offer extra legroom and efficient luggage accommodation without compromising passenger comfort.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 border-l-4 border-blue-600 bg-blue-50 italic text-gray-700">
            With the right choice of vehicle, your group travel in Ranchi becomes more than just a ride — it’s a 
            comfortable, memorable, and enjoyable journey from start to finish.
          </div>
        </section>

        {/* SECTION 2: PRICING TABLE */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 flex justify-center items-center">
              <FaTable className="mr-3" /> Affordable Packages & Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our <span className="text-blue-600 underline">tempo traveller rental Ranchi</span> services offer affordable packages tailored to your group size, travel type, and budget.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-sm font-bold uppercase tracking-wider">Vehicle & Capacity</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-wider text-center">Hourly (₹)</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-wider text-center">Full Day (₹)</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-wider text-center">Outstation (₹/KM)</th>
                  <th className="p-4 text-sm font-bold uppercase tracking-wider">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {pricingData.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-sm">
                      <div className="font-bold text-gray-800">{row.seats}</div>
                      <div className="text-[10px] text-blue-600 font-semibold">{row.type}</div>
                    </td>
                    <td className="p-4 text-sm text-center font-medium text-gray-700">{row.hourly}</td>
                    <td className="p-4 text-sm text-center font-medium text-gray-700">{row.day}</td>
                    <td className="p-4 text-sm text-center font-bold text-blue-600">{row.km}</td>
                    <td className="p-4 text-sm text-gray-500">{row.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-gray-500 bg-gray-50 p-4 rounded-xl">
            <p className="flex items-center"><FaInfoCircle className="mr-1 text-blue-500" /> Rates are indicative & seasonal</p>
            <p className="flex items-center"><FaInfoCircle className="mr-1 text-blue-500" /> Outstation includes driver & fuel</p>
            <p className="flex items-center"><FaInfoCircle className="mr-1 text-blue-500" /> Luxury/Maharaja ideal for weddings</p>
            <p className="flex items-center"><FaInfoCircle className="mr-1 text-blue-500" /> Instant quotes via call/online</p>
          </div>
        </section>

        {/* SECTION 3: WHY TRANSPARENT? */}
        <section className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 flex items-center"><FaWallet className="mr-3 text-blue-200" /> What Makes Our Pricing Transparent?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "No Hidden Charges", desc: "What you see in your tempo traveller booking Ranchi quote is what you pay — no surprise fees." },
                { title: "Flexible Packages", desc: "Choose from hourly rentals for city tours, daily for full-day trips, or outstation packages." },
                { title: "Customized Options", desc: "From a 12-seater for families to a 33-seater bus for corporate teams, we fit your budget." },
                { title: "Luxury & Standard", desc: "Clear pricing for every class, from standard AC to luxury tempo traveller Ranchi models." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start bg-blue-700/50 p-6 rounded-2xl backdrop-blur-sm border border-blue-500">
                  <FaCheckCircle className="text-blue-300 mt-1 mr-4 shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-sm text-blue-100 opacity-90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-5 rounded-full"></div>
        </section>

{/* SECTION 1: WHY CHOOSE US */}
        <section className="mb-20 pt-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Yatra Travel India for Tempo Traveller in Ranchi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Standing out as the most reliable and trusted <span className="text-blue-600 underline">tempo traveller rental Ranchi</span> service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaAward />, title: "Wide Range of Vehicles", text: "From 12-seater and 16-seater to luxury models, we have the perfect tempo traveller hire Ranchi for every group size." },
              { icon: <FaShieldAlt />, title: "Safety and Reliability", text: "Regularly serviced and sanitized vehicles. Professional drivers ensure a secure ride for group travel in Ranchi." },
              { icon: <FaWallet />, title: "Transparent Pricing", text: "No hidden charges. Clear upfront pricing for standard, luxury, and Maharaja options." },
              { icon: <FaCouch />, title: "Comfortable Interiors", text: "Well-maintained seats, ample legroom, and AC options in all our group tour vehicle Ranchi selections." },
              { icon: <FaTasks />, title: "Customized Packages", text: "Tailored services for local sightseeing, outstation trips, or school/college excursions." },
              { icon: <FaClock />, title: "Quick & Easy Booking", text: "Instant online quotes and call-in support to secure your tempo traveller on rent in Ranchi without stress." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 border border-gray-100 rounded-2xl hover:bg-blue-50 transition-all group">
                <div className="text-3xl text-blue-600 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">{idx + 1}. {item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: COMPREHENSIVE FAQs (All 12 Included) */}
        <section className="mb-20 bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-inner">
          <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" /> Frequently Asked Questions (FAQs)
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "What makes Yatra Travel India the best choice for tempo traveller rental in Ranchi?", a: "We are trusted for reliable service, professional drivers, clean vehicles, and transparent pricing for all types of group travel in Ranchi." },
              { q: "Can I book a tempo traveller in Ranchi for same-day trips?", a: "Yes. Our services include same-day bookings for local sightseeing or emergency travel via call or online request." },
              { q: "How do I know which tempo traveller is best for my group?", a: "It depends on group size and luggage. Small families fit a 12-seater; large corporate groups are better in 24-seaters or Maharaja models." },
              { q: "Do you provide vehicles for corporate events and office trips?", a: "Yes. Our group tour vehicle Ranchi options are perfect for seminars, team-building, and punctual business travel." },
              { q: "Are your tempo travellers safe for school and college trips?", a: "Absolutely. Safety is our priority. Vehicles are regularly serviced and driven by experienced drivers familiar with student groups." },
              { q: "Can I book a luxury or Maharaja tempo traveller for outstation trips?", a: "Yes. Our luxury and Maharaja models are ideal for long-distance travel, VIP outings, and weddings with premium amenities." },
              { q: "How do I get a quote for tempo traveller booking in Ranchi?", a: "Share your trip details and dates with us for an instant, transparent quote with no hidden costs." },
              { q: "Can I hire a tempo traveller for a multi-day outstation trip?", a: "Yes. We offer multi-day packages to Netarhat, Jamshedpur, Patratu Valley, and nearby hill stations with driver allowance included." },
              { q: "Do your tempo travellers have GPS and navigation support?", a: "Yes. All vehicles are GPS-equipped, and drivers are experts in local roads and popular tourist routes." },
              { q: "Can I customize my trip itinerary?", a: "Absolutely! You can create a customized schedule for sightseeing, corporate travel, or school tours according to your convenience." },
              { q: "Do you offer hourly rentals in Ranchi?", a: "Yes. Our tempo traveller hire Ranchi services include flexible hourly rentals for local city tours or shopping trips." },
              { q: "How far in advance should I book?", a: "We recommend booking early for weekends and holidays to ensure availability of luxury and Maharaja models." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex justify-between items-center cursor-pointer group">
                  <h4 className="font-bold text-gray-800 text-base group-hover:text-blue-600">{idx + 1}. {faq.q}</h4>
                  <FaChevronDown className="text-gray-300 text-sm" />
                </div>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PAN-INDIA FOOTER (SLUG-BASED LINKS) */}
        <footer className="bg-gray-900 text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-10">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <FaGlobe className="mr-3 text-blue-400" /> Pan-India Tempo Traveller Network
              </h3>
              <p className="text-gray-400 text-sm max-w-2xl">
                Yatra Travel India is not limited to Ranchi alone. We bring our trusted rental services to major cities 
                across India, maintaining the same high standards of cleanliness, comfort, and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
              <Link href="/tempo-traveller/tempo-traveller-in-lucknow" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-lucknow</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Family Travel & Religious Tours</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-chandigarh" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-chandigarh</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Corporate Travel & Himachal Routes</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-kolkata" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-kolkata</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Business Travel & Regional Group Movement</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-patna" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-patna</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">School Trips, Weddings & Outstation</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-varanasi" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-varanasi</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Pilgrimage Groups & Cultural Tours</p>
                </div>
              </Link>
              <Link href="/tempo-traveller/tempo-traveller-in-haridwar" className="flex items-center group">
                <FaLink className="text-blue-500 mr-3 group-hover:text-white" />
                <div>
                  <p className="text-sm font-bold group-hover:text-blue-400">tempo-traveller-in-haridwar</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Char Dham & Religious Group Travel</p>
                </div>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
              © 2026 Yatra Travel India. Reliable Tempo Traveller Rental Services in Ranchi and Beyond.
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        </footer>

      </main>
    </div>
  );
};

export default RanchiPage;