"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext"; // ✅ use auth context
import RouteLoader from "@/components/Loader/RouteLoader";

export default function UserProfile() {
  const { isAuthenticated, user, authgear } = useAuth(); // ✅ grab authgear instance
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  // ✅ Get Authgear access token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await authgear?.getAccessToken();
        if (accessToken) {
          setToken(accessToken);
        } else {
          console.warn("No access token found");
        }
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    if (isAuthenticated && authgear) {
      fetchToken();
    }
  }, [isAuthenticated, authgear]);

  // ✅ Fetch user details from DB
  useEffect(() => {
    const getUser = async () => {
      if (isAuthenticated && user !== null) {
        try {
          const res = await fetch("/api/users/get_user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone: user.user.phone }),
          });

          const data = await res.json();

          if (res.ok) {
            setUserData(data.user);
          } else {
            console.error("Fetch error:", data.error);
          }
        } catch (err) {
          console.error("Request failed:", err);
        }
      }
    };

    getUser();
  }, [isAuthenticated, user]);

  // ✅ Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,phone:user.phoneNumber
    }));
  };

  // ✅ Submit profile update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/users/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Profile updated successfully!");
      } else {
        alert("Update failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {userData !== null ? (
        <div className="container max-w-[30%] mx-auto py-12">
          <h1 className="text-2xl font-bold mb-6">Personal Info</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={userData.name || ""}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-gray-500 w-full p-2 rounded"
              required
            />

            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-500 w-full p-2 rounded"
              required
            />

            <input
              type="text"
              name="phone"
              value={userData.phone || ""}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-500 w-full p-2 rounded"
              disabled
            />

            <label className="flex gap-2 text-xs">
              <input
                type="checkbox"
                name="allowWhatsapp"
                checked={userData.allowWhatsapp || false}
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
      ) : (
        <RouteLoader />
      )}
    </>
  );
}
