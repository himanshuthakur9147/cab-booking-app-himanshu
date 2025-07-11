"use client";
import { useRef, useEffect, useState } from "react";

export default function PlacesAutocompleteInput({ value, onChange, onPlaceSelect, placeholder }) {

  const inputRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
   
    const loadGoogleMaps = () => {
    console.log("Loading Google Maps Places API...");
      if (window.google && window.google.maps && window.google.maps.places) {
        setLoaded(true);
        return;
      }

      if (document.getElementById("google-maps-script")) return;

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.id = "google-maps-script";
      script.onload = () => setLoaded(true);
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
      
    if (!loaded || !inputRef.current || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"],
      componentRestrictions: { country: "in" },
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address && onPlaceSelect) {
        onPlaceSelect(place);
      }
    });
  }, [loaded]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border-b border-gray-400 text-gray-700 placeholder:text-gray-600 outline-none py-2 pl-2"
    />
  );
}
