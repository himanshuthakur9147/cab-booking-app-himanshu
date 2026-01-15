import React from 'react'
import TempoImageCards from './TempoImageCards'
import TempoSeatConfig from './TempoSeatConfig'

function PatnaPage() {
  return (
    <div>
        
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-14 space-y-14">

      {/* CITY INTRO */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">
          Patna – The Developing City of Bihar | Yatra Travel India
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Patna, the capital city of Bihar, is rapidly emerging as a hub of business, education, and
          culture in eastern India. With its strategic location along the Ganga River, Patna has
          become a center for trade, tourism, and modern infrastructure development. As the city
          expands, it blends historical heritage with new-age urbanization, making it a prime
          destination for business travelers, tourists, and investors alike
        </p>

        <p className="text-gray-700 leading-relaxed">
          Patna is connected via Jay Prakash Narayan International Airport, Patna Junction, and
          an expanding road network including NH30, NH31, and NH922, providing seamless
          connectivity to major cities like Delhi, Kolkata, and Ranchi. With the development of
          flyovers, metro projects, and expressways, commuting within Patna is becoming more
          convenient for residents and travelers.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Patna’s strategic location in Bihar makes it ideal for corporate travel, group tours, and
          logistics operations. Services like tempo traveller hire in Patna, corporate taxi
          services, and outstation cab rentals are seeing increasing demand, highlighting the city’s
          growing role as a commercial and travel hub.
        </p>
      </div>

      {/* PLACES TO VISIT */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Top Places to Visit in Patna – Explore Bihar’s Historic Capital
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Patna, the thriving capital of Bihar, is a city where history, culture, and modern
          development meet. For travelers, families, and corporate visitors, Patna offers a variety
          of attractions ranging from ancient monuments to spiritual sites and vibrant markets.
          Here’s a curated list of must-visit places in Patna for a memorable experience.
        </p>

        <div className="grid md:grid-cols-2  gap-6">

          {[
            {
              title: "1. Golghar – The Iconic Granary of Patna",
              text: "Built in 1786 by the British, Golghar is a massive granary overlooking the Ganga River. Visitors can climb the spiral steps to enjoy panoramic views of Patna city and the riverfront, making it one of the most Instagram-worthy spots in Patna."
            },
            {
              title: "2. Patna Museum – Journey Through History",
              text: "The Patna Museum is a treasure trove of Bihar’s rich heritage. Housing ancient sculptures, Buddhist artifacts, miniature paintings, and Mughal-era relics, this museum is perfect for history enthusiasts and school groups visiting Patna."
            },
            {
              title: "3. Mahavir Mandir – Spiritual Hub in Patna",
              text: "One of the most visited temples in Bihar, Mahavir Mandir is dedicated to Lord Hanuman. It attracts thousands of devotees daily and is a key stop for those seeking spiritual experiences in Patna."
            },
            {
              title: "4. Ganga Ghat – Riverside Serenity",
              text: "The Ghats along the Ganga River in Patna are ideal for morning walks, boat rides, and witnessing the evening aarti. The riverfront provides a peaceful break from city life and is a favorite among tourists and locals alike."
            },
            {
              title: "5. Patliputra – Ancient City Ruins",
              text: "Explore the remnants of Pataliputra, the ancient city that once served as the capital of Magadh Empire. Archaeological sites and nearby museums bring Patna’s glorious history to life."
            },
            {
              title: "6. Sanjay Gandhi Biological Park – Family-Friendly Attraction",
              text: "Also known as Patna Zoo, the park is a popular destination for families. It features a wide range of wildlife, botanical gardens, and picnic areas, making it ideal for group travel in Patna."
            },
            {
              title: "7. Pataliputra Archaeological Museum",
              text: "For history buffs, this museum showcases artifacts from the Mauryan and Gupta periods. It is a unique insight into Patna’s ancient civilization and rich cultural legacy."
            },
            {
              title: "8. Takht Sri Patna Sahib – Sikh Pilgrimage Site",
              text: "One of the most important Sikh religious sites, it is the birthplace of Guru Gobind Singh Ji. Pilgrims and tourists visit Patna Sahib to experience the spiritual and architectural beauty of this sacred site."
            },
            {
              title: "9. Bihar Museum – Modern Art & Culture",
              text: "A modern addition to Patna’s cultural scene, Bihar Museum exhibits contemporary art, traditional crafts, and interactive displays. It is an educational spot for students and travelers exploring Patna."
            },
            {
              title: "10. Weekend Trips from Patna",
              text: "For weekend travelers, nearby destinations like Rajgir, Nalanda, Vaishali, and Bodh Gaya offer historical, spiritual, and scenic experiences. Patna serves as the perfect base for these short getaways."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

 <section className="max-w-7xl mx-auto px-4 md:px-12 py-14 space-y-16">

      {/* INTRO */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">
          Patna Group Travel Guide – Yatra Travel India
        </h1>

        <p className="text-gray-700 leading-relaxed">
          Planning group travel in Patna can be both exciting and challenging. Whether it’s a
          corporate outing, school excursion, wedding transport, or pilgrimage tour, moving a
          large group around Patna requires reliable, comfortable, and affordable transport. At
          Yatra Travel India, we specialize in providing tempo travellers, mini buses, and luxury
          coaches for group travel in Patna and nearby regions.
        </p>
      </div>

      {/* WHY GROUP TRAVEL IS SPECIAL */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">
          Why Group Travel in Patna is Special
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Patna is more than just a city; it’s a hub of historical landmarks, spiritual destinations,
          and cultural attractions. Group travel here often includes:
        </p>

        <div className="bg-gray-50 border rounded-2xl p-6 space-y-2">
          <p>● Corporate tours to Patna’s business centers and offices</p>
          <p>● School and college trips to educational and historical sites</p>
          <p>● Wedding guest transport for large families and guests</p>
          <p>● Pilgrimage tours to Takht Sri Patna Sahib, Mahavir Mandir, and the Triveni Sangam</p>
          <p>● Weekend excursions to Rajgir, Nalanda, Bodh Gaya, and Vaishali</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          With busy traffic zones, narrow city lanes, and peak-hour congestion on Ashok
          Rajpath and Bailey Road, coordinating group transport in Patna requires experienced
          drivers and well-maintained vehicles.
        </p>
      </div>

      {/* COMFORT SECTION */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Patna Comfortably with Yatra Travel India
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Traveling across Patna for group outings, corporate trips, weddings, or educational
          tours is now easier and more comfortable with Yatra Travel India’s Patna tempo
          traveller service. Whether you’re navigating the busy streets of Patna city, heading to
          Patna Airport, or planning a weekend getaway to Rajgir, Bodh Gaya, or Nalanda, our
          luxury and AC tempo travellers in Patna ensure a safe, stress-free, and spacious ride
          for your group.
        </p>

        <p className="text-gray-700 leading-relaxed">
          With our fleet of 9, 12, 16, and 20-seater tempo travellers in Patna, you can travel with
          friends, family, or colleagues without worrying about crowded public transport or
          multiple car bookings. Every vehicle is well-maintained, equipped with reclining seats,
          ample luggage space, and professional, verified drivers familiar with Patna traffic
          zones and peak-hour congestion, including Frazer Road, Boring Road, Bailey Road,
          and Patna City areas.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From school and college trips to corporate offsites in Patna, Yatra Travel India
          provides affordable Patna tempo traveller hire that prioritizes your comfort, safety,
          and convenience.
        </p>
      </div>

      {/* WHY TEMPO TRAVELLER */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Why Patna Groups Prefer Tempo Travellers for Local & Outstation Trips
        </h2>

        <p className="text-gray-700 leading-relaxed">
          In Patna, group travel has unique challenges — congested roads, busy traffic zones like
          Boring Road, Bailey Road, Frazer Road, and narrow lanes in Patna City. That’s why
          local groups, corporate teams, school trips, and families prefer tempo travellers in
          Patna for both local sightseeing and outstation journeys.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "1. Spacious & Comfortable Travel:",
              text: "With 12-seater, 16-seater, and 20-seater tempo travellers in Patna, groups can travel together without the hassle of booking multiple cars. Every ride ensures ample legroom, reclining seats, and luggage space, perfect for long drives to Rajgir, Nalanda, Bodh Gaya, or Vaishali."
            },
            {
              title: "2. Reliable & Experienced Drivers:",
              text: "Our Patna tempo traveller services come with professional, verified drivers who know local traffic patterns, peak-hour congestion, and shortcuts across Patna and NCR-connected areas. This ensures punctual pickups for corporate meetings, school excursions, and religious tours."
            },
            {
              title: "3. Cost-Effective Group Travel:",
              text: "Booking a tempo traveller in Patna is far more economical than arranging multiple taxis or cars for large groups. Transparent tempo traveller fare in Patna per km makes budgeting simple for weddings, pilgrimages, or family trips."
            },
            {
              title: "4. Versatile for Local & Outstation Trips:",
              text: "Whether it’s airport transfers from Patna Airport, city tours to Gandhi Maidan and Patna Museum, or weekend trips to Rajgir, Bodh Gaya, or Nalanda, Patna groups choose tempo travellers for flexibility and comfort."
            },
            {
              title: "5. Safety & Convenience:",
              text: "Traveling in a single well-maintained tempo traveller in Patna reduces coordination hassles, ensures all passengers arrive together, and provides safety features like AC comfort, GPS navigation, and reliable driver assistance."
            },
            {
              title: "6. Perfect for Events & Special Occasions:",
              text: "From wedding guest transfers in Patna to corporate offsite tours and school outings, tempo traveller hire in Patna allows groups to travel on schedule, enjoy seamless coordination, and make every journey memorable."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>

     <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 space-y-16">

      {/* VEHICLE OPTIONS INTRO */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">
          Vehicle Options for Every Group Size in Patna
        </h2>

        <p className="text-gray-700 leading-relaxed">
          At Yatra Travel India, we offer a wide range of tempo travellers in Patna to suit every
          group size and travel need. Whether you are planning a family outing, corporate trip,
          school excursion, wedding guest transfer, or religious pilgrimage, we have the perfect
          vehicle to ensure comfort, safety, and convenience.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Hire a 20-seater Tempo Traveller in Patna from Yatra Travel India at affordable rates
          starting ₹20/km. Perfect for large group travel, airport transfers, and outstation trips,
          offering safe, luxurious, and budget-friendly group transport.”
        </p>
      </div>

      {/* VEHICLE LIST */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold text-blue-600">
          Our Patna Vehicle Options Include:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

          {[
            {
              title: "9-Seater Tempo Traveller in Patna",
              text: "Ideal for small family groups or corporate teams, these Patna tempo travellers offer spacious seating, air-conditioning, and ample luggage space, making them perfect for short city trips or airport transfers from Patna Airport."
            },
            {
              title: "12-Seater Tempo Traveller in Patna",
              text: "The most popular choice for medium-sized groups, this 12-seater tempo traveller in Patna is perfect for weddings, corporate tours, and local sightseeing. Its reclining seats, large interiors, and AC comfort make long-distance travel to Rajgir, Bodh Gaya, or Nalanda enjoyable."
            },
            {
              title: "16-Seater Tempo Traveller in Patna",
              text: "Designed for larger groups or school excursions, this 16-seater tempo traveller in Patna provides extra legroom, luggage capacity, and premium AC facilities. It is widely used for pilgrimage tours, weekend getaways, and group trips to Vaishali or nearby tourist spots."
            },
            {
              title: "20-Seater Tempo Traveller in Patna",
              text: "Our 20-seater tempo travellers in Patna are perfect for big family groups, wedding transfers, or corporate events. With ample seating, comfortable interiors, and professional drivers, this vehicle ensures safe and hassle-free travel across Patna and surrounding areas."
            },
            {
              title: "Luxury Tempo Travellers in Patna",
              text: "For those who want premium comfort and style, our luxury tempo traveller service in Patna comes with pushback seats, LED entertainment, AC cooling, and well-maintained interiors. Ideal for VIP transfers, wedding guests, and corporate executives."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                 {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
<TempoImageCards/>
<TempoSeatConfig city={"patna"}/>
      {/* WHY PREFER */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-blue-600">
          Why Patna Groups Prefer Our Tempo Travellers:
        </h3>

        <div className="bg-gray-50 border rounded-2xl p-6 space-y-2">
          <p>● All vehicles are well-maintained and undergo regular safety checks.</p>
          <p>● Verified, experienced drivers familiar with Patna traffic, NH30, Bailey Road, and Patna Airport routes.</p>
          <p>● Flexible booking options for one-way, round trips, or multi-day tours.</p>
          <p>● Affordable and transparent pricing tailored for local and outstation trips from Patna.</p>
        </div>

        <p className="text-gray-700 leading-relaxed">
          No matter the group size in Patna, Yatra Travel India’s tempo traveller rental service
          ensures a comfortable, reliable, and budget-friendly journey every time.
        </p>
      </div>

      {/* OUTSTATION ROUTES */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-600">
          Popular Outstation Routes from Patna – Yatra Travel India
        </h2>

        <p className="text-gray-700 leading-relaxed">
          For groups planning comfortable and hassle-free outstation trips from Patna, Yatra
          Travel India offers reliable tempo traveller rental services with spacious seating,
          professional drivers, and premium AC comfort. Whether it’s a family vacation,
          corporate tour, school excursion, wedding transfer, or religious pilgrimage, our Patna
          tempo travellers make every journey smooth and enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">

          {[
            ["Patna to Bodh Gaya", "Perfect for pilgrimage trips, school tours, and religious groups, our tempo traveller from Patna to Bodh Gaya ensures a safe, comfortable, and timely journey. Enjoy air-conditioned luxury, reclining seats, and ample luggage space."],
            ["Patna to Rajgir", "Ideal for family trips and heritage tours, the Patna to Rajgir tempo traveller service by Yatra Travel India guarantees reliable travel, professional drivers, and stress-free commuting."],
            ["Patna to Nalanda", "Whether visiting the Nalanda University ruins or cultural sites, our tempo travellers from Patna to Nalanda provide flexible travel schedules, one-way or round-trip options, and spacious interiors for groups."],
            ["Patna to Vaishali", "For historical tours, wedding groups, or corporate retreats, the Patna to Vaishali tempo traveller service offers comfortable seating, AC facilities, and verified drivers familiar with local traffic patterns."],
            ["Patna to Gaya Airport", "Need a reliable airport transfer from Patna to Gaya Airport? Our Patna tempo travellers are perfect for families, wedding guests, and corporate teams, ensuring punctual pickups and smooth travel."],
            ["Patna to Rajgir Hot Springs & Tourist Spots", "Plan a weekend getaway or group excursion with our Patna to Rajgir tourist route tempo travellers, offering luxury seating, safe journey, and flexible booking options."],
            ["Patna to Bhagalpur", "Perfect for extended family trips or corporate tours, our tempo traveller service from Patna to Bhagalpur ensures stress-free travel across Bihar with professional drivers and well-maintained vehicles."]
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {i + 1}. {item[0]}
              </h4>
              <p className="text-gray-700 leading-relaxed">
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>

    <div className="space-y-8 text-gray-800">

  {/* Section 1: Why Groups Prefer Yatra Travel */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-blue-600">Why Groups Prefer Yatra Travel India for Patna Outstation Trips</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>All vehicles equipped with AC, reclining seats, and ample luggage space.</li>
      <li>Experienced drivers familiar with NH31, NH22, Bailey Road, and local traffic hotspots in Patna.</li>
      <li>Flexible one-way, round-trip, and multi-day rental options.</li>
      <li>Affordable tempo traveller fares in Patna with transparent pricing and no hidden charges.</li>
      <li>Ideal for school trips, corporate tours, weddings, religious tours, and family outings.</li>
    </ul>
    <p>
      Book your Patna tempo traveller for outstation routes with Yatra Travel India today and experience safe, comfortable, and reliable group travel across Bihar and nearby states.
    </p>
  </section>

  {/* Section 2: Patna Airport Pickup & Drop */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-blue-600">Patna Airport Pickup & Drop Services – Yatra Travel India</h2>
    <p>
      Traveling to or from Jay Prakash Narayan Airport (Patna Airport) has never been easier for groups with Yatra Travel India’s tempo traveller services in Patna. Whether it’s a corporate team, wedding party, school group, or family outing, we provide comfortable, reliable, and timely airport transfers across Patna and the surrounding areas.
    </p>

    <h3 className="text-xl font-semibold">Why Choose Yatra for Patna Airport Transfers:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Punctual Airport Pickup & Drop: Ensuring your group arrives on time, even during peak traffic hours on Bailey Road, Ashok Rajpath, or NH31.</li>
      <li>Spacious & Comfortable Vehicles: 9, 12, 16, or 20-seater tempo travellers designed for group comfort, luggage space, and AC travel.</li>
      <li>Professional Verified Drivers: Familiar with Patna Airport routes, NH22, and NH31 traffic patterns for smooth and safe journeys.</li>
      <li>Flexible One-Way or Round-Trip Booking: Adaptable service for one-way airport drop or round-trip for outstation guests.</li>
      <li>Affordable & Transparent Pricing: Competitive rates with no hidden charges, ideal for group travel, corporate transfers, and wedding parties.</li>
    </ul>

    <h3 className="text-xl font-semibold">Popular Airport Pickup & Drop Routes in Patna:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Patna Airport to Bailey Road – ideal for corporate offices and hotels.</li>
      <li>Patna Airport to Patna City Railway Station – convenient for travelers connecting to trains.</li>
      <li>Patna Airport to Boring Road / Kankarbagh / Rajendra Nagar – perfect for families and business travelers.</li>
      <li>Patna Airport to Outstation Hotels & Resorts – seamless transfer for weekend getaways, religious tours, or wedding guests.</li>
    </ul>
    <p>
      With Yatra Travel India’s Patna airport tempo traveller services, you can avoid the hassle of multiple cars, navigate city traffic efficiently, and travel in comfort. Our group-friendly vehicles make Patna airport pickup and drop stress-free, whether for business, weddings, school trips, or religious pilgrimages.
    </p>
  </section>

  {/* Section 3: FAQs */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-blue-600">Frequently Asked Questions About Patna Tempo Traveller Rentals – Yatra Travel India</h2>

    <div className="space-y-3">
      <p><strong>Q1: What types of tempo travellers are available for rent in Patna?</strong></p>
      <p>Yatra Travel India offers 9, 12, 16, and 20-seater vehicles, luxury and standard options, perfect for family trips, corporate tours, school excursions, and wedding groups.</p>

      <p><strong>Q2: Can I hire a tempo traveller for religious tours in Patna?</strong></p>
      <p>Yes! Ideal for Triveni Sangam, Kumbh Mela, Magh Mela, and nearby temples. Spacious AC vehicles with experienced drivers for smooth travel.</p>

      <p><strong>Q3: Is it possible to book a Patna tempo traveller for corporate events?</strong></p>
      <p>Absolutely! Suitable for office outings, team offsites, and corporate meetings. Comfortable seating and luggage space for executives.</p>

      <p><strong>Q4: How do I plan an outstation trip from Patna with Yatra?</strong></p>
      <p>Book for Gaya, Bodh Gaya, Varanasi, Ranchi, and neighboring cities. Round trips, one-way travel, and customizable stopovers are available.</p>

      <p><strong>Q5: What precautions are taken for safe travel in Patna?</strong></p>
      <p>Verified drivers, well-maintained vehicles, GPS tracking, sanitized interiors, and knowledge of Patna traffic hotspots ensure safety.</p>

      <p><strong>Q6: Can I hire multiple tempo travellers in Patna for large groups?</strong></p>
      <p>Yes! School trips, wedding parties, or corporate delegations can have multiple coordinated vehicles with professional drivers.</p>

      <p><strong>Q7: Are airport transfers available for Patna’s Jay Prakash Narayan Airport?</strong></p>
      <p>Yes! Timely arrivals, spacious luggage areas, and experienced drivers familiar with city traffic, NH31, and Kankarbagh routes.</p>

      <p><strong>Q8: How is Patna tempo traveller fare calculated?</strong></p>
      <p>Fares depend on vehicle type, trip distance, duration, and passengers. Transparent pricing ensures no hidden charges.</p>

      <p><strong>Q9: Can the trip route in Patna be customized?</strong></p>
      <p>Yes! Customize itinerary, stopovers, sightseeing points, and multiple city pickups.</p>

      <p><strong>Q10: How soon should I book a tempo traveller in Patna?</strong></p>
      <p>Book 3–5 days in advance, especially during wedding season and festivals, to ensure preferred vehicles and drivers.</p>
    </div>
  </section>

</div>


    </section>
    </div>
  )
}

export default PatnaPage