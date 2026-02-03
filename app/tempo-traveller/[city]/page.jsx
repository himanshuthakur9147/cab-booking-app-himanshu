import metaData from "@/components/tempo-traveller/metaData.json";
import cityDataFile from "@/components/cityData.json";
import TempoTravellerClient from "@/components/tempo-traveller/TempoTravellerClient";
import Script from "next/script";

// 1. DYNAMIC METADATA (This replaces <Head>)
export async function generateMetadata({ params }) {
const { city } = await params; // Await params for Next.js 15 compatibility
  const cityname = city.replace("tempo-traveller-in-", "");
  const dataMeta = metaData[cityname.toLowerCase()] || {};

  const title = dataMeta?.title || `Tempo Traveller in ${cityname.toUpperCase()} - 9 to 26 Seater @ ₹22/Km | Yatra Travel India`;
  const description = dataMeta?.description || `Book Tempo Traveller in ${cityname} for local sightseeing...`;

  return {
    title: title,
    description: description,
    // 1. ADD KEYWORDS
    keywords: `Tempo Traveller in ${city}, Hire ${city} Tempo Traveller, Luxury Tempo Traveller ${city}, Yatra Travel India`,
    
    // 2. ADD AUTHOR & PUBLISHER
    authors: [{ name: 'Yatra Travel India', url: 'https://www.yatratravelindia.com' }],
    publisher: 'Yatra Travel India',

    // 3. ADD LANGUAGE & REGION
    other: {
      'content-language': 'en', // Defines the language
    },
    alternates: {
      canonical: `https://www.yatratravelindia.com/tempo-traveller/${city}`,
      languages: {
        'en-US': `https://www.yatratravelindia.com/tempo-traveller/${city}`,
        'hi-IN': `https://www.yatratravelindia.com/tempo-traveller/${city}`,
      },
    },
   // 4. IMPROVED ROBOTS (for Google Discover)
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      title: title,
      description: description,
      url: `https://www.yatratravelindia.com/tempo-traveller/${city}`,
      siteName: 'Yatra Travel India',
      type: 'website',
      locale: 'en_IN', // Best for Indian audience
    },
  };
}

export default async function Page({ params }) {
 
// We MUST extract these variables again inside the Page function
  const { city } = await params;
  const cityname = city.replace("tempo-traveller-in-", "");
  const cityData = cityDataFile[cityname.toLowerCase()] || null;
  const dataMeta = metaData[cityname.toLowerCase()] || {};
 

  return (
    <>
      {/* Schema injected on server for better SEO */}
      <Script
       id={ `service-schema-${cityname.toLowerCase()}`}
       type="application/ld+json"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify({
           "@context": "https://schema.org",
           "@type": "Service",
           "@id": `https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-${cityname.toLowerCase()}#service`,
           "name": `Tempo Traveller Rental in ${cityname.charAt(0).toUpperCase() + cityname.slice(1)}`,
           "description": dataMeta.description || `Book tempo traveller rental in ${cityname} with Yatra Travel India for tours, weddings, and outstation trips.`,
           "provider": {
             "@type": "LocalBusiness",
             "name": "Yatra Travel India",
             "telephone": "+91-9044019511",
             "address": {
               "@type": "PostalAddress",
               "addressLocality": cityname.charAt(0).toUpperCase() + cityname.slice(1),
               "addressRegion": dataMeta.region || cityname.charAt(0).toUpperCase() + cityname.slice(1),
               "addressCountry": "IN"
             }
           },
           "areaServed": {
             "@type": "AdministrativeArea", // Better for SEO as it covers the whole city/region
             "name": cityname.charAt(0).toUpperCase() + cityname.slice(1)
           },
           "serviceType": "Tempo Traveller Rental Service",
           "keywords": dataMeta.keywords || `tempo traveller in ${cityname}, ${cityname} tempo traveller rental`,
           "availableChannel": {
             "@type": "ServiceChannel",
             "servicePhone": "+91-9044019511"
           }
         })
       }}
     />
      
      {/* Pass data to the Client Component for the UI */}
      <TempoTravellerClient 
        cityData={cityData} 
        cityname={cityname} 
        city={city} 
      />
    </>
  );
}