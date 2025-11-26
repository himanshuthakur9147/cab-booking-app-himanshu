"use client";
import React from 'react'
import {whychoose} from './whychoose'

function WhyChooseVaranasi({city}) {

  const data= whychoose[city];
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 text-gray-800">
      
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#2482c2] text-center mb-6">
        Why Choose Yatra Travel India for Your Tempo Traveller in Varanasi?
      </h2>

      <p className="text-center leading-relaxed mb-10 md:mb-12 text-sm md:text-base">
        Choosing the right travel partner can make your entire trip smooth, comfortable, and memorable. 
        Yatra Travel India is trusted by thousands of families, tourists, and corporate groups for 
        Tempo Traveller hire in Varanasi, thanks to our commitment to quality service, transparent pricing, 
        and professional support. Here’s why we stand out:
      </p>

      <div className="space-y-8 md:space-y-10">

        {/* 1 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            1. Wide Range of Tempo Travellers (12 Seater, 16 Seater, 20 Seater & Luxury Vans)
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            We offer the most extensive fleet of Tempo Travellers in Varanasi, including:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>12 Seater AC Tempo Traveller</li>
            <li>16 Seater Tempo Traveller</li>
            <li>17 Seater AC / Non-AC models</li>
            <li>20 Seater Tempo Traveller</li>
            <li>Maharaja Luxury Tempo Traveller</li>
          </ul>
          <p className="leading-relaxed mt-2 text-sm md:text-base">
            No matter the size of your group, we have the perfect vehicle to meet your travel needs.
          </p>
        </div>

        {/* 2 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            2. Affordable & Transparent Pricing (No Hidden Charges)
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            Yatra Travel India is known for offering affordable Tempo Traveller hire in Varanasi 
            with complete pricing transparency. You get:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>Fixed per km rates</li>
            <li>Zero hidden charges</li>
            <li>Clear details on toll, parking, and state tax</li>
          </ul>
          <p className="leading-relaxed mt-2 text-sm md:text-base">
            We make sure you get full value for your money with our budget-friendly packages.
          </p>
        </div>

        {/* 3 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            3. Highly Experienced & Polite Drivers
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            Our drivers are experts in Varanasi roads, ghats, and pilgrimage routes. They are trained, 
            disciplined, and ensure safe, smooth travel for your entire group. Whether it’s a Varanasi 
            local sightseeing tour, Sarnath trip, or outstation travel, you’re in safe hands.
          </p>
        </div>

        {/* 4 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            4. Best for Pilgrimage Tours & Outstation Trips
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            Varanasi is a major spiritual destination, and we specialize in providing Tempo Travellers 
            for Kashi Darshan, including:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>Kashi Vishwanath Corridor</li>
            <li>Sarnath Tour</li>
            <li>Kaal Bhairav Temple</li>
            <li>Vindhyachal Mata Temple</li>
            <li>Prayagraj Triveni Sangam</li>
            <li>Ayodhya Ram Mandir</li>
          </ul>
          <p className="leading-relaxed mt-2 text-sm md:text-base">
            Our vehicles are comfortable and spacious, making them ideal for long journeys and 
            pilgrimage trips.
          </p>
        </div>

        {/* 5 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            5. On-Time Pickup & Round-the-Clock Support
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            We understand the importance of punctuality—especially for airport transfers, weddings, 
            and group tours. Yatra Travel India guarantees:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 mt-2 text-sm md:text-base">
            <li>Timely pickups from your hotel, home, or Varanasi Airport</li>
            <li>24/7 customer support</li>
            <li>Instant booking assistance on call/WhatsApp</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            6. Clean, Sanitized & Well-Maintained Vehicles
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            Your safety and comfort are our top priority. Every Tempo Traveller in Varanasi undergoes 
            regular maintenance and is:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 mt-2 text-sm md:text-base">
            <li>Deep-cleaned before each trip</li>
            <li>Equipped with AC, pushback seats & charging points</li>
            <li>Perfect for families, senior citizens & kids</li>
          </ul>
        </div>

        {/* 7 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            7. Perfect for Family Trips, Corporate Travel & Group Tours
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            Whether you're a family visiting Kashi, a corporate group attending an event, or tourists 
            exploring Uttar Pradesh, our Tempo Traveller service in Varanasi is tailored for every 
            purpose:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>Airport Transfers</li>
            <li>Corporate Conferences</li>
            <li>School/College Tours</li>
            <li>Marriage Functions</li>
            <li>Religious Pilgrimages</li>
            <li>Outstation Trips</li>
          </ul>
        </div>

        {/* 8 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            8. Easy Online Booking & Instant Confirmation
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            Booking your Tempo Traveller in Varanasi with us is simple and fast:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>Call or WhatsApp for quick quotes</li>
            <li>Fill out our online booking form</li>
            <li>Get instant confirmation</li>
          </ul>
        </div>

        {/* 9 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            9. Trusted by Thousands of Travelers Across India
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            With years of experience and positive customer feedback, Yatra Travel India has become 
            one of the most reliable travel partners for Tempo Traveller rental in Varanasi. We serve 
            customers across all major Indian cities and maintain a high service standard everywhere.
          </p>
        </div>

        {/* 10 */}
        <div className="p-5 md:p-8 bg-white rounded-3xl shadow-md border border-gray-100">
          <h3 className="text-xl md:text-2xl font-semibold text-[#2482c2] mb-3">
            10. Customized Travel Packages for Every Budget
          </h3>
          <p className="leading-relaxed mb-2 text-sm md:text-base">
            We design packages based on your needs—whether it’s:
          </p>
          <ul className="list-disc pl-5 md:pl-6 space-y-1 text-sm md:text-base">
            <li>A short local sightseeing trip</li>
            <li>A two-day pilgrimage tour</li>
            <li>A multi-city outstation journey</li>
          </ul>
          <p className="leading-relaxed mt-2 text-sm md:text-base">
            You get the best itinerary, the best vehicle, and the best rates—customized just for you.
          </p>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseVaranasi
