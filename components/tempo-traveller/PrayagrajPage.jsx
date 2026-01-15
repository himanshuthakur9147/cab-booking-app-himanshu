import {
  FaWater,
  FaLandmark,
  FaMapMarkedAlt,
  FaMapMarkerAlt ,
  FaCheckCircle,
 FaPhoneAlt,
  FaWhatsapp,
  FaClipboardList,
  FaBus,
 FaUsers,
  FaSnowflake,
  FaRoad,
  FaStar,
  FaSuitcase,
  FaBusAlt,
FaLocationArrow,
 FaQuestionCircle ,
  FaTrafficLight,
  FaShieldAlt,
  FaCalendarCheck,

  FaRoute,
  FaUserCheck,
 
  FaTree,
  FaPlaceOfWorship,
  FaShip,

} from "react-icons/fa";
import TempoImageCards from "./TempoImageCards";
import TempoSeatConfig from "./TempoSeatConfig";

const faqs = [
  {
    question: `How can I book a tempo traveller in Prayagraj with Yatra Travel India?`,
    answer: `Booking a tempo traveller in Prayagraj is quick and hassle-free with Yatra Travel India. 
You can reserve online, call, or WhatsApp us with your pickup location, number of 
passengers, travel dates, and destination. Get instant confirmation for your Prayagraj group 
travel or outstation trip.`,
  },
  {
    question: `Why should I choose Yatra Travel India for tempo traveller hire in Prayagraj?`,
    answer: `We provide fully AC, spacious, and reliable tempo travellers in Prayagraj with verified 
drivers. Whether it’s Kumbh Mela, Magh Mela, Triveni Sangam visits, corporate trips, or 
weddings, our vehicles ensure safety, comfort, and punctuality. Transparent tempo 
traveller fares in Prayagraj make us a trusted choice.`,
  },
  {
    question: `Can I hire a tempo traveller in Prayagraj for outstation trips?`,
    answer: `Yes! Our Prayagraj tempo traveller service covers popular destinations like Varanasi, 
Ayodhya, Chitrakoot, Haridwar, and Lucknow. Enjoy comfortable travel with large luggage 
capacity, experienced drivers, and round-trip or one-way options.`,
  },
  {
    question: `What types of vehicles are available for tempo traveller hire in Prayagraj?`,
    answer: (
      <ul className="list-disc list-inside space-y-1 text-neutral-700">
        <li>9–12 seater tempo travellers in Prayagraj for small groups</li>
        <li>16–20 seater AC mini buses for medium to large groups</li>
        <li>Luxury 25–35 seater buses for corporate or wedding transfers</li>
        <li>Volvo 45+ seater coaches for mega-group travel</li>
      </ul>
    ),
  },
  {
    question: `How is pricing calculated for tempo traveller hire in Prayagraj?`,
    answer: `Pricing depends on vehicle type, trip distance, duration, and additional services. Our 
tempo traveller per km price in Prayagraj is transparent with no hidden charges. Fuel, 
tolls, and driver allowances are included, ensuring cost-effective group travel.`,
  },
  {
    question: `Can I hire a tempo traveller in Prayagraj for local sightseeing and city tours?`,
    answer: `Absolutely! Our Prayagraj local tempo traveller service is perfect for visiting Triveni 
Sangam, Allahabad Fort, Anand Bhavan, Kydganj, Civil Lines, and Naini areas. Flexible 
hourly or daily packages are available for family tours, school trips, or corporate sightseeing.`,
  },
  {
    question: `Are the drivers experienced and familiar with Prayagraj traffic?`,
    answer: `Yes. All drivers in Prayagraj are professional, verified, and trained to handle local traffic 
conditions, including festival crowds during Kumbh Mela or Magh Mela, peak NH19 routes, 
and city congestion around Civil Lines, GT Road, and NH30.`,
  },
  {
    question: `Can I customize my Prayagraj trip with multiple stops or specific schedules?`,
    answer: `Yes. Our Prayagraj tempo traveller service is fully flexible. You can plan multi-stop 
pilgrimages, corporate visits, wedding transfers, or weekend excursions. Our team helps you 
optimize routes for comfort, time, and safety.`,
  },
  {
    question: `How early should I book a tempo traveller in Prayagraj?`,
    answer: `For major events like Kumbh Mela, Magh Mela, or wedding season, we recommend 
booking 3–7 days in advance to ensure vehicle availability and the best tempo traveller 
fare in Prayagraj.`,
  },
  {
    question: `Is Yatra Travel India available for emergency or last-minute bookings in Prayagraj?`,
    answer: `Yes. We offer instant booking for Prayagraj tempo travellers via call or WhatsApp, 
ensuring prompt pickup, professional drivers, and hassle-free group travel at competitive 
rates.`,
  },
];


