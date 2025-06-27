import MyBookingsPage from '@/components/bookings/UserBookings'
import React from 'react'

export const metadata = {
  title: "My Cab Bookings | Yatra Travel India",
  description: "View all your past and upcoming cab bookings with Yatra Travel India. Manage trips, check status, and stay updated.",
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/user/bookings`,
  },
  robots: {
    index: false,
    follow: false,
  },
}

const page = () => {
  return (
    <div>
      <MyBookingsPage/>
    </div>
  )
}

export default page
