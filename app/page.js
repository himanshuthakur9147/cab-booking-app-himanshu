// app/page.js

import HomeClient from "@/components/home/HomeClient";


export const metadata = {
  title: "Online Cab, Taxi & Tempo Traveler Booking | Yatra Travel India",
  description: "Yatra Travel India offers online cab, taxi & tempo traveler rental across India. Book one-way, round trip, airport & outstation travel at best prices.",
  keywords: "cab booking India, taxi service India, tempo traveller booking, car rental India, outstation cab India, airport taxi service, Yatra Travel India, book cab online India",
  authors: [{ name: "Yatra Travel India" }],
  publisher: "Yatra Travel India",
  alternates: {
    canonical: "https://www.yatratravelindia.com/",
    languages: {
      "en": "https://www.yatratravelindia.com/",
      "hi": "https://www.yatratravelindia.com/",
    },
  },
  robots: "index, follow",
};

export default function Page() {
  return <HomeClient />;
}