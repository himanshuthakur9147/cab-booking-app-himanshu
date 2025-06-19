// components/googleComponents/GooglePlaceAutocomplete.jsx
"use client";
import { useEffect, useRef } from "react";

export default function GooglePlaceAutocomplete({ placeholder, onPlaceSelect }) {
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !google.maps.places) return;

    const inputEl = inputRef.current;
    const containerEl = containerRef.current;
    if (!inputEl || !containerEl) return;

    const autocomplete = new google.maps.places.PlaceAutocompleteElement({
      inputElement: inputEl,
    });

    containerEl.appendChild(autocomplete);

    autocomplete.addEventListener("gmp-placeautocomplete-placepick", (e) => {
      const place = e?.place;
      if (place && onPlaceSelect) {
        onPlaceSelect(place);
      }
    });

    return () => {
      autocomplete.removeEventListener("gmp-placeautocomplete-placepick", () => {});
    };
  }, []);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="w-full border-b text-gray-700 placeholder:text-gray-500 border-gray-400 outline-none pl-2 py-1"
      />
      {/* Inject Autocomplete dropdown inside this container */}
      <div ref={containerRef} className="absolute left-0 top-full w-full z-50" />
    </div>
  );
}
