import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const SelectCarClient = dynamic(() => import("./SelectCarClient"), {
  ssr: false,
});

// ✅ Use metadata API in App Router
export const metadata = {
  title: "Book Cab | Yatra Travel India",
  description:
    "Select the best cab options. Compare taxi fares, AC cars, and get instant booking with Yatra Travel India.",
  keywords: [
    "Cab booking",
    "One way cab",
    "Airport cab",
    "Yatra Travel India",
    "Online taxi booking",
  ],
  openGraph: {
    title: "Book Cab | Yatra Travel India",
    description:
      "Affordable and reliable cab booking service in India. Instant confirmation. Trusted by 10,000+ customers.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/booking/select_car`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/logo.jpeg`,
        width: 800,
        height: 600,
        alt: "Yatra Travel India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Cab | Yatra Travel India",
    description:
      "Affordable and reliable cab booking service across India with instant confirmation.",
    images: [`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/logo.jpeg`],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <SelectCarClient />
    </>
  );
}
