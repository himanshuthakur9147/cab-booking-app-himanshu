"use client";
import { createContext, useState, useContext } from "react";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentStatus, setPaymentStatus] = useState("pending");
  const [transactionId, setTransactionId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  return (
    <PaymentContext.Provider
      value={{ paymentStatus, setPaymentStatus, transactionId, setTransactionId, paymentMethod, setPaymentMethod }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
