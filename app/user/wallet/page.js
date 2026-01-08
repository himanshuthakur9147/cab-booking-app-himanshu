
import WalletProfile from '@/components/wallet/WalletProfile';
import React from 'react'

export const metadata = {
  title: "My Wallet | Yatra Travel India",
  description: "Manage your wallet, view transactions, and add funds with Yatra Travel India's secure wallet section.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/user/wallet`,
  },
  robots: {
    index: false,
    follow: false,
  },
};


const page = () => {
  return (
    <div>
      <WalletProfile/>
    </div>
  )
}

export default page
