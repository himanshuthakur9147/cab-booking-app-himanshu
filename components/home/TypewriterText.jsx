"use client";
import { useEffect, useState } from "react";

const services = [
    "Yatra Travel India",
  "One Way Cab Service 🚗",
  "Round Trip Rides 🔁",
  "Local Car Rentals 🏙️",
  "Airport Transfers ✈️"
];

export const TypewriterText = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = services[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % services.length);
        }
      }
    }, isDeleting ? 25 : 70); // Typing and deleting speed

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};
