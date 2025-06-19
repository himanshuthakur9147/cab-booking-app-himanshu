'use client';

import { useEffect, useRef } from "react";

export default function PlacesAutocomplete({ onSelect, placeholder }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["geocode"],
      componentRestrictions: { country: "in" },
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        onSelect(place.formatted_address);
      }
    });
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className="w-full border px-3 py-2 rounded"
    />
  );
}
