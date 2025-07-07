import Footer from '@/components/footer/Footer';
import PrivacyPolicyPage from '@/components/PrivacyPolicy'


export const metadata = {
  title: "Privacy Policy | Yatra Travel India",
  description:
    "Read Yatra Travel India's privacy policy to understand how we collect, use, and protect your personal data during your cab booking experience.",
  keywords: [
    "Yatra Travel India Privacy",
    "Cab booking data policy",
    "User data protection",
    "Taxi booking privacy policy",
    "Online cab service privacy",
    "Data security taxi service",
  ],
  openGraph: {
    title: "Privacy Policy | Yatra Travel India",
    description:
      "Your privacy is important to us. Learn how Yatra Travel India protects your data while you enjoy seamless cab booking services.",
    url: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/privacy-policy`,
    siteName: "Yatra Travel India",
    type: "article",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Yatra Travel India",
    description:
      "Understand how we handle your personal information securely while using our cab booking services.",
    site: "@YatraTravelIndia",
  },
};



const Privacy = () => {
  return (
    <div>
      <PrivacyPolicyPage/>
      <Footer/>
    </div>
  )
}

export default Privacy
