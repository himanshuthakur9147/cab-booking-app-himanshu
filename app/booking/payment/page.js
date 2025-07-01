import PaymentBooking from '@/components/payment/PaymentPage'
import React from 'react'
export const metadata = {
  title: "Complete Your Cab Booking | Yatra Travel India",
  description:
    "Securely complete your online cab booking with Yatra Travel India. Fast checkout, transparent fares, and trusted taxi services across India.",
  keywords: [
    "Cab booking payment",
    "Taxi fare payment",
    "Yatra cab checkout",
    "Secure cab booking",
    "Yatra Travel India",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/booking/payment`,
  },
  openGraph: {
    title: "Cab Payment | Yatra Travel India",
    description:
      "Pay for your cab ride securely. No hidden charges. Trusted by 1000s of travelers across India.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/booking/payment`,
    siteName: "Yatra Travel India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab Payment | Yatra Travel India",
    description: "Complete your ride payment quickly and securely.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <div>
      <PaymentBooking/>
    </div>
  )
}

export default page
