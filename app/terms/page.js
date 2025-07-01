import Navbar from "@/components/Navbar"
import Terms from "@/components/terms/Terms"
import React from 'react'

export const metadata = {
  title: "Terms & Conditions | Yatra Travel India",
  description:
    "Read Yatra Travel India's terms and conditions before booking your cab. Stay informed about our policies on cancellations, refunds, and service usage.",
  keywords: [
    "Yatra Travel India terms",
    "cab booking policy",
    "taxi cancellation rules",
    "Yatra service agreement",
    "Yatra Travel conditions"
  ],
  openGraph: {
    title: "Terms & Conditions | Yatra Travel India",
    description:
      "Learn about the guidelines, terms of use, and cab rental policies at Yatra Travel India.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/terms`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/logo.jpeg`, // Optional OG image for this page
        width: 1200,
        height: 630,
        alt: "Terms and Conditions - Yatra Travel India",
      },
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/terms`,
  },
};

const page = () => {
  return (
    <div>
        <Navbar/>
      <Terms/>
    </div>
  )
}

export default page
