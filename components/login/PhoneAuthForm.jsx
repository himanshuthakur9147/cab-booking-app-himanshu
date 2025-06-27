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

  const recaptchaLoadedRef = useRef(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.recaptchaVerifier &&
      document.getElementById("recaptcha-container")
    ) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => console.log("ReCAPTCHA solved"),
            "expired-callback": () => {
              window.recaptchaVerifier?.clear();
              window.recaptchaVerifier = null;
            },
          }
        );
        window.recaptchaVerifier.render().catch(console.error);
        recaptchaLoadedRef.current = true;
      } catch (err) {
        console.error("ReCAPTCHA error:", err);
      }
    }
  }, []);

  const sendOtp = async () => {
    try {
      if (phone.length < 10) {
        alert("Enter a valid 10-digit number.");
        return;
      }
      if (!window.recaptchaVerifier) {
        alert("ReCAPTCHA not loaded. Please wait.");
        return;
      }

      setIsSending(true);
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmationResult(result);
      alert("OTP sent successfully!");
    } catch (err) {
      console.error("OTP send error:", err);
      alert("Failed to send OTP.");
      window.recaptchaVerifier?.clear();
      window.recaptchaVerifier = null;
    } finally {
      setIsSending(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setIsVerifying(true);
      const result = await confirmationResult.confirm(otp);
      const firebaseUser = result.user;
      const idToken = await firebaseUser.getIdToken();

      // Send token to server to create session
      const sessionRes = await fetch("/api/users/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      if (!sessionRes.ok) throw new Error("Session creation failed");

      // Wait for cookie to be usable
      await new Promise((res) => setTimeout(res, 300));

      const userRes = await fetch("/api/users/auth/me");
      const userData = await userRes.json();

      if (userData.loggedIn) {
        setUser(userData.user || userData);
        setIsAuthenticated(true);

        // Optionally close modal
        if (onSuccess) onSuccess();
        setShowModal(false);

        // Optional: Save user to DB
        console.log("")
      const saveUser=  await fetch("/api/users/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: "+91" + phone, user_id: firebaseUser.uid }),
        });
        const saveUserData = await saveUser.json();
        if(saveUserData.success){
          setIsAuthenticated(true);
          console.log("User saved successfully");
          alert("Login successful!");
        }
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      alert("OTP verification failed.");
    } finally {
      setIsVerifying(false);
    }
  };

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
        className="mt-2 w-full font-semibold rounded-md px-4 py-2 bg-dark-btn text-white disabled:opacity-60"
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
            className="mt-2 w-full px-4 py-2 bg-green-600 font-semibold text-white disabled:opacity-60"
          >
            {isVerifying ? "Verifying..." : "Verify & Login"}
          </button>
        </div>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
}
