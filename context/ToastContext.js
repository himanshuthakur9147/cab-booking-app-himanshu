"use client";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Auto-hide after 3 sec
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white z-50 transition-all duration-300
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
