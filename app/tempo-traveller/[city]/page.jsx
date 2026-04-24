import metaData from "@/components/tempo-traveller/metaData.json";
import cityDataFile from "@/components/cityData.json";
import TempoTravellerClient from "@/components/tempo-traveller/TempoTravellerClient";
import Script from "next/script";
import { redirect, notFound } from "next/navigation"; // Added notFound

// 1. DYNAMIC METADATA
export async function generateMetadata({ params }) {
  const { city } = await params; 
  
  // OPTION 1 LOGIC: If the URL doesn't have the prefix, don't generate metadata (SEO safety)
  if (!city.startsWith("tempo-traveller-in-")) {
    return {};
  }

  const cityname = city.replace("tempo-traveller-in-", "");
  const dataMeta = metaData[cityname.toLowerCase()] || {};

  const title = dataMeta?.title || `Tempo Traveller in ${cityname.toUpperCase()} - 9 to 26 Seater @ ₹22/Km | Yatra Travel India`;
  const description = dataMeta?.description || `Book Tempo Traveller in ${cityname} for local sightseeing...`;

  return {
    title: title,
    description: description,
    keywords: `Tempo Traveller in ${city}, Hire ${city} Tempo Traveller, Luxury Tempo Traveller ${city}, Yatra Travel India`,
    authors: [{ name: 'Yatra Travel India', url: 'https://www.yatratravelindia.com' }],
    publisher: 'Yatra Travel India',
    other: {
      'content-language': 'en',
    },
    alternates: {
      canonical: `https://www.yatratravelindia.com/tempo-traveller/${city}`,
      languages: {
        'en-US': `https://www.yatratravelindia.com/tempo-traveller/${city}`,
        'hi-IN': `https://www.yatratravelindia.com/tempo-traveller/${city}`,
      },
    },
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
      locale: 'en_IN',
    },
  };
}

export default async function Page({ params }) {
  const { city } = await params;

  // --- OPTION 1: URL VALIDATION LOGIC ---
  // If user visits /tempo-traveller/lucknow instead of /tempo-traveller/tempo-traveller-in-lucknow
  if (!city.startsWith("tempo-traveller-in-")) {
    return notFound(); // Triggers your global 404 page
  }

  const cityname = city.replace("tempo-traveller-in-", "").toLowerCase();

  // --- EXISTENCE CHECK ---
  const cityExists = Object.keys(metaData).includes(cityname);

  if (!cityExists) {
    redirect("/"); // If city is valid format but not in your database, go home
  }

  const cityData = cityDataFile[cityname];
  const dataMeta = metaData[cityname] || {};

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
           "name": `Tempo Traveller Rental in ${cityname.charAt(0).toUpperCase() + cityname.slice(1)} | Yatra Travel India`,
           "description": dataMeta.description || `Book tempo traveller rental in ${cityname} with Yatra Travel India for tours, weddings, and outstation trips.`,
           "provider": {
             "@type": "LocalBusiness",
             "name": "Yatra Travel India",
             "url": `https://www.yatratravelindia.com/tempo-traveller/tempo-traveller-in-${cityname.toLowerCase()}`,
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