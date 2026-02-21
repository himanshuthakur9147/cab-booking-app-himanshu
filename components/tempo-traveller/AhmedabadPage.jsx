import Link from 'next/link';
import React from 'react';

const AhmedabadPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* SECTION 1: HEADER & INTRO */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-blue-500 pb-2 inline-block uppercase tracking-tighter">
            Luxury Tempo Traveller in Ahmedabad | Yatra Travel India
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Ahmedabad is a vibrant blend of heritage, business, and modern infrastructure, serving as a 
              key travel hub in Gujarat. Whether you are organizing corporate travel to business zones, 
              a heritage tour covering <strong>Sabarmati Ashram and old city areas</strong>, or an outstation trip to 
              <strong>Statue of Unity, Dwarka, or Somnath</strong>, our luxury tempo travellers in Ahmedabad provide a 
              smooth and dependable group travel experience.
            </p>
            <p>
              Looking for a comfortable, reliable, and affordable tempo traveller in Ahmedabad? 
              <strong>Yatra Travel India</strong> offers the best tempo traveller hire in Ahmedabad for local sightseeing, 
              outstation trips, weddings, corporate tours, school excursions, and airport transfers. Whether 
              you’re planning a family vacation, business trip, religious tour, or group outing, our <strong>luxury 
              tempo traveller in Ahmedabad</strong> ensures a smooth, safe, and premium travel experience.
            </p>
            <p>
              With a well-maintained fleet of <strong>9, 12, 16, and 20 seater tempo travellers</strong>, we provide the 
              perfect vehicle for every group size. All vehicles are fully air-conditioned, spacious, and 
              driven by experienced chauffeurs who know Gujarat routes thoroughly.
            </p>
          </div>
        </section>

        {/* SECTION 2: BUDGET & OPTIONS */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-black mb-6 text-gray-900 uppercase">
              Budget-Friendly Tempo Traveller Rental in Ahmedabad
            </h2>
            <p className="text-gray-700 mb-6">
              Searching for a dependable and economical tempo traveller service in Ahmedabad? Yatra 
              Travel India brings you cost-effective rental solutions with clear pricing and trustworthy 
              service.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="text-xl font-bold text-blue-900">
                Our fares begin at <strong>₹22 per km</strong>, with zero hidden costs.
              </p>
              <p className="text-sm mt-2 text-blue-800">
                Charges for tolls, parking, and driver allowance are shared upfront, so you always know exactly what you’re paying.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-xl mb-6 text-blue-900">Our Tempo Traveller Options Include:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>9-Seater Tempo Traveller</strong> – Suitable for small families, airport pickups, and local travel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>12-Seater Tempo Traveller Ahmedabad</strong> – A great choice for weddings, tours, and long-distance journeys</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Urbania 16-Seater Tempo Traveller</strong> – Ideal for medium groups needing extra space and comfort</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Maharaja 12-Seater Tempo Traveller</strong> – A luxury option for premium and corporate travel</span>
              </li>
            </ul>
            <p className="mt-6 text-sm italic text-gray-500 border-t pt-4">
              All our vehicles come with spotless interiors, reclining pushback seats, stylish LED lights, spacious luggage storage, and excellent suspension.
            </p>
          </div>
        </section>

        {/* SECTION 3: HIGHLIGHTS */}
        <section className="mb-16">
          <div className="bg-gray-900 text-white p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Top 12 Seater & 16 Seater Tempo Traveller in Ahmedabad</h2>
            <p className="text-gray-400 mb-10">
              Looking for a reliable 12 seater or 16 seater tempo traveller in Ahmedabad? Yatra Travel 
              India provides a wide range of premium tempo travellers, including Maharaja, Urbania, and 
              luxury AC models, perfect for corporate outings, wedding transportation, family holidays, and 
              group tours.
            </p>
            
            <h3 className="text-blue-400 font-bold mb-6 text-lg underline underline-offset-8">Main Highlights of Our Tempo Travellers:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Comfortable pushback and reclining seats",
                "High-performance air-conditioning",
                "Music system and LED screen (available on request)",
                "Clean, well-maintained interiors with spacious luggage area",
                "Experienced and background-verified drivers"
              ].map((highlight, i) => (
                <div key={i} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-xl">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-500 text-sm">
              From local sightseeing trips to long-distance interstate journeys, we ensure a safe, smooth, and hassle-free travel experience.
            </p>
          </div>
        </section>

        {/* SECTION 4: OUTSTATION ROUTES */}
        <section className="mb-12">
          <h2 className="text-2xl font-black mb-6 text-gray-900 uppercase">Outstation Tempo Traveller Service from Ahmedabad</h2>
          <p className="mb-8 text-gray-700 leading-relaxed">
            Thinking about a road trip from Ahmedabad with your group? Our <strong>tempo traveller for outstation trips from Ahmedabad</strong> is a comfortable and convenient way to travel together. We offer both one-way and round-trip bookings to destinations across Gujarat and nearby states, making your journey easy and well-planned.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { route: "Ahmedabad to Dwarka", detail: "Ideal for religious and family tours" },
              { route: "Ahmedabad to Somnath", detail: "Comfortable pilgrimage travel" },
              { route: "Ahmedabad to Udaipur", detail: "Popular weekend getaway" },
              { route: "Ahmedabad to Mount Abu", detail: "Hill station group trips" },
              { route: "Ahmedabad to Surat / Vadodara / Rajkot", detail: "Business and family travel" }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 p-5 rounded-lg hover:border-blue-500 transition-colors">
                <h4 className="font-bold text-blue-800 mb-1">● {item.route}</h4>
                <p className="text-xs text-gray-500 pl-4">{item.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-100 p-6 rounded-xl text-center">
            <p className="text-lg font-bold">
              Book easily via call, WhatsApp, or online and enjoy a smooth ride with experienced highway drivers.
            </p>
          </div>
        </section>
{/* SECTION: EVENTS & GROUP TRAVEL */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-blue-500 pb-2 uppercase tracking-tighter">
            Luxury Tempo Traveller Hire in Ahmedabad for Events & Group Travel
          </h2>
          <p className="mb-8 text-lg">
            Need a tempo traveller for <strong>Events in Ahmedabad</strong> or corporate transportation? We specialize in luxury group travel solutions for weddings, conferences, exhibitions, factory visits, and destination events.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-xl mb-6">Why customers trust us:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Luxury & Maharaja tempo travellers for weddings</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Punctual pickups with uniformed drivers</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Flexible hourly, daily, and multi-day packages</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">●</span>
                <span><strong>Easy coordination for multiple vehicles</strong></span>
              </li>
            </ul>
            <p className="mt-8 font-semibold text-blue-900">
              Your event deserves premium travel — and our luxury tempo traveller in Ahmedabad ensures guests arrive comfortably and on time.
            </p>
          </div>
        </section>

        {/* SECTION: TRANSPARENT PRICING */}
        <section className="mb-16">
          <h2 className="text-2xl font-black mb-6 text-gray-900 uppercase">
            Transparent Tempo Traveller Price in Ahmedabad
          </h2>
          <p className="mb-8">
            Our tempo traveller price in Ahmedabad is simple, honest, and competitive. Charges depend on vehicle type, trip distance, and duration — with zero hidden costs.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-xl mb-8">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 border-b font-bold uppercase text-xs tracking-widest">Vehicle Type</th>
                  <th className="p-4 border-b font-bold uppercase text-xs tracking-widest">Typical Rates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4"><strong>9-seater</strong></td>
                  <td className="p-4 text-blue-600 font-bold">₹22/km</td>
                </tr>
                <tr>
                  <td className="p-4"><strong>12 seater tempo traveller fare in Ahmedabad</strong></td>
                  <td className="p-4 text-blue-600 font-bold">₹23–₹25/km</td>
                </tr>
                <tr>
                  <td className="p-4"><strong>16-seater (Urbania)</strong></td>
                  <td className="p-4 text-blue-600 font-bold">₹26–₹28/km</td>
                </tr>
                <tr>
                  <td className="p-4"><strong>20-seater</strong></td>
                  <td className="p-4 text-blue-600 font-bold">₹30/km</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700">
            Toll, parking, and driver allowance are informed upfront. We also offer customized packages for families, corporates, schools, and travel agents.
          </p>
          
          <div className="mt-10 bg-blue-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Book Your Tempo Traveller in Ahmedabad Today</h3>
            <p className="mb-6">Travel with Yatra Travel India for a safe, comfortable, and affordable group journey. Whether it’s a family trip, wedding transport, corporate tour, or pilgrimage, we make every ride smooth and memorable.</p>
            <p className="text-xl font-black uppercase">Call / WhatsApp now for instant booking & best price: 9044019511</p>
          </div>
        </section>

        {/* SECTION: WHY CHOOSE US - 12 POINTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center uppercase">
            Why Choose Yatra Travel India for Your Tempo Traveller in Ahmedabad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Specialists in Tempo Traveller Rental</h4>
              <p className="text-sm">At Yatra Travel India, we focus exclusively on <strong>tempo traveller hire in Ahmedabad</strong> for families, corporate teams, wedding groups, tourists, and event travelers. With years of experience in handling group transportation, we understand what makes a journey comfortable, safe, and smooth.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Comfort, Safety & Best Value Assured</h4>
              <p className="text-sm">If you are searching for a reliable and affordable tempo traveller in Ahmedabad, you’re in the right place. We offer dependable <strong>tempo traveller rental in Ahmedabad</strong>, easy <strong>tempo traveller booking in Ahmedabad</strong>, and well maintained vehicles that deliver excellent comfort and safety at competitive prices.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Large Fleet for Every Group Size</h4>
              <p className="text-sm">Choose from a wide selection of <strong>9, 12, 15, 17, and 20-seater AC tempo travellers</strong>, along with <strong>12 seater tempo traveller Ahmedabad</strong> and <strong>luxury tempo traveller Ahmedabad</strong> options. No matter if it’s a short city trip or a long outstation journey, we have the right vehicle for your needs.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Trusted Outstation Tempo Traveller Service</h4>
              <p className="text-sm">Planning an outstation trip from Ahmedabad? Our <strong>tempo traveller for outstation Ahmedabad</strong> service covers major routes such as Ahmedabad to Jaipur, Udaipur, Mount Abu, and Somnath. Expect safe driving, clean vehicles, and on-time departures.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Honest & Transparent Pricing</h4>
              <p className="text-sm">We provide clear <strong>tempo traveller rates in Ahmedabad</strong> with no hidden costs. Whether you need a <strong>12 seater tempo traveller fare in Ahmedabad</strong> or pricing for larger vehicles, all details are shared upfront so you can plan confidently.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Simple Booking & Quick Assistance</h4>
              <p className="text-sm">Book your tempo traveller via phone call, WhatsApp, or online in minutes. Our support team is available 24/7 to help with bookings, changes, or queries.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Customer-Focused Service</h4>
              <p className="text-sm">Your satisfaction is our top priority. From neat AC interiors and comfortable seats to punctual pickups and responsive support, we make sure every trip is pleasant.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">One Stop Solution for All Travel Needs</h4>
              <p className="text-sm">From <strong>12 seater tempo traveller Ahmedabad</strong> to luxury models and large 17, 20, or 45+ seater buses, we provide vehicles for family trips, corporate travel, weddings, group tours, and VIP movement.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Skilled & Background-Verified Drivers</h4>
              <p className="text-sm">Our drivers are experienced, polite, and familiar with city roads and highways. Whether local travel or long-distance routes, you can expect a safe and smooth ride.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Superior Comfort & Premium Feel</h4>
              <p className="text-sm">All vehicles come with air-conditioning, spacious seating, and <strong>reclining pushback seats</strong> for relaxed long-distance travel.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Flexible Packages</h4>
              <p className="text-sm">Choose from local, outstation, airport transfer, hourly, daily, or multi-day rental plans as per your requirement.</p>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <h4 className="font-bold text-blue-600 mb-2">Trusted by Many Happy Clients</h4>
              <p className="text-sm">Hundreds of customers rely on us for consistent quality, punctual service, and comfortable journeys.</p>
            </div>
          </div>
        </section>

        {/* SECTION: POPULAR ROUTES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 border-b-2 border-blue-500 pb-2 uppercase tracking-tighter">
            Popular Tempo Traveller Routes from Ahmedabad
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Surat Tempo Traveller</h3>
              <p className="text-sm">
                Travel comfortably with our tempo traveller from Ahmedabad to Surat, perfect for business 
                trips, family travel, and weekend plans. Choose an <strong>AC tempo traveller in Ahmedabad</strong> or a 
                <strong>luxury tempo traveller hire in Ahmedabad</strong> and enjoy a smooth and relaxed journey.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Rajkot Tempo Traveller Hire</h3>
              <p className="text-sm">
                Book a reliable <strong>tempo traveller Ahmedabad to Rajkot</strong> for sightseeing, leisure travel, and 
                corporate tours. Our vehicles offer spacious seating, clean interiors, and professional drivers 
                for a stress free trip.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Bhavnagar Tempo Traveller Service</h3>
              <p className="text-sm">
                For short outstation trips and family visits, our tempo traveller from Ahmedabad to 
                Bhavnagar is a great choice. We provide <strong>12 seater tempo traveller Ahmedabad</strong> and larger 
                vehicles with comfortable pushback seats and AC.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Mount Abu Tempo Traveller</h3>
              <p className="text-sm">
                Planning a hill station trip? Our <strong>tempo traveller Ahmedabad to Mount Abu</strong> is ideal for 
                weekend getaways, long-distance travel, and spiritual journeys. Enjoy safe travel with 
                experienced drivers and well-maintained AC vehicles.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Somnath / Diu Tempo Traveller</h3>
              <p className="text-sm">
                Choose our <strong>tempo traveller hire Ahmedabad to Somnath</strong> or <strong>tempo traveller Ahmedabad to 
                Diu</strong> for pilgrimage tours and family trips. We ensure comfortable seating, reliable service, 
                and a pleasant travel experience.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-xl text-blue-800 mb-3">Ahmedabad to Dwarka Tempo Traveller Booking</h3>
              <p className="text-sm">
                For religious tours and group travel, book our tempo traveller from Ahmedabad to Dwarka. 
                Travel in comfort with our <strong>luxury tempo traveller Ahmedabad</strong> and make your journey 
                peaceful.
              </p>
            </div>

            <div className="md:col-span-2 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold text-xl text-blue-900 mb-3">Ahmedabad Airport Tempo Traveller Transfer</h3>
              <p className="text-sm text-blue-800">
                Need group airport transport? Our <strong>tempo traveller hire in Ahmedabad for airport transfers</strong> is 
                perfect for families, corporate guests, and VIP travelers. Get on-time pickup, clean vehicles, 
                and a smooth ride.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section className="mb-16 bg-gray-900 text-white p-8 md:p-12 rounded-3xl">
          <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Frequently Asked Questions – Tempo Traveller Rentals in Ahmedabad</h2>
          <p className="mb-10 text-gray-400 text-sm italic">FAQs – Tempo Traveller Hire in Ahmedabad</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q1. Who offers the cheapest tempo traveller in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2"><strong>Yatra Travel India</strong> is known for providing affordable tempo traveller hire in Ahmedabad with clean vehicles, experienced drivers, and transparent pricing.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q2. What is included in tempo traveller rental in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Our <strong>tempo traveller rental Ahmedabad</strong> includes AC vehicle, driver, fuel, and basic amenities. Toll, parking, and state taxes are shared clearly before booking.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q3. Can I book a 12 seater tempo traveller in Ahmedabad online?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, you can easily book a <strong>12 seater tempo traveller Ahmedabad</strong> through call, WhatsApp, or online booking.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q4. Do you provide luxury tempo traveller in Ahmedabad for weddings?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we offer <strong>luxury tempo traveller Ahmedabad</strong> and Maharaja tempo traveller for wedding guests and VIP travel.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q5. Is tempo traveller available for outstation from Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we provide <strong>tempo traveller for outstation Ahmedabad</strong> to Jaipur, Udaipur, Mount Abu, Somnath, Dwarka, Surat, Rajkot, and more.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q6. What is the price of tempo traveller in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">The <strong>tempo traveller price Ahmedabad</strong> starts from ₹20–₹25 per km for a 12-seater, depending on route and duration.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q7. Can I hire tempo traveller in Ahmedabad for airport transfer?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we provide <strong>tempo traveller hire in Ahmedabad for airport pickup and drop</strong>.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q8. Do you offer tempo traveller with driver in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, all bookings include <strong>tempo traveller with driver in Ahmedabad</strong>.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q9. Is advance booking required for tempo traveller Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Advance booking is recommended, especially on weekends and peak seasons.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q10. Do you provide tempo traveller for corporate travel in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we offer <strong>corporate tempo traveller rental in Ahmedabad</strong> for meetings, conferences, and office trips.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q11. Are AC tempo travellers available in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we provide <strong>AC tempo traveller Ahmedabad</strong> across all seating categories.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q12. Can I hire tempo traveller for local sightseeing in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, we offer <strong>tempo traveller for local sightseeing Ahmedabad</strong>.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q13. Do you provide Urbania tempo traveller in Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, <strong>Urbania tempo traveller Ahmedabad</strong> is available for premium group travel.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q14. Are your tempo travellers clean and well maintained?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, all our vehicles are regularly serviced and sanitized.</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <p className="font-bold text-blue-400 text-sm">Q15. Do you offer one-way tempo traveller from Ahmedabad?</p>
              <p className="text-gray-300 text-xs mt-2">Yes, <strong>one-way tempo traveller hire Ahmedabad</strong> is available.</p>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <section className="bg-gray-100 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Tempo Traveller Services Across Major Cities</h2>
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Hey, Yatra Travel India's Tempo Traveller rentals aren't just one spot wonders—we've 
            got you covered in key cities like Gurugram, Delhi, Chandigarh, Shimla, 
            Dehradun, Haridwar, and even Mumbai. From 9-seater cozy rides to 26-seater group 
            haulers, we're talking AC comfort, pushback seats, and pro drivers for local city runs, 
            airport shuttles, weddings, or outstation adventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs uppercase tracking-widest font-bold">
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-gurgaon" className="text-blue-700 hover:text-black transition-colors">● Gurugram Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="text-blue-700 hover:text-black transition-colors">● Delhi Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-chandigarh" className="text-blue-700 hover:text-black transition-colors">● Chandigarh Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-shimla" className="text-blue-700 hover:text-black transition-colors">● Shimla Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-dehradun" className="text-blue-700 hover:text-black transition-colors">● Dehradun Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-haridwar" className="text-blue-700 hover:text-black transition-colors">● Haridwar Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-mumbai" className="text-blue-700 hover:text-black transition-colors">● Mumbai Tempo Traveller:</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AhmedabadPage;