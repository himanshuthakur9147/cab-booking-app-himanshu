"use client";
import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "@/lib/firebase";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const handleSendOTP = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => console.log("Captcha verified"),
    });

    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmation(confirmationResult);
      alert("OTP Sent");
    } catch (error) {
      alert("OTP Send Failed");
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      localStorage.setItem("isAuthenticated", "true");
      alert("OTP Verified!");
      window.location.href = "/"; // go to homepage after login
    } catch (error) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login via Phone OTP</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        className="border px-3 py-2 w-full mb-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSendOTP} className="bg-blue-600 text-white py-2 px-4 rounded w-full">
        Send OTP
      </button>

      {confirmation && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            className="border px-3 py-2 w-full mt-3"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOTP} className="bg-green-600 text-white py-2 px-4 rounded w-full mt-2">
            Verify OTP
          </button>
        </>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginForm;
