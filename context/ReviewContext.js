"use client";
import { createContext, useState, useContext } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  return (
    <ReviewContext.Provider value={{ rating, setRating, reviewText, setReviewText }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => useContext(ReviewContext);
