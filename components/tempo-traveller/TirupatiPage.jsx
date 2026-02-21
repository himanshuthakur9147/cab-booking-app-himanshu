import Link from 'next/link';
import React from 'react';
import TempoImageCards from './TempoImageCards';
import TempoSeatConfig from './TempoSeatConfig';

const TirupatiPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 leading-relaxed">
      <div className="max-w-6xl mx-auto py-12 px-6">
        
        {/* SECTION 1: INTRODUCTION */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-800 uppercase tracking-tighter">
              Tempo Traveller in Tirupati – Comfortable Group Travel for Temple Darshan & Sightseeing
            </h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Tirupati is one of the most visited pilgrimage destinations in India, attracting millions of devotees every year to seek 
              blessings at the sacred <strong>Sri Venkateswara Temple (Tirumala)</strong>. Whether you are planning a family pilgrimage, group 
              tour, corporate spiritual trip, or weekend getaway, choosing a <strong>Tempo Traveller in Tirupati</strong> is the most convenient way 
              to travel together comfortably and safely.
            </p>
            <p>
              At <strong>Yatra Travel India</strong>, we provide well-maintained <strong>9 seater, 12 seater, 16 seater, and 20 seater Tempo Travellers in 
              Tirupati</strong> with experienced drivers, spacious seating, and modern amenities. Our tempo travellers are ideal for Tirupati 
              darshan trips, airport and railway station pickups, Tirumala hill transfers, and nearby sightseeing tours.
            </p>
            <p>
              With transparent pricing, flexible packages, and 24/7 booking support, we ensure a smooth and stress-free group 
              travel experience in Tirupati and across Andhra Pradesh.
            </p>
          </div>
        </section>

        {/* SECTION 2: LUXURY TEMPO TRAVELLER */}
        <section className="mb-16 bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-blue-900 uppercase">
            Luxury Tempo Traveller in Tirupati – Premium Group Travel with Comfort & Style
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-gray-700">
                Experience comfortable and stylish group travel with our <strong>Luxury Tempo Traveller in Tirupati</strong>, designed for pilgrims, 
                families, corporate groups, and tourists who prefer premium travel standards. If you are searching for a reliable <strong>tempo 
                traveller in Tirupati</strong> or need a <strong>tempo traveller on rent in Tirupati</strong>, Yatra Travel India offers well-maintained luxury 
                vehicles with modern interiors, reclining seats, powerful AC, and ample legroom.
              </p>
              <p className="text-gray-700">
                Our service is ideal for anyone looking for a <strong>tempo traveller for pilgrimage to Tirumala Balaji Temple</strong>, local temple 
                visits, and nearby sightseeing. Whether it’s a family darshan trip or large group travel in Tirupati, we provide flexible 
                rental options and professional drivers for a smooth journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-200">
              <p className="text-sm font-semibold mb-4 text-blue-800">Key Highlights:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs uppercase tracking-wide font-bold text-gray-600">
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> Local & Outstation</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> Chennai to Tirupati</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> Multi-Day Trips</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> On-Time Pickups</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> Transparent Pricing</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✦</span> Memorable Journeys</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURES LIST */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-10 text-center uppercase text-gray-900">Features of Luxury Tempo Traveller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Plush Reclining Pushback Seats", desc: "Soft, wide, and fully reclining seats with armrests provide excellent comfort for long journeys." },
              { title: "Powerful Air Conditioning", desc: "High-performance AC keeps the cabin cool even during long summer trips." },
              { title: "Spacious Legroom & Wide Aisle", desc: "Extra leg space ensures passengers can stretch and relax without feeling cramped." },
              { title: "Premium Interior & Ambient Lighting", desc: "Stylish interiors, wooden flooring, and LED ambient lights give a luxury feel." },
              { title: "Individual Charging & Reading Lights", desc: "Each seat has mobile charging ports and reading lights for convenience." },
              { title: "Entertainment System", desc: "Bluetooth-enabled music system and speakers for enjoyable travel." },
              { title: "Large Luggage Carrier", desc: "Ample space for suitcases, backpacks, and travel gear with roof storage." },
              { title: "Smooth Suspension", desc: "Reduces road bumps and offers a smooth, quiet journey." },
              { title: "Safety Features", desc: "Seat belts, fire extinguisher, first-aid kit, and experienced driver." },
              { title: "Clean & Well-Maintained", desc: "Sanitized interiors and regular servicing for a hygienic ride." }
            ].map((feature, index) => (
              <div key={index} className="p-6 border-b-2 border-blue-100 hover:bg-blue-50 transition-colors">
                <h4 className="font-bold text-blue-700 mb-2">{index + 1}. {feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: EXPLORE COMFORTABLY */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight text-blue-400">Explore Tirupati Comfortably with AC Tempo Traveller</h2>
            <p className="text-gray-300 mb-6">
              Experience smooth and enjoyable travel with our <strong>AC tempo traveller in Tirupati</strong>, designed for comfortable group travel, 
              pilgrimage tours, family trips, and corporate outings. Whether you need a <strong>tempo traveller on rent in Tirupati</strong> for 
              Tirumala Balaji darshan, local sightseeing, or outstation journeys, we offer reliable and affordable solutions.
            </p>
            <p className="text-gray-300">
              Our <strong>tempo traveller rental in Tirupati</strong> comes with pushback seats, powerful air conditioning, spacious legroom, 
              individual charging points, music system, and large luggage space, ensuring a relaxing journey even on long routes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-900">Why choose our Rental Service?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <p className="text-sm text-gray-700">From small groups to large pilgrims, we provide multiple seating options, including <strong>9 seater, 12 seater, 16 seater, and 20 seater tempo travellers in Tirupati</strong>.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <p className="text-sm text-gray-700">Choosing <strong>tempo traveller hire in Tirupati</strong> helps your group travel together in one vehicle, saving time and cost while 
                enjoying maximum comfort.</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">✓</span>
                <p className="text-sm text-gray-700">With professional drivers and flexible pickup and drop locations, your Tirupati trip becomes 
                smooth, safe, and memorable.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 5: BALAJI DARSHAN FOCUS */}
        <section className="bg-blue-600 text-white p-10 rounded-2xl">
          <h2 className="text-3xl font-black mb-6 uppercase text-center">Tempo Traveller in Tirupati for Tirumala Balaji Darshan</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-center text-blue-50 font-medium">
              Planning a spiritual trip to Lord Venkateswara Temple? Choose our <strong>tempo traveller in Tirupati for Tirumala Balaji 
              darshan</strong> and enjoy a smooth, comfortable, and well-organized pilgrimage journey. We provide <strong>AC tempo traveller on 
              rent in Tirupati</strong> for families, friends, and large pilgrimage groups who want stress-free travel from Tirupati to Tirumala.
            </p>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
              <p className="text-sm text-center">
                Our <strong>tempo traveller hire in Tirupati</strong> comes with pushback seats, powerful air-conditioning, spacious legroom, charging 
                points, music system, and ample luggage space, making it ideal for both short temple visits and full-day darshan trips. 
                Whether you need a <strong>9 seater, 12 seater, 16 seater, or 20 seater tempo traveller in Tirupati</strong>, we have the right vehicle to 
                match your group size.
              </p>
            </div>
            <p className="text-center font-bold italic">
              With professional drivers experienced on the Tirupati–Tirumala ghat road, your safety and comfort are always 
              prioritized. Booking a <strong>tempo traveller rental in Tirupati for Balaji darshan</strong> allows your entire group to travel together, 
              avoid multiple taxis, and save both time and cost.
            </p>
            <div className="text-center pt-4">
              <Link href={"/"}><button className="bg-white text-blue-600 font-black px-8 py-3 rounded-full uppercase hover:bg-blue-50 transition-colors">
                Book Balaji Darshan Today
              </button></Link>
            </div>
          </div>
        </section>
<TempoImageCards/>
<TempoSeatConfig city={"tirupati"}/>
{/* SECTION: 12 SEATER */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-6 text-gray-900 border-b-4 border-blue-500 pb-2 inline-block uppercase tracking-tighter">
            12 Seater AC Tempo Traveller in Tirupati on Rent
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Looking for a comfortable and reliable option for group travel? Our <strong>12 seater AC tempo traveller in Tirupati on rent</strong> is perfect for Tirumala Balaji darshan, family trips, pilgrimage tours, corporate travel, and local sightseeing. 
            Designed to offer both comfort and convenience, this vehicle is ideal for small to medium-sized groups who want to travel together without stress.
          </p>
          <p className="mb-10 text-gray-700">
            With <strong>tempo traveller hire in Tirupati</strong>, you get a well-maintained AC vehicle, experienced driver, and flexible pickup & drop options. Whether it’s a one-day Tirupati temple tour or an outstation trip from Tirupati, this option ensures a smooth and pleasant journey.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-xl mb-6 text-blue-900">Features of 12 Seater AC Tempo Traveller in Tirupati</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-700">
                <li className="flex items-center">● Powerful Air Conditioning</li>
                <li className="flex items-center">● Comfortable pushback reclining seats</li>
                <li className="flex items-center">● Spacious legroom and wide aisle</li>
                <li className="flex items-center">● Individual mobile charging points</li>
                <li className="flex items-center">● Music system & LED lighting</li>
                <li className="flex items-center">● Large luggage space</li>
                <li className="flex items-center">● Clean & sanitized interiors</li>
                <li className="flex items-center">● Experienced and polite driver</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="font-bold text-blue-900">Seating Capacity</p>
                <p className="text-sm"><strong>Passenger Capacity: 12+1 Driver</strong></p>
                <p className="text-sm">Suitable for families, pilgrims, friends, and corporate groups</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <h3 className="font-bold text-xl mb-6">Fare Chart</h3>
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 border-b font-bold text-sm uppercase">Trip Type</th>
                    <th className="p-4 border-b font-bold text-sm uppercase">Starting Price*</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border-b">Local Tirupati Sightseeing (8 Hrs / 80 Km)</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹4,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Tirupati to Tirumala Balaji Darshan</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹5,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Outstation Trips</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹22 – ₹27 per km</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">One Day Package</td>
                    <td className="p-4 border-b font-bold text-blue-600">From ₹6,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs italic text-gray-500">*Prices may vary based on season, distance, and travel duration.</p>
            </div>
          </div>
        </section>

        {/* SECTION: 16 SEATER */}
        <section className="mb-20">
          <h2 className="text-3xl font-black mb-6 text-gray-900 border-b-4 border-blue-500 pb-2 inline-block uppercase tracking-tighter">
            16 Seater AC Tempo Traveller Hire in Tirupati
          </h2>
          <p className="mb-10 text-gray-700">
            Our <strong>16 seater AC tempo traveller hire in Tirupati</strong> is the perfect choice for large families, pilgrimage groups, friends, and corporate teams planning a comfortable and well-organized journey. Whether you are visiting for Tirumala Balaji darshan, local temple tours, or outstation trips, this spacious vehicle ensures everyone travels together in comfort. 
            With <strong>tempo traveller on rent in Tirupati</strong>, you get a fully air-conditioned vehicle with modern amenities, ample legroom, and a professional driver who knows Tirupati and Tirumala routes well.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-xl mb-6 text-gray-800">Features of 16 Seater AC Tempo Traveller in Tirupati</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-700">
                <li className="flex items-center">● Powerful air-conditioning</li>
                <li className="flex items-center">● Pushback reclining seats with armrests</li>
                <li className="flex items-center">● Spacious legroom and wide aisle</li>
                <li className="flex items-center">● Individual mobile charging points</li>
                <li className="flex items-center">● Music system & LED interior lights</li>
                <li className="flex items-center">● Large luggage carrier & roof storage</li>
                <li className="flex items-center">● Clean and sanitized interiors</li>
                <li className="flex items-center">● Experienced driver for ghat roads</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-bold">Seating Capacity</p>
                <p className="text-sm"><strong>Passenger Capacity: 16+1 Driver</strong></p>
                <p className="text-sm text-gray-500 uppercase tracking-tighter">Ideal for pilgrimage groups, family tours, and corporate travel</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <h3 className="font-bold text-xl mb-6">Fare Chart (Indicative)</h3>
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="p-4 border-b font-bold text-xs uppercase tracking-widest">Trip Type</th>
                    <th className="p-4 border-b font-bold text-xs uppercase tracking-widest">Starting Price*</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border-b">Local Tirupati Sightseeing (8 Hrs / 80 Km)</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹5,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Tirupati to Tirumala Balaji Darshan</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹6,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Outstation Trips</td>
                    <td className="p-4 border-b font-bold text-blue-600">₹25 – ₹29 per km</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">One Day Package</td>
                    <td className="p-4 border-b font-bold text-blue-600">From ₹7,000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs italic text-gray-500">*Rates may vary based on season, distance, and travel duration.</p>
            </div>
          </div>
        </section>

        {/* SECTION: 20 SEATER */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6 text-gray-900 border-b-4 border-blue-500 pb-2 inline-block uppercase tracking-tighter">
            20 Seater Tempo Traveller in Tirupati for Large Groups
          </h2>
          <p className="mb-10 text-gray-700">
            Travel comfortably with your entire group using our <strong>20 seater tempo traveller in Tirupati for large groups</strong>, ideal for Tirumala Balaji darshan, pilgrimage tours, family outings, corporate trips, school groups, and wedding travel. 
            With our <strong>tempo traveller hire in Tirupati</strong>, you can avoid the hassle of booking multiple vehicles and keep everyone together in one AC vehicle. Our <strong>tempo traveller on rent in Tirupati</strong> comes with modern amenities, professional drivers, and flexible pickup & drop options.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-blue-100 p-8 rounded-2xl border border-blue-200">
              <h3 className="font-bold text-xl mb-6 text-blue-950">Features of 20 Seater Tempo Traveller in Tirupati</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-blue-900">
                <li className="flex items-center">● Powerful air-conditioning for all seasons</li>
                <li className="flex items-center">● Comfortable pushback reclining seats</li>
                <li className="flex items-center">● Spacious legroom and wide aisle</li>
                <li className="flex items-center">● Individual charging & reading lights</li>
                <li className="flex items-center">● Music system & LED interior lighting</li>
                <li className="flex items-center">● Large luggage carrier & roof storage</li>
                <li className="flex items-center">● Clean, sanitized, and well-maintained</li>
                <li className="flex items-center">● Experienced driver for city & ghat routes</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="font-bold text-blue-950 uppercase text-xs">Seating Capacity</p>
                <p className="text-lg"><strong>20+1 Driver</strong></p>
                <p className="text-sm">Best suited for large pilgrimage groups, families, corporates, and tour groups</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <h3 className="font-bold text-xl mb-6">Fare Chart (Indicative)</h3>
              <table className="w-full text-left border-collapse border border-gray-200">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 border-b font-bold text-xs uppercase tracking-widest">Trip Type</th>
                    <th className="p-4 border-b font-bold text-xs uppercase tracking-widest">Starting Price*</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border-b">Local Tirupati Sightseeing (8 Hrs / 80 Km)</td>
                    <td className="p-4 border-b font-bold text-blue-700">₹6,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Tirupati to Tirumala Balaji Darshan</td>
                    <td className="p-4 border-b font-bold text-blue-700">₹7,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">Outstation Trips</td>
                    <td className="p-4 border-b font-bold text-blue-700">₹28 – ₹32 per km</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b">One Day Package</td>
                    <td className="p-4 border-b font-bold text-blue-700">From ₹8,500</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-xs italic text-gray-500">*Rates may vary based on season, distance, and travel duration.</p>
            </div>
          </div>
        </section>

{/* SECTION: LOCAL SIGHTSEEING */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6 text-gray-900 border-b-4 border-blue-600 pb-2 inline-block uppercase tracking-tighter">
            Local Sightseeing in Tirupati by Tempo Traveller
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Exploring Tirupati becomes easy and comfortable when you choose <strong>local sightseeing in Tirupati by tempo traveller</strong>. 
            Known for its sacred temples and spiritual atmosphere, Tirupati attracts pilgrims and tourists from across India. With a 
            <strong>tempo traveller in Tirupati</strong>, your entire group can visit all major attractions together without the hassle of multiple taxis 
            or crowded public transport.
          </p>
          <p className="mb-8 text-gray-700">
            Our <strong>AC tempo traveller on rent in Tirupati</strong> is equipped with pushback reclining seats, powerful air-conditioning, 
            spacious legroom, charging points, music system, and large luggage space, making every journey relaxed and 
            enjoyable. Whether you need a <strong>9 seater, 12 seater, 16 seater, or 20 seater tempo traveller in Tirupati</strong>, we provide the 
            right vehicle for your group size.
          </p>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-xl mb-6 text-blue-900">Popular places covered under Tirupati local sightseeing by tempo traveller include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Tirumala Balaji Temple",
                "Sri Padmavathi Ammavari Temple",
                "Kapila Theertham",
                "ISKCON Tirupati",
                "Chandragiri Fort",
                "Srivari Mettu & Alipiri Footpath",
                "Sri Vari Museum"
              ].map((place, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg border border-blue-200">
                  <span className="text-blue-600 font-bold">●</span>
                  <span className="text-sm font-semibold">{place}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 italic">
              With <strong>tempo traveller hire in Tirupati</strong>, you can easily cover top attractions in a single day or at your own pace.
            </p>
          </div>
        </section>

        {/* SECTION: POPULAR ROUTES */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-10 text-gray-900 uppercase">Popular Routes from Tirupati by Tempo Traveller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Tirumala Tempo Traveller</h4>
              <p className="text-xs text-gray-600">The most demanded route for devotees is <strong>Tirupati to Tirumala tempo traveller service</strong>. Ideal for Tirumala Balaji darshan, this route is perfect for families and large pilgrimage groups. Our experienced drivers ensure safe travel on ghat roads.</p>
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Chennai Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Book <strong>Tirupati to Chennai tempo traveller</strong> for family trips, airport transfers, and group travel. Comfortable AC vehicles make this long route relaxed and hassle-free.</p>
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Bangalore Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Our <strong>Tirupati to Bangalore tempo traveller service</strong> is popular for corporate travel, family vacations, and group tours. Enjoy pushback seats, AC comfort, and ample luggage space.</p>
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Vellore Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Perfect for hospital visits, temple tours, and family trips. Choose <strong>tempo traveller hire in Tirupati to Vellore</strong> for smooth and affordable travel.</p>
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Srikalahasti Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Ideal for devotees visiting Srikalahasti Temple. Our <strong>tempo traveller rental in Tirupati</strong> ensures easy group movement.</p>
            </div>
            <div className="border-t-2 border-gray-200 pt-4">
              <h4 className="font-bold text-blue-700 mb-2">Tirupati to Kanchipuram Tempo Traveller</h4>
              <p className="text-xs text-gray-600">Popular for temple tours and spiritual circuits. Comfortable option for group pilgrimage travel.</p>
            </div>
          </div>
        </section>

        {/* SECTION: ONE DAY PACKAGES */}
        <section className="mb-16 bg-gray-900 text-white p-8 md:p-12 rounded-3xl">
          <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-blue-400">One Day Tirupati Tempo Traveller Packages</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                Our <strong>One Day Tirupati Tempo Traveller Packages</strong> are specially designed for pilgrims, families, and group travelers 
                who want a smooth and well-organized darshan and sightseeing experience. With <strong>tempo traveller in Tirupati</strong>, you 
                can comfortably visit major temples and attractions in a single day without worrying about transport arrangements.
              </p>
              <p className="text-gray-300 mb-6">
                We offer <strong>AC tempo traveller on rent in Tirupati</strong> with modern amenities like pushback seats, powerful AC, spacious 
                legroom, charging points, music system, and ample luggage space.
              </p>
              <h4 className="font-bold mb-4 text-blue-200">Our tempo traveller hire in Tirupati packages typically cover:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-400">
                <li>● Tirumala Balaji Temple</li>
                <li>● Sri Padmavathi Ammavari Temple</li>
                <li>● Kapila Theertham</li>
                <li>● ISKCON Tirupati</li>
                <li>● Chandragiri Fort / Sri Vari Museum</li>
              </ul>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg">
              <h4 className="text-center font-bold text-lg mb-6 uppercase">One Day Tirupati Tempo Traveller Fare Chart (Indicative)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-blue-500">
                      <th className="py-3 px-2 text-xs font-black uppercase">Vehicle Type</th>
                      <th className="py-3 px-2 text-xs font-black uppercase text-right">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-2 font-bold">9 Seater AC Tempo Traveller</td>
                      <td className="py-4 px-2 text-right font-black text-blue-600">₹6,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-2 font-bold">12 Seater AC Tempo Traveller</td>
                      <td className="py-4 px-2 text-right font-black text-blue-600">₹7,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-2 font-bold">16 Seater AC Tempo Traveller</td>
                      <td className="py-4 px-2 text-right font-black text-blue-600">₹8,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-2 font-bold">20 Seater AC Tempo Traveller</td>
                      <td className="py-4 px-2 text-right font-black text-blue-600">₹8,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-xs text-gray-500 italic">Prices may vary based on season, travel distance, and duration.</p>
            </div>
          </div>
        </section>

        {/* SECTION: HOW TO BOOK */}
        <section className="mb-16 bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
          <h2 className="text-3xl font-black mb-8 text-gray-900 uppercase tracking-tighter">
            How to Book Tempo Traveller in Tirupati
          </h2>
          <p className="mb-10 text-lg text-gray-700">
            Booking a tempo traveller in Tirupati is quick and simple with <strong>Yatra Travel India</strong>. Whether you need a vehicle for 
            Tirumala Balaji darshan, local sightseeing, or outstation trips, we make the booking process smooth and hassle free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex space-x-4">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <h4 className="font-bold text-gray-900">Step 1: Share Your Travel Details</h4>
                <p className="text-sm text-gray-600">Call or message us with your travel date, pickup location, destination, number of passengers, and trip type (one-day, multi-day, or outstation).</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <h4 className="font-bold text-gray-900">Step 2: Choose the Right Vehicle</h4>
                <p className="text-sm text-gray-600">Select from <strong>9 seater, 12 seater, 16 seater, or 20 seater AC tempo travellers in Tirupati</strong>, including luxury options if required.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <h4 className="font-bold text-gray-900">Step 3: Get Instant Quote</h4>
                <p className="text-sm text-gray-600">We provide a transparent price for your <strong>tempo traveller hire in Tirupati</strong> with no hidden charges.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <h4 className="font-bold text-gray-900">Step 4: Confirm Booking</h4>
                <p className="text-sm text-gray-600">Pay a small advance to confirm your <strong>tempo traveller on rent in Tirupati</strong>. You’ll receive vehicle and driver details.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
              <div>
                <h4 className="font-bold text-gray-900">Step 5: Enjoy the Journey</h4>
                <p className="text-sm text-gray-600">Your tempo traveller arrives on time at your chosen pickup point for a smooth and comfortable trip.</p>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center font-bold text-blue-800">
            Book your <strong>tempo traveller rental in Tirupati</strong> today and enjoy safe, affordable, and convenient group travel in Tirupati.
          </p>
        </section>

        {/* SECTION: FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-black mb-10 text-gray-900 uppercase">FAQs – Tempo Traveller in Tirupati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">1. How can I book a tempo traveller in Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">You can easily book a tempo traveller in Tirupati by calling or sending a WhatsApp message to <strong>Yatra Travel India</strong>. We offer instant confirmation for <strong>tempo traveller booking in Tirupati</strong>.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">2. What types of tempo travellers are available in Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">We provide <strong>9 seater, 12 seater, 16 seater, and 20 seater AC tempo travellers in Tirupati</strong>, including luxury tempo travellers for premium group travel.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">3. Is tempo traveller available in Tirupati for Tirumala Balaji darshan?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. Our <strong>tempo traveller for Tirumala Balaji darshan</strong> is ideal for pilgrimage groups, families, and senior citizens.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">4. What is the price of tempo traveller on rent in Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">The cost of <strong>tempo traveller on rent in Tirupati</strong> depends on vehicle size, trip duration, and route. We offer transparent pricing with no hidden charges.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">5. Do you provide one day Tirupati tempo traveller packages?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. We offer <strong>one day Tirupati tempo traveller packages</strong> covering major temples and sightseeing places.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">6. Are outstation tempo traveller services available from Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. We provide <strong>outstation tempo traveller from Tirupati</strong> to Chennai, Bangalore, Vellore, Srikalahasti, and Kanchipuram.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">7. Are AC tempo travellers available in Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. All our vehicles are <strong>fully air-conditioned tempo travellers in Tirupati</strong> with pushback seats and spacious interiors.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">8. Can I book a tempo traveller in Tirupati for family trip?</p>
              <p className="text-sm text-gray-600 mt-2">Absolutely. Our <strong>tempo traveller hire in Tirupati for family trip</strong> is perfect for comfortable group travel.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">9. Is tempo traveller suitable for large pilgrimage groups?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. Our <strong>20 seater tempo traveller in Tirupati</strong> is ideal for large pilgrimage and tour groups.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">10. Do you provide pickup from hotel, railway station, or airport?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. We offer flexible pickup from hotel, <strong>Tirupati railway station, and Tirupati airport</strong>.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">11. Are drivers experienced for ghat road driving?</p>
              <p className="text-sm text-gray-600 mt-2">Yes. Our drivers are experienced with <strong>Tirupati–Tirumala ghat routes</strong> and local roads.</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <p className="font-bold text-blue-700">12. Why choose Yatra Travel India for tempo traveller in Tirupati?</p>
              <p className="text-sm text-gray-600 mt-2">We offer well-maintained AC vehicles, professional drivers, affordable pricing, instant confirmation, and reliable service.</p>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION: OTHER CITIES */}
        <section className="bg-gray-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8 text-blue-400">Our Tempo Traveller Services In Other Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <Link href="/tempo-traveller/tempo-traveller-in-delhi" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in new delhi</strong> for corporate travel, weddings, and outstation routes
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-hyderabad" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in hyderabad</strong> for city tours, IT corporate movement, and airport transfers
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-bangalore" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in bangalore</strong> for weddings, tourism, and destination events
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-chennai" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in Chennai</strong> for family travel, government movement, and religious tours
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-indore" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in indore</strong> for business travel and regional group movement
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-bhopal" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in bhopal</strong> for school trips, weddings, and outstation journeys
            </Link>
            <Link href="/tempo-traveller/tempo-traveller-in-varanasi" className="hover:text-blue-300 transition-colors">
              ● <strong>tempo traveller in varanasi</strong> for pilgrimage groups and cultural tours
            </Link>
          </div>
        </section>


      </div>
    </div>
  );
};

export default TirupatiPage;