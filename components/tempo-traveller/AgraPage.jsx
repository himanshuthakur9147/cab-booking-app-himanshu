import React from 'react';
import { 
 
  FaCrown, 
  FaGem, 
 
  FaUsers, 
  FaSnowflake, 
 
  FaMapMarkerAlt,
  FaCameraRetro, 
  FaHistory, 
  FaUtensils, 
  FaMapMarkedAlt, 
  FaBus, 
  FaRoute, 
  FaQuoteLeft,
  FaCheckCircle,
  FaQuestionCircle, 
  FaCity, 
  FaArrowRight, 
  FaChevronDown 
} from 'react-icons/fa';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';
import Link from 'next/link';

const AgraPage = () => {

    const faqs = [
    { q: "How can I book a tempo traveller in Agra?", a: "Booking a tempo traveller in Agra with Yatra Travel India is easy. Simply call us or submit your travel details online. We provide instant quotes and quick confirmation for tempo traveller booking, ensuring a hassle-free experience." },
    { q: "What seating options are available for tempo traveller on rent?", a: "We offer multiple seating capacities including 9 seater, 12 seater, 16 seater, 20 seater, 26 seater, and 28 seater tempo travellers, along with luxury and Maharaja tempo travellers for premium group travel." },
    { q: "Do you provide tempo traveller for sightseeing tours?", a: "Yes. Our tempo traveller for sightseeing is ideal for city tours, monuments, temples, waterfalls, and tourist attractions. Enjoy comfortable and stress-free group sightseeing travel with professional drivers." },
    { q: "Is Yatra Travel India reliable for tempo traveller hire?", a: "Absolutely. Yatra Travel India is a trusted name in tempo traveller rental with well-maintained vehicles, experienced drivers, transparent pricing, and timely service." },
    { q: "Can I hire a tempo traveller for outstation trips?", a: "Yes. We offer tempo traveller hire for outstation travel, including one-way, round trip, and multi-day journeys to nearby cities and tourist destinations." },
    { q: "Do you offer luxury and Maharaja tempo travellers?", a: "Yes. Our luxury tempo traveller and Maharaja tempo traveller come with pushback seats, AC, premium interiors, entertainment systems, and extra legroom." },
    { q: "What is included in tempo traveller rental price?", a: "The rental includes vehicle charges, driver cost, and fuel. Toll, parking, and state taxes are extra as per actuals." },
    { q: "Is tempo traveller suitable for corporate and office travel?", a: "Yes. Our tempo traveller for corporate travel is perfect for office trips, conferences, meetings, and events." },
    { q: "Can I book tempo traveller for wedding and family functions?", a: "Yes. We provide group tour vehicles for weddings, receptions, and family functions with comfortable seating and punctual service." },
    { q: "How early should I book a tempo traveller?", a: "We recommend booking at least 2–3 days in advance, especially during weekends and peak season, to ensure availability." }
  ];

  const panIndiaLinks = [
    { anchor: "tempo traveller in new delhi", desc: "for corporate travel, weddings, and outstation routes", url: "/tempo-traveller/tempo-traveller-in-delhi" },
    { anchor: "tempo traveller in hyderabad", desc: "for city tours, IT corporate movement, and airport transfers", url: "/tempo-traveller/tempo-traveller-in-hyderabad" },
    { anchor: "tempo traveller in jaipur", desc: "for weddings, tourism, and destination events", url: "/tempo-traveller/tempo-traveller-in-jaipur" },
    { anchor: "tempo traveller in lucknow", desc: "for family travel, government movement, and religious tours", url: "/tempo-traveller/tempo-traveller-in-lucknow" },
    { anchor: "tempo traveller in indore", desc: "for business travel and regional group movement", url: "/tempo-traveller/tempo-traveller-in-indore" },
    { anchor: "tempo traveller in patna", desc: "for school trips, weddings, and outstation journeys", url: "/tempo-traveller/tempo-traveller-in-patna" },
    { anchor: "tempo traveller in varanasi", desc: "for pilgrimage groups and cultural tours", url: "/tempo-traveller/tempo-traveller-in-varanasi" }
  ];

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* SECTION 1: HERO / HEADER */}
      <header className="py-12 px-6 border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Book Luxury Tempo Traveller in Agra Starting 22/km
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Agra, located in the heart of Uttar Pradesh, is one of India’s most iconic cities and a top destination for travelers from 
              around the world. Famous for the Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the 
              World, Agra attracts millions of tourists every year, including foreign visitors eager to witness its breathtaking beauty.
            </p>
            <p>
              Beyond the Taj Mahal, Agra is home to other historical gems like Agra Fort, Fatehpur Sikri, and Itimad-ud-Daulah’s 
              Tomb, making it a city rich in culture, history, and architectural splendor. Whether you’re a family, a group of friends, 
              corporate travelers, or foreign tourists, exploring Agra is easier and more comfortable with a tempo traveller in Agra, 
              allowing you to cover multiple attractions in a single, stress-free journey.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 2: SIGHTSEEING IN AGRA */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaHistory className="mr-3" /> Tempo Traveller for Sightseeing in Agra
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Discover the best of Agra with Yatra Travel India’s Tempo Traveller for Sightseeing in Agra. Ideal for families, 
              friends, and group travel in Agra, our vehicles make exploring the city’s iconic attractions easy, comfortable, and 
              stress-free.
            </p>
            <p>
              From the majestic Taj Mahal to historic landmarks like Agra Fort, Fatehpur Sikri, Itimad-ud-Daulah’s Tomb, and 
              Mehtab Bagh, our tempo traveller on rent in Agra ensures your group can cover multiple destinations in a single 
              day without worrying about parking, traffic, or seating comfort.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-6">
              <p className="font-bold text-blue-800 mb-2">Our tempo traveller hire Agra fleet includes:</p>
              <ul className="space-y-2">
                <li className="flex items-center"><FaCheckCircle className="text-blue-600 mr-2" /> Standard Tempo Travellers (9, 12, 17, 20, 26, 28-seater) for small to medium groups</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-600 mr-2" /> Luxury Tempo Travellers for VIPs or corporate groups</li>
                <li className="flex items-center"><FaCheckCircle className="text-blue-600 mr-2" /> Maharaja Tempo Travellers for a premium, royal travel experience</li>
              </ul>
            </div>
            <p className="mt-4 font-semibold text-blue-600">
              With tempo traveller rental Agra, you get professional drivers, clean vehicles, AC comfort, and flexible schedules to 
              match your sightseeing itinerary. Make your Agra tour memorable, hassle-free, and enjoyable with Yatra Travel India 
              the trusted choice for group tour vehicle Agra.
            </p>
          </div>
        </section>
