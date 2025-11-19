import s9 from "@/imgs/9s.jpg";
import s12 from "@/imgs/12s.jpg";
import s15 from "@/imgs/15s.jpg";
import s16 from "@/imgs/16s.jpg";
import s18 from "@/imgs/18s.jpg";
import s20 from "@/imgs/20s.jpg";
import Image from "next/image";

export default function TempoImageCards() {
  console.log("The images of tempo",s9.src)
  const travellers = [
    {
      title: "9 Seater Tempo Traveller",
      img: s9,
      seat: "9 Passengers + 1 Driver",
      fare: "₹22 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
    {
      title: "12 Seater Tempo Traveller",
      img: s12,
      seat: "12 Passengers + 1 Driver",
      fare: "₹23 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
    {
      title: "15 Seater Tempo Traveller",
      img: s15,
      seat: "15 Passengers + 1 Driver",
      fare: "₹24 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
    {
      title: "16 Seater Tempo Traveller",
      img: s16,
      seat: "16 Passengers + 1 Driver",
      fare: "₹25 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
    {
      title: "18 Seater Tempo Traveller",
      img: s18,
      seat: "18 Passengers + 1 Driver",
      fare: "₹26 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
    {
      title: "20 Seater Tempo Traveller",
      img: s20,
      seat: "20 Passengers + 1 Driver",
      fare: "₹28 /km",
      drivingCharges: "₹500 /day",
      minKm: "250 km/day",
      facility: "AC, Pushback Seat, Music system",
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choose your ride with <span className="text-blue-600">Yatra Travel India</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {travellers.map((t, i) => (
 <div
              key={i}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image src={t.img.src}
                alt={t.title}
                height={600}
                width={800}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{t.title}</h3>
                <p className="text-sm text-gray-700 mb-1"><strong>Seat:</strong> {t.seat}</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Starting Fare:</strong> {t.fare}</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Driving Charges:</strong> {t.drivingCharges}</p>
                <p className="text-sm text-gray-700 mb-1"><strong>Minimum Km/Day:</strong> {t.minKm}</p>
                <p className="text-sm text-gray-700"><strong>Facility:</strong> {t.facility}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
