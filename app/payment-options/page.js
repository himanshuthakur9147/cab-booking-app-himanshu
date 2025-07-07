import Footer from "@/components/footer/Footer";
import PaymentOptions from "@/components/PaymentOptions"

export const metadata = {
  title: "Payment Options | Yatra Travel India",
  description:
    "Explore flexible payment options with Yatra Travel India—pay now, pay later, EMI, UPI, credit/debit cards, and net banking for all your cab bookings across India.",
  keywords: [
    "Yatra Travel payment options",
    "Cab booking payment methods",
    "Pay later cab booking",
    "UPI taxi payment",
    "EMI cab payment",
    "Credit card taxi booking",
    "Net banking cab booking",
  ],
  openGraph: {
    title: "Payment Options | Yatra Travel India",
    description:
      "Choose from UPI, cards, net banking, EMI or pay later for your Yatra Travel cab reservations. Secure and convenient payments across 2000+ cities.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/payment-options`,
    siteName: "Yatra Travel India",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/payment-options`,
  },
};

const page = () => {
  return (
    <div>
    <PaymentOptions/>
    <Footer/>
    </div>
  )
}

export default page
