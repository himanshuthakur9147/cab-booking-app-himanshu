import React from 'react';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';
import Link from 'next/link';

const GurgaonPage = () => {
  const rates = [
    { capacity: "9 Seater", local: "3400", outstation: "5700", extra: "24", airport: "3000", wedding: "7000", driver: "800" },
    { capacity: "12 Seater", local: "3600", outstation: "5700", extra: "26", airport: "3500", wedding: "7500", driver: "800" },
    { capacity: "15 Seater", local: "4200", outstation: "6700", extra: "28", airport: "4000", wedding: "8500", driver: "800" },
    { capacity: "16 Seater", local: "4400", outstation: "6700", extra: "30", airport: "4200", wedding: "9000", driver: "800" },
    { capacity: "18 Seater", local: "5000", outstation: "7200", extra: "35", airport: "5000", wedding: "11000", driver: "900" },
    { capacity: "20 Seater", local: "5200", outstation: "7700", extra: "38", airport: "6000", wedding: "13000", driver: "900" },
    { capacity: "12 Seater Maharaja", local: "4400", outstation: "6200", extra: "28", airport: "4000", wedding: "8500", driver: "800" }
  ];

  const luxuryRates = [
    { type: "9 Seater Luxury", capacity: "9 Seater", local: "3800", outstation: "6000", kmRate: "26", airport: "3500" },
    { type: "12 Seater Luxury", capacity: "12 Seater", local: "4000", outstation: "6200", kmRate: "28", airport: "4000" },
    { type: "15 Seater Luxury", capacity: "15 Seater", local: "4600", outstation: "7200", kmRate: "32", airport: "4800" },
    { type: "20 Seater Luxury", capacity: "20 Seater", local: "5800", outstation: "8500", kmRate: "38", airport: "7000" }
  ];

  const amenityData = [
    { category: "Seating", standard: "Basic seats", luxury: "Push Back Maharaja Seats", perfect: "Long tempo traveller fare per km in Gurgaon trips" },
    { category: "Cooling", standard: "Front AC", luxury: "Individual AC Vents Every Seat", perfect: "Gurgaon summer heat" },
    { category: "Entertainment", standard: "Radio", luxury: "LED TV + Wi-Fi + Bluetooth", perfect: "Corporate group travel Gurgaon" },
    { category: "Connectivity", standard: "None", luxury: "Free Wi-Fi + USB Every Seat", perfect: "Work trips, students" },
    { category: "Safety", standard: "Seatbelts", luxury: "GPS + First Aid + CCTV", perfect: "Family, wedding guests" }
  ];

  const destinationRates = [
    { destination: "Gurgaon to Agra (Taj Mahal)", dist: "230 km", t9: "6500", t12: "6700", t15: "7800", t20: "9500" },
    { destination: "Gurgaon to Jaipur", dist: "260 km", t9: "7000", t12: "7200", t15: "8300", t20: "10200" },
    { destination: "Gurgaon to Manesar", dist: "50 km", t9: "2500", t12: "2700", t15: "3200", t20: "4200" },
    { destination: "Gurgaon to Neemrana", dist: "130 km", t9: "4200", t12: "4400", t15: "5200", t20: "6500" },
    { destination: "Gurgaon to Mathura-Vrindavan", dist: "170 km", t9: "4800", t12: "5000", t15: "5900", t20: "7200" },
    { destination: "Gurgaon to Rishikesh", dist: "260 km", t9: "7200", t12: "7400", t15: "8500", t20: "10500" }
  ];


  const airportRates = [
    { service: "Gurgaon → IGI Drop", t9: "3000 INR", t12: "3500 INR", t15: "4000 INR", t20: "5500 INR" },
    { service: "IGI → Gurgaon Pickup", t9: "3500 INR", t12: "4000 INR", t15: "4800 INR", t20: "6000 INR" },
    { service: "Round Trip Same Day", t9: "5500 INR", t12: "6200 INR", t15: "7500 INR", t20: "9500 INR" },
    { service: "Meet & Greet Extra", t9: "+300 INR", t12: "+400 INR", t15: "+500 INR", t20: "+600 INR" }
  ];

  const priceComparison = [
    { seats: "9 Seater Tempo Traveller", km: "24/km", local: "3400 INR", airport: "3000 INR", agra: "6500 INR" },
    { seats: "12 Seater Tempo Traveller", km: "26/km", local: "3600 INR", airport: "3500 INR", agra: "6700 INR" },
    { seats: "15 Seater Tempo Traveller", km: "28/km", local: "4200 INR", airport: "4000 INR", agra: "7800 INR" },
    { seats: "20 Seater Tempo Traveller", km: "38/km", local: "5200 INR", airport: "5500 INR", agra: "9500 INR" }
  ];


  const nearbyCities = [
    { city: "Noida Tempo Traveller", dist: "45 km", service: "Noida tempo traveller airport transfer, corporate shuttles", r9: "Local 3600 INR", r20: "Local 5500 INR" },
    { city: "Faridabad Tempo Traveller", dist: "35 km", service: "Faridabad tempo traveller wedding, outstation", r9: "Airport 3200 INR", r20: "Airport 5800 INR" },
    { city: "Ghaziabad Tempo Traveller", dist: "55 km", service: "Ghaziabad tempo traveller outstation Agra trips", r9: "3700 INR", r20: "5700 INR" },
    { city: "Delhi Tempo Traveller", dist: "30 km", service: "Delhi airport tempo traveller, Delhi NCR corporate group travel", r9: "IGI Drop 2800 INR", r20: "IGI Drop 5200 INR" },
    { city: "Greater Noida Tempo Traveller", dist: "60 km", service: "Wedding baraat, Greater Noida tempo traveller rent", r9: "Local 3800 INR", r20: "Local 5800 INR" },
    { city: "Manesar Tempo Traveller", dist: "25 km", service: "Weekend getaways, Manesar tempo traveller from Gurgaon", r9: "2500 INR", r20: "4200 INR" }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 antialiased py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <header className="mb-12 border-b border-gray-100 pb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tempo Traveller in Gurgaon
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <p>
              Need a <span className="text-blue-600 underline">tempo traveller in Gurgaon</span>? We provide AC Tempo Traveller, and we make group trips 
              simple and fun in Gurgaon and nearby places like Noida, Faridabad, and Ghaziabad. Easy <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span> for sightseeing, long drives, <span className="text-blue-600 underline">corporate group travel Gurgaon</span>, weddings, or family fun.
            </p>
            <p>
              Think about it, hop into a <span className="text-blue-600 underline">luxury tempo traveller Gurgaon</span> with soft seats that recline, cool AC, 
              music system, and big dark windows to see Gurgaon's tall buildings. Our tempo traveller in Gurgaon comes in sizes from 9 seats to a big <span className="text-blue-600 underline text-bold">20 Seater Tempo Traveller</span> for your whole gang.
            </p>
          </div>
        </header>

        {/* HIGHLIGHTS BLOCK */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16 border border-gray-200">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-blue-700">What makes us special?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="border-l-2 border-blue-600 pl-4">
              <strong>Premium Comfort</strong>
              <p className="mt-2 text-gray-600">Clean vans and friendly drivers who know all the roads. Perfect for office trips or wedding rides.</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <strong>Versatile Fleet</strong>
              <p className="mt-2 text-gray-600">Great for <span className="text-blue-600 underline">corporate group travel Gurgaon</span> or quick rent to Agra, Jaipur, or hills.</p>
            </div>
            <div className="border-l-2 border-blue-600 pl-4">
              <strong>Effortless Booking</strong>
              <p className="mt-2 text-gray-600">No more tight cars or traffic fights. Grab your tempo traveller in Gurgaon now and go.</p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Tempo Traveller Rate Per Km in Gurgaon</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Gurgaon is a hot spot for medical trips and big events. Rent a tempo traveller in Gurgaon for half day, full day, or more. 
            Tempo traveller fare per km in Gurgaon starts at just **Rs 20/km** for small vans.
          </p>

          <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-lg">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-900 text-white text-xs uppercase font-bold">
                  <th className="p-4 border-b border-gray-200">Seating Capacity</th>
                  <th className="p-4 border-b border-gray-200">Local (80KM/8Hr)</th>
                  <th className="p-4 border-b border-gray-200">Outstation (250KM)</th>
                  <th className="p-4 border-b border-gray-200">Extra KM</th>
                  <th className="p-4 border-b border-gray-200">Airport</th>
                  <th className="p-4 border-b border-gray-200">Wedding</th>
                  <th className="p-4 border-b border-gray-200">Driver</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {rates.map((rate, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-bold text-blue-700">{rate.capacity}</td>
                    <td className="p-4">{rate.local} INR</td>
                    <td className="p-4">{rate.outstation} INR</td>
                    <td className="p-4 font-semibold">{rate.extra}/km</td>
                    <td className="p-4">{rate.airport} INR</td>
                    <td className="p-4">{rate.wedding} INR</td>
                    <td className="p-4">{rate.driver} INR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
<TempoImageCards/>
<TempoSeatConfig city={"gurgaon"} />

        {/* FOOTER CALL-TO-ACTION */}
        <section className="border-t border-gray-200 pt-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tempo Traveller Booking in Gurgaon</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            <span className="text-blue-600 underline">Tempo traveller booking in Gurgaon</span> is the easiest way to get a vehicle for your group. 
            **AC Tempo Traveller Hire** makes <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span> super simple across Delhi NCR. 
            Available 24/7 for quick local rides or long trips.
          </p>
          <Link href="/">
         <button className="bg-blue-600 text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors">
            Book My Vehicle Now
          </button> </Link>
        </section>


{/* WHY CHOOSE US - MINIMALIST LIST */}
        <section className="mb-16 border-l-4 pt-8 border-blue-600 pl-6 md:pl-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Why Choose Our Tempo Traveller Booking in Gurgaon?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            <p className="text-sm"><span className="font-bold text-blue-700">● Instant Confirmation:</span> Tell us your plan, get your booking confirmed in minutes.</p>
            <p className="text-sm"><span className="font-bold text-blue-700">● Best Rates:</span> Fare per km in Gurgaon starts from Rs 24/km — no hidden charges.</p>
            <p className="text-sm"><span className="font-bold text-blue-700">● Doorstep Service:</span> Pickup from your Gurgaon home, office, or hotel.</p>
            <p className="text-sm"><span className="font-bold text-blue-700">● Safe & Clean:</span> Sanitized <span className="text-blue-600 underline">luxury tempo traveller Gurgaon</span> with AC, music, and comfy seats.</p>
          </div>
        </section>

        {/* 3-STEP PROCESS BOX */}
        <section className="bg-gray-900 text-white p-8 rounded-lg mb-20 shadow-lg">
          <h2 className="text-xl font-bold mb-8 text-center border-b border-gray-700 pb-4">Super Easy 3-Step Booking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">01</div>
              <h4 className="font-bold mb-2">Tell Us Your Needs</h4>
              <p className="text-xs text-gray-400">Specify size (9, 12, or 20 seater) and pickup point like Cyber City or Golf Course Road.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">02</div>
              <h4 className="font-bold mb-2">Get Instant Quote</h4>
              <p className="text-xs text-gray-400">Call/WhatsApp 9044019511. We reply in 2 minutes with the full price for <span className="underline">Gurgaon tempo traveller rent</span>.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">03</div>
              <h4 className="font-bold mb-2">Pay & Roll</h4>
              <p className="text-xs text-gray-400">Pay 20% advance via UPI/GPay and enjoy your <span className="underline">tempo traveller in Gurgaon</span>!</p>
            </div>
          </div>
        </section>

        {/* LUXURY SECTION CONTENT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Luxury Tempo Traveller in Gurgaon – Top Premium Travel Choice!</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Are You Looking for a <span className="text-blue-600 underline">luxury tempo traveller in Gurgaon</span>? Get the best with AC Tempo Traveller Hire. 
            Our premium fleet offers <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span> for weddings, <span className="text-blue-600 underline">corporate group travel Gurgaon</span>, family trips, airport transfers, and outstation tours across Delhi NCR.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-700 border-b-2 border-blue-100 pb-2">Why Luxury Stands Out?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>● Premium Maharaja Seats:</strong> 180° reclining airline-style comfort</li>
                <li><strong>● Powerful AC Everywhere:</strong> Stay cool in Gurgaon summers</li>
                <li><strong>● Entertainment Hub:</strong> LED TV, music, and USB chargers</li>
                <li><strong>● Tinted Big Windows:</strong> Enjoy Gurgaon's skyline views safely</li>
                <li><strong>● Extra Amenities:</strong> Mini fridge and huge luggage space</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-700 border-b-2 border-blue-100 pb-2">Top Luxury Uses</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>● Wedding tempo traveller Gurgaon:</strong> Baraat + 20 guests in style</li>
                <li><strong>● Corporate group travel Gurgaon:</strong> Client pickups & team building</li>
                <li><strong>● Airport Transfers:</strong> Gurgaon to Delhi Airport round trips</li>
                <li><strong>● Weekend Getaways:</strong> Manesar and Neemrana hill trips</li>
              </ul>
            </div>
          </div>
        </section>

        {/* LUXURY PRICING TABLE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Luxury Tempo Traveller Rates in Gurgaon</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white text-xs uppercase tracking-wider">
                  <th className="p-4">Vehicle Type</th>
                  <th className="p-4">Local (80km/8hrs)</th>
                  <th className="p-4">Outstation (250km)</th>
                  <th className="p-4">Per KM Rate</th>
                  <th className="p-4">Airport (GGN-DEL)</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {luxuryRates.map((rate, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{rate.type}</td>
                    <td className="p-4">{rate.local} INR</td>
                    <td className="p-4">{rate.outstation} INR</td>
                    <td className="p-4 font-semibold text-blue-700">{rate.kmRate}/km</td>
                    <td className="p-4">{rate.airport} INR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-bold text-gray-900">Call Now: <span className="text-blue-600">9044019511</span></p>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Doorstep pickup anywhere in Gurgaon</p>
          </div>
        </section>


{/* MAIN HEADER */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 uppercase tracking-tighter">
            Features and Amenities of Luxury Tempo Traveller in Gurgaon
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Discover premium <span className="text-blue-600 underline">luxury tempo traveller in Gurgaon</span> features! Our <span className="text-blue-600 underline">tempo traveller in Gurgaon</span> offers top-class amenities for <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span>, <span className="text-blue-600 underline">corporate group travel Gurgaon</span>, wedding baraat, airport transfers, and outstation trips. Best <span className="text-blue-600 underline">tempo traveller booking in Gurgaon</span> experience!
          </p>
        </section>

        <h3 className="text-2xl font-bold mb-10 text-blue-800 border-b-2 border-blue-800 pb-2 inline-block">
          Complete List of Tempo Traveller Features in Gurgaon
        </h3>

        {/* 4-COLUMN FEATURE GRID (NO ICONS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Comfort Features */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 border-l-4 border-gray-900 pl-3">Comfort Features</h4>
            <ul className="text-sm space-y-3 text-gray-600">
              <li><strong>Comfortable Push Back Seats:</strong> 180° reclining + adjustable headrests (airline-style comfort for 9 seater tempo traveller to 20 seater tempo traveller)</li>
              <li><strong>Plush Leather Upholstery:</strong> Soft, clean seats that stay cool even in summer</li>
              <li><strong>Adequate Leg Space:</strong> Extra room to stretch (perfect for 6ft+ passengers)</li>
              <li><strong>Individual AC Vents:</strong> Personal cooling for every seat in luxury tempo traveller Gurgaon</li>
            </ul>
          </div>

          {/* Seating & Layout */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 border-l-4 border-gray-900 pl-3">Seating & Layout</h4>
            <ul className="text-sm space-y-3 text-gray-600">
              <li><strong>Smart Seating Layout:</strong> Face-to-face or airline layout for comfort</li>
              <li><strong>Variable Seater Availability:</strong> 9 seater tempo traveller, 12 seater tempo traveller, 15 seater tempo traveller, 16 seater tempo traveller, 18 seater tempo traveller, 20 seater tempo traveller</li>
              <li><strong>Senior & Children Friendly:</strong> Low entry steps, grab handles, seatbelts for kids</li>
              <li><strong>Wheelchair Accessible:</strong> Space for foldable wheelchairs (call to confirm)</li>
            </ul>
          </div>

          {/* Entertainment */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 border-l-4 border-gray-900 pl-3">Entertainment & Connectivity</h4>
            <ul className="text-sm space-y-3 text-gray-600">
              <li><strong>Entertainment Gadgets:</strong> 22" LED TV, DVD player, 1000W music system</li>
              <li><strong>Bluetooth + AUX:</strong> Connect your phone for tempo traveller in Gurgaon trips</li>
              <li><strong>Wi-Fi Facility:</strong> Free high-speed internet (great for corporate group travel Gurgaon)</li>
              <li><strong>USB Charging Ports:</strong> Every seat has 5V/2.1A fast charging</li>
            </ul>
          </div>

          {/* Safety */}
          <div className="space-y-4">
            <h4 className="font-black text-gray-900 border-l-4 border-gray-900 pl-3">Safety & Convenience</h4>
            <ul className="text-sm space-y-3 text-gray-600">
              <li><strong>First Aid Facility:</strong> Complete medical kit always onboard</li>
              <li><strong>Well-Maintained Fleet:</strong> Daily AC servicing, tyre checks, brake inspections</li>
              <li><strong>GPS Tracking:</strong> Real-time location for tempo traveller booking in Gurgaon</li>
              <li><strong>Emergency Tools:</strong> Fire extinguisher, triangle, toolkit included</li>
            </ul>
          </div>
        </div>

        {/* AMENITIES TABLE */}
        <section className="mb-20">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Tempo Traveller Amenities Table – Gurgaon Special</h3>
          <div className="overflow-x-auto shadow-sm rounded border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Feature Category</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Standard</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-blue-700">Luxury Tempo Traveller Gurgaon</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Perfect For</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                {amenityData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold">{item.category}</td>
                    <td className="p-4 italic text-gray-400">{item.standard}</td>
                    <td className="p-4 font-semibold text-blue-600">{item.luxury}</td>
                    <td className="p-4">{item.perfect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section className="bg-blue-50 p-8 rounded-lg border-t-4 border-blue-600">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Why These Features Make Luxury Tempo Traveller in Gurgaon #1 Choice?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="text-sm"><strong>● Weddings:</strong> Plush interiors + music = baraat ready</p>
            <p className="text-sm"><strong>● Corporate:</strong> Wi-Fi + charging = productive <span className="underline">corporate group travel Gurgaon</span></p>
            <p className="text-sm"><strong>● Families:</strong> Kid-friendly + leg space = happy kids</p>
            <p className="text-sm"><strong>● Long Trips:</strong> Pushback seats + AC = no back pain</p>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-100 text-center font-bold text-gray-800">
            All features included in Gurgaon tempo traveller rent rates. No extra charges.
          </div>
        </section>

{/* INTRO SECTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tempo Traveller in Gurgaon for Outstation</h2>
          <p className="text-gray-700 leading-relaxed">
            Get the best <span className="text-blue-600 underline">tempo traveller in Gurgaon</span> from AC Tempo Traveller Hire! Our <span className="text-blue-600 underline">luxury tempo traveller in Gurgaon</span> offers <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span> for Agra, Jaipur, Shimla, Rishikesh, and all outstation tempo traveller from Gurgaon. Easy <span className="text-blue-600 underline">tempo traveller booking in Gurgaon</span> with <span className="text-blue-600 underline">tempo traveller fare per km in Gurgaon</span> from just **Rs 24/km**.
          </p>
        </section>

        {/* WHY CHOOSE OUTSTATION LIST */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-blue-800">Why is Outstation Tempo Traveller in Gurgaon a Perfect Choice?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <li><strong>● Unlimited Distance:</strong> Tempo traveller Gurgaon outstation pricing per km—no limits</li>
            <li><strong>● 24-Hour Driver Duty:</strong> Fresh driver for long luxury tempo traveller Gurgaon journeys</li>
            <li><strong>● Night Halt Included:</strong> Free driver stay for multi-day tempo traveller in Gurgaon for outstation</li>
            <li><strong>● All Tolls Planned:</strong> Exact toll costs shared upfront</li>
            <li><strong>● Comfort Certified:</strong> Pushback seats, powerful AC, entertainment for 12+ hour drives</li>
          </ul>
        </section>

        {/* OUTSTATION RATES TABLE */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-6">Complete Outstation Rates from Gurgaon – All Popular Destinations</h3>
          <div className="overflow-x-auto rounded shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-gray-900 text-white text-xs uppercase">
                <tr>
                  <th className="p-4">Destination (Distance)</th>
                  <th className="p-4">9 Seater</th>
                  <th className="p-4">12 Seater</th>
                  <th className="p-4">15 Seater</th>
                  <th className="p-4">20 Seater</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {destinationRates.map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{row.destination} <span className="text-gray-400 font-normal">({row.dist})</span></td>
                    <td className="p-4">{row.t9} INR</td>
                    <td className="p-4">{row.t12} INR</td>
                    <td className="p-4">{row.t15} INR</td>
                    <td className="p-4 font-semibold text-blue-700">{row.t20} INR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
            Per KM Rates: 9 seater Rs 24/km | 12 seater Rs 26/km | 20 seater Rs 38/km
          </p>
        </section>

        {/* SPECIAL PACKAGES & FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="border-t-4 border-blue-600 bg-gray-50 p-6 rounded-b-lg">
            <h4 className="font-bold text-lg mb-4">Outstation Special Packages from Gurgaon</h4>
            <div className="space-y-4 text-sm">
              <div className="border-b border-gray-200 pb-2">
                <p className="font-bold text-blue-700">Golden Triangle Tour (3 Days)</p>
                <p className="text-gray-600">Gurgaon → Agra → Jaipur → Gurgaon:</p>
                <p>15 Seater: 25,000 INR | 20 Seater: 32,000 INR (inclusive)</p>
              </div>
              <div>
                <p className="font-bold text-blue-700">Weekend Hill Station (2 Days)</p>
                <p className="text-gray-600">Gurgaon → Mussoorie/Shimla:</p>
                <p>12 Seater: 18,000 INR round trip (Halt + permits included)</p>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-gray-900 bg-gray-50 p-6 rounded-b-lg">
            <h4 className="font-bold text-lg mb-4">Outstation Features from Gurgaon</h4>
            <ul className="space-y-3 text-xs text-gray-700">
              <li><strong>● Pushback Seats:</strong> Sleep comfortably on tempo traveller Gurgaon outstation</li>
              <li><strong>● Individual AC Vents:</strong> Cool air for every passenger</li>
              <li><strong>● LED TV + WiFi:</strong> Movies + work on luxury tempo traveller in Gurgaon</li>
              <li><strong>● Huge Boot Space:</strong> All luggage + shopping bags fit!</li>
              <li><strong>● GPS Tracking & Night Halt:</strong> Family safety and fresh drivers every morning</li>
            </ul>
          </div>
        </div>

        {/* DESTINATION LIST & TERMS */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-gray-100 pt-10">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Perfect For These Outstation Trips</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>● Family Vacations:</strong> Shimla, Manali summer trips</li>
              <li><strong>● Pilgrimage Tours:</strong> Haridwar, Mathura, Vaishno Devi</li>
              <li><strong>● Wedding Destinations:</strong> Alwar, Bharatpur baraat</li>
              <li><strong>● Corporate Retreats:</strong> Rishikesh rafting, Jim Corbett</li>
              <li><strong>● Golden Triangle:</strong> Agra-Jaipur cultural tours</li>
              <li className="mt-4 italic text-blue-600">Multi-stop OK! Gurgaon → Agra → Fatehpur Sikri → Jaipur = same per km rate.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Outstation Booking Terms</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>● Minimum Booking:</strong> 250 km (full day)</li>
              <li><strong>● Extra KM:</strong> Same tempo traveller fare per km in Gurgaon rate</li>
              <li><strong>● Night Charge:</strong> +20% after 10 PM</li>
              <li><strong>● Driver Bata:</strong> Rs 200/day extra food</li>
              <li><strong>● State Permit:</strong> Free for Rajasthan, Haryana, UP</li>
            </ul>
          </div>
        </section>

        <div className="text-center font-bold text-lg text-gray-900">
          Easy tempo traveller booking in Gurgaon for outstation! Doorstep pickup from Cyber Hub, Golf 
          Course Road, Udyog Vihar, DLF Phases.
        </div>

{/* INTRO SECTION */}
        <section className="mb-12 pt-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Gurgaon Tempo Traveller Rent for Airport Transfers – Best Delhi Airport Service</h2>
          <p className="text-gray-700 leading-relaxed">
            Searching for <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span> for airport transfers? Get the best <span className="text-blue-600 underline">tempo traveller in Gurgaon</span> from AC Tempo Traveller Hire. Our <span className="text-blue-600 underline">luxury tempo traveller in Gurgaon</span> offers <span className="text-blue-600 underline">tempo traveller booking in Gurgaon</span> for Delhi airport tempo traveller from Gurgaon, IGI airport tempo traveller Gurgaon, and airport transfer tempo traveller Gurgaon. Fixed <span className="text-blue-600 underline">tempo traveller fare per km in Gurgaon</span> rates for <span className="text-blue-600 underline">corporate group travel Gurgaon</span>.
          </p>
        </section>

        {/* WHY AIRPORT SERVICE LIST */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Why Airport Tempo Traveller from Gurgaon is #1 Choice?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            <p className="text-sm"><strong>● No Surge Pricing:</strong> Fixed Gurgaon tempo traveller rent rates for tempo traveller Gurgaon airport transfer</p>
            <p className="text-sm"><strong>● Real-Time Flight Tracking:</strong> Free waiting if your flight delays</p>
            <p className="text-sm"><strong>● Doorstep to Terminal:</strong> Cyber Hub tempo traveller, Golf Course Road tempo traveller, DLF Phase tempo traveller</p>
            <p className="text-sm"><strong>● Group Luggage Ready:</strong> 9 seater tempo traveller airport transfer, 12 seater tempo traveller airport, 20 seater tempo traveller airport</p>
            <p className="text-sm"><strong>● 24/7 Availability:</strong> Early flights, late-night arrivals all covered</p>
            <p className="text-sm"><strong>● Professional Meet & Greet:</strong> Driver with placard at arrivals</p>
          </div>
        </section>

        {/* AIRPORT RATES TABLE */}
        <section className="mb-16">
          <h3 className="text-xl font-bold mb-6">Complete Airport Transfer Rates Gurgaon-Delhi IGI (2026)</h3>
          <div className="overflow-x-auto rounded border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-gray-900 text-white text-xs uppercase">
                <tr>
                  <th className="p-4">Airport Service</th>
                  <th className="p-4">9 Seater</th>
                  <th className="p-4">12 Seater</th>
                  <th className="p-4">15 Seater</th>
                  <th className="p-4">20 Seater</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {airportRates.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{row.service}</td>
                    <td className="p-4 text-gray-600">{row.t9}</td>
                    <td className="p-4 text-gray-600">{row.t12}</td>
                    <td className="p-4 text-gray-600">{row.t15}</td>
                    <td className="p-4 font-bold text-blue-700">{row.t20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs italic text-gray-500 text-center uppercase tracking-wide">
            Includes: Driver bata, airport parking, 45 mins free waiting (pickup only).
          </p>
        </section>

        {/* AREAS AND FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Top Gurgaon Areas for Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>● Cyber City Tempo Traveller:</strong> WorldMark, Signature Towers</li>
              <li><strong>● Golf Course Road Tempo Traveller:</strong> DLF Phases 1-5, Emmar Tech Zone</li>
              <li><strong>● Sector 14-56 Tempo Traveller:</strong> Residential societies, villas</li>
              <li><strong>● Udyog Vihar Tempo Traveller:</strong> Corporate offices to airport</li>
              <li><strong>● Sushant Lok Tempo Traveller:</strong> MG Road hotels to IGI</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Premium Airport Transfer Features</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>● Live Flight Monitoring:</strong> Track PNR, adjust pickup time automatically</li>
              <li><strong>● Baby Seats & Wheelchair Friendly:</strong> Child safety and senior accessibility</li>
              <li><strong>● Unlimited Luggage:</strong> Golf bags, suitcases, and equipment</li>
              <li><strong>● In-Car Wi-Fi & Cold Drinks:</strong> Productive and refreshing journey</li>
            </ul>
          </div>
        </div>

        {/* PERFECT FOR AND BOOKING PROCESS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-10 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Perfect For Every Airport Need</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><strong>● International Groups:</strong> Terminal 3 arrivals tempo traveller Gurgaon airport</li>
              <li><strong>● Corporate Travel:</strong> Client pickups <span className="underline">corporate group travel Gurgaon</span> airport</li>
              <li><strong>● Wedding Guests:</strong> Airport to banquet baraat connection</li>
              <li><strong>● Family Reunions:</strong> Everyone together from IGI airport tempo traveller Gurgaon</li>
              <li><strong>● Flight Crew:</strong> Crew transport <span className="underline text-blue-600">luxury tempo traveller Gurgaon</span> airport</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Easy Booking Process</h4>
            <div className="space-y-4 text-sm text-gray-700">
              <p><strong>1. Share Flight Details:</strong> Flight no., terminal, passenger count, pickup time</p>
              <p><strong>2. Get Fixed Quote:</strong> <span className="underline">Tempo traveller fare per km in Gurgaon</span> + airport fees</p>
              <p><strong>3. 20% Advance:</strong> UPI/GPay, balance on arrival</p>
              <p><strong>4. Doorstep Pickup:</strong> <span className="underline">Tempo traveller in Gurgaon</span> reaches 15 mins early</p>
            </div>
          </div>
        </div>

{/* INTRO BLOCK */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900 uppercase tracking-tighter">
            Why Yatra Travel India is Perfect for Tempo Traveller Hire in Gurgaon
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yatra Travel India is the best <span className="text-blue-600 underline">tempo traveller in Gurgaon</span> for <span className="text-blue-600 underline">luxury tempo traveller in Gurgaon</span>, <span className="text-blue-600 underline">Gurgaon tempo traveller rent</span>, <span className="text-blue-600 underline">tempo traveller booking in Gurgaon</span>, and <span className="text-blue-600 underline">corporate group travel Gurgaon</span>! Top <span className="text-blue-600 underline">tempo traveller fare per km in Gurgaon</span> starts Rs 24/km for 9 seater tempo traveller, 12 seater tempo traveller, 15 seater tempo traveller, and 20 seater tempo traveller.
          </p>
        </section>

        <h3 className="text-2xl font-bold mb-10 border-l-8 border-blue-600 pl-4">
          10 Reasons Yatra Travel India = #1 Tempo Traveller in Gurgaon
        </h3>

        {/* REASON 1: PRICING TABLE */}
        <section className="mb-12">
          <h4 className="font-bold text-lg mb-4 text-gray-800">1. Cheapest Tempo Traveller Fare Per Km in Gurgaon 2026</h4>
          <div className="overflow-x-auto rounded border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead className="bg-gray-100 text-gray-600 text-xs uppercase font-black">
                <tr>
                  <th className="p-4 border-b">Seater Type</th>
                  <th className="p-4 border-b">Per KM Rate</th>
                  <th className="p-4 border-b">Local 80km</th>
                  <th className="p-4 border-b">Airport</th>
                  <th className="p-4 border-b">Agra Trip</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {priceComparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 font-bold border-b">{item.seats}</td>
                    <td className="p-4 font-bold text-blue-700 border-b">Rs {item.km}</td>
                    <td className="p-4 border-b">{item.local}</td>
                    <td className="p-4 border-b">{item.airport}</td>
                    <td className="p-4 border-b">{item.agra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* REASONS GRID (2-9) */}
        <div className="space-y-6 mb-12">
          
          <div className="space-y-6">
            <div className=" pb-4">
              <h4 className="font-bold text-lg text-blue-700 mb-2">2. Luxury Tempo Traveller Gurgaon Premium Features</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Maharaja Pushback Seats - Airline Comfort</li>
                <li>● Individual AC Vents Every Seat</li>
                <li>● LED TV + Free WiFi + Bluetooth Music</li>
                <li>● Leather Interior + Mood Lighting</li>
                <li>● GPS Tracking + CCTV Safety</li>
              </ul>
            </div>

            <div className=" pb-4">
              <h4 className="font-bold  text-lg text-blue-700 mb-2">3. Tempo Traveller Booking in Gurgaon - Instant 3-Step Process</h4>
              <div className="text-sm space-y-1 text-gray-600 bg-gray-50 p-3 rounded">
                <p><strong>1. WhatsApp 9044019511:</strong> Send your itinerary</p>
                <p><strong>2. Reply &lt;2 mins:</strong> Get fixed <span className="underline">Gurgaon tempo traveller rent</span> quote</p>
                <p><strong>3. 20% UPI:</strong> Secure your doorstep pickup</p>
              </div>
            </div>

            <div className=" pb-4">
              <h4 className="font-bold text-lg text-blue-700 mb-2">4. Covers ALL Gurgaon Hotspots</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Cyber City: WorldMark, DLF Cyber Hub</li>
                <li>● Golf Course Road: DLF Phases 1-5</li>
                <li>● Udyog Vihar: Corporate offices</li>
                <li>● Sushant Lok: MG Road hotels</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-blue-700 mb-2">5. Perfect Corporate Group Travel Gurgaon Partner</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Client Airport Pickups - IGI Airport</li>
                <li>● Team Outings - Manesar weekend runs</li>
                <li>● WiFi + Charging - Work on the go</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className=" pb-4">
              <h4 className="font-bold text-lg text-blue-700 mb-2">6. Wedding Tempo Traveller Gurgaon - Baraat Ready</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Baraat + 20 Guests: 20 seater wedding specialized</li>
                <li>● Bride/Groom Family: 12 seater baraat specialized</li>
                <li>● Airport transfer tempo traveller Gurgaon for guests</li>
              </ul>
            </div>

            <div className=" pb-4">
              <h4 className="font-bold text-lg text-blue-700 mb-2">7. Outstation Tempo Traveller from Gurgaon Specialist</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Agra Taj Mahal - 230km specialized pricing</li>
                <li>● Jaipur Pink City - Round trip specialists</li>
                <li>● Weekend Hill Station runs</li>
              </ul>
            </div>

            <div className=" pb-4">
              <h4 className="font-bold text-lg text-blue-700 mb-2">8. Airport Transfer - Flight Tracking</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● Live PNR Monitoring - Free 2hr delay wait</li>
                <li>● Meet & Greet Placard at Terminal 3</li>
                <li>● Fixed <span className="underline">tempo traveller fare per km in Gurgaon</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-blue-700 mb-2">9. 24/7 Support & Guarantee</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>● English Speaking Drivers</li>
                <li>● 100% Refund till 4hrs before booking</li>
                <li>● Driver Night Halt Free (outstation)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* REASON 10: TRUSTED LOCATIONS */}
        <section className="bg-gray-900 text-white p-8 rounded-lg">
          <h4 className="font-bold text-xl mb-6 text-blue-400">10. Trusted by Top Gurgaon Locations</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-widest">
            <div className="border-l border-gray-700 pl-4">
              <p className="font-bold text-white">Cyber Hub</p>
              <p className="text-gray-500">IT Companies</p>
            </div>
            <div className="border-l border-gray-700 pl-4">
              <p className="font-bold text-white">Golf Course Rd</p>
              <p className="text-gray-500">5-Star Hotels</p>
            </div>
            <div className="border-l border-gray-700 pl-4">
              <p className="font-bold text-white">DLF Phases</p>
              <p className="text-gray-500">Luxury Residences</p>
            </div>
            <div className="border-l border-gray-700 pl-4">
              <p className="font-bold text-white">Udyog Vihar</p>
              <p className="text-gray-500">Manufacturing</p>
            </div>
          </div>
        </section>

{/* NEARBY CITIES SECTION */}
        <section className="mb-20 pt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-gray-900 pb-2 inline-block">
            Our Tempo Traveller Services in Nearby Cities – Delhi NCR Coverage
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Tempo traveller in Gurgaon by Yatra Travel India now serves all nearby cities! Best luxury tempo traveller rates for Gurgaon tempo traveller rent, tempo traveller booking across Delhi NCR. Tempo traveller fare per km is the same everywhere.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                <tr>
                  <th className="p-4 border-b">Nearby City</th>
                  <th className="p-4 border-b">Distance</th>
                  <th className="p-4 border-b">Popular Services</th>
                  <th className="p-4 border-b">9 Seater Rate</th>
                  <th className="p-4 border-b">20 Seater Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                {nearbyCities.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-4 font-bold text-gray-900">{row.city}</td>
                    <td className="p-4">{row.dist}</td>
                    <td className="p-4">{row.service}</td>
                    <td className="p-4 text-blue-700 font-medium">{row.r9}</td>
                    <td className="p-4 text-blue-700 font-medium">{row.r20}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-3xl font-black mb-10 text-center text-gray-900 uppercase tracking-tighter">FAQ - Tempo Traveller in Gurgaon</h2>
          <div className="space-y-8">
            {[
              { q: "What is the tempo traveller fare per km in Gurgaon?", a: "Tempo traveller fare per km in Gurgaon starts at Rs 24/km for 9 seater tempo traveller and goes up to Rs 38/km for 20 seater tempo traveller. Local tours (80km/8hrs) start from 3400 INR for 9 seater tempo traveller local tours." },
              { q: "How to book a tempo traveller in Gurgaon online?", a: "Tempo traveller booking in Gurgaon is easy - Call/WhatsApp 9044019511 with vehicle size, date, pickup location. Get instant Gurgaon tempo traveller rent quote in 2 minutes. Pay 20% advance via UPI. Doorstep pickup guaranteed." },
              { q: "What are the best luxury tempo traveller Gurgaon features?", a: "Luxury tempo traveller Gurgaon includes Maharaja pushback seats, individual AC vents, LED TV, free WiFi, Bluetooth music, leather interiors, USB charging every seat, and huge luggage space." },
              { q: "Which is the cheapest 9 seater tempo traveller in Gurgaon?", a: "9 seater tempo traveller Gurgaon rates: Local 3400 INR (80km), Airport transfer 3000 INR one-way, Agra outstation 6500 INR. Per km rate Rs 24/km + Rs 800 driver charges." },
              { q: "Does corporate group travel Gurgaon need advance booking?", a: "Yes, corporate group travel Gurgaon requires 24-48 hours advance booking for peak hours. 12 seater tempo traveller corporate rates available with WiFi for meetings." },
              { q: "What is 20 seater tempo traveller price in Gurgaon?", a: "20 seater tempo traveller Gurgaon local tour: 5200 INR (80km/8hrs), Airport drop: 5500 INR, Jaipur outstation: 10200 INR. Perfect for wedding baraat and big groups." },
              { q: "How much is the airport transfer tempo traveller Gurgaon to IGI?", a: "Gurgaon tempo traveller rent for airport transfers: 9 seater 3000 INR drop/3500 INR pickup, 20 seater 5500 INR drop/6000 INR pickup. Includes flight tracking, 45 mins free wait." },
              { q: "Can I hire a tempo traveller in Gurgaon for outstation trips?", a: "Yes, tempo traveller Gurgaon outstation available for Agra, Jaipur, Manesar, Rishikesh. Per km billing + free driver night halt. Golden Triangle 3D tour: 25,000 INR (15 seater)." },
              { q: "What documents are needed for tempo traveller booking in Gurgaon?", a: "Tempo traveller booking in Gurgaon requires: ID proof, 20% advance payment receipt, pickup address. No deposit for vehicles. Driver bata Rs 200/day extra." },
              { q: "Is wedding tempo traveller Gurgaon available with decorations?", a: "Wedding tempo traveller Gurgaon includes baraat special packages. 20 seater tempo traveller wedding: 13000 INR full day. Basic floral decorations available at extra cost." },
              { q: "Which Gurgaon areas have tempo traveller doorstep service?", a: "Cyber Hub tempo traveller, Golf Course Road tempo traveller, DLF Phases tempo traveller, Udyog Vihar tempo traveller, Sector 14-56 tempo traveller all areas covered with doorstep pickup." },
              { q: "What is the cancellation policy for Gurgaon tempo traveller rent?", a: "Gurgaon tempo traveller rent cancellation: 100% refund till 4 hours before pickup. 50% refund 2-4 hours before. No refund within 2 hours. Airport bookings non-cancellable." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{idx + 1}. {faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      {/* PAN-INDIA FOOTER SECTION */}
<section className="bg-gray-900 text-white p-10 rounded-2xl mt-20">
  <h2 className="text-2xl font-bold mb-6">Our Tempo Traveller Services Across Major Cities</h2>
  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
    Hey, Yatra Travel India's Tempo Traveller rentals aren't just one spot wonders—we've got you covered in key cities like Gurugram, Delhi, Chandigarh, Shimla, Dehradun, Haridwar, and even Mumbai. From 9-seater cozy rides to 26-seater group haulers, we're talking AC comfort, pushback seats, and pro drivers for local city runs, airport shuttles, weddings, or outstation adventures.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs uppercase tracking-widest font-bold">
    <div className="flex flex-col space-y-4">
      <Link href="/tempo-traveller/tempo-traveller-in-noida" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Noida Tempo Traveller
      </Link>
      <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Delhi Tempo Traveller
      </Link>
    </div>

    <div className="flex flex-col space-y-4">
      <Link href="/tempo-traveller/tempo-traveller-in-chandigarh" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Chandigarh Tempo Traveller
      </Link>
      <Link href="/tempo-traveller/tempo-traveller-in-lucknow" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Lucknow Tempo Traveller
      </Link>
    </div>

    <div className="flex flex-col space-y-4">
      <Link href="/tempo-traveller/tempo-traveller-in-shimla" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Shimla Tempo Traveller
      </Link>
      <Link href="/tempo-traveller/tempo-traveller-in-dehradun" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Dehradun Tempo Traveller
      </Link>
    </div>

    <div className="flex flex-col space-y-4">
      <Link href="/tempo-traveller/tempo-traveller-in-haridwar" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Haridwar Tempo Traveller
      </Link>
      <Link href="/tempo-traveller/tempo-traveller-in-mumbai" className="text-blue-400 hover:text-white transition-colors duration-200">
        ● Mumbai Tempo Traveller
      </Link>
    </div>
  </div>

  <div className="mt-10 pt-6 border-t border-gray-800 text-center text-[10px] text-gray-500">
    <p>© 2026 Yatra Travel India | Professional Tempo Traveller Hire Gurgaon & Delhi NCR</p>
  </div>
</section>

      </div>
    </div>
  );
};

export default GurgaonPage;