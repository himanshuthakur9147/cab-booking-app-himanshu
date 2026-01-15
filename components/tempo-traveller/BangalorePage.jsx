"use client";

import { FaMapMarkedAlt, FaCity, FaRoad } from "react-icons/fa";
import TempoImageCards from "./TempoImageCards";
import TempoSeatConfig from "./TempoSeatConfig";

export default function BangalorePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-14">
      
      {/* HERO INTRO */}
      <div className="space-y-6">
        <h1 className="text-4xl text-blue-500 md:text-5xl font-bold leading-tight">
          Hire a Tempo Traveller on Rent in Bangalore
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Bangalore is not a city where group travel is optional, it’s necessary.
          Between early-morning airport runs on Hosur Road, late-night IT drop-offs
          in Whitefield, wedding movements across South and North Bangalore, and
          weekend escapes choking NICE Road by Friday evening, moving people
          together requires planning, patience, and the right vehicle.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          As a Bangalore-based tempo traveller operator, we’ve spent years navigating
          the city’s real travel challenges—Outer Ring Road traffic peaks, Silk Board
          bottlenecks, early temple departures, and overnight highway drives. Our
          tempo traveller service in Bangalore is designed for how this city actually
          moves, not how it looks on a map.
        </p>
      </div>

      {/* EXPERIENCE BLOCK */}
      <div className="bg-gray-50 rounded-2xl p-8 space-y-5">
        <p className="text-gray-800 leading-relaxed text-lg">
          Whether you’re coordinating a corporate team pickup, a family pilgrimage,
          or a long-distance group tour, this guide explains how tempo traveller hire
          works in Bangalore—practically, transparently, and locally.
        </p>

        <p className="text-gray-800 leading-relaxed text-lg">
          At <strong>Yatra Travel India</strong>, we provide well-maintained luxury tempo
          travellers in Bangalore for families, corporate teams, wedding guests, and
          tourists—designed specifically for the city’s travel patterns and road
          conditions.
        </p>

        <p className="text-gray-800 leading-relaxed text-lg">
          As a Bangalore-based tempo traveller operator, Yatra Travel India has spent
          years navigating the city’s real travel challenges—Outer Ring Road traffic
          peaks, Silk Board bottlenecks, early temple departures, and overnight
          highway drives. Our tempo traveller service in Bangalore is built for how
          the city actually moves.
        </p>
      </div>

      {/* WHY DEMAND */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <FaCity className="text-blue-600 text-2xl" />
          <h2 className="text-blue-500 text-3xl font-bold">
            Why Tempo Traveller Demand Is High in Bangalore
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Bangalore is not a single-center city. Travel requirements differ across
          Whitefield, Electronic City, North Bangalore, and South Bangalore, making
          group taxi services inefficient for larger groups.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
          <li>• Growing IT and corporate offsite travel</li>
          <li>• Destination weddings and family functions</li>
          <li>• Airport group transfers from Kempegowda International Airport</li>
          <li>• Temple trips and South India tours</li>
          <li>• Weekend getaways to hill stations</li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Unlike multiple cabs, a tempo traveller on rent in Bangalore keeps everyone
          together, reduces cost, and ensures smooth coordination.
        </p>
      </div>

      {/* AREAS SERVED */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <FaMapMarkedAlt className="text-green-600 text-2xl" />
          <h2 className="text-blue-500 text-3xl font-bold">
            Areas We Serve in Bangalore
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Yatra Travel India offers tempo traveller service across all major Bangalore
          localities, covering residential, corporate, and airport zones.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AreaCard
            title="East Bangalore"
            places="Whitefield, ITPL, KR Puram, Hoodi, Mahadevapura"
          />
          <AreaCard
            title="South Bangalore"
            places="JP Nagar, Jayanagar, BTM Layout, Bannerghatta Road, Kanakapura Road"
          />
          <AreaCard
            title="Central Bangalore"
            places="Majestic, Malleshwaram, Rajajinagar, Basavanagudi"
          />
          <AreaCard
            title="North Bangalore"
            places="Hebbal, Yelahanka, Sahakar Nagar, Devanahalli"
          />
          <AreaCard
            title="IT Corridors"
            places="Outer Ring Road, Bellandur, Marathahalli, Sarjapur Road"
          />
        </div>

        <div className="flex items-start gap-3 bg-blue-50 p-6 rounded-xl">
          <FaRoad className="text-blue-700 text-xl mt-1" />
          <p className="text-gray-800 leading-relaxed">
            Our route planning accounts for ORR traffic, Silk Board congestion, and
            peak-hour delays—a critical advantage when hiring a tempo traveller in
            Bangalore.
          </p>
        </div>
      </div>

{/* AIRPORT TEMPO TRAVELLER – BANGALORE */}
<section className="space-y-10 mt-14">
  <div className="space-y-4">
    <h2 className="text-blue-500 text-3xl font-bold">
      Airport Tempo Traveller Service in Bangalore (BLR Airport)
    </h2>

    <p>
      Kempegowda International Airport (BLR) is nearly 35–40 km from most city
      areas. For families, corporate delegations, or wedding groups, booking a
      tempo traveller for Bangalore airport pickup or drop is the most
      convenient option.
    </p>

    <p>
      With Yatra Travel India’s airport tempo traveller in Bangalore service,
      you get reliable, well-planned airport transportation designed for group
      travel comfort and punctuality.
    </p>

    <div className="bg-neutral-50 border rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-3">Airport services include:</h3>
      <ul className="list-disc list-inside space-y-1 text-neutral-700">
        <li>Early morning and late-night pickups</li>
        <li>Large luggage accommodation</li>
        <li>Flight-time-based scheduling</li>
        <li>Toll and parking-aware drivers</li>
      </ul>
    </div>

    <p>
      We offer fixed-price airport tempo traveller rentals in Bangalore,
      avoiding last-minute price changes and ensuring a stress-free arrival or
      departure experience.
    </p>
  </div>

  {/* BANGALORE SIGHTSEEING */}
  <div className="space-y-4">
    <h2 className="text-blue-500 text-3xl font-bold">
      Bangalore Sightseeing & Local Group Travel
    </h2>

    <p>
      At Yatra Travel India, tempo travellers are frequently booked for
      Bangalore city sightseeing and local group travel. Our services are ideal
      for families, tourists, corporate teams, and educational groups.
    </p>

    <div className="grid sm:grid-cols-2 gap-4 bg-neutral-50 border rounded-xl p-6">
      <ul className="list-disc list-inside space-y-1 text-neutral-700">
        <li>Lalbagh Botanical Garden</li>
        <li>ISKCON Temple, Rajajinagar</li>
        <li>Nandi Hills sunrise trips</li>
        <li>Bannerghatta Biological Park</li>
      </ul>
      <ul className="list-disc list-inside space-y-1 text-neutral-700">
        <li>Bull Temple & Basavanagudi temples</li>
      </ul>
    </div>

    <p>
      For city travel, we recommend hourly or full-day tempo traveller packages
      in Bangalore, which are more economical than per-km billing and ideal for
      relaxed sightseeing schedules.
    </p>
  </div>

  {/* POPULAR OUTSTATION ROUTES */}
  <div className="space-y-4">
    <h2 className="text-blue-500 text-3xl font-bold">
      Popular Outstation Routes from Bangalore
    </h2>

    <p>
      Bangalore is a major gateway to South India tourism. Yatra Travel India
      provides outstation tempo traveller rental from Bangalore for both short
      and long-distance trips, ensuring comfort on highways and hill routes.
    </p>

    <div className="bg-neutral-50 border rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-3">
        High-demand routes:
      </h3>
      <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-neutral-700">
        <li>Bangalore to Mysore tempo traveller</li>
        <li>Bangalore to Coorg tempo traveller</li>
        <li>Bangalore to Chikmagalur tempo traveller</li>
        <li>Bangalore to Ooty tempo traveller</li>
        <li>Bangalore to Tirupati tempo traveller</li>
        <li>Bangalore to Wayanad tempo traveller</li>
        <li>Bangalore to Hampi tempo traveller</li>
      </ul>
    </div>

    <p>
      We advise optimal departure times to avoid weekend traffic congestion on
      NICE Road, NH75, and NH48, helping groups save time and travel comfortably.
    </p>
  </div>
<TempoImageCards/>
<TempoSeatConfig city={"bangalore"}/>
  {/* WEEKEND & HOLIDAY TOURS */}
  <div className="space-y-4">
    <h2 className="text-blue-500 text-3xl font-bold">
      Outstation Tours from Bangalore – Weekend & Holiday Travel
    </h2>

    <p>
      Weekend and holiday travel from Bangalore is a major part of our service.
      Our tempo traveller rental services from Bangalore are designed for long
      journeys, scenic tours, and relaxed group departures.
    </p>

    <div className="bg-neutral-50 border rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-3">
        Popular outstation tours:
      </h3>
      <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-neutral-700">
        <li>Bangalore → Mysore – Royal city tours and family travel</li>
        <li>Bangalore → Coorg – Coffee plantations and hill stays</li>
        <li>Bangalore → Chikmagalur – Hills, waterfalls, and trekking</li>
        <li>Bangalore → Ooty / Coonoor – Western Ghats getaway</li>
        <li>Bangalore → Tirupati – Spiritual tour to Lord Balaji</li>
        <li>Bangalore → Wayanad – Green escapes and group treks</li>
        <li>Bangalore → Hampi – Cultural and heritage circuit</li>
      </ul>
    </div>

    <p>
      We guide you on the best departure times for weekend routes to beat
      bumper-to-bumper traffic on NICE Road and major NH routes — a significant
      value add for group planners and tour organizers.
    </p>
  </div>
</section>

{/* PRICING & USAGE */}
<section className="space-y-14 mt-16">

  {/* HOW PRICING WORKS */}
  <div className="space-y-5">
    <h2 className="text-blue-500 text-3xl font-bold">
      How Tempo Traveller Pricing Works in Bangalore
    </h2>

    <p>
      Tempo traveller pricing in Bangalore depends on the type of usage.
      Rates are structured to match city travel patterns, airport distances,
      and long-distance highway journeys.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">City Usage</h3>
        <p className="text-neutral-700">
          For local travel such as sightseeing or hourly booking, most
          operators use block-hour packages (for example, 8 hrs / 80 km).
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Hourly rates</li>
          <li>Full-day rentals</li>
        </ul>
      </div>

      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">Airport Transfers</h3>
        <p className="text-neutral-700">
          Airport transfers are priced on fixed slabs based on distance
          and vehicle size, with tolls and parking shared upfront.
        </p>
      </div>

      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">Outstation Trips</h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Per km charges</li>
          <li>Driver allowance</li>
          <li>Toll and parking fees</li>
          <li>Night charges (if applicable)</li>
          <li>Minimum km/day rules</li>
        </ul>
      </div>
    </div>

    <p>
      At Yatra Travel India, we provide transparent tempo traveller price
      estimates for Bangalore before booking, so there are no surprises
      at the end of your journey.
    </p>
  </div>

  {/* SEATING OPTIONS */}
  <div className="space-y-5">
    <h2 className="text-blue-500 text-3xl font-bold">
      Tempo Traveller Seating Options
    </h2>

    <p>
      Choosing the right vehicle depends on group size, luggage, and trip
      length. At Yatra Travel India, we offer multiple seating options to
      suit every travel plan.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <ul className="list-disc list-inside text-neutral-700 space-y-2 border rounded-xl p-6">
        <li>9-seater tempo traveller – Small families and airport runs</li>
        <li>12-seater tempo traveller – Medium group travel & temple tours</li>
        <li>15-seater tempo traveller – Large family travel</li>
        <li>16-seater Urbania tempo traveller – Long hauls and holiday tours</li>
        <li>17 / 20-seater tempo traveller – Big wedding parties & corporate fleets</li>
      </ul>

      <ul className="list-disc list-inside text-neutral-700 space-y-2 border rounded-xl p-6">
        <li>Fully air-conditioned vehicles</li>
        <li>Push-back / reclining seats</li>
        <li>Regularly serviced and zone-checked</li>
        <li>Experienced, verified chauffeurs</li>
      </ul>
    </div>

    <p>
      Whether it’s a luxury tempo traveller in Bangalore or a practical
      group mover, we match vehicle size to your exact travel plan.
    </p>
  </div>

  {/* EVENTS & TOURS */}
  <div className="space-y-6">
    <h2 className="text-blue-500 text-3xl font-bold">
      Rent a Bangalore Tempo Traveller with Yatra Travel India for Any Event or Tour
    </h2>

    <p>
      When your event involves group travel in Bangalore, comfort,
      punctuality, and reliability matter the most. Yatra Travel India
      offers well-maintained tempo travellers designed to handle every
      type of event—big or small—without stress.
    </p>

    <p>
      Our services are built around real Bangalore traffic conditions,
      timelines, and on-ground travel needs.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">Weddings & Family Functions</h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Wedding guest transportation</li>
          <li>Engagements, receptions, and temple visits</li>
          <li>Outstation wedding travel to Mysuru, Hassan, or Chikkamagaluru</li>
        </ul>
        <p className="text-neutral-700">
          Spacious seating and experienced drivers ensure timely,
          comfortable arrivals.
        </p>
      </div>

      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">Corporate Events & Office Travel</h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Team outings and offsites</li>
          <li>Client visits and conferences</li>
          <li>Employee transport for events</li>
        </ul>
        <p className="text-neutral-700">
          We understand corporate punctuality and provide disciplined,
          professional drivers.
        </p>
      </div>

      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">Airport Transfers (BLR)</h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Early morning and late-night drops</li>
          <li>Group arrivals at Kempegowda International Airport</li>
          <li>Corporate delegations and family travel</li>
        </ul>
        <p className="text-neutral-700">
          Routes planned considering Hebbal, Yelahanka, and Airport Road traffic.
        </p>
      </div>

      <div className="border rounded-xl p-6 space-y-3">
        <h3 className="font-semibold text-lg">
          School Trips, College Tours & Religious Groups
        </h3>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>School and college excursions</li>
          <li>Temple visits (Tirupati, Dharmasthala, Kukke Subramanya)</li>
          <li>Pilgrimage groups and senior citizens</li>
        </ul>
        <p className="text-neutral-700">
          Clean vehicles with route-experienced drivers ensure safety and comfort.
        </p>
      </div>
    </div>

    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">Weekend Getaways & Outstation Tours</h3>
      <ul className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-neutral-700">
        <li>Mysuru</li>
        <li>Coorg</li>
        <li>Ooty</li>
        <li>Wayanad</li>
        <li>Chikkamagaluru</li>
        <li>Hampi</li>
      </ul>
      <p className="text-neutral-700">
        Perfect for families, friends, trekking groups, and photography tours.
      </p>
    </div>
  </div>

</section>

<section className="mt-20 space-y-10">

  {/* SECTION INTRO */}
  <div className="max-w-4xl">
    <h2 className="text-blue-500 text-3xl font-bold mb-4">
      Why Hire a Tempo Traveller in Bangalore with Yatra Travel India
    </h2>
    <p className="text-neutral-700">
      If you’re planning group travel in Bangalore, choosing the right vehicle
      and service provider makes all the difference. Yatra Travel India is a
      trusted operator offering reliable, comfortable, and well-managed tempo
      traveller rental in Bangalore for every travel need—local, outstation,
      corporate, or personal.
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* 1 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        1. Trusted Tempo Traveller Rental Service in Bangalore
      </h3>
      <p className="text-neutral-700">
        Yatra Travel India is known for dependable tempo traveller hire in
        Bangalore with years of experience handling group travel across the
        city. From short city rides to long outstation journeys, we understand
        Bangalore’s traffic patterns, peak hours, and best routes.
      </p>
    </div>

    {/* 2 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        2. Wide Range of Tempo Travellers for Every Group Size
      </h3>
      <p className="text-neutral-700">
        Yatra Travel India offer multiple seating options to match different
        group requirements:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>9 Seater Tempo Traveller Bangalore</li>
        <li>12 Seater Tempo Traveller Bangalore</li>
        <li>16 Seater Tempo Traveller Bangalore (Urbania)</li>
        <li>20 Seater Tempo Traveller Bangalore</li>
      </ul>
      <p className="text-neutral-700">
        Whether it’s a family trip, wedding guests, or a corporate team,
        you’ll find the perfect vehicle.
      </p>
    </div>

    {/* 3 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        3. Comfortable & Fully AC Vehicles
      </h3>
      <p className="text-neutral-700">
        Our AC tempo travellers in Bangalore are designed for long hours on the road:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>Pushback & reclining seats</li>
        <li>Ample legroom and luggage space</li>
        <li>Clean interiors and smooth suspension</li>
      </ul>
      <p className="text-neutral-700">
        This makes our vehicles ideal for city travel, airport transfers,
        and outstation tours.
      </p>
    </div>

    {/* 4 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        4. Professional & Local Bangalore Drivers
      </h3>
      <p className="text-neutral-700">
        All our drivers are verified, trained, and familiar with:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>IT corridors like Whitefield, Electronic City, ORR</li>
        <li>Central areas like MG Road, Indiranagar, Jayanagar</li>
        <li>Highways connecting Mysuru, Chennai, Hyderabad, and Pune</li>
      </ul>
      <p className="text-neutral-700">
        This ensures safe, punctual, and stress-free travel every time.
      </p>
    </div>

    {/* 5 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        5. Reliable Airport Tempo Traveller Service
      </h3>
      <p className="text-neutral-700">
        Yatra Travel India provide dedicated tempo traveller airport transfers
        in Bangalore to and from Kempegowda International Airport (BLR).
      </p>
      <p className="text-neutral-700 font-medium">Perfect for:</p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>Group airport pickups and drops</li>
        <li>Corporate teams and VIP guests</li>
        <li>Early morning and late-night flights</li>
      </ul>
      <p className="text-neutral-700">
        We plan routes to avoid traffic delays via Hebbal and Airport Road.
      </p>
    </div>

    {/* 6 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        6. Ideal for Outstation Trips from Bangalore
      </h3>
      <p className="text-neutral-700">
        Our tempo traveller for outstation Bangalore service covers popular routes like:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>Bangalore to Mysuru</li>
        <li>Bangalore to Coorg</li>
        <li>Bangalore to Ooty</li>
        <li>Bangalore to Chikkamagaluru</li>
        <li>Bangalore to Tirupati</li>
      </ul>
      <p className="text-neutral-700">
        Perfect for weekend getaways, pilgrimages, and long-distance family travel.
      </p>
    </div>

    {/* 7 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        7. Transparent Tempo Traveller Pricing in Bangalore
      </h3>
      <p className="text-neutral-700">
        We follow clear and transparent pricing:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>No hidden charges</li>
        <li>Upfront fare breakup</li>
        <li>Fair tempo traveller price in Bangalore based on distance and vehicle type</li>
      </ul>
      <p className="text-neutral-700">
        You always know what you’re paying for.
      </p>
    </div>

    {/* 8 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        8. Easy Booking & 24/7 Support
      </h3>
      <p className="text-neutral-700">
        Booking a tempo traveller in Bangalore with Yatra Travel India is simple:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>Call or WhatsApp booking</li>
        <li>Quick confirmation</li>
        <li>Round-the-clock customer support</li>
      </ul>
      <p className="text-neutral-700">
        We assist you from booking to trip completion.
      </p>
    </div>

    {/* 9 */}
    <div className="border rounded-xl p-6 space-y-3 md:col-span-2">
      <h3 className="font-semibold text-lg">
        9. Perfect for Weddings, Corporate Events & Group Tours
      </h3>
      <p className="text-neutral-700">
        Our luxury tempo traveller Bangalore options are widely used for:
      </p>
      <ul className="list-disc list-inside text-neutral-700 grid sm:grid-cols-2 gap-y-1">
        <li>Wedding guest transportation</li>
        <li>Corporate events and team outings</li>
        <li>School and college trips</li>
        <li>Religious and pilgrimage tours</li>
      </ul>
      <p className="text-neutral-700">
        We manage single or multiple vehicle requirements with ease.
      </p>
    </div>

  </div>
</section>

<section className="mt-20 space-y-10">

  {/* SECTION TITLE */}
  <div className="max-w-4xl">
    <h2 className="text-blue-500 text-3xl font-bold mb-3">
      Frequently Asked Questions – Tempo Traveller in Bangalore
    </h2>
    <p className="text-neutral-600">
      Find clear answers to common questions about tempo traveller rental in Bangalore,
      pricing, airport transfers, outstation trips, and group travel services with
      Yatra Travel India.
    </p>
  </div>

  {/* FAQ GRID */}
  <div className=" space-y-6">

    {/* Q1 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q1. How can I book a tempo traveller in Bangalore with Yatra Travel India?
      </h3>
      <p className="text-neutral-700">
        Booking a tempo traveller in Bangalore with Yatra Travel India is simple.
        You can call or WhatsApp us directly and share your pickup location,
        destination, travel date, and group size. Our team will suggest the best
        option for tempo traveller hire in Bangalore and provide an instant quote
        with quick confirmation.
      </p>
    </div>

    {/* Q2 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q2. What seating options are available for tempo traveller rental in Bangalore?
      </h3>
      <p className="text-neutral-700">
        We offer multiple seating capacities to suit every group:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>9 seater tempo traveller Bangalore for small families</li>
        <li>12 seater tempo traveller Bangalore for weddings and trips</li>
        <li>16 seater tempo traveller Bangalore (Urbania) for corporate and outstation travel</li>
        <li>20 seater tempo traveller Bangalore for large groups</li>
      </ul>
      <p className="text-neutral-700">
        All vehicles are fully AC, spacious, and well maintained.
      </p>
    </div>

    {/* Q3 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q3. What is the tempo traveller price in Bangalore?
      </h3>
      <p className="text-neutral-700">
        The tempo traveller price in Bangalore depends on vehicle type, travel
        distance, and trip duration. Local and outstation rates are calculated
        per kilometer with clear details on driver allowance, tolls, and parking.
        Yatra Travel India follows transparent pricing with no hidden charges.
      </p>
    </div>

    {/* Q4 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q4. Do you provide tempo traveller service for Bangalore airport transfers?
      </h3>
      <p className="text-neutral-700">
        Yes, we provide reliable tempo traveller airport pickup and drop in
        Bangalore to and from Kempegowda International Airport (BLR). This service
        is ideal for families, corporate teams, wedding guests, and group travelers
        requiring timely and comfortable airport transfers.
      </p>
    </div>

    {/* Q5 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q5. Can I hire a tempo traveller from Bangalore for outstation trips?
      </h3>
      <p className="text-neutral-700">
        Absolutely. Our tempo traveller for outstation Bangalore covers popular
        routes such as Mysuru, Coorg, Ooty, Chikkamagaluru, Tirupati, and Chennai.
        These trips are perfect for weekend getaways, pilgrimages, corporate
        outings, and long-distance family travel.
      </p>
    </div>

    {/* Q6 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q6. Are your tempo travellers suitable for corporate and office travel in Bangalore?
      </h3>
      <p className="text-neutral-700">
        Yes. We regularly provide tempo traveller rental in Bangalore for corporate
        travel, including office outings, team events, airport transfers, and
        conferences. Our professional drivers and comfortable vehicles ensure
        punctual and smooth journeys across IT hubs like Whitefield, ORR, and
        Electronic City.
      </p>
    </div>

    {/* Q7 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q7. Is a tempo traveller in Bangalore suitable for weddings and family events?
      </h3>
      <p className="text-neutral-700">
        Definitely. Our tempo traveller for wedding in Bangalore is widely used
        for transporting guests comfortably and safely. From luxury seating to
        coordinated multiple vehicles, we ensure stress-free travel for weddings,
        functions, and family events.
      </p>
    </div>

    {/* Q8 */}
    <div className="border rounded-xl p-6 space-y-3">
      <h3 className="font-semibold text-lg">
        Q8. Why choose Yatra Travel India for tempo traveller hire in Bangalore?
      </h3>
      <p className="text-neutral-700">
        Yatra Travel India is a trusted local operator offering:
      </p>
      <ul className="list-disc list-inside text-neutral-700 space-y-1">
        <li>Well-maintained AC tempo travellers in Bangalore</li>
        <li>Experienced and verified drivers</li>
        <li>Flexible booking options</li>
        <li>Competitive pricing</li>
        <li>24/7 customer support</li>
      </ul>
      <p className="text-neutral-700">
        We focus on comfort, safety, and reliability for every trip.
      </p>
    </div>

  </div>
</section>


    </section>
  );
}

/* Small helper component */
function AreaCard({ title, places }) {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{places}</p>
    </div>
  );
}
