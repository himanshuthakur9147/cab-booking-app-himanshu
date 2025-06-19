"use client";
import { createContext, useState, useContext } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);
  const [carType, setCarType] = useState("Sedan");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const [fareEstimate, setFareEstimate] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  return (
    <BookingContext.Provider
      value={{
        pickupLocation, setPickupLocation,
        dropLocation, setDropLocation,
        pickupCoords, setPickupCoords,
        dropCoords, setDropCoords,
        carType, setCarType,
        pickupDate, setPickupDate,
        returnDate, setReturnDate,
        pickupTime, setPickupTime,
      
        fareEstimate, setFareEstimate,
        distance, setDistance,
        duration, setDuration,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
