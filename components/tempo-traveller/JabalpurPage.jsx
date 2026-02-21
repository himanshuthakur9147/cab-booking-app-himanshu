import Link from 'next/link';
import React from 'react';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';

const JabalpurPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 leading-relaxed">
      <div className="max-w-6xl mx-auto py-12 px-6">
        
        {/* SECTION 1: WHY HIRE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-blue-900 border-b-4 border-blue-500 pb-2 inline-block uppercase tracking-tighter">
            Why Hire a Tempo Traveller in Jabalpur?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Traveling around Jabalpur has never been easier with a <strong>Tempo Traveller in Jabalpur</strong>. If you are visiting Jabalpur and 
            want to explore the city with your family or friends, hiring a <strong>Tempo Traveller in Jabalpur</strong> is the best choice. It is safe, 
            comfortable, and gives you the freedom to travel at your own pace.
          </p>
          <h3 className="text-xl font-bold mb-6">Here’s why choosing a Jabalpur Tempo Traveller hire makes sense:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Comfortable and Spacious", d: "Our Tempo Travellers are perfect for group travel in Jabalpur, offering ample space for 12, 14, 16, or 20 passengers with luggage." },
              { t: "Affordable Rates", d: "Get a Jabalpur Tempo Traveller on rent at competitive prices without compromising on quality or safety." },
              { t: "Safe and Professional Drivers", d: "Enjoy your trip with experienced drivers who know Jabalpur sightseeing routes well." },
              { t: "Flexible Travel", d: "Customize your Bhedaghat and Dhuandhar Falls tour or explore other attractions at your own pace." },
              { t: "Perfect for Family & Group Trips", d: "Ideal for family trips, corporate outings, and pilgrimage tours around Jabalpur and nearby destinations." }
            ].map((item, i) => (
              <div key={i} className="p-5 border-l-4 border-blue-600 bg-blue-50 rounded-r-xl">
                <h4 className="font-bold text-blue-900 mb-2">{i + 1}. {item.t}</h4>
                <p className="text-sm text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

<TempoImageCards/>
<TempoSeatConfig city={"jabalpur"}/>

        {/* SECTION 2: FEATURES */}
        <section className="mb-16 bg-gray-900 text-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-black mb-8 uppercase text-blue-400">Features of Our Tempo Travellers in Jabalpur</h2>
          <p className="mb-8 text-gray-300">
            Make your trip around Jabalpur comfortable and hassle-free with our Tempo Travellers. Perfect for family trips, group 
            tours, or local sightseeing, our vehicles are designed for convenience, safety, and luxury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <p><strong>1. Spacious Seating for Groups</strong> – Our vehicles can comfortably carry 12, 14, 16, or 20 passengers.</p>
            <p><strong>2. Air-Conditioned Comfort</strong> – All our Tempo Travellers are AC-equipped for long trips.</p>
            <p><strong>3. Pushback Seats</strong> – Relax fully with pushback reclining seats for a smooth journey.</p>
            <p><strong>4. Clean and Safe Vehicles</strong> – Every vehicle is well-maintained and sanitized.</p>
            <p><strong>5. Ample Luggage Space</strong> – Plenty of space for all your suitcases and travel gear.</p>
            <p><strong>6. Professional Drivers</strong> – Experienced drivers who know the best Jabalpur sightseeing routes.</p>
            <p><strong>7. Flexible for Any Trip</strong> – Ideal for local sightseeing, temple visits, or corporate outings.</p>
            <p><strong>8. Affordable Pricing</strong> – Premium comfort at competitive prices for Jabalpur group travel.</p>
          </div>
        </section>

        {/* SECTION 3: LUXURY & ATTRACTIONS */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-black mb-6 uppercase text-gray-900">Luxury Tempo Traveller in Jabalpur</h2>
            <p className="mb-6 text-gray-700">
              Looking for a <strong>luxury Tempo Traveller in Jabalpur</strong> for your next group trip? Whether it’s a family vacation, friends’ outing, 
              or corporate tour, our premium Tempo Travellers offer comfort, space, and convenience. Explore Jabalpur sightseeing, 
              nearby cities, and hidden gems without worrying about transport.
            </p>
            <ul className="space-y-3 text-sm">
              <li>● <strong>Spacious Seating for Groups</strong> – Travel comfortably with 12, 14, 16, or 20 passengers.</li>
              <li>● <strong>Air-Conditioned Comfort</strong> – Beat the heat with fully AC Tempo Travellers.</li>
              <li>● <strong>Pushback Reclining Seats</strong> – Adjustable pushback seats for maximum comfort.</li>
              <li>● <strong>Professional Drivers</strong> – Knowledgeable drivers for a smooth, safe ride.</li>
              <li>● <strong>Safe & Clean Vehicles</strong> – Sanitized, maintained, and equipped with safety features.</li>
              <li>● <strong>Flexible Travel Options</strong> – Ideal for local tours or multi-day outstation journeys.</li>
              <li>● <strong>Affordable Luxury</strong> – Enjoy premium features without stretching your budget.</li>
            </ul>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-6 text-blue-300">Top Attractions to Visit by Luxury Tempo Traveller</h3>
            <ul className="space-y-4">
              <li className="border-b border-blue-800 pb-2"><strong>Bhedaghat Marble Rocks</strong> – Witness the stunning marble cliffs and the Narmada River.</li>
              <li className="border-b border-blue-800 pb-2"><strong>Dhuandhar Falls</strong> – A majestic waterfall with misty views, perfect for photography.</li>
              <li className="border-b border-blue-800 pb-2"><strong>Madan Mahal Fort</strong> – Explore historic architecture and panoramic city views.</li>
              <li className="border-b border-blue-800 pb-2"><strong>Rani Durgavati Museum</strong> – Learn about the rich culture and heritage of Jabalpur.</li>
              <li><strong>Nearby Cities & Attractions</strong> – Visit Mandla, Katni, Rewa, or Pench National Park.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: ADVANTAGES & BOOKING */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">Advantages of Booking a Tempo Traveller in Jabalpur</h3>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>1. Hassle-Free Group Travel</strong> – No need for multiple taxis; everyone travels together.</li>
              <li><strong>2. Flexible Itinerary</strong> – Stop anywhere and explore at your own pace.</li>
              <li><strong>3. Perfect for Any Trip</strong> – Ideal for family, friends, pilgrimage, or corporate travel.</li>
              <li><strong>4. Comfort & Convenience</strong> – Relax in AC pushback seats with a smooth ride.</li>
            </ul>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-4">How to Book Your Luxury Tempo Traveller</h3>
            <ul className="text-sm space-y-3">
              <li>● Call <strong>+91 9044019511</strong> or fill out our online form.</li>
              <li>● Get a personalized quote based on your trip.</li>
              <li>● Choose from AC and pushback seat vehicles for comfort.</li>
              <li>● Travel safely with professional drivers and enjoy a smooth journey.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 5: CUSTOMER REVIEWS */}
        <section className="mb-16">
          <h2 className="text-2xl font-black mb-8 uppercase text-center">Customer Reviews: Experience Our Services in Jabalpur</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-xl italic text-sm">
              “Traveling to Bhedaghat and Dhuandhar Falls was so easy and fun! The AC Tempo Traveller with pushback seats made our family trip super comfortable.” – <strong>Anita Sharma, Jabalpur</strong>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl italic text-sm">
              “The driver was very professional and friendly. We covered all Jabalpur sightseeing spots without any hassle. Highly recommend their Tempo Traveller rental services!” – <strong>Rohit Verma, Madhya Pradesh</strong>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl italic text-sm">
              “Perfect for group travel! We hired a 20-seater Tempo Traveller in Jabalpur for our friends’ outing. Spacious, clean, and very comfortable.” – <strong>Priya Singh, Bhopal</strong>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl italic text-sm">
              “Excellent service and affordable rates. The Tempo Traveller hire in Jabalpur made our outstation trip to nearby cities smooth and enjoyable.” – <strong>Sameer Gupta, Rewa</strong>
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVICE VARIANTS & ROUTES */}
        <section className="mb-16 border-y border-gray-100 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-blue-700 uppercase">AC Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Travel in complete comfort with our <strong>AC Tempo Travellers</strong>, perfect for family trips. Whether you're visiting Bhedaghat or exploring nearby cities like Mandla, our <strong>Jabalpur Tempo Traveller hire</strong> ensures a safe journey.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-blue-700 uppercase">Affordable Rentals</h4>
              <p className="text-xs text-gray-600">Looking for a budget friendly way to travel? Our <strong>Tempo Traveller rentals</strong> are ideal for families and group trips. Visit top attractions like Madan Mahal Fort or plan a trip to Katni and Rewa.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-blue-700 uppercase">Pushback Seats</h4>
              <p className="text-xs text-gray-600">Our <strong>Tempo Travellers with pushback seats</strong> offer spacious interiors and reclining seats so everyone can relax. focus on sightseeing while traveling in style and convenience.</p>
            </div>
          </div>

        {/* SECTION: POPULAR ROUTES FULL DESIGN */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8 text-teal-900 border-b-4 border-teal-500 pb-2 inline-block uppercase tracking-tighter">
            Popular Routes from Jabalpur by Tempo Traveller
          </h2>
          
          <p className="text-lg text-gray-700 mb-10">
            Exploring Jabalpur and nearby cities is easy and comfortable with our Tempo Traveller rental services. Whether it’s for 
            local sightseeing or long distance trips, our <strong>Jabalpur Tempo Traveller hire</strong> ensures a safe, spacious, and hassle-free 
            journey. Some of the most popular routes from Jabalpur by Tempo Traveller include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ROUTE 1 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Bhopal</h4>
              <p className="text-sm text-gray-600">
                The capital city of Madhya Pradesh, ideal for heritage tours, lakes, and cultural sightseeing.
              </p>
            </div>

            {/* ROUTE 2 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Indore</h4>
              <p className="text-sm text-gray-600">
                Travel to the commercial hub of Madhya Pradesh for shopping, family outings, or corporate trips.
              </p>
            </div>

            {/* ROUTE 3 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Bhedaghat Marble Rocks</h4>
              <p className="text-sm text-gray-600">
                A short trip to the stunning marble cliffs along the Narmada River.
              </p>
            </div>

            {/* ROUTE 4 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Dhuandhar Falls</h4>
              <p className="text-sm text-gray-600">
                Visit the majestic waterfalls and enjoy the misty views in comfort with <strong>AC pushback seat Tempo Travellers</strong>.
              </p>
            </div>

            {/* ROUTE 5 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Mandla</h4>
              <p className="text-sm text-gray-600">
                Perfect for wildlife enthusiasts heading to <strong>Kanha National Park</strong>.
              </p>
            </div>

            {/* ROUTE 6 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Rewa</h4>
              <p className="text-sm text-gray-600">
                Explore cultural, historical, and scenic spots in this nearby city.
              </p>
            </div>

            {/* ROUTE 7 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Katni</h4>
              <p className="text-sm text-gray-600">
                Quick trips to waterfalls and nature spots around the city.
              </p>
            </div>

            {/* ROUTE 8 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Nagpur</h4>
              <p className="text-sm text-gray-600">
                Ideal for long-distance travel with friends or family, exploring Maharashtra’s gateway city.
              </p>
            </div>

            {/* ROUTE 9 */}
            <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-black text-teal-800 mb-3 uppercase tracking-wide">● Jabalpur to Raipur</h4>
              <p className="text-sm text-gray-600">
                Travel to Chhattisgarh’s capital in comfort for business or leisure trips.
              </p>
            </div>
          </div>
        </section>
        </section>

        {/* SECTION 7: WHY CHOOSE YATRA TRAVEL INDIA */}
        <section className="mb-16">
          <h2 className="text-2xl font-black mb-6 uppercase">Why Choose Yatra Travel India in Jabalpur</h2>
          <p className="text-gray-700 mb-6">
            Choosing <strong>Yatra Travel India</strong> for your <strong>Tempo Traveller booking in Jabalpur</strong> means you get reliable service, comfortable 
            vehicles, and complete peace of mind from start to finish. When you book with us, you enjoy clean and well‑maintained 
            Tempo Travellers equipped with AC cabins and pushback reclining seats—perfect for family trips, group travel, or outstation journeys. 
            Our experienced drivers know all the best sightseeing routes, ensuring your journey is smooth and stress‑free.
          </p>
        </section>

        {/* SECTION 8: FAQ */}
        <section className="mb-16 bg-white shadow-xl border border-gray-100 p-8 rounded-3xl">
          <h2 className="text-2xl font-black mb-10 text-gray-900 uppercase text-center">FAQ – Tempo Traveller Booking in Jabalpur</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q1. Why should I choose Yatra Travel India for Tempo Traveller rental in Jabalpur?</p>
              <p className="text-sm text-gray-600">A1. Yatra Travel India offers clean, safe, and well-maintained Tempo Travellers with AC and pushback seats. Our experienced drivers know the best Jabalpur sightseeing routes.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q2. What types of Tempo Travellers are available in Jabalpur?</p>
              <p className="text-sm text-gray-600">A2. We provide <strong>AC Tempo Travellers</strong> with pushback reclining seats for 12, 14, 16, or 20 passengers with enough luggage space.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q3. Which sightseeing places in Jabalpur can I visit?</p>
              <p className="text-sm text-gray-600">A3. Popular destinations include Bhedaghat Marble Rocks, Dhuandhar Falls, Madan Mahal Fort, and nearby cities like Mandla, Katni, Rewa, Bhopal, or Nagpur.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q4. How much does it cost to hire a Tempo Traveller in Jabalpur?</p>
              <p className="text-sm text-gray-600">A4. We offer affordable and transparent pricing based on vehicle size, distance, and number of travel days. Get a quote instantly by contacting us.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q5. Can I book for a one-day trip or long outstation journey?</p>
              <p className="text-sm text-gray-600">A5. Yes! Our service is flexible for short local sightseeing or long multi-day journeys to cities like Bhopal, Indore, Nagpur, and Raipur.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-800">Q8. How do I book a Tempo Traveller in Jabalpur?</p>
              <p className="text-sm text-gray-600 font-bold">Booking is simple: Call +91 9044019511, fill our online form, and our team will help you choose the right AC Tempo Traveller.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FOOTER */}
        <section className="bg-gray-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8 text-blue-400">Our Tempo Traveller Services Across Major Cities</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest">
            <Link href="/tempo-traveller/tempo-traveller-in-noida" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Noida</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Delhi</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-lucknow" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Lucknow</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-shimla" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Shimla</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-dehradun" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Dehradun</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-haridwar" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Haridwar</Link>
            <Link href="/tempo-traveller/tempo-traveller-in-chandigarh" className="hover:text-blue-300 transition-colors">● Tempo Traveller in Chandigarh</Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default JabalpurPage;