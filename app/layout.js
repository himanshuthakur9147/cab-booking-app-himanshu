import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { BookingProvider } from "@/context/BookingContext";
import { PaymentProvider } from "@/context/PaymentContext";
import { ReviewProvider } from "@/context/ReviewContext";
import { AdminProvider } from "@/context/AdminContext";
import GoogleMapsWrapper from "@/components/googleComponents/GoogleMapsWrapper";
import RouteLoader from "@/components/Loader/RouteLoader";
import OfflineNotice from "@/components/offline/OfflineNotice";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
 // Chiku Cab - Outstation Cab, Taxi & Car Rental Services in India
 //Reliable & Safe Cabs and Taxi Services at Affordable Prices
  title: "Yatra Travel India – Online Cab, Taxi & Car Rental Services | Affordable Rides Across India",
  description:
    "Book cabs instantly with Yatra Travel India. One way, round trip, local rental & airport transfer services across 2000+ Indian cities.",
  icons: {
    icon: "/favicon.ico", // path inside public folder
  },
  keywords: [
    "Cab Booking India",
    "Online Taxi Service",
    "Yatra Travel",
    "Round Trip Cabs",
    "One Way Taxi",
    "Local Car Rental",
    "Airport Transfer",
    "Affordable Cab Booking",
    "Yatra Taxi App",
  ],
  authors: [{ name: "Yatra Travel India", url: `${process.env.DOMAIN_NAME}` }],
  openGraph: {
    title: "Yatra Travel India – Book Cabs Online",
    description:
      "Affordable, reliable and quick taxi booking services in 2000+ cities. No hidden charges. 24/7 support.",
    url: `${process.env.DOMAIN_NAME}`,
    siteName: "Yatra Travel India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${process.env.DOMAIN_NAME}/logo.jpeg`,
        width: 1200,
        height: 630,
        alt: "Yatra Travel India Cab Booking",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  twitter: {
    card: "summary_large_image",
    site: "@YatraTravelIndia",
    title: "Yatra Travel India – Online Cab Booking",
    description: "Book taxis across India – One way, local & airport transfers.",
    images: `${process.env.DOMAIN_NAME}/logo.jpeg`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <BookingProvider>
            <PaymentProvider>
              <ReviewProvider>
                <AdminProvider>
                  <GoogleMapsWrapper>
                    <RouteLoader />
                    <OfflineNotice />
                    {children}
                  </GoogleMapsWrapper>
                </AdminProvider>
              </ReviewProvider>
            </PaymentProvider>
          </BookingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
