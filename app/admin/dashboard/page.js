"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import BookingCard from "@/components/admin/BookingCard";
import AddVehicle from "@/components/admin/AddVehicle";

import UpdateVehicles from "@/components/admin/UpdateVehicles";
import AllVehicles from "@/components/admin/AllVehicles";
import WalletDashboard from "@/components/admin/WalletDashboard";
import Transactions from "@/components/admin/Transactions";

const Page = () => {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("bookings");

  const tabs = [
    { key: "add", label: "Add Vehicle" },
    { key: "all", label: "All Vehicles" },
    { key: "vehicles", label: "Update Vehicle" },
    { key: "bookings", label: "All Bookings" },
    { key: "wallet", label: "Wallet Dashboard" },
    { key: "transactions", label: "View Transactions" },
  ];

 useEffect(() => {
   const getUser = async () => {
     if (isAuthenticated && user.role === "admin") {
       try {
         const res = await fetch("/api/users/get_user", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ phone: user.phoneNumber }),
         });
         const data = await res.json();
         if (data.user.role !== "admin") router.push("/");
       } catch (err) {
         console.error("Request failed:", err);
         router.push("/");
       }
     }
   };
   const fetchAllBookings = async () => {
     const res = await fetch("/api/bookings");
     const data = await res.json();
     setBookings(data.bookings);
   };
    getUser();
   fetchAllBookings();
 }, [isAuthenticated, user]);

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-xl text-center pb-6 text-gray-800 font-bold">ADMIN DASHBOARD</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <div className="border border-gray-400 rounded-md overflow-hidden flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-semibold cursor-pointer uppercase border-r border-gray-300 last:border-r-0 ${
                activeTab === tab.key
                  ? "bg-dark-btn text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-4  shadow rounded-md">
        {activeTab === "add" && <AddVehicle />}
      
     
        {activeTab === "all" && <AllVehicles />}
        {activeTab === "vehicles" && <UpdateVehicles />}
        {activeTab === "bookings" && (
  bookings.length === 0 ? (
    <div className="text-center text-gray-500 py-12">
      <h2 className="text-2xl font-semibold mb-2">No Bookings Available</h2>
      <p className="text-sm">All bookings will appear here when available.</p>
    </div>
  ) : (
    bookings.map((booking) => (
      <BookingCard key={booking._id} booking={booking} />
    ))
  )
)}
  {activeTab === "wallet" && <WalletDashboard adminPhone={user.user.phone} setActiveTab={setActiveTab} />}
  {activeTab === "transactions" && <Transactions />}
      </div>
    </div>
  );
};

export default Page;