<TempoImageCards/>
<TempoSeatConfig city={"agra"}/>
        {/* SECTION 3: 9 TO 28 SEATER OPTIONS */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaUsers className="mr-3" /> Hire Tempo Traveller in Agra – 9 to 28 Seater
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Travel comfortably in a group with Yatra Travel India’s “Hire Tempo Traveller in Agra” services. We offer a wide range 
              of vehicles, from 9-seater to 28-seater tempo travellers, all spacious, air-conditioned, and well-maintained. Perfect for 
              family trips, corporate tours, school excursions, and outstation journeys, our vehicles ensure every passenger travels 
              in comfort.
            </p>
            <p>
              With professional drivers, on time pickups, and smooth rides, we make sure your group travel in Agra is hassle-free. 
              Choose Yatra Travel India for reliable, affordable, and premium tempo traveller rentals in Agra and enjoy a safe, 
              comfortable, and memorable journey every time.
            </p>
          </div>
        </section>

        {/* SECTION 4: MAHARAJA EDITION */}
        <section className="mb-16 bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <FaCrown className="mr-3 text-yellow-400" /> Maharaja Tempo Traveller in Agra
          </h2>
          <div className="space-y-4 opacity-95 leading-relaxed">
            <p>
              Experience royal comfort with the Maharaja Tempo Traveller in Agra from Yatra Travel India. Featuring luxurious 1×1 
              Maharaja seats, elegant interiors, and ample legroom, this vehicle offers a premium travel experience for families, VIP 
              groups, and corporate travelers.
            </p>
            <p>
              Whether it’s a local sightseeing tour in Agra or a long outstation journey, our Maharaja edition ensures smooth rides, 
              unmatched comfort, and top-notch service. Choose Yatra Travel India for a truly luxurious and stress-free way to 
              explore Agra and nearby destinations.
            </p>
            <p>
              As a trusted group tour vehicle Agra provider, we ensure punctual pickups, professional drivers, and well-maintained 
              vehicles. With tempo traveller hire Agra options ranging from standard to luxury Maharaja models, Yatra Travel India 
              makes tempo traveller rental Agra simple, safe, and stress-free.
            </p>
            <p className="font-bold text-yellow-300 pt-2">
              Book your tempo traveller on rent in Agra today and enjoy a truly royal travel experience while exploring the city and 
              nearby destinations.
            </p>
          </div>
        </section>

        {/* SECTION 5: STANDARD VS LUXURY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Standard */}
          <div className="border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
              <FaBus className="mr-2" /> Standard Tempo Traveller in Agra
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              (9, 12, 17, 20, 26, 28 Seater)
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Travel comfortably and reliably with Yatra Travel India’s Standard Tempo Traveller in Agra, available in 9, 12, 17, 
              20, 26, and 28-seater options. Perfect for family outings, school trips, corporate tours, and outstation journeys, 
              these vehicles provide spacious seating, AC comfort, and a smooth ride experience for every passenger. 
              Our tempo traveller on rent in Agra features clean, well-maintained interiors, experienced drivers, and timely service, 
              ensuring a safe and hassle-free journey.
            </p>
          </div>

          {/* Luxury */}
          <div className="border border-gray-200 p-8 rounded-xl hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
              <FaGem className="mr-2" /> Luxury Tempo Traveller in Agra
            </h3>
            <p className="text-sm text-gray-600 mb-4 italic">
              Experience premium group travel
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              Featuring plush interiors, soft pushback seats, mood lighting, AC comfort, and modern entertainment systems, our luxury 
              vehicles provide a smooth and stylish journey for families, VIP guests, and corporate groups. Perfect for tempo traveller 
              for sightseeing Agra or longer outstation trips, our tempo traveller on rent in Agra ensures unmatched comfort, safety, 
              and convenience. Every ride with our luxury fleet is designed to make your travel experience relaxing and memorable.
            </p>
          </div>
        </div>

        {/* FINAL CLOSURE */}
        <section className="text-center bg-gray-50 py-10 px-6 rounded-xl border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            With <span className="text-blue-600 underline">tempo traveller hire Agra</span> and <span className="text-blue-600 underline">tempo traveller rental Agra</span> services from Yatra Travel India, you get 
            professional drivers, clean and well-maintained vehicles, and on-time service, making your group travel completely 
            hassle-free. Book your tempo traveller in Agra today and enjoy a truly elevated travel experience.
          </p>
        </section>

{/* SECTION 1: POPULAR SIGHTSEEING LOCATIONS */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaMapMarkedAlt className="mr-3" /> Popular Sightseeing Locations in Agra
          </h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Agra is a city rich in history, culture, and architectural marvels. When you hire a tempo traveller in Agra for 
            sightseeing, you can comfortably explore all the must-visit attractions without worrying about traffic, parking, or group 
            coordination. Here are some of the most popular locations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Taj Mahal", desc: "The world-famous UNESCO World Heritage Site and one of the Seven Wonders of the World, the Taj Mahal is a must-visit for every traveler. Whether visiting with family, friends, or foreign tourists, a tempo traveller for sightseeing Agra makes it easy to reach this iconic monument hassle-free." },
              { id: 2, title: "Agra Fort", desc: "Another UNESCO World Heritage Site, Agra Fort is a massive red sandstone fortress showcasing Mughal architecture. It’s ideal for history enthusiasts and perfect for group tours." },
              { id: 3, title: "Fatehpur Sikri", desc: "Located just 40 km from Agra, Fatehpur Sikri is a historic city built by Emperor Akbar. Hiring a group tour vehicle Agra ensures a comfortable day trip without the stress of long drives." },
              { id: 4, title: "Itimad-ud-Daulah’s Tomb", desc: "Known as the “Baby Taj,” this exquisite marble mausoleum is a popular stop for tourists looking for intricate Mughal architecture and peaceful surroundings." },
              { id: 5, title: "Mehtab Bagh", desc: "Perfect for sunset views of the Taj Mahal, Mehtab Bagh is a scenic garden located across the Yamuna River. A tempo traveller rental Agra allows groups to reach here comfortably and enjoy the views at leisure." },
              { id: 6, title: "Jama Masjid & Other Local Attractions", desc: "Agra also offers vibrant markets, historic mosques like Jama Masjid, and cultural experiences. With a tempo traveller hire Agra, you can easily cover multiple spots in one day without hassle." }
            ].map((loc) => (
              <div key={loc.id} className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-600 mb-3">{loc.id}. {loc.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: WHY TOURISTS ARE ATTRACTED */}
        <section className="mb-16 bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">Why Tourists Are Attracted to Agra</h2>
          <p className="mb-8 text-gray-700">
            Agra is one of India’s most visited cities, drawing travelers from across the country and around the world. From history 
            enthusiasts and architecture lovers to families and corporate groups, everyone finds something unique in this city.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <FaHistory className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">1. The Taj Mahal – A Symbol of Love and Beauty</h4>
                <p className="text-sm text-gray-600 mt-1">The Taj Mahal is the crown jewel of Agra and one of the most iconic monuments in the world. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this UNESCO World Heritage Site is admired for its stunning white marble architecture, intricate carvings, and symmetrical design. Millions of tourists, including foreign visitors, come to Agra every year to witness this symbol of eternal love. A tempo traveller for sightseeing in Agra makes visiting the Taj Mahal easy and comfortable for groups of any size.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaHistory className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">2. Rich Mughal History and Heritage</h4>
                <p className="text-sm text-gray-600 mt-1">Agra was the seat of the Mughal Empire for centuries, leaving behind a rich legacy of forts, tombs, palaces, and gardens. Tourists flock to Agra Fort, Fatehpur Sikri, and Itimad-ud-Daulah’s Tomb to experience this history firsthand. These historic landmarks not only showcase Mughal architecture but also tell fascinating stories of India’s royal past, attracting culture and history enthusiasts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaCameraRetro className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">3. Architectural Marvels and Photography Opportunities</h4>
                <p className="text-sm text-gray-600 mt-1">Agra’s monuments are known for their marble inlay work, domes, arches, and ornamental carvings, making it a photographer’s paradise. Travelers often explore Agra to capture the beauty of its iconic landmarks and scenic views along the Yamuna River. Using a tempo traveller on rent in Agra ensures your group can move easily between multiple sightseeing spots in comfort, without missing photo opportunities.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaUtensils className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">4. Vibrant Local Culture and Cuisine</h4>
                <p className="text-sm text-gray-600 mt-1">Agra is not just about monuments — it’s also famous for its bustling markets, traditional handicrafts, and rich Mughlai cuisine. Tourists enjoy shopping for marble souvenirs, leather goods, and traditional jewelry, while tasting famous dishes like petha, Mughlai curries, and kebabs. Hiring a tempo traveller hire Agra allows tourists to comfortably explore both cultural spots and local markets in a day.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaBus className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">5. Easy Accessibility and Group Travel Options</h4>
                <p className="text-sm text-gray-600 mt-1">Agra is well-connected by road, rail, and air, making it accessible from Delhi, Jaipur, and other major cities. This convenience, combined with tempo traveller rental Agra services, makes it easy for families, school groups, and corporate teams to explore the city together. From local sightseeing to full-day trips, group tour vehicles Agra ensure safety, comfort, and a stress-free travel experience.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaRoute className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-gray-800">6. Nearby Excursion Destinations</h4>
                <p className="text-sm text-gray-600 mt-1">Agra’s location also makes it ideal for short trips to nearby destinations like Mathura, Vrindavan, Bharatpur, and Fatehpur Sikri. Many tourists combine tempo traveller on rent in Agra with these excursions to enjoy a complete cultural and historical experience.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-blue-100 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              <FaQuoteLeft className="inline mr-2 text-blue-300" />
              In summary, tourists are attracted to Agra for its world-famous Taj Mahal, Mughal heritage, architectural marvels, cultural experiences, delicious cuisine, and easy travel options. With tempo traveller hire in Agra, visiting these attractions becomes safe, comfortable, and convenient for every type of traveler, from families and friends to corporate groups and foreign tourists.
            </p>
          </div>
        </section>

        {/* SECTION 3: FARE STRUCTURE */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Tempo Traveller Fare Structure (Per KM)</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider text-sm">Tempo Traveller Type</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-sm">Price / Km</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-sm">Seating Arrangement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  { type: "9 Seater Tempo Traveller", price: "₹22 / Km", seat: "9+1 Driver" },
                  { type: "10 Seater Tempo Traveller", price: "₹23 / Km", seat: "10+1 Driver" },
                  { type: "11 Seater Tempo Traveller", price: "₹24 / Km", seat: "11+1 Driver" },
                  { type: "12 Seater Tempo Traveller", price: "₹25 / Km", seat: "11+1 Driver" },
                  { type: "13 Seater Tempo Traveller", price: "₹25 / Km", seat: "12+1 Driver" },
                  { type: "14 Seater Tempo Traveller", price: "₹25 / Km", seat: "13+1 Driver" },
                  { type: "15 Seater Tempo Traveller", price: "₹25 / Km", seat: "14+1 Driver" },
                  { type: "16 Seater Tempo Traveller", price: "₹26 / Km", seat: "15+1 Driver" },
                  { type: "17 Seater Tempo Traveller", price: "₹26 / Km", seat: "16+1 Driver" }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-sm font-semibold text-gray-800">{item.type}</td>
                    <td className="p-4 text-sm text-blue-600 font-bold">{item.price}</td>
                    <td className="p-4 text-sm text-gray-600 flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" /> {item.seat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400 italic">* Prices are approximate and subject to seasonal variations.</p>
        </section>


{/* SECTION 1: FAQs */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" /> Frequently Asked Questions (FAQs) – Tempo Traveller Rental
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-50 p-4 font-bold text-gray-800 flex justify-between items-center">
                  <span className="flex items-start">
                    <span className="text-blue-600 mr-2">{index + 1}.</span>
                    {faq.q}
                  </span>
                  <FaChevronDown className="text-gray-400 text-xs" />
                </div>
                <div className="p-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PAN-INDIA FOOTER */}
        <section className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <FaCity className="mr-3 text-blue-200" /> Tempo Traveller Services Across Major Indian Cities
          </h2>
          <p className="mb-6 opacity-90 border-l-4 border-blue-300 pl-4">Our pan-India tempo traveller network supports:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 text-sm">
            {panIndiaLinks.map((item, i) => (
              <div key={i} className="flex items-start group">
                <FaArrowRight className="mt-1 mr-3 text-blue-300 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <p className="leading-relaxed">
                  <Link 
                    href={item.url} 
                    className="font-bold text-white hover:underline decoration-blue-200 underline-offset-4 transition-all"
                  >
                    {item.anchor}
                  </Link>
                  <span className="text-blue-100 opacity-80"> {item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default AgraPage;