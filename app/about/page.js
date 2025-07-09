import AboutUs from '@/components/aboutUs/AboutUs';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "About Us | Yatra Travel India",
  description: "Learn about Yatra Travel India's mission, team, and journey. Offering hassle-free taxi services across India with 24/7 support.",
  keywords: [
    "About Yatra Travel India",
    "Our journey",
    "Cab company India",
    "Affordable taxi services",
    "Car rental network",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/about`,
  },
};

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer/>
    </div>
  );
};

export default AboutUsPage;
