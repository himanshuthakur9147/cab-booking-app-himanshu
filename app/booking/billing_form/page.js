import BillingForm from '@/components/billingForm/BillingForm'
import React from 'react'

export const metadata = {
  title: "Billing & Booking Details | Yatra Travel India",
  description:
    "Confirm your cab booking by providing contact details and reviewing pickup, drop, and fare summary. Fast and secure online booking with Yatra Travel India.",
  keywords: [
    "Cab booking checkout",
    "Cab billing form",
    "Taxi booking India",
    "Online taxi fare confirmation",
    "Yatra Travel India Booking",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/booking/billing_form`,
  },
  openGraph: {
    title: "Billing & Booking – Yatra Travel India",
    description:
      "Complete your booking by confirming pickup, drop and fare details for cabs across India. Trusted and fast taxi service.",
    url: `${process.env.DOMAIN_NAME}/booking/billing_form`,
    siteName: "Yatra Travel India",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billing & Booking | Yatra Travel India",
    description:
      "Fill contact and trip details to confirm your cab booking. Fast and easy billing form.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const billing = () => {
  return (
    <div>
      <BillingForm/>
    </div>
  )
}

export default billing
