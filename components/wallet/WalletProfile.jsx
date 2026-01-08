"use client";

import { useState, useEffect } from "react";
import { FaWallet, FaRupeeSign } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import Navbar from "../Navbar";

export default function WalletProfile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) setLoading(false);
  }, [user]);

  if (loading) {
    return (
      <p className="text-center py-10 text-gray-600">Loading your wallet...</p>
    );
  }

  const walletBalance = user.user.walletBalance || 0;

  return (
    <>
      <Navbar />
    
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-sm bg-white border rounded-xl shadow-md p-6 flex flex-col items-center">
    
    <div className="flex items-center gap-3 mb-4">
      <FaWallet className="text-blue-600 text-2xl" />
      <h2 className="text-xl font-semibold text-gray-800">Wallet Balance</h2>
    </div>

    <div className="flex items-center gap-2 mb-2">
      <FaRupeeSign className="text-gray-700 text-lg" />
      <span className="text-4xl font-bold text-gray-900">
        {walletBalance.toLocaleString("en-IN")}
      </span>
    </div>

    <p className="text-sm text-gray-500 mt-1">Available balance</p>
  </div>
</div>

    </>
  );
}
