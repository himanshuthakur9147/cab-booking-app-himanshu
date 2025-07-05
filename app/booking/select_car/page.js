import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import SelectCarClient from "./SelectCarClient";
import RouteLoader from "@/components/Loader/RouteLoader";

export const metadata = {
  title: "Book Cab | Yatra Travel India",
  description:
    "Compare fares, choose cars, and book your journey with Yatra Travel India. Instant confirmation and best cab services.",
  keywords: [
    "Cab from pickup to drop",
    "Taxi booking India",
    "Yatra Travel India",
    "Online cab",
    "Affordable car rental",
  ],
  openGraph: {
    title: "Book Cab | Yatra Travel India",
    description:
      "Affordable and reliable cab booking service across India. AC cars, one way, airport cabs. Instant confirmation!",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/booking/select_car`,
    siteName: "Yatra Travel India",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/logo.jpeg`,
        width: 800,
        height: 600,
        alt: "Yatra Travel India Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cab | Yatra Travel India",
    description:
      "Compare cab fares & book instantly. Trusted service in 2000+ Indian cities.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/logo.jpeg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/booking/select_car`,
  },
};

export default function Page() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<RouteLoader/>}>
        <SelectCarClient />
      </Suspense>
    </>
  );
}
