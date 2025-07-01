import UserProfile from '@/components/profile/ProfilePage'
import React from 'react'

export const metadata = {
  title: "My Profile | Yatra Travel India",
  description: "Manage your personal information, contact details, and preferences with Yatra Travel India's secure profile section.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/user/profile`,
  },
  robots: {
    index: false,
    follow: false,
  },
};


const page = () => {
  return (
    <div>
      <UserProfile/>
    </div>
  )
}

export default page
