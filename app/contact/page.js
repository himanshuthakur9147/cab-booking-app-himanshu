import ContactUs from '@/components/ContactUs'

export const metadata = {
  title: "Contact Us | Yatra Travel India",
  description:
    "Have questions? Contact Yatra Travel India for cab bookings, partnerships, or support. We're here to help 24/7.",
  keywords: [
    "Contact Yatra Travel India",
    "Cab Booking Support",
    "Taxi service help",
    "Partner with Yatra",
    "Customer care cab booking",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/contact`,
  },
};

const Contact = () => {
  return (
    <div>
     
      <ContactUs/>
    </div>
  )
}

export default Contact
