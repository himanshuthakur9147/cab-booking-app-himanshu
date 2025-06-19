// components/LoginModal.js
"use client";

import React from "react";
import PhoneAuthForm from "./PhoneAuthForm"; // your existing form



const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/35 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Login / Signup</h2>
        <PhoneAuthForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default LoginModal;
