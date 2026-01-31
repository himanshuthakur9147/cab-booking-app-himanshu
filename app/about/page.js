import AboutUs from '@/components/aboutUs/AboutUs';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "About Us  - Cab & Tempo Traveller Service | Yatra Travel India",
  description: "Yatra Travel India is a trusted travel brand offering cabs & tempo travellers across India with transparent pricing & 24/7 support Call +91 9044019511",
  // 1. Authors: This is an array of objects
  authors: [{ name: "Yatra Travel India", url: "https://yatratravelindia.com" }],
  
  // 2. Publisher: A simple string
  publisher: "Yatra Travel India",
  keywords: [
     
"offering cabs & tempo travellers across", 
"India with transparent pricing & 24/7 ",
"support. Call +91 9044019511",
"about Yatra Travel India, trusted ",
"cab service India, taxi company ",
"India, tempo traveller company, ",
"travel service provider India",
   
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/about`,
    // 4. Language/Locales: Use 'languages' inside alternates for hreflang tags
    languages: {
      "en-US": "/en-US/about",
      "hi-IN": "/hi-IN/about",
    },
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
