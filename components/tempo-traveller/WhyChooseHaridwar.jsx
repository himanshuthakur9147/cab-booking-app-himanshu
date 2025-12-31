export default function WhyChooseHaridwar() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16 text-gray-800">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2482c2] mb-10">
        Why Choose Yatra Travel India for Your
        <span className="block mt-1">Tempo Traveller in Haridwar?</span>
      </h2>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4 mb-16">
        <p>
          When it comes to booking a tempo traveller in Haridwar, Yatra Travel India stands as the
          most trusted and preferred travel partner for pilgrims, families, corporate groups, and
          tourists.
        </p>
        <p>
          Whether you're planning the Char Dham Yatra, Kedarnath Yatra,
          Rishikesh–Haridwar trip, or any outstation tour, we provide the safest, most comfortable,
          and affordable tempo traveller services in Haridwar.
        </p>
        <p>
          We combine premium vehicles, experienced drivers, and transparent pricing to ensure
          a smooth and memorable travel experience.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-4 mb-14">
        <h3 className="text-2xl font-semibold text-[#2482c2]">
          1. Best Tempo Traveller Service in Haridwar for Pilgrims & Tourists
        </h3>

        <p>We specialize in group travel across Uttarakhand, offering:</p>

        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Char Dham Yatra tempo traveller</li>
          <li>Haridwar to Kedarnath/Badrinath tempo traveller</li>
          <li>Haridwar to Yamunotri/Gangotri tempo traveller</li>
          <li>Haridwar sightseeing tours</li>
        </ul>

        <p>
          Our tempo travellers are built for hilly routes, long journeys, and large groups.
        </p>
      </section>

      {/* Char Dham */}
      <section className="space-y-10 mb-16">

        <h3 className="text-2xl font-semibold text-[#2482c2]">
          Why Choose Our Tempo Traveller for Char Dham Yatra?
        </h3>

        <div className="space-y-3">
          <h4 className="font-semibold text-lg">✔ Expert Drivers for Himalayan Routes</h4>
          <p>
            Our drivers are highly experienced in Char Dham Yatra routes, ensuring safety on steep
            curves, narrow roads, and high-altitude terrains.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-lg">✔ Best Tempo Traveller for Char Dham Yatra</h4>
          <p>All our vehicles are equipped with:</p>
          <ul className="grid md:grid-cols-2 gap-y-1 list-disc list-inside ml-2">
            <li>Pushback & Maharaja seats</li>
            <li>Powerful AC & blowers</li>
            <li>Ample luggage space</li>
            <li>Charging point on every seat</li>
            <li>First-aid box & oxygen cylinder (on request)</li>
            <li>Clean blankets for long travel</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-lg">✔ Affordable Char Dham Yatra Packages</h4>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Tempo traveller for 4 Dham Yatra</li>
            <li>Tempo traveller for Do Dham Yatra (Kedarnath–Badrinath)</li>
            <li>Tempo traveller for Gangotri–Yamunotri Yatra</li>
          </ul>
          <p>We provide customized packages at the lowest cost.</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-lg">✔ 24×7 Support for Pilgrims</h4>
          <p>
            We offer round-the-clock WhatsApp & call support during your entire yatra.
          </p>
        </div>

      </section>

      {/* Section 2 */}
      <section className="space-y-4 mb-14">
        <h3 className="text-2xl font-semibold text-[#2482c2]">
          2. Expert Drivers for Himalayan Routes (Char Dham Specialists)
        </h3>
        <p>Safety is our highest priority. Our drivers have 10–20 years of experience in:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Char Dham Yatra routes</li>
          <li>Steep Himalayan roads</li>
          <li>Narrow curves & high-altitude driving</li>
        </ul>
        <p>
          They are familiar with all major stops such as Guptkashi, Sonprayag, Janki Chatti,
          Uttarkashi, Joshimath, Govindghat, and more.
        </p>
      </section>

      {/* Sections 3–7 */}
      {[
        {
          title: "3. Clean, Spacious & Luxury Tempo Travellers in Haridwar",
          items: [
            "9 Seater Tempo Traveller",
            "12 Seater Tempo Traveller",
            "17 Seater Tempo Traveller",
            "20 Seater Tempo Traveller",
            "16 Seater Urbania Tempo Traveller (Premium)",
            "Maharaja Tempo Traveller for luxury travel",
          ],
        },
        {
          title: "4. Affordable Tempo Traveller Hire in Haridwar (No Hidden Charges)",
          items: [
            "Fixed rates for Char Dham Yatra",
            "Affordable per km prices",
            "No hidden fees",
            "Full bill transparency",
          ],
        },
        {
          title: "5. Perfect for Family Trips, Pilgrimage Tours & Group Travel",
          items: [
            "Char Dham Yatra",
            "Kedarnath Yatra",
            "Haridwar–Rishikesh sightseeing",
            "Outstation tours",
            "Corporate tours",
            "Wedding guest travel",
            "School/college trips",
          ],
        },
        {
          title: "6. 24×7 Support & Easy Booking Process",
          items: [
            "WhatsApp booking",
            "Instant confirmation",
            "24×7 helpline",
            "Fast customer support",
          ],
        },
        {
          title: "7. Trusted by Thousands of Pilgrims Every Year",
          items: [
            "Excellent customer reviews",
            "Reliable service for Char Dham Yatra",
            "Well-maintained vehicles",
            "Professional drivers",
          ],
        },
      ].map((section, i) => (
        <section key={i} className="space-y-4 mb-14">
          <h3 className="text-2xl font-semibold text-[#2482c2]">
            {section.title}
          </h3>
          <ul className="grid md:grid-cols-2 gap-y-1 list-disc list-inside ml-2">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      ))}

    </section>
  );
}
