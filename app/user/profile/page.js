// app/user/profile/page.jsx
"use client";

import ProtectedRoute from "@/components/login/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    allowWhatsapp: false,
  });

  const [loading, setLoading] = useState(false);

  // Fetch user data on load (optional)
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/users/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser((prev) => ({
          ...prev,
          phone: data.user.phone || "",
          name: data.user.name || "",
          email: data.user.email || "",
          allowWhatsapp: data.user.allowWhatsapp || false,
        }));
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/users/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const result = await res.json();
      if (res.ok) {
        alert("Profile updated successfully!");
      } else {
        alert("Update failed: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
    <Navbar />
    <div className="container max-w-[30%] mx-auto py-12 ">
      <h1 className="text-2xl font-bold mb-6">Personal Info</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border border-gray-500 w-full p-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-500 w-full p-2 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border border-gray-500 w-full p-2 rounded"
          disabled
        />

        <label className="flex  gap-2 text-xs">
          <input
            type="checkbox"
            name="allowWhatsapp"
            checked={user.allowWhatsapp}
            onChange={handleChange}
            className="accent-green-600 w-4 h-4"
          />
         Allow Savaari to communicate over Whatsapp & SMS for Trip-related Details & Offers
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
    </ProtectedRoute>
  );
}
