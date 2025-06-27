import RefundPolicy from "@/components/RefundPolicy"

export const metadata = {
  title: "Refund Policy | Yatra Travel India",
  description: "View our refund and cancellation policy for cab bookings made with Yatra Travel India.",
  keywords: [
    "Refund Policy",
    "Cancellation Policy",
    "Yatra Travel India",
    "Cab booking refund",
    "Taxi cancellation terms"
  ],
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/refund-policy`,
  },
};

const Refund = () => {
  return (
    <div>
      <RefundPolicy/>
    </div>
  )
}

export default Refund
