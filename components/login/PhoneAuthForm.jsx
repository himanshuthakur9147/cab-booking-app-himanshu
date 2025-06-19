"use client";

import { useState, useEffect, useRef } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function PhoneAuthForm({ onSuccess }) {
  const { setUser, setIsAuthenticated } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const recaptchaLoadedRef = useRef(false);

  useEffect(() => {
    if (!recaptchaLoadedRef.current && typeof window !== "undefined" && document.getElementById("recaptcha-container")) {
      recaptchaLoadedRef.current = true;

      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          // CAPTCHA solved
        },
        "expired-callback": () => {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        }
      });

      window.recaptchaVerifier.render().catch(console.error);
    }
  }, []);

  const sendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        alert("ReCAPTCHA not ready yet. Please wait.");
        return;
      }

      setIsSending(true);
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent!");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
        recaptchaLoadedRef.current = false;
      }
    } finally {
      setIsSending(false);
    }
  };

  const verifyOtp = async () => {
  try {
    setIsVerifying(true);
    const result = await confirmationResult.confirm(otp);
    const user = result.user;
    const idToken = await user.getIdToken();

    const sessionRes = await fetch("/api/users/auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: idToken }),
    });

    if (!sessionRes.ok) throw new Error("Session creation failed");

    const userRes = await fetch("/api/users/auth/me");
    const userData = await userRes.json();

    if (userRes.ok) {
      setUser(userData);
      setIsAuthenticated(true);
    }

    await fetch("/api/users/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: user.phoneNumber }),
    });

    alert("Login successful!");
    if (onSuccess) onSuccess(); // this should close modal or update UI

  } catch (err) {
    console.error(err);
    alert("Invalid OTP or login failed");
  } finally {
    setIsVerifying(false);
  }
};


  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full"
        disabled={isSending || isVerifying}
      />
      <button
        onClick={sendOtp}
        disabled={isSending || !phone}
        className="mt-2 w-full font-semibold cursor-pointer rounded-md px-4 py-2 bg-dark-btn text-white disabled:opacity-60"
      >
        {isSending ? "Sending OTP..." : "Send OTP"}
      </button>

      {confirmationResult && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full"
            disabled={isVerifying}
          />
          <button
            onClick={verifyOtp}
            disabled={isVerifying || !otp}
            className="mt-2 w-full px-4 py-2 cursor-pointer bg-green-600 font-semibold text-white disabled:opacity-60"
          >
            {isVerifying ? "Verifying..." : "Verify & Login"}
          </button>
        </div>
      )}

      {/* 👇 make sure this is always rendered */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
