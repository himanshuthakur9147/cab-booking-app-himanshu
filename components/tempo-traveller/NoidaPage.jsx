import React from 'react';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';
import Link from 'next/link';

const NoidaPage = () => {
  const standardRates = [
    { seats: "9 Seater Tempo Traveller Noida", km: "22", bata: "500", features: "2x1 seating, ample luggage, basic luxury", bestFor: "Small families, airport transfers" },
    { seats: "12 Seater Tempo Traveller Noida", km: "23", bata: "500", features: "Extra legroom, music system", bestFor: "Family trips to Greater Noida" },
    { seats: "16 Seater Tempo Traveller Noida", km: "26", bata: "600", features: "2x2 layout, optional TV, spacious aisle", bestFor: "Corporate groups, local tours" },
    { seats: "18 Seater Tempo Traveller Noida", km: "27", bata: "600", features: "Pushback seats, good for events", bestFor: "Weddings, mid-size outings" },
    { seats: "20 Seater Tempo Traveller Noida", km: "28", bata: "600", features: "Maharaja 1x1 option, premium upholstery", bestFor: "Large families, outstation" },
    { seats: "24 Seater Tempo Traveller Noida", km: "30", bata: "700", features: "Max capacity, 2x1 sleeper berths", bestFor: "Big groups, long trips" }
  ];

  const features = [
    { title: "Maharaja Pushback Seats", desc: "Experience Maharaja pushback seats in Tempo Traveller Noida—reclining like business class for long outstation trips Noida to Jaipur or Haridwar. Airline comfort eases Noida-Delhi highway fatigue with plush 1x1 or 2x1 layouts." },
    { title: "Individual AC Vents Per Seat", desc: "Stay chill with individual AC vents every seat—vital for Noida summer heat during Sector 62 office commutes or Greater Noida Film City tours. Powerful cooling beats Delhi-NCR humidity for group travel." },
    { title: "Free WiFi + LED TV", desc: "Free WiFi + LED TV powers corporate productivity or kids' movies on Sector 18 mall trips. Stream work emails during Noida to Meerut trips or binge Bollywood on wedding pickups in Noida Extension." },
    { title: "Huge Luggage Boot Space", desc: "Swallows corporate bags from Sector 62, shopping hauls from Great India Place, or baraati gear for Sector 50 wedding transport. Overhead racks + massive rear storage fit Agra group packages effortlessly." },
    { title: "Daily Sanitized Vehicles", desc: "Guarantees cleanest vehicles post-COVID—disinfected seats, AC filters, and surfaces for safe family trips in Noida Extension or office mixed Sector 16/15 service. Hygienic rides build trust." }
  ];

  const faqs = [
    { q: "What are Tempo Traveller rates in Noida?", a: "₹22/km for 9-seater, ₹28/km 20-seater Maharaja (250 km min + ₹500 driver). Local 80 km/8 hrs: ₹4,500+." },
    { q: "Doorstep pickup in Sector 62, 18, 50 available?", a: "Yes, Sector 62 Tempo Traveller for HCL TCS Adobe, Sector 18 mall shopping, and Sector 50 offices—free pickup in all sectors." },
    { q: "Luxury features at the cheapest rates?", a: "Maharaja pushback seats, per-seat AC vents, free WiFi + LED TV, huge boot, and daily sanitized vehicles are standard." },
    { q: "Noida to Greater Noida one-way fare?", a: "₹1,500-3,000 for 12-20 seaters. Quick Greater Noida Film City/Expo Mart drops." },
    { q: "Outstation to Agra Taj Mahal package?", a: "Noida to Agra Tempo Traveller: ₹15,000-20,000 full day (200 km). Includes Taj + Fatehpur Sikri." },
    { q: "Corporate shuttles for HCL, TCS, Adobe Sector 62?", a: "Daily/weekly corporate Tempo Traveller Noida—doorstep from IT parks with flexible timings." },
    { q: "Wedding pickups Noida Extension societies?", a: "Baraat Tempo Traveller for Gaur City, Cherry County; huge luggage space for Noida Extension wedding transport." },
    { q: "Overnight Haridwar Rishikesh from Noida?", a: "Yes, Noida to Haridwar Tempo Traveller ₹18,000+ overnight with Ganga Aarti stops." },
    { q: "Child seats, AC working in Noida summer?", a: "Individual AC vents beat the heat; child seats available on request. Noida summer-proof Tempo Traveller." },
    { q: "Cancellation policy for Sector 18 bookings?", a: "Free up to 24 hrs prior; flexible cancellations—Tempo Traveller Noida T&C apply." },
    { q: "Vehicles insured? GPS tracking?", a: "Full insurance, GPS safety, ABS brakes, and first-aid kits are standard for Tempo Traveller Noida." },
    { q: "Sector 16/15 office-residential mixed service?", a: "Sector 50/16/15 Tempo Traveller covers hybrid worker commutes, schools, and hospitals." },
    { q: "Mall shopping Great India Place groups?", a: "Sector 18 Tempo Traveller is perfect for Great India Place shopping and Logix Mall hauls." },
    { q: "Booking process?", a: "WhatsApp/Call +91-9044019511 → Choose 9/12/20 seater Maharaja → Sector-wise pickup confirmation. 3 mins instant quotes." }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 antialiased py-12 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* NOIDA INTRO SECTION */}
        <header className="mb-12 border-b border-gray-100 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Tempo Traveller on Rent in Noida
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-700 leading-relaxed">
            <p>
              Noida is the fastest growing business hub in Delhi NCR, perfect for meetings, conferences, IT parks, and 
              corporate events. <span className="text-blue-600 underline">Tempo traveller Noida</span> offers the best solution for quick travel between offices, airport 
              transfers, or outstation trips. <span className="text-blue-600 underline text-bold font-semibold">Hire a tempo traveller in Noida</span> easily with Yatra Travel India — your trusted 
              partner for <span className="text-blue-600 underline">luxury tempo traveller Noida</span> at affordable rates.
            </p>
            <p>
              Whether exploring Noida malls, adventure parks, or heading to Delhi Film City, <span className="text-blue-600 underline">tempo traveller booking in Noida</span> is perfect for groups. Our <span className="text-blue-600 underline font-semibold">tempo traveller on rent in Noida</span> provides comfortable, AC-equipped 
              vehicles driven by professional chauffeurs.
            </p>
          </div>
          <div className="mt-8 p-4 bg-gray-50 border-l-4 border-gray-900 text-sm">
            For 9-12 people groups, hire a **12 seater tempo traveller in Noida** with luxury pushback seats, WiFi, and per km pricing. Flexible half day or full day packages ensure maximum comfort. For college industrial visits or office outings, **14-16 seater tempo traveller in Noida** works perfectly.
          </div>
        </header>

        {/* PRICING TABLE SECTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tempo Traveller Noida – Cheapest Rates Sector 62, 18, Greater Noida (2026)</h2>
          <p className="text-gray-600 mb-8 max-w-4xl">
            Get the cheapest tempo traveller Noida rates from Yatra Travel India! Best <span className="text-blue-600 underline">luxury tempo traveller Noida</span> for 
            Sector 62 IT parks, Sector 18 shopping, Greater Noida Film City. Fixed <span className="text-blue-600 underline">tempo traveller fare per km in Noida</span> starting Rs 22/km for <span className="text-blue-600 underline">hire tempo traveller in Noida</span>.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                  <th className="p-4">Seater Type</th>
                  <th className="p-4">Per Km Rate (₹)</th>
                  <th className="p-4">Driver Bata (₹/Day)</th>
                  <th className="p-4">Key Features</th>
                  <th className="p-4">Best For</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {standardRates.map((rate, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{rate.seats}</td>
                    <td className="p-4 font-bold text-blue-700">{rate.km}/km</td>
                    <td className="p-4">{rate.bata}</td>
                    <td className="p-4 text-xs text-gray-500">{rate.features}</td>
                    <td className="p-4 font-medium text-gray-700">{rate.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

<TempoImageCards/>
<TempoSeatConfig city={"noida"}/>

        {/* MAHARAJA LUXURY SECTION */}
        <section className="mb-16 bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 border-b-2 border-blue-200 pb-2 inline-block">Maharaja Tempo Traveller in Noida</h2>
          <p className="text-gray-700 mb-8">
            Enjoy royal luxury with Maharaja pushback seats <span className="font-bold">Tempo Traveller Noida</span>, the ultimate upgrade for 
            Sector 62, Sector 18, and Greater Noida group travel. These premium 9-20 seater Maharaja Tempo 
            Traveller rentals feature 1x1 reclining Maharaja seats like airline business class—perfect for long 
            outstation trips Noida to Agra Taj Mahal, corporate shuttles (HCL, TCS, Adobe), or Sector 18 Great 
            India Place shopping. 
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Pricing & Fleet</h4>
              <ul className="text-sm space-y-3">
                <li className="border-b border-blue-100 pb-2"><strong>● 9-Seater Maharaja TT Noida:</strong> ₹25/km, 1x1 pushback, ideal Noida to Delhi airport transfers.</li>
                <li className="border-b border-blue-100 pb-2"><strong>● 12-Seater Maharaja:</strong> ₹26/km, extra legroom, sofa beds for corporate or weddings.</li>
                <li className="border-b border-blue-100 pb-2"><strong>● 15-16 Seater Maharaja:</strong> ₹28-30/km, spacious 2x1 seating for office-residential service.</li>
                <li className="border-b border-blue-100 pb-2"><strong>● 20-Seater Maharaja Luxury:</strong> ₹35/km, premium upholstery for Greater Noida Film City tours.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-4 text-center">Noida Summer-Proof Features</h4>
              <ul className="grid grid-cols-2 gap-4 text-xs text-gray-600 font-medium">
                <li>Individual AC per seat</li>
                <li>Powerful Cooling</li>
                <li>Free WiFi</li>
                <li>LED TVs</li>
                <li>GPS Safety</li>
                <li>Ambient Lighting</li>
                <li>Daily Sanitization</li>
                <li>Huge Luggage Space</li>
              </ul>
            </div>
          </div>
          <div className="text-center italic text-blue-800 font-bold">
            Cheapest Maharaja TT rates start at ₹25-35/km + ₹500-800 driver bata.
          </div>
        </section>

{/* SECTION 1: LUXURY TEMPO TRAVELLER NOIDA */}
<section className="mb-16">
  <h2 className="text-3xl font-extrabold mb-8 border-b-4 border-blue-600 pb-2 inline-block uppercase tracking-tighter">
    Luxury Tempo Traveller Noida
  </h2>
  <div className="space-y-6 text-lg text-gray-700">
    <p>
      Luxury Tempo Traveller rentals in Noida offer premium AC comfort for groups from <strong>Sector 62, Sector 18, and Greater Noida</strong>. Discover <strong>9-seater luxury Tempo Traveller</strong> options at just <strong>₹22-25/km</strong> ideal for small families on airport transfers or local tours, featuring reclining Maharaja seats, LED lights, music systems, and charging ports for hassle-free rides. Upgrade to <strong>12-seater luxury Tempo Traveller (₹23-26/km)</strong>, perfect for family outings or corporate shuttles with extra legroom and pushback seats handled by expert drivers mastering Noida traffic.
    </p>
    <p>
      For larger groups, <strong>20-seater luxury Tempo Traveller at ₹28-30/km</strong> shines with 1x1 premium upholstery, optional TVs, fridges, and spacious layouts suited for weddings, events, or outstation trips to Greater Noida. All models boast full AC, clean interiors, no hidden fees—simply add <strong>₹500-700 daily driver charge</strong> plus 250 km minimum (tolls/parking extra).
    </p>
    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-6">
      <p className="font-bold mb-2">Pricing Highlight:</p>
      <p>
        Cheapest luxury Tempo Traveller rates in Noida include local packages from <strong>₹4,500 (80 km/8 hrs)</strong> and one-way Greater Noida fares at <strong>₹1,500-₹3,000</strong>, with 20-25% discounts via trusted providers like <strong>Yatra Travel India</strong>. Book luxury Tempo Traveller in Noida easily from Sector 62 or Sector 18 pickups. WhatsApp quotes, flexible cancellations, 15+ years of reliable service, and 4.5+ ratings ensure top Noida Tempo Traveller rental value. Elevate your group travel in Noida with affordable luxury today.
      </p>
    </div>
  </div>
</section>

      {/* SECTION 2: SECTOR WISE COVERAGE */}
<section className="mb-16">
  <h2 className="text-2xl font-black mb-6 text-gray-900 uppercase">
    Sector Wise Tempo Traveller Noida Coverage
  </h2>
  <p className="mb-10 text-gray-600">
    Enjoy seamless doorstep pickup for Tempo Traveller rentals in Noida tailored to your area, from Sector 62 to Greater Noida. Our cheapest Tempo Traveller services ensure reliable AC vehicles with expert drivers for corporate shuttles, mall trips, events, weddings, and more—optimized for Noida group travel with no hidden fees.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="border-t border-gray-200 pt-4">
      <h3 className="font-bold text-xl text-blue-700 mb-2">Sector 62 Tempo Traveller Noida</h3>
      <p className="text-sm leading-relaxed">Perfect for <strong>HCL, TCS, Adobe</strong> corporate shuttles in Sector 62 Noida. Book 9-20 seater luxury Tempo Travellers for employee transport, IT park commutes, or office events. Doorstep pickup from tech hubs like HCL Towers or Adobe offices ideal for daily corporate group transfers, team outings, or client pickups. Rates start <strong>₹22/km + 250 km min</strong>, with flexible schedules for peak hours.</p>
    </div>

    <div className="border-t border-gray-200 pt-4">
      <h3 className="font-bold text-xl text-blue-700 mb-2">Sector 18 Tempo Traveller Noida</h3>
      <p className="text-sm leading-relaxed">Head to <strong>Great India Place</strong> and malls with Sector 18 Tempo Traveller for shopping groups and family fun. Spacious 12-20 seater AC Tempo Travellers handle retail therapy at Logix City Centre or The Grand Venice perfect for mall shopping trips, birthday bashes, or ladies' outings. Instant doorstep service from Sector 18 residences or offices, ensuring hassle-free parking and drop-offs.</p>
    </div>

    <div className="border-t border-gray-200 pt-4">
      <h3 className="font-bold text-xl text-blue-700 mb-2">Greater Noida Tempo Traveller</h3>
      <p className="text-sm leading-relaxed">Explore <strong>Film City tours</strong> and <strong>India Expo Mart</strong> events via Greater Noida Tempo Traveller rentals. From Knowledge Park to Expo Mart, our luxury 16-26 seater options suit trade fairs, film shoots, or Buddha International Circuit visits. One-way Greater Noida drop-offs from Noida at <strong>₹1,500-3,000</strong>, with full-day packages for event shuttles and group excursions.</p>
    </div>

    <div className="border-t border-gray-200 pt-4">
      <h3 className="font-bold text-xl text-blue-700 mb-2">Noida Extension Tempo Traveller</h3>
      <p className="text-sm leading-relaxed">Serving residential societies and wedding pickups in Noida Extension. Tempo Traveller on rent for <strong>Gaur City, Cherry County</strong>, or society events great for baraats, mehendi, or family relocations. Doorstep from high-rises, with ample luggage space for wedding transport in Noida Extension and multi-stop itineraries.</p>
    </div>

    <div className="md:col-span-2 border-t border-gray-200 pt-4 bg-gray-50 p-6 rounded-lg">
      <h3 className="font-bold text-xl text-blue-700 mb-2">Sector 50, 16, 15 Tempo Traveller</h3>
      <p className="text-sm leading-relaxed">Mixed office + residential service in Sector 50, Sector 16, Sector 15 Noida. Blend office commutes (<strong>World Trade Centre, Crimson Crescent</strong>) with home pickups for hybrid workers. Sector 50 Tempo Traveller excels for schools, hospitals, or markets; Sector 16/15 covers <strong>Atta Market</strong> and <strong>Shipra Sun City</strong>. All-area doorstep pickup for versatile Noida Tempo Traveller booking corporate, residential, or combined.</p>
    </div>
  </div>
</section>

        {/* SECTION 3: NEARBY CITIES TABLE */}
        <section className="mb-12">
          <h2 className="text-2xl font-black mb-8 text-gray-900 uppercase">
            Nearby Cities from Noida by Tempo Traveller
          </h2>
          <p className="mb-8 text-gray-700">
            Discover Tempo Traveller rentals in Noida for seamless outstation trips from Sector 62, Sector 18, or Greater Noida. Our luxury AC 9-20 seater Tempo Travellers provide doorstep pickup, cheapest rates <strong>₹22/km+</strong>, and group travel to top nearby cities from Noida—perfect for weekends, corporates, or families.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-900 text-white text-xs uppercase font-bold tracking-widest">
                  <th className="p-4 border-b">Destination</th>
                  <th className="p-4 border-b">Distance</th>
                  <th className="p-4 border-b">Service Highlights</th>
                  <th className="p-4 border-b">Estimated Fares</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">New Delhi</td>
                  <td className="p-4 text-gray-500">12 km</td>
                  <td className="p-4">India Gate tour, Qutub Minar, Lotus Temple shuttle.</td>
                  <td className="p-4 font-semibold text-blue-700">₹1,500-2,500</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">Gurgaon</td>
                  <td className="p-4 text-gray-500">32 km</td>
                  <td className="p-4">Cyber Hub corporate shuttle, Kingdom of Dreams events.</td>
                  <td className="p-4 font-semibold text-blue-700">Full day ~₹7,000</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">Agra</td>
                  <td className="p-4 text-gray-500">200 km</td>
                  <td className="p-4">Taj Mahal group package, Fatehpur Sikri day trip.</td>
                  <td className="p-4 font-semibold text-blue-700">₹15,000-20,000</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">Mathura Vrindavan</td>
                  <td className="p-4 text-gray-500">140 km</td>
                  <td className="p-4">Krishna temple circuits, Janmashtami pilgrimage.</td>
                  <td className="p-4 font-semibold text-blue-700">Special packages</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">Haridwar Rishikesh</td>
                  <td className="p-4 text-gray-500">220 km</td>
                  <td className="p-4">Ganga Aarti tours, rafting, adventure group trip.</td>
                  <td className="p-4 font-semibold text-blue-700">Outstation rates</td>
                </tr>
                <tr className="hover:bg-blue-50/50">
                  <td className="p-4 font-bold">Jaipur</td>
                  <td className="p-4 text-gray-500">260 km</td>
                  <td className="p-4">Amber Fort luxury, Hawa Mahal weekend getaway.</td>
                  <td className="p-4 font-semibold text-blue-700">Jaipur specials</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase text-gray-400">
            <span>Ghaziabad (14 km)</span> | <span>Faridabad (16 km)</span> | <span>Meerut (70 km)</span>
          </div>
        </section>
{/* LUXURY FEATURES SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-2 uppercase tracking-tighter">
            Luxury Features Included in Cheapest Rates
          </h2>
          <p className="mb-8">
            Unlock luxury Tempo Traveller Noida perks at rock-bottom cheapest rates from Sector 62, Sector 
            18, or Greater Noida! Our 9-20 seater AC Tempo Travellers pack premium amenities without extra 
            costs perfect for corporate shuttles HCL TCS Adobe, mall shopping Great India Place, or outstation 
            trips to Agra Taj Mahal. Tempo Traveller rental Noida delivers airline-style comfort starting ₹22/km 
            + ₹500 driver bata.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold mb-2">Maharaja Pushback Seats</h3>
              <p className="text-sm">
                Experience Maharaja pushback seats in Tempo Traveller Noida—reclining like business class for 
                long outstation trips Noida to Jaipur or Noida to Haridwar. Airline comfort Tempo Traveller eases 
                Noida-Delhi highway fatigue, with plush 1x1 or 2x1 layouts ensuring legroom on corporate Tempo 
                Traveller Noida runs or family weekend getaways Gurgaon.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold mb-2">Individual AC Vents Per Seat</h3>
              <p className="text-sm">
                Stay chill with individual AC vents every seat in luxury Tempo Traveller Noida vital for Noida 
                summer heat during Sector 62 office commutes or Greater Noida Film City tours. Powerful cooling 
                beats Delhi-NCR humidity, keeping group travel Noida fresh on Noida to Mathura Vrindavan Tempo 
                Traveller pilgrimages.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold mb-2">Free WiFi + LED TV</h3>
              <p className="text-sm">
                Free WiFi Tempo Traveller Noida + LED TV entertainment powers corporate Tempo Traveller Noida 
                productivity or kids' movies on Sector 18 mall shopping trips. Stream work emails during Noida to 
                Meerut Tempo Traveller or binge Bollywood on wedding pickups Noida Extension included in 
                cheapest luxury rates.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-bold mb-2">Huge Luggage Boot Space</h3>
              <p className="text-sm">
                Huge luggage boot Tempo Traveller Noida swallows corporate bags Sector 62, shopping hauls 
                Great India Place, or baraati gear for Sector 50 wedding transport. Overhead racks + massive rear 
                storage fit Noida to Agra group packages effortlessly.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 md:col-span-2">
              <h3 className="text-xl font-bold mb-2">Daily Sanitized Vehicles</h3>
              <p className="text-sm">
                Daily sanitized luxury Tempo Traveller Noida guarantees cleanest vehicles post-COVID—disinfected 
                seats, AC filters, and surfaces for safe family Tempo Traveller Noida Extension or office mixed 
                Sector 16/15 service. Hygienic rides build trust.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-black mb-2 text-gray-900 uppercase">Noida Tempo Traveller FAQ – 14 Top Asked Q&As</h2>
          <p className="mb-8 text-sm text-gray-600">
            Get instant answers for Tempo Traveller rental Noida, luxury Maharaja seats, Sector 62 HCL TCS shuttles, 
            Sector 18 Great India Place, and outstation trips Agra Taj Mahal from Greater Noida or Noida Extension. 
            Cheapest rates ₹22/km optimized.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">1. What are Tempo Traveller rates in Noida ?</p>
              <p className="text-gray-700 text-sm mt-1">₹22/km for 9-seater, ₹28/km 20-seater Maharaja (250 km min + ₹500 driver). Local 80 km/8 hrs: ₹4,500+.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">2. Doorstep pickup in Sector 62, 18, 50 available?</p>
              <p className="text-gray-700 text-sm mt-1">Yes Sector 62 Tempo Traveller HCL TCS Adobe, Sector 18 mall shopping, Sector 50 offices free pickup in all sectors.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">3. Luxury features at the cheapest rates?</p>
              <p className="text-gray-700 text-sm mt-1">Maharaja pushback seats, per-seat AC vents, free WiFi + LED TV, huge boot, daily sanitized—luxury Tempo Traveller Noida standard.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">4. Noida to Greater Noida one-way fare?</p>
              <p className="text-gray-700 text-sm mt-1">₹1,500-3,000 for 12-20 seaters. Quick Greater Noida Film City/Expo Mart drops.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">5. Outstation to Agra Taj Mahal package?</p>
              <p className="text-gray-700 text-sm mt-1">Noida to Agra Tempo Traveller: ₹15,000-20,000 full day (200 km). Includes Taj + Fatehpur Sikri.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">6. Corporate shuttles for HCL, TCS, Adobe Sector 62?</p>
              <p className="text-gray-700 text-sm mt-1">Daily/weekly corporate Tempo Traveller Noida—doorstep from IT parks, flexible timings.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">7. Wedding pickups Noida Extension societies?</p>
              <p className="text-gray-700 text-sm mt-1">Baraat Tempo Traveller for Gaur City, Cherry County huge luggage for Noida Extension wedding transport.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">8. Overnight Haridwar Rishikesh from Noida?</p>
              <p className="text-gray-700 text-sm mt-1">Yes, Noida to Haridwar Tempo Traveller ₹18,000+ overnight with Ganga Aarti stops.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">9. Child seats, AC working in Noida summer?</p>
              <p className="text-gray-700 text-sm mt-1">Individual AC vents beat heat; child seats on request. Noida summer-proof Tempo Traveller.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">10. Cancellation policy for Sector 18 bookings?</p>
              <p className="text-gray-700 text-sm mt-1">Free up to 24 hrs prior; flexible cancels Tempo Traveller Noida T&C apply.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">11. Vehicles insured? GPS tracking?</p>
              <p className="text-gray-700 text-sm mt-1">Full insurance, GPS safety Tempo Traveller Noida, ABS brakes, first-aid kits standard.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">12. Sector 16/15 office-residential mixed service?</p>
              <p className="text-gray-700 text-sm mt-1">Sector 50/16/15 Tempo Traveller hybrid worker commutes, schools, hospitals covered.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="font-bold">13. Mall shopping Great India Place groups?</p>
              <p className="text-gray-700 text-sm mt-1">Sector 18 Tempo Traveller perfect for Great India Place shopping, Logix Mall hauls.</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
              <p className="font-bold text-lg">14. Booking process?</p>
              <p className="mt-2 font-medium">WhatsApp/Call +91-9044019511 → Choose 9/12/20 seater Maharaja → Sector-wise pickup confirmation. 3 mins instant quotes</p>
            </div>
          </div>
        </section>

        {/* CITY SERVICES LIST SECTION */}
        <section className="bg-gray-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Our Tempo Traveller Services Across Major Cities</h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Hey, Yatra Travel India's Tempo Traveller rentals aren't just one spot wonders we have got you 
            covered in key cities like Gurugram, Delhi, Chandigarh, Shimla, Dehradun, Haridwar, and even 
            Mumbai. From 9-seater cozy rides to 26-seater group haulers, we're talking AC comfort, 
            pushback seats, and pro drivers for local city runs, airport shuttles, weddings, or outstation 
            adventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs uppercase tracking-widest font-bold">
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-gurgaon" className="text-blue-400 hover:text-white transition-colors">● Gurugram Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="text-blue-400 hover:text-white transition-colors">● Delhi Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-chandigarh" className="text-blue-400 hover:text-white transition-colors">● Chandigarh Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-lucknow" className="text-blue-400 hover:text-white transition-colors">● Lucknow Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-shimla" className="text-blue-400 hover:text-white transition-colors">● Shimla Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-dehradun" className="text-blue-400 hover:text-white transition-colors">● Dehradun Tempo Traveller:</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/tempo-traveller/tempo-traveller-in-haridwar" className="text-blue-400 hover:text-white transition-colors">● Haridwar Tempo Traveller:</Link>
              <Link href="/tempo-traveller/tempo-traveller-in-mumbai" className="text-blue-400 hover:text-white transition-colors">● Mumbai Tempo Traveller:</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NoidaPage;