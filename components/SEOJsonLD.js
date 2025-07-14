// components/seo/SEOJsonLD.jsx
import Script from "next/script";

export default function SEOJsonLD() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yatra Travel India",
    url: "https://yatratravelindia.com",
    logo: "https://yatratravelindia.com/logo.jpeg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "Customer Service",
    },
  };

  return (
    <Script
      id="ld-json-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
