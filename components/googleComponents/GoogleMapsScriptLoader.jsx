"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleMapsScriptLoader({ onLoad }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfGoogleMapsIsReady = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        console.log("✅ Google Maps is fully ready");
        if (onLoad) onLoad();
      } else {
        setTimeout(checkIfGoogleMapsIsReady, 100);
      }
    };

    if (!isLoaded) {
      checkIfGoogleMapsIsReady();
    }
  }, [isLoaded, onLoad]);

  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      strategy="beforeInteractive"
      onLoad={() => {
        console.log("✅ Google Maps script loaded");
        // We let useEffect verify if it's ready
      }}
      onError={(e) => {
        console.error("❌ Failed to load Google Maps script", e);
      }}
    />
  );
}