export default function PrayagrajPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-sky-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Prayagraj – The Land of Triveni Sangam, Kumbh Mela & Magh Mela
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Prayagraj, formerly known as Allahabad, is one of India’s most
            historically and spiritually significant cities.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-5">
        <p>
          Prayagraj, formerly known as Allahabad, is one of India’s most
          historically and spiritually significant cities. Situated at the
          sacred confluence of the Ganga, Yamuna, and the mythical Saraswati
          rivers, called the Triveni Sangam, Prayagraj has been a center of
          religious, cultural, and political importance for thousands of years.
        </p>
        <p>
          The name Prayag means “place of sacrifice,” highlighting its ancient
          significance as a site for Vedic rituals and offerings. References to
          Prayagraj appear in revered texts like the Mahabharata and the Puranas,
          establishing it as a city deeply intertwined with India’s spiritual
          heritage.
        </p>
      </section>

      {/* HISTORY */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <FaLandmark className="text-blue-600" />
              Ancient and Medieval Era
            </h2>
            <p className="mb-4">
              Prayagraj’s history dates back to the Mauryan period (3rd century
              BCE), when it became an important administrative and cultural hub.
              The city continued to flourish under the Gupta Empire, known as
              the Golden Age of India, fostering art, literature, and education.
            </p>
            <p>
              During the medieval period, the Mughal emperors recognized the
              city’s strategic and religious importance. Emperor Akbar renamed
              it Ilahabad, meaning “City of God,” a name that later evolved into
              Allahabad under British rule. The British administration further
              developed Prayagraj as a center of governance, education, and
              culture.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <FaMapMarkedAlt className="text-4xl text-blue-600 mb-3" />
            <p>
              Prayagraj’s layered history reflects India’s political, cultural,
              and spiritual journey across centuries.
            </p>
          </div>
        </div>
      </section>

      {/* SPIRITUAL */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
          <FaWater className="text-blue-600" />
          Spiritual Significance – Kumbh Mela & Magh Mela
        </h2>
        <p className="mb-4">
          Prayagraj is globally renowned for its Kumbh Mela, held every 12 years
          at the Triveni Sangam, attracting millions of pilgrims from all over
          India and the world. Considered one of the largest religious
          gatherings on the planet, Kumbh Mela combines devotion, tradition,
          and spiritual cleansing rituals.
        </p>
        <p>
          In addition to Kumbh Mela, the city hosts the Magh Mela annually,
          during the Hindu month of Magh (January–February). Devotees take holy
          dips in the Triveni Sangam, believing it purifies the soul and washes
          away sins. These events have made Prayagraj synonymous with
          spirituality and pilgrimage.
        </p>
      </section>

      {/* MODERN */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl font-bold text-blue-900">
            Modern-Day Prayagraj
          </h2>
          <p>
            Prayagraj has also played a pivotal role in India’s modern history,
            serving as a center of the Indian independence movement and
            nurturing political and cultural leaders. Today, it is a vibrant
            city blending ancient traditions with modern infrastructure.
          </p>
          <p>
            Besides its religious significance, Prayagraj is home to historic
            ghats, temples, educational institutions, and heritage landmarks,
            making it a must-visit city for travelers, pilgrims, and history
            enthusiasts.
          </p>
        </div>
      </section>

      {/* WHY VISIT */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Why Visit Prayagraj?
        </h2>
        <ul className="space-y-3">
          {[
            "Witness the Triveni Sangam, where three sacred rivers meet.",
            "Attend the Kumbh Mela, the world’s largest spiritual gathering.",
            "Participate in the annual Magh Mela, a major Hindu festival.",
            "Explore historic sites, colonial-era architecture, and ancient temples.",
            "Experience the city’s unique blend of spirituality, culture, and history.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* KEY PLACES */}
        <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Key Places to Explore in Prayagraj – Spiritual & Historic Highlights
        </h2>

        <p className="text-gray-700 mb-10 max-w-4xl">
          Prayagraj is a city where history, spirituality, and culture converge,
          making it a must-visit destination in India. From the sacred Triveni
          Sangam to colonial-era landmarks, here are the top places to explore
          in Prayagraj:
        </p>

        {/* 1 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaWater className="text-blue-600" />
            1. Triveni Sangam – The Sacred Confluence
          </h3>
          <p className="text-gray-700">
            The Triveni Sangam is the heart of Prayagraj, where the Ganga, Yamuna,
            and the mythical Saraswati rivers meet. It is the site of the Kumbh
            Mela held every 12 years and the Magh Mela every January–February.
            Pilgrims from across India come here for holy dips, making it the
            spiritual epicenter of the city.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaLandmark className="text-blue-600" />
            2. Anand Bhavan
          </h3>
          <p className="text-gray-700">
            An iconic heritage mansion, Anand Bhavan was the ancestral home of
            the Nehru-Gandhi family. Now a museum, it showcases artifacts,
            photographs, and the history of India’s independence movement.
            It’s a must-visit for history enthusiasts and cultural travelers
            in Prayagraj.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaLandmark className="text-blue-600" />
            3. Allahabad Fort
          </h3>
          <p className="text-gray-700">
            Built by Emperor Akbar in 1583, Allahabad Fort is a massive red
            sandstone structure near the Triveni Sangam. While parts are
            restricted, the fort’s architecture and nearby Ashoka Pillar make
            it a popular sightseeing spot for travelers in Prayagraj.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaTree className="text-blue-600" />
            4. Khusro Bagh
          </h3>
          <p className="text-gray-700">
            Khusro Bagh is a sprawling Mughal garden and tomb complex that
            reflects India’s rich Mughal heritage. It houses the tombs of
            Prince Khusro and other royalty, making it one of the serene and
            historic attractions in Prayagraj.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaLandmark className="text-blue-600" />
            5. Swaraj Bhavan
          </h3>
          <p className="text-gray-700">
            The birthplace of Motilal Nehru, Swaraj Bhavan is now a museum that
            preserves artifacts from the Indian independence movement. It is
            located near Civil Lines, a central area in Prayagraj, and is a
            favorite for history buffs and tourists alike.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaPlaceOfWorship className="text-blue-600" />
            6. Hanuman Mandir & Alfred Park
          </h3>
          <p className="text-gray-700">
            The Hanuman Mandir near Chowk area is a major religious site, while
            Alfred Park (Company Bagh) is a colonial-era park perfect for
            leisurely walks and group visits. These spots highlight both the
            spiritual and recreational side of Prayagraj.
          </p>
        </div>

        {/* 7 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaShip className="text-blue-600" />
            7. Sangam View Points & Boat Rides
          </h3>
          <p className="text-gray-700">
            For tourists visiting the Triveni Sangam, boat rides offer an
            unforgettable view of the confluence. These rides are especially
            popular during sunrise and festivals, providing photo
            opportunities and a spiritual experience.
          </p>
        </div>

        {/* 8 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-3">
            <FaMapMarkedAlt className="text-blue-600" />
            8. Other Attractions
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All Saints Cathedral – Gothic-style church reflecting colonial architecture.</li>
            <li>Patalpuri Temple – Ancient underground temple inside Allahabad Fort.</li>
            <li>Chandra Shekhar Azad Park – Open grounds for local gatherings and picnics.</li>
            <li>Railway Heritage Museum – Near Prayagraj Junction for transport history enthusiasts.</li>
          </ul>
        </div>

      </div>
    </section>

    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          How to Book a Tempo Traveller with Yatra Travel India in Prayagraj
        </h2>

        {/* Intro */}
        <div className="bg-white rounded-xl shadow p-6 mb-10 space-y-4">
          <p className="text-gray-700">
            Booking a tempo traveller in Prayagraj with Yatra Travel India is
            simple, transparent, and tailored for group travel needs — whether
            it’s for local sightseeing, airport transfers, or outstation
            journeys to Varanasi, Ayodhya, or Haridwar.
          </p>
          <p className="text-gray-700">
            Yatra Travel India offers Tempo Traveller hire in Prayagraj at
            ₹21/km, making large group travel easy, comfortable, and economical.
            Ideal for airport transfers, outstation trips, and religious tours
            to Kumbh Mela or Triveni Sangam, with verified drivers and premium
            vehicles.”
          </p>
        </div>

        <p className="text-lg font-semibold text-blue-900 mb-6">
          Follow these easy steps to secure your vehicle:
        </p>

        {/* STEP 1 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaPhoneAlt className="text-blue-600" />
            Step 1 — Share Your Travel Details
          </h3>
          <p className="text-gray-700 mb-3">
            Call or send a WhatsApp message to Yatra Travel India with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Your pickup location in Prayag / Prayagraj</li>
            <li>Destination (local or outstation)</li>
            <li>Travel date and time</li>
            <li>Number of passengers</li>
            <li>
              Preferred vehicle type (12 seater, 16 seater, 20 seater, bus, etc.)
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            This helps us recommend the best tempo traveller hire in Prayagraj
            for your needs.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaClipboardList className="text-blue-600" />
            Step 2 — Get a Customized Quote
          </h3>
          <p className="text-gray-700 mb-3">
            Once we have your details, our team prepares a clear and competitive
            tempo traveller fare in Prayagraj. This quote includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-600 mt-1" />
              Vehicle type & seating capacity
            </li>
            <li className="flex gap-2">
              <FaRoute className="text-blue-600 mt-1" />
              Total distance and route plan
            </li>
            <li className="flex gap-2">
              <FaUserCheck className="text-blue-600 mt-1" />
              Driver charges & wait time policy
            </li>
            <li className="flex gap-2">
              <FaCheckCircle className="text-blue-600 mt-1" />
              Toll & parking details
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            We explain everything so you know the tempo traveller rental price
            in Prayagraj before you confirm.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaWhatsapp className="text-blue-600" />
            Step 3 — Confirm Your Booking
          </h3>
          <p className="text-gray-700 mb-3">
            You can confirm your tempo traveller booking in Prayagraj by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Replying via WhatsApp</li>
            <li>Calling our support number</li>
            <li>Confirming through our online booking form</li>
          </ul>
          <p className="text-gray-700 mt-3">
            A small advance secures your vehicle — we handle the rest.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaBus className="text-blue-600" />
            Step 4 — Receive Ride Details
          </h3>
          <p className="text-gray-700 mb-3">
            After confirmation, we send you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Vehicle details (model, seating, AC/non-AC)</li>
            <li>Driver name and contact</li>
            <li>Pickup details with arrival time</li>
          </ul>
          <p className="text-gray-700 mt-3">
            This ensures your tempo traveller in Prayagraj arrives on time.
          </p>
        </div>

        {/* STEP 5 */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaCheckCircle className="text-blue-600" />
            Step 5 — Travel with Comfort & Safety
          </h3>
          <p className="text-gray-700 mb-3">
            On the travel day:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Our driver reaches your pickup point in Prayagraj</li>
            <li>Assists with luggage and seating</li>
            <li>
              Follows your itinerary for sightseeing, outstation travel, or
              airport transfers (Allahabad Airport / Prayagraj Airport)
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            With Yatra Travel India, your journey is smooth, comfortable, and
            coordinated.
          </p>
        </div>

      </div>
    </section>

     <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          How to Select Your Preferred Vehicle Type for a Tempo Traveller in Prayagraj
        </h2>

        {/* INTRO */}
        <p className="text-gray-700 bg-white p-6 rounded-xl shadow">
          Choosing the right tempo traveller in Prayagraj is key to a comfortable, hassle-free
          journey. At Yatra Travel India, we help you select the perfect vehicle based on your group
          size, trip type, and travel comfort preferences.
        </p>

        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaUsers className="text-blue-600" />
            1. Consider Your Group Size
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>9–12 Seater Tempo Traveller in Prayagraj:</strong> Ideal for small families,
              corporate teams, or group friends traveling within the city or short outstation trips.
            </li>
            <li>
              <strong>15–16 Seater Tempo Traveller in Prayagraj:</strong> Perfect for medium-sized
              groups, school trips, or extended sightseeing tours.
            </li>
            <li>
              <strong>20 Seater or Mini Bus in Prayagraj:</strong> Best suited for large groups,
              wedding parties, political events, or pilgrimage tours like Kumbh Mela or Magh Mela.
            </li>
          </ul>
          <p className="mt-3 text-gray-700">
            Using the right vehicle size in Prayagraj ensures ample legroom, luggage space, and
            comfortable seating throughout your trip.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaSnowflake className="text-blue-600" />
            2. AC vs Non-AC Vehicles
          </h3>
          <p className="text-gray-700">
            Prayagraj summers can be extremely hot, while winters can bring foggy mornings. Choosing
            air-conditioned tempo travellers in Prayagraj enhances comfort, especially for long
            outstation journeys to Varanasi, Ayodhya, or Haridwar. Non-AC options are economical for
            short local trips.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaRoad className="text-blue-600" />
            3. Trip Duration & Distance
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>For short local trips, a 9–12 seater tempo traveller is sufficient.</li>
            <li>
              For day-long sightseeing or outstation travel, 16–20 seater vehicles or luxury mini
              buses provide a smoother ride and better amenities.
            </li>
            <li>
              If planning multi-day pilgrimages or corporate retreats, consider well-equipped AC
              tempos for fatigue-free travel.
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaStar className="text-blue-600" />
            4. Luxury vs Standard Vehicle Options
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Luxury Tempo Travellers in Prayagraj:</strong> With reclining seats, LED
              screens, sound systems, and pushback interiors — ideal for VIP events, weddings, or
              corporate outings.
            </li>
            <li>
              <strong>Standard Tempo Travellers in Prayagraj:</strong> Budget-friendly and reliable
              for family trips, school excursions, or local airport transfers.
            </li>
          </ul>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaBusAlt className="text-blue-600" />
            5. Special Event & Pilgrimage Needs
          </h3>
          <p className="text-gray-700">
            For events like Kumbh Mela, Magh Mela, or visits to Triveni Sangam, large groups often
            require multiple 20-seater tempos or mini buses for coordinated travel. Selecting the
            right vehicle type in Prayagraj ensures everyone travels together comfortably without
            delays.
          </p>
        </div>

        {/* 6 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaSuitcase className="text-blue-600" />
            6. Luggage & Amenities Consideration
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Check your group’s luggage capacity. Weddings, long tours, or corporate events may require extra storage.</li>
            <li>
              For long-distance travel, select tempo travellers with additional amenities like chilled
              AC, reclining seats, LED lighting, and music systems.
            </li>
          </ul>
        </div>

        {/* 7 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaCheckCircle className="text-blue-600" />
            7. Get Expert Guidance from Yatra Travel India
          </h3>
          <p className="text-gray-700 mb-3">
            Not sure which tempo traveller in Prayagraj suits your trip best? Our local team can recommend:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Best vehicle for your group size</li>
            <li>✔ Optimal AC or non-AC choice based on weather and distance</li>
            <li>✔ Luxury or standard options for corporate or pilgrimage travel</li>
          </ul>
          <p className="mt-3 text-gray-700">
            We ensure your tempo traveller hire in Prayagraj matches your comfort, convenience, and
            budget needs perfectly.
          </p>
        </div>

        {/* PRO TIP */}
        <div className="bg-blue-900 text-white p-6 rounded-xl">
          <strong>Pro Tip:</strong> Always book your preferred tempo traveller in Prayagraj at least
          2–3 days in advance during festivals, school holidays, or Kumbh Mela dates to guarantee availability.
        </div>

      </div>
    </section>
<TempoImageCards/>
<TempoSeatConfig city={"prayagraj"}/>
     <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Plan Your Journey in Prayagraj with Yatra Travel India
        </h2>

        {/* Intro */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700">
            Planning a trip in Prayagraj has never been easier. Whether you are visiting for
            Kumbh Mela, Magh Mela, Triveni Sangam, corporate events, weddings, or family outings,
            Yatra Travel India offers reliable tempo traveller hire in Prayagraj to make your
            journey smooth, safe, and comfortable.
          </p>
        </div>

        {/* 1 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-blue-600" />
            1. Start with Your Pickup Location
          </h3>
          <p className="text-gray-700 mb-3">
            We cover all major areas in Prayagraj, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Civil Lines</li>
            <li>Katra</li>
            <li>Allahabad Cantt</li>
            <li>GT Road / Jhunsi Road</li>
            <li>Naini</li>
            <li>M.G. Road & Surroundings</li>
          </ul>
          <p className="text-gray-700 mt-3">
            No matter where your group is located, our Prayagraj tempo traveller services will
            pick you up on time, even during peak traffic hours on NH 19 or NH 30.
          </p>
        </div>

        {/* 2 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaLocationArrow className="text-blue-600" />
            2. Choose Your Destination
          </h3>
          <p className="text-gray-700 mb-3">
            Plan your travel to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Triveni Sangam for a spiritual and cultural experience</li>
            <li>Anand Bhavan for history enthusiasts</li>
            <li>Allahabad Fort and nearby landmarks</li>
            <li>Outstation trips to Varanasi, Ayodhya, Chitrakoot, or Haridwar</li>
            <li>Corporate offsites or industrial visits in NCR borders</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Our tempo travellers in Prayagraj are perfect for local sightseeing or multi-day
            outstation journeys.
          </p>
        </div>

        {/* 3 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaBus className="text-blue-600" />
            3. Select the Right Vehicle
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Small groups (up to 12 passengers): Comfortable 9–12 seater tempo travellers
            </li>
            <li>
              Medium groups (15–16 passengers): Spacious 16-seater tempo travellers with
              pushback seats
            </li>
            <li>
              Large groups (20+ passengers): Luxury mini buses with AC, LED, and luggage storage
            </li>
          </ul>
          <p className="text-gray-700 mt-3">
            Choosing the right tempo traveller in Prayagraj ensures everyone travels together
            comfortably, especially during Kumbh Mela or Magh Mela crowds.
          </p>
        </div>

        {/* 4 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaTrafficLight className="text-blue-600" />
            4. Plan Around Local Traffic
          </h3>
          <p className="text-gray-700">
            Delhi–Prayagraj roads, NH19, NH30, and city streets can get congested during festivals
            or peak hours. Our experienced drivers in Prayagraj know the best routes and shortcuts
            to save time and ensure a smooth ride.
          </p>
        </div>

        {/* 5 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-blue-600" />
            5. Include Comfort & Safety Features
          </h3>
          <p className="text-gray-700 mb-3">
            When you plan your journey with Yatra Travel India in Prayagraj, you can expect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Verified, experienced drivers familiar with Prayagraj traffic patterns</li>
            <li>Fully air-conditioned vehicles for summer heat and winter fog</li>
            <li>Ample luggage space for personal belongings or event materials</li>
            <li>Optional luxury amenities for VIP trips and corporate clients</li>
          </ul>
        </div>

        {/* 6 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaCalendarCheck className="text-blue-600" />
            6. Flexible Booking Options
          </h3>
          <p className="text-gray-700 mb-3">
            We offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>One-way trips for quick city-to-city travel</li>
            <li>Round trips for sightseeing or multi-day pilgrimages</li>
            <li>Hourly rentals for local events, wedding transfers, or school trips</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Booking your tempo traveller in Prayagraj is easy via call, WhatsApp, or our online
            portal, giving you instant confirmation.
          </p>
        </div>

        {/* 7 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-3 mb-4">
            <FaUsers className="text-blue-600" />
            7. Plan for Major Events
          </h3>
          <p className="text-gray-700 mb-3">
            Prayagraj sees huge crowds during Kumbh Mela, Magh Mela, and festival seasons.
            Planning your journey early with Yatra Travel India ensures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Timely pickup from hotels or ghats</li>
            <li>Coordinated travel for large groups</li>
            <li>Safety in crowded areas</li>
            <li>Stress-free navigation through congested roads</li>
          </ul>
        </div>

        {/* 8 */}
        <div className="bg-blue-900 text-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold flex items-center gap-3 mb-3">
            <FaCheckCircle />
            8. Travel with Peace of Mind
          </h3>
          <p>
            By planning your trip with Yatra Travel India, you get a reliable tempo traveller hire
            in Prayagraj with transparent pricing, punctual service, and professional drivers.
            Your group can focus on enjoying the journey, visiting the Triveni Sangam, attending
            the Melas, or exploring cultural landmarks.
          </p>
        </div>

      </div>
    </section>
      <section className="max-w-5xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600">
          Tempo Traveller Hire in Prayagraj – Everything You Need to Know
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
          >
            {/* Question */}
            <div className="flex items-start gap-3">
              <FaQuestionCircle className="text-blue-500 mt-1 text-lg" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
            </div>

            {/* Answer */}
            <div className="mt-4 text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
