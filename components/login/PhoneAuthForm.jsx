"use client";

import { useState, useEffect, useRef } from "react";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";

export default function PhoneAuthForm({ onSuccess }) {
  const { setUser, setIsAuthenticated, setShowModal } = useAuth();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // ===============================
  // INIT RECAPTCHA (ONCE)
  // ===============================
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.recaptchaVerifier &&
      document.getElementById("recaptcha-container")
    ) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
          "expired-callback": () => {
            window.recaptchaVerifier?.clear();
            window.recaptchaVerifier = null;
          },
        }
      );

      window.recaptchaVerifier.render().catch(console.error);
    }
  }, []);

  // ===============================
  // SEND OTP
  // ===============================
  const sendOtp = async () => {
    try {
      // ✅ RESET OLD / EXPIRED RECAPTCHA (CORRECT PLACE)
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }

      // Recreate fresh reCAPTCHA
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
      await window.recaptchaVerifier.render();

      if (phone.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return;
      }

      setIsSending(true);

      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmationResult(result);
      alert("OTP sent successfully");

    } catch (err) {
      console.error("OTP send error:", err);
      alert("Failed to send OTP");
    } finally {
      setIsSending(false);
    }
  };

  // ===============================
  // VERIFY OTP
  // ===============================
  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        alert("OTP expired. Please resend OTP.");
        return;
      }

      setIsVerifying(true);

      const result = await confirmationResult.confirm(otp);
      const firebaseUser = result.user;

      // ✅ CLEAR RECAPTCHA AFTER SUCCESS (CORRECT PLACE)
      window.recaptchaVerifier?.clear();
      window.recaptchaVerifier = null;

      // 🔥 FORCE FRESH ID TOKEN (MOST IMPORTANT FIX)
      const idToken = await firebaseUser.getIdToken(true);

      // Create session
      const sessionRes = await fetch("/api/users/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      if (!sessionRes.ok) {
        throw new Error("Session creation failed");
      }

      await new Promise((r) => setTimeout(r, 300));

      const userRes = await fetch("/api/users/auth/me");
      const userData = await userRes.json();

      if (userData.loggedIn) {
        setUser(userData);
        setIsAuthenticated(true);
        setShowModal(false);
        alert("Login successful");
        if (onSuccess) onSuccess();
        return;
      }

      // Save user if not exists
      await fetch("/api/users/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: "+91" + phone,
          user_id: firebaseUser.uid,
        }),
      });

      setIsAuthenticated(true);
      alert("Login successful");

    } catch (err) {
      console.error("OTP verification error:", err);
      alert("OTP verification failed");
    } finally {
      setIsVerifying(false);
    }
  };

  // ===============================
  // UI
  // ===============================
  return (
    <div className="p-4">
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full"
        disabled={isSending || isVerifying}
      />

      <button
        onClick={sendOtp}
        disabled={isSending || !phone}
        className="mt-2 w-full font-semibold rounded-md px-4 py-2 bg-black text-white"
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
            className="mt-2 w-full px-4 py-2 bg-green-600 font-semibold text-white"
          >
            {isVerifying ? "Verifying..." : "Verify & Login"}
          </button>
        </div>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
