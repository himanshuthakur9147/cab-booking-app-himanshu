import Link from 'next/link';
import React from 'react';
import { 
  FaBus, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaInfoCircle, 
  FaSnowflake, 
  FaMusic, 
  FaBatteryFull, 
  FaSuitcase, 
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaTag,
  FaClock,
  FaGasPump,
  FaUserTie,
  FaParking,
  FaRoute,
  FaClipboardList,
  FaQuestionCircle,
  FaCity,
  FaArrowRight

} from 'react-icons/fa';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';

const BhopalPage = () => {

const services = [
    { 
      anchor: "tempo traveller in mumbai", 
      desc: "for corporate travel, weddings, and outstation routes", 
      url: "/tempo-traveller/tempo-traveller-in-mumbai" 
    },
    { 
      anchor: "tempo traveller in hyderabad", 
      desc: "for city tours, IT corporate movement, and airport transfers", 
      url: "/tempo-traveller/tempo-traveller-in-hyderabad" 
    },
    { 
      anchor: "tempo traveller in jaipur", 
      desc: "for weddings, tourism, and destination events", 
      url: "/tempo-traveller/tempo-traveller-in-jaipur" 
    },
    { 
      anchor: "tempo traveller in lucknow", 
      desc: "for family travel, government movement, and religious tours", 
      url: "/tempo-traveller/tempo-traveller-in-lucknow" 
    },
    { 
      anchor: "tempo traveller in chandigarh", 
      desc: "for corporate travel and Himachal routes", 
      url: "/tempo-traveller/tempo-traveller-in-chandigarh" 
    },
    { 
      anchor: "tempo traveller in indore", 
      desc: "for business travel and regional group movement", 
      url: "/tempo-traveller/tempo-traveller-in-indore" 
    },
    { 
      anchor: "tempo traveller in patna", 
      desc: "for school trips, weddings, and outstation journeys", 
      url: "/tempo-traveller/tempo-traveller-in-patna" 
    },
    { 
      anchor: "tempo traveller in varanasi", 
      desc: "for pilgrimage groups and cultural tours", 
      url: "/tempo-traveller/tempo-traveller-in-varanasi" 
    },
    { 
      anchor: "tempo traveller in haridwar", 
      desc: "for Char Dham and religious group travel", 
      url: "/tempo-traveller/tempo-traveller-in-haridwar" 
    }
  ];


  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      {/* SECTION 1: HERO & INTRODUCTION */}
      <header className="py-12 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            Tempo Traveller in Bhopal for Tours and Group Travel | Yatra Travel India
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              Bhopal, the capital city of Madhya Pradesh, is a beautiful blend of history, culture, nature, and modern development. 
              Popularly known as the City of Lakes, Bhopal is famous for its scenic water bodies, grand mosques, ancient 
              monuments, and green landscapes. The city offers something for every traveler from heritage lovers and pilgrims to 
              nature enthusiasts and families on vacation.
            </p>
            <p>
              Bhopal is home to iconic attractions like Upper Lake, Taj-ul-Masajid, Van Vihar National Park, Birla Museum, and 
              Sanchi Stupa (nearby), making it a perfect destination for both local sightseeing and outstation trips. Well connected by 
              road, rail, and air, Bhopal serves as an excellent base for exploring central India.
            </p>
            <p>
              If you are planning group travel, hiring a Tempo Traveller in Bhopal is the most comfortable way to explore the city and 
              nearby destinations. With spacious seating, air conditioned comfort, and professional drivers, you can enjoy a smooth 
              and hassle-free journey across Bhopal’s top attractions.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 2: HIRE AC TEMPO TRAVELLER */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaBus className="mr-3" /> Hire AC Tempo Traveller in Bhopal at Best Price
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you are planning a trip with family, friends, or colleagues, booking a tempo traveller in Bhopal is a simple 
              and comfortable choice. Instead of using many cars or worrying about public transport, you can choose a 
              tempo traveller on rent in Bhopal and travel together in one spacious vehicle.
            </p>
            <p>
              At Yatra Travel India, we provide reliable tempo traveller rental Bhopal with clean, well-maintained AC 
              vehicles and polite, experienced drivers. Our tempo travellers offer comfortable pushback seats, good 
              legroom, and enough space for luggage, so your journey stays relaxed and enjoyable.
            </p>
            <p>
              Our tempo traveller hire Bhopal service is perfect for city sightseeing, outstation trips, weddings, corporate 
              tours, school trips, and religious travel. Whether you are visiting local attractions or planning a longer 
              journey, we make group travel Bhopal easy and stress-free.
            </p>
            <p>
              We offer fair and transparent pricing, so you always get value for your money. Booking is quick and simple 
              with our tempo traveller booking Bhopal service through phone or online.
            </p>
            <p className="font-semibold text-blue-600">
              Choose comfort, safety, and convenience. Book your AC tempo traveller in Bhopal today and enjoy a 
              smooth journey with your group.
            </p>
          </div>
        </section>

<TempoImageCards/>
<TempoSeatConfig city={"bhopal"}/>

        {/* SECTION 3: BEST PLACES TO VISIT */}
        <section className="mb-16 bg-gray-50 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaMapMarkerAlt className="mr-3" /> Best Places to Visit in Bhopal by Tempo Traveller
          </h2>
          <p className="mb-8 italic text-gray-600">
            Exploring Bhopal with a group becomes easy and comfortable when you choose a tempo traveller in Bhopal. From 
            scenic lakes to historic monuments, a tempo traveller on rent in Bhopal helps you cover all major attractions smoothly 
            in one trip. Below are the top tourist places in Bhopal you can easily visit with a tempo traveller rental Bhopal.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">Upper Lake (Bhojtal)</h4>
              <p className="text-sm">One of the most famous sightseeing places in Bhopal, Upper Lake is ideal for boating, sunset views, and photography. It’s a perfect first stop for families and group tours.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">Van Vihar National Park</h4>
              <p className="text-sm">Located near Upper Lake, Van Vihar is a popular wildlife park where you can spot animals and birds in natural surroundings. A must-visit place during group travel in Bhopal.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">Taj-ul-Masajid</h4>
              <p className="text-sm">One of the largest mosques in India, Taj-ul-Masajid is known for its grand architecture and peaceful atmosphere. It is a key religious and heritage attraction in Bhopal.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">Bharat Bhavan</h4>
              <p className="text-sm">A cultural hub featuring art galleries, museums, and open theatres. Ideal for travelers interested in culture and history.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2">Birla Mandir & Birla Museum</h4>
              <p className="text-sm">Situated on a hilltop, Birla Mandir offers beautiful city views, while Birla Museum displays ancient artifacts and sculptures.</p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-blue-600 mb-2 flex items-center">Why Visit Bhopal by Tempo Traveller?</h4>
              <p className="text-sm">With tempo traveller hire Bhopal, your entire group travels together in AC comfort, saving time and cost. Easy tempo traveller booking Bhopal makes sightseeing stress-free and enjoyable.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHY CHOOSE YATRA TRAVEL INDIA */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 flex items-center">
            <FaInfoCircle className="mr-3" /> Why Choose Yatra Travel India for Tempo Traveller in Bhopal
          </h2>
          <div className="mb-8 text-gray-700 leading-relaxed">
            <p>
              When you book a tempo traveller in Bhopal with Yatra Travel India, you get a perfect combination of comfort, safety, 
              and affordable pricing. We are a trusted name for tempo traveller rental Bhopal and offer well maintained vehicles for 
              local sightseeing, outstation trips, corporate tours, weddings, and family vacations. Our focus is to make group travel in 
              Bhopal smooth and stress-free.
            </p>
            <p className="mt-4 font-semibold">Here’s why travelers prefer us for tempo traveller hire Bhopal:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaSnowflake className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">AC Tempo Traveller in Bhopal with Pushback Seats</span> – Comfortable pushback seating for relaxed long journeys</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaSuitcase className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Tempo Traveller on Rent in Bhopal with Ample Luggage Space</span> – Easy storage for bags and travel gear</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaMusic className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Music System & Mobile Charging Points</span> – Enjoy entertainment and stay connected on the road</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Spacious Legroom for Group Travel Bhopal</span> – Extra comfort for short and long-distance trips</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Easy Online & Phone Tempo Traveller Booking Bhopal</span> – Quick and simple booking process</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Instant Booking Confirmation</span> – No delays, no confusion</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Flexible Pickup & Drop Anywhere in Bhopal</span> – Home, hotel, airport, or railway station pickup available</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
              <p className="text-sm"><span className="font-bold">Affordable Tempo Traveller Rental Bhopal Prices</span> – Best value for money</p>
            </div>
          </div>
          
          <p className="mt-8 text-center text-lg font-medium text-gray-700">
            Choose Yatra Travel India for reliable tempo traveller services in Bhopal and enjoy a comfortable journey with your 
            group from start to finish.
          </p>
        </section>

        {/* SECTION 1: LOCAL SIGHTSEEING */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaMapMarkedAlt className="mr-3" /> Local Sightseeing Tempo Traveller in Bhopal
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Explore the beauty of the City of Lakes with our reliable local sightseeing tempo traveller in Bhopal. 
              Whether you are visiting with family, friends, or a corporate group, hiring a tempo traveller in Bhopal 
              makes it easy to cover all major attractions comfortably in one day.
            </p>
            <p>
              With our tempo traveller on rent in Bhopal, you can visit popular places like Upper Lake, Van Vihar National 
              Park, Taj-ul-Masajid, Bharat Bhavan, Birla Mandir, and Birla Museum without the hassle of changing vehicles. 
              Our experienced drivers know the best routes and sightseeing order, helping you save time and enjoy more.
            </p>
            <p>
              Our tempo traveller rental Bhopal vehicles are AC, spacious, and well-maintained, making them perfect for 
              group travel in Bhopal. You get comfortable seating, ample luggage space, and flexible pickup and drop locations.
            </p>
            <p className="font-semibold text-blue-600">
              For a smooth and affordable city tour, choose tempo traveller hire Bhopal with Yatra Travel India and 
              enjoy stress-free local sightseeing with your group.
            </p>
          </div>
        </section>

        {/* SECTION 2: PACKAGES */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaCalendarAlt className="mr-3" /> One Day & Multi-Day Tempo Traveller Packages
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yatra Travel India offers flexible one day and multi-day tempo traveller packages in Bhopal to suit every 
              type of group trip. Whether you are planning a short city tour or a longer outstation journey, our tempo 
              traveller in Bhopal services are designed to give you comfort, safety, and value for money.
            </p>
            <p>
              Our one day tempo traveller package in Bhopal is perfect for local sightseeing. You can easily cover top 
              attractions like Upper Lake, Van Vihar National Park, Taj-ul-Masajid, Bharat Bhavan, Birla Mandir, and 
              Birla Museum in a single day with your group.
            </p>
            <p>
              For travelers looking to explore nearby destinations, we provide multi-day tempo traveller rental Bhopal 
              packages for places like Sanchi, Pachmarhi, Ujjain, Indore, and beyond. These packages are ideal for 
              family holidays, corporate tours, pilgrimage trips, and weekend getaways.
            </p>
            <p>
              With our tempo traveller on rent in Bhopal, you get AC vehicles, comfortable seating, professional 
              drivers, and transparent pricing. Easy tempo traveller booking Bhopal ensures quick confirmation and 
              hassle-free planning.
            </p>
            <p className="font-semibold text-blue-600">
              Choose Yatra Travel India for reliable tempo traveller hire Bhopal and enjoy smooth one-day or 
              multi-day group travel from Bhopal.
            </p>
          </div>
        </section>

        {/* SECTION 3: PRICING INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaTag className="mr-3" /> Transparent Pricing for Tempo Traveller in Bhopal
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Yatra Travel India, we believe in honest and transparent pricing for every tempo traveller in Bhopal 
              booking. What you see is what you pay no hidden charges, no last minute surprises. Our goal is to make 
              tempo traveller rental Bhopal simple, affordable, and trustworthy for all customers.
            </p>
            <p>
              We clearly explain the cost structure before booking, including per-kilometer rates or package prices, 
              driver allowance, and trip duration. This helps you plan your travel budget confidently. Whether you 
              choose a tempo traveller on rent in Bhopal for local sightseeing or a multi day outstation trip, 
              our pricing remains fair and competitive.
            </p>
            <p>
              With tempo traveller hire Bhopal, you also get value-added benefits like well-maintained AC vehicles, 
              experienced drivers, and flexible pickup & drop options – all included in transparent rates.
            </p>
            <p className="font-semibold italic">
              For easy tempo traveller booking Bhopal, our team shares a complete price breakup in advance, 
              so you can travel stress-free with your group.
            </p>
          </div>
        </section>

        {/* SECTION 4: PRICING TABLES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Table 1: Local Sightseeing */}
          <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg flex items-center">
                <FaClock className="mr-2" /> Local Sightseeing (8 Hours / 80 Km)
              </h3>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-3 text-sm font-bold">Vehicle Type</th>
                  <th className="p-3 text-sm font-bold">Seating Capacity</th>
                  <th className="p-3 text-sm font-bold">Price (Approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">9 Seater</td><td className="p-3 text-sm">₹4,500 – ₹5,000</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">12 Seater</td><td className="p-3 text-sm">₹5,000 – ₹5,500</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">15 Seater</td><td className="p-3 text-sm">₹5,500 – ₹6,000</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">17 Seater</td><td className="p-3 text-sm">₹6,000 – ₹6,500</td></tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Outstation Travel */}
          <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg flex items-center">
                <FaGasPump className="mr-2" /> Outstation Travel (Per Km Basis)
              </h3>
            </div>
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-3 text-sm font-bold">Vehicle Type</th>
                  <th className="p-3 text-sm font-bold">Seating Capacity</th>
                  <th className="p-3 text-sm font-bold">Rate Per Km (Approx.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">9 Seater</td><td className="p-3 text-sm">₹18 – ₹20/km</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">12 Seater</td><td className="p-3 text-sm">₹20 – ₹22/km</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">15 Seater</td><td className="p-3 text-sm">₹22 – ₹24/km</td></tr>
                <tr><td className="p-3 text-sm">AC Tempo Traveller</td><td className="p-3 text-sm">17 Seater</td><td className="p-3 text-sm">₹24 – ₹26/km</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* EXTRA CHARGES */}
        <div className="bg-gray-100 p-6 rounded-lg mb-16">
          <h4 className="font-bold text-blue-600 mb-4 text-lg underline underline-offset-4">Extra Charges (If Applicable)</h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium">
            <li className="flex items-center"><FaUserTie className="mr-2 text-blue-600" /> Driver Allowance: ₹500 per day</li>
            <li className="flex items-center"><FaParking className="mr-2 text-blue-600" /> Toll, Parking & State Tax: As per actual</li>
            <li className="flex items-center"><FaRoute className="mr-2 text-blue-600" /> Minimum Running: 250 km/day for outstation trips</li>
          </ul>
        </div>

        {/* SECTION 5: POPULAR ROUTES */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaRoute className="mr-3" /> Popular Tempo Traveller Routes from Bhopal
          </h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Planning an outstation trip with your group? Yatra Travel India offers affordable and reliable tempo 
            traveller in Bhopal for all major tourist and pilgrimage routes. Our tempo traveller on rent in Bhopal 
            is ideal for families, corporate groups, and friends traveling together in comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { route: "Bhopal to Sanchi Tempo Traveller", desc: "A short and scenic drive to the world-famous Sanchi Stupa and Buddhist monuments. Ideal for heritage and history lovers." },
              { route: "Bhopal to Pachmarhi Tempo Traveller", desc: "Perfect hill station getaway for nature lovers. Great for weekend trips and family holidays." },
              { route: "Bhopal to Ujjain Tempo Traveller", desc: "One of the most demanded pilgrimage routes for Mahakaleshwar Jyotirlinga darshan." },
              { route: "Bhopal to Indore Tempo Traveller", desc: "Popular for corporate travel, shopping trips, and city sightseeing." },
              { route: "Bhopal to Omkareshwar Tempo Traveller", desc: "Another important religious route for Jyotirlinga darshan and spiritual group tours." },
              { route: "Bhopal to Mandu Tempo Traveller", desc: "Best for travelers interested in forts, palaces, and historical architecture." },
              { route: "Bhopal to Jabalpur Tempo Traveller", desc: "Visit Bhedaghat, Marble Rocks, and Dhuandhar Falls comfortably with your group." },
              { route: "Bhopal to Khajuraho Tempo Traveller", desc: "Ideal for exploring the famous UNESCO-listed temples and cultural heritage." }
            ].map((item, index) => (
              <div key={index} className="p-5 border border-gray-100 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors">
                <h4 className="font-bold text-blue-600 mb-2">{item.route}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 1: HOW TO BOOK GUIDE */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 flex items-center">
            <FaClipboardList className="mr-3" /> How to Book Tempo Traveller in Bhopal – Easy Step-by-Step Guide
          </h2>
          <p className="mb-8 text-gray-700">
            Booking a tempo traveller in Bhopal with Yatra Travel India is quick, simple, and hassle-free. Whether you need a 
            vehicle for local sightseeing, outstation travel, or group tours, you can complete your tempo traveller booking in 
            Bhopal in just a few easy steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Call or Send Inquiry</h4>
              <p className="text-xs text-gray-600">Contact us on <span className="text-blue-600 underline font-semibold">919044019511</span> through phone or WhatsApp.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Get Best Price Quote</h4>
              <p className="text-xs text-gray-600">Our team will provide the best price for <span className="text-blue-600 underline">tempo traveller on rent in Bhopal</span>.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Choose Your Vehicle</h4>
              <p className="text-xs text-gray-600">Select from 9 to 17-seater <span className="text-blue-600 underline">AC tempo traveller rental Bhopal</span>.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-bold text-xl">4</div>
              <h4 className="font-bold mb-2">Confirm Booking</h4>
              <p className="text-xs text-gray-600">Pay a small advance and get instant <span className="text-blue-600 underline">tempo traveller hire Bhopal</span> confirmation.</p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center text-center p-4 border rounded-lg bg-gray-50">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3 font-bold text-xl">5</div>
              <h4 className="font-bold mb-2">Enjoy Your Journey</h4>
              <p className="text-xs text-gray-600">Vehicle arrives at your chosen pickup point on time.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAQs */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 flex items-center">
            <FaQuestionCircle className="mr-3" /> FAQs – Tempo Traveller in Bhopal | Yatra Travel India
          </h2>
          <div className="space-y-6">
            {[
              { q: "What is the best way to hire a tempo traveller in Bhopal?", a: <>Booking a tempo traveller in Bhopal with Yatra Travel India is the easiest and safest option. We offer <span className="text-blue-600 underline">AC tempo traveller rental Bhopal</span> for family trips, corporate tours, and pilgrimage travel.</> },
              { q: "How can I book a tempo traveller on rent in Bhopal?", a: <>You can book your <span className="text-blue-600 underline">tempo traveller on rent in Bhopal</span> via phone or online. Our team provides instant confirmation and flexible pickup and drop options.</> },
              { q: "What are the popular places to visit in Bhopal by tempo traveller?", a: "Top attractions include Upper Lake, Van Vihar National Park, Taj-ul-Masajid, Birla Mandir, Birla Museum, Bharat Bhavan, and nearby destinations like Sanchi and Pachmarhi." },
              { q: "What is the cost of tempo traveller rental in Bhopal?", a: <>Rates depend on vehicle size, distance, and trip duration. We provide transparent pricing for <span className="text-blue-600 underline">tempo traveller rental Bhopal</span> with no hidden charges.</> },
              { q: "How many people can travel in a tempo traveller in Bhopal?", a: <>Our tempo travellers in Bhopal are available in 9, 12, 15, and 17-seater options, perfect for <span className="text-blue-600 underline">group travel Bhopal</span>.</> },
              { q: "Is a tempo traveller suitable for family trips and corporate travel?", a: <>Yes! Our <span className="text-blue-600 underline">tempo traveller hire Bhopal</span> vehicles are ideal for family trips, corporate tours, school trips, and religious pilgrimages.</> },
              { q: "What is the best time to visit Bhopal for sightseeing?", a: <>The best time for <span className="text-blue-600 underline">group travel in Bhopal</span> is October to March, when weather is pleasant for sightseeing, boating, and heritage tours.</> },
              { q: "Can a tempo traveller cover both city sightseeing and nearby destinations?", a: <>Absolutely. With <span className="text-blue-600 underline">tempo traveller rental Bhopal</span>, you can cover city attractions and nearby places like Sanchi, Pachmarhi, Omkareshwar, Mandu, and Jabalpur in one trip.</> },
              { q: "Are the tempo travellers equipped with AC and comfort features?", a: "Yes! All our tempo travellers in Bhopal are AC, with pushback seats, comfortable legroom, luggage space, music system, and charging points for a smooth journey." },
              { q: "Can I book a tempo traveller in Bhopal for a one-day tour?", a: "Yes, we offer one-day tempo traveller packages in Bhopal for local sightseeing or city tours." },
              { q: "Are multi-day tempo traveller packages available in Bhopal?", a: <>Yes! We provide multi-day <span className="text-blue-600 underline">tempo traveller rental Bhopal</span> for outstation trips to Pachmarhi, Sanchi, Ujjain, Mandu, and Jabalpur.</> },
              { q: "Why should I choose Yatra Travel India for tempo traveller hire in Bhopal?", a: <>Yatra Travel India offers well-maintained AC vehicles, professional drivers, flexible pickup & drop, transparent pricing, and easy <span className="text-blue-600 underline">tempo traveller booking Bhopal</span>. Perfect for safe and comfortable group travel in Bhopal.</> },
              { q: "How do I get instant confirmation for tempo traveller booking in Bhopal?", a: <>Call or message us with your trip details, and we will provide instant confirmation for <span className="text-blue-600 underline">tempo traveller hire Bhopal</span> along with driver and vehicle details.</> },
              { q: "Is there flexible pickup and drop available for tempo travellers in Bhopal?", a: "Yes! We provide pickup and drop at your preferred location in Bhopal, whether it’s a hotel, airport, railway station, or home." },
              { q: "Can I hire a tempo traveller in Bhopal for corporate events or weddings?", a: <>Definitely! Our <span className="text-blue-600 underline">tempo traveller rental Bhopal</span> is perfect for weddings, corporate outings, family trips, and group tours, ensuring comfort for everyone.</> }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <p className="font-bold text-gray-800 flex items-start">
                  <span className="text-blue-600 mr-2">{index + 1}.</span> {faq.q}
                </p>
                <p className="mt-2 text-gray-600 text-sm pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PAN-INDIA FOOTER */}
       <section className="bg-blue-600 text-white p-8 rounded-2xl mt-12">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <FaCity className="mr-3" /> Tempo Traveller Services Across Major Indian Cities
      </h2>
      <p className="mb-6 opacity-90">Our pan-India tempo traveller network supports:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm">
        {services.map((item, i) => (
          <div key={i} className="flex items-start">
            <FaArrowRight className="mt-1 mr-2 text-blue-300 flex-shrink-0" />
            <p className="leading-relaxed">
              {/* Link Part */}
              <Link 
                href={item.url} 
                className="font-semibold text-white hover:underline decoration-white underline-offset-4 transition-all"
              >
                {item.anchor}
              </Link>
              {/* Plain Text Part */}
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

export default BhopalPage;